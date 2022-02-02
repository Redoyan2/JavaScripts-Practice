// find a max value between two Number  


function findMax(x, y){
    if(x != y){
        if(x > y ){
            console.log("The maximum numbser is: ", x);
        }
        else{
            console.log("The maximum value is: ", y);
        }
    }
    else{
        console.log("two value are equal, please enter unequal value.")
    }
    
}

findMax(9,7)

