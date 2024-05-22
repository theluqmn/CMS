import { game, wallet } from "../main";
import { gpu, ownedGPU, powerGenerator, ownedPowerGenerator } from "../data";
import { CryptoPricing } from "./CryptoPricing";

export function Execute() {
    (async () => {

        while (true) {
            game.mining.cycle++;

            // Crypto pricing
            CryptoPricing();

            // Reset values for each cycle
            game.power.consumption = 0; game.power.production = 0;
            game.mining.btc.hashrate = 0; game.mining.eth.hashrate = 0;

            // Loop each ownedGPU for mining
            for (let i = 0; i < ownedGPU.length; i++) {
                currentGPU = ownedGPU[i];
                referenceGPU = gpu[currentGPU.company][currentGPU.product][currentGPU.model];
                coin = ownedGPU[i].crypto;
                
                game.power.consumption += referenceGPU.powerConsumption * currentGPU.clock;

                switch (coin) { // Mine according to coin
                    case "btc":
                        game.mining.btc.hashrate += referenceGPU.hashrate * currentGPU.clock;
                        break;
                    case "eth":
                        game.mining.eth.hashrate += referenceGPU.hashrate * currentGPU.clock;
                        break;
                };
            };
            
            // Loop owned power generators
            for (let i = 0; i < ownedPowerGenerator.length; i++) {
                currentPowerGenerator = ownedPowerGenerator[i];
                referencePowerGenerator = powerGenerator[currentPowerGenerator.type][currentPowerGenerator.model];

                if (referencePowerGenerator.upkeep < wallet.usd) {
                    game.power.production += referencePowerGenerator.powerProduction;
                    wallet.usd -= referencePowerGenerator.upkeep; // Deduct wallet for power generation upkeep
                }
            };
            
            // Check if consuming more power than produced
            if (game.power.production < game.power.consumption) {
                console.log("Power consumption is higher than production")
                game.power.grid = game.power.production - game.power.consumption;
                wallet.usd += game.power.grid * game.power.gridPrice; // Deduct wallet by how much power is taken from grid
                
            } else {
                console.log("Power production is higher than consumption")
                game.power.grid = 0;
            };

            // Calculate mining rate
            game.mining.btc.miningRate = game.mining.btc.hashrate / game.mining.btc.difficulty;
            game.mining.eth.miningRate = game.mining.eth.hashrate / game.mining.eth.difficulty;

            // Add to wallet
            wallet.crypto.btc += game.mining.btc.miningRate;
            wallet.crypto.eth += game.mining.eth.miningRate;

            // Logging
            game.mining.btc.totalMined += game.mining.btc.miningRate;
            game.mining.btc.log.push({ // BTC mining
                cycle: game.mining.cycle,
                hashrate: game.mining.btc.hashrate,
                miningRate: game.mining.btc.miningRate
            });
            game.mining.eth.totalMined += game.mining.eth.miningRate;
            game.mining.eth.log.push({ // ETH mining
                cycle: game.mining.cycle,
                hashrate: game.mining.eth.hashrate,
                miningRate: game.mining.eth.miningRate
            });
            game.power.log.push({ // Power
                cycle: game.mining.cycle,
                consumption: game.power.consumption,
                production: game.power.production,
                grid: game.power.grid
            });

            console.log(`Cycle: ${game.mining.cycle}\nBTC: ${game.mining.btc.miningRate} / ${wallet.crypto.btc}\nETH: ${game.mining.eth.miningRate} / ${wallet.crypto.eth}\nPower: ${game.power.production} / ${game.power.consumption}\nUSD: ${wallet.usd}\n`);

            // Each cycle happens every 1000ms (one second)
            await new Promise(r => setTimeout(r, 1000));
        }
    })();
};