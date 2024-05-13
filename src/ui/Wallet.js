import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function WalletScene() {
    k.scene("wallet", () => {
        bar = new InfoBar();
        let selectedCrypto = "BTC";

        // Title
        const Title = k.add([
            k.text("Wallet Scene"),
            k.pos(10, 150)
        ]);

        // Frame
        const CryptoSelect = k.add([
            k.rect(400, 500),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const CryptoHeading = k.add([
            k.text("Select a coin"),
            k.scale(0.75),
            k.pos(20, 210),
        ]);

        const CryptoBTC = k.add([
            k.text("[BTC] Bitcoin"),
            k.pos(20, 250),
            k.color(200, 200, 200),
            k.area()
        ]);

        const CryptoETH = k.add([
            k.text("[ETH] Ethereum"),
            k.pos(20, 300),
            k.color(200, 200, 200),
            k.area()
        ]);

        // Buttons
        CryptoBTC.onClick(() => {
            selectedCrypto = "BTC";
            console.log("Changed selected crypto BTC");
        });

        CryptoETH.onClick(() => {
            selectedCrypto = "ETH";
            console.log("Changed selected crypto ETH");
        });

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("wallet")

            switch (selectedCrypto) {
                case "BTC":
                    CryptoBTC.color = k.rgb(255, 255, 255);
                    CryptoETH.color = k.rgb(200, 200, 200);

                    break;
                case "ETH":
                    CryptoETH.color = k.rgb(255, 255, 255);
                    CryptoBTC.color = k.rgb(200, 200, 200);
                    
                    break;
            };
        });
    });
}