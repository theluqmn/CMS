import InfoBar from "./InfoBar";
import { ChangeScenes } from "../scripts/ChangeScenes";
import { NumRound } from "../scripts/NumRound";
import { game, wallet } from "../main";
import { Exchange } from "../scripts/Exchanger";

export function ExchangeScene() {
    k.scene("exchange", () => {
        let BaseCurrency = "btc";
        let TargetCurrency = "usd";
        let ExchangeAmount = 1;
        
        // Exchanger
        const ExchangerTitle = k.add([
            k.text("Exchanger"),
            k.pos(10, 150)
        ]);

        const ExchangeFrame = k.add([
            k.rect(920, 690),
            k.pos(10, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const BaseHeading = k.add([ // Base currency
            k.text("Base currency"),
            k.scale(0.75),
            k.pos(20, 210),
        ]);

        const BaseSelectFrame = k.add([
            k.rect(900, 55),
            k.pos(20, 250),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const BaseBTC = k.add([
            k.text("[BTC] Bitcoin"),
            k.pos(25, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        const BaseETH = k.add([
            k.text("[ETH] Ethereum"),
            k.pos(300, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        const BaseUSD = k.add([
            k.text("[USD] US dollar"),
            k.pos(600, 260),
            k.color(200, 200, 200),
            k.area()
        ]);

        const TargetHeading = k.add([ // Target currency
            k.text("Target currency"),
            k.scale(0.75),
            k.pos(20, 350),
        ]);

        const TargetSelectFrame = k.add([
            k.rect(900, 55),
            k.pos(20, 390),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const TargetBTC = k.add([
            k.text("[BTC] Bitcoin"),
            k.pos(25, 400),
            k.color(200, 200, 200),
            k.area()
        ]);

        const TargetETH = k.add([
            k.text("[ETH] Ethereum"),
            k.pos(300, 400),
            k.color(200, 200, 200),
            k.area()
        ]);

        const TargetUSD = k.add([
            k.text("[USD] US dollar"),
            k.pos(600, 400),
            k.color(200, 200, 200),
            k.area()
        ]);

        const AmountHeading = k.add([ // Amount
            k.text("Amount"),
            k.scale(0.75),
            k.pos(20, 500),
        ]);

        const AmountSelectFrame = k.add([
            k.rect(360, 55),
            k.pos(20, 540),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);
        
        const AmountAdd = k.add([
            k.text("+"),
            k.pos(25, 550),
            k.color(200, 200, 200),
            k.area()
        ]);

        const AmountCurrent = k.add([
            k.text(NumRound(ExchangeAmount)),
            k.pos(125, 550),
            k.area()
        ]);

        const AmountSubtract = k.add([
            k.text("-"),
            k.pos(350, 550),
            k.color(200, 200, 200),
            k.area()
        ]);

        const AmountSubText = k.add([
            k.text("Base is the currency you are selling\nTarget is the currency you are buying in the exchange\nAmount is the amount of base currency you are selling"),
            k.pos(20, 600),
            k.color(200, 200, 200),
            k.scale(0.75),
        ]);

        const ExchangeDetails = k.add([
            k.text(`Base currency: ${BaseCurrency}\nTarget currency: ${TargetCurrency} `),
            k.pos(20, 815),
            k.color(200, 200, 200),
            k.scale(0.75),
            k.anchor("botleft")
        ]);

        const ExchangeButtonFrame = k.add([ // Exchange
            k.rect(360, 55),
            k.pos(20, 825),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(25, 2222, 76)),
        ]);

        const ExchangeButtonText = k.add([
            k.text("Exchange"),
            k.pos(25, 835),
            k.color(25, 222, 76),
            k.area()
        ]);

        // Exchange Rates
        const ExchangeRatesTitle = k.add([
            k.text("Exchange Rates"),
            k.pos(940, 150)
        ]);

        const ExchangeRatesFrame = k.add([
            k.rect(650, 690),
            k.pos(940, 200),
            k.color(0, 0, 0),
            k.outline(3, k.rgb(255, 255, 255)),
        ]);

        const ExchangeRatesBTCHeading = k.add([ // BTC exchange
            k.text("[BTC] Bitcoin"),
            k.pos(950, 210),
            k.color(200, 200, 200),
            k.scale(0.75)
        ]);

        const ExchangeRatesBTC = k.add([
            k.text(`USD ${NumRound(game.exchange.btc)}`),
            k.pos(950, 250),
        ]);

        const ExchangeRatesETHHeading = k.add([ // ETH exchange
            k.text("[ETH] Ethereum"),
            k.pos(950, 310),
            k.color(200, 200, 200),
            k.scale(0.75)
        ]);

        const ExchangeRatesETH = k.add([
            k.text(`USD ${NumRound(game.exchange.eth)}`),
            k.pos(950, 350),
        ]);
        
        // Trigger functions
        BaseBTC.onClick(() => { BaseCurrency = "btc" });
        BaseETH.onClick(() => { BaseCurrency = "eth" });
        BaseUSD.onClick(() => { BaseCurrency = "usd" });

        TargetBTC.onClick(() => { TargetCurrency = "btc" });
        TargetETH.onClick(() => { TargetCurrency = "eth" });
        TargetUSD.onClick(() => { TargetCurrency = "usd" });

        AmountAdd.onClick(() => {
            ExchangeAmount += 0.1;
            AmountCurrent.text = NumRound(ExchangeAmount);
        });

        AmountSubtract.onClick(() => {
            if (ExchangeAmount > 0) {
                ExchangeAmount -= 0.1;
                AmountCurrent.text = NumRound(ExchangeAmount);
            }
        });

        ExchangeButtonText.onClick(() => {
            Exchange(BaseCurrency, TargetCurrency, ExchangeAmount);
        });

        bar = new InfoBar();
        ChangeScenes();
        k.onUpdate(() => {
            bar.refresh("exchange")

            switch (BaseCurrency) { // Base currency highlight
                case "btc":
                    BaseBTC.color = k.rgb(255, 255, 255);
                    BaseETH.color = k.rgb(200, 200, 200);
                    BaseUSD.color = k.rgb(200, 200, 200);
                    break;
                
                case "eth":
                    BaseETH.color = k.rgb(255, 255, 255);
                    BaseBTC.color = k.rgb(200, 200, 200);
                    BaseUSD.color = k.rgb(200, 200, 200);
                    break;

                case "usd":
                    BaseUSD.color = k.rgb(255, 255, 255);
                    BaseBTC.color = k.rgb(200, 200, 200);
                    BaseETH.color = k.rgb(200, 200, 200);
                    break;
            };

            switch (TargetCurrency) { // Target currency highlight
                case "btc":
                    TargetBTC.color = k.rgb(255, 255, 255);
                    TargetETH.color = k.rgb(200, 200, 200);
                    TargetUSD.color = k.rgb(200, 200, 200)
                    break;
                
                case "eth":
                    TargetETH.color = k.rgb(255, 255, 255);
                    TargetBTC.color = k.rgb(200, 200, 200);
                    TargetUSD.color = k.rgb(200, 200, 200);
                    break;

                case "usd":
                    TargetUSD.color = k.rgb(255, 255, 255);
                    TargetBTC.color = k.rgb(200, 200, 200);
                    TargetETH.color = k.rgb(200, 200, 200);
                    break;
            };
        });
    });
};