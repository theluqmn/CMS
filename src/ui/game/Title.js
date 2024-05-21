export function TitleScene() {
    k.scene("title", () => {
        const text = k.add([
            k.text("Wassup: ")
        ]);

        k.onCharInput((ch) => {
            text.text += ch;
        });

        k.onKeyPress("enter", () => {
            k.go("mining")
        });

        k.onKeyPressRepeat("backspace", () => {
            text.text = text.text.substring(0, text.text.length - 1);
        });

        // k.onKeyPress("enter", () => {
        //     text.text += "\n";
        // });
    });
}
