// EJERCICIOS

 /**
  * EJERCICIO #1:
  * Define una interfaz para un objeto 'Libro' con
  * título, autor y año.
  */

 interface Libro {
    titulo: string,
    autor: string,
    anio: number
 }
 
 const miLibro : Libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Marquez",
    anio: 1986
 }

 function showInfoBook(l: Libro){
    console.log(`Título del libro: ${l.titulo}\nAutor: ${l.autor}\nAño de publicación: ${l.anio}`)
 }

 showInfoBook(miLibro)

/**
 * EJERCICIO #2
 * Crea un type para un objeto Usuario con nombre, e-mail y edad
 */

type Usuario = { nombre: string, email: string, edad:number }

const yo: Usuario = {
    nombre: "Edgar Gmz",
    email: "edgar@correo.com",
    edad: 35
}

console.log(`Hola mi nombre es ${yo.nombre}\n,mi correo es ${yo.email}\n y tengo ${yo.edad} años.`)

/**
 * EJERCICIO #3
 * Extiende la interfaz 'Libro' para agregar un campo 'prestado'.
 */

interface book extends Libro {
    prestado: boolean
}

const tomarLibro : book = {
    titulo: "Pensar rápido, pensar despacio",
    autor: "Daniel Khaneman",
    anio: 1995,
    prestado: true
}

console.log(`El ${tomarLibro.titulo} del autor ${tomarLibro.autor} publicado en el año ${tomarLibro.anio} ${tomarLibro.prestado ? 'se encuentra disponible' : 'no esta disponible'}`)

/**
 * EJERCICIO #4
 * Usa un type para crear una union entre 'activo' e 'inactivo'.
 */

type estado = 'activo' | 'inactivo'
const alerta : estado = 'activo'
console.log(alerta)

/**
 * EJERCICIO #5
 * Implementa una función que reciba un objeto 'Usuario' (type)
 * y devuelva su nombre.
 */

type User = {
    userName: string,
    password: string
}

function getUsername(u:User):string{
    return u.userName
}

const myUser : User = {
    userName: "EdgarGmz",
    password:"12345"
}

console.log(`El nombre del usuario es: ${getUsername(myUser)}`)

/**
 * EJERCICIO #6
 * Declara una interfaz para una función que reciba dos
 * números y devuelva un numero.
 */

interface Operation {
    (a: number, b: number): number
}

const sumar: Operation = (n1:number ,n2: number) => {
    return n1 + n2
}

const multiplicar : Operation = (n1: number ,n2:number ) =>{
    return n1 * n2
}
let n1 : number = 5
let n2 : number = 2
console.log(`El resultado de la suma entre ${n1} y ${n2} es ${sumar(n1,n2)}`)
console.log(`El resultado de la multiplicación entre ${n1} y ${n2} es ${multiplicar(n1,n2)}`)

/**
 * EJERCICIO #7
 * Crea un type para un array de strigs llamado 'Palabras'
 */

type Palabras = string []

/**
 * EJERCICIO #8 
 * Usa una interfaz para definir la forma de un objeto 'Animal'
 * con nombre y especie
 */

interface Animal {
    nombre: string,
    especie: string
}

/**
 * EJERCICIO #9
 * Declara un type para una tupla que contenga un string y un numero
 */

type item = [string, number]

/**
 * EJERCICIO #10
 * Implementa una interfaz para un objeto 'Rectángulo' con ancho y 
 * alto, y una función que calcule su area
 */

interface Figura {
    alto: number,
    ancho: number,
    getArea(): number,
    getPerimetro(): number
}

let rectangulo : Figura = {
    alto: 10,
    ancho: 5,

    getArea(){
        return this.alto * this.ancho
    },

    getPerimetro(){
        return (this.alto * 2) + (this.ancho * 2)
    }
}

let triangulo : Figura = {
    alto: 15,
    ancho: 32,

    getArea(){
        return (this.alto * this.ancho) / 2
    },

    getPerimetro() {
        return 0
    },
}

let cuadrado : Figura = {
    alto: 20,
    ancho: 20,

    getArea(){
        return this.alto * this.alto
    },

    getPerimetro() {
        return 4 * this.alto
    }
}

console.log(`El rectángulo tiene una area de ${rectangulo.getArea?.()} cm2. 
y un perimetro de ${rectangulo.getPerimetro?.()}`)

console.log(`El cuadrado tiene un area de ${cuadrado.getArea?.()}cm2. 
y un perimetro de ${cuadrado.getPerimetro?.()}cm`)

console.log(`El triangulo tiene un area de ${triangulo.getArea()}cm2. 
y un perimetro de ${triangulo.getPerimetro?.()}cm`)