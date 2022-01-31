
// celcious to farenheit without input 

function convertTemperature(temperatureInCelcious) {
    let temperatureInFarenheit = temperatureInCelcious*(9/5)+32;
    return ("the temperature is: "+ temperatureInFarenheit + " degree farenheit.")
}


let getTemperature = convertTemperature(60);
console.log(getTemperature);



