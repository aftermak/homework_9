let isAgree;
let number;
let operator;
const validateOperator = ['+', '-', '*', '/', 'pow'];

const getNumber = (message) => {
    do { 
        number = prompt(message);
        number = number.trim();
        if (isNaN(+number) || number === '') {
        alert('Incorrect number');
        }
    } while (isNaN(+number) || number === '');
    console.log(+number);
    return +number;
}

const getOperator = (message) => {
    do {
        operator = prompt(message);  
        validateOperator.includes(operator);      
        if (!validateOperator.includes(operator)) {
            alert('Enter the valid operator');
        }
    } while (!validateOperator.includes(operator));
    console.log(operator);
    return operator;
} 

function calculate(operator){
    return function (numberX){
        return function (numberY){
            if(operator == '-'){
                const result = numberX - numberY;
                alert(`Operation Diffr finished with result: ` + result);
                console.log(result)
                return result;
            }
            if(operator == '+'){
                const result = numberX + numberY
                alert(`Operation Sum finished with result: ` + result);
                console.log(result)
                return result;
            }
            if(operator == '*'){
                const result = numberX * numberY;
                alert(`Operation Mult finished with result: ` + result);
                console.log(result)
                return result;
            }
            if(operator == '/'){
                const result = numberX / numberY;
                alert(`Operation Div finished with result: ` + result);
                console.log(result)
                return result;
            }
            if(operator == 'pow'){
                const result = Math.pow(numberX, numberY);
                alert(`Operation Pow finished with result: ` + result);
                console.log(result)
                return result;
            }
        }
    }  
};

alert('Hello');
do {
    calculate(getOperator('Enter the operator: +, -, *, /, pow'))(getNumber('Enter the number X'))(getNumber('Enter the number Y'));
    isAgree = confirm('Do you want to do other operations?'); 
}while (isAgree);

// GetMinMax
  
minNumber = (getNumber('Enter the Min number'));
maxNumber = (getNumber('Enter the Max number'));
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isBetween (min,max){
  return function (number) {
    if ( number >= min && number <= max) {
      return true;
    }
  }
};
console.log(array.filter(isBetween(minNumber,maxNumber)))

//   Sorting

const products = [
  {name: 'Product 1', quantity: 10, price: 25},
  {name: 'Product 2', quantity: 3, price: 55},
  {name: 'Product 3', quantity: 22, price: 35},
]

function sorting (field, sortType) { 
  if (field === 'name' && sortType === 'asc') {
        return () => {
          return 1;
        };
      }
  if (field === 'name' && sortType === 'desc') {
        return () => {
          return -1;
        };
      }
  if (sortType === 'asc'){
    return function sorting (a, b) {
      return a[field] - b[field]
    }
  }
  if (sortType === 'desc') {
    return function sorting (a, b) {
      return b[field] - a[field]
    }
  }
  };
console.log(products.sort(sorting('price','desc')));

    
    
    