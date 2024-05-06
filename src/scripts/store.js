import { game, wallet } from "../main";
import { gpu, ownedGPU, powerGenerator, ownedPowerGenerator } from "../data";

export function gpuStore(GPUcompany, GPUproduct, GPUmodel){
    referenceGPU = gpu[GPUcompany][GPUproduct][GPUmodel];

    if (referenceGPU.price <= wallet.usd) {
        wallet.usd -= referenceGPU.price;
        ownedGPU.push({company: GPUcompany, product: GPUproduct, model: GPUmodel, crypto: "btc", clock: 1});
        console.log(`GPU ${referenceGPU.company} ${referenceGPU.model} purchased for ${referenceGPU.price}`);

    } else {
        console.log("Not enough money");
    };
};