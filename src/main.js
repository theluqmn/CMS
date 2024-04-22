import kaboom from "kaboom";

var btc = 0; var usd = 0; 
var btcMiningRate = 0; var miningHash = 0
var miningDifficulty = 100000

var powerConsumption = 0;

var btcExchangeRate = 51000;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const k = kaboom();

// Number formatting function
function NumRound(number) {
	if (number >= 1000 && number < 1000000) {
        // Thousa
        number = (number / 1000).toFixed(2);
        number = `${number}k`;
        return number;

    } else if (number >= 1000000 && number < 1000000000) {
        number = (number / 1000000).toFixed(2);
        number = `${number}m`;
        return number;

    } else if (number >= 1000000000 && number < 1000000000000) {

        number = (number / 1000000000).toFixed(2);
        number = `${number}b`;
        return number;
    } else {
		return number.toFixed(2);
	}
};

// User data
let user_data = {
	"gpu": [
		{
			"company": "Nvidia",
			"name": "GeForce RTX 4090",
			"hashrate": 156000,
			"power": 450,
			"heatscore": 80,
			"lifespan": 220,
			"price": 1099
		},
		{
			"company": "Nvidia",
			"name": "GeForce RTX 4080 Super",
			"hashrate": 120500,
			"power": 400
		}
	],
}

// Stores game statistics
let statistics = {
	"mining": {
		"AlltimeBtcMined": 0,
		"btcHashrate": [],
		"miningRate": [],
		"difficulty": []
	},
	"exchange": {
		"transactions": [],
		"btcRate": []
	},
	"power": {
		"AlltimePowerConsumed": 0,
		"powerConsumption": []
	}
};

class topBar{
	// Command keys

	miningSceneCommandText = k.add([
		k.text("[Q] Mining"),
		k.pos(0, 10),
		k.color(150, 150, 150),
	]);

	walletSceneCommandText = k.add([
		k.text("[W] Wallet"),
		k.pos(250, 10),
		k.color(150, 150, 150),
	]);

	exchangeSceneCommandText = k.add([
		k.text("[E] Exchange"),
		k.pos(500, 10),
		k.color(150, 150, 150),
	])

	// Mining group
	miningFrame = k.add([
		k.rect(300, 50),
		k.pos(10, 50),
		k.color(50, 50, 50)
	]);

	miningRateText = k.add([
		k.text(""),
		k.pos(20, 60),
	]);

	// Wallet group
	walletFrame = k.add([
		k.rect(600, 50),
		k.pos(320, 50),
		k.color(50, 50, 50)
	]);
	
	btcText = k.add([
		k.text(""),
		k.pos(330, 60),
	]);
	
	usdText = k.add([
		k.text(""),
		k.pos(630, 60),
	]);

	// Exchange group
	exchangeFrame = k.add([
		k.rect(350, 50),
		k.pos(930, 50),
		k.color(50, 50, 50)
	]);

	exchangeRateText = k.add([
		k.text(""),
		k.pos(940, 60)
	]);

	//	Alert
	alertText = k.add([
		k.text(""),
		k.pos(1300, 60)
	]);

	// Refresh the text
	refreshText = function(currentScene) {
		// Updating text to latest rates and digits
		bar.miningRateText.text = `${NumRound(miningHash)} Hash`;
		bar.btcText.text = `BTC: ${NumRound(btc)}`;
		bar.usdText.text = `USD: ${NumRound(usd)}`;
		bar.exchangeRateText.text = `BTC-USD: ${NumRound(btcExchangeRate)}`

		// Highlighting active page
		if (currentScene == "mining") {
			bar.miningSceneCommandText.color = k.rgb(255, 255, 255);

		} else if (currentScene == "wallet") {
			bar.walletSceneCommandText.color = k.rgb(255, 255, 255);

		} else if (currentScene == "exchange") {
			bar.exchangeSceneCommandText.color = k.rgb(255, 255, 255)
		}
	};

	
	alert = async(text) => {
		bar.alertText.text = `${text}`;
		await delay(2000);
		bar.alertText.text = "";
	}
}


function execute() {
	(async () => {
	  while (true) {
		miningHash = 0; btcMiningRate = 0;
		powerConsumption = 0;
  
		for (let i = 0; i < user_data.gpu.length; i++) {
		  // Mining
		  const gpuIndex = user_data.gpu[i];
		  btcMiningRate += (gpuIndex.hashrate / miningDifficulty);
		  
		  miningHash += gpuIndex.hashrate;
		  
		  // Power consumption
		  powerConsumption += gpuIndex.power;
		};
		btc+= btcMiningRate;
  
		// Statistics
		const mineStats = statistics.mining || {};
		mineStats.AlltimeBtcMined = (mineStats.AlltimeBtcMined || 0) + btcMiningRate;
		mineStats.btcHashrate.push(miningHash);
		mineStats.miningRate.push(btcMiningRate);
		mineStats.difficulty.push(miningDifficulty);
  
		const powerStats = statistics.power || {};
		powerStats.AlltimePowerConsumed = (powerStats.AlltimePowerConsumed || 0) + powerConsumption;
		powerStats.powerConsumption.push(powerConsumption);
  
		statistics.mining = mineStats;
		statistics.power = powerStats;

		await delay(1000);
	  };
	})();
  }
  

function inputs() {
	onKeyPress("q" || "Q", () => {
		k.go("mining");
	});

	onKeyPress("w" || "W", () => {
		k.go("wallet");
	});

	onKeyPress("e" || "E", () => {
		k.go("exchange");
		
	});
};

execute();

// Mining page
k.scene("mining", () => {

	k.setBackground(0,0,0);

	bar = new topBar();

	const hashrateMiningText = k.add([
		k.text(""),
		k.pos(10, 200)
	]);

	const btcMiningRateMiningText = k.add([
		k.text(""),
		k.pos(10, 250)
	]);

	const btcAllTimeMiningText = k.add([
		k.text(""),
		k.pos(10, 300)
	]);

	const powerConsumptionMiningText = k.add([
		k.text(""),
		k.pos(10, 500)
	]);

	inputs();
	k.onUpdate(() => {
		bar.refreshText("mining");

		hashrateMiningText.text = `Hashrate: ${NumRound(miningHash)}/s`
		btcMiningRateMiningText.text = `BTC mining rate: ${NumRound(btcMiningRate)}/s`
		btcAllTimeMiningText.text = `Total mined BTC: ${NumRound(statistics.mining.AlltimeBtcMined)}`
		
		powerConsumptionMiningText.text = `Power consumption: ${NumRound(powerConsumption)}W`;
	});
});

// Wallet page
k.scene("wallet", () => {
	k.setBackground(0, 0, 0);

	bar = new topBar();
	
	const usdWalletText = k.add([
		k.text(""),
		k.pos(10, 200)
	]);

	const btcWalletText = k.add([
		k.text(""),
		k.pos(10, 250)
	]);

	inputs();
	k.onUpdate(() => {
		bar.refreshText("wallet");

		usdWalletText.text = `USD: ${NumRound(usd)}`;
		btcWalletText.text = `BTC: ${NumRound(btc)}`
	});

});

// Exchange page
k.scene("exchange", () => {
	k.setBackground(0, 0, 0);

	bar = new topBar();

	const exchangeRateExchangeText = k.add([
		k.text(""),
		k.pos(10, 200)
	]);

	const btcValueExchangeText = k.add([
		k.text(""),
		k.pos(10, 250)
	]);

	const exchangeBtcExchangeText = k.add([
		k.text("Press space to exchange (all)"),
		k.pos(10, 800),
		k.color(0, 241, 18),
		k.anchor("botleft")
	]);

	onKeyPress("space", () => {
		usd += (btc * btcExchangeRate);
		btc = 0;
		bar.alert("Exchange successful")
	});

	inputs();
	k.onUpdate(() => {
		bar.refreshText("exchange");

		exchangeRateExchangeText.text = `BTC-USD Exchange rate: USD ${NumRound(btcExchangeRate)}`
		btcValueExchangeText.text = `Your BTC value: USD ${NumRound(btc * btcExchangeRate)}`
	});
});

k.scene("shop", () => {});

k.go("mining");