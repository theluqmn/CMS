// Function that formats number for text usage

export function numRound(number) {
	if (number >= 1000 && number < 1000000) {
        // Thousands
        number = Math.floor(number / 1000);
        number = `${number}k`;
        return number;

    } else if (number >= 1000000 && number < 1000000000) {
        // Millions
        number = Math.floor(number / 1000000);
        number = `${number}m`;
        return number;

    } else if (number >= 1000000000 && number < 1000000000000) {
        // Billions
        number = Math.floor(number / 1000000000);
        number = `${number}b`;
        return number;
        
    } else {
		return number.toFixed(2);
	};
};
