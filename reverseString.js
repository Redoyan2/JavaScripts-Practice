let myString = 'How are you';

function reverseString(text){
    let newstring = '';
    for(const letter of text ){
        newstring = letter + newstring;
    }
    return newstring;
}

let getReverseString = reverseString(myString);

console.log(getReverseString);