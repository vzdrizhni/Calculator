const calculator = {
    total,
    next,
    operation
}

const calculate = (calculator, buttonName) => {
    let {total, next, operation} = calculator;
    switch (buttonName) {
        case '+/-': {
            calculator.total = total * -1;
            calculator.next = next * -1;
            break;
        }
        case '%': {
            calculator.total = total % next;
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