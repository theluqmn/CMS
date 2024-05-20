import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";
import { NumRound } from "../scripts/NumRound";
import { game } from "../main";

export function MiningScene() {
    k.scene("mining", () => {
        let selectedCrypto = "BTC";

        // Mining stats
        k.add([ // Title
            k.text("Mining Stats"),
            k.pos(10, 150)
        ]);

        k.add([
            k.rect(600, 490),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const CoinHeading = k.add([ // Select coin
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
        const HashrateHeading = k.add([ // Hashrate
            k.text("Hashrate"),
            k.scale(0.75),
            k.pos(20, 320),
        ]);

        const HashrateValue = k.add([
            k.text("10.000k"),
            k.pos(20, 350),
        ]);

        const MiningRateHeading = k.add([ // Mining Rate
            k.text("Mining Rate"),
            k.scale(0.75),
            k.pos(20, 420),
        ]);

        const MiningRateValue = k.add([
            k.text("100k"),
            k.pos(20, 450),
        ]);

        const UsdRateHeading = k.add([ // USD Rate
            k.text("Coin value per cycle:"),
            k.scale(0.75),
            k.pos(20, 520),
        ]);

        const UsdRateValue = k.add([
            k.text("100k"),
            k.pos(20, 550),
        ]);

        const TotalMinedHeading = k.add([ // Total Mined
            k.text("Total Mined"),
            k.scale(0.75),
            k.pos(20, 620),
        ]);

        const TotalMinedValue = k.add([
            k.text("100k"),
            k.pos(20, 650)
        ]);

        // Power stats
        const PowerTitle = k.add([ // Title
            k.text("Power Stats"),
            k.pos(620, 150)
        ]);

        const PowerFrame = k.add([
            k.rect(970, 490),
            k.pos(620, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const PowerProductionHeading = k.add([ // Power Production
            k.text("Power Production"),
            k.scale(0.75),
            k.pos(640, 210),
        ]);

        const PowerProductionValue = k.add([
            k.text("100k"),
            k.pos(640, 240),
        ]);

        const PowerConsumptionHeading = k.add([ // Power Consumption
            k.text("Power Consumption"),
            k.scale(0.75),
            k.pos(640, 310),
        ]);

        const PowerConsumptionValue = k.add([
            k.text("100k"),
            k.pos(640, 340),
        ]);

        const PowerUpkeepHeading = k.add([ // Power Upkeep
            k.text("Power Upkeep"),
            k.scale(0.75),
            k.pos(640, 410),
        ]);

        const PowerUpkeepValue = k.add([
            k.text("100k"),
            k.pos(640, 440),
        ]);

        const GridConsumptionHeading = k.add([ // Grid Power Consumption
            k.text("Power Grid Usage"),
            k.scale(0.75),
            k.pos(1240, 210),
        ]);

        const GridConsumptionValue = k.add([
            k.text("100k"),
            k.pos(1240, 240),
        ]);

        const GridPriceHeading = k.add([ // Grid Price
            k.text("Grid Price"),
            k.scale(0.75),
            k.pos(1240, 310),
        ]);

        const GridPriceValue = k.add([
            k.text("100k"),
            k.pos(1240, 340),
        ]);

        const GridExpensesHeading = k.add([ // Grid Expenses (grid consumption * price)
            k.text("Grid Expenses"),
            k.scale(0.75),
            k.pos(1240, 410),
        ]);

        const GridExpensesValue = k.add([
            k.text("100k"),
            k.pos(1240, 440),
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
                    // Highlight BTC
                    CoinBTC.color = k.rgb(255, 255, 255);
                    CoinETH.color = k.rgb(200, 200, 200);

                    // Text set to BTC values
                    HashrateValue.text = NumRound(game.mining.btc.hashrate);
                    MiningRateValue.text = NumRound(game.mining.btc.miningRate);
                    UsdRateValue.text = `USD ${NumRound(game.mining.btc.miningRate * game.exchange.btc)}`;
                    TotalMinedValue.text = NumRound(game.mining.btc.totalMined);
                    break;

                case "ETH":
                    // Highlight ETH
                    CoinETH.color = k.rgb(255, 255, 255);
                    CoinBTC.color = k.rgb(200, 200, 200);

                    // Text set to ETH values
                    HashrateValue.text = NumRound(game.mining.eth.hashrate);
                    MiningRateValue.text = NumRound(game.mining.eth.miningRate);
                    UsdRateValue.text = `USD ${NumRound(game.mining.eth.miningRate * game.exchange.eth)}`;
                    TotalMinedValue.text = NumRound(game.mining.eth.totalMined);
                    break;
            };
        });
    });
};