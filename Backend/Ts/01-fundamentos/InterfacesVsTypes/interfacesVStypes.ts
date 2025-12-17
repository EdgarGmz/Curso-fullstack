// Definición 
/**
 * Las interfaces y los types en Ts se usan para definir
 * la forma de los objetos, pero tienen diferencias y casos
 * de uso recomendados. Aquí tienes una explicación clara
 * y ejemplos dinámicos para dominar ambos conceptos.
 */

// INTERFACES
/**
 * - Se usa principipalmente para describir la forma de objetos,
 * clases y funciones.
 * 
 * - Permite la extensión (herencia) y la declaración incremental 
 * (puedes declarar la misma interfaz varias veces y se fucionan).
 * 
 * - Ideal para definir contratos públicos de librerías o APIs.
 */

// Definición de una interfaz
interface Persona {
    nombre: string,
    edad: number,
    saludar(): void
}

// Implementación en un objeto
const usuario: Persona ={
    nombre: "EdgarGmz",
    edad: 35,
    saludar(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

usuario.saludar()


// Extensión de interfaces
interface Empleado extends Persona{
    puesto: string
}

const empleado : Empleado ={
    nombre: "Alma",
    edad: 35,
    puesto: "Desarrollador",
    saludar(){
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} años y tengo el puesto de ${this.puesto}`)
    }
}

empleado.saludar()

// TYPES
/**
 * - Es más flexible: puede descubrir uniones, intersecciones,
 * tipos primitivos, tuplas, etc.
 * 
 * - No permite declaración incremental.
 * 
 * - Útil para tipos complejos y combinaciones.
 */

// Definición de un Type
type Producto = {
    id: number,
    nombre: string,
    precio: number
}

// Unión de tipos
type Respuesta = "ok" | "error"

// Intersección de tipos
type ConDescuento = Producto & {descuento: number}

const prod: ConDescuento = {
    id: 1,
    nombre: "Laptop",
    precio: 1500,
    descuento: 10
}

// Uso de la unión
function procesarRespuesta(r:Respuesta): string {
    let mensaje : string = ""
    return r.trim() === "ok" ? mensaje = "Todo bien :)..." 
    : mensaje = "Hubo un error :(..."    
}

console.log(procesarRespuesta("error"))

// DIFERENCIAS CLAVE 
/**
 * - Usa una interface para objetos y clases, espcecialmente si necesitas 
 * herencia o declaración incremetal
 * 
 * - Usa type para tipos complejos, uniones, intersecciones o cuando 
 * necesitas combinar varios tipos.
 */