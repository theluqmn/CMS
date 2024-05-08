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
                bar.MiningText.scale = 0.8;
                bar.MiningText.color = k.rgb(255, 255, 255);
                break;
            };
            case "wallet": {
                bar.WalletText.scale = 0.8;
                bar.alletText.color = k.rgb(255, 255, 255);
                break;
            };
            case "exchange": {
                bar.ExchangeText.scale = 0.8;
                bar.ExchangeText.color = k.rgb(255, 255, 255);
                break;
            };
        }
    };
};

export default InfoBar;