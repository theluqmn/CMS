import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function MiningScene() {
    k.scene("mining", () => {
        bar = new InfoBar();

        // Title
        k.add([
            k.text("Mining Scene"),
            k.pos(20, 150)
        ]);

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("mining")
        });
    });
}