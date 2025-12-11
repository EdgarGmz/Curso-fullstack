// EJERCICIO #1
// Declara una variable 'nombre_completo' de tipo string
let nombre_completo: string = "Edgar Gomez"

// Declara una variable 'edad' de tipo number
let edad: number = 35

// Declara una variable 'es_estudiante' de tipo boolean
let es_estudiante: boolean = false

// Imprimir en consola
// if(es_estudiante){
//     console.log(`Hola, mi nombre es ${nombre_completo}, tengo ${edad} años y soy estudiante.`)
// } else {
//     console.log(`Hola, mi nombre es ${nombre_completo}, tengo ${edad} años y no soy estudiante.`)
// }

// EJERCICIO #2
/**
 * Declara variables sin especificar su tipo explicitamente,
 * TypeScript deberia inferir el tipo automaticamente
 * Intenta asignar un tipo diferente y observa el error
 */

// 

// EJERCICIO #3
/**
 * Crea una funcion sumar que reciba dos numeros y retorne su resultado
 * Crea una funcion saludar que reciba un nombre (string) y no retorne nada (void)
 */

// function sumar(n1: number, n2: number): number{
//     return n1 + n2
// }

// function saludar(nombre: string, mensaje: string): string{
//     return `Hola ${nombre}, ${mensaje}`
// }

// console.log(saludar("Edgar", `Bienvenido al curso de TypeScript. La suma de la oprecion es: ${sumar(234,345)}`))

//EJERCICIO #4
/**
 * Declara una variable codigo que puede ser string o number
 * Asignale primero un string, luego un number
 * Crea una funcion que acepte string o number como parametro
 */

// function imprimirCodigo(code: string | number): string | number{
//     return code
// }

// console.log(imprimirCodigo("osdyfyoasdhf"))
// console.log(imprimirCodigo(123123123423))

// EJERCICIO #5
/**
 * Declara una variable 'semaforo' que solo pueda tener valores: "rojo", "amarillo" y "verde".
 * Intenta asignarle "azul" y observa el error.
 */

// let semaforo: "rojo" | "amarillo" | "verde" = "verde"

// console.log(`El semaforo esta en color: ${semaforo}`)

// EJERCICIO #6
/**
 * Crea un objeto 'persona' con propiedades: nombre (string), edad (number), activo (boolean).
 * Define los tipos inline (sin interface).
 */

// let persona: { nombre: string, edad: number, activo: boolean }={
//     nombre: "Edgar Gomez",
//     edad: 35,
//     activo: false
// }

// console.log(`El nombre de la persona es: ${persona.nombre}, tiene ${persona.edad} 
//     anios de edad y ${persona.activo ? 'su cuenta esta activa' : 'su cuenta no esta actica' }.`)

// EJERCICIO #7
/**
 * Crea una funcion 'procesaDato' que acepte string, number o boolean.
 * Usa typeof para verificar el tipo y procesar cada caso diferente.
 * Retorna un mensaje descriptivo segun el tipo.
 */

// function procesaDato(dato: string | number | boolean): string{
//     let mensaje: string = ""
//     if(typeof dato === "string") mensaje = `El dato propocionado es un string: ${dato}`
//     if(typeof dato === "number") mensaje = `El dato proporcionado es un numero: ${dato}`
//     if(typeof dato === "boolean") mensaje = `El dato proporcionado es un booleano: ${dato}`
//     return mensaje
// }

// console.log(procesaDato(false))

// EJERCICIO #8
/**
 * Declara una variable de tipo any
 * Usa type assertion para tratarla como string y obten su longitud
 */

// let datoCualquiera: any = false
// let longitud = (datoCualquiera as string).length

// console.log(`La longggitud del string es: ${longitud}`)

// EJERCICIO #9
/*
* Declara un arreglo de numeros y una funcion que calcule
el promedio de sus elementos
*/

// let numeros: number[] = [10, 20, 30, 40, 50]

// function calcularPromedio(nums: number[]){
//     let suma: number = 0
//     for(let num of nums){
//         suma += num
//     }
//     return suma / nums.length
// }
// console.log(`El promedio de los numeros es: ${calcularPromedio(numeros)}`)

// EJERCICIO $10
/**
 * Crea una funcion que reciba un array de strings y retorne
 * un nuevo array con la longitud de cada string
 * 
 */

// let palabras: string [] = ["TypeScript", "JavaScript", "Angular", "React"]

// function obtenerLongitudes(arr: string[]){
//    let longitudes: number[] = []
//    for(let p of arr){
//     longitudes.push(p.length)
//    } 
//    return longitudes
// }
// console.log(`Las longitudes de cada elemento del arreglo son: ${obtenerLongitudes(palabras)}`)

// EJERCICIO #11
/**
 * Define un tipo personalizado (type alias) para representar un 
 * producto con propiedades: nombre, precio y disponible. Crea una 
 * funcion que reciba un producto y retorne un mensaje con su informacion.
 */

// type Product = {name: string, price: number, isAvailable: boolean}

// let product: Product = {
//     name: "Playstation 5",
//     price: 499.99,
//     isAvailable: true
// }

// function showProductInfo(prod: Product): string{
//     return `Product's name: ${prod.name} \nPrice: ${prod.price} \nAvailable: ${prod.isAvailable}`
// }

// console.log(showProductInfo(product))

// EJERCICIO #12
/**
 * Crea una función que reciba un parametro opcional. Si el parametro
 * se proporciona, imprimelo; si no, imprime 'No se proporciona parametro´.
 */

// function mostrarParametro(parametro?: string): void{
//     if(parametro) console.log(`El parametro proporcionado es: ${parametro}`)
//     else console.log("No se proporciona parametro")
// }

// mostrarParametro("Hola Mundo!")
// mostrarParametro()

// EJERCICIO #13
/**
 * Crea una función que acepte un array de numeros y retorne el mayor
 * y el menor usando un objeto.
 */

// let numeros: number[] = [12,34,6,7,3346,23,6,468,967,345,45,723534,234.234]

// function obtenerMayorYMenor(numeros: number[]): { mayor: number, menor: number }{
//     let mayor: number = Math.max(...numeros)
//     let menor: number = Math.min(...numeros)
//     return { mayor, menor }
// }

// let resultado = obtenerMayorYMenor(numeros)

// console.log(`El numero mayor es: ${resultado.mayor} y el numero menor es: ${resultado.menor}`)

/**
 * EJERCICIO #14
 * Crea una tupla para presentar informacion de un libro: titulo (string),
 * anio de publicacion (number), autor (string) y disponible (boolean).
 * Declara una variable con ese tipo y asegurale valores.
 */

let libro: [string, number, string, boolean] = ['Pensar rapido, pensar despacio', 2011, 'Daniel Kahneman', true]
console.log(`Titulo: ${libro}`)