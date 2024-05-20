export function ChangeScenes() {
    k.onKeyPress("q" || "W", () =>{ // Mining
        console.log("Changing to mining scene");
        k.go("mining");
    })

    k.onKeyPress("w" || "W", () => { // Wallet
        console.log("Changing to wallet scene");
        k.go("wallet");
    })

    k.onKeyPress("e" || "E", () => { // Exchange
        console.log("Changing to exchange scene");
        k.go("exchange");
    });

    k.onKeyPress("r" || "R", () => { // Store
        console.log("Changing to store scene");
        k.go("store");
    });

};