let array = [12,'+',3,'-',3,'**',2];
let result = '';

for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
        case '+':
            result = Number(array[i-1])  + Number(array[i+1]);
            array[i+1] = result;
            break;
        case '-':
            result = Number(array[i-1])  - Number(array[i+1]);
            array[i+1] = result;
            break;
        case '*':
            result = Number(array[i-1])  + Number(array[i+1]);
            array[i+1] = result;
            break;
        case '/':
            if(Number(array[i+1]) == 0) {
                result = "Denominator can not be 0";
            }else {
                result = Number(array[i-1]) / Number(array[i+1]);
                array[i+1] = result;
            }
            break;
        case '%':
            if(Number(array[i+1]) == 0) {
                result = "Denominator can not be 0";
            }else {
                result = Number(array[i-1]) % Number(array[i+1]);
                array[i+1] = result;
            }
            break;
        case '**':
            result = Number(array[i-1])  ** Number(array[i+1]);
            array[i+1] = result;
            break;
        default:
            break;
    }
}
console.log(result);