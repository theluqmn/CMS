import kaboom from "kaboom"

var btc = 0; var usd = 0

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const k = kaboom()

k.scene("mining", () => {
	//Kaboom stuff
	k.setBackground(0,0,0)

	// Wallet category
	const walletFrame = k.add([
		k.rect(600,50),
		k.pos(10, 10),
		k.anchor("topleft"),
		k.color(100,100,100)
	]);

	const btcText = k.add([
		k.text(""),
		k.pos(20,20),
		k.anchor("topleft")
	]);

	const usdText = k.add([
		k.text(""),
		k.pos(300,20),
		k.anchor("topleft")
	]);
	
	// Mining script
	(async () => {
		while (true) {
			btc += 0.1;
			usd += 1.356;
			btcText.text = `BTC: ${btc.toFixed(3)}`
			usdText.text = `USD: ${usd.toFixed(3)}`
			await delay(1000);
		}
	})();
});

k.go("mining");