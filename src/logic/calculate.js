import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  switch (buttonName) {
    case '+/-': {
      total *= -1;
      next *= -1;
      break;
    }
    case '%' || '+' || '-' || 'X' || '÷': {
      total = operate(total, next, operation);
      break;
    }
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '=': {
      total = operate(total, next, operation);
      break;
    }
    default:
      break;
  }
  return total;
};

export default calculate;
