// find leap year in proper way 



function isLeapYear(year){
    if(year%4==0){
        if(year%100==0){
           if(year%400==0){
                console.log("It is leap Year")
           }
           else{
               console.log("It is not a leap Year.")
           }
        }
        else{
            console.log("It is leap Year")
        }
    }
    else{
        console.log("It is not a leap Year")
    }
}

let getLeapYear = isLeapYear(2100)
