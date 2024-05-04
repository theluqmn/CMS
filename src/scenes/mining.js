import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";
import { ownedGPU } from "../scripts/data";
import { wallet, game } from "../main";
import { numRound } from "../scripts/numRound";

export function miningScene() {
    k.scene("mining", ()=> {
        panel = new infoBar();

        //  Mining related
    
        const miningFrame = k.add([
            k.rect(785, 700),
            k.pos(10, 140),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ]);

        const miningTitle = k.add([
            k.text("Mining Stats"),
            k.pos(20, 150),
            k.scale(1.5)
        ]);

        const realTimeMiningHeader = k.add([
            k.text("Real-time"),
            k.color(117, 232, 250),
            k.pos(20, 220),
        ]);

        const statsMiningHeader = k.add([
            k.text("Average"),
            k.color(117, 232, 250),
            k.pos(420, 220)
        ]);

        const statsMiningText = k.add([
            k.text("Press [1] or click here to\nchange view of statistics"),
            k.color(200, 200, 200),
            k.pos(450, 150),
            k.scale(0.6)
        ]);

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

        const hashrateStats = k.add([
            k.text("69.0b"),
            k.pos(420, 310)
        ]);

        const miningRateText = k.add([
            k.text("BTC 0.05/s"),
            k.pos(20, 410)
        ]);

        const miningRateStats = k.add([
            k.text("BTC 0.03/s"),
            k.pos(420, 410)
        ])

        const valueMiningRateText = k.add([
            k.text("USD 100.00/s"),
            k.pos(20, 450)
        ]);

        const valueMiningRateStats = k.add([
            k.text("USD 85.72/s"),
            k.pos(420, 450)
        ]);

        const totalMinedText = k.add([
            k.text("100.00"),
            k.pos(20, 550)
        ]);

        // Power related

        const powerFrame = k.add([
            k.rect(785, 700),
            k.pos(805, 140),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ]);

        const powerTitle = k.add([
            k.text("Power Stats"),
            k.pos(820, 150),
            k.scale(1.5)
        ]);

        const realTimePowerHeader = k.add([
            k.text("Real-time"),
            k.color(117, 232, 250),
            k.pos(820, 220),
        ]);

        const statsPowerHeader = k.add([
            k.text("Average"),
            k.color(117, 232, 250),
            k.pos(1220, 220)
        ]);

        const statsPowerText = k.add([
            k.text("Press [2] or click here to\nchange view of statistics"),
            k.color(200, 200, 200),
            k.pos(1250, 150),
            k.scale(0.6)
        ]);

        // Headings
        const flowPowerHeading = k.add([
            k.text("Power Flow"),
            k.color(200, 200, 200),
            k.pos(820, 280),
            k.scale(0.75)
        ]);

        const powerProductionHeading = k.add([
            k.text("Power Production"),
            k.color(200, 200, 200),
            k.pos(820, 380),
            k.scale(0.75)
        ]);

        const powerConsumptionHeading = k.add([
            k.text("Power Consumption"),
            k.color(200, 200, 200),
            k.pos(820, 480),
            k.scale(0.75)
        ]);

        const powerImportHeading = k.add([
            k.text("Power Import From Grid"),
            k.color(200, 200, 200),
            k.pos(820, 580),
            k.scale(0.75)
        ]);

        const gridPriceHeading = k.add([
            k.text("Grid charge/kW"),
            k.color(200, 200, 200),
            k.pos(820, 680),
            k.scale(0.75)
        ])

        // Texts
        const flowPowerText = k.add([
            k.text("10.00kW"),
            k.color(65, 203, 25),
            k.pos(820, 310)
        ]);

        const flowPowerStats = k.add([
            k.text("10.00kW"),
            k.pos(1220, 310)
        ]);

        const powerProductionText = k.add([
            k.text("110.50kW"),
            k.pos(820, 410)
        ]);

        const powerProductionStats = k.add([
            k.text("96.50kW"),
            k.pos(1220, 410)
        ]);

        const powerConsumptionText = k.add([
            k.text("100.50kW"),
            k.pos(820, 510)
        ]);

        const powerConsumptionStats = k.add([
            k.text("78.50kW"),
            k.pos(1220, 510)
        ]);

        const powerImportText = k.add([
            k.text("0.00W"),
            k.pos(820, 610)
        ]);

        const powerImportStats = k.add([
            k.text("53.00W"),
            k.pos(1220, 610)
        ]);

        const gridPriceText = k.add([
            k.text("USD 10.55"),
            k.pos(820, 710)
        ]);

        const gridPriceStats = k.add([
            k.text("USD 12.76"),
            k.pos(1220, 710)
        ]);

        // Operations

        const operationsFrame = k.add([
            k.rect(1580, 140),
            k.pos(10, 850),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ]);

        // Headings
        const gpuAmountHeading = k.add([
            k.text("GPUs in operation"),
            k.color(200, 200, 200),
            k.pos(20, 900),
            k.scale(0.75)
        ]);

        const genAmountHeading = k.add([
            k.text("Power Generators in operation"),
            k.color(200, 200, 200),
            k.pos(420, 900),
            k.scale(0.75)
        ]);

        const genExpensesHeading = k.add([
            k.text("Generator Expenses"),
            k.color(200, 200, 200),
            k.pos(920, 900),
            k.scale(0.75)
        ]);

        const gridExpensesHeading = k.add([
            k.text("Grid Expenses"),
            k.color(200, 200, 200),
            k.pos(1320, 900),
            k.scale(0.75)
        ])

        // Texts
        const gpuAmountText = k.add([
            k.text("100"),
            k.pos(20, 930)
        ]);

        const genAmountText = k.add([
            k.text("67"),
            k.pos(420, 930)
        ]);

        const genExpensesText = k.add([
            k.text("USD 670.00"),
            k.pos(920, 930)
        ]);

        const gridExpensesText = k.add([
            k.text("USD 0.00"),
            k.pos(1320, 930)
        ]);

        // Function that runs all the time
        universalInputs();
        k.onUpdate(() => {
            panel.refresh("mining");

            // Updating all the text

                // Mining
            hashrateText.text = numRound(game.mining.hashrate);
            miningRateText.text = `BTC ${game.mining.miningRate}`;
            valueMiningRateText.text = `USD ${numRound(game.mining.miningRate * game.exchange.btc)}`;
            totalMinedText.text = `BTC ${numRound(game.mining.totalMined)}`;

                // Power

                // Operations
            gpuAmountText.text = ownedGPU.length;
        });
    });
};