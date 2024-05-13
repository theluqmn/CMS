import InfoBar from "./InfoBar";

export function StoreScene() {
    k.scene("store", () => {
        bar = new InfoBar();
        // Title

        k.add([
            k.text("Store Scene"),
            k.pos(20, 150)
        ]);

        k.onUpdate(() => {
            bar.refresh("store")
        });
    });
}