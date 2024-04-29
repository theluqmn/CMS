import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";

export function exchangeScene() {
    k.scene("exchange", () => {
        panel = new infoBar();
        
        universalInputs();
        k.onUpdate(() => {
            panel.refresh("exchange");
        });
    });    
}