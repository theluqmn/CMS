import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";

export function WalletScene() {
    k.scene("wallet", () => {
        bar = new InfoBar();
        // Title

        k.add([
            k.text("Wallet Scene"),
            k.pos(20, 150)
        ]);

        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("wallet")
        });
    });
}