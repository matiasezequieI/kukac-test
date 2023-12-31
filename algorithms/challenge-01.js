const palindromesInRange = (start, end) => {
  if (Number(start) === Number(end)) throw Error('Inputs must have different values')

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
      'The first number must be less than the last'
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

const test = palindromesInRange(0, 0);
console.log(test);
