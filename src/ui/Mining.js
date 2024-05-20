import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";
import { NumRound } from "../scripts/NumRound";
import { game } from "../main";

export function MiningScene() {
    k.scene("mining", () => {
        let selectedCrypto = "BTC";

        // Mining Title
        k.add([
            k.text("Mining Scene"),
            k.pos(20, 150)
        ]);

        // Mining Frame
        k.add([
            k.rect(790, 490),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        // Select coin
        const CoinHeading = k.add([
            k.text("Select a coin"),
            k.scale(0.75),
            k.pos(20, 210),
        ]);

        const CoinSelectFrame = k.add([ // Selection Frame
            k.rect(580, 55),
            k.pos(20, 250),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const CoinBTC = k.add([
            k.text("[BTC] Bitcoin"),
            k.pos(25, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        const CoinETH = k.add([
            k.text("[ETH] Ethereum"),
            k.pos(300, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        // Actual stats
        const hashrateHeading = k.add([ // Hashrate
            k.text("Hashrate"),
            k.scale(0.75),
            k.pos(20, 320),
        ]);

        const hashrateValue = k.add([
            k.text("10.000k"),
            k.pos(20, 350),
        ]);

        const miningRateHeading = k.add([ // Mining Rate
            k.text("Mining Rate"),
            k.scale(0.75),
            k.pos(20, 420),
        ]);

        const miningRateValue = k.add([
            k.text("100k"),
            k.pos(20, 450),
        ]);

        const usdRateHeading = k.add([ // USD Rate
            k.text("Coin value per cycle:"),
            k.scale(0.75),
            k.pos(20, 520),
        ]);

        const usdRateValue = k.add([
            k.text("100k"),
            k.pos(20, 550),
        ]);

        const totalMinedHeading = k.add([ // Total Mined
            k.text("Total Mined"),
            k.scale(0.75),
            k.pos(20, 620),
        ]);

        const totalMinedValue = k.add([
            k.text("100k"),
            k.pos(20, 650)
        ]);

        // Trigger functions
        CoinBTC.onClick(() => {
            selectedCrypto = "BTC";
            console.log("Changed selected coin to BTC");
        });

        CoinETH.onClick(() => {
            selectedCrypto = "ETH";
            console.log("Changed selected coin to ETH");
        });

        bar = new InfoBar();
        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("mining");

            // Based on the selected crypto
            switch (selectedCrypto) {
                case "BTC":
                    CoinBTC.color = k.rgb(255, 255, 255);
                    CoinETH.color = k.rgb(200, 200, 200);

                    hashrateValue.text = NumRound(game.mining.btc.hashrate);
                    miningRateValue.text = NumRound(game.mining.btc.miningRate);
                    usdRateValue.text = `USD ${NumRound(game.mining.btc.miningRate * game.exchange.btc)}`;
                    totalMinedValue.text = NumRound(game.mining.btc.totalMined);
                    break;

                case "ETH":
                    CoinETH.color = k.rgb(255, 255, 255);
                    CoinBTC.color = k.rgb(200, 200, 200);

                    hashrateValue.text = NumRound(game.mining.eth.hashrate);
                    miningRateValue.text = NumRound(game.mining.eth.miningRate);
                    usdRateValue.text = `USD ${NumRound(game.mining.eth.miningRate * game.exchange.eth)}`;
                    totalMinedValue.text = NumRound(game.mining.eth.totalMined);
                    break;
            };
        });
    });
};