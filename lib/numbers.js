module.exports.getPureNumbers = async count => { // doesn't require to be an async for this task, but when N is huge number that may cause space issue
    const numbers = [];
    numbers.push('44', '55');
    const pureNumbers = [];
    while(pureNumbers.length < count) {
        const number = numbers.shift();
        pureNumbers.push(number);
        numbers.push(`4${number}4`);
        numbers.push(`5${number}5`)
    };

    pureNumbers.sort((first, second) => {
        if(first.length === second.length) {
            return first < second
        } else {
            return first.length < second.length
        }
    });

    return pureNumbers;
};