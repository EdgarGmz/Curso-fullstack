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

// EJEMPLO
const numeros = [1,2,3,4,5]

// Forma basica de como acceder a un elemento
// del arreglo
console.log(`El primer elemento del arreglo es ${numeros[0]}`)

// La propiedad 'length' no devuelve la cantidad
// de elementos en un array.
console.log(`Total o longitud del arreglo es ${numeros.length}`)

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

// ❌ Mutable
const original = [1,2,3,4]
original.push(5)
console.log(original)

