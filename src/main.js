import kaboom from "kaboom"

var btc = 0; var usd = 0; 
var btcMiningRate = 0; var miningHash = 0
var miningDifficulty = 1000000

var powerConsumption = 0;

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

let statistics = { // Dictionary for storing game statistics
	"mining": {
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
	}
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const k = kaboom()
class topBar{
	// Mining group
	miningFrame = k.add([
		k.rect(300, 50),
		k.pos(10,10),
		k.anchor("topleft"),
		k.color(100,100,100)
	])

	miningRateText = k.add([
		k.text(""),
		k.pos(20,20),
		k.anchor("topleft")
	])

	// Wallet group
	walletFrame = k.add([
		k.rect(600,50),
		k.pos(320, 10),
		k.anchor("topleft"),
		k.color(100,100,100)
	]);
	
	btcText = k.add([
		k.text(""),
		k.pos(340,20),
		k.anchor("topleft")
	]);
	
	usdText = k.add([
		k.text(""),
		k.pos(640,20),
		k.anchor("topleft")
	]);

	// Exchange group
}

function execute() {
	// Mining calculation script
	(async () => {
		while (true) {
			miningHash = 0; btcMiningRate = 0
			for (let i = 0; i < user_data.gpu.length; i++) {
				const gpuIndex = user_data.gpu[i]
				btc += (gpuIndex.hashrate / miningDifficulty);
				btcMiningRate += (gpuIndex.hashrate / miningDifficulty)
				miningHash += gpuIndex.hashrate
			}

			usd += 1.356;
			bar.miningRateText.text = `${miningHash.toFixed(3)}`
			bar.btcText.text = `BTC: ${btc.toFixed(3)}`
			bar.usdText.text = `USD: ${usd.toFixed(3)}`
			console.log(`BTC: ${btc}`)
			await delay(1000);
		}
	})();

	// Energy calculation script
	(async () => {
		while (true) {
			powerConsumption = 0
			for (let i = 0; i < user_data.gpu.length; i++) {
				const gpuIndex = user_data.gpu[i]
				powerConsumption += gpuIndex.power
			}

			await delay(1000)
		}
	})();
}

k.scene("mining", () => { // Mining 
	//Kaboom stuff
	k.setBackground(0,0,0)

	bar = new topBar();

	const powerConsumptionText = k.add([
		k.text(""),
		k.pos(500,500),
		k.anchor("topleft")
	])
	
	k.onUpdate(() => {
		powerConsumptionText.text = `Power consumption: ${powerConsumption}`
	})
	
	execute()
});

k.scene("wallet", () => {
});

k.scene("exchange", () => {});

k.scene("shop", () => {});

k.go("mining");