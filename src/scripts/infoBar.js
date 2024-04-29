import { numRound } from "./numRound";

class infoBar {
    // Navigation
    miningSceneText = k.add([
		k.text("[Q] Mining"),
		k.pos(10, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    walletSceneText = k.add([
		k.text("[W] Wallet"),
		k.pos(210, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    exchangeSceneText = k.add([
		k.text("[E] Exchange"),
		k.pos(410, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    storeSceneText = k.add([
		k.text("[R] Store"),
		k.pos(650, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    inventorySceneText = k.add([
		k.text("[T] Inventory"),
		k.pos(850, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    settingsSceneText = k.add([
		k.text("[Y] Settings"),
		k.pos(1100, 10),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);

    // Frames
    miningRateFrame = k.add([
        k.rect(190, 80),
        k.pos(10, 50),
        k.color(0, 0, 0),
        k.outline(2, k.rgb(255, 255, 255)),
    ]);

    walletFrame = k.add([
        k.rect(400, 80),
        k.pos(210, 50),
        k.color(0, 0, 0),
        k.outline(2, k.rgb(255, 255, 255)),
    ]);

    exchangeFrame = k.add([
        k.rect(190, 80),
        k.pos(620, 50),
        k.color(0, 0, 0),
        k.outline(2, k.rgb(255, 255, 255)),
    ]);
;
    // Header
    miningRateHeader = k.add([
        k.text("Mining Rate"),
        k.pos(20, 100),
        k.scale(0.75)
    ]);

    usdHeader = k.add([
        k.text("USD"),
        k.pos(220, 100),
        k.scale(0.75)
    ]);

    cryptoHeader = k.add([
        k.text("BTC"),
        k.pos(400, 100),
        k.scale(0.75)
    ]);

    exchangeHeader = k.add([
        k.text("BTC-USD"),
        k.pos(630, 100),
        k.scale(0.75)
    ]);

    // Text
    miningRateText = k.add([
        k.text("150.00k"),
        k.pos(20, 60)
    ]);

    usdText = k.add([
        k.text("150.00k"),
        k.pos(220, 60)
    ]);

    cryptoText = k.add([
        k.text("150.00k"),
        k.pos(400, 60)
    ]);

    exchangeText = k.add([
        k.text("51.85k"),
        k.pos(630, 60)
    ])
    
    // Updates whatever elements that requires updating
    refresh = function(currentScene) {
        // Text color
        if (currentScene == "mining") {
            panel.miningSceneText.color = k.rgb(255, 255, 255);

        } else if (currentScene == "wallet") {
            panel.walletSceneText.color = k.rgb(255, 255, 255);

        } else if (currentScene == "exchange") {
            panel.exchangeSceneText.color = k.rgb(255, 255, 255);

        } else if (currentScene == "store") {
            panel.storeSceneText.color = k.rgb(255, 255, 255);

        } else if (currentScene == "inventory") {
            panel.inventorySceneText.color = k.rgb(255, 255, 255);

        } else if (currentScene == "settings") {
            panel.settingsSceneText.color = k.rgb(255, 255, 255)
        }
    };
};


export default infoBar;