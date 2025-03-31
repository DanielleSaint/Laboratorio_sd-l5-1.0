//*1. Maria is calculating the cost of monthly payments. For every transaction there is a $3 fee and a 1% (0.01) interest fee. 
//  * Given an input transaction amount, export a function that returns the value of what she should be paying.
//  * This function should be able to take a number as input, and return a number as output.

//const prompt = require("prompt-sync")();
import promptSync from 'prompt-sync';
const prompt = promptSync();


let payment = parseInt(prompt("Ingrese la transaccion que desea realizar: "));

export function costCalculator(amount) {
    let Total = (amount * 0.01) + amount + 3
        return Total.toFixed(2);
}

const Pay1 = costCalculator(payment);
console.log(`Total pago mas impuestos e intereses: ${Pay1}$`);

