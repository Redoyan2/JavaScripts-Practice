



function calculateInterest(asset, interestRate, time){
    let interest = asset*time*(interestRate/100);
    return interest;
}
let getInterest = calculateInterest(5000, 10, 3);
console.log(getInterest);