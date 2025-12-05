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

let datoCualquiera: any = false
let longitud = (datoCualquiera as string).length

console.log(`La longggitud del string es: ${longitud}`)