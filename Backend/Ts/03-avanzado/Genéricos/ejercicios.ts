/**
 * EJERCICIO #1
 * Crea una función genérica llamada 'wrapValue' que:
 *  - Reciba un valor de cualquier tipo.
 *  - Devuelve un objeto con la siguiete forma:
 * 
 *      {
 *          value: <el mismo tipo recibido>
 *      }
 */

function wrapValue<T>(value:T): { value: T } {
    return {
        value: value
    }
}

// Comprobar resultado
const a = wrapValue('Hola') // con string
const b = wrapValue(10) // con number
const c = wrapValue(true) // con boolean

console.log('Ejercicio #1')
console.log(a)
console.log(b)
console.log(c)
console.log('\n')

/**
 * EJERCICIO #2
 * Crea una función genérica llamada getFirstElement que:
 *  - Reciba un arreglo de cualquier tipo.
 *  - Devuelve el primer elemento del arreglo.
 *  - Si el arreglo esta vacío, debe devolver undefined.
 */

function getFirstElement<T> (arr: T[]) : T | undefined {   
    return arr[0]
}

// Comprovación de Resultado
console.log('Ejercicio #2')
const a_number = [1,2,3,4,5,6]
const a_string = [, "b", "c", "d", "e", "f"]

console.log(getFirstElement(a_number))
console.log(getFirstElement(a_string))

console.log('\n')

/**
 * EJERCICIO #3
 * Crea una función genérica llamada makePair que:
 *  - Reciba dos valores de tipos distintos. 
 *  - Devuelva un arreglo (tupla) con ambos valores.
 *  - El tipo del arreglo debe reflejar exactamente el orden
 *    y tipo de los valores recibidos.
 */

function makePair<T,U>(a:T, b:U): [T,U]{
    return [a, b]
}

// Comprobación
const p1 = makePair(1, "uno")
const p2 = makePair(true, { id: 1 })
console.log("Ejercicio #3")
console.log(p1)
console.log(p2)
console.log("\n")


/**
 * EJERCICIO #4
 * Crea una función genérica llamada getId que:
 *  - Reciba un objeto de cualquier tipo.
 *  - Pero ese objeto debe tener una propiedad id de tipo 'number'.
 *  - devuelve 'id'.
 */

function getId<T extends { id: number }>(a: T) : number{
    return a.id
}

// comprobación
type p = {
    id: number,
    name: string
}

interface Prueba {
    id: number, 
    stock: number
}

const p: Prueba ={
    id: 1,
    //name: "Prueba"
    stock: 14
}

console.log("Actividad #4")
console.log(`El id del tipo prueba es: ${getId(p)}`)
console.log('\n')

/**
 * EJERCICIO #5
 * Crea una función genérica llamada 'getProperty' que:
 *  - Reciba un objeto.
 *  - Reciba una clave de ese objeto.
 *  - Devuelve el valor correspondiente a esa a clave .
 *  - TypeScript debe impedir usar claves que no existen.
 */
function getProperty<T, U extends keyof T>(obj:T, key: U): T[U]{
    return obj[key]
}

// comprobación
const user = {
    id: 1,
    name: "Edgar",
    position: "Developer"
}

console.log("Ejercicio #5")
console.log(`La propiedad id de la constante user es: ${getProperty(user,"id")}`)
console.log(`La propiedad nombre de la constante user es: ${getProperty(user,"name")}`)
console.log(`La propiedad position de la constante user es: ${getProperty(user,"position")}`)
console.log("\n")

/**
 * EJERCICIO #6
 * Crea una función genérica llamada 'getLastElement' que:
 *  - Reciba un arreglo de cualquier tipo.
 *  - Devuelva el último elemento.
 *  - Si el elemento está vacío, devuelve undefined.
 */

function getLastElement<T>(arr: T[]): T | undefined{
    return arr[arr.length-1]    
}

// comprobación
console.log("Ejercicio #7")

const arr1 = [1,2,3,4,5,6]
const arr2 = ["a", "b", "c", "d", "e",]

console.log(`El último elemento del arreglo 1 es: ${getLastElement(arr1)}`)
console.log(`El último elemento del arreglo 2 es: ${getLastElement(arr2)}`)

console.log("\n")

 /**
  * EJERCICIO #7
  * Crea una función genérica llamada 'getNameOrDefault' que:
  *  - Reciba un objeto genérico.
  *  - Ese objeto puede o no tener la propiedad 'name'.
  *  - Si 'name' existe -> devolverla.
  *  - Si no existe -> devolver 'Anonymous'.
  */

 function getNameOrDefault<T extends { name?: string }>(obj: T): string {
    return obj.name ?? 'Anonymous'
 }

 // Comprobación
 type person = {
    id: number,
    name?: string,
    position?: string
 }

 const employee: person = {
    id: 123
 }

 const client: person = {
    id: 3455,
    name: "Edgar",
    position: "Developer"
 }

 const getEmployee = getNameOrDefault(employee)
 const getClient = getNameOrDefault(client)

 console.log(`El nombre del empleado es: ${getEmployee} `)
 console.log(`El nombre del cliente es: ${getClient}`)


 console.log('\n')

 /**
  * EJERCICIO #8
  * Crea una función genérica llamada 'createArray' que:
  *     - Reciba un valor genérico T.
  *     - Reciba un número length.
  *     - Devuelva un arreglo de longitud 'length'.
  *     - Todos los elementos deben ser del valor recibido.
  *     - Si no se especifica T, debe asumir 'string' como tipo por defecto.
  */
function createArray<T = string>(value: T, length: number): T[] | string {
    let arr: T[] = []

    // llenar el arreglo hasta la longitud proporcionada
    for(let i = 0 ; i<= length - 1 ; i ++){
        arr.push(value)
    }

    return typeof arr

}

// Comprovación
console.log("Actividad #8")

const myUser = {
    name: "Edgar",
    age: 35
}

const myArr = createArray(true,10)

console.log("Los elementos del arreglo son:")
console.log(createArray(1,10))

console.log("\n")

/**
 * EJERCICIO #9
 * Crea una función genérica llamada 'mapArray' que:
 *  - Que reciba un arreglo de tipo T[].
 *  - Reciba una funcíon callback que: 
 *      - Reciba un elemento de tipo T.
 *      - Devuelve un valor de tipo U.
 *  - Devuelve un arreglo de tipo U[].
 */
function mapArray<T, U>(arr: T[], callback: (e: T) => U) : U[] {
    const result: U[] = []

    for(const item of arr){
        result.push(callback(item))
    }
    return result
}

console.log("Ejercicio #9")

console.log("\n")

/**
 * EJERCICIO #10
 * Crea una función genérica llamada filterArray que: 
 * 
 *  - Reciba:
 *      1. Un arreglo T[].
 *      2. Un callback(item: T) => boolean.
 * 
 *  - Devuelva:
 *      1. Un arreglo nuevo T[].
 * 
 *  - Solo debe incluir los elementos donde el callback devuelva 'true'.
 */
function filterArray<T>(arr: T[], callback: (item: T)=> boolean): T[]{
    let newArr: T[] = []

    for(let i = 0; i < arr.length ; i++ ){
        let element = arr[i]

        if( element !== undefined && callback(element) ){
            newArr.push(element)
        }
    }
    return newArr
}

// Comprobación
const arreglo_numeros = [12,23,45,75,84,22,84,95,23,97,54]
const arreglo_cadenas = ["hola", "como", "estas", "?", "esto", "es", "una", "prueba"]

const res_numeros = filterArray(arreglo_numeros, a => a % 3 === 0)
const res_cadenas = filterArray(arreglo_cadenas, a => a.length === 4)

console.log("Actividad #10")
console.log(`El resultado del arreglo de los números es: ${res_numeros}`)
console.log(`El resultado del arreglo de los cadenas es: ${res_cadenas}`)

console.log("\n")

/**
 * EJERCICIO #11
 * Crea una función genérica llamada 'pluck' que:
 * 
 * Reciba:
 *  - Un arreglo de objetos T[].
 *  - Una clave 'K'.
 * 
 * Restricciones:
 *  -   'K' debe ser una clave válida de 'T'.
 * 
 * La función debe:
 *  - Devolver el arreglo con los valores de esa clave.
 * 
 * El tipo de retorno debe ser: T[K][].
 */
function pluck<T, K extends keyof T>(arr: T[], key: K ): T[K][] {
    const result : T[K][] = []

    for( const item of arr){
        result.push(item[key])
    }

    return result
}

// Comprobación
const users = [
    {id: 1, name: "Edgar"},
    {id: 2, name: "Karina"}
]

const ids = pluck(users, "id")
const names = pluck(users, "name")

console.log("Actividad #11")
console.log(ids)
console.log(names)
console.log("\n")

/**
 * ACTIVIDAD #12
 * Crea una función genérica que permita extraer propiedades especificas
 * de un objeto, con seguridad de tipos.
 * 
 *  - La función debe:
 *      1. Recibir un objeto.
 *      2. Recibir un arreglo de claves válidas de ese objeto.
 * 
 *  - Debe devolver:
 *      1. Un objeto que contenga solo las propiedades indicadas.
 * 
 *  - TypeScript debe:
 *      1. Impedir usar claves que no existen en el objeto.
 *      2. Inferir correctamente el tipo de retorno. 
 */
function getValues<T, K extends keyof T>(obj: T, key: K[]): T[K][] {
    let result: T[K] [] = []

    for(const item of key){
        result.push(obj[item])
    }
    return result
}

// Comprobación
const gamer = {
    id: 1234,
    alias: "Wifly",
    ranking: 2,
    position: "defensive"
}

const values = getValues(gamer, ["ranking", "alias"])

console.log("Actividad #12")
console.log(values)
console.log("\n")

/**
 * EJERCICIO #13
 * Crea una función genérica que:
 * 
 *  1. Reciba un arreglo de objetos.
 *  2. Reciba una clave válida de esos objetos.
 *  3. Devuelva un arreglo con los valores de esa clave 
 *     para cada objeto.
 *  4. TypeScript debe impedir usar claves que no existan.
 */
function getValuesObj<T, K extends keyof T>(obj: T[], key: K): T[K][]{
    let response: T[K][] = []

    for(let item of obj){
        response.push( item[key])
    }
    return response
}

type Gamer ={
    id: number,
    name: string,
    isAlive?: boolean,
    ranking: number
}

const squad: Gamer[] =[
    { id: 1, name: "wifly", isAlive: true, ranking: 1 },
    { id: 1, name: "zatu", isAlive: true, ranking: 2 },
    { id: 1, name: "kase o", isAlive: true, ranking: 3 },
    { id: 1, name: "2Pac", isAlive: false, ranking: 4 }
]

const listGamer = getValuesObj(squad, "name")

console.log("Actividad #13")
console.log(listGamer)
console.log("\n")

/**
 * EJERCICIO #14
 * Crea una función genérica que:
 *  1. Reciba un objeto.
 * 
 *  2. Reciba un arreglo de claves válidas de ese objeto.
 * 
 *  3. Devuelva un nuevo objeto que:
 *      - Solo tenga las propiedades en el arreglo de claves.
 *      - Conserve los tipos originales de cada propiedad.
 * 
 *  4. TypeScript debe impedir usar claves que no existan.
 * 
 */

function getSpecificValue<T, K extends readonly (keyof T)[]>(
    obj: T, 
    keys: K) 
    : {[P in K[number]]: T[P]} {
   
        const result = {} as { [P in K[number]]: T[P] }

        for (const key of keys) {
        result[key] = obj[key]
        }

        return result

}

// Comprobación
const testObj = {
    id: 1,
    name: "Test",
    age: 25,
    active: true
}

const specificValues = getSpecificValue(testObj, ["id", "name"] as const)
console.log("Actividad #14")
console.log(specificValues)
console.log("\n")