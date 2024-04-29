import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";

export function miningScene() {
    k.scene("mining", ()=> {
        panel = new infoBar();
    
        universalInputs();
        k.onUpdate(() => {
            panel.refresh("mining");
        });
    });
};