import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  total = Number(total);
  // total += buttonName;
  switch (buttonName) {
    case '+/-': {
      total = (total * -1).toString();
      console.log(calculator, total);
      break;
    }   
    // case '%' || '+' || '-' || 'X' || '÷': {
    //   total = operate(total, next, operation);
    //   break;
    // }
    // case 'AC': {
    //   total = null;
    //   next = null;
    //   operation = null;
    //   break;
    // }
    // case '=': {
    //   total = operate(total, next, operation);
    //   break;
    // }
    default:
      total = (total + buttonName).toString();
      break;
  }
  return {total, next, operation};
};

export default calculate;
