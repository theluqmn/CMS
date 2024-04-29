import infoBar from "../scripts/infoBar";
import { universalInputs } from "../scripts/universalInput";

export function walletScene() {
	k.scene("wallet", () => {
		panel = new infoBar();
		
		universalInputs();
		k.onUpdate(() => {
			panel.refresh("wallet");
		});
	});
}