/**
 * EJERCICIO #1
 * Crea una función que:
 * 
 *  1. Reciba un numero. * 
 *  2. Devuelva su doble. * 
 */

function getDoubleNumber(a){
    return a * 2
}

// Comprobación
let myNumber = 29
const res = getDoubleNumber(myNumber)
console.log("Ejercicio #1")
console.log(`El doble del numero ${myNumber} es ${res}`)