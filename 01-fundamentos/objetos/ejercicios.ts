// EJERCICIOS DE ARREGLOS EN TYPESCRIPT

// EJERCICIO 6
// Crea un arreglo de números y una función que calcule la suma de todos sus elementos.

// EJERCICIO 7
// Crea un arreglo de strings y una función que retorne un nuevo arreglo con la longitud de cada string.

// EJERCICIO 8
// Crea una función que reciba un arreglo de números y retorne el mayor y el menor valor usando un objeto.

// EJERCICIO 9
// Crea un arreglo de objetos 'producto' con propiedades: nombre (string), precio (number). Escribe una función que retorne el producto más caro.

// EJERCICIO 10
// Crea una función que reciba un arreglo de booleanos y retorne cuántos son true y cuántos son false.
// EJERCICIOS DE OBJETOS EN TYPESCRIPT

// EJERCICIO 1
// Crea un objeto llamado 'auto' con las propiedades: marca (string), modelo 
// (string), año (number) y encendido (boolean). Imprime el objeto en consola.
const auto ={
    marca: "KIA",
    modelo: "Forte",
    anio: 2023,
    encendido: true
}

console.log(`La marca del carro es: ${auto.marca}\nEl modelo es: ${auto.modelo}\nEl año del auto es: ${auto.anio} y \n${auto.encendido ? 'esta encendido' : 'esta apagado'}`)

// EJERCICIO 2
// Agrega un método al objeto 'auto' llamado 'encender' que cambie la propiedad 
// 'encendido' a true y muestre un mensaje en consola.
let miAuto = {
    modelo: "KIA",
    arrancar: function(){
        console.log("Engine Started!...")
    }
}

console.log(`Voy a encender mi auto ${miAuto.modelo}`)
miAuto.arrancar()

// EJERCICIO 3
// Crea una función que reciba un objeto con las propiedades 'nombre' 
// (string) y 'edad' (number) y retorne un string con la información formateada.
type person = {
    name: string,
    age: number,
    isAlive?: boolean
}

const client : person ={
    name: "Albert",
    age: 45,
    isAlive: true
}

const boss : person = {
    name: "Big Boss",
    age: 76    
}

function showInfo(c:person, b: person){
    console.log(`Client's name: ${c.name}\nAge: ${c.age} and ${c.isAlive ? 'is alive' : 'is dead'}`)
    console.log(`Boss' name: ${b.name}\nAge: ${b.age} years old`)
}

showInfo(client, boss)

// EJERCICIO 4
// Crea un array de objetos 'alumnos', cada uno con las propiedades 
// 'nombre', 'matricula' y 'activo'. Escribe una función que retorne solo los alumnos activos.

interface alumnos { nombre: string, matricula: number, activo: boolean }

const a1 : alumnos = {
    nombre: 'Edgar Gmz',
    matricula: 22038,
    activo: true
}

const a2 : alumnos = {
    nombre: 'Jimenez',
    matricula: 22039,
    activo: false
}


const a3 : alumnos = {
    nombre: 'Octavio',
    matricula: 22040,
    activo: true
}


const a4 : alumnos = {
    nombre: 'Alma',
    matricula: 22041,
    activo: false
}

let listaAlumnos : alumnos [] = [a1, a2, a3, a4]

function showInfoAlumnos(lista: alumnos[]){
    lista.map(alumno =>{
        console.log(`\nEl nombre del alumno es ${alumno.nombre}\nsu matricula es ${alumno.matricula}\ny ${alumno.activo ? 'es vigente' : 'es baja'}`)
    })
}

showInfoAlumnos(listaAlumnos)




// EJERCICIO 5
// Define un type alias para representar un objeto 'Libro' con propiedades: 
// título, autor, año y prestado (boolean). Crea una función que reciba un libro y cambie su estado de 'prestado'.
type libro ={
    titulo: string,
    autor: string,
    anio: number,
    prestado: boolean
}

const miLibro : libro = {
    titulo: "Las itermitencias de la muerte",
    autor: "Jose Saramago",
    anio: 2008,
    prestado: false
}

function prestarLibro(l:libro){
    console.log("Prestando libro...")
    l.prestado = true
}

function devolverLibro(l:libro){
    console.log("Devolviendo libro...")
    l.prestado = false
}

function showInfoLibro(l:libro){
    console.log( `${l.titulo} `+ `${l.prestado ? 'ha sido prestado' : 'esta disponible en la biblioteca'} `)
}

showInfoLibro(miLibro)
prestarLibro(miLibro)
showInfoLibro(miLibro)
devolverLibro(miLibro)
showInfoLibro(miLibro)

// EJERCICIO #6
// Crea una arreglo de numeros y una función que calcule
// la suma de todos sus elementos
const listaNumeros : number[] = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9] 

function calcularSumaLista( l:number[] ): number {
    let s : number = 0
    
    for(const i of l){
        s += i
    }
    
    return s
}

function calcularPromedioLista(l:number[]): number {
    let promedio : number = calcularSumaLista(l) / l.length   
    return promedio
}

console.log(`La suma de los elementos del array es: ${calcularSumaLista(listaNumeros)}`)
console.log(`El promedio de la lista es: ${calcularPromedioLista(listaNumeros)}`)

// EJERCICIO #7
// Crea un arreglo de strings y una función que retorne un nuevo arreglo
// con la longitud de cada string
const p : string [] = ['a', 'a2b', 'abc', 'abqwrcd', 'abcd567e', 'abcdef']

function arrayToNumber(a: string []) : number[] {
    let n : number[] = []

    for(const i of a){
        n.push(i.length)
    }

    return n
}

function printNewArray(a: string[]){
    arrayToNumber(a).map(i => console.log(i)+ `\n`)    
}

printNewArray(p)

//EJERCICIO #8
/**
 * Crea un función que reciba un arreglo de numeros y retorne el 
 * mayor y el menor valor usando un objeto
 */

const numeros : number[] = [1,2,3,4,5,22,7,8,9]

function min(a : number []) : number {
    return Math.min(...a)    
}

function max(a: number []): number {
    return Math.max(...a)
}

function minMax(a: number[]) : {pequenio: number ; mayor : number} {   
    return {
        pequenio: min(a),
        mayor: max(a)
    }
}

console.log(`El valor mas pequeño del arreglo es ${minMax(numeros).pequenio} 
                y el mas grandes es ${minMax(numeros).mayor}`)

// EJERCICIO #9
/**
 * Crea un arreglo de objetos producto con propiedades:
 * nombre (string), precio (number). Escribe una funcion que retorne
 * el producto mas caro
 */

interface producto { nombre : string, precio : number, disponible?: boolean}

let detergente : producto = {
    nombre: "Cloralex",
    precio: 19.90    
}

let fritura : producto = {
    nombre : "Sabritas",
    precio: 25.00
}

let bebida : producto = {
    nombre : "Indio",
    precio : 60.00
}

let fruta : producto = {
    nombre : "naranja",
    precio: 9.00
}

let jueguete : producto = {
    nombre: "Hotwheel",
    precio: 25.00
}

const carrito : producto [] = [ detergente, fritura, bebida, fruta, jueguete ]

function getProductMayorOf( a : producto[] ) : producto {

    let m : number = 0
    let n: string = ""

    a.forEach(item => {
        if(item.precio > m) {
            m = item.precio
            n = item.nombre
        }
    })  

    const productoCaro : producto = {
        nombre: n,
        precio: m
    }

    return productoCaro
}

console.log(`El producto mas caro del carrito de compras es: ${getProductMayorOf(carrito).nombre} y su costo es ${getProductMayorOf(carrito).precio}`)

// EJERCICIO 10
/**
 * Crea una función que reciba un arreglo de booleanos y retorne cuantos 
 * son 'true' y cuantos son 'false'
 */

const b : boolean [] = [
    true,
    false,
    false,
    false,
    true,
    true, 
    false,
    false,
    true,
    true, 
    false,
    true,
    true, 
    true, 
    false,
    true,
]

function getTotal(b: boolean[] ) : {f_totales:number ; t_totales:number} {
    let f : number = 0
    let t : number = 0

    b.forEach(i=>{
        if(i){
            t++
        } else {
            f++
        }
    })

    return {
        f_totales: f, t_totales: t
    }
}

const totales = getTotal(b)
console.log(`El numero de elementos verdaderos son: ${totales.t_totales} \ny el número de elementos falsos es: ${totales.f_totales}`)