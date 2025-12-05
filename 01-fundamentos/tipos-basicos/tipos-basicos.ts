// Tipo string
let nombre: string = "Edgar"

// Tipo number
let edad: number =35

// Tipo boolean
let activo: boolean = true

// Tipo any (evitalo cuando puedas, pierde los beneficios de TS)
let cualquiera: any = "Hola"
cualquiera = 123
cualquiera = true

// Tipo array
let frutas: string[] = ["Manzana", "Banana", "Cereza"]
let numeros: number[] = [1, 2, 3, 4, 5]

// Tipo tupla
let persona: [string, number] = ["Carlos", 28]

// Tipo enum
enum Color {
    Rojo,
    Verde,
    Azul
}
let colorFavorito: Color = Color.Verde

// Tipo void (usado en funciones que no retornan nada)
function saludar(): void {
    console.log("Hola a todos")
}

// Tipo null y undefined
let nulo: null = null
let indefinido: undefined = undefined

// Tipo never (usado en funciones que nunca retornan)
function lanzarError(mensaje: string): never {
    throw new Error(mensaje)
}

// Tipo object
let usuario: { nombre: string; edad: number } = {
    nombre: "Ana",
    edad: 30
}

// Tipo union
let id: string | number = "123"
id = 456

// Tipo alias
type Punto = {
    x: number;
    y: number;
}
let punto1: Punto = { x: 10, y: 20 }
let punto2: Punto = { x: 5, y: 15 } 
