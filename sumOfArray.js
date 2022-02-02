// find the sum of an Array 


let arr = [2, 3, 9,5,7,6,6,4,6]


function sumOfArray(){
    let sum = 0;
for( let i = 0; i<arr.length; i++){
    sum = sum + arr[i];
}
return sum;
}


let getSum = sumOfArray();
console.log(getSum);

