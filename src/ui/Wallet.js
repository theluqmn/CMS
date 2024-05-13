import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function WalletScene() {
    k.scene("wallet", () => {
        bar = new InfoBar();
        let selectedCrypto = "BTC";

        // Title
        const Title = k.add([
            k.text("Your Wallet"),
            k.pos(10, 150)
        ]);

        // Select a coin Frame
        const CoinFrame = k.add([
            k.rect(600, 690),
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

        // Coin Stats
        const CoinBalance = k.add([
            k.text("Coin Balance"),
            k.pos(20, 400),
            k.color(255, 255, 255)
        ]);

        const CoinValue = k.add([
            k.text("Coin Value"),
            k.pos(20, 450),
            k.color(255, 255, 255)
        ]);

        const totalOwned = k.add([
            k.text("Total Owned"),
            k.pos(20, 500),
            k.color(255, 255, 255)
        ]);


        // Buttons
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
            bar.refresh("wallet")

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