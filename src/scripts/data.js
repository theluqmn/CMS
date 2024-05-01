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
                product: "GeForce RTX 4090",
            },

            // RTX 4080
            rtx4080: {
                hashrate: 150,
                powerConsumption: 320,
                price: 1199,
                company: "NVIDIA",
                product: "GeForce RTX 4080",
            },

            // RTX 4070 Ti
            rtx4070ti: {
                hashrate: 120,
                powerConsumption: 285,
                price: 899,
                company: "NVIDIA",
                product: "GeForce RTX 4070 Ti",
            },

            // RTX 4070
            rtx4070: {
                hashrate: 90,
                powerConsumption: 240,
                price: 549,
                company: "NVIDIA",
                product: "GeForce RTX 4070",
            },

            // RTX 3090 Ti
            rtx3090ti: {
                hashrate: 140,
                powerConsumption: 450,
                price: 1999,
                company: "NVIDIA",
                product: "GeForce RTX 3090 Ti",
            },

            // RTX 3090
            rtx3090: {
                hashrate: 120,
                powerConsumption: 350,
                price: 1499,
                company: "NVIDIA",
                product: "GeForce RTX 3090",
            }
        },

        //quaddro
    },

    // AMD
    amd: {},

    // Intel
    intel: {
        // ARC
        arc: {
            // A770

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
        model: "rtx4090"
    },

    {
        company: "nvidia",
        product: "geforce",
        model: "rtx4080"
    }
]; 