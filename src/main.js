import kaboom from "kaboom"

var btc = 0; var usd = 0
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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const k = kaboom()
class topBar{
	// Mining group

	// Wallet group
	walletFrame = k.add([
		k.rect(600,50),
		k.pos(10, 10),
		k.anchor("topleft"),
		k.color(100,100,100)
	]);
	
	btcText = k.add([
		k.text(""),
		k.pos(20,20),
		k.anchor("topleft")
	]);
	
	usdText = k.add([
		k.text(""),
		k.pos(300,20),
		k.anchor("topleft")
	]);

	// Exchange group
}

function execute() {
	// Mining calculation script
	(async () => {
		while (true) {
			for (let i = 0; i < user_data.gpu.length; i++) {
				const gpuIndex = user_data.gpu[i]
				btc += (gpuIndex.hashrate / 250000);
			}

			usd += 1.356;
			bar.btcText.text = `BTC: ${btc.toFixed(3)}`
			bar.usdText.text = `USD: ${usd.toFixed(3)}`
			console.log(`BTC: ${btc}`)
			await delay(1000);
		}
	})();

	// Energy calculation script
	(async () => {
		while (true) {
			await delay(1000)
		}
	})();
}

k.scene("mining", () => { // Mining 
	//Kaboom stuff
	k.setBackground(0,0,0)

	bar = new topBar();

	execute()
});

k.scene("wallet", () => {
});

k.scene("exchange", () => {});

k.scene("shop", () => {});

k.go("mining");