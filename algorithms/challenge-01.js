const palindromesInRange = (start, end) => {
  if (!start && !end) throw Error('Both inputs must be provided');

  if (typeof start !== 'number' || typeof end !== 'number')
    throw Error('Inputs must be numbers');

  if (!Number.isInteger(start) || !Number.isInteger(end))
    throw Error("Inputs must be integers");

  if (start < 0 || end < 0)
    throw Error('Inputs must be positive numbers')

  if (start === end)
    throw new HttpException('Inputs must be a valid range')

  if (start > end)
    throw Error(
      'The start of the range must be less than the end of the range'
    );

  const result = [];

  for (let i = start; i <= end; i++) {
    let numToString = String(i);
    let reversedNum = numToString.split('').reverse().join('');
    if (numToString == reversedNum) {
      result.push(i);
    }
  }
  return result;
};

const test = palindromesInRange(1, 205);
console.log(test);
