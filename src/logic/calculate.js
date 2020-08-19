import operate from './operate';

const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;
  
  if (total === null) {
    total = Number(total);
  }  

  switch (buttonName) {
    case '+/-': {
      if (next !== null) {
        next = (next * -1).toString();
      } else {
        total = (total * -1).toString();
      }
      break;
    }   
    case '+': {
      total = String(total);
      operation = '+';
      next = '0';      
      break;
    }
    case 'X': {
      total = String(total);
      operation = 'X';
      next = '0';      
      break;
    }
    case '-': {
      total = String(total);
      operation = '-';
      next = '0';      
      break;
    }
    case '÷': {
      total = String(total);
      operation = '÷';
      next = '0';      
      break;
    }
    case '%': {
      total = String(total);
      operation = '%';
      next = '0';      
      break;
    }
    case '.': {
      total = String(total);
      if (next !== null) {
        if (!next.includes('.')) {
          next = next.concat('.') .toString();
        }        
      } else {
        if (!total.includes('.')) {
          total = total + '.';
        }        
        console.log(calculator);
      }
      break;
      console.log(total, next);
    }
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      break;
    }
    case '=': {
      if (operation !== null && next !== null) {
        total = operate(total, next, operation).toString();
        next = null;
      }      
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
      if (next === null || typeof total === 'string') {
        total = (total + buttonName).toString();
        console.log(total);
      };
      console.log(typeof total === 'string');
      if (next !== null) {next = (next + buttonName).toString()};
      if (operation !== null && next === null) {
        total = buttonName; 
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
