//  kelvin to remain a constant variable
const kelvin = 293;
// celsius variable is 272 degrees less than Kelvin
const celsius = (kelvin - 272);
// formula for calculating Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// temperature rounding action
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ${fahrenheit} degrees Fahrenheit.');
