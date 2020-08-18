const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
    const num1 = Big(numberOne);
    const num2 = Big(numberTwo);
    let total;
    
    switch (operation) {
        case '÷': {
            total = num1.div(num2);
            return total;
        }
        case 'X': {
            total = num1.times(num2);
            return total;
        }
        case '-': {
            total = num1.minus(num2);
            return total;
        }
        case '+': {
            total = num1.plus(num2);
            return total;
        }
        case '%': {
            total = num1.mod(num2);
            return total;
        }
        default:
            break;
    }
}

export default operate