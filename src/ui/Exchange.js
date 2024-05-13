import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function ExchangeScene() {
    k.scene("exchange", () => {
        bar = new InfoBar();
        // Title
        const Title = k.add([
            k.text("Exchange Scene"),
            k.pos(20, 150)
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

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("exchange")
        });
    });
}