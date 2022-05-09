
function FaranheitToCelsius(faranheit) {
    //let celsius = (((faranheit - 32)*5)/9)
    //console.log(faranheit + " °F font " + celsius + "°C")
    return (((faranheit - 32)*5)/9)
}

function CelsiusToFaranheit(celsius) {
    // let faranheit = (((celsius*9)/5)+32)
    // console.log(celsius  + " °C font " + faranheit + "°F")
    return (((celsius*9)/5)+32);
}

console.log(FaranheitToCelsius(20).toFixed(2));
console.log(CelsiusToFaranheit(16).toFixed(2));
