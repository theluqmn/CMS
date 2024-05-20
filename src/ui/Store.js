import { ChangeScenes } from "../scripts/ChangeScenes";
import InfoBar from "./InfoBar";

export function StoreScene() {
    k.scene("store", () => {
        
        // Title
        
        k.add([
            k.text("Store"),
            k.pos(20, 150)
        ]);
        
        bar = new InfoBar();
        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("store")
        });
    });
}