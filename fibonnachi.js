// create a fibonnachi series 




function makeFibonachi(number){
    let feboSeries = [0, 1]
    for (let i =0; i<number-2; i++){
        let febo = (feboSeries[i]) + (feboSeries[i+1]);
        feboSeries.push(febo);
    }
    return feboSeries;
}



let getFibonnachiSeries = makeFibonachi(8);
console.log(getFibonnachiSeries);