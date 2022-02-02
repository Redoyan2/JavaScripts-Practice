


// paper Requirements 

function paperRequirements(numberOfFirstBook, numberOfSecondBook, numberOfThirdBook){
    numberOfPagesInFirstBook = numberOfFirstBook*100;
    numberOfPagesInSecondBook = numberOfSecondBook*200;
    numberOfPagesInThirdBook = numberOfThirdBook*300;
    let totalPages = numberOfPagesInFirstBook + numberOfPagesInSecondBook + numberOfPagesInThirdBook;
    return totalPages;

}

let getTotalPages = paperRequirements(50,60,70);
console.log("The Total Pages Requre: ", getTotalPages);