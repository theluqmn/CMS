import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function ExchangeScene() {
    k.scene("exchange", () => {
        bar = new InfoBar();
        // Title

        k.add([
            k.text("Exchange Scene"),
            k.pos(20, 150)
        ]);

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("exchange")
        });
    });
}