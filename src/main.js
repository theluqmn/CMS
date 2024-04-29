import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 1000,
	background: [0, 0, 0]
});

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Loading sprites
k.loadSprite("bean", "sprites/bean.png");

// Game data
wallet = {"usd": 0, "crypto": {"btc": 0, "eth": 0}}
game = {
	"power": {
		"consumption": 0,
		"production": 0
	},
	"mining": {
		"hashrate": 0,
		"btc": {
			"difficulty": 10000,
			"hashrate": 0,
			"miningRate": 0
		}
	},
	"exchange": {
		"btc": 51025,
		"eth": 10000,
		"log": []
	}
};

// Importing other scripts
import { walletScene } from './scenes/wallet';
import { exchangeScene } from './scenes/exchange';
import { miningScene } from './scenes/mining';

miningScene()
walletScene()
exchangeScene()

k.go("mining");