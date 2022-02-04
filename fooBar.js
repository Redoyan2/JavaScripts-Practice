// write a code display foo when the arrat item divisible by 3 and bar when array item  divisible by 5, also display foobar when it divisible by 3 and 5. 



function fooBar(number){
    for( let i = 1; i<=number; i++){
        if(i%3==0 && i%5==0){
            console.log('foobar');
        }
        else if(i%3==0){
            console.log("foo");
        }
        else if(i%5==0) {
            console.log('bar');
        }
        else{
            console.log(i);
        }
    }
}

fooBar(20);