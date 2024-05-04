import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 1000,
	background: [0, 0, 0]
});

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Game data
export const wallet = {
	usd: 150,
	crypto: {
		btc: 0,
		eth: 0
	}
};
export const game = {
	power: {
		consumption: 0,
		production: 0,
		grid: 0,
		gridPrice: 0.012, // Paid per watt,
		log: []
	},
	mining: {
		hashrate: 0,
		difficulty: 215,
		miningRate: 0,
		totalMined: 0,
		log: []	
	},
	exchange: {
		btc: 51025,
		eth: 10000,
		log: []
	}
};

// Importing other scripts
import { execute } from './scripts/execute';
// Import scenes

execute();