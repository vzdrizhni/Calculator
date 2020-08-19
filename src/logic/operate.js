const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total;

  switch (operation) {
    case '÷': {
      total = num1.div(num2);
      break;
    }
    case 'X': {
      total = num1.times(num2);
      break;
    }
    case '-': {
      total = num1.minus(num2);
      break;
    }
    case '+': {
      total = num1.plus(num2);
      break;
    }
    case '%': {
      total = num1.mod(num2);
      break;
    }
    default:
      break;
  }
  return total;
};

export default operate;
