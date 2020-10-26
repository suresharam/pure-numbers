 /**
  * @async
  * @function getPureNumbers Function to generate sequence of first N pure numbers.
  * @param {Number} count 
  * @returns {Promise<Array>} Array of pure numbers
  */
 module.exports.getPureNumbers = async count => { // doesn't require to be an async for this task, but when N is huge number that may cause space issue
 const numbers = [];
 /**
  * 44 is the first possible pure number as it is having even count of digits and all 4s and a palindrom
  * The next possible pure number is 55. 
  * Possible sequence would be that,these two numbers can be pre and postfixed with 4 and 5 to get the next number.
  */
 numbers.push('44', '55');
 const pureNumbers = [];
 while(pureNumbers.length < count) {
     const number = numbers.shift();
     pureNumbers.push(number);
     numbers.push(`4${number}4`);
     numbers.push(`5${number}5`)
 };

 // Let's ensure the numbers are sorted to get the correct sequence of numbers from low to high
 pureNumbers.sort((first, second) => {
     if(first.length === second.length) {
         return first < second
     } else {
         return first.length < second.length
     }
 });

 return pureNumbers;
};