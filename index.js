const Calculate = {
  factorial(inputNum){
    // If input number is a negative number it throws an error
    if(inputNum < 0){
      throw new Error;
    }
    // Initialize total value to start at 1
    let totalValue = 1;
    // Run loop from starting number down to 1
    for(let i=inputNum;i>0;i--){
      totalValue *= i;
    };
    // Return factorial value
    return totalValue;
  }
}

module.exports = Calculate;


