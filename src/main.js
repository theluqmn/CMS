import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 1000,
	background: [0, 0, 0]
});

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Game data
export const wallet = {
	usd: 10000,
	crypto: {
		btc: 0,
		eth: 0
	}
};
export const game = {
	power: {
		consumption: 0,
		production: 0,
		upkeep: 0,
		grid: 0,
		gridPrice: 0.024, // Paid per watt,
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
		eth: 9675,
		log: []
	}
};

// Importing scripts
import { Execute } from './scripts/execute';

import { gpuStore, powerStore } from './scripts/store';
import { miningStatistics } from './scripts/statistics';
import { Exchange } from './scripts/exchange';

// Importng UIs

// Run
Execute();
gpuStore("nvidia", "geforce", "rtx4080");
powerStore("diesel", "DG2");

miningStatistics("btc");
Exchange("usd", "btc", 5680);