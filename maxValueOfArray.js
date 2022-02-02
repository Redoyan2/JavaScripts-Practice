// find a max value of an array 


let arr = [4, 5, 2, 7, 9, 8,10,200]

function maxValue(arr){
    let maxNumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if(maxNumber<arr[i]){
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}


let getMax = maxValue(arr);
console.log(getMax);