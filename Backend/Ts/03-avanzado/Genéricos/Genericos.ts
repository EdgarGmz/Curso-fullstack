import {}
/**
 * Los 'generics' en TS son una caracteristica que permite
 * crear componenetes, funciones, clases o interfaces que 
 * pueden trabajar con diferentes tipos de datos, manteniendo
 * la seguridad de los tipos. Su principal función es 
 * proporcionar flexibilidad y reutilizarlo en código, permitiendo
 * que el tipo de dato defina en el momento de uso, en vez de 
 * estar fijado de antemano.
 */

/**
 * Un 'generic' es una forma de declarar un tipo como parámetro,
 * por ejemplo:
 */

function identity<T>(valor: T): T {
    return valor
}

/**
 * Aquí 'T' es un parámetro de tipo que se determina cuando se 
 * llama a la función
 */

// PRINCIPAL FUNCIÓN
/**
 * - Permitir que funciones, classes o interfaces trabajen con 
 *  cualquier tipo de dato, sin perder el tipado estático.
 * 
 * - Evitar la duplicación de código para diferentes tipos.
 * 
 * - Mejorar la reutilización y la robustez del código.
 */

// CASOS COMÚNES
/**
 * - Funciones utilitarias (com filtros, mapeos, etc.).
 * 
 * - Estructura de datos (listas, pilas, colas).
 * 
 * - Clases o iterfaces que deden ser independientes del tipo
 *  de dato que manejas (por ejemplo, repositorios, servicios).
 * 
 * - Componentes en frameworks como React (props y estados tipados)
 */

// 1. INFERENCIA DE TIPOS (NO SIEMPRE NECESITAS <T>)
// TS es bastante inteligente

function identidad<T>(valor : T): T {
    return valor
}

const a = identidad(10)
const b = identidad("Edgar")
const c = identidad(true)

// Error común 
// identidad<number> = "Hola"

// 2. GENÉRICOS Vs any (MUY IMPORTANTE)
// Con any:
function id(valor: any): any {
    return valor
}

const x = id("hola")
// x.toFixed() // Error en runtime

// CON GENÉRICOS
function first<T>(valor: T): T {
    return valor 
}

first([1, 2, 3]) // number | undefined
first(['a', 'b', 'c']) //string | undefined

// Error común
function second(arr: any[]): any {
    return arr
}

// 4. MULTIPLES GENÉRICOS 
function merge<T, U>(a: T, b: U): T & U {
    return {...a, ...b}
}

const result = merge (
    {id: 1},
    {name: "Edgar"}
)
// { id: number, name: string }

/**
 * Esto se usa mucho en utilidades configuración
 * composición de objetos
 */

// 5. Restricciones (extends)}
// Cuando no cualquier tipo es válido

function lengthOf<T extends { length: number }> (value: T): number {
  return value.length
}

lengthOf("Hola")
lengthOf([1, 2, 3])
lengthOf(10) // Error

// Error común 
function lenOf<T> (value: T){
    return value.length
}

// 6. Genéricos en interfaces (backend real)
interface ApiResponse<T>{
    data: T,
    error: string | null
}

interface User {
    id: number,
    email: string
}

const response: ApiResponse <User> = {
    data: { id: 1, email: "test@correo.com" },
    error: null
}

/**
 * Muy común en:
 *  - APIs.
 *  - fetch.
 *  - axios.
 *  - servicios.
 */

// 7. Genéricos en clases (repositorios)
class Repository<T> {
    private items: T[] = []

    add(item: T){
        this.items.push(item)
    }

    getAll(): T[]{
        return this.items
    }
}

interface Product{
    id: number,
    name: string
}

const productRepo = new Repository<Product>()
productRepo.add({ id: 1, name: "Laptop"})

// 8. Genéricos con 'keyof' (nivel inetermedio-avanzado)
function getProperty<T, K extends keyof T> (obj: T, key: K): T[K]{
    return obj[key]
}

const user = { id: 1, name: "Edgar" }
getProperty(user, "name")
getProperty(user, "age") // Error

// 9. Genéricos con Promise y async (uso diario)
async function fetchData<T>(): Promise<T> {
    const response = await fetch("url")
    return response.json()
}

const usr = await fetchData<User>

// 10. Errores comúnes 
// Usar genéricos cuando no hace falta 
function log<T>(value: T): void {
    console.log(value)
}

// Mejor
function log2(value: unknown): void{
    console.log(value)
}

// Usar 'any' dentro de un genérico
function find<T>(arr: T[], id: number): T | undefined {
  return arr.find(item => (item as any).id === id) // 🚨
}

// Mejor 
function find2<T extends { id: number }> (arr: T[], id: number): T | undefined {
    return arr.find(item => item.id === id)
}