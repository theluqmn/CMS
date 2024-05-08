class InfoBar {

    MiningText = k.add([
        k.text("[Q] Mining"),
        k.pos(5, 20),
        k.color(200, 200, 200),
        k.area(),
        k.scale(0.7),
        k.anchor("left")
    ]);
    
    WalletText = k.add([
        k.text("[W] Wallet"),
        k.pos(205, 20),
        k.color(200, 200, 200),
        k.area(),
        k.scale(0.7),
        k.anchor("left")
    ]);

    ExchangeText = k.add([
        k.text("[E] Exchange"),
        k.pos(405, 20),
        k.color(200, 200, 200),
        k.area(),
        k.scale(0.7),
        k.anchor("left")
    ]);

    refresh = function(scene) {
        // 
        switch (scene) {
            case "mining": {
                MiningText.scale(0.8);
                MiningText.color = k.rgb(255, 255, 255);
                break;
            };
            case "wallet": {
                WalletText.scale(0.8);
                WalletText.color = k.rgb(255, 255, 255);
                break;
            };
            case "exchange": {
                ExchangeText.scale(0.8);
                ExchangeText.color = k.rgb(255, 255, 255);
                break;
            };
        }
    };
};

export default InfoBar;