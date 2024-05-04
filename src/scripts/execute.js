import { wallet, game } from "../main";
import { ownedGPU, gpu, ownedPowerGenerator, powerGenerator } from "./data";

export function execute() {
    // Async function
    (async () => {

       let cycle = 0;

       while (true) {
            
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
                console.log(`Power production deficit. Power from grid: ${game.power.grid}, paid: ${game.power.grid * game.power.gridPrice}`)

            } else {
                game.power.grid = 0;
                console.log("Power production is higher than consumption")
            }

            // Logging
            game.mining.log.push({
                cycle: cycle,
                hashrate: game.mining.hashrate,
                miningRate: game.mining.miningRate,
            });

            game.power.log.push({
                cycle: cycle,
                production: game.power.production,
                consumption: game.power.consumption
            });
            console.log(`Mining cycle ${cycle}\n- Hashrate: ${game.mining.hashrate}\n- Mining rate: ${game.mining.miningRate}\n- Power consumption: ${game.power.consumption}\n- Wallet: ${wallet.crypto.btc}\n`);
            cycle++;
            
            // Every cycle is delayed by 1000ms (one second)
            await new Promise(resolve => setTimeout(resolve, 1000));
        };
    })();
};