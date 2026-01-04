/**
 * EJERCICIO #1
 * Crea una función llamada 'saludar' que:
 *  - Reciba un callback.
 *  - El callback no recibe parámetros.
 *  - La función 'saludar' ejecuta el callback.
 */

function saludar(callback: () => void) {
    callback()
}
// Comprobación 
console.log("Actividad #1")
const e = () =>{
    console.log("Saludando")
}
saludar(e)
console.log("\n")


/**
 * EJERCICIO #2
 * Crea una función llamada 'enviarMensaje' que:
 *  - Reciba un callback.
 *  - El callback debe recibir un string.
 *  - 'enviarMensaje' debe ejecutar el callback pasando el texto.
 */
function enviarMensaje(callback: (msg: string) => void){
    callback("Hola Mundo!")
}
// Comprobación
console.log("Actividad #2")
enviarMensaje(m => console.log(m))
console.log("\n")


/**
 * EJERCICIO #3
 * Crea una función llamada 'duplicarNumero' que:
 *  - Reciba un número.
 *  - Reciba un callback.
 *  - El callback:
 *      - Recibe un number.
 *      - Devuelve un number.
 *  - 'duplicarNumero' debe ejecutar el callback y devolver el
 *    resultado.
 */
function duplicar(n: number, callback: (n: number) => number): number{
    return callback(n *2)
}

console.log("Actividad #3")
console.log(duplicar(3, d => d ))
console.log("\n")


/**
 * EJERCICIO #4
 * Crea una función llamada 'procesarNumero' que:
 *  - Reciba un número.
 *  - Reciba un callback.
 *  - El callback:
 *      - Recibe un number.
 *      - Devuelve number.
 *  - 'procesarNumero' debe:
 *      - ejecutar el callback con el número recibido.
 *      - devolver el resultado.
 */
function procesarNumero (n: number, callback: (n: number) => number): number{
    return callback(n)
}
console.log("Actividad #4")
console.log(procesarNumero(10, res => res *3))
console.log("\n")

/**
 * EJERCICIO #5
 * Crea una función llamada evaluarNumero que:
 *  - Reciba un número.
 *  - Reciba dos callbacks.
 *      - Uno para cuando el número sea positivo.
 *      - Otra para cuando el número sea negativo.
 *  - Ejecuta el callback correspondiente.
 * 
 *  Considera el 0 como positivo.
 */

function evaluarNumero(n: number, cb_positivo: (n:number)=> void, cb_negativo: (n: number) => void ):void {
    if (n >= 0){
        cb_positivo(n)
    } else {
        cb_negativo(n)
    }
}

function evaluarNumero_alternativa( n: number, checkNumber: (a: number) => boolean): boolean {
    return checkNumber(n)
}

console.log("Actividad #5")
const myNumber = -20

evaluarNumero(myNumber, positive => (console.log(`El número ${positive} es positivo.`)), 
                            negative =>(console.log(`El número ${negative} es negativo.`)))


const evaluar = evaluarNumero_alternativa(myNumber, n=> n >= 0)

let mensaje: string = ""
evaluar ? mensaje = `${myNumber} es positivo.` : mensaje =`${myNumber} es negativo.`

console.log(`Resultado con la función alternativa es: ${mensaje}`)

console.log("\n")

/**
 * EJERCICIO #6
 * Crea una función 'usarCallback' que:
 *  - Reciba un callback con esta firma exacata:
 *      (value: number) => string
 *  - Ejecute el callback con el valor 10.
 *  - Devuelva el string resultante.
 */

console.log("Actividad #6")

function usarCallback(callback: (value: number) => string): string {
    return callback(10)
}

const u = usarCallback(n => `El número es: ${n}`)

console.log(u)

console.log("\n")

/**
 * EJERCICIO #7
 * Crea una función llamada 'validarNumero' que:
 *  - Reciba: un número y un callback.
 *  - El callback debe: recibir un número, devolver un booleano.
 *  - 'validarNumero' debe:     
 *      - Ejecutar el callback recibido.
 *      - Si el callback debe true -> devolver 'Número valido'.
 *      - Si devuelve false -> devolver 'Número invalido'.
 */

function validarNumero(n: number, callback: (a: number)=> boolean): string {
    return callback(n) ? `${n} es un número válido` : `${n} es un número inválido`
}
// Comprobación
console.log("Actividad #7")
const res = validarNumero(12, n => n % 2 === 0)
console.log(res)
console.log("\n")

/**
 * EJERCICIO #8 
 * Crea una función llamada 'transformarNumero' que:
 *  - Reciba: un número y un callback.
 *  - El callback : reciba y devuelva un number.
 *  - 'tranformarNumero' debe: ejecutar el callback y devolver el resultado.
 */
function transformarNumero(n: number, callback: (a: number)=> number): number{
    return callback(n)
}
// Comprobación
console.log("Actividad #8")
const result =transformarNumero(2, n => n <= 10 ? n + 10: n )
console.log(result)
console.log("\n")

/**
 * EJERCICIO #9
 * Crea una función llamada 'procesarArreglo' que:
 *  - Reciba: un arreglo de numeros (number[]), un callback.
 * 
 *  - El callback debe: 
 *      - Recibir un number
 *      - Devolver un number.
 * 
 *  - 'procesarArreglo' debe: 
 *      - Aplicar el callback a cada elemento.
 *      - Devolver un nuevo arreglo con los valores transformados.
 */
function procesarArreglo(
        arr: number[], 
        callback: (n: number) => number)
    : number[] {
    
    return arr.map(callback) 
}

// Comprobación
console.log("Actividad #10")
const myArr = [1,2,3,4,5,6,7,8,9,10]
const newArr = procesarArreglo(myArr, a => a *2)
console.log(newArr)
console.log("\n")

/**
 * EJERCICIO #10
 * Crea una función llamada 'filtrarArreglo' que:
 * 
 *  - Reciba:
 *      - Un arreglo de números (number[]).
 *      - Un callback.
 * 
 *  - El callback:
 *      - Reciba un number.
 *      - Devuelve boolean.
 * 
 *  - 'filtrarArreglo' deve:
 *      - Ejecutar el callback para cada elemento.
 *      - Solo incluir el nuevo arreglo los elementos 
 *        donde el callback devuelva true.
 *      - Devolver el nuevo arreglo.
 *       
 */
function filtrarArreglo(
        arr: number[], 
        callback: (n: number) => boolean | undefined)
    : number[]{

    let newArr: number[] = []   
    let length: number = arr.length

    for(let i = 0 ; i < length ; i ++) {
        const element = arr[i];
        
        if(element !== undefined && callback(element)){
            newArr.push(element)
        }
    }
    
    return newArr
}

// Comprobación
console.log("Actividad #10")
const mArr = [1,2,3,4,5,6,7,8,9,10]

const pares = filtrarArreglo(mArr, a => a % 2 === 0)
const impares = filtrarArreglo(mArr, a => a % 2 !== 0)
console.log("Los números pares son: ")
console.log(pares)
console.log("Los números impares son: ")
console.log(impares)
console.log("\n")