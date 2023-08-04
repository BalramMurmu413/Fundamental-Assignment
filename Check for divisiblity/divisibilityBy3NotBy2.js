
function printDivisibleBy3(arg) {
    for (let i = 0; i < arg.length; i++) {
      if (arg[i] % 3 === 0 && arg[i]%2===1) {
        console.log(arg[i]);
      }
    }
  }
  
  
  const numbers = [9, 4,33,3, 7, 12, 18, 21, 25,30];
  printDivisibleBy3(numbers);
  