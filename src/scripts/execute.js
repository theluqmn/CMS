import { wallet, game } from "../main";
import { ownedGPU, gpu } from "./data";

export function execute() {
    // Async function
    (async () => {

       let cycle = 0;

       while (true) {
            game.mining.hashrate = 0;
            game.mining.miningRate = 0;
            game.power.consumption = 0;

            /*
            Loops around all power generators
            */

            /*
            Loop all the owned GPUs, then add up the hashrate
            */
            for (let i = 0; i < ownedGPU.length; i++) {
                let currentGPU = ownedGPU[i];
                // Power consumption calculation
                game.power.consumption += gpu[currentGPU.company][currentGPU.product][currentGPU.model].powerConsumption;

                // Hashrate calculation
                game.mining.hashrate += gpu[currentGPU.company][currentGPU.product][currentGPU.model].hashrate;
            };

            // Mining rate
            game.mining.miningRate = game.mining.hashrate / game.mining.difficulty;

            // Update wallet, mining rate
            wallet.crypto.btc += game.mining.miningRate;
            game.mining.totalMined += game.mining.miningRate;

            // Every cycle is delayed by 1000ms
            console.log(`Mining cycle ${cycle}\n- Hashrate: ${game.mining.hashrate}\n- Mining rate: ${game.mining.miningRate}\n- Power consumption: ${game.power.consumption}\n- Wallet: ${wallet.crypto.btc}\n`);
            cycle++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        };
    })();
};