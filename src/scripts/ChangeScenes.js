export function ChangeScenes() {
    k.onKeyPress("q" || "W", () =>{
        console.log("Changing to mining scene");
        k.go("mining");
    })

    k.onKeyPress("w" || "W", () => {
        console.log("Changing to wallet scene");
        k.go("wallet");
    })

    k.onKeyPress("e" || "E", () => {
        console.log("Changing to exchange scene");
        k.go("exchange");
    });
};