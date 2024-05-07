// Function that formats number for text usage, returns the formatted text
export function numRound(num) {
    let number = Math.abs(num);
    let metric = "";

    switch (true) {
        case (number > 1000 && number < 1000000):
            // Thousand
            number = number / 1000;
            metric = "k";
            break;
            
        case (number > 1000000 && number < 1000000000):
            // Million
            number = number / 1000000;
            metric = "m";
            break;

        case (number > 1000000000 && number < 1000000000000):
            // Billion
            number = number / 1000000000;
            metric = "b";
            break;

        case (number > 1000000000000 && number < 1000000000000000):
            // Trillion
            number = number / 1000000000000;
            metric = "t";
            break;
    }
    
    // Format the decimals
    if (number > 100) {
        number = number.toFixed(1);
    } else if (number > 10) {
        number = number.toFixed(2);
    } else {
        number = number.toFixed(3);
    }

    let formatted = `${num < 0 ? "-" : ""}${number}${metric}`;
    return formatted;
};