import { game } from "../main";

export function CryptoPricing() {
    // Random number
    game.exchange.btc += (Math.random() * (game.exchange.btc * game.exchange.volatility)) - ((game.exchange.btc * game.exchange.volatility) / 2)
    game.exchange.eth += (Math.random() * (game.exchange.eth * game.exchange.volatility)) - ((game.exchange.eth * game.exchange.volatility) / 2)

    // Increments/decrements the crypto prices. 
}