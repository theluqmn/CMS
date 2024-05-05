import { game, wallet } from "../main";
import { gpu, ownedGPU, powerGenerator, ownedPowerGenerator } from "../data";

export function Execute() {
    (async () => {
        let cycle = 0;

        while (true) {
            cycle++;

            // Reset values
            game.mining.hashrate = 0;

            // Loop each ownedGPU for mining
            for (let i = 0; i < ownedGPU.length; i++) {
                currentGPU = ownedGPU[i];
                referenceGPU = gpu[currentGPU.company][currentGPU.product][currentGPU.model];
                coin = ownedGPU[i].crypto;
                
                game.power.consumption += referenceGPU.power * currentGPU.clock;

                switch (coin) { // Coin-based
                    case "btc":
                        game.mining.btc.hashrate += referenceGPU.hashrate * currentGPU.clock;
                    case "eth":
                        game.mining.eth.hashrate += referenceGPU.hashrate * currentGPU.clock;;
                };
            };

            game.mining.btc.miningRate = game.mining.btc.hashrate / game.mining.btc.difficulty;
            game.mining.eth.miningRate = game.mining.eth.hashrate / game.mining.eth.difficulty;

            // Each cycle happens every 1000ms (one second)
            await new Promise(r => setTimeout(r, 1000));
        }
    })();
}