import { game, wallet } from "../main";
import { NumRound } from "../scripts/NumRound";

class InfoBar {
    // Navigation
    MiningText = k.add([
        k.text("[Q] Mining"),
        k.pos(5, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
        k.area(),
    ]);
    
    WalletText = k.add([
        k.text("[W] Wallet"),
        k.pos(205, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
        k.area(),
    ]);

    ExchangeText = k.add([
        k.text("[E] Exchange"),
        k.pos(405, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
        k.area(),
    ]);

    StoreText = k.add([
        k.text("[R] Store"),
        k.pos(635, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
        k.area(),
    ]);

    InventoryText = k.add([
        k.text("[T] Inventory"),
        k.pos(825, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
    ]);

    NotificationsText = k.add([
        k.text("[Y] Notifications"),
        k.pos(1065, 5),
        k.color(200, 200, 200),
        k.scale(0.75),
    ]);

    CMSText = k.add([
        k.text("CMS v1.0"),
        k.pos(1365, 5),
        k.color(200, 200),
        k.scale(0.75),
    ]);

    //  Hashrate
    HashrateFrame = k.add([
        k.rect(360, 80),
        k.pos(10, 45),
        k.color(0, 0, 0),
        k.outline(3, k.rgb(255, 255, 255)),
    ]);

    HashrateHeading = k.add([
        k.text("Hashrate"),
        k.pos(20, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    HashrateText = k.add([
        k.text("100.55k"),
        k.pos(20, 80),
        k.scale(1)
    ]);

    MiningRateHeading = k.add([
        k.text("Mining Rate"),
        k.pos(210, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);


    MiningRateText = k.add([
        k.text("100.55k"),
        k.pos(210, 80),
        k.scale(1)
    ]);


    // Wallet
    WalletFrame = k.add([
        k.rect(360, 80),
        k.pos(380, 45),
        k.color(0, 0, 0),
        k.outline(3, k.rgb(255, 255, 255)),
    ]);

    WalletUSDHeading = k.add([
        k.text("USD Balance"),
        k.pos(390, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    WalletUSDText = k.add([
        k.text("100.55k"),
        k.pos(390, 80),
        k.scale(1)
    ]);

    WalletCryptoHeading = k.add([
        k.text("Crypto Balance"),
        k.pos(580, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    WalletCryptoText = k.add([
        k.text("100.55k"),
        k.pos(580, 80),
        k.scale(1)
    ]);

    // Exchange
    ExchangeFrame = k.add([
        k.rect(420, 80),
        k.pos(750, 45),
        k.color(0, 0, 0),
        k.outline(3, k.rgb(255, 255, 255)),
    ]);

    ExchangeRateHeading = k.add([
        k.text("Exchange (BTC-USD)"),
        k.pos(760, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    ExchangeRateText = k.add([
        k.text("172.55k"),
        k.pos(760, 80),
        k.scale(1)
    ]);

    ExchangeValueHeading = k.add([
        k.text("BTC Value"),
        k.pos(1000, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    ExchangeValueText = k.add([
        k.text("100.50m"),
        k.pos(1000, 80),
        k.scale(1)
    ]);

    // Power
    PowerFrame = k.add([
        k.rect(200, 80),
        k.pos(1180, 45),
        k.color(0, 0, 0),
        k.outline(3, k.rgb(255, 255, 255)),
    ]);

    PowerHeading = k.add([
        k.text("Power"),
        k.pos(1190, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    PowerText = k.add([
        k.text("100.55kW"),
        k.pos(1190, 80),
        k.scale(1)
    ]);

    //Cycles
    CycleFrame = k.add([
        k.rect(200, 80),
        k.pos(1390, 45),
        k.color(0, 0, 0),
        k.outline(3, k.rgb(255, 255, 255))
    ]);

    CycleHeading = k.add([
        k.text("Cycle"),
        k.pos(1400, 55),
        k.color(200, 200, 200),
        k.scale(0.5)
    ]);

    CycleText = k.add([
        k.text("0000"),
        k.pos(1400, 80),
        k.scale(1)
    ]);

    refresh = function(scene) {
        // bar is the name of the InfoBar instance

        // Highlight current scene
        switch (scene) {
            case "mining": {
                bar.MiningText.color = k.rgb(255, 255, 255);
                break;
            };
            case "wallet": {
                bar.alletText.color = k.rgb(255, 255, 255);
                break;
            };
            case "exchange": {
                bar.ExchangeText.color = k.rgb(255, 255, 255);
                break;
            };
        };

        bar.WalletUSDText.text = NumRound(wallet.usd);
        switch (game.infobar.crypto) {
            case "btc": {
                bar.HashrateHeading.text = "BTC hashrate";
                bar.HashrateText.text = NumRound(game.mining.btc.hashrate);
                bar.MiningRateHeading.text = "BTC mining rate"
                bar.MiningRateText.text = NumRound(game.mining.btc.miningRate);
                bar.WalletCryptoHeading.text = "BTC balance";
                bar.WalletCryptoText.text = NumRound(wallet.crypto.btc);
                bar.ExchangeRateHeading.text = "Exchange (USD-BTC)";
                bar.ExchangeRateText.text = NumRound(game.exchange.btc);
                bar.ExchangeValueHeading.text = "Your BTC value";
                bar.ExchangeValueText.text = NumRound(wallet.crypto.btc * game.exchange.btc);
                break;
            };
            case "eth": {
                bar.HashrateHeading.text = "ETH hashrate";
                bar.HashrateText.text = NumRound(game.mining.eth.hashrate);
                bar.MiningRateHeading.text = "ETH mining rate"
                bar.MiningRateText.text = NumRound(game.mining.eth.miningRate);
                bar.WalletCryptoHeading.text = "ETH balance";
                bar.WalletCryptoText.text = NumRound(wallet.crypto.eth);
                bar.ExchangeRateHeading.text = "Exchange (USD-ETH)";
                bar.ExchangeRateText.text = NumRound(game.exchange.eth);
                bar.ExchangeValueHeading.text = "Your ETH value";
                bar.ExchangeValueText.text = NumRound(wallet.crypto.eth * game.exchange.eth);
                break;
            };
        };
        bar.PowerText.text = `${NumRound(game.power.consumption)}W`;
        bar.CycleText.text = NumRound(game.mining.cycle);

        /*
        Changes the text color according to how much power is produced
        - 20% production excess or more
        - 10% production excess
        - More than consumption
        - Less than consumption
        */        
        if (game.power.production >= game.power.consumption * 1.2) {
            bar.PowerText.color = k.rgb(72, 225, 34);
        } else if (game.power.production >= game.power.consumption * 1.1) {
            bar.PowerText.color = k.rgb(181, 225, 34);
        } else if (game.power.production >= game.power.consumption) {
            bar.PowerText.color = k.rgb(225, 184, 34);
        } else {
            bar.PowerText.color = k.rgb(255, 57, 34);
        };
    };
};

export default InfoBar;