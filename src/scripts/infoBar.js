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

    // Frames
    miningRateFrame = k.add([
        k.rect(190, 80),
        k.pos(10, 50),
        k.color(0, 0, 0),
        k.outline(2, k.rgb(255, 255, 255)),
        k.anchor("topleft"),
    ]);

    // Header
    miningRateText = k.add([
        k.text("Mining Rate"),
        k.pos(20, 100),
        k.scale(0.75)
    ]);

    // Text
    miningRateText = k.add([
        k.text("150.00k"),
        k.pos(20, 60)
    ]);
    
    // Updates whatever elements that requires updating
    refresh = function(currentScene) {
        // Changing the scene by click
        panel.miningSceneText.onMouseDown(() => {
            console.log("game clicked");
        });

        // Text color
    };
};


export default infoBar;