/**
 * En TypeScript, un objetos es una coleccion de propiedades,
 * donde cada propiedad tiene un nombre (clave) y un valor.
 * Los objetos permiten agrupar datos relacionados y pueden 
 * incluir metodos (funciones asociadas al objetos).
 */

// SINTAXIS
const persona = {
    nombre: "Edgar",
    edad: 35,
    activo: true
}

// ACCESO A PROPIEDADES
console.log(`EL nombre de la persona es ${persona.nombre}`)
console.log(`La edad de la persona es ${persona.edad}`)

// OBJETO CON MÉTODOS
const perro ={
    nombre: "Canela",
    ladrar: function(){
        console.log("Guau Guau")
    }
}

console.log(`El nombre de la perrita hermosa es: ${perro.nombre}`)
perro.ladrar()

/**
 * TIPADO DE OBJETOS
 * Pueden definir el tipo de un objeto usando anotaciones inline
 * o interfaces.
 */

let auto:{
    marca: "KIA",
    modelor: "Forte 2.0",
    anio: 2023
}

// O USANDO INTERFACES
interface Libro {
    titulo: string,
    autor: string,
    anio: number
}

const miLibro: Libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967
}

console.log(`Titulo: ${miLibro.titulo}`)
console.log(`Autor: ${miLibro.autor}`)
console.log(`Año: ${miLibro.anio}`)