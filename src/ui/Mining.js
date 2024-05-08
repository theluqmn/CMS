import InfoBar from "./InfoBar";

export function MiningScene() {
    k.scene("mining", () => {
        k.add([
            k.text("Mining Scene"),
            k.pos(200, 200)
        ]);
    
        bar = new InfoBar();

        k.onUpdate(() => {
            bar.refresh("mining")
        });
    });
}