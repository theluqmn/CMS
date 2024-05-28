// Game data

/*
GPU data, Power generator data to be used in game logic.
*/

// GPUs
export const gpu = {
    /*
    Each GPU has it's own hashrate, power consumption, price, company name, product name and ID.
    All the figures are based on real-world numbers. Hashrate is calculated by getting the GPU's
    TOPS, and dividing it by 1000.
    */

    // NVIDIA
    nvidia: {
        // GeForce
        geforce: {
            // RTX 4090
            rtx4090: {
                hashrate: 180,
                powerConsumption: 450,
                price: 1599,
                company: "NVIDIA",
                model: "GeForce RTX 4090",
            },
            // RTX 4080
            rtx4080: {
                hashrate: 150,
                powerConsumption: 320,
                price: 1199,
                company: "NVIDIA",
                model: "GeForce RTX 4080",
            },
            // RTX 4070 Ti
            rtx4070ti: {
                hashrate: 120,
                powerConsumption: 285,
                price: 899,
                company: "NVIDIA",
                model: "GeForce RTX 4070 Ti",
            },
            // RTX 4070
            rtx4070: {
                hashrate: 90,
                powerConsumption: 240,
                price: 549,
                company: "NVIDIA",
                model: "GeForce RTX 4070",
            },
            // RTX 3090 Ti
            rtx3090ti: {
                hashrate: 140,
                powerConsumption: 450,
                price: 1999,
                company: "NVIDIA",
                model: "GeForce RTX 3090 Ti",
            },
            // RTX 3090
            rtx3090: {
                hashrate: 120,
                powerConsumption: 350,
                price: 1499,
                company: "NVIDIA",
                model: "GeForce RTX 3090",
            },
            // RTX 3080 Ti
            rtx3080ti: {
                hashrate: 100,
                powerConsumption: 350,
                price: 1099,
                company: "NVIDIA",
                model: "GeForce RTX 3080 Ti",
            },
            // RTX 3080
            rtx3080: {
                hashrate: 80,
                powerConsumption: 320,
                price: 799,
                company: "NVIDIA",
                model: "GeForce RTX 3080",
            },
            // RTX 3070 Ti
            rtx3070ti: {
                hashrate: 60,
                powerConsumption: 290,
                price: 599,
                company: "NVIDIA",
                model: "GeForce RTX 3070 Ti",
            },
            // RTX 3070
            rtx3070: {
                hashrate: 40,
                powerConsumption: 150,
                price: 399,
                company: "NVIDIA",
                model: "GeForce RTX 3070",
            },
        },
        //Quaddro
        quaddro: {
            // RTX 6000 Ada
            rtx6000ada:{
                hashrate: 150,
                powerConsumption: 300,
                price: 4645,
                company: "NVIDIA",
                model: "Quadro RTX 6000 Ada",
            },
            // RTX 5000 Ada
            rtx5000ada: 
            {
                hashrate: 120,
                powerConsumption: 250,
                price: 2495,
                company: "NVIDIA",
                model: "Quadro RTX 5000 Ada",
            },
            // RTX 4500 Ada
            rtx4500ada: 
            {
                hashrate: 90,
                powerConsumption: 210,
                price: 1795,
                company: "NVIDIA",
                model: "Quadro RTX 4500 Ada",
            },
            // RTX 4000 Ada
            rtx4000ada: 
            {
                hashrate: 60,
                powerConsumption: 130,
                price: 1095,
                company: "NVIDIA",
                model: "Quadro RTX 4000 Ada",
            },
        }
    },

    // AMD
    amd: {},

    // Intel
    intel: {}
};

export const powerGenerator = {
    /*
    power production: Watts produced
    price: Price to purchase
    upkeep: To pay per cycle
    environment: Affects environmental score
    */
    diesel: {
        DG2: {
            powerProduction: 2000,
            price: 580,
            upkeep: 8,
            environment: -4,
            model: "Diesel Generator 2kW"
        },
        DG5: {
            powerProduction: 5000,
            price: 1200,
            upkeep: 15,
            environment: -10,
            model: "Diesel Generator 5kW"
        },
        DG10: {
            powerProduction: 10000,
            price: 2560,
            upkeep: 28,
            environment: -20,
            model: "Diesel Generator 10kW"
        },
        DG20: {
            powerProduction: 20000,
            price: 5300,
            upkeep: 54,
            environment: -40,
            model: "Diesel Generator 20kW"
        }
    },
    solar: {
        SF10: {
            powerProduction: 10000,
            price: 2560,
            upkeep: 28,
            environment: + 10,
            model: "Solar Farm 10kW"
        }
    }
};

export const ownedGPU = [
    /*
    Format is as follows: 
    company, product, model
    */
    {
        company: "nvidia",
        product: "geforce",
        model: "rtx4090",
        crypto: "btc",
        clock: 1
    },
    {
        company: "nvidia",
        product: "geforce",
        model: "rtx4080",
        crypto: "btc",
        clock: 1
    }
];

export const ownedPowerGenerator = [
//     {
//         type: "diesel",
//         model: "DG2"
//     }
]