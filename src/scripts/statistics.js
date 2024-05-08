import { game } from "../main";

export function MiningStats(coin, view) {
    let referenceCoin = game.mining[coin]

    let totalHashrate = 0; let averageHashrate = 0;
    let totalMiningRate = 0; let averageMiningRate = 0;

    switch(view) {
        case "average":
            // Find average hashrate based on log array
            for(let i = 0; i < referenceCoin.log.length; i++) {
                totalHashrate += referenceCoin.log[i].hashrate;
            };
            averageHashrate = totalHashrate / game.mining.log.length;

            // Find average mining rate based on log array
            for(let i = 0; i < referenceCoin.log.length; i++) {
                totalMiningRate += referenceCoin.log[i].miningRate;
            };
            averageMiningRate = totalMiningRate / game.mining.log.length;

            return {
                hashrate: averageHashrate,
                miningRate: averageMiningRate,
            };
            
        case "total":
            // Find total hashrate based on log array
            for(let i = 0; i< referenceCoin.log.length; i++) {
                totalHashrate += referenceCoin.log[i].hashrate;
            };

            // Find total mining rate based on log array
            for(let i = 0; i < referenceCoin.log.length; i++) {
                totalMiningRate += referenceCoin.log[i].miningRate;
            };

            return {
                hashrate: totalHashrate,
                miningRate: totalMiningRate,
            };
    };
};
