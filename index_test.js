const assert = require("assert");
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if 5! is equal to 120', () => {
      // Setup 
      const inputNum = 5;
      const expectedValue = 120;

      // Exercise 
      const actualValue = Calculate.factorial(inputNum);

      // Verify 
      assert.equal(actualValue, expectedValue);
    });
    it('test if 3! is equal to 6', () => {
      // Setup 
      const inputNum = 3;
      const expectedValue = 6;

      // Exercise 
      const actualValue = Calculate.factorial(inputNum);

      // Verify 
      assert.equal(actualValue, expectedValue);
    });
    it('Edge Case: test if 0! is equal to 1', () => {
      // Setup 
      const inputNum = 0;
      const expectedValue = 1;

      // Exercise 
      const actualValue = Calculate.factorial(inputNum);

      // Verify 
      assert.equal(actualValue, expectedValue);
    });
    it('Throw Error if negative number is input', () => {
      // Setup 
      const inputNum = -1;
      const expectedValue = Error;

      // Exercise 
      // const actualValue = Calculate.factorial(inputNum);

      // Verify 
      assert.throws(
        () => {
          Calculate.factorial(inputNum);
        }, expectedValue);
    });
  });
});
