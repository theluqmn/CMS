import { wallet, game } from "../main";
import { ownedGPU, gpu, ownedPowerGenerator, powerGenerator } from "./data";

export function execute() {
    // Async function
    (async () => {

       let cycle = 0;

       while (true) {
            // Reset values
            game.mining.hashrate = 0;
            game.mining.miningRate = 0;

            game.power.production = 0;
            game.power.consumption = 0;

            // Power production calculation
            for (let i = 0; i < ownedPowerGenerator.length; i++) {
                let currentGenerator = ownedPowerGenerator[i];
                game.power.production += powerGenerator[currentGenerator.type][currentGenerator.model].powerProduction;
            };

            // Hashrate and power consumption calculation
            for (let i = 0; i < ownedGPU.length; i++) {
                let currentGPU = ownedGPU[i];
                // Power consumption calculation
                game.power.consumption += gpu[currentGPU.company][currentGPU.product][currentGPU.model].powerConsumption;
                // Hashrate calculation
                game.mining.hashrate += gpu[currentGPU.company][currentGPU.product][currentGPU.model].hashrate;
            };

            // Set mining rate, update wallet and some stats
            game.mining.miningRate = game.mining.hashrate / game.mining.difficulty;
            wallet.crypto.btc += game.mining.miningRate;
            game.mining.totalMined += game.mining.miningRate;

            // Power production checks
            if (game.power.consumption > game.power.production) {
                game.power.grid = game.power.production - game.power.consumption;
                wallet.usd += game.power.grid * game.power.gridPrice;
            } else {
                game.power.grid = 0;
            }

            // Logging
            game.mining.log.push({ //Mining
                cycle: cycle,
                hashrate: game.mining.hashrate,
                miningRate: game.mining.miningRate,
            });
            game.power.log.push({ //Power
                cycle: cycle,
                production: game.power.production,
                consumption: game.power.consumption
            });
            // Cycle update
            console.log(
                `Cycle: ${cycle}` + 
                `\nHashrate: ${game.mining.hashrate}` + 
                `\nMining rate: ${game.mining.miningRate}\n` + 
                `\nPower production: ${game.power.production}` + 
                `\nPower consumption: ${game.power.consumption}` + 
                `\nPower grid: ${game.power.grid}` +
                `\nPower grid payment: ${Math.abs(game.power.grid * game.power.gridPrice)}\n` + 
                `\nBTC: ${wallet.crypto.btc}` + 
                `\nUSD: ${wallet.usd}`
            );
            cycle++;
            
            // Every cycle is delayed by 1000ms (one second)
            await new Promise(resolve => setTimeout(resolve, 1000));
        };
    })();
};