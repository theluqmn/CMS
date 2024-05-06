import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 1000,
	background: [0, 0, 0]
});

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Game data
export const wallet = {
	usd: 1590,
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
		btc: {
			hashrate: 0,
			difficulty: 21575,
			miningRate: 0,
			totalMined: 0,
			log: []
		},
		eth: {
			hashrate: 0,
			difficulty: 1000,
			miningRate: 0,
			totalMined: 0,
			log: []
		}
	},
	exchange: {
		btc: 51025,
		eth: 10000,
		log: []
	}
};

// Importing scripts
import { Execute } from './scripts/execute';

import { gpuStore } from './scripts/store';

// Importng UIs

// Run
Execute();
gpuStore("nvidia", "geforce", "rtx3090");