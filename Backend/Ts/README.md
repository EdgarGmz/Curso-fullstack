# 📘 Curso Completo de TypeScript

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-9.x-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)

</div>

> Curso completo de TypeScript con aprendizaje incremental y secuencial. Cada tema incluye definición, ejemplos prácticos y ejercicios para reforzar el conocimiento.

---

## 📑 Tabla de Contenidos

### 📚 Contenido del Curso

#### Fundamentos
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
  - [Tipos Primitivos](#1-tipos-primitivos)
  - [Objetos y Arrays](#2-objetos-y-arrays)
  - [Funciones](#3-funciones)
  - [Interfaces vs Types](#4-interfaces-vs-types)
  - [Clases y POO](#5-clases-y-programación-orientada-a-objetos)

#### Nivel Intermedio
- [📖 Nivel Intermedio](#-nivel-intermedio)
  - [Genéricos (Generics)](#1-genéricos-generics)
  - [Union y Intersection Types](#2-union-y-intersection-types)
  - [Type Guards y Narrowing](#3-type-guards-y-narrowing)
  - [Utility Types](#4-utility-types)

#### Nivel Avanzado
- [🎓 Nivel Avanzado](#-nivel-avanzado)
  - [Conditional Types](#1-conditional-types)
  - [Template Literal Types](#2-template-literal-types)
  - [Decoradores](#3-decoradores)
  - [Mapped Types Avanzados](#4-mapped-types-avanzados)

### 🌐 Temas Especializados

#### APIs
- [🌐 APIs: Consumo y Creación](#-apis-consumo-y-creación)
  - [¿Qué es una API?](#-qué-es-una-api)
  - [Métodos HTTP Comunes](#-métodos-http-comunes)
  - [Consumir APIs con TypeScript](#-consumir-apis-con-typescript)
  - [Crear API REST con Express](#-crear-api-rest-con-express-y-typescript)

#### ORMs
- [🗄️ ORMs: Implementación y Uso](#️-orms-implementación-y-uso)
  - [¿Qué es un ORM?](#-qué-es-un-orm)
  - [Comparativa de ORMs Populares](#-comparativa-de-orms-populares-para-typescript)
  - [TypeORM con TypeScript](#-typeorm-con-typescript)
  - [Prisma con TypeScript](#-prisma-con-typescript)
  - [Comparativa: TypeORM vs Prisma](#-comparativa-typeorm-vs-prisma)

### 🏗️ Buenas Prácticas y Proyectos
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
  - [Principios SOLID](#-principios-solid)
  - [Otros Principios Importantes](#-otros-principios-importantes)
- [📂 Estructura del Repositorio](#-estructura-del-repositorio)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)
  - [Ejemplo 1: Sistema de Gestión de Tareas](#-ejemplo-1-sistema-de-gestión-de-tareas)
  - [Ejemplo 2: Cliente API Tipado para GitHub](#-ejemplo-2-cliente-api-tipado-para-github)

---

## 📚 Fundamentos Básicos

<div align="center">

![Fundamentos](https://img.shields.io/badge/Fundamentos-Básicos-4CAF50?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Basics-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

> 💡 **Estructura de Aprendizaje:** Cada tema incluye **Definición**, **Ejemplos** y **Ejercicios** para un aprendizaje incremental y secuencial.

**🎯 Navegación Rápida de Conceptos:**
- **Paso 2:** Tipos básicos (Type, any, unknown, never, void)
- **Paso 3:** Tuplas y Enums
- **Paso 5:** Interfaces y Types
- **Paso 6:** Clases, Herencia, Polimorfismo, Encapsulamiento
- **Paso 7:** Genéricos y Constraints
- **Paso 8:** Módulos ES6, Namespaces, Type Inference
- **Paso 9:** Union/Intersection Types, Type Guards, Narrowing, Discriminated Unions, Conditional Types
- **Paso 10:** Utility Types (Partial, Required, Readonly, Pick, Omit, Record)
- **Paso 11:** Decoradores
- **Paso 12:** Template Literal Types
- **Paso 13:** API y REST
- **Paso 14:** Promise, Async/Await, Type Assertion
- **Paso 17:** ORM
- **Paso 22:** Principios SOLID (SRP, OCP, DIP)

### 1. Tipos Primitivos

**Definición:** Los tipos primitivos son los tipos básicos de TypeScript que representan valores simples: `string`, `number`, `boolean`, `null`, `undefined`. Además, TypeScript incluye tipos especiales como `any`, `unknown`, `never` y `void` para casos específicos.

**Ejemplos:**

```typescript
// Tipos primitivos básicos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;
let valor: null = null;
let indefinido: undefined = undefined;

// TypeScript infiere el tipo automáticamente
let ciudad = "Madrid"; // TypeScript sabe que es string

// Tipos especiales
let cualquier: any = "puede ser cualquier cosa";
let desconocido: unknown = "necesita verificación";

// Tipo never - para funciones que nunca retornan
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Tipo void - para funciones sin retorno
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
}
```

**Ejercicios:**

1. Declara variables de tipo `string`, `number` y `boolean` con valores apropiados
2. Crea una función que reciba un parámetro de tipo `unknown` y verifique si es string antes de usarlo
3. Implementa una función que retorne `never` (por ejemplo, que lance un error)
4. Crea una función con tipo de retorno `void` que imprima un mensaje en consola
5. Compara el uso de `any` vs `unknown` en un ejemplo práctico

---

#### **Tipo `any`**
**Definición:** Permite cualquier tipo de valor y desactiva la verificación de tipos. Útil para migración gradual desde JavaScript, pero debe evitarse en código nuevo.

**Ejemplo:**
```typescript
let valor: any = "hola";
valor = 42;        // ✅ Permitido
valor = true;      // ✅ Permitido
valor.foo.bar;     // ⚠️ No hay verificación de tipos
```

#### **Tipo `unknown`**
**Definición:** Similar a `any`, pero más seguro. Requiere verificación de tipo antes de usar el valor. Es la alternativa segura a `any`.

**Ejemplo:**
```typescript
let valor: unknown = "hola";

// ❌ Error: no se puede usar directamente
// console.log(valor.toUpperCase());

// ✅ Correcto: verificar tipo primero
if (typeof valor === "string") {
  console.log(valor.toUpperCase()); // Ahora TypeScript sabe que es string
}
```

#### **Tipo `never`**
**Definición:** Representa valores que nunca ocurren. Se usa para funciones que nunca retornan o para tipos que representan valores imposibles.

**Ejemplo:**
```typescript
// Función que nunca retorna
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Tipo que nunca puede ocurrir
type Nunca = string & number; // Imposible, siempre será never
```

#### **Tipo `void`**
**Definición:** Representa la ausencia de un valor de retorno. Se usa principalmente para funciones que no retornan nada.

**Ejemplo:**
```typescript
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
  // No retorna nada explícitamente
}
```

---

### 2. Objetos y Arrays

**Definición:** Los objetos en TypeScript se pueden tipar de forma inline o usando interfaces/types. Los arrays pueden tiparse con `T[]` o `Array<T>`. Las tuplas permiten arrays con tipos específicos en cada posición.

**Ejemplos:**

```typescript
// Tipado inline de objetos
let usuario: { nombre: string; edad: number } = {
  nombre: "Juan",
  edad: 25
};

// Con interface (recomendado)
interface Usuario {
  nombre: string;
  edad: number;
  email?: string; // Propiedad opcional
}

let usuario2: Usuario = {
  nombre: "María",
  edad: 30
};

// Arrays tipados
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Juan", "María"];
let numeros2: Array<number> = [1, 2, 3]; // Forma alternativa

// Tuplas
let tupla: [string, number] = ["Juan", 25];
let coordenadas: [number, number, number] = [10, 20, 30];
```

**Ejercicios:**

1. Crea una interface `Producto` con propiedades: `id`, `nombre`, `precio`, `disponible` (opcional)
2. Declara un array de productos tipado correctamente
3. Crea una tupla que represente un punto en 2D: `[number, number]`
4. Implementa una función que reciba un array de números y retorne la suma
5. Crea un objeto con tipado inline que represente un libro con título, autor y año

---

// Declaración merging
interface Usuario {
  telefono?: string; // Se fusiona con la declaración anterior
}

const usuario: Usuario = {
  id: 1,
  nombre: "Juan",
  email: "juan@example.com"
  // activo y telefono son opcionales
};
```

#### **Type Alias**
**Definición:** Crea un alias para un tipo. Puede representar tipos primitivos, uniones, intersecciones y otros tipos complejos. No permite declaración merging.

**Ejemplo:**
```typescript
// Alias simple
type ID = string | number;

// Union type
type Estado = "activo" | "inactivo" | "pendiente";

// Intersection type
type UsuarioCompleto = Usuario & { direccion: string };

// Función type
type Operacion = (a: number, b: number) => number;
```

#### **Diferencia entre Interface y Type**

| Característica | Interface | Type |
|---------------|-----------|------|
| **Extensión** | `extends` | `&` (intersection) |
| **Unión** | No soporta | `\|` (union) |
| **Merging** | ✅ Sí | ❌ No |
| **Tipos primitivos** | ❌ No | ✅ Sí |
| **Uso recomendado** | Objetos, clases | Uniones, tipos complejos |

---

### 🔄 Genéricos (Generics)

#### **Genérico**
**Definición:** Permite crear componentes reutilizables que funcionan con múltiples tipos en lugar de un solo tipo. Se denotan con `<T>` o cualquier nombre entre `<>`.

**Ejemplo:**
```typescript
// Función genérica
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array[0];
}

const numero = obtenerPrimero([1, 2, 3]);        // T es number
const texto = obtenerPrimero(["a", "b", "c"]);    // T es string
const usuario = obtenerPrimero([{id: 1}]);       // T es {id: number}

// Clase genérica
class Contenedor<T> {
  private items: T[] = [];
  
  agregar(item: T): void {
    this.items.push(item);
  }
  
  obtener(index: number): T | undefined {
    return this.items[index];
  }
}
```

#### **Constraints (Restricciones)**
**Definición:** Limitan los tipos que pueden usarse con un genérico, especificando que el tipo debe cumplir ciertas condiciones.

**Ejemplo:**
```typescript
// Constraint: T debe tener una propiedad length
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

obtenerLongitud("hola");      // ✅ string tiene length
obtenerLongitud([1, 2, 3]);   // ✅ array tiene length
obtenerLongitud(42);          // ❌ number no tiene length
```

---

### 🔗 Union e Intersection Types

#### **Union Type (`|`)**
**Definición:** Permite que un valor sea uno de varios tipos. Se lee como "o" (OR).

**Ejemplo:**
```typescript
type ID = string | number;

function procesarID(id: ID): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toString());
  }
}

procesarID("abc123");  // ✅
procesarID(123);       // ✅
```

#### **Intersection Type (`&`)**
**Definición:** Combina múltiples tipos en uno solo. El valor debe cumplir con todos los tipos combinados. Se lee como "y" (AND).

**Ejemplo:**
```typescript
interface Nombre {
  nombre: string;
}

interface Edad {
  edad: number;
}

type Persona = Nombre & Edad;

const persona: Persona = {
  nombre: "Juan",
  edad: 25
  // Debe tener ambas propiedades
};
```

---

### 🛡️ Type Guards y Narrowing

#### **Type Guard**
**Definición:** Función que verifica el tipo en tiempo de ejecución y permite a TypeScript reducir (narrow) el tipo dentro de un bloque de código.

**Ejemplo:**
```typescript
// Type guard personalizado
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function procesar(valor: unknown): void {
  if (esString(valor)) {
    // TypeScript sabe que valor es string aquí
    console.log(valor.toUpperCase());
  } else {
    // TypeScript sabe que valor NO es string
    console.log("No es string");
  }
}
```

#### **Narrowing (Reducción de Tipos)**
**Definición:** Proceso por el cual TypeScript reduce el tipo de una variable basándose en verificaciones de tipo.

**Ejemplo:**
```typescript
function ejemplo(valor: string | number) {
  if (typeof valor === "string") {
    // Narrowing: TypeScript sabe que valor es string
    console.log(valor.length);
  } else {
    // Narrowing: TypeScript sabe que valor es number
    console.log(valor.toFixed(2));
  }
}
```

#### **Discriminated Union**
**Definición:** Patrón donde un tipo union tiene una propiedad común (discriminador) que identifica cada variante.

**Ejemplo:**
```typescript
type ResultadoExitoso = {
  tipo: "exito";
  datos: string[];
};

type ResultadoError = {
  tipo: "error";
  mensaje: string;
};

type Resultado = ResultadoExitoso | ResultadoError;

function manejarResultado(resultado: Resultado): void {
  if (resultado.tipo === "exito") {
    // TypeScript sabe que es ResultadoExitoso
    console.log(resultado.datos);
  } else {
    // TypeScript sabe que es ResultadoError
    console.log(resultado.mensaje);
  }
}
```

---

### 🛠️ Utility Types

#### **Partial<T>**
**Definición:** Hace todas las propiedades de un tipo opcionales.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

type UsuarioParcial = Partial<Usuario>;
// Equivale a:
// {
//   id?: number;
//   nombre?: string;
//   email?: string;
// }

function actualizarUsuario(id: number, datos: UsuarioParcial): void {
  // Puede recibir solo algunas propiedades
}
```

#### **Required<T>**
**Definición:** Hace todas las propiedades de un tipo requeridas (incluso las que eran opcionales).

**Ejemplo:**
```typescript
interface Config {
  host?: string;
  port?: number;
}

type ConfigRequerida = Required<Config>;
// Todas las propiedades son obligatorias
```

#### **Readonly<T>**
**Definición:** Hace todas las propiedades de un tipo de solo lectura.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
}

type UsuarioSoloLectura = Readonly<Usuario>;

const usuario: UsuarioSoloLectura = {
  id: 1,
  nombre: "Juan"
};

// usuario.nombre = "Pedro"; // ❌ Error: propiedad readonly
```

#### **Pick<T, K>**
**Definición:** Selecciona propiedades específicas de un tipo.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

type UsuarioPublico = Pick<Usuario, "id" | "nombre" | "email">;
// Solo incluye id, nombre y email (sin password)
```

#### **Omit<T, K>**
**Definición:** Excluye propiedades específicas de un tipo.

**Ejemplo:**
```typescript
type UsuarioSinPassword = Omit<Usuario, "password">;
// Incluye todas las propiedades excepto password
```

#### **Record<K, T>**
**Definición:** Crea un tipo objeto con claves de tipo K y valores de tipo T.

**Ejemplo:**
```typescript
type UsuariosPorID = Record<number, Usuario>;
// Equivale a: { [key: number]: Usuario }

const usuarios: UsuariosPorID = {
  1: { id: 1, nombre: "Juan" },
  2: { id: 2, nombre: "María" }
};
```

---

### 🎭 Conditional Types

#### **Conditional Type**
**Definición:** Tipo que depende de una condición. Usa la sintaxis `T extends U ? X : Y` (similar a un operador ternario).

**Ejemplo:**
```typescript
type EsArray<T> = T extends Array<any> ? true : false;

type Test1 = EsArray<string[]>;  // true
type Test2 = EsArray<string>;     // false

// Extraer tipo de array
type ExtraerTipoArray<T> = T extends Array<infer U> ? U : never;

type TipoExtraido = ExtraerTipoArray<string[]>;  // string
type TipoExtraido2 = ExtraerTipoArray<number[]>; // number
```

#### **`infer` Keyword**
**Definición:** Permite inferir tipos dentro de conditional types. Se usa para extraer tipos de estructuras complejas.

**Ejemplo:**
```typescript
// Extraer tipo de retorno de función
type RetornoDeFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

type Retorno = RetornoDeFuncion<() => string>; // string

// Extraer tipo de Promise
type TipoPromise<T> = T extends Promise<infer U> ? U : never;

type Tipo = TipoPromise<Promise<number>>; // number
```

---

### 📝 Template Literal Types

#### **Template Literal Type**
**Definición:** Permite crear tipos basados en strings usando template literals. Útil para crear tipos de strings con patrones específicos.

**Ejemplo:**
```typescript
// String literal types
type Evento = "click" | "scroll" | "mousemove";

// Template literal type
type EventoHandler = `on${Capitalize<Evento>}`;
// "onClick" | "onScroll" | "onMousemove"

// Pattern matching
type RutaAPI = `/api/${string}`;

function navegar(ruta: RutaAPI): void {
  // ...
}

navegar("/api/products");  // ✅
navegar("/api/users/123"); // ✅
navegar("/products");      // ❌ Error
```

---

### 🎨 Decoradores

#### **Decorador**
**Definición:** Función especial que modifica clases, métodos, propiedades o parámetros. Se denotan con `@` y se ejecutan en tiempo de ejecución.

**Ejemplo:**
```typescript
// Decorador de método
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando ${propertyKey} con:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
  
  return descriptor;
}

class Calculadora {
  @Log
  sumar(a: number, b: number): number {
    return a + b;
  }
}
```

---

### 🏛️ Clases y POO

#### **Clase**
**Definición:** Plantilla para crear objetos. Define propiedades y métodos que los objetos instanciados tendrán.

**Ejemplo:**
```typescript
class Persona {
  // Propiedades públicas (por defecto)
  nombre: string;
  
  // Propiedades privadas
  private edad: number;
  
  // Propiedades protegidas
  protected email: string;
  
  // Propiedades readonly
  readonly id: string;
  
  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.id = Math.random().toString(36);
  }
  
  // Método público
  presentarse(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años`;
  }
}
```

#### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra clase.

**Ejemplo:**
```typescript
class Animal {
  constructor(public nombre: string) {}
  
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau guau");
  }
  
  correr(): void {
    console.log(`${this.nombre} está corriendo`);
  }
}
```

#### **Polimorfismo**
**Definición:** Capacidad de objetos de diferentes clases de responder al mismo mensaje de manera diferente.

**Ejemplo:**
```typescript
class Circulo {
  calcularArea(radio: number): number {
    return Math.PI * radio * radio;
  }
}

class Rectangulo {
  calcularArea(ancho: number, alto: number): number {
    return ancho * alto;
  }
}

// Ambas clases tienen calcularArea pero con implementaciones diferentes
```

#### **Encapsulamiento**
**Definición:** Ocultar detalles internos de implementación y exponer solo lo necesario mediante modificadores de acceso.

**Ejemplo:**
```typescript
class Banco {
  private saldo: number = 0;
  
  depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    }
  }
  
  obtenerSaldo(): number {
    return this.saldo; // Acceso controlado
  }
  
  // saldo no es accesible directamente desde fuera
}
```

---

### 🌐 APIs y REST

#### **API (Application Programming Interface)**
**Definición:** Conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. Define cómo solicitar y recibir datos.

**Ejemplo:**
```typescript
// Cliente API tipado
class APICliente {
  async obtener<T>(url: string): Promise<T> {
    const respuesta = await fetch(url);
    return await respuesta.json();
  }
  
  async crear<T>(url: string, datos: T): Promise<T> {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos)
    });
    return await respuesta.json();
  }
}
```

#### **REST (Representational State Transfer)**
**Definición:** Estilo arquitectónico para diseñar servicios web. Usa métodos HTTP estándar (GET, POST, PUT, DELETE) para operaciones CRUD.

**Ejemplo:**
```typescript
// Endpoints REST tipados
interface Endpoints {
  GET: "/api/usuarios";
  POST: "/api/usuarios";
  PUT: "/api/usuarios/:id";
  DELETE: "/api/usuarios/:id";
}
```

---

### 🗄️ ORM (Object-Relational Mapping)

#### **ORM**
**Definición:** Técnica que mapea objetos de programación orientada a objetos a tablas de bases de datos relacionales. Permite trabajar con BD usando objetos en lugar de SQL directo.

**Ejemplo con TypeORM:**
```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  nombre!: string;
  
  @Column()
  email!: string;
}

// Uso sin escribir SQL
const usuario = await usuarioRepository.findOne({ where: { id: 1 } });
```

**Ejemplo con Prisma:**
```prisma
// schema.prisma
model Usuario {
  id    Int    @id @default(autoincrement())
  nombre String
  email  String @unique
}
```

```typescript
// Código generado automáticamente con tipos
const usuario = await prisma.usuario.findUnique({
  where: { id: 1 }
});
```

---

### 🏗️ Principios SOLID

#### **Single Responsibility Principle (SRP)**
**Definición:** Una clase debe tener una sola razón para cambiar. Cada clase debe tener una única responsabilidad.

**Ejemplo:**
```typescript
// ❌ Mal: múltiples responsabilidades
class Usuario {
  guardar() { /* ... */ }
  enviarEmail() { /* ... */ }
  generarReporte() { /* ... */ }
}

// ✅ Bien: responsabilidades separadas
class Usuario { /* Solo datos */ }
class UsuarioRepository { guardar() { /* ... */ } }
class EmailService { enviarEmail() { /* ... */ } }
class ReporteService { generarReporte() { /* ... */ } }
```

#### **Open/Closed Principle (OCP)**
**Definición:** Las entidades deben estar abiertas para extensión pero cerradas para modificación.

**Ejemplo:**
```typescript
// Abierto para extensión, cerrado para modificación
interface Descuento {
  calcular(precio: number): number;
}

class DescuentoEstudiante implements Descuento {
  calcular(precio: number): number {
    return precio * 0.9;
  }
}

class DescuentoVIP implements Descuento {
  calcular(precio: number): number {
    return precio * 0.8;
  }
}
```

#### **Liskov Substitution Principle (LSP)**
**Definición:** Los objetos de una superclase deben ser reemplazables por objetos de sus subclases sin romper la aplicación.

**Ejemplo:**
```typescript
class Animal {
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau");
  }
}

class Gato extends Animal {
  hacerSonido(): void {
    console.log("Miau");
  }
}

// Cualquier subclase puede reemplazar a Animal
function hacerSonarAnimal(animal: Animal): void {
  animal.hacerSonido(); // Funciona con cualquier subclase
}
```

#### **Interface Segregation Principle (ISP)**
**Definición:** Los clientes no deben depender de interfaces que no usan. Es mejor tener interfaces específicas que una general.

**Ejemplo:**
```typescript
// ❌ Mal: interfaz muy grande
interface Trabajador {
  trabajar(): void;
  comer(): void;
  dormir(): void;
}

// ✅ Bien: interfaces segregadas
interface Trabajador {
  trabajar(): void;
}

interface SerVivo {
  comer(): void;
  dormir(): void;
}

class Empleado implements Trabajador, SerVivo {
  trabajar() { /* ... */ }
  comer() { /* ... */ }
  dormir() { /* ... */ }
}
```

#### **Dependency Inversion Principle (DIP)**
**Definición:** Depender de abstracciones, no de concreciones. Los módulos de alto nivel no deben depender de módulos de bajo nivel.

**Ejemplo:**
```typescript
// Depender de interfaz, no de implementación concreta
interface RepositorioUsuario {
  encontrarPorId(id: number): Promise<Usuario>;
}

class UsuarioService {
  constructor(private repositorio: RepositorioUsuario) {}
  // Puede usar cualquier implementación de RepositorioUsuario
}

class TypeORMUsuarioRepository implements RepositorioUsuario {
  // Implementación con TypeORM
}

class PrismaUsuarioRepository implements RepositorioUsuario {
  // Implementación con Prisma
}
```

---

### 📦 Módulos

#### **Módulo ES6**
**Definición:** Sistema de módulos que permite exportar e importar código entre archivos. TypeScript soporta completamente los módulos ES6.

**Ejemplo:**
```typescript
// utils.ts
export function sumar(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

// main.ts
import { sumar, PI } from "./utils";

const resultado = sumar(5, 3);
```

#### **Namespace**
**Definición:** Forma de organizar código en TypeScript. Agrupa código relacionado bajo un nombre.

**Ejemplo:**
```typescript
namespace Matematicas {
  export function sumar(a: number, b: number): number {
    return a + b;
  }
  
  export function restar(a: number, b: number): number {
    return a - b;
  }
}

// Uso
const resultado = Matematicas.sumar(5, 3);
```

---

### 🔍 Type Inference (Inferencia de Tipos)

#### **Inferencia de Tipos**
**Definición:** Capacidad de TypeScript de determinar automáticamente el tipo de una variable basándose en su valor inicial.

**Ejemplo:**
```typescript
// TypeScript infiere que es string
let nombre = "Juan";

// TypeScript infiere que es number[]
let numeros = [1, 2, 3];

// TypeScript infiere el tipo de retorno
function sumar(a: number, b: number) {
  return a + b; // TypeScript sabe que retorna number
}
```

---

### 🎯 Type Assertion (Aserción de Tipos)

#### **Type Assertion**
**Definición:** Forma de decirle a TypeScript que trate un valor como un tipo específico. No cambia el valor en tiempo de ejecución, solo el tipo en tiempo de compilación.

**Ejemplo:**
```typescript
// Sintaxis con 'as'
let valor: unknown = "hola";
let longitud = (valor as string).length;

// Sintaxis con '<>'
let longitud2 = (<string>valor).length;

// Útil con DOM
const elemento = document.getElementById("miElemento") as HTMLInputElement;
elemento.value = "texto"; // TypeScript sabe que es HTMLInputElement
```

---

### 🔐 Modificadores de Acceso

#### **Public (Público)**
**Definición:** Propiedad o método accesible desde cualquier lugar. Es el modificador por defecto.

**Ejemplo:**
```typescript
class Usuario {
  public nombre: string; // Explícitamente público
  edad: number;           // Público por defecto
}
```

#### **Private (Privado)**
**Definición:** Propiedad o método accesible solo dentro de la misma clase.

**Ejemplo:**
```typescript
class Usuario {
  private saldo: number = 0;
  
  depositar(cantidad: number): void {
    this.saldo += cantidad; // ✅ Accesible dentro de la clase
  }
}

const usuario = new Usuario();
// usuario.saldo; // ❌ Error: propiedad privada
```

#### **Protected (Protegido)**
**Definición:** Propiedad o método accesible dentro de la clase y sus subclases.

**Ejemplo:**
```typescript
class Animal {
  protected nombre: string;
}

class Perro extends Animal {
  mostrarNombre(): void {
    console.log(this.nombre); // ✅ Accesible en subclase
  }
}
```

---

### 📋 Enums

#### **Enum**
**Definición:** Tipo que permite definir un conjunto de constantes con nombre. Útil para valores que tienen un conjunto limitado de opciones.

**Ejemplo:**
```typescript
// Enum numérico
enum Estado {
  Pendiente,    // 0
  Activo,       // 1
  Inactivo      // 2
}

// Enum string
enum Color {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul"
}

// Uso
const estado: Estado = Estado.Activo;
const color: Color = Color.Rojo;
```

---

### 🎪 Tuplas

#### **Tupla**
**Definición:** Array con un número fijo de elementos donde cada elemento tiene un tipo específico.

**Ejemplo:**
```typescript
// Tupla simple
let coordenadas: [number, number] = [40.4168, -3.7038];

// Tupla con tipos diferentes
let usuario: [string, number, boolean] = ["Juan", 25, true];

// Tupla con elementos opcionales
let datos: [string, number?] = ["nombre"]; // número es opcional

// Tupla con rest elements
let numeros: [string, ...number[]] = ["suma", 1, 2, 3, 4];
```

---

### 🔄 Async/Await

#### **Promise**
**Definición:** Objeto que representa el resultado eventual de una operación asíncrona. Puede estar pendiente, resuelta o rechazada.

**Ejemplo:**
```typescript
function obtenerUsuario(id: number): Promise<Usuario> {
  return fetch(`/api/usuarios/${id}`)
    .then(respuesta => respuesta.json());
}
```

#### **Async/Await**
**Definición:** Sintaxis para trabajar con Promises de forma más legible. `async` marca una función como asíncrona, `await` espera la resolución de una Promise.

**Ejemplo:**
```typescript
async function obtenerUsuario(id: number): Promise<Usuario> {
  const respuesta = await fetch(`/api/usuarios/${id}`);
  const usuario = await respuesta.json();
  return usuario;
}

// Uso
async function ejemplo() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

## 🚀 Inicio Rápido

<div align="center">

![Quick Start](https://img.shields.io/badge/Inicio-Rápido-4CAF50?style=for-the-badge)
![Setup](https://img.shields.io/badge/Setup-Guide-2196F3?style=for-the-badge)

</div>

### Instalación y Configuración Inicial

```bash
# 1. Verificar Node.js instalado (versión 18 o superior)
node --version

# 2. Instalar TypeScript globalmente (opcional)
npm install -g typescript

# 3. Inicializar proyecto
npm init -y

# 4. Instalar dependencias de desarrollo
npm install -D typescript @types/node ts-node

# 5. Inicializar configuración de TypeScript
tsc --init

# 6. Verificar instalación
tsc --version
```

### Compilar y Ejecutar TypeScript

```bash
# Compilar archivos TypeScript
tsc

# Compilar y ejecutar directamente (con ts-node)
npx ts-node src/archivo.ts

# Modo watch (compila automáticamente al guardar)
tsc --watch
```

---

## 📋 Requisitos Mínimos

### Conocimientos Previos Requeridos

| Conocimiento | Nivel Requerido | Descripción |
|-------------|----------------|-------------|
| **JavaScript** | Intermedio | ES6+, funciones, objetos, arrays, async/await |
| **Node.js** | Básico | Instalación, npm, módulos CommonJS/ES6 |
| **HTML/CSS** | Básico | Estructura web básica (para ejemplos frontend) |
| **Git** | Básico | Commits, branches, repositorios |

### Herramientas Necesarias

| Herramienta | Versión Mínima | Badge | Descripción |
|-----------|---------------|-------|-------------|
| **Node.js** | 18.x LTS | ![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white) | Entorno de ejecución JavaScript |
| **npm** | 9.x | ![npm](https://img.shields.io/badge/npm-9.x-CB3837?logo=npm&logoColor=white) | Gestor de paquetes |
| **TypeScript** | 5.0+ | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white) | Compilador TypeScript |
| **VS Code** | - | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white) | Editor de código recomendado |
| **Git** | 2.x | ![Git](https://img.shields.io/badge/Git-2.x-F05032?logo=git&logoColor=white) | Control de versiones |

### Extensiones Recomendadas para VS Code

- ![TypeScript](https://img.shields.io/badge/TypeScript-ESLint-3178C6?logo=typescript&logoColor=white) **TypeScript and JavaScript Language Features** (incluida por defecto)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) **ESLint** - Linting de código
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black) **Prettier** - Formateo automático
- ![GitLens](https://img.shields.io/badge/GitLens-181717?logo=git&logoColor=white) **GitLens** - Visualización avanzada de Git

---

## 🗺️ Roadmap del Curso

<div align="center">

![Roadmap](https://img.shields.io/badge/Roadmap-Completo-FF6F00?style=for-the-badge)
![12 Weeks](https://img.shields.io/badge/Duración-12%20Semanas-4CAF50?style=for-the-badge)

</div>

### Fase 1: Preparación y Fundamentos (Semana 1-2)

![Week 1-2](https://img.shields.io/badge/Semana-1--2-2196F3?style=flat-square)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Crear repositorio Git
- [ ] Inicializar proyecto TypeScript
- [ ] Configurar `tsconfig.json`
- [ ] Crear estructura de carpetas básica

**📁 Estructura de Archivos:**
```bash
# Crear estructura de carpetas
mkdir -p src/01-fundamentos/tipos-basicos
mkdir -p src/02-intermedio
mkdir -p src/03-avanzado
mkdir -p src/04-apis
mkdir -p src/05-orms
mkdir -p src/06-proyectos
mkdir -p src/07-principios-solid

# Crear archivos iniciales
touch src/01-fundamentos/tipos-basicos/tipos-basicos.ts
touch src/01-fundamentos/tipos-basicos/ejercicios.ts
touch .gitignore
touch README.md

# Configurar .gitignore
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo "*.log" >> .gitignore
echo ".env" >> .gitignore
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/` (raíz del proyecto)
- ✅ Crear subcarpetas `01-fundamentos/`, `02-intermedio/`, etc.
- ✅ Crear archivo `tsconfig.json` (se genera con `tsc --init`)
- ✅ Crear archivo `.gitignore` en la raíz
- ✅ Modificar `tsconfig.json`: establecer `rootDir: "./src"` y `outDir: "./dist"`

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto TypeScript"`

#### Paso 2: Tipos Básicos
- [ ] Estudiar tipos primitivos (string, number, boolean)
- [ ] Practicar con tipos `null` y `undefined`
- [ ] Entender `any`, `unknown` y `never`
- [ ] Crear ejercicios prácticos

**📚 Conceptos Clave:**

##### **Tipo (`Type`)**
**Definición:** Un tipo en TypeScript es una forma de describir la forma y el comportamiento de un valor. Define qué operaciones se pueden realizar con ese valor y qué datos puede contener.

**Ejemplo:**
```typescript
// Tipos primitivos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// TypeScript infiere el tipo automáticamente
let ciudad = "Madrid"; // TypeScript sabe que es string
```

##### **Tipo `any`**
**Definición:** Permite cualquier tipo de valor y desactiva la verificación de tipos. Útil para migración gradual desde JavaScript, pero debe evitarse en código nuevo.

**Ejemplo:**
```typescript
let valor: any = "hola";
valor = 42;        // ✅ Permitido
valor = true;      // ✅ Permitido
valor.foo.bar;     // ⚠️ No hay verificación de tipos
```

##### **Tipo `unknown`**
**Definición:** Similar a `any`, pero más seguro. Requiere verificación de tipo antes de usar el valor. Es la alternativa segura a `any`.

**Ejemplo:**
```typescript
let valor: unknown = "hola";

// ❌ Error: no se puede usar directamente
// console.log(valor.toUpperCase());

// ✅ Correcto: verificar tipo primero
if (typeof valor === "string") {
  console.log(valor.toUpperCase()); // Ahora TypeScript sabe que es string
}
```

##### **Tipo `never`**
**Definición:** Representa valores que nunca ocurren. Se usa para funciones que nunca retornan o para tipos que representan valores imposibles.

**Ejemplo:**
```typescript
// Función que nunca retorna
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Tipo que nunca puede ocurrir
type Nunca = string & number; // Imposible, siempre será never
```

##### **Tipo `void`**
**Definición:** Representa la ausencia de un valor de retorno. Se usa principalmente para funciones que no retornan nada.

**Ejemplo:**
```typescript
function mostrarMensaje(mensaje: string): void {
  console.log(mensaje);
  // No retorna nada explícitamente
}
```

**📁 Estructura de Archivos:**
```bash
# Crear archivos en la carpeta de tipos básicos
touch src/01-fundamentos/tipos-basicos/tipos-primitivos.ts
touch src/01-fundamentos/tipos-basicos/tipos-especiales.ts
touch src/01-fundamentos/tipos-basicos/ejercicios.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear archivo `src/01-fundamentos/tipos-basicos/tipos-primitivos.ts`
- ✅ Crear archivo `src/01-fundamentos/tipos-basicos/tipos-especiales.ts`
- ✅ Crear archivo `src/01-fundamentos/tipos-basicos/ejercicios.ts`
- ✅ Modificar `src/01-fundamentos/tipos-basicos/tipos-basicos.ts` (si ya existe)

**📝 Ejercicios:**
1. Crear variables tipadas para: nombre (string), edad (number), activo (boolean)
2. Crear función que reciba `unknown` y valide si es string antes de usarlo
3. Crear función que nunca retorne usando tipo `never`
4. Convertir código JavaScript existente a TypeScript con tipos explícitos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos básicos de TypeScript"`

#### Paso 3: Objetos y Arrays
- [ ] Tipar objetos con interfaces
- [ ] Tipar arrays y tuplas
- [ ] Entender tipos literales
- [ ] Practicar con objetos anidados

**📚 Conceptos Clave:**

##### **Tupla**
**Definición:** Array con un número fijo de elementos donde cada elemento tiene un tipo específico.

**Ejemplo:**
```typescript
// Tupla simple
let coordenadas: [number, number] = [40.4168, -3.7038];

// Tupla con tipos diferentes
let usuario: [string, number, boolean] = ["Juan", 25, true];

// Tupla con elementos opcionales
let datos: [string, number?] = ["nombre"]; // número es opcional

// Tupla con rest elements
let numeros: [string, ...number[]] = ["suma", 1, 2, 3, 4];
```

##### **Enum**
**Definición:** Tipo que permite definir un conjunto de constantes con nombre. Útil para valores que tienen un conjunto limitado de opciones.

**Ejemplo:**
```typescript
// Enum numérico
enum Estado {
  Pendiente,    // 0
  Activo,       // 1
  Inactivo      // 2
}

// Enum string
enum Color {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul"
}

// Uso
const estado: Estado = Estado.Activo;
const color: Color = Color.Rojo;
```

**📁 Estructura de Archivos:**
```bash
# Crear archivos para objetos y arrays
touch src/01-fundamentos/02-objetos.ts
touch src/01-fundamentos/03-arrays.ts
touch src/01-fundamentos/interfaces.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear archivo `src/01-fundamentos/02-objetos.ts`
- ✅ Crear archivo `src/01-fundamentos/03-arrays.ts`
- ✅ Crear archivo `src/01-fundamentos/interfaces.ts` (o usar el existente `05-interfaces.ts`)
- ✅ Renombrar `src/01-fundamentos/05-interfaces.ts` si es necesario para mantener orden

**📝 Ejercicios:**
1. Crear interfaz `Usuario` con propiedades: id, nombre, email, edad
2. Crear array tipado de usuarios y función para filtrar por edad
3. Crear tupla `[string, number]` para coordenadas (latitud, longitud)
4. Crear objeto anidado con interfaz `Direccion` dentro de `Usuario`
5. Implementar función que reciba array de productos y retorne el más caro

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de objetos y arrays"`

#### Paso 4: Funciones
- [ ] Tipar parámetros y valores de retorno
- [ ] Funciones opcionales y valores por defecto
- [ ] Funciones de flecha tipadas
- [ ] Overloads de funciones

**📁 Estructura de Archivos:**
```bash
# Crear archivo para funciones
touch src/01-fundamentos/04-funciones.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear archivo `src/01-fundamentos/04-funciones.ts`
- ✅ Modificar archivo existente si ya tienes `src/01-fundamentos/04-funciones.ts`

**📝 Ejercicios:**
1. Crear función `calcularTotal` que reciba precio y cantidad, retorne number
2. Crear función `saludar` con parámetro opcional `apellido`
3. Crear función `multiplicar` con valor por defecto `b = 1`
4. Crear función con overloads: `procesar(string)` y `procesar(number)` con diferentes retornos
5. Convertir función tradicional a arrow function manteniendo tipos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipado de funciones"`

### Fase 2: Conceptos Intermedios (Semana 3-4)

#### Paso 5: Interfaces y Types
- [ ] Crear interfaces personalizadas
- [ ] Diferencias entre `interface` y `type`
- [ ] Extensión de interfaces
- [ ] Tipos indexados y mapeados básicos

**📚 Conceptos Clave:**

##### **Interface**
**Definición:** Una interfaz define la estructura de un objeto, especificando qué propiedades debe tener y sus tipos. Permite declaración merging (fusionar múltiples declaraciones).

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo?: boolean; // Propiedad opcional
}

// Declaración merging
interface Usuario {
  telefono?: string; // Se fusiona con la declaración anterior
}

const usuario: Usuario = {
  id: 1,
  nombre: "Juan",
  email: "juan@example.com"
  // activo y telefono son opcionales
};
```

##### **Type Alias**
**Definición:** Crea un alias para un tipo. Puede representar tipos primitivos, uniones, intersecciones y otros tipos complejos. No permite declaración merging.

**Ejemplo:**
```typescript
// Alias simple
type ID = string | number;

// Union type
type Estado = "activo" | "inactivo" | "pendiente";

// Intersection type
type UsuarioCompleto = Usuario & { direccion: string };

// Función type
type Operacion = (a: number, b: number) => number;
```

##### **Diferencia entre Interface y Type**

| Característica | Interface | Type |
|---------------|-----------|------|
| **Extensión** | `extends` | `&` (intersection) |
| **Unión** | No soporta | `\|` (union) |
| **Merging** | ✅ Sí | ❌ No |
| **Tipos primitivos** | ❌ No | ✅ Sí |
| **Uso recomendado** | Objetos, clases | Uniones, tipos complejos |

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para interfaces y types
mkdir -p src/01-fundamentos/interfaces-types
touch src/01-fundamentos/interfaces-types/interfaces.ts
touch src/01-fundamentos/interfaces-types/types.ts
touch src/01-fundamentos/interfaces-types/comparacion.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/01-fundamentos/interfaces-types/`
- ✅ Crear archivo `src/01-fundamentos/interfaces-types/interfaces.ts`
- ✅ Crear archivo `src/01-fundamentos/interfaces-types/types.ts`
- ✅ Crear archivo `src/01-fundamentos/interfaces-types/comparacion.ts`
- ✅ Modificar `src/01-fundamentos/05-interfaces.ts` si existe (mover contenido o renombrar)

**📝 Ejercicios:**
1. Crear interfaz `Animal` y extenderla con `Perro` y `Gato`
2. Crear type `ID` como union `string | number`
3. Crear interfaz `Producto` y type `ProductoID` usando `Pick<Producto, 'id'>`
4. Crear interfaz con propiedades indexadas `[key: string]: number`
5. Comparar implementación con `interface` vs `type` en el mismo caso de uso

> 💡 **Sugerencia de Commit**: `git commit -m "feat: interfaces y tipos personalizados"`

#### Paso 6: Clases y POO
- [ ] Crear clases tipadas
- [ ] Modificadores de acceso (public, private, protected)
- [ ] Herencia y polimorfismo
- [ ] Clases abstractas e interfaces

**📚 Conceptos Clave:**

##### **Clase**
**Definición:** Plantilla para crear objetos. Define propiedades y métodos que los objetos instanciados tendrán.

**Ejemplo:**
```typescript
class Persona {
  // Propiedades públicas (por defecto)
  nombre: string;
  
  // Propiedades privadas
  private edad: number;
  
  // Propiedades protegidas
  protected email: string;
  
  // Propiedades readonly
  readonly id: string;
  
  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.id = Math.random().toString(36);
  }
  
  // Método público
  presentarse(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años`;
  }
}
```

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra clase.

**Ejemplo:**
```typescript
class Animal {
  constructor(public nombre: string) {}
  
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau guau");
  }
  
  correr(): void {
    console.log(`${this.nombre} está corriendo`);
  }
}
```

##### **Polimorfismo**
**Definición:** Capacidad de objetos de diferentes clases de responder al mismo mensaje de manera diferente.

**Ejemplo:**
```typescript
class Circulo {
  calcularArea(radio: number): number {
    return Math.PI * radio * radio;
  }
}

class Rectangulo {
  calcularArea(ancho: number, alto: number): number {
    return ancho * alto;
  }
}

// Ambas clases tienen calcularArea pero con implementaciones diferentes
```

##### **Encapsulamiento**
**Definición:** Ocultar detalles internos de implementación y exponer solo lo necesario mediante modificadores de acceso.

**Ejemplo:**
```typescript
class Banco {
  private saldo: number = 0;
  
  depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    }
  }
  
  obtenerSaldo(): number {
    return this.saldo; // Acceso controlado
  }
  
  // saldo no es accesible directamente desde fuera
}
```

##### **Modificadores de Acceso**

- **Public (Público):** Propiedad o método accesible desde cualquier lugar. Es el modificador por defecto.
- **Private (Privado):** Propiedad o método accesible solo dentro de la misma clase.
- **Protected (Protegido):** Propiedad o método accesible dentro de la clase y sus subclases.

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para clases
mkdir -p src/01-fundamentos/clases
touch src/01-fundamentos/clases/clases-basicas.ts
touch src/01-fundamentos/clases/herencia.ts
touch src/01-fundamentos/clases/abstractas.ts
touch src/01-fundamentos/clases/ejercicios.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/01-fundamentos/clases/`
- ✅ Crear archivo `src/01-fundamentos/clases/clases-basicas.ts`
- ✅ Crear archivo `src/01-fundamentos/clases/herencia.ts`
- ✅ Crear archivo `src/01-fundamentos/clases/abstractas.ts`
- ✅ Crear archivo `src/01-fundamentos/clases/ejercicios.ts`

**📝 Ejercicios:**
1. Crear clase `Vehiculo` con propiedades públicas y métodos privados
2. Crear clase `Coche` que extienda `Vehiculo` con método `acelerar()`
3. Crear clase abstracta `Forma` con método abstracto `calcularArea()`
4. Implementar `Circulo` y `Rectangulo` heredando de `Forma`
5. Crear interfaz `Volador` e implementarla en clase `Ave`
6. Crear clase `Banco` con método privado para validar saldo

> 💡 **Sugerencia de Commit**: `git commit -m "feat: programación orientada a objetos"`

#### Paso 7: Genéricos (Generics)
- [ ] Introducción a genéricos
- [ ] Constraints y tipos genéricos
- [ ] Genéricos en funciones y clases
- [ ] Utility types básicos (Partial, Pick, Omit)

**📚 Conceptos Clave:**

##### **Genérico**
**Definición:** Permite crear componentes reutilizables que funcionan con múltiples tipos en lugar de un solo tipo. Se denotan con `<T>` o cualquier nombre entre `<>`.

**Ejemplo:**
```typescript
// Función genérica
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array[0];
}

const numero = obtenerPrimero([1, 2, 3]);        // T es number
const texto = obtenerPrimero(["a", "b", "c"]);    // T es string
const usuario = obtenerPrimero([{id: 1}]);       // T es {id: number}

// Clase genérica
class Contenedor<T> {
  private items: T[] = [];
  
  agregar(item: T): void {
    this.items.push(item);
  }
  
  obtener(index: number): T | undefined {
    return this.items[index];
  }
}
```

##### **Constraints (Restricciones)**
**Definición:** Limitan los tipos que pueden usarse con un genérico, especificando que el tipo debe cumplir ciertas condiciones.

**Ejemplo:**
```typescript
// Constraint: T debe tener una propiedad length
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

obtenerLongitud("hola");      // ✅ string tiene length
obtenerLongitud([1, 2, 3]);   // ✅ array tiene length
obtenerLongitud(42);          // ❌ number no tiene length
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para genéricos
mkdir -p src/02-intermedio/genericos
touch src/02-intermedio/genericos/genericos-funciones.ts
touch src/02-intermedio/genericos/genericos-clases.ts
touch src/02-intermedio/genericos/constraints.ts
touch src/02-intermedio/genericos/utility-types.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/02-intermedio/genericos/`
- ✅ Crear archivo `src/02-intermedio/genericos/genericos-funciones.ts`
- ✅ Crear archivo `src/02-intermedio/genericos/genericos-clases.ts`
- ✅ Crear archivo `src/02-intermedio/genericos/constraints.ts`
- ✅ Crear archivo `src/02-intermedio/genericos/utility-types.ts`

**📝 Ejercicios:**
1. Crear función genérica `obtenerPrimero<T>` que retorne el primer elemento de un array
2. Crear clase genérica `Contenedor<T>` con métodos `agregar` y `obtener`
3. Crear función con constraint: `obtenerLongitud<T extends { length: number }>`
4. Crear función `mapear` genérica que transforme array de tipo `T` a tipo `U`
5. Usar `Partial<Usuario>` para crear función de actualización parcial
6. Usar `Pick` y `Omit` para crear tipos derivados de una interfaz base

> 💡 **Sugerencia de Commit**: `git commit -m "feat: genéricos y tipos reutilizables"`

#### Paso 8: Módulos y Namespaces
- [ ] Import/export de módulos ES6
- [ ] Namespaces y organización de código
- [ ] Declaración de módulos externos
- [ ] Path mapping en tsconfig.json

**📚 Conceptos Clave:**

##### **Módulo ES6**
**Definición:** Sistema de módulos que permite exportar e importar código entre archivos. TypeScript soporta completamente los módulos ES6.

**Ejemplo:**
```typescript
// utils.ts
export function sumar(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

// main.ts
import { sumar, PI } from "./utils";

const resultado = sumar(5, 3);
```

##### **Namespace**
**Definición:** Forma de organizar código en TypeScript. Agrupa código relacionado bajo un nombre.

**Ejemplo:**
```typescript
namespace Matematicas {
  export function sumar(a: number, b: number): number {
    return a + b;
  }
  
  export function restar(a: number, b: number): number {
    return a - b;
  }
}

// Uso
const resultado = Matematicas.sumar(5, 3);
```

##### **Type Inference (Inferencia de Tipos)**
**Definición:** Capacidad de TypeScript de determinar automáticamente el tipo de una variable basándose en su valor inicial.

**Ejemplo:**
```typescript
// TypeScript infiere que es string
let nombre = "Juan";

// TypeScript infiere que es number[]
let numeros = [1, 2, 3];

// TypeScript infiere el tipo de retorno
function sumar(a: number, b: number) {
  return a + b; // TypeScript sabe que retorna number
}
```

**📁 Estructura de Archivos:**
```bash
# Crear estructura modular
mkdir -p src/02-intermedio/modulos/utils
mkdir -p src/02-intermedio/modulos/models
mkdir -p src/02-intermedio/modulos/services
mkdir -p src/02-intermedio/modulos/types

# Crear archivos de módulos
touch src/02-intermedio/modulos/utils/matematicas.ts
touch src/02-intermedio/modulos/utils/index.ts
touch src/02-intermedio/modulos/models/usuario.ts
touch src/02-intermedio/modulos/services/usuario-service.ts
touch src/02-intermedio/modulos/types/index.d.ts
touch src/02-intermedio/modulos/namespaces.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/02-intermedio/modulos/` con subcarpetas `utils/`, `models/`, `services/`, `types/`
- ✅ Crear archivo `src/02-intermedio/modulos/utils/matematicas.ts`
- ✅ Crear archivo `src/02-intermedio/modulos/utils/index.ts` (re-export)
- ✅ Crear archivo `src/02-intermedio/modulos/models/usuario.ts`
- ✅ Crear archivo `src/02-intermedio/modulos/services/usuario-service.ts`
- ✅ Crear archivo `src/02-intermedio/modulos/types/index.d.ts` (declaraciones)
- ✅ Crear archivo `src/02-intermedio/modulos/namespaces.ts`
- ✅ Modificar `tsconfig.json`: agregar `paths: { "@/*": ["src/*"] }` y `baseUrl: "."`

**📝 Ejercicios:**
1. Crear módulo `utils.ts` con funciones exportadas e importarlas
2. Crear namespace `Matematicas` con funciones `sumar`, `restar`, `multiplicar`
3. Crear archivo de declaración `.d.ts` para módulo externo sin tipos
4. Configurar path mapping `@/utils/*` en `tsconfig.json`
5. Crear estructura modular: `models/`, `services/`, `utils/` con exports/imports
6. Crear archivo `index.ts` que re-exporte todos los módulos de una carpeta

> 💡 **Sugerencia de Commit**: `git commit -m "feat: organización con módulos y namespaces"`

### Fase 3: Nivel Avanzado (Semana 5-6)

#### Paso 9: Tipos Avanzados
- [ ] Union y Intersection types
- [ ] Type Guards y Narrowing
- [ ] Discriminated Unions
- [ ] Conditional Types básicos

**📚 Conceptos Clave:**

##### **Union Type (`|`)**
**Definición:** Permite que un valor sea uno de varios tipos. Se lee como "o" (OR).

**Ejemplo:**
```typescript
type ID = string | number;

function procesarID(id: ID): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toString());
  }
}

procesarID("abc123");  // ✅
procesarID(123);       // ✅
```

##### **Intersection Type (`&`)**
**Definición:** Combina múltiples tipos en uno solo. El valor debe cumplir con todos los tipos combinados. Se lee como "y" (AND).

**Ejemplo:**
```typescript
interface Nombre {
  nombre: string;
}

interface Edad {
  edad: number;
}

type Persona = Nombre & Edad;

const persona: Persona = {
  nombre: "Juan",
  edad: 25
  // Debe tener ambas propiedades
};
```

##### **Type Guard**
**Definición:** Función que verifica el tipo en tiempo de ejecución y permite a TypeScript reducir (narrow) el tipo dentro de un bloque de código.

**Ejemplo:**
```typescript
// Type guard personalizado
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function procesar(valor: unknown): void {
  if (esString(valor)) {
    // TypeScript sabe que valor es string aquí
    console.log(valor.toUpperCase());
  } else {
    // TypeScript sabe que valor NO es string
    console.log("No es string");
  }
}
```

##### **Narrowing (Reducción de Tipos)**
**Definición:** Proceso por el cual TypeScript reduce el tipo de una variable basándose en verificaciones de tipo.

**Ejemplo:**
```typescript
function ejemplo(valor: string | number) {
  if (typeof valor === "string") {
    // Narrowing: TypeScript sabe que valor es string
    console.log(valor.length);
  } else {
    // Narrowing: TypeScript sabe que valor es number
    console.log(valor.toFixed(2));
  }
}
```

##### **Discriminated Union**
**Definición:** Patrón donde un tipo union tiene una propiedad común (discriminador) que identifica cada variante.

**Ejemplo:**
```typescript
type ResultadoExitoso = {
  tipo: "exito";
  datos: string[];
};

type ResultadoError = {
  tipo: "error";
  mensaje: string;
};

type Resultado = ResultadoExitoso | ResultadoError;

function manejarResultado(resultado: Resultado): void {
  if (resultado.tipo === "exito") {
    // TypeScript sabe que es ResultadoExitoso
    console.log(resultado.datos);
  } else {
    // TypeScript sabe que es ResultadoError
    console.log(resultado.mensaje);
  }
}
```

##### **Conditional Type**
**Definición:** Tipo que depende de una condición. Usa la sintaxis `T extends U ? X : Y` (similar a un operador ternario).

**Ejemplo:**
```typescript
type EsArray<T> = T extends Array<any> ? true : false;

type Test1 = EsArray<string[]>;  // true
type Test2 = EsArray<string>;     // false

// Extraer tipo de array
type ExtraerTipoArray<T> = T extends Array<infer U> ? U : never;

type TipoExtraido = ExtraerTipoArray<string[]>;  // string
type TipoExtraido2 = ExtraerTipoArray<number[]>; // number
```

##### **`infer` Keyword**
**Definición:** Permite inferir tipos dentro de conditional types. Se usa para extraer tipos de estructuras complejas.

**Ejemplo:**
```typescript
// Extraer tipo de retorno de función
type RetornoDeFuncion<T> = T extends (...args: any[]) => infer R ? R : never;

type Retorno = RetornoDeFuncion<() => string>; // string

// Extraer tipo de Promise
type TipoPromise<T> = T extends Promise<infer U> ? U : never;

type Tipo = TipoPromise<Promise<number>>; // number
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para tipos avanzados
mkdir -p src/03-avanzado/tipos-avanzados
touch src/03-avanzado/tipos-avanzados/union-intersection.ts
touch src/03-avanzado/tipos-avanzados/type-guards.ts
touch src/03-avanzado/tipos-avanzados/discriminated-unions.ts
touch src/03-avanzado/tipos-avanzados/conditional-types.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/03-avanzado/tipos-avanzados/`
- ✅ Crear archivo `src/03-avanzado/tipos-avanzados/union-intersection.ts`
- ✅ Crear archivo `src/03-avanzado/tipos-avanzados/type-guards.ts`
- ✅ Crear archivo `src/03-avanzado/tipos-avanzados/discriminated-unions.ts`
- ✅ Crear archivo `src/03-avanzado/tipos-avanzados/conditional-types.ts`

**📝 Ejercicios:**
1. Crear union type `Resultado = Exito | Error` con type guards
2. Crear intersection type `UsuarioCompleto = Usuario & Direccion`
3. Crear discriminated union `Evento` con campo `tipo` y diferentes formas
4. Crear type guard `esString(valor: unknown): valor is string`
5. Crear función que use narrowing para procesar union types
6. Crear conditional type `EsArray<T>` que retorne `true` si T es array

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos avanzados y type guards"`

#### Paso 10: Utility Types
- [ ] Partial, Required, Readonly
- [ ] Pick, Omit, Record
- [ ] Exclude, Extract, NonNullable
- [ ] Crear utility types personalizados

**📚 Conceptos Clave:**

##### **Partial<T>**
**Definición:** Hace todas las propiedades de un tipo opcionales.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

type UsuarioParcial = Partial<Usuario>;
// Equivale a: { id?: number; nombre?: string; email?: string; }

function actualizarUsuario(id: number, datos: UsuarioParcial): void {
  // Puede recibir solo algunas propiedades
}
```

##### **Required<T>**
**Definición:** Hace todas las propiedades de un tipo requeridas (incluso las que eran opcionales).

**Ejemplo:**
```typescript
interface Config {
  host?: string;
  port?: number;
}

type ConfigRequerida = Required<Config>;
// Todas las propiedades son obligatorias
```

##### **Readonly<T>**
**Definición:** Hace todas las propiedades de un tipo de solo lectura.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
}

type UsuarioSoloLectura = Readonly<Usuario>;

const usuario: UsuarioSoloLectura = {
  id: 1,
  nombre: "Juan"
};

// usuario.nombre = "Pedro"; // ❌ Error: propiedad readonly
```

##### **Pick<T, K>**
**Definición:** Selecciona propiedades específicas de un tipo.

**Ejemplo:**
```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

type UsuarioPublico = Pick<Usuario, "id" | "nombre" | "email">;
// Solo incluye id, nombre y email (sin password)
```

##### **Omit<T, K>**
**Definición:** Excluye propiedades específicas de un tipo.

**Ejemplo:**
```typescript
type UsuarioSinPassword = Omit<Usuario, "password">;
// Incluye todas las propiedades excepto password
```

##### **Record<K, T>**
**Definición:** Crea un tipo objeto con claves de tipo K y valores de tipo T.

**Ejemplo:**
```typescript
type UsuariosPorID = Record<number, Usuario>;
// Equivale a: { [key: number]: Usuario }

const usuarios: UsuariosPorID = {
  1: { id: 1, nombre: "Juan" },
  2: { id: 2, nombre: "María" }
};
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para utility types
mkdir -p src/03-avanzado/utility-types
touch src/03-avanzado/utility-types/built-in.ts
touch src/03-avanzado/utility-types/personalizados.ts
touch src/03-avanzado/utility-types/ejercicios.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/03-avanzado/utility-types/`
- ✅ Crear archivo `src/03-avanzado/utility-types/built-in.ts`
- ✅ Crear archivo `src/03-avanzado/utility-types/personalizados.ts`
- ✅ Crear archivo `src/03-avanzado/utility-types/ejercicios.ts`

**📝 Ejercicios:**
1. Usar `Partial<Usuario>` para función de actualización opcional
2. Crear tipo `UsuarioSoloLectura` usando `Readonly<Usuario>`
3. Crear tipo `UsuarioBasico` usando `Pick<Usuario, 'id' | 'nombre'>`
4. Crear tipo `UsuarioSinID` usando `Omit<Usuario, 'id'>`
5. Crear tipo `UsuariosPorID` usando `Record<number, Usuario>`
6. Crear utility type personalizado `Nullable<T>` que agregue `null` a todas las propiedades
7. Crear utility type `DeepReadonly<T>` recursivo para objetos anidados

> 💡 **Sugerencia de Commit**: `git commit -m "feat: utility types y transformaciones"`

#### Paso 11: Decoradores
- [ ] Introducción a decoradores
- [ ] Decoradores de clase, método y propiedad
- [ ] Metadata y reflection
- [ ] Decoradores en frameworks (NestJS)

**📚 Conceptos Clave:**

##### **Decorador**
**Definición:** Función especial que modifica clases, métodos, propiedades o parámetros. Se denotan con `@` y se ejecutan en tiempo de ejecución.

**Ejemplo:**
```typescript
// Decorador de método
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando ${propertyKey} con:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
  
  return descriptor;
}

class Calculadora {
  @Log
  sumar(a: number, b: number): number {
    return a + b;
  }
}
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para decoradores
mkdir -p src/03-avanzado/decoradores
touch src/03-avanzado/decoradores/decoradores-metodo.ts
touch src/03-avanzado/decoradores/decoradores-clase.ts
touch src/03-avanzado/decoradores/decoradores-propiedad.ts
touch src/03-avanzado/decoradores/metadata.ts

# Modificar tsconfig.json para habilitar decoradores
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/03-avanzado/decoradores/`
- ✅ Crear archivo `src/03-avanzado/decoradores/decoradores-metodo.ts`
- ✅ Crear archivo `src/03-avanzado/decoradores/decoradores-clase.ts`
- ✅ Crear archivo `src/03-avanzado/decoradores/decoradores-propiedad.ts`
- ✅ Crear archivo `src/03-avanzado/decoradores/metadata.ts`
- ✅ Modificar `tsconfig.json`: agregar `"experimentalDecorators": true` y `"emitDecoratorMetadata": true`
- ✅ Instalar `reflect-metadata`: `npm install reflect-metadata`

**📝 Ejercicios:**
1. Crear decorador `@Log` que registre llamadas a métodos
2. Crear decorador `@MedirTiempo` que mida tiempo de ejecución
3. Crear decorador `@Validar` que valide parámetros de método
4. Crear decorador de clase `@Serializable` que agregue método `toJSON()`
5. Crear decorador de propiedad `@MinLength(5)` para validación
6. Implementar decorador `@Deprecated` que muestre advertencia al usar método

> 💡 **Sugerencia de Commit**: `git commit -m "feat: decoradores y metadatos"`

#### Paso 12: Template Literal Types
- [ ] String literal types
- [ ] Template literal types
- [ ] Pattern matching con tipos
- [ ] Casos de uso prácticos

**📚 Conceptos Clave:**

##### **Template Literal Type**
**Definición:** Permite crear tipos basados en strings usando template literals. Útil para crear tipos de strings con patrones específicos.

**Ejemplo:**
```typescript
// String literal types
type Evento = "click" | "scroll" | "mousemove";

// Template literal type
type EventoHandler = `on${Capitalize<Evento>}`;
// "onClick" | "onScroll" | "onMousemove"

// Pattern matching
type RutaAPI = `/api/${string}`;

function navegar(ruta: RutaAPI): void {
  // ...
}

navegar("/api/products");  // ✅
navegar("/api/users/123"); // ✅
navegar("/products");      // ❌ Error
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para template literal types
mkdir -p src/03-avanzado/template-literals
touch src/03-avanzado/template-literals/string-literals.ts
touch src/03-avanzado/template-literals/template-types.ts
touch src/03-avanzado/template-literals/pattern-matching.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/03-avanzado/template-literals/`
- ✅ Crear archivo `src/03-avanzado/template-literals/string-literals.ts`
- ✅ Crear archivo `src/03-avanzado/template-literals/template-types.ts`
- ✅ Crear archivo `src/03-avanzado/template-literals/pattern-matching.ts`

**📝 Ejercicios:**
1. Crear tipo `Evento` como `"click" | "scroll" | "mousemove"`
2. Crear tipo `EventoHandler` como `on${Capitalize<Evento>}`
3. Crear tipo `RutaAPI` que solo acepte strings que empiecen con `/api/`
4. Crear tipo `IDUsuario` como `usuario-${number}`
5. Crear función que use template literal types para rutas tipadas
6. Crear tipo `ColorRGB` como `rgb(${number}, ${number}, ${number})`

> 💡 **Sugerencia de Commit**: `git commit -m "feat: template literal types avanzados"`

### Fase 4: APIs y Backend (Semana 7-8)

#### Paso 13: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] Códigos de estado HTTP
- [ ] Estructura de respuestas JSON

**📚 Conceptos Clave:**

##### **API (Application Programming Interface)**
**Definición:** Conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. Define cómo solicitar y recibir datos.

**Ejemplo:**
```typescript
// Cliente API tipado
class APICliente {
  async obtener<T>(url: string): Promise<T> {
    const respuesta = await fetch(url);
    return await respuesta.json();
  }
  
  async crear<T>(url: string, datos: T): Promise<T> {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos)
    });
    return await respuesta.json();
  }
}
```

##### **REST (Representational State Transfer)**
**Definición:** Estilo arquitectónico para diseñar servicios web. Usa métodos HTTP estándar (GET, POST, PUT, DELETE) para operaciones CRUD.

**Ejemplo:**
```typescript
// Endpoints REST tipados
interface Endpoints {
  GET: "/api/usuarios";
  POST: "/api/usuarios";
  PUT: "/api/usuarios/:id";
  DELETE: "/api/usuarios/:id";
}
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta y archivos para APIs
mkdir -p src/04-apis/documentacion
mkdir -p src/04-apis/types
touch src/04-apis/documentacion/rest-api.md
touch src/04-apis/types/http-types.ts
touch src/04-apis/types/api-response.ts
touch src/04-apis/types/endpoints.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/04-apis/documentacion/`
- ✅ Crear carpeta `src/04-apis/types/`
- ✅ Crear archivo `src/04-apis/documentacion/rest-api.md` (documentación)
- ✅ Crear archivo `src/04-apis/types/http-types.ts`
- ✅ Crear archivo `src/04-apis/types/api-response.ts`
- ✅ Crear archivo `src/04-apis/types/endpoints.ts`

**📝 Ejercicios:**
1. Documentar estructura de API REST para sistema de blog
2. Crear tipos TypeScript para códigos de estado HTTP comunes
3. Diseñar estructura de respuesta JSON estándar `{ data, error, status }`
4. Crear interfaz `RespuestaAPI<T>` genérica para respuestas tipadas
5. Documentar endpoints: GET /posts, POST /posts, PUT /posts/:id, DELETE /posts/:id
6. Crear tipos para query parameters y path parameters

> 💡 **Sugerencia de Commit**: `git commit -m "docs: documentación sobre APIs REST"`

#### Paso 14: Consumir APIs con TypeScript
- [ ] Fetch API con tipos
- [ ] Axios con TypeScript
- [ ] Manejo de errores tipado
- [ ] Interceptores y transformaciones

**📚 Conceptos Clave:**

##### **Promise**
**Definición:** Objeto que representa el resultado eventual de una operación asíncrona. Puede estar pendiente, resuelta o rechazada.

**Ejemplo:**
```typescript
function obtenerUsuario(id: number): Promise<Usuario> {
  return fetch(`/api/usuarios/${id}`)
    .then(respuesta => respuesta.json());
}
```

##### **Async/Await**
**Definición:** Sintaxis para trabajar con Promises de forma más legible. `async` marca una función como asíncrona, `await` espera la resolución de una Promise.

**Ejemplo:**
```typescript
async function obtenerUsuario(id: number): Promise<Usuario> {
  const respuesta = await fetch(`/api/usuarios/${id}`);
  const usuario = await respuesta.json();
  return usuario;
}

// Uso
async function ejemplo() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

##### **Type Assertion (Aserción de Tipos)**
**Definición:** Forma de decirle a TypeScript que trate un valor como un tipo específico. No cambia el valor en tiempo de ejecución, solo el tipo en tiempo de compilación.

**Ejemplo:**
```typescript
// Sintaxis con 'as'
let valor: unknown = "hola";
let longitud = (valor as string).length;

// Útil con respuestas de API
const respuesta = await fetch("/api/usuario");
const usuario = await respuesta.json() as Usuario;
```

**📁 Estructura de Archivos:**
```bash
# Crear estructura para consumo de APIs
mkdir -p src/04-apis/consumo
mkdir -p src/04-apis/consumo/clients
mkdir -p src/04-apis/consumo/services
touch src/04-apis/consumo/fetch-api.ts
touch src/04-apis/consumo/clients/axios-client.ts
touch src/04-apis/consumo/clients/api-client.ts
touch src/04-apis/consumo/services/github-service.ts
touch src/04-apis/consumo/utils/error-handler.ts
touch src/04-apis/consumo/utils/retry.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/04-apis/consumo/` con subcarpetas `clients/`, `services/`, `utils/`
- ✅ Crear archivo `src/04-apis/consumo/fetch-api.ts`
- ✅ Crear archivo `src/04-apis/consumo/clients/axios-client.ts`
- ✅ Crear archivo `src/04-apis/consumo/clients/api-client.ts`
- ✅ Crear archivo `src/04-apis/consumo/services/github-service.ts`
- ✅ Crear archivo `src/04-apis/consumo/utils/error-handler.ts`
- ✅ Crear archivo `src/04-apis/consumo/utils/retry.ts`
- ✅ Instalar dependencias: `npm install axios` y `npm install -D @types/node`

**📝 Ejercicios:**
1. Crear función `obtenerUsuario(id: number)` usando Fetch API tipada
2. Crear cliente Axios tipado para API de GitHub
3. Crear clase `APICliente` genérica con métodos GET, POST, PUT, DELETE
4. Implementar manejo de errores tipado con `try-catch` y tipos de error
5. Crear interceptor de Axios para logging automático de requests
6. Consumir API pública (JSONPlaceholder) y tipar todas las respuestas
7. Crear función `retry` tipada para reintentos de peticiones fallidas

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con TypeScript"`

#### Paso 15: Crear API REST con Express
- [ ] Configurar Express con TypeScript
- [ ] Crear rutas tipadas
- [ ] Middleware tipado
- [ ] Validación de datos con Zod/Yup

**📁 Estructura de Archivos:**
```bash
# Crear estructura completa para API Express
mkdir -p src/04-apis/creacion/express-api
mkdir -p src/04-apis/creacion/express-api/controllers
mkdir -p src/04-apis/creacion/express-api/routes
mkdir -p src/04-apis/creacion/express-api/middleware
mkdir -p src/04-apis/creacion/express-api/models
mkdir -p src/04-apis/creacion/express-api/utils

touch src/04-apis/creacion/express-api/app.ts
touch src/04-apis/creacion/express-api/server.ts
touch src/04-apis/creacion/express-api/controllers/usuario.controller.ts
touch src/04-apis/creacion/express-api/routes/usuario.routes.ts
touch src/04-apis/creacion/express-api/middleware/auth.middleware.ts
touch src/04-apis/creacion/express-api/middleware/validation.middleware.ts
touch src/04-apis/creacion/express-api/middleware/error.middleware.ts
touch src/04-apis/creacion/express-api/models/usuario.model.ts
touch src/04-apis/creacion/express-api/utils/validators.ts
touch .env.example
```

**📝 Archivos a crear/modificar:**
- ✅ Crear estructura completa de carpetas para Express API
- ✅ Crear archivo `src/04-apis/creacion/express-api/app.ts` (configuración Express)
- ✅ Crear archivo `src/04-apis/creacion/express-api/server.ts` (inicio del servidor)
- ✅ Crear archivo `src/04-apis/creacion/express-api/controllers/usuario.controller.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/routes/usuario.routes.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/middleware/auth.middleware.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/middleware/validation.middleware.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/middleware/error.middleware.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/models/usuario.model.ts`
- ✅ Crear archivo `src/04-apis/creacion/express-api/utils/validators.ts`
- ✅ Crear archivo `.env.example` (plantilla de variables de entorno)
- ✅ Modificar `package.json`: agregar scripts `"dev": "ts-node src/04-apis/creacion/express-api/server.ts"`
- ✅ Instalar dependencias: `npm install express cors dotenv` y `npm install -D @types/express @types/cors`
- ✅ Instalar validación: `npm install zod` (o `yup`)

**📝 Ejercicios:**
1. Configurar proyecto Express + TypeScript desde cero
2. Crear ruta GET `/api/usuarios` con tipado completo
3. Crear middleware de autenticación tipado
4. Crear middleware de validación con Zod para POST `/api/usuarios`
5. Implementar CRUD completo (GET, POST, PUT, DELETE) tipado
6. Crear middleware de manejo de errores centralizado tipado
7. Crear tipos para Request y Response personalizados
8. Implementar paginación tipada en endpoint GET

> 💡 **Sugerencia de Commit**: `git commit -m "feat: API REST con Express y TypeScript"`

#### Paso 16: Proyecto Práctico: API de Tareas
- [ ] Crear CRUD completo tipado
- [ ] Manejo de errores centralizado
- [ ] Validación de entrada
- [ ] Documentación con Swagger/OpenAPI

**📁 Estructura de Archivos:**
```bash
# Crear proyecto completo de API de Tareas
mkdir -p src/06-proyectos/api-tareas
mkdir -p src/06-proyectos/api-tareas/src/{controllers,routes,models,middleware,services,utils,tests}
mkdir -p src/06-proyectos/api-tareas/docs

touch src/06-proyectos/api-tareas/src/app.ts
touch src/06-proyectos/api-tareas/src/server.ts
touch src/06-proyectos/api-tareas/src/controllers/tarea.controller.ts
touch src/06-proyectos/api-tareas/src/routes/tarea.routes.ts
touch src/06-proyectos/api-tareas/src/models/tarea.model.ts
touch src/06-proyectos/api-tareas/src/services/tarea.service.ts
touch src/06-proyectos/api-tareas/src/middleware/error.middleware.ts
touch src/06-proyectos/api-tareas/src/middleware/validation.middleware.ts
touch src/06-proyectos/api-tareas/src/utils/validators.ts
touch src/06-proyectos/api-tareas/src/tests/tarea.test.ts
touch src/06-proyectos/api-tareas/docs/swagger.yaml
touch src/06-proyectos/api-tareas/README.md
touch src/06-proyectos/api-tareas/.env.example
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/06-proyectos/api-tareas/` con estructura completa
- ✅ Crear todos los archivos listados arriba
- ✅ Crear archivo `src/06-proyectos/api-tareas/package.json` (si es proyecto independiente)
- ✅ Crear archivo `src/06-proyectos/api-tareas/tsconfig.json` (si es proyecto independiente)
- ✅ Instalar Swagger: `npm install swagger-ui-express swagger-jsdoc` y `npm install -D @types/swagger-ui-express @types/swagger-jsdoc`
- ✅ Instalar testing: `npm install -D jest @types/jest ts-jest supertest @types/supertest`

**📝 Ejercicios:**
1. Crear modelo `Tarea` con tipos: id, titulo, descripcion, completada, fechaCreacion
2. Implementar GET `/api/tareas` con filtros opcionales (completada, fecha)
3. Implementar POST `/api/tareas` con validación Zod
4. Implementar PUT `/api/tareas/:id` para actualizar tarea
5. Implementar DELETE `/api/tareas/:id` con validación de existencia
6. Crear middleware de manejo de errores con tipos específicos
7. Agregar documentación Swagger con tipos TypeScript
8. Implementar búsqueda y ordenamiento tipados
9. Crear tests unitarios tipados para endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: proyecto API de tareas completo"`

### Fase 5: ORMs y Bases de Datos (Semana 9-10)

#### Paso 17: Introducción a ORMs
- [ ] ¿Qué es un ORM?
- [ ] Ventajas y desventajas
- [ ] Comparativa de ORMs populares
- [ ] Migraciones y esquemas

**📚 Conceptos Clave:**

##### **ORM (Object-Relational Mapping)**
**Definición:** Técnica que mapea objetos de programación orientada a objetos a tablas de bases de datos relacionales. Permite trabajar con BD usando objetos en lugar de SQL directo.

**Ejemplo con TypeORM:**
```typescript
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  nombre!: string;
  
  @Column()
  email!: string;
}

// Uso sin escribir SQL
const usuario = await usuarioRepository.findOne({ where: { id: 1 } });
```

**Ejemplo con Prisma:**
```prisma
// schema.prisma
model Usuario {
  id    Int    @id @default(autoincrement())
  nombre String
  email  String @unique
}
```

```typescript
// Código generado automáticamente con tipos
const usuario = await prisma.usuario.findUnique({
  where: { id: 1 }
});
```

**📁 Estructura de Archivos:**
```bash
# Crear carpeta para documentación de ORMs
mkdir -p src/05-orms/documentacion
mkdir -p src/05-orms/esquemas
touch src/05-orms/documentacion/comparativa.md
touch src/05-orms/documentacion/ventajas-desventajas.md
touch src/05-orms/esquemas/blog-schema.md
touch src/05-orms/esquemas/ecommerce-schema.md
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/05-orms/documentacion/`
- ✅ Crear carpeta `src/05-orms/esquemas/`
- ✅ Crear archivo `src/05-orms/documentacion/comparativa.md`
- ✅ Crear archivo `src/05-orms/documentacion/ventajas-desventajas.md`
- ✅ Crear archivo `src/05-orms/esquemas/blog-schema.md`
- ✅ Crear archivo `src/05-orms/esquemas/ecommerce-schema.md`

**📝 Ejercicios:**
1. Investigar y documentar diferencias entre TypeORM, Prisma, Sequelize
2. Crear diagrama de entidad-relación para sistema de blog
3. Diseñar esquema de base de datos para e-commerce (Productos, Usuarios, Pedidos)
4. Documentar ventajas/desventajas de ORMs vs SQL puro
5. Crear tabla comparativa de ORMs con criterios: type safety, performance, comunidad
6. Planificar estrategia de migraciones para proyecto real

> 💡 **Sugerencia de Commit**: `git commit -m "docs: documentación sobre ORMs"`

#### Paso 18: TypeORM con TypeScript
- [ ] Instalación y configuración
- [ ] Entidades y decoradores
- [ ] Relaciones (OneToMany, ManyToOne, ManyToMany)
- [ ] Queries tipadas y Query Builder

**📁 Estructura de Archivos:**
```bash
# Crear estructura para TypeORM
mkdir -p src/05-orms/typeorm
mkdir -p src/05-orms/typeorm/entities
mkdir -p src/05-orms/typeorm/repositories
mkdir -p src/05-orms/typeorm/migrations
mkdir -p src/05-orms/typeorm/seeders

touch src/05-orms/typeorm/data-source.ts
touch src/05-orms/typeorm/entities/Usuario.ts
touch src/05-orms/typeorm/entities/Post.ts
touch src/05-orms/typeorm/entities/Categoria.ts
touch src/05-orms/typeorm/repositories/usuario.repository.ts
touch src/05-orms/typeorm/migrations/0000000000001-InitialMigration.ts
touch src/05-orms/typeorm/seeders/seed.ts
touch src/05-orms/typeorm/ormconfig.json
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/05-orms/typeorm/` con subcarpetas `entities/`, `repositories/`, `migrations/`, `seeders/`
- ✅ Crear archivo `src/05-orms/typeorm/data-source.ts` (configuración DataSource)
- ✅ Crear archivo `src/05-orms/typeorm/entities/Usuario.ts`
- ✅ Crear archivo `src/05-orms/typeorm/entities/Post.ts`
- ✅ Crear archivo `src/05-orms/typeorm/entities/Categoria.ts`
- ✅ Crear archivo `src/05-orms/typeorm/repositories/usuario.repository.ts`
- ✅ Crear archivo `src/05-orms/typeorm/migrations/0000000000001-InitialMigration.ts`
- ✅ Crear archivo `src/05-orms/typeorm/seeders/seed.ts`
- ✅ Crear archivo `src/05-orms/typeorm/ormconfig.json` (configuración)
- ✅ Modificar `.env`: agregar `DATABASE_URL`
- ✅ Instalar dependencias: `npm install typeorm reflect-metadata` y driver de BD (`npm install mysql2` o `pg` o `sqlite3`)
- ✅ Instalar CLI: `npm install -D typeorm`

**📝 Ejercicios:**
1. Configurar TypeORM con SQLite/PostgreSQL
2. Crear entidad `Usuario` con decoradores TypeORM
3. Crear entidad `Post` con relación ManyToOne a Usuario
4. Crear entidad `Categoria` con relación ManyToMany a Post
5. Implementar repositorio tipado con métodos personalizados
6. Crear migración para esquema inicial
7. Usar Query Builder para consulta compleja tipada
8. Implementar transacciones tipadas
9. Crear seeders tipados para datos de prueba

> 💡 **Sugerencia de Commit**: `git commit -m "feat: integración con TypeORM"`

#### Paso 19: Prisma con TypeScript
- [ ] Instalación y setup
- [ ] Schema definition
- [ ] Client generado con tipos
- [ ] Migraciones y seeding

**📁 Estructura de Archivos:**
```bash
# Crear estructura para Prisma
mkdir -p src/05-orms/prisma
mkdir -p src/05-orms/prisma/migrations
mkdir -p src/05-orms/prisma/seed

touch src/05-orms/prisma/schema.prisma
touch src/05-orms/prisma/seed.ts
touch src/05-orms/prisma/prisma-client.ts
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/05-orms/prisma/` con subcarpetas `migrations/`, `seed/`
- ✅ Crear archivo `src/05-orms/prisma/schema.prisma` (schema definition)
- ✅ Crear archivo `src/05-orms/prisma/seed.ts` (seeding)
- ✅ Crear archivo `src/05-orms/prisma/prisma-client.ts` (instancia del cliente)
- ✅ Modificar `.env`: agregar `DATABASE_URL`
- ✅ Instalar dependencias: `npm install prisma @prisma/client`
- ✅ Instalar como dev: `npm install -D prisma`
- ✅ Ejecutar: `npx prisma init` (si es primera vez)
- ✅ Ejecutar: `npx prisma generate` (generar cliente)
- ✅ Ejecutar: `npx prisma migrate dev --name init` (crear migración inicial)

**📝 Ejercicios:**
1. Configurar Prisma con PostgreSQL/MySQL
2. Crear schema.prisma con modelos Usuario, Post, Comentario
3. Definir relaciones: Usuario -> Post (OneToMany), Post -> Comentario (OneToMany)
4. Generar Prisma Client y verificar tipos generados
5. Crear migración inicial con `prisma migrate dev`
6. Crear archivo seed.ts tipado para poblar base de datos
7. Implementar CRUD usando Prisma Client con tipos completos
8. Crear queries complejas con `include` y `select` tipados
9. Implementar transacciones con Prisma tipadas
10. Crear servicio tipado que use Prisma Client

> 💡 **Sugerencia de Commit**: `git commit -m "feat: integración con Prisma ORM"`

#### Paso 20: Proyecto Completo: Backend con ORM
- [ ] Conectar API con base de datos
- [ ] Implementar CRUD completo
- [ ] Relaciones entre entidades
- [ ] Testing de endpoints

**📁 Estructura de Archivos:**
```bash
# Integrar ORM con API existente o crear nuevo proyecto
mkdir -p src/06-proyectos/backend-orm
mkdir -p src/06-proyectos/backend-orm/src/{controllers,routes,services,entities,repositories,middleware,tests,config}

touch src/06-proyectos/backend-orm/src/config/database.ts
touch src/06-proyectos/backend-orm/src/entities/Usuario.ts
touch src/06-proyectos/backend-orm/src/entities/Post.ts
touch src/06-proyectos/backend-orm/src/repositories/usuario.repository.ts
touch src/06-proyectos/backend-orm/src/services/usuario.service.ts
touch src/06-proyectos/backend-orm/src/controllers/usuario.controller.ts
touch src/06-proyectos/backend-orm/src/routes/usuario.routes.ts
touch src/06-proyectos/backend-orm/src/tests/usuario.integration.test.ts
touch src/06-proyectos/backend-orm/.env.example
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/06-proyectos/backend-orm/` con estructura completa
- ✅ Crear archivo `src/06-proyectos/backend-orm/src/config/database.ts` (conexión BD)
- ✅ Crear todas las entidades necesarias
- ✅ Crear repositorios y servicios tipados
- ✅ Modificar controladores existentes para usar ORM
- ✅ Crear archivo `.env.example` con variables de BD
- ✅ Crear archivo `src/06-proyectos/backend-orm/src/tests/setup.ts` (configuración de tests)
- ✅ Modificar `package.json`: agregar script de test

**📝 Ejercicios:**
1. Conectar Express API con TypeORM/Prisma
2. Implementar GET `/api/usuarios` con datos de BD
3. Implementar POST `/api/usuarios` con validación y guardado en BD
4. Implementar relaciones: obtener usuario con sus posts
5. Crear endpoint GET `/api/posts/:id/comentarios` con relaciones
6. Implementar paginación tipada en listados
7. Crear tests de integración para endpoints con BD
8. Implementar soft delete (eliminación lógica) tipado
9. Crear servicio de búsqueda con filtros complejos tipados
10. Implementar validación de datos antes de guardar en BD

> 💡 **Sugerencia de Commit**: `git commit -m "feat: proyecto completo backend con ORM"`

### Fase 6: Proyectos Finales (Semana 11-12)

#### Paso 21: Proyecto Full-Stack
- [ ] Backend con Express + TypeORM/Prisma
- [ ] Frontend con React/Vue + TypeScript
- [ ] Integración completa tipada
- [ ] Deploy y documentación

**📁 Estructura de Archivos:**
```bash
# Crear proyecto full-stack completo
mkdir -p src/06-proyectos/full-stack
mkdir -p src/06-proyectos/full-stack/backend
mkdir -p src/06-proyectos/full-stack/frontend
mkdir -p src/06-proyectos/full-stack/shared

# Backend
mkdir -p src/06-proyectos/full-stack/backend/src/{controllers,routes,services,entities,middleware,config}
touch src/06-proyectos/full-stack/backend/src/app.ts
touch src/06-proyectos/full-stack/backend/src/server.ts
touch src/06-proyectos/full-stack/backend/.env.example
touch src/06-proyectos/full-stack/backend/package.json
touch src/06-proyectos/full-stack/backend/tsconfig.json

# Frontend
mkdir -p src/06-proyectos/full-stack/frontend/src/{components,services,types,utils,hooks}
touch src/06-proyectos/full-stack/frontend/src/App.tsx
touch src/06-proyectos/full-stack/frontend/src/main.tsx
touch src/06-proyectos/full-stack/frontend/src/services/api.ts
touch src/06-proyectos/full-stack/frontend/.env.example
touch src/06-proyectos/full-stack/frontend/package.json
touch src/06-proyectos/full-stack/frontend/tsconfig.json
touch src/06-proyectos/full-stack/frontend/vite.config.ts

# Tipos compartidos
mkdir -p src/06-proyectos/full-stack/shared/types
touch src/06-proyectos/full-stack/shared/types/index.ts
touch src/06-proyectos/full-stack/shared/package.json
touch src/06-proyectos/full-stack/shared/tsconfig.json

# Documentación
touch src/06-proyectos/full-stack/README.md
touch src/06-proyectos/full-stack/DEPLOY.md
```

**📝 Archivos a crear/modificar:**
- ✅ Crear estructura completa de proyecto full-stack
- ✅ Crear carpetas `backend/`, `frontend/`, `shared/`
- ✅ Crear todos los archivos listados arriba
- ✅ Crear `package.json` independiente para cada parte (backend, frontend, shared)
- ✅ Crear `tsconfig.json` para cada parte
- ✅ Crear archivo `src/06-proyectos/full-stack/shared/types/index.ts` (tipos compartidos)
- ✅ Crear archivo `src/06-proyectos/full-stack/DEPLOY.md` (guía de deploy)
- ✅ Configurar monorepo (opcional): usar `npm workspaces` o `lerna`
- ✅ Instalar dependencias en cada parte del proyecto
- ✅ Crear archivos de configuración de deploy (`.github/workflows/`, `vercel.json`, etc.)

**📝 Ejercicios:**
1. Crear backend completo con Express + TypeORM/Prisma
2. Configurar React/Vue con TypeScript desde cero
3. Crear tipos compartidos entre frontend y backend
4. Implementar servicio de API tipado en frontend
5. Crear componentes React/Vue tipados que consuman API
6. Implementar manejo de estado tipado (Context/Redux)
7. Crear formularios tipados con validación
8. Implementar autenticación tipada (JWT)
9. Configurar variables de entorno tipadas
10. Crear documentación completa del proyecto
11. Deploy backend (Heroku/Railway) y frontend (Vercel/Netlify)

> 💡 **Sugerencia de Commit**: `git commit -m "feat: proyecto full-stack completo"`

#### Paso 22: Refactorización y Mejoras
- [ ] Aplicar principios SOLID
- [ ] Implementar patrones de diseño
- [ ] Optimización de tipos
- [ ] Documentación final

**📁 Estructura de Archivos:**
```bash
# Crear estructura para refactorización
mkdir -p src/07-principios-solid
mkdir -p src/07-principios-solid/patrones
mkdir -p src/07-principios-solid/refactor
mkdir -p src/types
mkdir -p docs

touch src/07-principios-solid/patrones/repository.ts
touch src/07-principios-solid/patrones/factory.ts
touch src/07-principios-solid/patrones/strategy.ts
touch src/07-principios-solid/refactor/refactor-guide.md
touch src/types/index.d.ts
touch docs/CONTRIBUTING.md
touch docs/TYPE-STANDARDS.md
touch .dtslintrc.json
```

**📝 Archivos a crear/modificar:**
- ✅ Crear carpeta `src/07-principios-solid/` con subcarpetas `patrones/`, `refactor/`
- ✅ Crear carpeta `src/types/` para tipos compartidos
- ✅ Crear carpeta `docs/` para documentación
- ✅ Crear archivos de patrones de diseño
- ✅ Crear archivo `src/types/index.d.ts` (declaraciones globales)
- ✅ Crear archivo `docs/CONTRIBUTING.md` (guía de contribución)
- ✅ Crear archivo `docs/TYPE-STANDARDS.md` (estándares de tipos)
- ✅ Crear archivo `.dtslintrc.json` (configuración de tests de tipos)
- ✅ Renombrar archivos existentes si es necesario para mejor organización
- ✅ Mover código a carpetas apropiadas según principios SOLID
- ✅ Modificar imports en archivos afectados por refactorización
- ✅ Instalar herramientas: `npm install -D tsd dtslint`

**📝 Ejercicios:**
1. Refactorizar código aplicando Single Responsibility Principle
2. Implementar patrón Repository para acceso a datos
3. Crear Factory pattern para creación de objetos tipados
4. Implementar Strategy pattern para diferentes algoritmos
5. Aplicar Dependency Injection con interfaces tipadas
6. Optimizar tipos eliminando `any` y usando tipos más específicos
7. Crear tipos compartidos en carpeta `@types` o `types/`
8. Documentar todos los tipos y funciones con JSDoc
9. Crear guía de contribución con estándares de tipos
10. Realizar code review enfocado en type safety
11. Crear tests de tipos con `tsd` o `dtslint`

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicación de principios SOLID y patrones"`

---

## 📚 Fundamentos Básicos

<div align="center">

![Fundamentos](https://img.shields.io/badge/Fundamentos-Básicos-4CAF50?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-Basics-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

### 1. Tipos Primitivos

![Types](https://img.shields.io/badge/Tipos-Primitivos-2196F3?style=flat-square)

TypeScript extiende JavaScript con un sistema de tipos estático. Los tipos básicos incluyen:

```typescript
// Tipos primitivos
let nombre: string = "Juan";
let edad: number = 25;
let activo: boolean = true;

// Tipos especiales
let valor: null = null;
let indefinido: undefined = undefined;
let cualquier: any = "puede ser cualquier cosa";
let desconocido: unknown = "necesita verificación";
let nunca: never; // Nunca retorna un valor
```

#### Comparativa de Tipos Especiales

| Tipo | Uso | Cuándo Usar | Ejemplo |
|------|-----|-------------|---------|
| `any` | Cualquier tipo | Evitar (solo en casos extremos) | `let data: any = fetchData()` |
| `unknown` | Tipo seguro desconocido | Cuando no conocemos el tipo | `let userInput: unknown = input()` |
| `never` | Nunca ocurre | Funciones que nunca retornan | `function throwError(): never` |
| `void` | Sin retorno | Funciones sin return | `function log(): void` |

### 2. Objetos y Arrays

#### Tipado de Objetos

```typescript
// Inline typing
let usuario: { nombre: string; edad: number } = {
  nombre: "Juan",
  edad: 25
};

// Con interface (recomendado)
interface Usuario {
  nombre: string;
  edad: number;
  email?: string; // Propiedad opcional
}

let usuario2: Usuario = {
  nombre: "María",
  edad: 30
};
```

#### Tipado de Arrays

```typescript
// Array de números
let numeros: number[] = [1, 2, 3];
// O usando genéricos
let numeros2: Array<number> = [1, 2, 3];

// Array de strings
let nombres: string[] = ["Juan", "María"];

// Tuplas (array con tipos específicos en cada posición)
let tupla: [string, number] = ["Juan", 25];
```

### 3. Funciones

```typescript
// Función con tipos explícitos
function sumar(a: number, b: number): number {
  return a + b;
}

// Función con parámetros opcionales
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

// Función con valores por defecto
function multiplicar(a: number, b: number = 1): number {
  return a * b;
}

// Función de flecha tipada
const dividir = (a: number, b: number): number => a / b;

// Función con overloads
function procesar(valor: string): string;
function procesar(valor: number): number;
function procesar(valor: string | number): string | number {
  return typeof valor === "string" ? valor.toUpperCase() : valor * 2;
}
```

### 4. Interfaces vs Types

| Característica | `interface` | `type` |
|---------------|-------------|--------|
| **Extensión** | `extends` | `&` (intersection) |
| **Unión** | No soporta | `\|` (union) |
| **Merging** | Sí (declaration merging) | No |
| **Uso común** | Objetos, clases | Uniones, intersecciones, primitivos |
| **Recomendación** | Para objetos y contratos | Para tipos complejos y uniones |

```typescript
// Interface - mejor para objetos
interface Animal {
  nombre: string;
}

interface Perro extends Animal {
  raza: string;
}

// Type - mejor para uniones e intersecciones
type ID = string | number;
type Status = "active" | "inactive" | "pending";
```

### 5. Clases y Programación Orientada a Objetos

```typescript
class Persona {
  // Propiedades públicas (por defecto)
  nombre: string;
  
  // Propiedades privadas
  private edad: number;
  
  // Propiedades protegidas
  protected email: string;
  
  // Propiedades readonly
  readonly id: string;
  
  constructor(nombre: string, edad: number, email: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.id = Math.random().toString(36);
  }
  
  // Método público
  presentarse(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años`;
  }
  
  // Método privado
  private calcularEdad(): number {
    return this.edad;
  }
}

// Herencia
class Estudiante extends Persona {
  private carrera: string;
  
  constructor(nombre: string, edad: number, email: string, carrera: string) {
    super(nombre, edad, email);
    this.carrera = carrera;
  }
  
  estudiar(): string {
    return `${this.nombre} está estudiando ${this.carrera}`;
  }
}
```

---

## 📖 Nivel Intermedio

<div align="center">

![Intermedio](https://img.shields.io/badge/Nivel-Intermedio-FF9800?style=for-the-badge)
![Generics](https://img.shields.io/badge/Generics-Utility%20Types-9C27B0?style=for-the-badge)

</div>

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicación de principios SOLID y patrones"`

---

## 📚 Fundamentos Básicos

![Generics](https://img.shields.io/badge/Generics-TypeScript-9C27B0?style=flat-square)

Los genéricos permiten crear componentes reutilizables que funcionan con múltiples tipos.

```typescript
// Función genérica simple
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array[0];
}

const numero = obtenerPrimero([1, 2, 3]); // number
const texto = obtenerPrimero(["a", "b"]); // string

// Clase genérica
class Contenedor<T> {
  private items: T[] = [];
  
  agregar(item: T): void {
    this.items.push(item);
  }
  
  obtener(index: number): T | undefined {
    return this.items[index];
  }
}

const contenedorNumeros = new Contenedor<number>();
const contenedorStrings = new Contenedor<string>();

// Genéricos con constraints
interface ConLongitud {
  length: number;
}

function obtenerLongitud<T extends ConLongitud>(item: T): number {
  return item.length;
}

obtenerLongitud("hola"); // 4
obtenerLongitud([1, 2, 3]); // 3
```

### 2. Union y Intersection Types

```typescript
// Union Type (uno u otro)
type ID = string | number;
type Status = "active" | "inactive" | "pending";

function procesarID(id: ID): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toString());
  }
}

// Intersection Type (combinación de tipos)
interface Nombre {
  nombre: string;
}

interface Edad {
  edad: number;
}

type PersonaCompleta = Nombre & Edad;

const persona: PersonaCompleta = {
  nombre: "Juan",
  edad: 25
};
```

### 3. Type Guards y Narrowing

```typescript
// Type Guard personalizado
function esString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function procesar(valor: unknown): void {
  if (esString(valor)) {
    // TypeScript sabe que valor es string aquí
    console.log(valor.toUpperCase());
  }
}

// Discriminated Union
type ResultadoExitoso = {
  tipo: "exito";
  datos: string[];
};

type ResultadoError = {
  tipo: "error";
  mensaje: string;
};

type Resultado = ResultadoExitoso | ResultadoError;

function manejarResultado(resultado: Resultado): void {
  if (resultado.tipo === "exito") {
    console.log(resultado.datos); // TypeScript sabe que es ResultadoExitoso
  } else {
    console.log(resultado.mensaje); // TypeScript sabe que es ResultadoError
  }
}
```

### 4. Utility Types

TypeScript proporciona varios tipos utilitarios para transformar tipos:

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// Partial - todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;
// { id?: number; nombre?: string; email?: string; activo?: boolean; }

// Required - todas las propiedades requeridas
type UsuarioRequerido = Required<Usuario>;

// Pick - seleccionar propiedades específicas
type UsuarioBasico = Pick<Usuario, "id" | "nombre">;
// { id: number; nombre: string; }

// Omit - excluir propiedades específicas
type UsuarioSinID = Omit<Usuario, "id">;
// { nombre: string; email: string; activo: boolean; }

// Record - crear objeto con claves y valores tipados
type UsuariosPorID = Record<number, Usuario>;
// { [key: number]: Usuario }
```

---

## 🎓 Nivel Avanzado

<div align="center">

![Avanzado](https://img.shields.io/badge/Nivel-Avanzado-F44336?style=for-the-badge)
![Advanced](https://img.shields.io/badge/Advanced-TypeScript-607D8B?style=for-the-badge)

</div>

### 1. Conditional Types

![Conditional Types](https://img.shields.io/badge/Conditional-Types-607D8B?style=flat-square)

Los tipos condicionales permiten crear tipos que dependen de condiciones:

```typescript
type EsArray<T> = T extends Array<any> ? true : false;

type Test1 = EsArray<string[]>; // true
type Test2 = EsArray<string>; // false

// Ejemplo práctico: extraer tipo de array
type ExtraerTipoArray<T> = T extends Array<infer U> ? U : never;

type TipoExtraido = ExtraerTipoArray<string[]>; // string
type TipoExtraido2 = ExtraerTipoArray<number[]>; // number
```

### 2. Template Literal Types

Permiten crear tipos basados en strings:

```typescript
type Evento = "click" | "scroll" | "mousemove";
type Elemento = "button" | "div" | "span";

// Crear tipo combinado
type EventoHandler = `on${Capitalize<Evento>}`;
// "onClick" | "onScroll" | "onMousemove"

// Pattern matching
type RutaAPI = `/api/${string}`;
type RutaUsuario = `/api/users/${number}`;

function navegar(ruta: RutaAPI): void {
  // ...
}

navegar("/api/products"); // ✅
navegar("/api/users/123"); // ✅
navegar("/products"); // ❌ Error
```

### 3. Mapped Types Avanzados

```typescript
// Hacer todas las propiedades readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Hacer todas las propiedades opcionales y nullable
type PartialNullable<T> = {
  [P in keyof T]?: T[P] | null;
};

// Remover propiedades específicas
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

### 4. Decoradores

Los decoradores permiten agregar metadatos y modificar clases, métodos y propiedades:

```typescript
// Decorador de método
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Llamando método ${propertyKey} con argumentos:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`Resultado:`, resultado);
    return resultado;
  };
  
  return descriptor;
}

class Calculadora {
  @Log
  sumar(a: number, b: number): number {
    return a + b;
  }
}
```

---

## 🌐 APIs: Consumo y Creación

<div align="center">

![REST API](https://img.shields.io/badge/REST-API-FF6F00?style=flat-square&logo=rest&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Fetch API](https://img.shields.io/badge/Fetch-API-FF6F00?style=flat-square)

</div>

### ¿Qué es una API?

Una **API (Application Programming Interface)** es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. En el contexto web, las APIs REST son las más comunes.

#### Comparativa de Estilos de API

| Estilo | Badge | Descripción | Cuándo Usar | Ejemplo |
|--------|-------|-------------|-------------|---------|
| **REST** | ![REST](https://img.shields.io/badge/REST-FF6F00?logo=rest&logoColor=white) | Representational State Transfer | APIs web estándar, CRUD | `/api/users/123` |
| **GraphQL** | ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white) | Query language para APIs | Datos complejos, múltiples fuentes | Query con campos específicos |
| **gRPC** | ![gRPC](https://img.shields.io/badge/gRPC-4285F4?logo=grpc&logoColor=white) | Remote Procedure Calls | Microservicios, alta performance | Protocolo binario |
| **SOAP** | ![SOAP](https://img.shields.io/badge/SOAP-FF6600?logo=soap&logoColor=white) | Simple Object Access Protocol | Enterprise, transacciones críticas | XML sobre HTTP |

### Métodos HTTP Comunes

| Método | Badge | Propósito | Idempotente | Ejemplo |
|--------|-------|-----------|-------------|---------|
| **GET** | ![GET](https://img.shields.io/badge/GET-61DAFB?style=flat-square) | Obtener datos | Sí | `GET /api/users` |
| **POST** | ![POST](https://img.shields.io/badge/POST-4CAF50?style=flat-square) | Crear nuevo recurso | No | `POST /api/users` |
| **PUT** | ![PUT](https://img.shields.io/badge/PUT-FF9800?style=flat-square) | Actualizar completo | Sí | `PUT /api/users/123` |
| **PATCH** | ![PATCH](https://img.shields.io/badge/PATCH-9C27B0?style=flat-square) | Actualizar parcial | No | `PATCH /api/users/123` |
| **DELETE** | ![DELETE](https://img.shields.io/badge/DELETE-F44336?style=flat-square) | Eliminar recurso | Sí | `DELETE /api/users/123` |

### Consumir APIs con TypeScript

#### Ejemplo 1: Fetch API Nativo

```typescript
// Definir tipos para la respuesta de la API
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

interface RespuestaAPI {
  data: Usuario[];
  total: number;
}

// Función tipada para consumir API
async function obtenerUsuarios(): Promise<Usuario[]> {
  try {
    const respuesta = await fetch("https://api.ejemplo.com/usuarios");
    
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    
    const datos: RespuestaAPI = await respuesta.json();
    return datos.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
}

// Uso
obtenerUsuarios()
  .then(usuarios => console.log(usuarios))
  .catch(error => console.error(error));
```

#### Ejemplo 2: Axios con TypeScript

![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)

```typescript
import axios, { AxiosResponse } from "axios";

// Configurar cliente Axios tipado
const apiCliente = axios.create({
  baseURL: "https://api.ejemplo.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

// Tipos para las respuestas
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

// Servicio tipado
class ProductoService {
  async obtenerTodos(): Promise<Producto[]> {
    const respuesta: AxiosResponse<Producto[]> = await apiCliente.get("/productos");
    return respuesta.data;
  }
  
  async obtenerPorId(id: number): Promise<Producto> {
    const respuesta: AxiosResponse<Producto> = await apiCliente.get(`/productos/${id}`);
    return respuesta.data;
  }
  
  async crear(producto: Omit<Producto, "id">): Promise<Producto> {
    const respuesta: AxiosResponse<Producto> = await apiCliente.post("/productos", producto);
    return respuesta.data;
  }
  
  async actualizar(id: number, producto: Partial<Producto>): Promise<Producto> {
    const respuesta: AxiosResponse<Producto> = await apiCliente.patch(`/productos/${id}`, producto);
    return respuesta.data;
  }
  
  async eliminar(id: number): Promise<void> {
    await apiCliente.delete(`/productos/${id}`);
  }
}

// Uso
const productoService = new ProductoService();

async function ejemplo() {
  try {
    // Obtener todos los productos
    const productos = await productoService.obtenerTodos();
    console.log("Productos:", productos);
    
    // Crear nuevo producto
    const nuevoProducto = await productoService.crear({
      nombre: "Laptop",
      precio: 999.99,
      categoria: "Electrónica"
    });
    console.log("Producto creado:", nuevoProducto);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

### Crear API REST con Express y TypeScript

<div align="center">

![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

</div>

#### Configuración Inicial

```bash
npm install express
npm install -D @types/express
npm install cors dotenv
npm install -D @types/cors
```

#### Estructura del Proyecto

```
src/
  controllers/
    usuario.controller.ts
  models/
    usuario.model.ts
  routes/
    usuario.routes.ts
  middleware/
    error.middleware.ts
    validation.middleware.ts
  app.ts
  server.ts
```

#### Ejemplo Completo: API de Usuarios

```typescript
// src/models/usuario.model.ts
export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
  fechaCreacion: Date;
}

export interface CrearUsuarioDTO {
  nombre: string;
  email: string;
}

export interface ActualizarUsuarioDTO {
  nombre?: string;
  email?: string;
  activo?: boolean;
}
```

```typescript
// src/controllers/usuario.controller.ts
import { Request, Response } from "express";
import { Usuario, CrearUsuarioDTO, ActualizarUsuarioDTO } from "../models/usuario.model";

// Base de datos simulada
let usuarios: Usuario[] = [];
let siguienteId = 1;

export class UsuarioController {
  // GET /api/usuarios
  static obtenerTodos(req: Request, res: Response<Usuario[]>): void {
    res.json(usuarios);
  }
  
  // GET /api/usuarios/:id
  static obtenerPorId(req: Request<{ id: string }>, res: Response<Usuario | { error: string }>): void {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    
    res.json(usuario);
  }
  
  // POST /api/usuarios
  static crear(req: Request<{}, Usuario, CrearUsuarioDTO>, res: Response<Usuario>): void {
    const nuevoUsuario: Usuario = {
      id: siguienteId++,
      ...req.body,
      activo: true,
      fechaCreacion: new Date()
    };
    
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
  }
  
  // PUT /api/usuarios/:id
  static actualizar(
    req: Request<{ id: string }, Usuario, ActualizarUsuarioDTO>,
    res: Response<Usuario | { error: string }>
  ): void {
    const id = parseInt(req.params.id);
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    
    usuarios[indice] = { ...usuarios[indice], ...req.body };
    res.json(usuarios[indice]);
  }
  
  // DELETE /api/usuarios/:id
  static eliminar(req: Request<{ id: string }>, res: Response<{ mensaje: string } | { error: string }>): void {
    const id = parseInt(req.params.id);
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    
    usuarios.splice(indice, 1);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  }
}
```

```typescript
// src/routes/usuario.routes.ts
import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const router = Router();

router.get("/", UsuarioController.obtenerTodos);
router.get("/:id", UsuarioController.obtenerPorId);
router.post("/", UsuarioController.crear);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;
```

```typescript
// src/app.ts
import express, { Application } from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/usuarios", usuarioRoutes);

// Ruta de salud
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

export default app;
```

```typescript
// src/server.ts
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
```

---

## 🗄️ ORMs: Implementación y Uso

<div align="center">

![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-7928CA?style=for-the-badge&logo=drizzle&logoColor=white)

![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

</div>

### ¿Qué es un ORM?

Un **ORM (Object-Relational Mapping)** es una técnica de programación que permite convertir datos entre sistemas incompatibles usando programación orientada a objetos. En términos simples, un ORM te permite trabajar con bases de datos usando objetos y clases en lugar de escribir SQL directamente.

#### Ventajas y Desventajas de ORMs

| Aspecto | Ventajas | Desventajas |
|---------|----------|-------------|
| **Productividad** | ✅ Menos código, desarrollo más rápido | ❌ Curva de aprendizaje |
| **Mantenibilidad** | ✅ Código más limpio y organizado | ❌ Abstracción puede ocultar problemas |
| **Portabilidad** | ✅ Cambiar de BD sin cambiar código | ❌ Puede generar SQL ineficiente |
| **Type Safety** | ✅ TypeScript proporciona tipos seguros | ❌ Configuración inicial compleja |
| **Migraciones** | ✅ Versionado de esquemas | ❌ Migraciones pueden ser complejas |

### Comparativa de ORMs Populares para TypeScript

| ORM | Badge | Popularidad | Type Safety | Migraciones | Curva Aprendizaje | Mejor Para |
|-----|-------|------------|-------------|-------------|-------------------|------------|
| **TypeORM** | ![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?logo=typeorm&logoColor=white) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Nativo | Media | Proyectos grandes, NestJS |
| **Prisma** | ![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=Prisma&logoColor=white) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Nativo | Baja | Proyectos nuevos, type safety |
| **Sequelize** | ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=white) | ⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Nativo | Media | Proyectos legacy, MySQL |
| **MikroORM** | ![MikroORM](https://img.shields.io/badge/MikroORM-000000?logo=mikroorm&logoColor=white) | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Nativo | Alta | Proyectos complejos, performance |
| **Drizzle** | ![Drizzle](https://img.shields.io/badge/Drizzle-7928CA?logo=drizzle&logoColor=white) | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Nativo | Media | Type safety máximo, ligero |

### TypeORM con TypeScript

![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?logo=typeorm&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

#### Instalación

```bash
npm install typeorm reflect-metadata
npm install mysql2  # o pg, sqlite3, etc.
npm install -D @types/node
```

#### Configuración

```typescript
// src/data-source.ts
import { DataSource } from "typeorm";
import { Usuario } from "./entities/Usuario";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "mi_base_datos",
  synchronize: true, // Solo en desarrollo
  logging: true,
  entities: [Usuario],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscribers/**/*.ts"]
});
```

#### Entidad

```typescript
// src/entities/Usuario.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ type: "varchar", length: 100 })
  nombre!: string;
  
  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;
  
  @Column({ type: "boolean", default: true })
  activo!: boolean;
  
  @CreateDateColumn()
  fechaCreacion!: Date;
  
  @UpdateDateColumn()
  fechaActualizacion!: Date;
}
```

#### Uso en el Controlador

```typescript
// src/controllers/usuario.controller.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuario";

export class UsuarioController {
  private static usuarioRepository = AppDataSource.getRepository(Usuario);
  
  static async obtenerTodos(req: Request, res: Response<Usuario[]>): Promise<void> {
    const usuarios = await this.usuarioRepository.find();
    res.json(usuarios);
  }
  
  static async obtenerPorId(req: Request<{ id: string }>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    
    res.json(usuario);
  }
  
  static async crear(req: Request<{}, Usuario, Partial<Usuario>>, res: Response): Promise<void> {
    const nuevoUsuario = this.usuarioRepository.create(req.body);
    const usuarioGuardado = await this.usuarioRepository.save(nuevoUsuario);
    res.status(201).json(usuarioGuardado);
  }
  
  static async actualizar(req: Request<{ id: string }, Usuario, Partial<Usuario>>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    await this.usuarioRepository.update(id, req.body);
    const usuarioActualizado = await this.usuarioRepository.findOne({ where: { id } });
    res.json(usuarioActualizado!);
  }
  
  static async eliminar(req: Request<{ id: string }>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    await this.usuarioRepository.delete(id);
    res.json({ mensaje: "Usuario eliminado correctamente" });
  }
}
```

### Prisma con TypeScript

![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=Prisma&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

#### Instalación

```bash
npm install prisma @prisma/client
npm install -D prisma
npx prisma init
```

#### Schema Definition

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id                Int       @id @default(autoincrement())
  nombre            String    @db.VarChar(100)
  email             String    @unique @db.VarChar(255)
  activo            Boolean   @default(true)
  fechaCreacion     DateTime  @default(now())
  fechaActualizacion DateTime @updatedAt
  
  // Relaciones
  posts             Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  titulo    String
  contenido String   @db.Text
  autorId   Int
  autor     Usuario  @relation(fields: [autorId], references: [id])
  createdAt DateTime @default(now())
}
```

#### Generar Cliente

```bash
npx prisma generate
npx prisma migrate dev --name init
```

#### Uso en el Controlador

```typescript
// src/controllers/usuario.controller.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UsuarioController {
  static async obtenerTodos(req: Request, res: Response): Promise<void> {
    const usuarios = await prisma.usuario.findMany({
      include: { posts: true } // Incluir relaciones
    });
    res.json(usuarios);
  }
  
  static async obtenerPorId(req: Request<{ id: string }>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      include: { posts: true }
    });
    
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    
    res.json(usuario);
  }
  
  static async crear(req: Request, res: Response): Promise<void> {
    const nuevoUsuario = await prisma.usuario.create({
      data: req.body
    });
    res.status(201).json(nuevoUsuario);
  }
  
  static async actualizar(req: Request<{ id: string }>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    const usuarioActualizado = await prisma.usuario.update({
      where: { id },
      data: req.body
    });
    res.json(usuarioActualizado);
  }
  
  static async eliminar(req: Request<{ id: string }>, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    await prisma.usuario.delete({
      where: { id }
    });
    res.json({ mensaje: "Usuario eliminado correctamente" });
  }
}
```

### Comparativa: TypeORM vs Prisma

| Característica | TypeORM ![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?logo=typeorm&logoColor=white) | Prisma ![Prisma](https://img.shields.io/badge/Prisma-3982CE?logo=Prisma&logoColor=white) |
|---------------|---------|--------|
| **Type Safety** | Bueno (con decoradores) | Excelente (cliente generado) |
| **Migraciones** | TypeORM migrations | Prisma Migrate |
| **Query Builder** | ✅ Nativo | ✅ Nativo |
| **Relaciones** | Decoradores | Schema definition |
| **Performance** | Bueno | Excelente |
| **Comunidad** | Muy grande | En crecimiento |
| **Documentación** | Completa | Excelente |
| **Mejor para** | Proyectos grandes, NestJS | Proyectos nuevos, type safety |

---

## 🏗️ Principios y Buenas Prácticas

<div align="center">

![SOLID](https://img.shields.io/badge/SOLID-Principles-FF6F00?style=for-the-badge)
![DRY](https://img.shields.io/badge/DRY-Don't%20Repeat%20Yourself-4CAF50?style=for-the-badge)
![KISS](https://img.shields.io/badge/KISS-Keep%20It%20Simple-2196F3?style=for-the-badge)
![YAGNI](https://img.shields.io/badge/YAGNI-You%20Aren't%20Gonna%20Need%20It-9C27B0?style=for-the-badge)

</div>

### Principios SOLID

#### 1. Single Responsibility Principle (SRP)
Una clase debe tener una sola razón para cambiar.

```typescript
// ❌ Mal
class Usuario {
  guardar() { /* ... */ }
  enviarEmail() { /* ... */ }
  generarReporte() { /* ... */ }
}

// ✅ Bien
class Usuario {
  // Solo maneja datos del usuario
}

class UsuarioRepository {
  guardar(usuario: Usuario) { /* ... */ }
}

class EmailService {
  enviarEmail(usuario: Usuario) { /* ... */ }
}

class ReporteService {
  generarReporte(usuario: Usuario) { /* ... */ }
}
```

#### 2. Open/Closed Principle (OCP)
Abierto para extensión, cerrado para modificación.

```typescript
// ✅ Usando interfaces y polimorfismo
interface Descuento {
  calcular(precio: number): number;
}

class DescuentoEstudiante implements Descuento {
  calcular(precio: number): number {
    return precio * 0.9;
  }
}

class DescuentoVIP implements Descuento {
  calcular(precio: number): number {
    return precio * 0.8;
  }
}

class CalculadoraPrecio {
  calcularPrecioFinal(precio: number, descuento: Descuento): number {
    return descuento.calcular(precio);
  }
}
```

#### 3. Liskov Substitution Principle (LSP)
Las clases derivadas deben ser sustituibles por sus clases base.

```typescript
// ✅ Las subclases pueden reemplazar a la clase base
class Animal {
  hacerSonido(): void {
    console.log("Sonido genérico");
  }
}

class Perro extends Animal {
  hacerSonido(): void {
    console.log("Guau guau");
  }
}

class Gato extends Animal {
  hacerSonido(): void {
    console.log("Miau");
  }
}

function hacerSonarAnimal(animal: Animal): void {
  animal.hacerSonido(); // Funciona con cualquier subclase
}
```

#### 4. Interface Segregation Principle (ISP)
Los clientes no deben depender de interfaces que no usan.

```typescript
// ❌ Mal - interfaz muy grande
interface Trabajador {
  trabajar(): void;
  comer(): void;
  dormir(): void;
}

// ✅ Bien - interfaces segregadas
interface Trabajador {
  trabajar(): void;
}

interface SerVivo {
  comer(): void;
  dormir(): void;
}

class Empleado implements Trabajador, SerVivo {
  trabajar() { /* ... */ }
  comer() { /* ... */ }
  dormir() { /* ... */ }
}
```

#### 5. Dependency Inversion Principle (DIP)
Depender de abstracciones, no de concreciones.

```typescript
// ✅ Depender de interfaces, no de clases concretas
interface RepositorioUsuario {
  encontrarPorId(id: number): Promise<Usuario>;
  guardar(usuario: Usuario): Promise<Usuario>;
}

class UsuarioService {
  constructor(private repositorio: RepositorioUsuario) {}
  
  async obtenerUsuario(id: number): Promise<Usuario> {
    return await this.repositorio.encontrarPorId(id);
  }
}

// Puede usar TypeORM, Prisma, o cualquier implementación
class TypeORMUsuarioRepository implements RepositorioUsuario {
  // Implementación con TypeORM
}

class PrismaUsuarioRepository implements RepositorioUsuario {
  // Implementación con Prisma
}
```

### Otros Principios Importantes

| Principio | Descripción | Ejemplo TypeScript |
|-----------|-------------|-------------------|
| **DRY** (Don't Repeat Yourself) | No repetir código | Usar funciones y tipos reutilizables |
| **KISS** (Keep It Simple, Stupid) | Mantener simple | Evitar complejidad innecesaria |
| **YAGNI** (You Aren't Gonna Need It) | No agregar funcionalidad anticipada | Implementar solo lo necesario |
| **Separation of Concerns** | Separar responsabilidades | Controllers, Services, Repositories |

---

## 📂 Estructura del Repositorio

<div align="center">

![Structure](https://img.shields.io/badge/Estructura-Organizada-4CAF50?style=for-the-badge)
![Folders](https://img.shields.io/badge/Carpetas-Módulos-2196F3?style=for-the-badge)

</div>

```
TypeScript/
├── src/
│   ├── 01-fundamentos/
│   │   ├── tipos-basicos/
│   │   │   ├── tipos-basicos.ts
│   │   │   └── ejercicios.ts
│   │   ├── 02-objetos.ts
│   │   ├── 03-arrays.ts
│   │   ├── 04-funciones.ts
│   │   └── 05-interfaces.ts
│   ├── 02-intermedio/
│   │   ├── genericos/
│   │   ├── clases/
│   │   ├── modulos/
│   │   └── utility-types/
│   ├── 03-avanzado/
│   │   ├── conditional-types/
│   │   ├── template-literals/
│   │   ├── decoradores/
│   │   └── mapped-types/
│   ├── 04-apis/
│   │   ├── consumo/
│   │   │   ├── fetch-api.ts
│   │   │   └── axios-example.ts
│   │   └── creacion/
│   │       ├── express-api/
│   │       └── nestjs-api/
│   ├── 05-orms/
│   │   ├── typeorm/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── migrations/
│   │   └── prisma/
│   │       ├── schema.prisma
│   │       └── prisma-client/
│   ├── 06-proyectos/
│   │   ├── api-tareas/
│   │   ├── blog-api/
│   │   └── ecommerce-backend/
│   └── 07-principios-solid/
│       ├── single-responsibility/
│       ├── open-closed/
│       └── dependency-inversion/
├── tests/
├── docs/
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Ejemplos Prácticos

<div align="center">

![Examples](https://img.shields.io/badge/Ejemplos-Prácticos-4CAF50?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Real World](https://img.shields.io/badge/Real%20World-Examples-FF6F00?style=for-the-badge)

</div>

### Ejemplo 1: Sistema de Gestión de Tareas

![Todo App](https://img.shields.io/badge/Todo-App-4CAF50?style=flat-square)

```typescript
// Tipos e interfaces
interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  completada: boolean;
  fechaCreacion: Date;
  fechaVencimiento?: Date;
  prioridad: "baja" | "media" | "alta";
}

interface CrearTareaDTO {
  titulo: string;
  descripcion: string;
  fechaVencimiento?: Date;
  prioridad: "baja" | "media" | "alta";
}

// Servicio de tareas
class TareaService {
  private tareas: Tarea[] = [];
  
  crear(dto: CrearTareaDTO): Tarea {
    const nuevaTarea: Tarea = {
      id: crypto.randomUUID(),
      ...dto,
      completada: false,
      fechaCreacion: new Date()
    };
    
    this.tareas.push(nuevaTarea);
    return nuevaTarea;
  }
  
  obtenerTodas(): Tarea[] {
    return this.tareas;
  }
  
  obtenerPorId(id: string): Tarea | undefined {
    return this.tareas.find(t => t.id === id);
  }
  
  completar(id: string): Tarea | null {
    const tarea = this.obtenerPorId(id);
    if (!tarea) return null;
    
    tarea.completada = true;
    return tarea;
  }
  
  eliminar(id: string): boolean {
    const indice = this.tareas.findIndex(t => t.id === id);
    if (indice === -1) return false;
    
    this.tareas.splice(indice, 1);
    return true;
  }
  
  obtenerPorPrioridad(prioridad: Tarea["prioridad"]): Tarea[] {
    return this.tareas.filter(t => t.prioridad === prioridad);
  }
}
```

### Ejemplo 2: Cliente API Tipado para GitHub

![GitHub API](https://img.shields.io/badge/GitHub-API-181717?logo=github&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-FF6F00?style=flat-square)

```typescript
// Tipos para la API de GitHub
interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

// Cliente API tipado
class GitHubAPI {
  private baseURL = "https://api.github.com";
  
  async obtenerUsuario(username: string): Promise<GitHubUser> {
    const respuesta = await fetch(`${this.baseURL}/users/${username}`);
    
    if (!respuesta.ok) {
      throw new Error(`Usuario no encontrado: ${username}`);
    }
    
    return await respuesta.json();
  }
  
  async obtenerRepositorios(username: string): Promise<GitHubRepo[]> {
    const respuesta = await fetch(`${this.baseURL}/users/${username}/repos`);
    
    if (!respuesta.ok) {
      throw new Error(`Error al obtener repositorios de ${username}`);
    }
    
    return await respuesta.json();
  }
  
  async obtenerRepositoriosPorLenguaje(
    username: string,
    lenguaje: string
  ): Promise<GitHubRepo[]> {
    const repos = await this.obtenerRepositorios(username);
    return repos.filter(repo => repo.language === lenguaje);
  }
}

// Uso
const github = new GitHubAPI();

async function ejemplo() {
  try {
    const usuario = await github.obtenerUsuario("octocat");
    console.log(`Usuario: ${usuario.name}`);
    console.log(`Repositorios: ${usuario.public_repos}`);
    
    const reposTypeScript = await github.obtenerRepositoriosPorLenguaje("octocat", "TypeScript");
    console.log(`Repositorios TypeScript: ${reposTypeScript.length}`);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

## 📝 Progreso del Curso

- [x] Configuración inicial del proyecto
- [ ] Fundamentos de TypeScript
  - [x] Tipos básicos
  - [x] Objetos y arrays
  - [x] Funciones
  - [x] Interfaces
  - [ ] Clases y POO
- [ ] TypeScript Intermedio
  - [ ] Genéricos
  - [ ] Union e Intersection types
  - [ ] Type Guards
  - [ ] Utility Types
- [ ] TypeScript Avanzado
  - [ ] Conditional Types
  - [ ] Template Literal Types
  - [ ] Decoradores
  - [ ] Mapped Types avanzados
- [ ] APIs
  - [ ] Consumo de APIs
  - [ ] Creación de API REST
  - [ ] Proyecto práctico
- [ ] ORMs
  - [ ] TypeORM
  - [ ] Prisma
  - [ ] Proyecto con base de datos
- [ ] Principios SOLID
- [ ] Patrones de diseño
- [ ] Proyectos finales

---

## 🎯 Recursos Adicionales

### Documentación Oficial

![TypeScript](https://img.shields.io/badge/TypeScript-Documentation-3178C6?logo=typescript&logoColor=white)

- ![Handbook](https://img.shields.io/badge/Handbook-3178C6?logo=typescript&logoColor=white) [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- ![Deep Dive](https://img.shields.io/badge/Deep%20Dive-3178C6?logo=typescript&logoColor=white) [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- ![Cheat Sheet](https://img.shields.io/badge/Cheat%20Sheet-3178C6?logo=typescript&logoColor=white) [TypeScript Cheat Sheet](https://www.typescriptlang.org/cheatsheets)

### Herramientas

![Tools](https://img.shields.io/badge/Tools-FF6F00?style=flat-square)

- ![Playground](https://img.shields.io/badge/Playground-3178C6?logo=typescript&logoColor=white) [TypeScript Playground](https://www.typescriptlang.org/play) - Prueba código online
- ![Challenges](https://img.shields.io/badge/Type%20Challenges-181717?logo=github&logoColor=white) [Type Challenges](https://github.com/type-challenges/type-challenges) - Ejercicios avanzados

### Comunidad

![Community](https://img.shields.io/badge/Community-5865F2?style=flat-square&logo=discord&logoColor=white)

- ![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white) [TypeScript Discord](https://discord.gg/typescript)
- ![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white) [Stack Overflow - TypeScript](https://stackoverflow.com/questions/tagged/typescript)
- ![Reddit](https://img.shields.io/badge/Reddit-FF4500?logo=reddit&logoColor=white) [r/typescript](https://www.reddit.com/r/typescript/)

---

## 🤝 Contribuciones

Este es un repositorio de aprendizaje personal, pero sugerencias y mejoras son bienvenidas. Si encuentras errores o tienes ideas para mejorar la documentación, no dudes en abrir un issue o pull request.

---

## 📄 Licencia

MIT License - Siéntete libre de usar este material para tu aprendizaje.

---

## 👨‍💻 Autor

**EdgarGmz**

- GitHub: [@EdgarGmz](https://github.com/EdgarGmz)
- Repositorio: [TypeScript Course](https://github.com/EdgarGmz/TypeScript)

---

<div align="center">

**¡Feliz aprendizaje con TypeScript! 🚀**

*Última actualización: 2024*

</div>
