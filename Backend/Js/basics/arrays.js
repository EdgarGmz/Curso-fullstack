/**
 * ARRAYS Y METODOS FUNDAMENTALES
 * Un array (arreglo) es:
 *  - Una coleccion de elementos ordenada.
 * 
 *  - Cada elemento tiene una posicion numerica (indice) 
 *    que inicia en 0.
 * 
 *  - Puede contener cualquier tipo de dato (numeros, cadenas,
 *    objetos, funciones, otros arrays...).
 * 
 *  - Es un objeto especial con metodos integrados para 
 *    manipulacion de datos.
 */

console.log("Ejemplos básicos")
// EJEMPLO
const numeros = [1,2,3,4,5]

// Forma basica de como acceder a un elemento
// del arreglo
console.log(`El primer elemento del arreglo es ${numeros[0]}`)

// La propiedad 'length' no devuelve la cantidad
// de elementos en un array.
console.log(`Total o longitud del arreglo es ${numeros.length}`)

console.log("\n")
console.log("1. Índice")

// CONCEPTOS CLAVE
/**
 * 1. INDICE (Index)
 *  Es la posicion de un elemento. Siempre empieza con 0. 
 */
const canasta = ['🍈', '🍉','🍊', '🍋', '🍋‍🟩', '🍐', '🍏', '🍎', '🥭']
const pick = 2
const pick_fruta = canasta[pick]
const ultima_fruta = canasta[canasta.length - 1]
console.log(`Fruta elegida es: ${pick_fruta}`)
console.log(`La ultima fruta de la canasta es ${ultima_fruta}`)

console.log("\n")
console.log("2. Longitud")

/**
 * 2. LONGITUD (Length)
 * Cantidad de elementos en el array. Se accede con '.length'
 */
console.log(`La cantidad de frutas en la canasta es de ${canasta.length} frutas.`)

/**
 * 3. METODOS MUTABLES Vs INMUTABLES
 * 
 * Metodos mutables (modifica el arreglo original)
 *  1. push()
 *  2. pop()
 *  3. shift()
 *  4. unshift()
 *  5. splice()
 *  6. sort()
 * 
 * Metodos inmutables (retorna un nuevo array)
 *  1. map()
 *  2. filter()
 *  3. concat()
 *  4. slice()
 *  5. toSorted()
 *  6. (ES2023)
 *  7. [...spread] (spread operator)
 */
console.log("\n")
console.log("3. Métodos inmutables Vs mutables")

/**
 * ❌ Mutable:
 * Estos métodos cambian la estructura original del arreglo
 */
const original = [1,2,3,4]
original.push(5)
console.log(original)

/**
 * ✅ Inmutable
 * Estos métodos NO cambian la estrutura original del arreglo
 */
const nuevo = [...original, 5]
console.log(`Array original: ${original}`)
console.log(`Arrey nuevo: ${nuevo}`)


/**
 * EJERCICIOS: MÉTODOS MUTABLES
 */
console.log("\n")
console.log("EJERCICIOS: MÉTODOS MUTABLES")

/**
 * Método 'push()':
 * Agrega uno ó mas elementos AL FINAL del arreglo. 
 * 
 *  - Es mutable.
 *  - Cambia el array original.
 *  - Devuelve la nueva longitud del arreglo.
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.push(10)
console.log(arr)

/**
 * EJERCICIO #1:
 * Crea una función llamada 'addElement' que:
 * 
 *  - Reciba un arreglo.
 *  - Reciba un valor.
 *  - Agregue el valor al final del arreglo.
 *  - Devuelva el arreglo resultante.
 */

console.log("\n")
console.log("EJERCICIOS #1")

function addElement(arr, value){
    arr.push(value)
    return arr
}

const element = 4
const newArr = addElement(arr, 4)
console.log(newArr)

/**
 * EJERCICIO #2
 * Crea una funcón llamada 'agregarVarios' que:
 * 
 *  - Reciba un arreglo.
 *  - Reciba un arreglo de nuevo valores.
 *  - Agregue todos los valores al arreglo original usando 'push'.
 *  - Devuelve el arreglo final.
 */
function agregarVarios(arreglo, newArreglo){
    arreglo.push(...newArreglo)
    return arreglo
}

console.log("\n")
console.log("EJERCICIOS #2")

const a1 =[1 ,2, 3 ,4 ,5]
const a2 = [6, 7, 8, 9]

const r = agregarVarios(a1, a2)
console.log(r)
console.log(...a1)

/**
 * Método 'pop()':
 *  - ELIMINA el último elemento del arreglo.
 *  - MUTA el arreglo original.
 *  - DEVUELVE el elemento eliminado.
 * 
 * (quitar el último y dámelo)
 */

/**
 * EJERCICIO #1
 * Crea una función llamada 'quitarElUltimo' que:
 *  - Reciba el arreglo.
 *  - Use 'pop()' para quitar el último elemento.
 *  - Devuelva el elemento eliminado.
 */
console.log("\n")
console.log("MÉTODO POP - EJERCICIO 1")
function quitarElUltimo(arr){
    return arr.pop()
}

const b = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(`Array antes de la mutación: ${b}`)
console.log("\n")
const ultimo = quitarElUltimo(b)
console.log(`El último elento del arreglo es: ${ultimo}`)
console.log("\n")
console.log(`Array mutado: ${b}`)

/**
 * MÉTODO POP - EJERCICIO #2
 * Crea una función llamada 'quitarNUltimos' que:
 * 
 *  - Reciba un arreglo.
 *  - Un número 'n'.
 *  - Quite los ultimos 'n' elementos del array usando 
 *   'pop()'.
 *  - Devuelve un nuevo array con los elementos eliminados
 *    (en el mismo orden que fueron eliminados).
 */
console.log("\n")
console.log("MÉTODO POP - EJERCICIO #2")

function quitarNElementos(arr, n){
    let eliminados = []

    for(let i = 0 ; i < n ; i++){
        eliminados.push(arr.pop())
    }

    return eliminados.reverse()
}

const c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ultimos = 5
console.log(`Elementos del arreglo: ${c} se van a quitar 
    los últimos ${ultimos}`)
const eliminados = quitarNElementos(c,ultimos)
console.log("\n")
console.log(`Los elementos eliminados fueron: ${eliminados}`)
console.log("\n")
console.log(`Array mutado: ${c}`)

/**
 * MÉTODO 'shift()':
 * Es un método mutable de los arreglos que:
 *  
 *  - ELIMINA el primer elemento del array.
 *  - Modifica el arreglo original.
 *  - Devuelve el elemento eliminado.
 *  - Desplaza todos los demás elementos una posición a
 *    la izquierda.
 * 
 *  (Es el método pop() pero en lugar de quitar el último 
 *   elemento quita el primero, recorriendo los demás elementos
 *   hacia la izquierda. Es mas costoso que 'pop()' por que mueve
 *   índices, se usa cuando el orden importa (colas, FIFO (primero
 *   en entrar, primero en salir))).
 */
console.log("\n")
console.log("Método shift()")

const arrShift = [10, 20, 30]
console.log(`Array: ${arrShift}`)

const eliminado = arrShift.shift()

console.log(`Elemento eliminado: ${eliminado}`)
console.log(`Array mutado: ${arrShift}`)

/**
 * MÉTODO SHIFT: EJERCICIO #1
 * Crea una función llamada 'quitarPrimero' que:
 * 
 *  - Reciba un arreglo.
 *  - Use 'shift()' para quitar el primer elemento.
 *  - Devuelva el elemento eliminado.
 */
function quitarPrimero(arr){
    return arr.shift()
}

// Comprobación 
const deleted = quitarPrimero(['b', 'a', 'b', 'o', 's', 'o'])
console.log(`El elemento eliminado fue: ${deleted}`)

/**
 * MÉTODO SHIFT: EJERCICIO #2
 * Crea una función llamada 'quitarNPrimeros' que:
 * 
 *  - Reciba un arreglo.
 *  - Reciba un número 'n'.
 *  - Quite los primeros 'n' números usando shift().
 *  - Devuelva un nuevo arreglo con los elementos eliminados.
 *  - Los elementos deben conservar el orden en que fueron eliminados.
 */
function quitarNPrimeros(arr, n){
    let eliminados = []
    for(let i = 0 ; i < n; i ++ ){
        eliminados.push(arr.shift())
    }
    return eliminados
}
// Comprobación
console.log("\n")
console.log("MÉTODO SHIFT - EJERCICIO #1")
const n_elementos = 4
const arr_shift = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(`Los elmentos son: ${arr_shift} y se van a eliminar
    los primeros ${n_elementos} elementos.`)

console.log(`Estos fueron los elementos eliminados: ${quitarNPrimeros(arr_shift, n_elementos)}`)

console.log(`Array mutado: ${arr_shift}`)

/**
 * MÈTODO unshift():
 * 
 *  - Agrega uno o màs elementos al inicio del arreglo.
 *  - MUTA el areglo original.
 *  - Devuelve la nueva longitud del arreglo.
 * 
 *   (Es similar al método push(), solo que el elemento se 
 *    agrega al inicio, esto perjudica al rendimiento
 *    ya que se tienen que reindexar todos los elementos hacia
 *    la derecha).
 */

// EJEMPLO
console.log("\n")
console.log("METODO unshift()")
const arr_unshift = [1, 2, 3]
console.log(`Los elementos del arreglo antes de aplicar 'unshift': ${arr_unshift}`)

arr_unshift.unshift(4)
console.log(`Se agrega un nuevo elemento al inicio del arreglo: ${arr_unshift}`)

/**
 * MÉTODO unshift() - EJERCICIO #1
 * Crea una función llamada 'agregarAlInicio' que:
 * 
 *  - Reciba un arreglo.
 *  - Reciba un valor.
 *  - Agregue el valor al inicio del arreglo usando unshift().
 *  - Devuelva el arreglo mutado.
 */
function agregarAlInicio(arr, value){
    arr.unshift(value)
    return arr
}

// Comprobación
const letras = ['a', 'b', 'c', 'd']
const value = 'e'
const response = agregarAlInicio(letras, value)
console.log("\n")
console.log("MÉTODO unshift - EJERCICIO #1")
console.log(`Elementos del arreglo mutado son: ${response}`)

/**
 * MÉTODO unshift - EJERCICIO #2
 * Crea una función llamada 'agregarVariosAlInicio' que:
 * 
 *  - Reciba el arreglo original.
 *  - Reciba un arreglo de nuevos valores.
 *  - Agregue todos los valores al inicio.
 *  - Usa solo shift().
 *  - Mantenga el orden original de los nuevos valores.
 *  - Devuelva el arreglo mutado.
 */
function agregarVariosAlInicio(arr1, arr2){

    for(let i = arr2.length - 1; i >= 0; i--){
        arr1.unshift(arr2[i])
    }
    return arr1
}

console.log("\n")
console.log("MÉTODO unshift() - EJERCICIO #2")
const arr1 = [4,5,6,7,8]

const mutado = agregarVariosAlInicio(arr1, [1, 2, 3])

console.log(`El arreglo mutado es: ${mutado}`)


 /**
  * MÉTODO splice():
  * 
  *  - Muta el arreglo.
  *  - Elimina elmentos.
  *  - Inserta elementos.
  *  - Devuelve un array con los elementos eliminados.
  * 
  *  array.splice(inicio, cantidad, ...elementos)
  */

 /**
  * MÉTODO splice() - EJERCICIO #1
  * Crea una función llamada 'elminarDesde' que:
  * 
  *  - Reciba el arreglo.
  *  - Reciba una posición 'index'.
  *  - Elimine todos los elementos desde ese índice hasta el final.
  *  - Usa solo splice().
  *  - Devuelve el arreglo de los elementos eliminados.
  */

 function eliminarDesde(arr, position){
    return arr.splice(position)
 }

 // Comprobación
 console.log("\n")
 console.log("MÉTODO splice() - EJERCICIO #1")
 const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 const position = 5
 
 console.log(`Elementos de la lista: ${lista}. Y se van a
    eliminar desde la posición ${position}`)
    
const elementos_eliminados = eliminarDesde(lista, position)
console.log(`Lista de elementos eliminados son: ${elementos_eliminados}`)
console.log(`Array mutado: ${lista}`)

/**
 * MÉTODO splice() - EJERCICIO #2
 * Crea una función llamada 'remplazoDesde' que:
 * 
 *  - Reciba un arreglo.
 *  - Reciba una posición 'index'.
 *  - Reciba un arreglo de nuevos valores.
 *  - Elimine todos los 'index' hasta el final.
 *  - Inserte los nuevos valores en ese mismo lugar.
 *  - Usa solo splite().
 *  - Devuelva el arreglo mutado.
 */

function remplazarDesde(arr, position, newArr){
    
    arr.splice(position, arr.length - position , ...newArr)
    return arr
}

// Comprobación

console.log("\n")
console.log("MÉTODO splice() - Actividad #1")
const list2 = ['arbol', 'pajaro','casa', 'silla', 'carro']
console.log(`Lista a reemplazar:`)
console.log(list2)
console.log("\n")
const list3 = ['perro', 'gato', 'niño']
console.log(`Lista de nuevos elementos:`)
console.log(list3)
console.log("\n")
const remplazo = remplazarDesde(list2, 2, list3)
console.log(`Lista con los nuevo elementos reemplazados:`)
console.log(remplazo)

/**
 * MÉTODO splice() - EJERCICIO #3
 * Dado el rango:
 * 
 *  ['a', 'b', 'c', 'd']
 *  
 *  Usa splice() para insertar 'x' entre 'b' y 'c'.
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #3")
const rango = ['a', 'b', 'c', 'd']
console.log("Rango mutado:")
rango.splice(2, 0, 'x')
console.log(rango)

/**
 * MÉTODO splice() - EJERCICIO #4
 * Dado el rango:
 * 
 *  [10, 20, 30, 40]
 *  
 *  Inserta los valores 15 y 18 después del 10, manteniendo el orden.
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #4")

const rango_numeros = [10, 20, 30, 40]
rango_numeros.splice(1, 0, 15, 18)
console.log("Arreglo de números mutado:")
console.log(rango_numeros)

/**
 * MÉTODO splice() - EJERCICIO #5
 * Dado el arreglo:
 * 
 *  ['inicio', 'medio', 'fin']

 *  
 *  Inserta 'ANTES' al inicio usando splice().
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #5")
const arreglo = ['inicio', 'medio', 'fin']
arreglo.splice(0, 0, 'antes')
console.log("Arreglo mutado:")
console.log(arreglo)

/**
 * MÉTODO splice() - EJERCICIO #6
 * Dado el arreglo:
 * 
 *  [1, 2, 3, 4, 5]
 *  
 *  Elimina solo el numero 3 usando splice.
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #6")

const lista_numeros = [1, 2, 3, 4, 5]
lista_numeros.splice(2,1)
console.log("Arreglo mutado:")
console.log(lista_numeros)


/**
 * MÉTODO splice() - EJERCICIO #7
 * Dado el arreglo:
 * 
 *  ['a', 'b', 'c', 'd', 'e']

 *  
 *  Elimina 'b', 'c' y 'd' en una sola llamada usando splice().
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #7")

const lista_letras = ['a', 'b', 'c', 'd', 'e']
lista_letras.splice(1,3)
console.log(lista_letras)

/**
 * MÉTODO splice() - EJERCICIO #8
 * Dado el arreglo:
 * 
 *  [100, 200, 300, 400, 500]
 *  
 *  Elimina todos los elementos excepto el primero.
 */
console.log("\n")
console.log("MÉTODO splice() - EJERCICIO #8")
const list_n = [100, 200, 300, 400, 500]
list_n.splice(1)
console.log("Todos los elementos eliminados excepto el primero: ")
console.log(list_n)

// MÉTODOS INMUTABLES

/**
 * MÉTODO slice():
 * 
 *  - NO muta el arreglo.
 *  - Devuelve una COPIA.
 * 
 *   (array.slice(inicio, fin))
 * 
 *      1. 'inicio' -> Índice donde empieza (incluido).
 *      2. 'fin' -> Índice donde termina (no incluido).
 *      3. Si no pasan 'fin', corta hasta el final.
 */

// Ejemplo:
console.log("\n")
console.log("MÉTODO slice() - EJEMPLO")
const a_array = [1, 2, 3, 4, 5]
const b_array = a_array.slice(1, 3)
console.log(`Valores de 'b_array':`)
console.log(b_array)
console.log(`Valores de 'a_array':`)
console.log(a_array)

/**
 *  slice(inicio. fin)
 *  - Inicio excluido.
 *  - Fin excluido.
 *  - negativos -> length - valor.
 *  - nunca modifica el array original (INMUTABLE).
 */

/**
 * MÉTODO map():
 * Es método INMUTABLE de los arreglos que:
 * 
 *  - Recorre un arreglo.
 *  - Aplica una función en cada elemento.
 *  - Devuelve un nuevo arreglo.
 *  - No modifica el arreglo original.
 * 
 *  Por cada elemento, devuelve otro valor. Siempre devuelve
 *  un arreglo del mismo tamaño.
 */

/**
 * MÉTODO map() - EJERCICIO #1
 * Dado el arreglo:
 *      
 *      const numeros = [1, 2, 3, 4, 5]
 * 
 * Usa map() para crear un arreglo que contenga:
 * 
 *  - El doble de cada número.
 */
const elements = [1, 2, 3, 4, 5]
const n_dobles = elements.map(n => n*2)
console.log("\n")
console.log("MÉTODO map() - EJERCICIO #1")
console.log(`Nuevo array con sus elementos:`)
console.log(n_dobles)

/**
 * MÉTODO map() - EJERCICIO #1
 * Tienes un listado de precios en formato numérico. Tu objetivo:
 * 
 *  - Crear un nuevo array llamado 'preciosConIVA'.
 *  - Cada precio tenga sumado el 21% de IVA. 
 *  - El array original no debe de cambiar.
 */
console.log("\n")
console.log("MÉTODO map() - EJERCICIO #1")

// Datos de entrada
const listado = [100 , 150, 75, 1200, 350]
const IVA = .21
const preciosConIVA = listado.map(precio => precio + (precio * IVA))

// Datos de salida
console.log('Los precios con IVA son:')
console.log(preciosConIVA)
console.log("Listado original:")
console.log(listado)

/**
 * MÉTODO map() - EJERCICIO #2
 * Tienes un array de usuarios que vienen de una base de datos:
 * 
 *  - Crea un nuevo array llamado 'usuariosPremium'.
 *  - Si el usuario tiene mas de 100 pts, añade la propiedad llamada
 *    esPremium: true.
 *  - Si tiene 100 o menos pts., esPremium: false
 *  - No debes modificar el objeto original.
 */

const usuarios = [
    { id: 1, nombre: "Ana", puntos: 50 },
    { id: 2, nombre: "Luis", puntos: 150 },
    { id: 3, nombre: "Marta", puntos: 100 },
    { id: 4, nombre: "Diego", puntos: 200 }
];

// Tu código aquí:
const puntos = 100

const usuariosVIP = usuarios.map(usuario =>{
    const isVip = usuarios.puntos > 100

    return {
        ...usuario,
        esPremium: isVip
    }
})

console.log("\n")
console.log("MÉTODO map() - EJERICICIO #2")
console.log("Usuarios Premium:")
console.log(usuariosVIP)
console.log("Usuarios de la base de Datos")
console.log(usuarios)