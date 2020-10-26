const { getPureNumbers } = require('./lib/numbers');
/**
 * Problem:-   Find the first N pure numbers
 * Given an integer N, the task is to print first Nth pure numbers. A number is said to be pure if
 * It has an even number of digits.
 * All the digits are either 4 or 5.
 * And the number is a palindrome.
 * First few pure numbers are 44, 55, 4444, 4554, 5445, 5555, …
 * Examples
 * Input: N = 4
 * Output: 44 55 4444 5445
 * Input: N = 10
 * Output: 44 55 4444 4554 5445 5555 444444 454454 544445 554455 
 */

(async () => {
    if ( process.argv[2]) {
        const pureNumbersCount = parseInt(process.argv[2])
        try {
            // It takes time when the input N value is high
            pureNumbersCount > 10000 ? console.log(`Generating ${pureNumbersCount} of pure numbers. Please wait... \n`) : '';
            const pureNumbers = await getPureNumbers(pureNumbersCount);
            console.log(pureNumbers.join(' ')) // print array elements as space separated
        } catch (error) {
            console.error(`Failed generate pure numbers - `, error);
        };
        
    } else {
        console.error('How many pure number are you looking for? specifiy the number as argv');
        process.exit(0);
    };
})();
