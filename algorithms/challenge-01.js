const palindromesInRange = (start, end) => {
  if (!start && !end) throw Error('Both inputs must be provided');

  if (typeof start !== 'number' || typeof end !== 'number')
    throw Error('Both inputs must be numbers');

  if (start > end)
    throw Error(
      'The start of the range must be less than or equal to the end of the range'
    );

  let result = [];

  for (let i = start; i <= end; i++) {
    let numToString = String(i);
    let reversedNum = numToString.split('').reverse().join('');
    if (numToString == reversedNum) {
      result.push(i);
    }
  }
  return result;
};

const test = palindromesInRange(0, '205');
console.log(test);
