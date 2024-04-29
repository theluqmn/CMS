import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";

export function miningScene() {
    k.scene("mining", ()=> {
        panel = new infoBar();
    
        const miningFrame = k.add([
            k.rect(1000, 500),
            k.pos(10, 140),
            k.color(0, 0, 0),
            k.outline(2, k.rgb(255, 255, 255))
        ]);

        const miningTitle = k.add([
            k.text("Mining Stats"),
            k.pos(20, 150),
            k.scale(1.5)
        ]);

        //  Mining related
        const hashrateHeading = k.add([
            k.text("Hashrate"),
            k.pos(20, 220),
            k.scale(0.75)
        ]);

        const miningRateHeading = k.add([
            k.text("Mining Rate"),
            k.pos(20, 320),
            k.scale(0.75)
        ]);

        const totalMinedHeading = k.add([
            k.text("Total Mined"),
            k.pos(20, 470),
            k.scale(0.75)
        ]);

        const hashrateText = k.add([
            k.text("150.00bH"),
            k.pos(20, 250)
        ]);

        const miningRateText = k.add([
            k.text("BTC 0.05/s"),
            k.pos(20, 350)
        ]);

        const valueMiningRateText = k.add([
            k.text("USD 100.00/s"),
            k.pos(20, 400)
        ]);

        const totalMinedText = k.add([
            k.text("100.00"),
            k.pos(20, 500)
        ]);

        universalInputs();
        k.onUpdate(() => {
            panel.refresh("mining");
        });
    });
};