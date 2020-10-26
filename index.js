const { getPureNumbers } = require('./lib/numbers');

(async () => {
    if ( process.argv[2]) {
        const pureNumbersCount = parseInt(process.argv[2])
        try {
            const pureNumbers = await getPureNumbers(pureNumbersCount);
            console.log(pureNumbers.join(' ')) 
        } catch (error) {
            console.error(`Failed generate pure numbers - `, error);
        };
        
    } else {
        console.error('How many pure number are you looking for? specifiy the number as argv');
        process.exit(0);
    };
})();
