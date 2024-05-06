/*
This function is responsible for the action of the following:
- token-USD
- USD-token
- token-token
- USD-USD
*/

import { game, wallet } from "../main";

export function Exchange(source, target, amount) {
    let value = 0;

    // Deduction at source
    if (source == "btc" || source == "eth") {
        wallet.crypto[source] -= amount;
        value = amount * game.exchange[source]
    } else {
        wallet.usd -= amount;
        value = amount;
    }

    // Addition at target
    if (target == "btc" || target =="eth") {
        value = value / game.exchange[target];
        wallet.crypto[target] += value;
    } else {
        wallet.usd += value;
    }

    console.log(`Exchange "${source}" ${amount} to "${target}" ${value} is successful`)
    game.exchange.log.push({
        source: source,
        amount: amount,
        target: target
    })
};
