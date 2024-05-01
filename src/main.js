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
export const wallet = {"usd": 0, "crypto": {"btc": 0, "eth": 0}}
export const game = {
	"power": {
		"consumption": 0,
		"production": 0,
		"gridPrice": 0.12
	},
	"mining": {
		"hashrate": 0,
		"difficulty": 1000,
		"miningRate": 0,
		"totalMined": 0
	},
	"exchange": {
		"btc": 51025,
		"eth": 10000,
		"log": []
	}
};

// Importing other scripts
import { execute } from './scripts/execute';
import { walletScene } from './scenes/wallet';
import { exchangeScene } from './scenes/exchange';
import { miningScene } from './scenes/mining';

execute();
miningScene();
walletScene();
exchangeScene();

k.go("mining");