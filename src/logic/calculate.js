import operate from './operate'

const calculate = (calculator, buttonName) => {
    let {total, next, operation} = calculator;
    switch (buttonName) {
        case '+/-': {
            calculator.total = total * -1;
            calculator.next = next * -1;
            break;
        }
        case '%' || '+' || '-' || 'X' || '÷': {
            calculator.total = operate(total, next, operation);
            break;
        }
        case 'AC': {
            total = null;
            next = null;
            operation = null;
            break;
        }
        case '=': {
            calculator.total = total;
            break;
        }
        default:
            break;
    }
}

export default calculate