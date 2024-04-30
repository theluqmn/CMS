import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";

export function miningScene() {
    k.scene("mining", ()=> {
        panel = new infoBar();
    
        const miningFrame = k.add([
            k.rect(700, 500),
            k.pos(10, 140),
            k.color(0, 0, 0),
            k.outline(2, k.rgb(255, 255, 255))
        ]);

        const miningTitle = k.add([
            k.text("Mining Stats"),
            k.pos(20, 150),
            k.scale(1.5)
        ]);

        const realTimeHeader = k.add([
            k.text("Real-time"),
            k.color(117, 232, 250),
            k.pos(20, 220),
        ]);

        const statsHeader = k.add([
            k.text("Average"),
            k.color(117, 232, 250),
            k.pos(420, 220)
        ]);

        const statsText = k.add([
            k.text("Press [1] or\nclick here to\nchange view\nof statistics"),
            k.color(200, 200, 200),
            k.pos(420, 505),
            k.scale(0.75)
        ]);

        //  Mining related

        //      Headings
        const hashrateHeading = k.add([
            k.text("Hashrate"),
            k.color(200, 200, 200),
            k.pos(20, 275),
            k.scale(0.75)
        ]);

        const miningRateHeading = k.add([
            k.text("Mining Rate"),
            k.color(200, 200, 200),
            k.pos(20, 375),
            k.scale(0.75)
        ]);

        const totalMinedHeading = k.add([
            k.text("Total Mined"),
            k.color(200, 200, 200),
            k.pos(20, 515),
            k.scale(0.75)
        ]);

        //      Texts
        const hashrateText = k.add([
            k.text("150.00b"),
            k.pos(20, 310)
        ]);

        const hashrateStatsText = k.add([
            k.text("69.0b"),
            k.pos(420, 310)
        ]);

        const miningRateText = k.add([
            k.text("BTC 0.05/s"),
            k.pos(20, 405)
        ]);

        const miningRateStatsText = k.add([
            k.text("BTC 0.03/s"),
            k.pos(420, 405)
        ])

        const valueMiningRateText = k.add([
            k.text("USD 100.00/s"),
            k.pos(20, 445)
        ]);

        const valueMiningRateStatsText = k.add([
            k.text("USD 85.72/s"),
            k.pos(420, 445)
        ]);

        const totalMinedText = k.add([
            k.text("100.00"),
            k.pos(20, 545)
        ]);

        // Power related

        // Function that runs all the time
        universalInputs();
        k.onUpdate(() => {
            panel.refresh("mining");
        });
    });
};