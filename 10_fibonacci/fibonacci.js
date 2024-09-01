const fibonacci = function(n) {

    if (n == 0){
        return 0
    }

    if(n < 0){
        return "OOPS"
    }
    if(n == 1){
        return 1;
    }

    if(n == 2){
        return 1;
    }

    n = Number(n)

    let number1 = 1;
    let number2 = 1;
    let lastNumber=0;
    for (let i =2 ; i < n ; i++){
        lastNumber = number1+number2;
        number1 = number2;
        number2 = lastNumber;
    }
    return lastNumber;

};

// Do not edit below this line
module.exports = fibonacci;
