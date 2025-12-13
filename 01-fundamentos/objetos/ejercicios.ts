// EJERCICIOS DE OBJETOS EN TYPESCRIPT

// EJERCICIO 1
// Crea un objeto llamado 'auto' con las propiedades: marca (string), modelo (string), año (number) y encendido (boolean). Imprime el objeto en consola.
const auto ={
    marca: "KIA",
    modelo: "Forte",
    anio: 2023,
    encendido: true
}

console.log(`La marca del carro es: ${auto.marca}\nEl modelo es: ${auto.modelo}\nEl año del auto es: ${auto.anio} y \n${auto.encendido ? 'esta encendido' : 'esta apagado'}`)

// EJERCICIO 2
// Agrega un método al objeto 'auto' llamado 'encender' que cambie la propiedad 'encendido' a true y muestre un mensaje en consola.
let miAuto = {
    modelo: "KIA",
    arrancar: function(){
        console.log("Engine Started!...")
    }
}

console.log(`Voy a encender mi auto ${miAuto.modelo}`)
miAuto.arrancar()
// EJERCICIO 3
// Crea una función que reciba un objeto con las propiedades 'nombre' (string) y 'edad' (number) y retorne un string con la información formateada.
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
// Crea un array de objetos 'alumnos', cada uno con las propiedades 'nombre', 'matricula' y 'activo'. Escribe una función que retorne solo los alumnos activos.
type alumn = {
    matricule: number
    isActive: boolean
}

const p1: person = {
    name: "Edgar",
    age: 35,
    isAlive: true
}

const a1 : alumn = {
    matricule: 22038
}



// EJERCICIO 5
// Define un type alias para representar un objeto 'Libro' con propiedades: título, autor, año y prestado (boolean). Crea una función que reciba un libro y cambie su estado de 'prestado'.
