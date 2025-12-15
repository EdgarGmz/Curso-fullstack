# 📘 Curso Completo de C#

<div align="center">

![C#](https://img.shields.io/badge/C%23-12.0-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![ASP.NET](https://img.shields.io/badge/ASP.NET-512BD4?style=for-the-badge&logo=asp.net&logoColor=white)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de C# desde conceptos básicos hasta avanzados, con enfoque en programación orientada a objetos, APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

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
# 1. Verificar .NET SDK instalado (versión 8.0 o superior)
dotnet --version

# 2. Crear nuevo proyecto de consola
dotnet new console -n MiPrimerProyecto

# 3. Navegar al proyecto
cd MiPrimerProyecto

# 4. Ejecutar el proyecto
dotnet run
```

### Estructura de un Proyecto C#

```
MiProyecto/
├── Program.cs          # Punto de entrada
├── MiProyecto.csproj  # Archivo de proyecto
└── obj/               # Archivos de compilación
```

---

## 📋 Requisitos Mínimos

- **.NET SDK 8.0** o superior
- **Editor de código**: Visual Studio, VS Code, o Rider
- **Conocimientos básicos**: Lógica de programación (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar .NET SDK
- [ ] Configurar editor de código
- [ ] Crear primer proyecto
- [ ] Entender estructura de proyecto

**📚 Conceptos Clave:**

##### **Program.cs - Punto de Entrada**
**Definición:** Archivo principal donde comienza la ejecución del programa. Contiene el método `Main`.

**Ejemplo:**
```csharp
// Program.cs
using System;

namespace MiProyecto
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("¡Hola, C#!");
        }
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto C#"`

#### Paso 2: Tipos de Datos Básicos
- [ ] Tipos primitivos (int, string, bool, double)
- [ ] Variables y constantes
- [ ] Conversión de tipos
- [ ] Tipos nullable

**📚 Conceptos Clave:**

##### **Tipos Primitivos**
**Definición:** Tipos de datos básicos proporcionados por el lenguaje.

**Ejemplo:**
```csharp
// Tipos numéricos
int edad = 25;
double precio = 99.99;
decimal salario = 50000.50m;

// Texto
string nombre = "Juan";
char inicial = 'J';

// Booleano
bool esActivo = true;

// Tipos nullable (pueden ser null)
int? numero = null;
string? texto = null;
```

**📝 Ejercicios:**
1. Crear variables para almacenar información personal
2. Realizar operaciones matemáticas básicas
3. Concatenar strings con interpolación

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de datos básicos y variables"`

#### Paso 3: Operadores y Expresiones
- [ ] Operadores aritméticos
- [ ] Operadores de comparación
- [ ] Operadores lógicos
- [ ] Operadores de asignación

**Ejemplo:**
```csharp
int a = 10;
int b = 5;

// Aritméticos
int suma = a + b;        // 15
int resta = a - b;        // 5
int multiplicacion = a * b; // 50
int division = a / b;    // 2

// Comparación
bool esMayor = a > b;    // true
bool esIgual = a == b;   // false

// Lógicos
bool resultado = (a > 5) && (b < 10); // true
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operadores y expresiones"`

#### Paso 4: Estructuras de Control
- [ ] if/else
- [ ] switch/case
- [ ] for, while, do-while
- [ ] foreach

**Ejemplo:**
```csharp
// if/else
int edad = 18;
if (edad >= 18)
{
    Console.WriteLine("Es mayor de edad");
}
else
{
    Console.WriteLine("Es menor de edad");
}

// switch
string dia = "Lunes";
switch (dia)
{
    case "Lunes":
        Console.WriteLine("Inicio de semana");
        break;
    case "Viernes":
        Console.WriteLine("Fin de semana");
        break;
    default:
        Console.WriteLine("Día normal");
        break;
}

// foreach
string[] frutas = { "Manzana", "Banana", "Naranja" };
foreach (string fruta in frutas)
{
    Console.WriteLine(fruta);
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de control"`

#### Paso 5: Arrays y Colecciones
- [ ] Arrays unidimensionales y multidimensionales
- [ ] List<T>
- [ ] Dictionary<TKey, TValue>
- [ ] LINQ básico

**Ejemplo:**
```csharp
// Array
int[] numeros = { 1, 2, 3, 4, 5 };

// List
List<string> nombres = new List<string>();
nombres.Add("Juan");
nombres.Add("María");

// Dictionary
Dictionary<string, int> edades = new Dictionary<string, int>();
edades["Juan"] = 25;
edades["María"] = 30;

// LINQ
var mayores = numeros.Where(n => n > 3).ToList();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: arrays y colecciones"`

---

### 📍 Fase 2: Programación Orientada a Objetos (Intermedio)

#### Paso 6: Clases y Objetos
- [ ] Definir clases
- [ ] Crear objetos (instancias)
- [ ] Propiedades y campos
- [ ] Métodos

**📚 Conceptos Clave:**

##### **Clase**
**Definición:** Plantilla para crear objetos. Define propiedades y métodos.

**Ejemplo:**
```csharp
public class Persona
{
    // Campos privados
    private string nombre;
    private int edad;
    
    // Propiedades públicas
    public string Nombre
    {
        get { return nombre; }
        set { nombre = value; }
    }
    
    public int Edad
    {
        get { return edad; }
        set { edad = value; }
    }
    
    // Método
    public void Presentarse()
    {
        Console.WriteLine($"Soy {Nombre}, tengo {Edad} años");
    }
}

// Uso
Persona persona = new Persona();
persona.Nombre = "Juan";
persona.Edad = 25;
persona.Presentarse();
```

**📝 Ejercicios:**
1. Crear clase `Producto` con propiedades y métodos
2. Crear clase `CuentaBancaria` con métodos de depósito y retiro
3. Implementar validaciones en propiedades

> 💡 **Sugerencia de Commit**: `git commit -m "feat: clases y objetos básicos"`

#### Paso 7: Constructores y Destructores
- [ ] Constructores
- [ ] Constructores con parámetros
- [ ] Inicializadores de objeto
- [ ] Destructores

**Ejemplo:**
```csharp
public class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
    
    // Constructor por defecto
    public Persona()
    {
        Nombre = "Sin nombre";
        Edad = 0;
    }
    
    // Constructor con parámetros
    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }
}

// Uso
Persona persona1 = new Persona();
Persona persona2 = new Persona("Juan", 25);
Persona persona3 = new Persona { Nombre = "María", Edad = 30 };
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: constructores y destructores"`

#### Paso 8: Modificadores de Acceso
- [ ] public
- [ ] private
- [ ] protected
- [ ] internal

**Ejemplo:**
```csharp
public class Banco
{
    private decimal saldo = 0;  // Solo accesible dentro de la clase
    
    public decimal ObtenerSaldo()  // Accesible desde cualquier lugar
    {
        return saldo;
    }
    
    protected void MetodoProtegido()  // Accesible en la clase y subclases
    {
        // ...
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: modificadores de acceso"`

#### Paso 9: Herencia
- [ ] Herencia simple
- [ ] base keyword
- [ ] Clases abstractas
- [ ] Métodos virtuales y override

**📚 Conceptos Clave:**

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra.

**Ejemplo:**
```csharp
// Clase base
public class Animal
{
    public string Nombre { get; set; }
    
    public virtual void HacerSonido()
    {
        Console.WriteLine("Sonido genérico");
    }
}

// Clase derivada
public class Perro : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("Guau guau");
    }
    
    public void Correr()
    {
        Console.WriteLine($"{Nombre} está corriendo");
    }
}

// Uso
Perro perro = new Perro { Nombre = "Max" };
perro.HacerSonido();  // "Guau guau"
perro.Correr();       // "Max está corriendo"
```

**📝 Ejercicios:**
1. Crear jerarquía de clases: Vehiculo -> Auto, Moto
2. Implementar clases abstractas
3. Usar base para llamar métodos de la clase padre

> 💡 **Sugerencia de Commit**: `git commit -m "feat: herencia y polimorfismo"`

#### Paso 10: Interfaces
- [ ] Definir interfaces
- [ ] Implementar interfaces
- [ ] Interfaces múltiples
- [ ] IComparable, IEnumerable

**Ejemplo:**
```csharp
// Definir interfaz
public interface IVolador
{
    void Volar();
}

public interface INadador
{
    void Nadar();
}

// Implementar múltiples interfaces
public class Pato : IVolador, INadador
{
    public void Volar()
    {
        Console.WriteLine("El pato vuela");
    }
    
    public void Nadar()
    {
        Console.WriteLine("El pato nada");
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: interfaces"`

#### Paso 11: Polimorfismo
- [ ] Polimorfismo con herencia
- [ ] Polimorfismo con interfaces
- [ ] Métodos virtuales
- [ ] new vs override

**Ejemplo:**
```csharp
public class Forma
{
    public virtual double CalcularArea()
    {
        return 0;
    }
}

public class Circulo : Forma
{
    public double Radio { get; set; }
    
    public override double CalcularArea()
    {
        return Math.PI * Radio * Radio;
    }
}

public class Rectangulo : Forma
{
    public double Ancho { get; set; }
    public double Alto { get; set; }
    
    public override double CalcularArea()
    {
        return Ancho * Alto;
    }
}

// Polimorfismo en acción
List<Forma> formas = new List<Forma>
{
    new Circulo { Radio = 5 },
    new Rectangulo { Ancho = 4, Alto = 6 }
};

foreach (var forma in formas)
{
    Console.WriteLine($"Área: {forma.CalcularArea()}");
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: polimorfismo avanzado"`

#### Paso 12: Encapsulamiento
- [ ] Propiedades auto-implementadas
- [ ] Propiedades con validación
- [ ] Propiedades de solo lectura
- [ ] Indexadores

**Ejemplo:**
```csharp
public class CuentaBancaria
{
    private decimal saldo;
    
    public decimal Saldo
    {
        get { return saldo; }
        private set  // Solo se puede modificar desde dentro de la clase
        {
            if (value >= 0)
                saldo = value;
            else
                throw new ArgumentException("El saldo no puede ser negativo");
        }
    }
    
    public void Depositar(decimal cantidad)
    {
        if (cantidad > 0)
            Saldo += cantidad;
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: encapsulamiento"`

---

### 📍 Fase 3: Características Avanzadas (Avanzado)

#### Paso 13: Genéricos (Generics)
- [ ] Clases genéricas
- [ ] Métodos genéricos
- [ ] Constraints (restricciones)
- [ ] Covarianza y contravarianza

**Ejemplo:**
```csharp
// Clase genérica
public class Contenedor<T>
{
    private List<T> items = new List<T>();
    
    public void Agregar(T item)
    {
        items.Add(item);
    }
    
    public T Obtener(int indice)
    {
        return items[indice];
    }
}

// Método genérico con constraint
public T ObtenerMaximo<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) > 0 ? a : b;
}

// Uso
var contenedor = new Contenedor<string>();
contenedor.Agregar("Hola");
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: genéricos"`

#### Paso 14: Delegados y Eventos
- [ ] Delegados
- [ ] Func y Action
- [ ] Eventos
- [ ] Lambda expressions

**Ejemplo:**
```csharp
// Delegado
public delegate void Notificacion(string mensaje);

public class Usuario
{
    public event Notificacion OnCambioNombre;
    
    private string nombre;
    public string Nombre
    {
        get => nombre;
        set
        {
            nombre = value;
            OnCambioNombre?.Invoke($"El nombre cambió a {value}");
        }
    }
}

// Uso con lambda
var usuario = new Usuario();
usuario.OnCambioNombre += (msg) => Console.WriteLine(msg);
usuario.Nombre = "Juan";
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: delegados y eventos"`

#### Paso 15: LINQ (Language Integrated Query)
- [ ] LINQ to Objects
- [ ] Métodos de extensión
- [ ] Expresiones lambda
- [ ] Query syntax vs Method syntax

**Ejemplo:**
```csharp
List<Persona> personas = new List<Persona>
{
    new Persona { Nombre = "Juan", Edad = 25 },
    new Persona { Nombre = "María", Edad = 30 },
    new Persona { Nombre = "Pedro", Edad = 20 }
};

// Method syntax
var mayores = personas
    .Where(p => p.Edad >= 25)
    .OrderBy(p => p.Nombre)
    .Select(p => p.Nombre)
    .ToList();

// Query syntax
var mayores2 = from p in personas
                where p.Edad >= 25
                orderby p.Nombre
                select p.Nombre;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: LINQ"`

---

### 📍 Fase 4: Consumo de APIs

#### Paso 16: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] Códigos de estado HTTP
- [ ] JSON serialization

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```csharp
// Modelo para deserializar JSON
public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Email { get; set; }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 17: HttpClient - Consumir APIs
- [ ] Crear instancia de HttpClient
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores

**Ejemplo:**
```csharp
using System.Net.Http;
using System.Text.Json;

public class ApiCliente
{
    private readonly HttpClient httpClient;
    
    public ApiCliente(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }
    
    public async Task<Usuario> ObtenerUsuarioAsync(int id)
    {
        var response = await httpClient.GetAsync($"api/usuarios/{id}");
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Usuario>(json);
    }
    
    public async Task<Usuario> CrearUsuarioAsync(Usuario usuario)
    {
        var json = JsonSerializer.Serialize(usuario);
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        var response = await httpClient.PostAsync("api/usuarios", content);
        response.EnsureSuccessStatusCode();
        
        var responseJson = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<Usuario>(responseJson);
    }
}
```

**📝 Ejercicios:**
1. Consumir API pública (JSONPlaceholder, GitHub API)
2. Implementar manejo de errores con try-catch
3. Crear servicio para múltiples endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con HttpClient"`

#### Paso 18: Async/Await
- [ ] Programación asíncrona
- [ ] Task y Task<T>
- [ ] async/await
- [ ] Manejo de excepciones asíncronas

**Ejemplo:**
```csharp
public async Task<List<Usuario>> ObtenerTodosLosUsuariosAsync()
{
    try
    {
        var response = await httpClient.GetAsync("api/usuarios");
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<List<Usuario>>(json);
    }
    catch (HttpRequestException ex)
    {
        Console.WriteLine($"Error al obtener usuarios: {ex.Message}");
        return new List<Usuario>();
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: programación asíncrona"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 19: Principio de Responsabilidad Única (SRP)
- [ ] ¿Qué es SRP?
- [ ] Identificar violaciones de SRP
- [ ] Refactorizar código para cumplir SRP

**📚 Conceptos Clave:**

##### **Single Responsibility Principle (SRP)**
**Definición:** Una clase debe tener una sola razón para cambiar. Cada clase debe tener una única responsabilidad.

**Ejemplo - ❌ Mal:**
```csharp
public class Usuario
{
    public void Guardar() { /* ... */ }
    public void EnviarEmail() { /* ... */ }
    public void GenerarReporte() { /* ... */ }
}
```

**Ejemplo - ✅ Bien:**
```csharp
// Separar responsabilidades
public class Usuario { /* Solo datos */ }

public class UsuarioRepository
{
    public void Guardar(Usuario usuario) { /* ... */ }
}

public class EmailService
{
    public void EnviarEmail(string email) { /* ... */ }
}

public class ReporteService
{
    public void GenerarReporte(Usuario usuario) { /* ... */ }
}
```

**📝 Ejercicios:**
1. Refactorizar clase que tiene múltiples responsabilidades
2. Crear servicios separados para cada responsabilidad
3. Aplicar SRP en proyecto existente

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP"`

#### Paso 20: Principio Abierto/Cerrado (OCP)
- [ ] ¿Qué es OCP?
- [ ] Extensión sin modificación
- [ ] Usar interfaces y herencia

**Ejemplo:**
```csharp
// Abierto para extensión, cerrado para modificación
public interface IDescuento
{
    decimal Calcular(decimal precio);
}

public class DescuentoEstudiante : IDescuento
{
    public decimal Calcular(decimal precio)
    {
        return precio * 0.9m; // 10% descuento
    }
}

public class DescuentoVIP : IDescuento
{
    public decimal Calcular(decimal precio)
    {
        return precio * 0.8m; // 20% descuento
    }
}

public class CalculadoraPrecio
{
    public decimal CalcularPrecioFinal(decimal precioBase, IDescuento descuento)
    {
        return descuento.Calcular(precioBase);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP"`

#### Paso 21: Principio de Sustitución de Liskov (LSP)
- [ ] ¿Qué es LSP?
- [ ] Contratos de clase base
- [ ] Precondiciones y postcondiciones

**Ejemplo:**
```csharp
// Las subclases deben poder reemplazar a la clase base
public class Animal
{
    public virtual void HacerSonido()
    {
        Console.WriteLine("Sonido genérico");
    }
}

public class Perro : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("Guau");
    }
}

public class Gato : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("Miau");
    }
}

// Cualquier subclase puede reemplazar a Animal
public void HacerSonarAnimal(Animal animal)
{
    animal.HacerSonido(); // Funciona con cualquier subclase
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio LSP"`

#### Paso 22: Principio de Segregación de Interfaces (ISP)
- [ ] ¿Qué es ISP?
- [ ] Interfaces específicas vs generales
- [ ] Evitar interfaces "gordas"

**Ejemplo:**
```csharp
// ❌ Mal: interfaz muy grande
public interface ITrabajador
{
    void Trabajar();
    void Comer();
    void Dormir();
}

// ✅ Bien: interfaces segregadas
public interface ITrabajador
{
    void Trabajar();
}

public interface ISerVivo
{
    void Comer();
    void Dormir();
}

public class Empleado : ITrabajador, ISerVivo
{
    public void Trabajar() { /* ... */ }
    public void Comer() { /* ... */ }
    public void Dormir() { /* ... */ }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio ISP"`

#### Paso 23: Principio de Inversión de Dependencias (DIP)
- [ ] ¿Qué es DIP?
- [ ] Depender de abstracciones
- [ ] Inyección de dependencias

**Ejemplo:**
```csharp
// Depender de interfaz, no de implementación concreta
public interface IRepositorioUsuario
{
    Usuario ObtenerPorId(int id);
    void Guardar(Usuario usuario);
}

public class UsuarioService
{
    private readonly IRepositorioUsuario repositorio;
    
    public UsuarioService(IRepositorioUsuario repositorio)
    {
        this.repositorio = repositorio; // Inyección de dependencia
    }
    
    public Usuario ObtenerUsuario(int id)
    {
        return repositorio.ObtenerPorId(id);
    }
}

// Implementaciones
public class RepositorioUsuarioMemoria : IRepositorioUsuario { /* ... */ }
public class RepositorioUsuarioBD : IRepositorioUsuario { /* ... */ }
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DIP"`

#### Paso 24: Principio YAGNI (You Aren't Gonna Need It)
- [ ] ¿Qué es YAGNI?
- [ ] Evitar sobre-ingeniería
- [ ] Implementar solo lo necesario

**📚 Conceptos Clave:**

##### **YAGNI (You Aren't Gonna Need It)**
**Definición:** No implementes funcionalidad hasta que realmente la necesites. Evita la sobre-ingeniería.

**Ejemplo:**
```csharp
// ❌ Mal: Implementar funcionalidad que no se necesita
public class Usuario
{
    public void EnviarEmail() { /* No se usa */ }
    public void GenerarPDF() { /* No se usa */ }
    public void ExportarExcel() { /* No se usa */ }
}

// ✅ Bien: Solo implementar lo necesario
public class Usuario
{
    public string Nombre { get; set; }
    public string Email { get; set; }
    // Solo agregar métodos cuando realmente se necesiten
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI"`

#### Paso 25: Principio KISS (Keep It Simple, Stupid)
- [ ] ¿Qué es KISS?
- [ ] Simplicidad sobre complejidad
- [ ] Código legible y mantenible

**Ejemplo:**
```csharp
// ❌ Mal: Solución compleja innecesaria
public int CalcularSuma(int[] numeros)
{
    return numeros.Aggregate(0, (acc, n) => acc + n, result => result);
}

// ✅ Bien: Solución simple y clara
public int CalcularSuma(int[] numeros)
{
    int suma = 0;
    foreach (int numero in numeros)
    {
        suma += numero;
    }
    return suma;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS"`

#### Paso 26: Principio DRY (Don't Repeat Yourself)
- [ ] ¿Qué es DRY?
- [ ] Identificar código duplicado
- [ ] Extraer métodos comunes

**Ejemplo:**
```csharp
// ❌ Mal: Código duplicado
public class Calculadora
{
    public int Sumar(int a, int b) { return a + b; }
    public int Restar(int a, int b) { return a - b; }
    public void ValidarNumero(int num)
    {
        if (num < 0) throw new ArgumentException("Número negativo");
    }
    public void ValidarNumero2(int num)
    {
        if (num < 0) throw new ArgumentException("Número negativo");
    }
}

// ✅ Bien: Eliminar duplicación
public class Calculadora
{
    public int Sumar(int a, int b) { return a + b; }
    public int Restar(int a, int b) { return a - b; }
    
    private void ValidarNumero(int num)
    {
        if (num < 0) throw new ArgumentException("Número negativo");
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```csharp
// Modelo
public class Tarea
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Descripcion { get; set; }
    public bool Completada { get; set; }
    public DateTime FechaCreacion { get; set; }
}

// Repositorio (SRP)
public interface IRepositorioTarea
{
    void Agregar(Tarea tarea);
    Tarea ObtenerPorId(int id);
    List<Tarea> ObtenerTodas();
    void Actualizar(Tarea tarea);
    void Eliminar(int id);
}

// Servicio
public class TareaService
{
    private readonly IRepositorioTarea repositorio;
    
    public TareaService(IRepositorioTarea repositorio)
    {
        this.repositorio = repositorio;
    }
    
    public void CompletarTarea(int id)
    {
        var tarea = repositorio.ObtenerPorId(id);
        if (tarea != null)
        {
            tarea.Completada = true;
            repositorio.Actualizar(tarea);
        }
    }
}
```

### Ejemplo 2: Cliente API para GitHub

```csharp
public class GitHubApiCliente
{
    private readonly HttpClient httpClient;
    
    public GitHubApiCliente(HttpClient httpClient)
    {
        this.httpClient = httpClient;
        httpClient.BaseAddress = new Uri("https://api.github.com/");
        httpClient.DefaultRequestHeaders.Add("User-Agent", "MiApp");
    }
    
    public async Task<UsuarioGitHub> ObtenerUsuarioAsync(string username)
    {
        var response = await httpClient.GetAsync($"users/{username}");
        response.EnsureSuccessStatusCode();
        
        var json = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<UsuarioGitHub>(json);
    }
}
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

- [Documentación oficial de C#](https://learn.microsoft.com/es-es/dotnet/csharp/)
- [.NET Documentation](https://learn.microsoft.com/es-es/dotnet/)
- [C# Coding Conventions](https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/coding-style/coding-conventions)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de C# desde principiante hasta experto.

