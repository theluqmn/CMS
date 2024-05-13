/*
This function is responsible for the action of the following:
- token-USD
- USD-token
- token-token
- USD-USD
*/

import { game, wallet } from "../main";

export function Exchange(base, target, amount) {
    let value = 0;

    // Deduction at base
    if (base == "btc" || base == "eth") {
        wallet.crypto[base] -= amount;
        value = amount * game.exchange[base]
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

    console.log(`Exchange "${base}" ${amount} to "${target}" ${value} is successful`)
    game.exchange.log.push({
        base: base,
        amount: amount,
        target: target
    })
};