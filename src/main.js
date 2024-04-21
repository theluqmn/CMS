import kaboom from "kaboom";

var btc = 0; var usd = 0; 
var btcMiningRate = 0; var miningHash = 0
var miningDifficulty = 100000

var powerConsumption = 0;

var btcExchangeRate = 51000;

var currentScene = "home"; var indexScene = 0;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
		"btcHashrate": {
			"highest": 0, "lowest": 0,
			"history": [],
		},
		"miningRate": {
			"highest": 0, "lowest": 0,
			"history": [],
		},
		"difficulty": {
			"highest": 0, "lowest": 0,
			"history": [],
		}
	},
	"exchange": {
		"transactions": [],
		"btc": {
			"most-owned": 0,
			"rate" : {
				"highest": 0, "lowest": 0,
				"history": [],
			},
		},
	},
	"power": {
		"AlltimePowerConsumed": 0,
		"powerConsumption": {
			"highest": 0, "lowest": 0,
			"history": [],
		}
	}
}


const k = kaboom();
class topBar{
	// Command keys

	commandTextMining = k.add([
		k.text("[Q] Mining"),
		k.pos(0, 10),
		k.color(255, 255, 255),
		k.anchor("topleft")
	]);

	commandTextWallet = k.add([
		k.text("[W] Wallet"),
		k.pos(250, 10),
		k.color(255, 255, 255),
		k.anchor("topleft")
	]);

	// Mining group
	miningFrame = k.add([
		k.rect(300, 50),
		k.pos(10, 50),
		k.anchor("topleft"),
		k.color(50, 50, 50)
	]);

	miningRateText = k.add([
		k.text(""),
		k.pos(20, 60),
		k.anchor("topleft")
	]);

	// Wallet group
	walletFrame = k.add([
		k.rect(600, 50),
		k.pos(320, 50),
		k.anchor("topleft"),
		k.color(50, 50, 50)
	]);
	
	btcText = k.add([
		k.text(""),
		k.pos(340, 60),
		k.anchor("topleft")
	]);
	
	usdText = k.add([
		k.text(""),
		k.pos(640, 60),
		k.anchor("topleft")
	]);

	// Exchange group

	// Refresh the text
	refreshText = function(currentScene){
		bar.miningRateText.text = `${NumRound(miningHash)} Hash`;
		bar.btcText.text = `BTC: ${NumRound(btc)}`;
		bar.usdText.text = `USD: ${NumRound(usd)}`;

		if (currentScene == "mining") {
			bar.commandTextMining.color = k.rgb(195, 255, 220);
		} else if (currentScene == "wallet") {
			bar.commandTextWallet.color = k.rgb(195, 255, 220);
		};
	};
}

function execute() {
	(async () => {
		while (true) {
			miningHash = 0; btcMiningRate = 0;
			powerConsumption = 0;

			for (let i = 0; i < user_data.gpu.length; i++) {
				// Mining
				const gpuIndex = user_data.gpu[i];
				btc += (gpuIndex.hashrate / miningDifficulty);
				btcMiningRate += (gpuIndex.hashrate / miningDifficulty);
				
				miningHash += gpuIndex.hashrate;
				
				// Power consumption
				powerConsumption += gpuIndex.power;
			};

			// Statistics
			statistics.mining.AlltimeBtcMined += btcMiningRate;
			statistics.power.AlltimePowerConsumed += powerConsumption;
			
			usd += 1.356;
			console.log(`BTC: ${btc}`);

			await delay(1000);
		}
	})();
};

function inputs() {
	onKeyPress("q" || "Q", () => {
		k.go("mining");
	});

	onKeyPress("w" || "W", () => {
		k.go("wallet");
	});
};

execute();

k.scene("mining", () => { // Mining 
	//Kaboom stuff
	k.setBackground(0,0,0);

	bar = new topBar();

	const powerConsumptionText = k.add([
		k.text(""),
		k.pos(500, 500),
		k.anchor("topleft")
	]);

	const powerConsumptionAlltimeText = k.add([
		k.text(""),
		k.pos(500, 550),
		k.anchor("topleft")
	]);

	inputs();

	k.onUpdate(() => {
		bar.refreshText("mining");
		
		powerConsumptionText.text = `Power consumption: ${NumRound(powerConsumption)}W`;
		powerConsumptionAlltimeText.text = `All-time power consumption: ${NumRound(statistics.power.AlltimePowerConsumed)}W`;
	});
});

k.scene("wallet", () => {

	k.setBackground(0, 0, 0);

	bar = new topBar();
	
	inputs();

	k.onUpdate(() => {
		bar.refreshText("wallet");
	});

});

k.scene("exchange", () => {});

k.scene("shop", () => {});

k.go("mining");