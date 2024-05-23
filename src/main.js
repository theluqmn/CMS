import kaboom from 'kaboom';
k = kaboom({
	width: 1600,
	height: 900,
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
		cycle: 0,
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
		volatility: .25,
		btc: 51025,
		eth: 9675,
		log: []
	},
	infobar: {
		crypto: "btc"
	}
};

// Importing scripts
import { Execute } from './scripts/Execute';

import { gpuStore, powerStore } from './scripts/Store';
import { Exchange } from './scripts/Exchanger';

// Importng UIs
import { MiningScene } from './ui/Mining';
import { WalletScene } from './ui/Wallet';
import { ExchangeScene } from './ui/Exchange';
import { StoreScene } from './ui/Store';
import { TitleScene } from './ui/game/Title';

TitleScene(); MiningScene(); WalletScene(); ExchangeScene(); StoreScene();

// Run
Execute();
gpuStore("nvidia", "geforce", "rtx4080");
powerStore("diesel", "DG2");

Exchange("usd", "eth", 5680);

// Start at mining scene
k.go("title");