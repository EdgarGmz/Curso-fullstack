// FUNCIONES
/**
 * Una funcion es un bloque reutilizable que realiza uan tarea especifica.
 * En TypeScript, puedes especificar los tipos de los parametros y el tipo
 * de valor que retorna la funcion, lo que ayuda a evitar errores y hace
 * que tu codigo sea robusto
 */

// EJEMPLO #1
function saludar(): void{
    console.log("Hola, y bienvenido al curso de TypeScript!")
}

// Forma de invocar la funcion
saludar()

// EJEMPLO #2
// Funcion con parametros y retorno
function sumar(a:number, b:number) : number {
    return a + b
}

// Forma de invocar la funcion
const resultado = sumar(5,3)

// Mostrar el resultado por consola
console.log(`El resultado de la suma es: ${resultado}`)

// EJEMPLO #3
// Funciones con flecha
const multiplicar = (x:number, y:number) : number => {
    return x * y
}

// Forma de invocar el metodo flecha
console.log(`El resultado de la multiplicacion es: ${multiplicar(3,3)}`)