import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function MiningScene() {
    k.scene("mining", () => {
        bar = new InfoBar();
        let selectedCrypto = "BTC";

        // Mining Title
        k.add([
            k.text("Mining Scene"),
            k.pos(20, 150)
        ]);

        // Mining Frame
        k.add([
            k.rect(790, 400),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const CoinHeading = k.add([
            k.text("Select a coin"),
            k.scale(0.75),
            k.pos(20, 210),
        ]);

        const CoinSelectFrame = k.add([
            k.rect(580, 55),
            k.pos(20, 250),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(200, 200, 200)),
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

        // Trigger functions
        CoinBTC.onClick(() => {
            selectedCrypto = "BTC";
            console.log("Changed selected coin to BTC");
        });

        CoinETH.onClick(() => {
            selectedCrypto = "ETH";
            console.log("Changed selected coin to ETH");
        });

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("mining")

            // Based on the selected crypto
            switch (selectedCrypto) {
                case "BTC":
                    CoinBTC.color = k.rgb(255, 255, 255);
                    CoinETH.color = k.rgb(200, 200, 200);

                    break;

                case "ETH":
                    CoinETH.color = k.rgb(255, 255, 255);
                    CoinBTC.color = k.rgb(200, 200, 200);

                    break;
            };
        });
    });
}