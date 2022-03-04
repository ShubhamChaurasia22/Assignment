function calculate(array) {
    let result = '';
    array.push();
    console.log("array value is: ",array);
    if(array.length === 0) {
        console.log("Store some value");
    }else {
        for (let i = 0; i < array.length; i++) {
            if ((i%2 === 0) && (array[i] === '+' || array[i] === '-' || array[i] === '*' || array[i] === '/' || array[i] === '%' || array[i]=== '**')) {
                console.log("Operator must be in an odd place",array[i]);
            }
            else if ((i%2 === 1) && !(isNaN(array[i]))) {
                console.log("Operand must be in an even place",array[i]);
            }
            else {
                switch (array[i]) {
                    case '+':
                        result = (Number(array[i-1]) + Number(array[i+1])).toFixed(3);
                        array[i+1] = result;
                        break;
                    case '-':
                        result = (Number(array[i-1]) - Number(array[i+1])).toFixed(3);
                        array[i+1] = result;
                        break;
                    case '*':
                        result = (Number(array[i-1]) * Number(array[i+1])).toFixed(3);
                        array[i+1] = result;
                        break;
                    case '/':
                        if(array[i+1] === 0) {
                            result = "Denominator can not be 0";
                        }else {
                            result = (Number(array[i-1]) / Number(array[i+1])).toFixed(3);
                            array[i+1] = result;
                        }
                        break;
                    case '%':
                        if(array[i+1] === 0) {
                            result = "Denominator can not be 0";
                        }else {
                            result = (Number(array[i-1]) % Number(array[i+1])).toFixed(3);
                            array[i+1] = result;
                        }
                        break;
                    case '**':
                        result = (Number(array[i-1]) ** Number(array[i+1])).toFixed(3);
                        array[i+1] = result;
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return result;
}