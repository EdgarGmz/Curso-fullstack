# 📘 Curso Completo de Node.js

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-9.x-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Node.js desde conceptos básicos hasta avanzados, con enfoque en programación orientada a objetos, APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🏛️ Programación Orientada a Objetos](#️-programación-orientada-a-objetos)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# 1. Verificar Node.js instalado (versión 20.x o superior)
node --version

# 2. Verificar npm instalado
npm --version

# 3. Crear nuevo proyecto
mkdir mi-proyecto
cd mi-proyecto
npm init -y

# 4. Crear archivo principal
# index.js
console.log("¡Hola, Node.js!");

# 5. Ejecutar el proyecto
node index.js
```

### Estructura de un Proyecto Node.js

```
mi-proyecto/
├── index.js              # Punto de entrada
├── package.json          # Configuración del proyecto
├── package-lock.json     # Lock de dependencias
├── node_modules/         # Dependencias instaladas
└── src/                  # Código fuente
    ├── models/
    ├── services/
    └── utils/
```

---

## 📋 Requisitos Mínimos

- **Node.js 20.x** o superior
- **npm 9.x** o superior
- **Editor de código**: VS Code, WebStorm, o cualquier editor
- **Conocimientos básicos**: Lógica de programación (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Configurar editor de código
- [ ] Crear primer proyecto
- [ ] Entender package.json

**📚 Conceptos Clave:**

##### **package.json**
**Definición:** Archivo de configuración que define las dependencias y scripts del proyecto.

**Ejemplo:**
```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "description": "Mi primer proyecto Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Node.js"`

#### Paso 2: Tipos de Datos Básicos
- [ ] Tipos primitivos (number, string, boolean)
- [ ] Variables (let, const, var)
- [ ] null y undefined
- [ ] Conversión de tipos

**📚 Conceptos Clave:**

##### **Tipos Primitivos**
**Definición:** Tipos de datos básicos proporcionados por JavaScript.

**Ejemplo:**
```javascript
// Tipos numéricos
let edad = 25;                    // number
let precio = 99.99;               // number

// Texto
let nombre = "Juan";              // string
let inicial = 'J';                // string

// Booleano
let esActivo = true;              // boolean
let esMayor = false;              // boolean

// null y undefined
let numero = null;                // null
let texto = undefined;            // undefined

// Conversión de tipos
let edadStr = String(edad);       // "25"
let precioInt = parseInt(precio); // 99
```

**📝 Ejercicios:**
1. Crear variables para almacenar información personal
2. Realizar operaciones matemáticas básicas
3. Concatenar strings con template literals

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de datos básicos y variables"`

#### Paso 3: Operadores y Expresiones
- [ ] Operadores aritméticos
- [ ] Operadores de comparación
- [ ] Operadores lógicos
- [ ] Operadores de asignación

**Ejemplo:**
```javascript
let a = 10;
let b = 5;

// Aritméticos
let suma = a + b;           // 15
let resta = a - b;          // 5
let multiplicacion = a * b; // 50
let division = a / b;       // 2
let modulo = a % b;         // 0
let potencia = a ** b;      // 100000

// Comparación
let esMayor = a > b;        // true
let esIgual = a === b;      // false (=== compara tipo y valor)
let esDiferente = a !== b;  // true

// Lógicos
let resultado = (a > 5) && (b < 10);  // true
let resultado2 = (a > 15) || (b < 3); // false
let resultado3 = !(a > 5);            // false
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operadores y expresiones"`

#### Paso 4: Estructuras de Control
- [ ] if/else
- [ ] switch/case
- [ ] for, while, do-while
- [ ] for...of, for...in

**Ejemplo:**
```javascript
// if/else
let edad = 18;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// switch
let dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Viernes":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día normal");
}

// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of
let frutas = ["Manzana", "Banana", "Naranja"];
for (let fruta of frutas) {
    console.log(fruta);
}

// while
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de control"`

#### Paso 5: Arrays y Objetos
- [ ] Arrays
- [ ] Métodos de arrays (map, filter, reduce)
- [ ] Objetos literales
- [ ] Destructuring

**Ejemplo:**
```javascript
// Arrays
let numeros = [1, 2, 3, 4, 5];
numeros.push(6);              // [1, 2, 3, 4, 5, 6]

// Métodos de arrays
let dobles = numeros.map(n => n * 2);        // [2, 4, 6, 8, 10, 12]
let mayores = numeros.filter(n => n > 3);    // [4, 5, 6]
let suma = numeros.reduce((acc, n) => acc + n, 0); // 21

// Objetos literales
let persona = {
    nombre: "Juan",
    edad: 25,
    email: "juan@example.com"
};

// Destructuring
let { nombre, edad } = persona;
console.log(nombre); // "Juan"
console.log(edad);   // 25
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: arrays y objetos"`

#### Paso 6: Funciones
- [ ] Funciones declarativas
- [ ] Funciones expresivas (arrow functions)
- [ ] Parámetros y argumentos
- [ ] Valores por defecto
- [ ] Rest parameters

**Ejemplo:**
```javascript
// Función declarativa
function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
}

// Arrow function
const saludar2 = (nombre) => {
    return `¡Hola, ${nombre}!`;
};

// Arrow function simplificada
const saludar3 = nombre => `¡Hola, ${nombre}!`;

// Función con valores por defecto
function presentar(nombre, edad = 0) {
    return `Soy ${nombre}, tengo ${edad} años`;
}

// Rest parameters
function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(sumar(1, 2, 3, 4, 5)); // 15
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: funciones"`

---

### 📍 Fase 2: Programación Orientada a Objetos (Intermedio)

#### Paso 7: Clases y Objetos
- [ ] Definir clases
- [ ] Crear objetos (instancias)
- [ ] Propiedades y métodos
- [ ] this

**📚 Conceptos Clave:**

##### **Clase**
**Definición:** Plantilla para crear objetos. Define propiedades y métodos.

**Ejemplo:**
```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    presentarse() {
        return `Soy ${this.nombre}, tengo ${this.edad} años`;
    }
    
    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

// Uso
const persona = new Persona("Juan", 25);
console.log(persona.presentarse()); // "Soy Juan, tengo 25 años"
console.log(Persona.esMayorDeEdad(20)); // true
```

**📝 Ejercicios:**
1. Crear clase `Producto` con propiedades y métodos
2. Crear clase `CuentaBancaria` con métodos de depósito y retiro
3. Implementar validaciones en métodos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: clases y objetos básicos"`

#### Paso 8: Encapsulamiento
- [ ] Propiedades privadas (#)
- [ ] Getters y setters
- [ ] Métodos privados

**Ejemplo:**
```javascript
class CuentaBancaria {
    #saldo = 0;  // Propiedad privada
    
    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }
    
    get saldo() {
        return this.#saldo;
    }
    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
        }
    }
    
    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
        } else {
            throw new Error("Cantidad inválida");
        }
    }
}

// Uso
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
console.log(cuenta.saldo); // 1500
// console.log(cuenta.#saldo); // Error: propiedad privada
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: encapsulamiento"`

#### Paso 9: Herencia
- [ ] Herencia con extends
- [ ] super
- [ ] Métodos sobrescritos
- [ ] Clases abstractas (simuladas)

**📚 Conceptos Clave:**

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra.

**Ejemplo:**
```javascript
// Clase base
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido() {
        return "Sonido genérico";
    }
}

// Clase derivada
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);  // Llamar al constructor padre
        this.raza = raza;
    }
    
    hacerSonido() {  // Sobrescribir método
        return "Guau guau";
    }
    
    correr() {
        return `${this.nombre} está corriendo`;
    }
}

// Uso
const perro = new Perro("Max", "Labrador");
console.log(perro.hacerSonido()); // "Guau guau"
console.log(perro.correr());      // "Max está corriendo"
```

**📝 Ejercicios:**
1. Crear jerarquía: Vehiculo -> Auto, Moto
2. Implementar métodos abstractos
3. Usar super() para llamar métodos padre

> 💡 **Sugerencia de Commit**: `git commit -m "feat: herencia y polimorfismo"`

#### Paso 10: Polimorfismo
- [ ] Polimorfismo con herencia
- [ ] Duck typing
- [ ] Interfaces (simuladas)

**Ejemplo:**
```javascript
class Forma {
    calcularArea() {
        throw new Error("Método abstracto");
    }
}

class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo extends Forma {
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    
    calcularArea() {
        return this.ancho * this.alto;
    }
}

// Polimorfismo
const formas = [
    new Circulo(5),
    new Rectangulo(4, 6)
];

formas.forEach(forma => {
    console.log(`Área: ${forma.calcularArea()}`);
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: polimorfismo avanzado"`

---

### 📍 Fase 3: Características Avanzadas (Avanzado)

#### Paso 11: Módulos (ES6)
- [ ] export y import
- [ ] default exports
- [ ] named exports
- [ ] Módulos CommonJS (require/module.exports)

**Ejemplo:**
```javascript
// utils.js
export function sumar(a, b) {
    return a + b;
}

export const PI = 3.14159;

export default function multiplicar(a, b) {
    return a * b;
}

// main.js
import multiplicar, { sumar, PI } from './utils.js';

console.log(sumar(5, 3));        // 8
console.log(multiplicar(4, 2));  // 8
console.log(PI);                 // 3.14159
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: módulos ES6"`

#### Paso 12: Async/Await y Promises
- [ ] Promises
- [ ] async/await
- [ ] try/catch con async
- [ ] Promise.all, Promise.race

**Ejemplo:**
```javascript
// Promise
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, nombre: "Juan" });
            } else {
                reject(new Error("ID inválido"));
            }
        }, 1000);
    });
}

// async/await
async function procesarUsuario(id) {
    try {
        const usuario = await obtenerUsuario(id);
        console.log(usuario);
        return usuario;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

// Promise.all
async function obtenerMultiplesUsuarios(ids) {
    const promesas = ids.map(id => obtenerUsuario(id));
    return await Promise.all(promesas);
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: async/await y promises"`

---

### 📍 Fase 4: Consumo de APIs

#### Paso 13: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] JSON en JavaScript
- [ ] fetch API

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```javascript
// Modelo para deserializar JSON
class Usuario {
    constructor(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    
    static fromJSON(json) {
        return new Usuario(json.id, json.nombre, json.email);
    }
    
    toJSON() {
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email
        };
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 14: Consumir APIs con fetch
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores
- [ ] Headers y autenticación

**Ejemplo:**
```javascript
class ApiCliente {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async obtenerUsuario(userId) {
        try {
            const response = await fetch(`${this.baseUrl}/usuarios/${userId}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            throw error;
        }
    }
    
    async crearUsuario(usuarioData) {
        try {
            const response = await fetch(`${this.baseUrl}/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }
}

// Uso
const cliente = new ApiCliente("https://api.example.com");
const usuario = await cliente.obtenerUsuario(1);
```

**📝 Ejercicios:**
1. Consumir API pública (JSONPlaceholder, GitHub API)
2. Implementar manejo de errores con try-catch
3. Crear servicio para múltiples endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con fetch"`

#### Paso 15: Axios (Librería HTTP)
- [ ] Instalar axios
- [ ] Realizar peticiones con axios
- [ ] Interceptores
- [ ] Manejo de errores

**Ejemplo:**
```javascript
const axios = require('axios');

class ApiCliente {
    constructor(baseUrl) {
        this.client = axios.create({
            baseURL: baseUrl,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        // Interceptor de respuesta
        this.client.interceptors.response.use(
            response => response.data,
            error => {
                console.error("Error de API:", error.message);
                throw error;
            }
        );
    }
    
    async obtenerUsuario(userId) {
        return await this.client.get(`/usuarios/${userId}`);
    }
    
    async crearUsuario(usuarioData) {
        return await this.client.post('/usuarios', usuarioData);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con axios"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 16: Principio de Responsabilidad Única (SRP)
- [ ] ¿Qué es SRP?
- [ ] Identificar violaciones de SRP
- [ ] Refactorizar código para cumplir SRP

**📚 Conceptos Clave:**

##### **Single Responsibility Principle (SRP)**
**Definición:** Una clase debe tener una sola razón para cambiar. Cada clase debe tener una única responsabilidad.

**Ejemplo - ❌ Mal:**
```javascript
class Usuario {
    guardar() {
        // Guardar en base de datos
    }
    
    enviarEmail() {
        // Enviar email
    }
    
    generarReporte() {
        // Generar reporte
    }
}
```

**Ejemplo - ✅ Bien:**
```javascript
// Separar responsabilidades
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class UsuarioRepository {
    guardar(usuario) {
        // Guardar en base de datos
    }
}

class EmailService {
    enviarEmail(email, mensaje) {
        // Enviar email
    }
}

class ReporteService {
    generarReporte(usuario) {
        // Generar reporte
    }
}
```

**📝 Ejercicios:**
1. Refactorizar clase que tiene múltiples responsabilidades
2. Crear servicios separados para cada responsabilidad
3. Aplicar SRP en proyecto existente

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP"`

#### Paso 17: Principio Abierto/Cerrado (OCP)
- [ ] ¿Qué es OCP?
- [ ] Extensión sin modificación
- [ ] Usar herencia y composición

**Ejemplo:**
```javascript
// Abierto para extensión, cerrado para modificación
class Descuento {
    calcular(precio) {
        throw new Error("Método abstracto");
    }
}

class DescuentoEstudiante extends Descuento {
    calcular(precio) {
        return precio * 0.9; // 10% descuento
    }
}

class DescuentoVIP extends Descuento {
    calcular(precio) {
        return precio * 0.8; // 20% descuento
    }
}

class CalculadoraPrecio {
    calcularPrecioFinal(precioBase, descuento) {
        return descuento.calcular(precioBase);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP"`

#### Paso 18: Principio de Sustitución de Liskov (LSP)
- [ ] ¿Qué es LSP?
- [ ] Contratos de clase base
- [ ] Precondiciones y postcondiciones

**Ejemplo:**
```javascript
// Las subclases deben poder reemplazar a la clase base
class Animal {
    hacerSonido() {
        return "Sonido genérico";
    }
}

class Perro extends Animal {
    hacerSonido() {
        return "Guau";
    }
}

class Gato extends Animal {
    hacerSonido() {
        return "Miau";
    }
}

// Cualquier subclase puede reemplazar a Animal
function hacerSonarAnimal(animal) {
    console.log(animal.hacerSonido());
}

// Funciona con cualquier subclase
hacerSonarAnimal(new Perro()); // "Guau"
hacerSonarAnimal(new Gato());  // "Miau"
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio LSP"`

#### Paso 19: Principio de Segregación de Interfaces (ISP)
- [ ] ¿Qué es ISP?
- [ ] Interfaces específicas vs generales
- [ ] Evitar interfaces "gordas"

**Ejemplo:**
```javascript
// ❌ Mal: interfaz muy grande (simulada con clase)
class ITrabajador {
    trabajar() {
        throw new Error("Método abstracto");
    }
    
    comer() {
        throw new Error("Método abstracto");
    }
    
    dormir() {
        throw new Error("Método abstracto");
    }
}

// ✅ Bien: interfaces segregadas
class ITrabajador {
    trabajar() {
        throw new Error("Método abstracto");
    }
}

class ISerVivo {
    comer() {
        throw new Error("Método abstracto");
    }
    
    dormir() {
        throw new Error("Método abstracto");
    }
}

class Empleado extends ITrabajador {
    constructor() {
        super();
        this.serVivo = new ISerVivo();
    }
    
    trabajar() {
        console.log("Trabajando...");
    }
    
    comer() {
        this.serVivo.comer();
    }
    
    dormir() {
        this.serVivo.dormir();
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio ISP"`

#### Paso 20: Principio de Inversión de Dependencias (DIP)
- [ ] ¿Qué es DIP?
- [ ] Depender de abstracciones
- [ ] Inyección de dependencias

**Ejemplo:**
```javascript
// Depender de interfaz, no de implementación concreta
class IRepositorioUsuario {
    obtenerPorId(id) {
        throw new Error("Método abstracto");
    }
    
    guardar(usuario) {
        throw new Error("Método abstracto");
    }
}

class UsuarioService {
    constructor(repositorio) {
        this.repositorio = repositorio; // Inyección de dependencia
    }
    
    obtenerUsuario(id) {
        return this.repositorio.obtenerPorId(id);
    }
}

// Implementaciones
class RepositorioUsuarioMemoria extends IRepositorioUsuario {
    constructor() {
        super();
        this.usuarios = {};
    }
    
    obtenerPorId(id) {
        return this.usuarios[id];
    }
    
    guardar(usuario) {
        this.usuarios[usuario.id] = usuario;
    }
}

class RepositorioUsuarioBD extends IRepositorioUsuario {
    obtenerPorId(id) {
        // Lógica para obtener de BD
    }
    
    guardar(usuario) {
        // Lógica para guardar en BD
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DIP"`

#### Paso 21: Principio YAGNI (You Aren't Gonna Need It)
- [ ] ¿Qué es YAGNI?
- [ ] Evitar sobre-ingeniería
- [ ] Implementar solo lo necesario

**📚 Conceptos Clave:**

##### **YAGNI (You Aren't Gonna Need It)**
**Definición:** No implementes funcionalidad hasta que realmente la necesites. Evita la sobre-ingeniería.

**Ejemplo:**
```javascript
// ❌ Mal: Implementar funcionalidad que no se necesita
class Usuario {
    enviarEmail() {
        // No se usa
    }
    
    generarPDF() {
        // No se usa
    }
    
    exportarExcel() {
        // No se usa
    }
}

// ✅ Bien: Solo implementar lo necesario
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    // Solo agregar métodos cuando realmente se necesiten
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI"`

#### Paso 22: Principio KISS (Keep It Simple, Stupid)
- [ ] ¿Qué es KISS?
- [ ] Simplicidad sobre complejidad
- [ ] Código legible y mantenible

**Ejemplo:**
```javascript
// ❌ Mal: Solución compleja innecesaria
const calcularSuma = (numeros) => 
    numeros.reduce((acc, n) => acc + n, 0);

// ✅ Bien: Solución simple y clara
function calcularSuma(numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS"`

#### Paso 23: Principio DRY (Don't Repeat Yourself)
- [ ] ¿Qué es DRY?
- [ ] Identificar código duplicado
- [ ] Extraer funciones comunes

**Ejemplo:**
```javascript
// ❌ Mal: Código duplicado
function validarNumero(num) {
    if (num < 0) {
        throw new Error("Número negativo");
    }
}

function sumar(a, b) {
    if (a < 0) {
        throw new Error("Número negativo");
    }
    if (b < 0) {
        throw new Error("Número negativo");
    }
    return a + b;
}

// ✅ Bien: Eliminar duplicación
function validarNumero(num) {
    if (num < 0) {
        throw new Error("Número negativo");
    }
}

function sumar(a, b) {
    validarNumero(a);
    validarNumero(b);
    return a + b;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```javascript
// Modelo
class Tarea {
    constructor(id, titulo, descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = false;
        this.fechaCreacion = new Date();
    }
    
    completar() {
        this.completada = true;
    }
}

// Repositorio (SRP)
class IRepositorioTarea {
    agregar(tarea) {
        throw new Error("Método abstracto");
    }
    
    obtenerPorId(id) {
        throw new Error("Método abstracto");
    }
    
    obtenerTodas() {
        throw new Error("Método abstracto");
    }
}

class RepositorioTareaMemoria extends IRepositorioTarea {
    constructor() {
        super();
        this.tareas = {};
    }
    
    agregar(tarea) {
        this.tareas[tarea.id] = tarea;
    }
    
    obtenerPorId(id) {
        return this.tareas[id];
    }
    
    obtenerTodas() {
        return Object.values(this.tareas);
    }
}

// Servicio
class TareaService {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }
    
    completarTarea(id) {
        const tarea = this.repositorio.obtenerPorId(id);
        if (tarea) {
            tarea.completar();
            return true;
        }
        return false;
    }
}
```

### Ejemplo 2: Cliente API para GitHub

```javascript
class GitHubApiCliente {
    constructor() {
        this.baseUrl = "https://api.github.com";
        this.headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "MiApp"
        };
    }
    
    async obtenerUsuario(username) {
        try {
            const response = await fetch(
                `${this.baseUrl}/users/${username}`,
                { headers: this.headers }
            );
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            throw error;
        }
    }
}

// Uso
const cliente = new GitHubApiCliente();
const usuario = await cliente.obtenerUsuario("octocat");
console.log(`Usuario: ${usuario.login}`);
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: POO
- [ ] Fase 3: Características Avanzadas
- [ ] Fase 4: Consumo de APIs
- [ ] Fase 5: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Node.js](https://nodejs.org/es/docs/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Node.js desde principiante hasta experto.

