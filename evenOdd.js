// even odd find out 




function isEvenOrOdd(num){
    if (num%2==0){
        return ( "It is even number");
    }
    else{
        return ("It is Odd number");
    }
}

let getTypeOfNumber = isEvenOrOdd(40);
console.log(getTypeOfNumber);