// write a code that can remove duplicate Item from a array and create a new array 


const myArray = ['rahim', 'karim', 'jamal', 'rahim'];
console.log(myArray[1]);

function removeDuplicateItem(){
    let newArray = [];
    for(const item of myArray){
        if(newArray.indexOf(item)==-1){
            newArray.push(item);
        }
    }
    return newArray;
}


let getNewArray = removeDuplicateItem();
console.log(getNewArray);