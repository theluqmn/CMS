import { game, wallet } from "../main";
import { gpu, ownedGPU, powerGenerator, ownedPowerGenerator } from "../data";

export function gpuStore(GPUcompany, GPUproduct, GPUmodel){
    referenceGPU = gpu[GPUcompany][GPUproduct][GPUmodel];

    if (referenceGPU.price <= wallet.usd) {
        wallet.usd -= referenceGPU.price;
        ownedGPU.push({company: GPUcompany, product: GPUproduct, model: GPUmodel, crypto: "btc", clock: 1});
        console.log(`GPU "${referenceGPU.company} ${referenceGPU.model}" purchased for ${referenceGPU.price}`);

    } else {
        console.log(`Not enough USD wallet balance to purchase "${referenceGPU.company} ${referenceGPU.model}"`);
    };
};

export function powerStore(powerType, powerModel){
    referencePower = powerGenerator[powerType][powerModel];
    if (referencePower.price <= wallet.usd) {
        wallet.usd -= referencePower.price;
        ownedPowerGenerator.push({type: powerType, model: powerModel});
        console.log(`Power generator "${referencePower.model}" purchased for ${referencePower.price}`);

    } else {
        console.log(`Not enough USD wallet balance to purchase "${referencePower.model}"`);
    };
};