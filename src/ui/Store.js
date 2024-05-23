import { ChangeScenes } from "../scripts/ChangeScenes";
import InfoBar from "./InfoBar";

export function StoreScene() {
    k.scene("store", () => {
        let selectedStore = "GPU";

        const Title = k.add([ // Title
            k.text("Store"),
            k.pos(10, 150)
        ]);
        
        const Frame = k.add([
            k.rect(1580, 690),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        // Select store
        const SelectStoreHeading = k.add([
            k.text("Select Store"),
            k.scale(0.75),
            k.color(200, 200, 200),
            k.pos(20, 210)
        ]);

        const SelectStoreFrame = k.add([
            k.rect(580, 55),
            k.pos(20, 250),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const SelectStoreGPU = k.add([ // GPU button
            k.text("Graphics Cards"),
            k.pos(30, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        const SelectStoreGenerators = k.add([ // Generators button
            k.text("Generators"),
            k.pos(380, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        // Store UI
        const PrevButton = k.add([
            k.rect(100, 560),
            k.pos(20, 320),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ])

        const StoreFrame = k.add([
            k.rect(800, 560),
            k.pos(130, 320),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ]);

        const StoreCompany = k.add([
            k.text("Nvidia"),
            k.pos(140, 330),
            k.scale(1.5)
        ]);

        const StoreProduct = k.add([
            k.text("GeForce RTX 3090"),
            k.pos(140, 380),
        ]);

        const StorePriceHeading = k.add([
            k.text("Price:"),
            k.pos(140, 510),
            k.scale(0.75)
        ]);

        const StorePriceValue = k.add([
            k.text("USD 1200"),
            k.pos(140, 550),
            k.scale(1)
        ]);

        const StoreStatisticsHeading = k.add([
            k.text("Statistics:"),
            k.pos(140, 610),
            k.scale(0.75)
        ]);

        const StoreStatisticsValue = k.add([
            k.text("Hashrate: 400\nPower consumption: 450W"),
            k.pos(140, 640),
            k.scale(1)
        ]);


        const NextButton = k.add([
            k.rect(100, 560),
            k.pos(940, 320),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255))
        ]);



        // Trigger functions

        SelectStoreGPU.onClick(() => {
            selectedStore = "GPU";
            console.log(`Changed selected store to ${selectedStore}`)
        });

        SelectStoreGenerators.onClick(() => {
            selectedStore = "Generators";
            console.log(`Changed selected store to ${selectedStore}`)
        });

        bar = new InfoBar();
        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("store")

            switch (selectedStore) {
                case "GPU":
                    SelectStoreGPU.color = k.rgb(255, 255, 255);
                    SelectStoreGenerators.color = k.rgb(200, 200, 200);
                    break;

                case "Generators":
                    SelectStoreGPU.color = k.rgb(200, 200, 200);
                    SelectStoreGenerators.color = k.rgb(255, 255, 255);
                    break;
            };
        });
    });
}