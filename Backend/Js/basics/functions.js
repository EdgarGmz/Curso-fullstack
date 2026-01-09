/**
 * EJERCICIO #1
 * Crea una función 'saludar' que:
 * 
 *  - Retorne el string 'Hola Mundo'.
 */
function saludar(){
    return "Hola Mundo!"
}

// Comprobación
console.log("Actividad #1")
console.log(saludar())
console.log("\n")

/**
 * EJERCICIO #2
 * Crea una función que 'despedir' que:
 *  
 *  - Retorne "Adiós [nombre]".
 */
function despedir(nombre){
    return `Adiós ${nombre}, hasta la próxima!`
}

// Comprobación
console.log("Actividad #2")
console.log(despedir("Edgar"))
console.log("\n")

/**
 * EJERCICIO #3
 * Crea una función 'calcularArea()' que:
 * 
 *  - Reciba la 'base' y la 'altura' y retorne el 
 *    área de un rectangulo.
 */

const calcularArea = (a,b) => a*b

// Comprobación
const altura = 2
const base = 4
console.log("Actividad #3")
console.log(`El área del recutangulo es: ${calcularArea(base, altura)} cm2.`)
console.log("\n")

/**
 * EJERCICIO #4
 * Crea una función 'esMayorDeEdad' que reciba la edad y retorne 'true' 
 * si es mayor de 18 años.
 */

const esMayorDeEdad = (edad) => edad >= 18 

// Comprobación
console.log("Actividad #4")
console.log(`La persona es ${esMayorDeEdad(10) 
    ? "es mayor de edad"
    : "es menor de edad"
}`)
console.log("\n")

/**
 * EJERCICIO #5
 * Convierte esta funcion a arrow function:
 *      
 *      function triple(n) {
 *          return n*3
 *      }
 */

const triple = (n) => n*3

// Comprobación
const n = 5
console.log("Actividad #5")
console.log(`El triple del número ${n} es: ${triple(n)}`)
console.log("\n")

/**
 * ACTIVIDAD #6
 * Crea una función flecha 'obtenerIniciales que:
 * 
 *  - Reciba nombre y apellido y retorne las iniciales en 
 *    mayusculas.
 */
function obtenerIniciales(nombre, apellido){
    return (
        nombre[0].toUpperCase() +
        apellido[0].toUpperCase()
    )
}

const nombre = "Edgar"
const apellido = "Gomez"

// Comprobación
console.log("Actividad #6")

console.log(`Las iniciales de ${ nombre } ${ apellido } son: 
    ${obtenerIniciales(nombre, apellido)}`)
console.log("\n")

/**
 * EJECERCICIO #7
 * Crea una función 'saludarPersonalizdo' que:
 *  - Reciba el nombre (obligatorio) y y saludo (opcional, 
 *    por defecto 'Hola')
 */
function saludarPersonalizado(nombre, saludo = "Hola"){
    return `${saludo}, ${nombre}!`
}

// Comprobación
console.log("Ejercicio #7")
console.log(saludarPersonalizado("Edgar", "Hola y bienvenido al curso de JavaScript"))
console.log("\n")

/**
 * EJERCICIO #8
 * Crea una función 'calcularDescuento' que:
 * 
 *  - Reciba el precio y el descuento (por defecto 10%).
 */

function calcularDescuento(precio, descuento = 10){  
    descuento = descuento ?? 10
    return (precio * descuento) / 100
}

const precio_producto = 1500
const descuento_venta = undefined

// Comprobación
console.log("Actividad #8")
console.log(`El descuento del producto es de: 
    ${calcularDescuento(precio_producto, descuento_venta)}`)
console.log("\n")

/**
 * EJERCICIO #9
 * Crea una función 'aplicarOperación' que:
 * 
 *  - Reciba dos números y una función de operación, y 
 *    retorne el resultado.
 */
function aplicarOperacion(a, b, op){
    return op(a,b)
}

const n1 = 9
const n2 = 2
// Comprobación
const suma = aplicarOperacion(n1, n2, (a, b)=> a + b )  
const resta = aplicarOperacion(n1, n2, (a, b) => a - b)

console.log(`El resultado de la suma es ${suma}`)
console.log(`El resultado de la resta es: ${resta}`)

console.log("\n")

/**
 * EJERCICIO #10
 * Crea una función repetir que:
 * 
 *  - Reciba una función y un número, y lo ejecute 'n' veces
 */
function repetir(fn, n){
    
    for(let i = 0; i < n ; i ++){
        fn()
    }
    
}
const veces = 1

// Comprobación
console.log("Actividad #10")
repetir(() => console.log(`Mensaje repetido ${veces > 1 ? "veces" : "una vez"}`), veces)
console.log("\n")

// EJERCICIOS EXTRA
/**
 * EJERICICIO #11
 * 
 * Crea una función llamada sumar que:
 * 
 *  - Reciba dos números.
 *  - Retorne la suma de esos dos números.
 */
function sumar(a, b) {
    return a + b
}

// Comprobación
console.log("Actividad #11")
console.log(`La suma de los números es: ${sumar(4,9)}`)
console.log("\n")

/**
 * EJERCICIO #12
 * Crea una función llamada 'esPar' que:
 * 
 *  - Reciba un número.
 *  - Retorne:
 *      1. 'true' si es par.
 *      2. 'false' si es impar.
 */
function esPar(n){
    return n % 2 === 0
}

const data = 3
console.log("Actividad #12")
console.log(`El número ${data} es ${esPar(data) ? 'es par' : 'es impar'}`)
console.log("\n")

/** 
 * ACTIVIDAD #13
 * Crea una función llamada 'mayorDeTres' que:
 * 
 *  - Reciba tres números.
 *  - Retorne el número mayor.
*/
const mayorDeTres = (a, b, c) =>{
    let mayor = a
    if(b > mayor) mayor = b
    if(c > mayor) mayor = c 

    return mayor
}

let data1 = 2234
let data2 = 98
let data3 = 2
// Comprobación
console.log("Actividad #13")
console.log(`El mayor de los número es: ${mayorDeTres(data1, data2, data3)}`)
console.log("\n")

/**
 * EJERCICIO #14
 * Crea una función llamada 'sumarArreglo' que:
 *  
 *  - Reciba el arreglo de números.
 *  - Retorne la suma total de todos los elementos.
 */
function sumarArreglo(arr = 0){
    let suma = 0

    for(let i of arr){
        suma += i
    }
    return suma
}

const myArr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16]

const sumArr = sumarArreglo(myArr)

// Comprobación
console.log("Ejercicio $14")
console.log(`La suma de los elementos del arreglo es: ${sumArr}`)
console.log("\n")

/**
 * EJERCICIO #15
 * Crea una función llamada 'obtenerPares' que:
 * 
 *  - Reciba un arreglo de números.
 *  - Retorne un nuevo arreglo que contenga los números
 *    pares.
 */
function obtenerPares(arr){
    let newArr = []

    for(let i of arr){
        if (i % 2 === 0) newArr.push(i)
    }

    return newArr
}

const a = [1,2,3,4,5,6,7,8,9]

// Comprobación
console.log("Ejercicio #15")
console.log(`Los números pares del arreglo son: ${obtenerPares(a)}`)
console.log("\n")

/**
 * EJERCICIO #16
 * Crea una función 'duplicarValores' que:
 * 
 *  - Reciba el arreglo de números.
 *  - Retorne un nuevo arreglo donde:
 *      - Cada valor sea el doble del original.
 */
function duplicarValores(arr){
    let newArr = []
    
    for(let i of arr){
        newArr.push(i * 2)
    }

    return newArr
}

// Comprobación
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const res = duplicarValores(b)

console.log("Actividad #16")
console.log(`El doble de los valores del arreglo son: ${res}`)
console.log("\n")

/**
 * EJERCICIO #17
 * Crea una función llamada 'operar' que:
 * 
 *  - Reciba dos números.
 *  - Reciba un callback.
 *  - Ejecute el callback pasando los dos números.
 *  - Retorne el resultado del callback.
 * 
 */
function operar(a, b, callback){
    return callback(a, b)
}

const resultado = operar(2, 3, (a, b) =>{
    return (a*2) + (b*3)
})

// Comprobación 
console.log("Actividad #17")
console.log(`El resultado es: ${resultado}`)
console.log("\n")

/**
 * EJERCICIO #18
 * Crea una función llamada 'procesarArreglo' que:
 * 
 *  - Reciba el arreglo de números.
 *  - Reciba un callback que:
 *      1. Reciba un número.
 *      2. Retorne un número.
 *  - Retorne un nuevo arreglo con el resultado de aplicar el 
 *    callback a cada elemento.
 */
function procesarArreglo(arr, callback){

    let newArr = []


    for(let i of arr){
       
        newArr.push(callback(i))
    }
    return newArr
}

// Comprobación
const datos = [1,2,3,4,5,6,7,8,9]

console.log("Actividad #18")
console.log(procesarArreglo(datos), n => n * 10)
console.log("\n")

/**
 * EJERCICIO #19
 * Crea una función llamada 'ejecutarNVeces' que: 
 * 
 *  - Recibe un número 'n', 
 *  - Reciba un callback.
 *  - Ejecute el callback 'n' veces.
 */
function ejecutarNVeces(n, cb){
    for(let i = 0; i < n ; i ++){
        cb()
    }
}

// Comprobación 
console.log("Actividad #19")
const nVeces= 1
ejecutarNVeces(nVeces,()=> console.log(`Repetido ${nVeces > 1 ? `${nVeces} veces`: 'una vez'}`))
console.log("\n")

/**
 * EJERCICIO #20
 *  
 */

 
