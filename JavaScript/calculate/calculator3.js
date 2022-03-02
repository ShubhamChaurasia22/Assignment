
// array stores the screen value
// display displaying on screen
let display = ""
let array = [];
let result=[];

// targetting all number buttons
let digits = document.querySelectorAll('.numbers button')
for (const digit of digits) {

    // adding event listners on buttons if clicked ,storing in display 
    digit.addEventListener('click', function () {
        document.getElementById('display').value += digit.innerHTML
        // console.log(digit.innerHTML);
        display += digit.innerHTML;
        console.log("display ",display);
    })
}

// targetting all operator buttons
let symbol = document.querySelectorAll('.operators button, #percent')

// iterating over buttons 
for (const item of symbol) {

    // adding event listners on buttons if clicked ,pushing in array
    item.addEventListener('click', function () {
        document.getElementById('display').value += item.innerHTML;
        // console.log(item.innerHTML);
        if(display.length!=0) {
            array.push(display);
        }
        array.push(item.innerHTML)
        display = ""
        console.log("array ",array);
        console.log("display ",display);
    })
}


// calculator function
function calculator() {
    // pushing last number to array
    array.push(display)

    // iterating over array
    for (let i = 0; i < array.length; i++) {

        if (array[i] == "+") {
            let a;
            if (result.length!=0) {
                a = result[result.length-1];
             } else {
               a = array[i - 1];
            }
            let b = array[i + 1]
            let res = add(a, b);
            result.push(res);
            console.log("array ",array);
            console.log("result array: ",result);
        }
        else if (array[i] == "-") {
            let a;
            if (result.length!=0) {
                a = result[result.length-1]
             } else {
               a = array[i - 1]
            }
            let b = array[i + 1]
            let res = sub(a, b);
            console.log("array ",array);
            result.push(res);
            console.log("result array: ",result);
        }
        else if (array[i] == "x") {
            let a;
            if (result.length!=0) {
                a = result[result.length-1]
             } else {
               a = array[i - 1]
            }
            let b = array[i + 1]
            let res = mul(a, b);
            console.log("array ",array);
            result.push(res);
            console.log("result array: ",result);
        }
        else if (array[i] == "÷") {
            let a;
            if (result.length!=0) {
                a = result[result.length-1]
             } else {
               a = array[i - 1]
            }
            let b = array[i + 1]
            let res = div(a, b);
            console.log("array ",array);
            result.push(res);
            console.log("result array: ",result);
        }
        else if (array[i] == "%") {
            let a;
            if (result.length!=0) {
                a = result[result.length-1]
             } else {
               a = array[i - 1]
            }
            let b = array[i + 1]
            let res = percent(a, b);
            console.log("array ",array);
            result.push(res);
            console.log("result array: ",result);
        }
    }
    document.getElementById('display').value=result[result.length-1]
    display=result[result.length-1] + "";
    console.log("display ",display);
    console.log("type of display ",typeof(display));
    array=[];
    console.log("array ",array);
}

// clearing display
function clearAll() {
    result=[]
    array=[]
    display = ''
    document.getElementById('display').value = ''
}

// delete fn

function remove() {
    let str=document.getElementById('display').value;
    console.log("before sliced ",str);
    str=str.slice(0,-1);
    document.getElementById('display').value=str;
    console.log("after sliced ",str);
    if(display.length!=0){
        if(result.length!=0) {
            clearAll();
        } else {
            display=display.slice(0,-1)
            console.log("display ",display);
        }
        
    }else {
        array.pop()
        console.log("array ",array);
    }

}


// all the arithemtic functions
function add(a, b) {
    return Number(a) + Number(b);
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    return Number(a) / Number(b);
}

function percent(a, b) {
    return (Number(a)* Number(b))/100;
}

