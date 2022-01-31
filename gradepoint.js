// grade point by if else 


function gradePointCalculate(marks){
    if(marks >= 80){
        console.log("You are getting A+");
    }
    else if(marks >= 70){
        console.log("You are getting A")
    }
    else if(marks >= 60){
        console.log("You are getting A-")
    }
    else if(marks >= 50){
        console.log("You are getting B")
    }
    else if(marks >= 40){
        console.log("You are getting C")
    }
    else if(marks >= 33){
        console.log("You are getting D")
    }
    else if(marks >= 0){
        console.log("You are getting Fail")
    }
    else{
        console.log("Invalid keywords.")
    }
}
let getTheGrade = gradePointCalculate(65);
console.log(getTheGrade);