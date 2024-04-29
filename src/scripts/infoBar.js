import { numRound } from "./numRound";

class infoBar {
    // Command keys
    gameCommandText = k.add([
		k.text("[Q] Game"),
		k.pos(0, 5),
		k.color(150, 150, 150),
		k.scale(0.75),
		k.area()
	]);
}

export default infoBar;