// Function that formats number for text usage

export function numRound(number) {
	if (number >= 1000 && number < 1000000) {
        // Thousands
        number = (number / 1000).toFixed(2);
        number = `${number}k`;
        return number;

    } else if (number >= 1000000 && number < 1000000000) {
        // Millions
        number = (number / 1000000).toFixed(2);
        number = `${number}m`;
        return number;

    } else if (number >= 1000000000 && number < 1000000000000) {
        // Billions
        number = (number / 1000000000).toFixed(2);
        number = `${number}b`;
        return number;
        
    } else {
		return number.toFixed(2);
	};
};