// Find Max value from Three Number 


function findMax(a, b, c){
        if( a > b && a > c){
            console.log("The max value is: ", a);
        }
        else if (b>a && b>c){
            console.log("The max value is: ", b);
        }
        else{
            console.log("The max value is: ", c);
        }
}


findMax(6,8,4);