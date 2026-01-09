/**
 * EJERCICIO #1
 * Crea una función llamada 'ejecutarCallback' que:
 * 
 *  - Reciba un callback y lo ejecute.
 */
function ejecutarCallback(fn){
    fn()
}

// Comprobación
console.log("Actividad #1")
ejecutarCallback(()=> console.log("Hola mundo"))
console.log("\n")

/**
 * EJERCICIO #2
 * Crea una función llamada 'saludarConCallback' que:
 * 
 *  - Reciba un nombre.
 *  - Reciba un callback que imprima el saludo
 */
function saludarConCallback(nombre, fn){
    fn(nombre)
}

// Comprobación
console.log("Actividad #2")
saludarConCallback("Edgar", a => console.log(`Hola ${a}`))
console.log("\n")

/**
 * EJERCICIO #3
 * Crea una función llamada 'transformar' que:
 * 
 *  - Reciba un número y un callback.
 *  - El callback debe transformar ese número (ej. duplicar)
 */
function transformar(numero, fn){
    return fn(numero)
}

// Comprobación
const miNumero = 5
const duplicado = transformar(miNumero, a => a * 2)

console.log("Actividad #3")
console.log(`El número tranformado es: ${duplicado}`)
console.log("\n")

/**
 * EJERCICIO #4
 * Haz una función que:
 * 
 *  - Reciba un número.
 *  - Ejecute el callback.
 *  - restorne el resultado si es mayor a 10.
 *  - Si no, retorne 'Muy pequeño...'.
 */
function execute(numero, fn) { 
    const value = fn(numero)
    return  value> 10 ? value : "El valor es muy pequeño..."
}

// Comprobación 
const req = 5
const res = execute(req, (a)=> a - 10)

console.log("Actividad #4")
console.log(res)
console.log("\n")

/**
 * EJERCICIO #5
 * Crea una función que:
 * 
 *  - Reciba un número.
 *  - Si es par que ejecute el callback 'onSuccess'.
 *  - Si es impar que ejecute el callback 'onError'.
 */
function verify(number, onSucces, onError){
    return number % 2 === 0 
        ? onSucces(number)
        : onError(number)
}

// Comprobación
console.log("Actividad #5")
const r = 6

verify(r, 
    (a) => console.log(`El número ${a} es par`), 
    (a) => console.log(`El número ${a} es impar`)
)

console.log("\n")

/**
 * EJERCICIO #6
 * Crea una función que:
 * 
 * - Reciba un texto.
 * - Reciba un callback que lo manipule (ej. en mayusculas).
 */
function transform(texto, fn){
    return fn(texto)
}

// Comprobación
const texto = "EsTe eS Mi TeXtO"
const mayusculas = transform(texto, a => a.toUpperCase())
const minusculas = transform(texto, a => a.toLowerCase())

console.log("Actividad #6")
console.log(`Texto modificado a mayúsculas: ${mayusculas}`)
console.log(`Texto modificado a minúsculas: ${minusculas}`)
console.log("\n")

/**
 * EJERCICIO #7
 * Crea una función 'operacion' que:
 * 
 *  - Que reciba dos números.
 *  - Que reciba dos callbacks (sumar y multiplicar)
 */
function operacion(n1, n2, sumar, multiplicar){
    return {
        suma : sumar(n1, n2),
        multiplicacion: multiplicar(n1, n2)
    }
}

// Comprobación
const n1 = 10
const n2 = 45
const {suma , multiplicacion} = operacion(
    n1,
    n2,
    (a, b) => a + b,
    (a, b) => a * b
)

console.log("Actividad #7")
console.log(`El resultado de la suma es: ${suma}`)
console.log(`El resultado de la multiplicación es: ${multiplicacion}`)
console.log("\n")

/**
 * EJERCICIO #8
 * Crea una función 'validar' que:
 *  - Que reciba un valor.
 *  - Un array de callbacks validadores.
 *  - Retorne 'true' si todos pasan.
 */
function validar(value, fns){
  
  for(let fn of fns){
    if(!fn(value)){
        return false
    }
  }

  return true
}

// Validadores 
const m = 26
const isNumber = v => typeof v ==='number'
const isPositive = v => v > 0
const isMinorThan10 = v => v < 10

// Comprobación
const v = validar(m, [isNumber, isPositive, isMinorThan10])

console.log("Actividad #8")
console.log(`El número ${m} ${v ? 'califica': 'no califica'}`)
console.log("\n")

/**
 * EJERCICIO #9
 * Crea una función llamada 'ejecutarSiPositivo' que:
 * 
 *  - Reciba un número.
 *  - Reciba dos callbacks (uno que se ejecute si es positivo y 
 *    si es negativo).
 */
function ejecutarSiPositivo(numero, fnPositivo, fnNegativo){

    return numero > 0 ? fnPositivo() : fnNegativo()
}

// Comprobación
console.log("Actividad # 10")
ejecutarSiPositivo(10, ()=> console.log("Positivo"), ()=> console.log("negativo"))
console.log("\n")

/**
 * EJERCICIO #10
 * Crea una función 'filtrarYProcesar'
 * 
 *  - Que reciba un array.
 *  - Un callback filtro.
 *  - Un callback procesador.
 */
function filtrarYProcesar(arr, fnFilter, fnProcess){   
    const filtro = [] 
    for(let i of arr){
        /**
         * Por cada elemento del arreglo lo vamos 
         * a evaluar si cumple la condicion del
         * criterio.
         */
        if(fnFilter(i)){
            filtro.push(fnProcess(i))
        }
    }   
    return filtro      
}

// Comprobación
const arr = ["Elm", "Jhon", "Zu", "Adrian", "Esteban"]

const nombresLargos = filtrarYProcesar(arr,
    (i) => i.length > 5,
    (a) => ({
        texo: a.toUpperCase(),
        longitud: a.length
    })
)

// Comprobación
console.log("Actividad #10")
console.log(nombresLargos)
console.log("\n")

/** 
 * Actividad #11
 * Crea una funcion llamada 'pipeline' que:
 * 
 *  - Reciba un valor.
 *  - Reciba multiples callbacks.
 *  - Los ejecute en secuemcia.
 */
function pipeline(value, fns){
    let resultado = value
    for(let fn of fns){
        resultado = fn(value)
    }
    return resultado
}

// Comrpobacion
const valor = 10
console.log("Actividad #11")
const myPipeline = pipeline(valor,
    [
        a => a * 2,
        b => b * (Math.exp(b)),
        c => Math.random(c),
        d => Math.cos(d)/ Math.PI
    ]
)

console.log(myPipeline)
console.log("\n")

/**
 * EJERCICIO #12
 * Crea una funcion 'retry' que:
 * 
 *  - Intente ejecutar un callback hasta tres
 *    veces si falla.
 */
function retry(fn){    
    for(let i = 0 ; i < 3 ; i ++) {
        console.log(`Intento: ${i}`)
        if(fn()) {
            return "exitoso"
        } 
    }

    return "fallido"
}

// Comprobacion
const intento = retry(() => {
    const max = 10
    const min = 0
    const random = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Numero random: ${random}`)
    return  random % 2 === 0
})
console.log("Actividad #12")
console.log(`Intento ${intento}!`)
