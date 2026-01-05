# 🧠 JavaScript Esencial para dominar TypeScript

> Este repositorio refuerza **las bases reales de JavaScript** que TypeScript **asume que ya conoces**.
> El objetivo no es aprender JS desde cero, sino **entender profundamente los conceptos que hacen que TypeScript tenga sentido**.

---

## 📌 Índice

1. [Funciones](#1️⃣-funciones)
2. [Callbacks](#2️⃣-callbacks)
3. [Arrays y métodos fundamentales](#3️⃣-arrays-y-métodos-fundamentales)
4. [Objetos y acceso dinámico](#4️⃣-objetos-y-acceso-dinámico)
5. [`undefined` y `null`](#5️⃣-undefined-y-null)
6. [Iteración](#6️⃣-iteración)
7. [DOM básico](#7️⃣-dom-básico)
8. [Mutabilidad e inmutabilidad](#8️⃣-mutabilidad-e-inmutabilidad)

---

## 1️⃣ Funciones

### 📖 Definición

Una **función** es un bloque de código que:

* puede recibir datos (parámetros)
* puede devolver un valor
* puede ser tratado como un valor más

En JavaScript, **las funciones son ciudadanos de primera clase**.

---

### 💡 Ejemplos

```js
function sumar(a, b) {
    return a + b
}

const restar = (a, b) => a - b
```

Las funciones también pueden guardarse en variables:

```js
const saludar = () => {
    console.log("Hola")
}
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Básico
1. Crea una función `saludar` que retorne el string `"Hola Mundo"`.
2. Crea una función `despedir` que reciba un nombre y retorne `"Adiós [nombre]"`.

#### Nivel 2: Parámetros simples
3. Crea una función `calcularArea` que reciba `base` y `altura` y retorne el área de un rectángulo.
4. Crea una función `esMayorDeEdad` que reciba una edad y retorne `true` si es >= 18.

#### Nivel 3: Funciones flecha
5. Convierte estas funciones a arrow functions: `function triple(n) { return n * 3 }`.
6. Crea una función flecha `obtenerIniciales` que reciba nombre y apellido y retorne las iniciales en mayúsculas.

#### Nivel 4: Valores por defecto
7. Crea una función `saludarPersonalizado` que reciba `nombre` (obligatorio) y `saludo` (opcional, por defecto "Hola").
8. Crea una función `calcularDescuento` que reciba `precio` y `descuento` (por defecto 10%).

#### Nivel 5: Funciones de orden superior
9. Crea una función `aplicarOperacion` que reciba dos números y una función de operación, y retorne el resultado.
10. Crea una función `repetir` que reciba una función y un número `n`, y ejecute esa función `n` veces.

---

### 🛠️ Casos de uso

#### ✅ Lógica reutilizable

```js
// ❌ Sin función (código repetido)
console.log(5 * 2)
console.log(10 * 2)
console.log(15 * 2)

// ✅ Con función (reutilizable)
const doble = n => n * 2
console.log(doble(5))
console.log(doble(10))
console.log(doble(15))
```

#### 📦 Modularización de código

```js
// ✅ Código organizado y mantenible
const validarEmail = email => email.includes("@")
const validarPassword = pass => pass.length >= 8

function validarFormulario(email, password) {
    return validarEmail(email) && validarPassword(password)
}
```

#### 🔗 Base para callbacks, promesas y async/await

```js
// Las funciones son la base de toda programación asíncrona
setTimeout(() => console.log("Hola"), 1000)
fetch("/api").then(res => res.json())
```

---

## 2️⃣ Callbacks

### 📖 Definición

Un **callback** es **una función que se pasa como argumento a otra función** para que sea ejecutada más tarde.

> No es algo especial de JS: es solo pasar una función como valor.

---

### 💡 Ejemplos

```js
function ejecutar(fn) {
    fn()
}

ejecutar(() => {
    console.log("Ejecutado")
})
```

Con parámetros:

```js
function procesar(n, fn) {
    return fn(n)
}

procesar(5, x => x * 2) // 10
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Callbacks básicos
1. Crea una función `ejecutarCallback` que reciba un callback y lo ejecute.
2. Crea una función `saludarConCallback` que reciba un nombre y un callback que imprima un saludo.

#### Nivel 2: Callbacks con retorno
3. Crea una función `transformar` que reciba un número y un callback que lo transforme (ej: duplicar).
4. Crea una función `procesarTexto` que reciba un string y un callback que lo manipule (ej: mayúsculas).

#### Nivel 3: Múltiples callbacks
5. Crea una función `operacion` que reciba dos números y dos callbacks (uno para sumar, otro para multiplicar).
6. Crea una función `validar` que reciba un valor y un array de callbacks validadores, retornando `true` si todos pasan.

#### Nivel 4: Callbacks condicionales
7. Crea una función `ejecutarSiPositivo` que reciba un número y dos callbacks (uno si es positivo, otro si no).
8. Crea una función `filtrarYProcesar` que reciba un array, un callback filtro y un callback procesador.

#### Nivel 5: Callbacks avanzados
9. Crea una función `pipeline` que reciba un valor y múltiples callbacks, aplicándolos en secuencia.
10. Crea una función `retry` que intente ejecutar un callback hasta 3 veces si falla.

---

### 🛠️ Casos de uso

#### 🖱️ Eventos

```js
// ✅ Callback en eventos del DOM
button.addEventListener("click", () => {
    console.log("Click detectado")
})
```

#### 🔄 Métodos como `map`, `filter`

```js
// ✅ Callbacks en métodos de array
const numeros = [1, 2, 3, 4]
const dobles = numeros.map(n => n * 2) // [2, 4, 6, 8]
```

#### 🎨 Lógica personalizable

```js
// ✅ Función genérica + callback customizable
function procesarUsuarios(usuarios, transformar) {
    return usuarios.map(transformar)
}

procesarUsuarios(users, u => u.name.toUpperCase())
procesarUsuarios(users, u => ({ ...u, activo: true }))
```

#### 🧩 Base de programación funcional

```js
// ✅ Composición de funciones
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const procesar = pipe(
    x => x * 2,
    x => x + 10,
    x => x / 2
)

procesar(5) // 10
```

---

## 3️⃣ Arrays y métodos fundamentales

### 📖 Definición completa

Un **array** (arreglo) es:

* Una **colección ordenada** de elementos
* Cada elemento tiene una **posición numérica** (índice) que inicia en `0`
* Puede contener **cualquier tipo de dato** (números, strings, objetos, funciones, otros arrays)
* Es un **objeto especial** con métodos integrados para manipulación de datos

```js
const numeros = [10, 20, 30, 40]
//    índices:   0   1   2   3

console.log(numeros[0])  // 10
console.log(numeros.length)  // 4
```

---

### 🧠 Conceptos clave

#### 1. **Índice (Index)**

La posición de un elemento. **Siempre empieza en 0**.

```js
const frutas = ["🍎", "🍌", "🍊"]
frutas[0]  // "🍎" (primer elemento)
frutas[2]  // "🍊" (tercer elemento)
frutas[3]  // undefined (no existe)
```

#### 2. **Longitud (Length)**

Cantidad de elementos. Se accede con `.length`.

```js
const nombres = ["Ana", "Luis", "Pedro"]
console.log(nombres.length)  // 3
```

#### 3. **Métodos mutables vs inmutables**

| **Mutable** (modifica original) | **Inmutable** (retorna nuevo array) |
|--------------------------------|-----------------------------------|
| `push()`, `pop()`              | `map()`, `filter()`, `concat()`   |
| `shift()`, `unshift()`         | `slice()`, `toSorted()` (ES2023)  |
| `splice()`, `sort()`           | `[...spread]`                     |

```js
// ❌ Mutable
const original = [1, 2, 3]
original.push(4)
console.log(original)  // [1, 2, 3, 4] (modificado)

// ✅ Inmutable
const nuevo = [...original, 5]
console.log(original)  // [1, 2, 3, 4] (sin cambios)
console.log(nuevo)     // [1, 2, 3, 4, 5]
```

#### 4. **Referencia vs valor**

Los arrays son **tipos de referencia**. Copiar un array sin spread o métodos copia solo la referencia.

```js
// ❌ Copia la referencia (mismo array)
const a = [1, 2, 3]
const b = a
b.push(4)
console.log(a)  // [1, 2, 3, 4] ❌ se modificó sin querer

// ✅ Copia el contenido (nuevo array)
const c = [...a]
c.push(5)
console.log(a)  // [1, 2, 3, 4] ✅ intacto
console.log(c)  // [1, 2, 3, 4, 5]
```

---

### 💡 Métodos fundamentales explicados

#### `map()` — Transformar cada elemento

**¿Qué hace?** Crea un **nuevo array** aplicando una función a cada elemento.

**Sintaxis:**
```js
array.map((elemento, índice, arrayCompleto) => {
    return nuevoValor
})
```

**Ejemplo básico:**
```js
const precios = [100, 200, 300]
const conIVA = precios.map(precio => precio * 1.16)
console.log(conIVA)  // [116, 232, 348]
```

**Caso real — API a UI:**
```js
// Datos de backend
const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 }
]

// Transformar a formato de UI
const items = usuarios.map(user => ({
    label: `${user.nombre} (${user.edad} años)`,
    value: user.id
}))

// Resultado:
// [
//   { label: "Ana (25 años)", value: 1 },
//   { label: "Luis (30 años)", value: 2 }
// ]
```

**⚠️ Error común:**
```js
// ❌ Olvidar el return (devuelve undefined)
const mal = numeros.map(n => {
    n * 2  // sin return
})
console.log(mal)  // [undefined, undefined, undefined]

// ✅ Correcto
const bien = numeros.map(n => n * 2)
```

---

#### `filter()` — Filtrar elementos

**¿Qué hace?** Crea un **nuevo array** con los elementos que cumplan una condición.

**Sintaxis:**
```js
array.filter((elemento, índice) => {
    return true/false  // si es true, se incluye
})
```

**Ejemplo básico:**
```js
const edades = [15, 22, 17, 30, 12]
const mayores = edades.filter(edad => edad >= 18)
console.log(mayores)  // [22, 30]
```

**Caso real — E-commerce:**
```js
const productos = [
    { nombre: "Laptop", precio: 1000, disponible: true },
    { nombre: "Mouse", precio: 25, disponible: false },
    { nombre: "Teclado", precio: 75, disponible: true }
]

// Filtrar productos disponibles y baratos
const ofertas = productos.filter(p => 
    p.disponible && p.precio < 100
)

console.log(ofertas)
// [{ nombre: "Teclado", precio: 75, disponible: true }]
```

**⚠️ Error común:**
```js
// ❌ Usar = en lugar de ===
const mal = edades.filter(e => e = 18)  // asignación, no comparación

// ✅ Correcto
const bien = edades.filter(e => e === 18)
```

---

#### `reduce()` — Reducir a un solo valor

**¿Qué hace?** Procesa el array y retorna **un único valor** (suma, objeto, string, etc.).

**Sintaxis:**
```js
array.reduce((acumulador, elementoActual, índice) => {
    return nuevoAcumulador
}, valorInicial)
```

**Ejemplo básico — Sumar:**
```js
const numeros = [10, 20, 30, 40]
const total = numeros.reduce((suma, num) => suma + num, 0)
console.log(total)  // 100
```

**Explicación paso a paso:**
```js
// Iteración 1: suma=0,  num=10 → retorna 10
// Iteración 2: suma=10, num=20 → retorna 30
// Iteración 3: suma=30, num=30 → retorna 60
// Iteración 4: suma=60, num=40 → retorna 100
```

**Caso real — Carrito de compras:**
```js
const carrito = [
    { producto: "Laptop", precio: 1000, cantidad: 1 },
    { producto: "Mouse", precio: 25, cantidad: 2 },
    { producto: "Teclado", precio: 75, cantidad: 1 }
]

const totalPagar = carrito.reduce((total, item) => 
    total + (item.precio * item.cantidad), 0
)

console.log(totalPagar)  // 1125
```

**Caso real — Agrupar por categoría:**
```js
const transacciones = [
    { tipo: "ingreso", monto: 500 },
    { tipo: "gasto", monto: 200 },
    { tipo: "ingreso", monto: 300 },
    { tipo: "gasto", monto: 100 }
]

const resumen = transacciones.reduce((acc, t) => {
    acc[t.tipo] = (acc[t.tipo] || 0) + t.monto
    return acc
}, {})

console.log(resumen)  // { ingreso: 800, gasto: 300 }
```

**⚠️ Error común:**
```js
// ❌ Olvidar el valor inicial (puede dar NaN)
const mal = numeros.reduce((sum, n) => sum + n)  // si array vacío → error

// ✅ Siempre define el valor inicial
const bien = numeros.reduce((sum, n) => sum + n, 0)
```

---

#### `find()` — Encontrar un elemento

**¿Qué hace?** Retorna el **primer elemento** que cumpla la condición, o `undefined` si no encuentra nada.

```js
const usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Pedro" }
]

const usuario = usuarios.find(u => u.id === 2)
console.log(usuario)  // { id: 2, nombre: "Luis" }
```

**Caso real — Validación de login:**
```js
const usuariosRegistrados = [
    { email: "ana@mail.com", password: "123" },
    { email: "luis@mail.com", password: "456" }
]

function login(email, password) {
    const usuario = usuariosRegistrados.find(u => 
        u.email === email && u.password === password
    )
    return usuario ? "Login exitoso" : "Credenciales incorrectas"
}
```

---

#### `some()` y `every()` — Validaciones

**`some()`**: ¿Al menos uno cumple?  
**`every()`**: ¿Todos cumplen?

```js
const edades = [15, 22, 17, 30]

edades.some(e => e >= 18)   // true (hay al menos uno mayor)
edades.every(e => e >= 18)  // false (no todos son mayores)
```

**Caso real — Validación de formulario:**
```js
const campos = [
    { nombre: "email", valor: "ana@mail.com" },
    { nombre: "password", valor: "" },
    { nombre: "nombre", valor: "Ana" }
]

const todoLleno = campos.every(campo => campo.valor.trim() !== "")
console.log(todoLleno)  // false (password está vacío)
```

---

#### `sort()` — Ordenar (⚠️ mutable)

```js
const numeros = [3, 1, 4, 1, 5]
numeros.sort((a, b) => a - b)  // ascendente
console.log(numeros)  // [1, 1, 3, 4, 5]
```

**Caso real — Ordenar por precio:**
```js
const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
]

productos.sort((a, b) => a.precio - b.precio)
// Ahora productos está ordenado de menor a mayor precio
```

---

### 🧪 Ejercicios (10 niveles por método)

#### **Ejercicios de `map()`**

##### Nivel 1: Transformaciones básicas
1. Transforma `[1, 2, 3, 4]` para obtener el doble de cada número.
2. Transforma `["a", "b", "c"]` a mayúsculas.

##### Nivel 2: Objetos simples
3. Dado `[{nombre: "Ana"}, {nombre: "Luis"}]`, crea un array con solo los nombres.
4. Dado un array de precios, agrégales un 21% de IVA.

##### Nivel 3: Transformaciones complejas
5. Dado un array de usuarios `{nombre, edad}`, crea uno con `{nombre, esAdulto: boolean}`.
6. Transforma `["2023-01-01", "2023-02-01"]` a objetos Date de JavaScript.

##### Nivel 4: Combinando propiedades
7. Dado `[{precio: 100, descuento: 0.1}]`, calcula el `precioFinal`.
8. Combina nombre y apellido en un solo campo `nombreCompleto`.

##### Nivel 5: Map avanzado
9. Aplica una función diferente a cada elemento según su índice (pares: doble, impares: triple).
10. Transforma un array de productos para agregar un campo `precioConFormato: "$100.00"`.

---

#### **Ejercicios de `filter()`**

##### Nivel 1: Filtros simples
1. Filtra números mayores a 10 de `[5, 15, 8, 20]`.
2. Filtra strings que contengan la letra "a".

##### Nivel 2: Condiciones múltiples
3. Filtra usuarios mayores de 18 y con email válido (debe contener "@").
4. Filtra productos disponibles y con precio menor a 100.

##### Nivel 3: Filtros de objetos
5. Dado un array de transacciones, filtra solo los gastos (tipo: "gasto").
6. Filtra empleados con salario entre 30000 y 50000.

##### Nivel 4: Filtros complejos
7. Filtra usuarios que tengan al menos un hobby en común con `["leer", "correr"]`.
8. Filtra productos cuyo nombre tenga más de 5 caracteres y estén en stock.

##### Nivel 5: Filter avanzado
9. Filtra elementos únicos de `[1, 2, 2, 3, 3, 4]` (sin usar Set).
10. Filtra objetos que cumplan una validación compleja (email válido, edad >= 18, nombre no vacío).

---

#### **Ejercicios de `reduce()`**

##### Nivel 1: Operaciones básicas
1. Suma todos los números de `[1, 2, 3, 4, 5]`.
2. Concatena todos los strings de `["Hola", " ", "Mundo"]`.

##### Nivel 2: Contadores
3. Cuenta cuántos números son mayores a 10 en `[5, 15, 8, 20, 3]`.
4. Cuenta la frecuencia de cada letra en `"javascript"`.

##### Nivel 3: Transformar a objeto
5. Convierte `["a", "b", "c"]` a `{a: 1, b: 2, c: 3}` (valor = índice + 1).
6. Agrupa usuarios por edad: `{25: [{...}, {...}], 30: [{...}]}`.

##### Nivel 4: Operaciones complejas
7. Encuentra el número máximo de un array sin usar `Math.max()`.
8. Calcula el promedio de edades de un array de usuarios.

##### Nivel 5: Reduce avanzado
9. Aplana un array de arrays: `[[1, 2], [3, 4]]` → `[1, 2, 3, 4]`.
10. Crea un pipeline que procese un array de transacciones y retorne un resumen completo (total ingresos, gastos, balance).

---

#### **Ejercicios combinados (map + filter + reduce)**

##### Nivel 1: Pipelines básicos
1. Filtra números pares y multiplícalos por 2.
2. Filtra strings de más de 3 caracteres y conviértelos a mayúsculas.

##### Nivel 2: Procesamiento de datos
3. Filtra usuarios activos, extrae sus edades y calcula el promedio.
4. Filtra productos en stock, aplica 10% de descuento y suma el total.

##### Nivel 3: Transformaciones complejas
5. Procesa un array de ventas: filtra las completadas, extrae los montos y suma el total.
6. Normaliza un array de usuarios (trim a nombres, emails a minúsculas) y filtra inválidos.

##### Nivel 4: Casos reales
7. Dado un array de pedidos, calcula el ingreso total por categoría.
8. Procesa un array de estudiantes: filtra aprobados, ordena por nota y extrae nombres.

##### Nivel 5: Pipelines avanzados
9. Crea una función que reciba un array y múltiples operaciones (filter, map, reduce) y las aplique en orden.
10. Implementa un sistema de procesamiento de datos con validación, transformación, filtrado y agregación.

---

### 🏢 Casos de uso empresarial

#### 1. **Dashboard de ventas**

```js
const ventas = [
    { vendedor: "Ana", monto: 5000, mes: "Enero" },
    { vendedor: "Luis", monto: 3000, mes: "Enero" },
    { vendedor: "Ana", monto: 7000, mes: "Febrero" }
]

// Total por vendedor
const totales = ventas.reduce((acc, venta) => {
    acc[venta.vendedor] = (acc[venta.vendedor] || 0) + venta.monto
    return acc
}, {})

console.log(totales)  // { Ana: 12000, Luis: 3000 }
```

#### 2. **Pipeline de procesamiento de datos**

```js
const usuariosCrudos = [
    { nombre: "  ANA  ", edad: "25", activo: "true" },
    { nombre: "luis", edad: "30", activo: "false" }
]

const usuariosLimpios = usuariosCrudos
    .map(u => ({
        nombre: u.nombre.trim().toLowerCase(),
        edad: parseInt(u.edad),
        activo: u.activo === "true"
    }))
    .filter(u => u.activo)
    .map(u => ({ ...u, nombreCompleto: u.nombre.toUpperCase() }))

console.log(usuariosLimpios)
// [{ nombre: "ana", edad: 25, activo: true, nombreCompleto: "ANA" }]
```

#### 3. **Generación de reportes**

```js
const ordenes = [
    { id: 1, cliente: "Empresa A", total: 5000, estado: "completada" },
    { id: 2, cliente: "Empresa B", total: 3000, estado: "pendiente" },
    { id: 3, cliente: "Empresa A", total: 2000, estado: "completada" }
]

// Reporte: total de ventas completadas por cliente
const reporte = ordenes
    .filter(o => o.estado === "completada")
    .reduce((acc, orden) => {
        if (!acc[orden.cliente]) {
            acc[orden.cliente] = { cliente: orden.cliente, totalVentas: 0 }
        }
        acc[orden.cliente].totalVentas += orden.total
        return acc
    }, {})

const resultado = Object.values(reporte)
console.log(resultado)
// [
//   { cliente: "Empresa A", totalVentas: 7000 },
// ]
```

#### 4. **Validación de datos masivos**

```js
const registros = [
    { email: "ana@mail.com", edad: 25 },
    { email: "invalido", edad: 17 },
    { email: "luis@mail.com", edad: 30 }
]

const esValido = (registro) => 
    registro.email.includes("@") && registro.edad >= 18

const registrosValidos = registros.filter(esValido)
const todosValidos = registros.every(esValido)

console.log(registrosValidos.length)  // 2
console.log(todosValidos)  // false
```

---

## 4️⃣ Objetos y acceso dinámico

### 📖 Definición

Un **objeto** es una colección de pares clave–valor.

Las propiedades pueden accederse:

* de forma directa
* o de forma dinámica

---

### 💡 Ejemplos

```js
const user = {
    id: 1,
    name: "Edgar"
}

user.name        // "Edgar"
user["name"]     // "Edgar"
```

Acceso dinámico:

```js
const key = "id"
user[key]        // 1
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Objetos básicos
1. Crea un objeto `persona` con propiedades `nombre`, `edad`, `ciudad`.
2. Accede a la propiedad `nombre` de dos formas diferentes.

#### Nivel 2: Acceso dinámico
3. Crea una función que reciba un objeto y el nombre de una propiedad, y retorne su valor.
4. Crea una función que reciba un objeto y un array de claves, y retorne un nuevo objeto solo con esas propiedades.

#### Nivel 3: Modificación de objetos
5. Crea una función que reciba un objeto, una clave y un valor, y actualice esa propiedad dinámicamente.
6. Crea una función que elimine una propiedad de un objeto de forma dinámica.

#### Nivel 4: Objetos anidados
7. Dado un objeto `{usuario: {nombre: "Ana", datos: {edad: 25}}}`, accede a la edad de forma segura.
8. Crea una función que reciba un path como string `"usuario.datos.edad"` y retorne el valor.

#### Nivel 5: Transformaciones complejas
9. Crea una función que transforme las claves de un objeto según un mapa de traducción.
10. Implementa una función que "aplane" un objeto anidado: `{a: {b: {c: 1}}}` → `{"a.b.c": 1}`.

---

### 🛠️ Casos de uso

#### 🔑 `keyof` en TypeScript

```ts
// ✅ Acceso dinámico tipado
function obtenerPropiedad<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key] // ✅ TypeScript sabe el tipo exacto
}
```

#### 📝 Formularios dinámicos

```js
// ✅ Actualizar estado de un formulario
const form = { nombre: "", email: "", edad: 0 }

function actualizar(campo, valor) {
    form[campo] = valor
}

actualizar("email", "edgar@mail.com")
```

#### 🌐 APIs y JSON

```js
// ✅ Procesar respuesta de API
const response = await fetch("/api/user")
const data = await response.json()

// Acceso dinámico a propiedades
const campos = ["name", "email", "role"]
campos.forEach(campo => console.log(data[campo]))
```

#### 🔄 Mapeo de datos

```js
// ✅ Traducir claves de un objeto
const traduccion = {
    name: "nombre",
    age: "edad",
    email: "correo"
}

function traducirObjeto(obj, mapa) {
    const resultado = {}
    for (const key in obj) {
        const nuevaKey = mapa[key] || key
        resultado[nuevaKey] = obj[key]
    }
    return resultado
}

traducirObjeto({ name: "Ana", age: 25 }, traduccion)
// { nombre: "Ana", edad: 25 }
```

---

## 5️⃣ `undefined` y `null`

### 📖 Definición

* `undefined`: valor **no asignado**
* `null`: valor **intencionalmente vacío**

---

### 💡 Ejemplos

```js
let x
console.log(x) // undefined

const user = {}
console.log(user.name) // undefined
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Identificación básica
1. Crea una variable sin asignarle valor y muestra su tipo.
2. Accede a una propiedad inexistente de un objeto y muestra el resultado.

#### Nivel 2: Comparaciones
3. Compara `null == undefined` y `null === undefined`. Explica la diferencia.
4. Crea una función que retorne `true` si un valor es `null` o `undefined`.

#### Nivel 3: Valores por defecto
5. Usa el operador `||` para asignar un valor por defecto si una variable es `undefined`.
6. Usa el operador `??` (nullish coalescing) y compara su comportamiento con `||`.

#### Nivel 4: Optional chaining
7. Dado un objeto anidado, usa optional chaining para acceder a una propiedad profunda.
8. Crea una función que reciba un objeto y retorne un valor anidado de forma segura.

#### Nivel 5: Validaciones complejas
9. Implementa una función que valide si todos los campos requeridos de un objeto están definidos.
10. Crea un sistema de validación que distinga entre `null`, `undefined`, `""` y `0`.

---

### 🛠️ Casos de uso

#### ⚠️ Errores comunes en JS

```js
// ❌ Error común
const usuario = { nombre: "Ana" }
console.log(usuario.direccion.calle) // 💥 Cannot read property 'calle' of undefined

// ✅ Solución: optional chaining
console.log(usuario.direccion?.calle) // undefined (no crashea)
```

#### ❓ Opcionales en TypeScript

```ts
// ✅ TypeScript obliga a manejar undefined
interface Usuario {
    nombre: string
    email?: string // puede ser undefined
}

function saludar(usuario: Usuario) {
    // ✅ TypeScript detecta que email puede no existir
    console.log(usuario.email.toUpperCase()) // ❌ Error de compilación
    console.log(usuario.email?.toUpperCase()) // ✅ Correcto
}
```

#### ✔️ Validaciones

```js
// ✅ Valores por defecto con nullish coalescing
function procesar(valor) {
    const definitivo = valor ?? "valor por defecto"
    console.log(definitivo)
}

procesar(undefined) // "valor por defecto"
procesar(null)      // "valor por defecto"
procesar(0)         // 0 (no "valor por defecto")
procesar("")        // "" (no "valor por defecto")
```

---

## 6️⃣ Iteración

### 📖 Definición

Iterar es recorrer estructuras de datos.

---

### 💡 Ejemplos

#### `for`

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
```

#### `for...of`

```js
for (const item of arr) {
    console.log(item)
}
```

#### `for...in`

```js
for (const key in obj) {
    console.log(key, obj[key])
}
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: For básico
1. Imprime números del 1 al 10 usando `for`.
2. Recorre un array de nombres e imprime cada uno.

#### Nivel 2: For...of
3. Usa `for...of` para sumar todos los números de un array.
4. Recorre un array de objetos e imprime una propiedad específica.

#### Nivel 3: For...in
5. Recorre un objeto e imprime todas sus claves y valores.
6. Cuenta cuántas propiedades tiene un objeto usando `for...in`.

#### Nivel 4: Iteración con condiciones
7. Recorre un array y solo procesa elementos que cumplan una condición.
8. Usa `break` para detener un loop cuando encuentres un valor específico.

#### Nivel 5: Iteración avanzada
9. Implementa tu propia versión de `forEach` usando `for`.
10. Crea una función que itere sobre un objeto anidado recursivamente.

---

### 🛠️ Casos de uso

#### 📊 Procesamiento de datos

```js
// ✅ Procesar lista de usuarios
const usuarios = [
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false }
]

for (const usuario of usuarios) {
    if (usuario.activo) {
        console.log(`${usuario.nombre} está activo`)
    }
}
```

#### 🐛 Bugs comunes con `undefined`

```js
// ❌ for...in en arrays (incluye propiedades heredadas)
const arr = [1, 2, 3]
arr.customProp = "oops"

for (const key in arr) {
    console.log(arr[key]) // 1, 2, 3, "oops" ❌
}

// ✅ for...of solo recorre valores
for (const value of arr) {
    console.log(value) // 1, 2, 3 ✅
}
```

#### 🔍 Lógica interna de `map` y `filter`

```js
// ✅ Entender cómo funciona map() por dentro
function miMap(arr, callback) {
    const resultado = []
    for (let i = 0; i < arr.length; i++) {
        resultado.push(callback(arr[i], i, arr))
    }
    return resultado
}

miMap([1, 2, 3], n => n * 2) // [2, 4, 6]
```

---

## 7️⃣ DOM básico

### 📖 Definición

El **DOM** es la representación del HTML en JavaScript.

---

### 💡 Ejemplos

```js
const button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log("Click")
})
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Selección básica
1. Selecciona un elemento por su ID y muestra su contenido.
2. Selecciona todos los párrafos de una página.

#### Nivel 2: Manipulación simple
3. Cambia el texto de un elemento h1.
4. Agrega una clase CSS a un elemento.

#### Nivel 3: Eventos básicos
5. Escucha un evento `click` en un botón y muestra un mensaje.
6. Escucha el evento `input` en un campo de texto y muestra su valor.

#### Nivel 4: Creación de elementos
7. Crea un nuevo elemento `<li>` y agrégalo a una lista.
8. Crea una tarjeta (div con título y descripción) dinámicamente.

#### Nivel 5: Aplicaciones interactivas
9. Crea un contador que incremente/decremente con botones.
10. Implementa una lista de tareas (agregar, marcar como completada, eliminar).

---

### 🛠️ Casos de uso

#### 🎨 Frontend interactivo

```js
// ✅ Cambiar contenido dinámicamente
const titulo = document.querySelector("h1")
titulo.textContent = "Nuevo título"

// ✅ Agregar clases CSS
const card = document.querySelector(".card")
card.classList.add("active")
```

#### 🖱️ Eventos

```js
// ✅ Formulario interactivo
const form = document.querySelector("form")
const input = document.querySelector("input")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Valor:", input.value)
})
```

#### 📘 TypeScript + DOM typings

```ts
// ✅ TypeScript conoce los tipos del DOM
const button = document.querySelector("button") // HTMLButtonElement | null

if (button) {
    button.addEventListener("click", (e: MouseEvent) => {
        console.log(e.clientX, e.clientY)
    })
}
```

#### 🔄 Renderizado dinámico

```js
// ✅ Crear lista de tareas
const tareas = ["Estudiar", "Codear", "Descansar"]
const lista = document.querySelector("ul")

tareas.forEach(tarea => {
    const li = document.createElement("li")
    li.textContent = tarea
    lista.appendChild(li)
})
```

---

## 8️⃣ Mutabilidad e inmutabilidad

### 📖 Definición

* **Mutable**: el valor puede cambiar
* **Inmutable**: se crea uno nuevo

---

### 💡 Ejemplos

```js
const arr = [1, 2]
arr.push(3) // mutable (modifica el original)
```

Inmutable:

```js
const newArr = [...arr, 3] // crea uno nuevo
```

---

### 🧪 Ejercicios (10 niveles de dificultad)

#### Nivel 1: Identificación
1. Modifica un array con `push` y observa el resultado.
2. Crea una copia de un array con spread operator.

#### Nivel 2: Métodos mutables vs inmutables
3. Compara `sort()` vs `toSorted()` (o crear copia antes de ordenar).
4. Compara `reverse()` vs crear una versión inmutable.

#### Nivel 3: Objetos
5. Modifica una propiedad de un objeto y observa cómo afecta a sus referencias.
6. Crea una copia superficial de un objeto con spread operator.

#### Nivel 4: Deep copy
7. Crea una función que haga una copia profunda de un objeto simple.
8. Identifica cuándo `JSON.parse(JSON.stringify())` no funciona.

#### Nivel 5: Inmutabilidad en funciones
9. Refactoriza una función que modifica un array para que sea inmutable.
10. Implementa operaciones CRUD inmutables sobre un array de objetos.

---

### 🛠️ Casos de uso

#### 🐛 Bugs silenciosos

```js
// ❌ Bug: modificar referencia compartida
const original = [1, 2, 3]
const copia = original
copia.push(4)
console.log(original) // [1, 2, 3, 4] ❌ se modificó sin querer

// ✅ Solución: copiar correctamente
const copiaBuena = [...original]
copiaBuena.push(5)
console.log(original) // [1, 2, 3, 4] ✅ no se modificó
```

#### ⚛️ React / Angular

```js
// ❌ Mal en React (no detecta cambios)
const [items, setItems] = useState([1, 2, 3])
items.push(4)
setItems(items) // React no detecta el cambio

// ✅ Bien en React (inmutable)
setItems([...items, 4]) // React detecta que es un array nuevo
```

#### 🧩 Programación funcional

```js
// ✅ Inmutabilidad = predictibilidad
const usuarios = [{ id: 1, nombre: "Ana" }]

// ❌ Mutable
function activarUsuario(usuarios, id) {
    const user = usuarios.find(u => u.id === id)
    user.activo = true // modifica el original
    return usuarios
}

// ✅ Inmutable
function activarUsuario(usuarios, id) {
    return usuarios.map(u => 
        u.id === id ? { ...u, activo: true } : u
    )
}
```

#### 🔒 Prevenir efectos secundarios

```js
// ✅ Función pura (sin efectos secundarios)
function agregarItem(lista, item) {
    return [...lista, item] // no modifica la original
}

const lista1 = [1, 2]
const lista2 = agregarItem(lista1, 3)
console.log(lista1) // [1, 2] ✅ intacta
console.log(lista2) // [1, 2, 3] ✅ nueva
```

---

## 🧠 Cierre

> **TypeScript no es difícil.
> Lo difícil es JavaScript mal entendido.**

Con estas bases:

* ✅ Los callbacks dejan de confundir
* ✅ Los genéricos dejan de parecer magia
* ✅ `extends keyof` se vuelve lógico
* ✅ Los errores de `undefined` desaparecen
* ✅ La programación funcional tiene sentido

---

### 🚀 Siguiente paso

Cuando domines estos conceptos, el siguiente nivel natural es:

👉 **Clases y POO en TypeScript (bien hechas, sin humo)**

---

## 📚 Recursos adicionales

* [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [JavaScript.info](https://javascript.info/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

