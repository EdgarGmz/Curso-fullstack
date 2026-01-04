// EJERCICIO #1
/**
 * Crea una función que sume dos numeros y devuelva 
 * el resultado
 */

function sumar(n1: number, n2:number): number {
    return n1 + n2
}

console.log(`El resultado de la suma es: ${sumar(3,5)}`)

// EJERCICIO #2
/**
 * Escribe una función que recibe un string y devuelva cuantas
 * vocales tiene
 */

function getVocals(word: string) : number{
    let c : number = 0
    const vocals : string[] = ['a','e','i','o','u','A','E','I','O','U']

    // Recorrer cada letra de las vocales
    for(const letter of word){
        if(vocals.includes(letter)){
            c++
        }
    }

    return c
}

const getVocalsV2 = (word: string): number =>
    [...word].filter(l => 'aeiouAEIOU'.includes(l)).length


const w :string = 'Edgar es el mas guapo del salon'
console.log(`La palabra ${w} tiene ${getVocalsV2(w)} vocales`)

// EJERCICIO #3
/**
 * Implementa una función que reciba un objeto con nombre y edad,
 * y devuelva un string con un saludo.
 */

interface persona {
    nombre: string,
    edad: number
}

const yo : persona = {
    nombre: "Edgar Gmz",
    edad: 35
}

function Saludar(p:persona): string {
    return `Hola mi nombre es ${p.nombre} y tengo ${p.edad} años, Mucho gusto!`
}

console.log(Saludar(yo))

// EJERCICIO #4
/**
 * Implementa una función que reciba un array de 
 * números y devuelva el número mayor
 */

const n: number[]=[1,2,3,4,5,6,7,8,9,0]

const getMayor = (lista: number[]) : number => {
    return Math.max(...lista)
}

console.log(`El numero mayor de la lista es ${getMayor(n)}`)

// EJERCICIO #5
/**
 * Crea una función flecha que multiplique dos números
 */

const getProduct = (n1 : number, n2 : number) =>{
    return n1 * n2
}

console.log(`El resultado de la multiplicación es ${getProduct(5,2)}`)

// EJERCICIO #6
/**
 * Escribe una función que reciba un número y devuelva true
 * si es par, y false si es impar
 */

const isParImpar = (n:number) : string =>{
    return n % 2 === 0 ? 'par' : 'impar'
}

const numero : number = 21
console.log(`El numero ${numero} es un número ${isParImpar(numero)}`)

// EJERCICIO #7
/**
 * Implementa una función con parametros opcionales
 *
 */

function getMessage(nombre: string, mood?: boolean) : string {
    let message : string = ""

    mood ? message =`Hola ${nombre} espero que estes teniendo un buen dia` :    
        message = `Hola ${nombre} espero que te vallas a la verga!`
    
    return message
}

console.log(getMessage("Edgar"))

// EJERCICIO #8
/**
 * Haz una función que reciba un array de strings y devuelva
 * un solo strings concatenado, separado por comas
 */

const mochila = ["libreba", "lapiz", "pluma", "laptop", "calculadora", "cargador"]

const cosas_que_hay_en_mi_mochila = (m : string []) : string =>{
    let cadena = ""
    for(let c of m){
        cadena += c + ', '
    }
    return cadena
}

// Método simplificado
const separator = " + "
const cosas_que_hay_en_mi_mochilaV2 = (m: string []) : string => {
    return m.join(separator)
}

// Método con reduce
const cosas_que_hay_en_mi_mochilaV3 = (m: string []) : string =>{
    return m.reduce((acc, item, index) => 
        index === 0 ? item : acc + ', ' + item
    , "")
}

console.log(cosas_que_hay_en_mi_mochila(mochila))
console.log(cosas_que_hay_en_mi_mochilaV2(mochila))
console.log(cosas_que_hay_en_mi_mochilaV3(mochila))

// EJERCICIO #10
/**
 * Escribe una función genérica que reciba un array de cualquier
 * tipo y devuelve el primer elemento
 */

const ciencias : string [] = []
const numeros = [1,2,3,4,5,6,7,8,9]
const bool = [true, false, true, false, true]

function getFirstElement(a:any []) : any | undefined{
    try{
        return a[0]
    }catch(e){
        throw new Error((e as Error).message)
    }
}

function getFirstElementTipado <T> ( a : T[] ) : T | undefined{
    try{
        return a[0]
    }catch(e){
        throw new Error((e as Error).message)
    }
}

console.log(`El primer elemento del arreglo es ${getFirstElementTipado(ciencias)}`)
console.log(`El primer elemento del arreglo es ${getFirstElementTipado(numeros)}`)
console.log(`El primer elemento del arreglo es ${getFirstElementTipado(bool)}`)

/**
 * EJERCICIO #11
 */
// TODO: Callbacks
function ejecutar(fn: (msg: string) => void){
    fn("Hola desde ejecutar...")
}

// ejecutamos la función
ejecutar(msg => console.log(msg))