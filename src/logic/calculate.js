import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
  function isNumber(item) {
    return /[0-9]+/.test(item);
  }
  // console.log(isNumber('1'));
  total = Number(total);
  // next = Number(next);
  switch (buttonName) {
    case '+/-': {
      total = (total * -1).toString();
      console.log(calculator, total);
      break;
    }   
    case '+': {
      operation = '+';
      next = '0';      
      break;
    }
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '=': {
      total = operate(total, next, operation).toString();
      // console.log(typeof total === 'string');
      next = null;
      break;
    }
    case '1' : 
    case '2' :
    case '3' :
    case '4' :
    case '5' :
    case '6' :
    case '7' :
    case '8' :
    case '9' :
    case '0' : {
      if (next === null) {total = (total + buttonName).toString()};
      if (next !== null) {next = (next + buttonName).toString()};
      if (operation !== null && next === null) {
        total = null; 
        next = null; 
        operation = null;
      };
      break;
    }
    default:      
      break;
  }
  return {total, next, operation};
};

export default calculate;
