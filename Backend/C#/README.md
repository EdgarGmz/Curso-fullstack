# 🎯 C# Backend & POO - Guía Completa de Aprendizaje

![C#](https://img.shields.io/badge/C%23-10. 0+-purple. svg)
![. NET](https://img.shields.io/badge/.NET-8.0+-blue.svg)
![Backend](https://img.shields.io/badge/Focus-Backend-green.svg)
![POO](https://img.shields.io/badge/Paradigm-OOP-orange.svg)

## 📋 Índice

- [Introducción](#introducción)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estructura del Curso](#estructura-del-curso)
- [Temario](#temario)
- [Principios de Diseño](#principios-de-diseño)
- [Recursos Adicionales](#recursos-adicionales)

---

## 🎯 Introducción

Este curso está diseñado para llevarte desde los fundamentos de C# hasta el desarrollo backend profesional con .NET, con énfasis en Programación Orientada a Objetos (POO) y buenas prácticas de desarrollo empresarial.

### Metodología de Enseñanza

- **Pedagógica**: Explicaciones claras y progresivas
- **Práctica**: Ejemplos reales y casos de uso
- **Estructurada**: Desde lo básico hasta lo avanzado
- **Profesional**: Principios SOLID, YAGNI, KISS

---

## 🛠️ Configuración del Entorno

### 1. Instalación de . NET SDK

#### Windows

```powershell
# Descargar .NET SDK desde:  https://dotnet.microsoft.com/download
# Instalar el SDK 8.0 LTS o superior

# Verificar instalación
dotnet --version
dotnet --list-sdks
```

#### macOS

```bash
# Usando Homebrew
brew install --cask dotnet-sdk

# O descargar desde:  https://dotnet.microsoft.com/download

# Verificar instalación
dotnet --version
dotnet --list-sdks
```

#### Linux (Ubuntu/Debian)

```bash
# Agregar repositorio de Microsoft
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod. deb

# Instalar SDK
sudo apt-get update
sudo apt-get install -y dotnet-sdk-8.0

# Verificar instalación
dotnet --version
```

### 2. Configuración del Proyecto Base

```bash
# Crear carpeta del curso
mkdir CSharpBackendCourse
cd CSharpBackendCourse

# Crear solución
dotnet new sln -n CSharpBackendCourse

# Crear proyecto de consola para cada tema
dotnet new console -n Tema01Fundamentos
dotnet sln add Tema01Fundamentos/Tema01Fundamentos.csproj

# Crear proyecto de pruebas
dotnet new xunit -n Tests
dotnet sln add Tests/Tests.csproj
dotnet add Tests/Tests.csproj reference Tema01Fundamentos/Tema01Fundamentos.csproj
```

### 3. Instalación de Dependencias Esenciales

```bash
# Para desarrollo backend
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.AspNetCore.OpenApi
dotnet add package Swashbuckle.AspNetCore

# Para testing
dotnet add package xUnit
dotnet add package Moq
dotnet add package FluentAssertions

# Para configuración
dotnet add package Microsoft. Extensions.Configuration
dotnet add package Microsoft.Extensions.DependencyInjection
```

### 4. Configuración del IDE

#### Visual Studio 2022 (Recomendado para Windows)

```
- Descargar Visual Studio 2022 Community (gratuito)
- Durante instalación seleccionar:
  ✓ Desarrollo de ASP.NET y web
  ✓ Desarrollo multiplataforma de . NET
  ✓ Desarrollo de Azure (opcional)
```

**Extensiones recomendadas:**

- ReSharper (opcional, de pago)
- CodeMaid
- Visual Studio IntelliCode
- GitHub Copilot

#### Visual Studio Code (Multiplataforma)

```bash
# Instalar extensiones
code --install-extension ms-dotnettools.csharp
code --install-extension ms-dotnettools.csdevkit
code --install-extension kreativ-software.csharpextensions
code --install-extension jchannon.csharpextensions
code --install-extension patcx.vscode-nuget-gallery
```

**Configuración en `.vscode/settings.json`:**

```json
{
  "omnisharp.enableRoslynAnalyzers": true,
  "omnisharp.enableEditorConfigSupport": true,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "csharp.format.enable": true,
  "[csharp]": {
    "editor.defaultFormatter": "ms-dotnettools.csharp"
  }
}
```

#### JetBrains Rider (Alternativa Premium)

- Descargar Rider
- Configurar . NET SDK
- Activar análisis de código

### 5. Estructura de Proyecto Base

```
CSharpBackendCourse/
├── CSharpBackendCourse. sln
├── . gitignore
├── README.md
├── .editorconfig
├── Directory.Build.props
│
├── Tema01Fundamentos/
│   ├── Tema01Fundamentos.csproj
│   ├── 01Teoria.cs
│   ├── 02Ejemplos.cs
│   ├── 03CasosUso.cs
│   ├── 04ErroresComunes.cs
│   └── 05Ejercicios.cs
│
├── Tema02TiposDatos/
│   └── ...
│
├── Tests/
│   ├── Tests.csproj
│   ├── Tema01Tests. cs
│   └── ...
│
├── src/
│   ├── Domain/
│   ├── Application/
│   ├── Infrastructure/
│   └── WebAPI/
│
└── docs/
    ├── arquitectura.md
    └── guias/
```

**Archivo `.gitignore`:**

```
# Build results
[Dd]ebug/
[Dd]ebugPublic/
[Rr]elease/
[Rr]eleases/
x64/
x86/
[Ww][Ii][Nn]32/
[Aa][Rr][Mm]/
[Aa][Rr][Mm]64/
bld/
[Bb]in/
[Oo]bj/
[Ll]og/
[Ll]ogs/

# Visual Studio
. vs/
*.suo
*.user
*.userosscache
*.sln. docstates

# Rider
.idea/
*. sln.iml

# VS Code
.vscode/
! .vscode/settings.json
!.vscode/tasks.json
!.vscode/launch. json

# User-specific files
*. rsuser
*.suo
*.user
*.userosscache

# Build Results
*. dll
*.exe
*.pdb

# NuGet
*. nupkg
*.snupkg
**/packages/*
! **/packages/build/
project.lock.json
project.fragment.lock.json

# Test Results
TestResults/
*. trx
*.coverage
*.coveragexml

# Others
*.cache
*.log
appsettings.Development.json
```

**Archivo `.editorconfig`:**

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

[*.{cs,csx}]
# C# formatting
csharp_new_line_before_open_brace = all
csharp_new_line_before_else = true
csharp_new_line_before_catch = true
csharp_new_line_before_finally = true

# Naming conventions
dotnet_naming_rule. interfaces_should_be_pascal_case.severity = warning
dotnet_naming_rule.interfaces_should_be_pascal_case. symbols = interface
dotnet_naming_rule. interfaces_should_be_pascal_case.style = begins_with_i

dotnet_naming_symbols.interface. applicable_kinds = interface
dotnet_naming_style.begins_with_i.capitalization = pascal_case
dotnet_naming_style.begins_with_i.required_prefix = I

[*.json]
indent_size = 2
```

**Archivo `Directory.Build.props`:**

```xml
<Project>
  <PropertyGroup>
    <LangVersion>latest</LangVersion>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <TreatWarningsAsErrors>false</TreatWarningsAsErrors>
  </PropertyGroup>
</Project>
```

### 6. Comandos Útiles de . NET CLI

```bash
# Crear nuevo proyecto
dotnet new console -n NombreProyecto
dotnet new webapi -n NombreAPI
dotnet new classlib -n NombreBiblioteca
dotnet new xunit -n NombreTests

# Compilar
dotnet build
dotnet build --configuration Release

# Ejecutar
dotnet run
dotnet run --project ruta/proyecto.csproj

# Testing
dotnet test
dotnet test --logger "console;verbosity=detailed"
dotnet test /p:CollectCoverage=true

# Gestión de paquetes
dotnet add package NombrePaquete
dotnet remove package NombrePaquete
dotnet restore

# Limpiar
dotnet clean

# Publicar
dotnet publish -c Release -o ./publish

# Ver plantillas disponibles
dotnet new list

# Crear . gitignore
dotnet new gitignore
```

---

## 📚 Estructura del Curso

Cada tema incluye:

1. **📖 Teoría** (`01Teoria.cs`): Conceptos fundamentales
2. **💡 Ejemplos** (`02Ejemplos.cs`): Código de demostración
3. **🎯 Casos de Uso** (`03CasosUso.cs`): Aplicaciones prácticas
4. **⚠️ Errores Comunes** (`04ErroresComunes.cs`): Qué evitar
5. **✏️ Ejercicios** (`05Ejercicios.cs`): 5 ejercicios progresivos

---

## 📖 Temario

### 🔰 Módulo 1: Fundamentos de C#

#### Tema 1: Introducción a C# y . NET

- Historia y evolución de C#
- . NET Framework vs .NET Core vs .NET 5+
- Compilación JIT y CLR
- Primer programa "Hello World"

#### Tema 2: Variables y Tipos de Datos

- Tipos por valor vs tipos por referencia
- Tipos primitivos (int, long, float, double, decimal, bool, char)
- String y StringBuilder
- var, dynamic y object

#### Tema 3: Operadores

- Aritméticos
- Relacionales y lógicos
- Bit a bit
- Null-coalescing (?? y ??=)
- Operador Elvis (?.)

#### Tema 4: Conversiones de Tipos

- Conversión implícita y explícita
- Parse y TryParse
- Convert class
- Casting seguro con 'as' e 'is'

#### Tema 5: Estructuras de Control

- if, else if, else
- switch statement
- switch expression (C# 8.0+)
- Pattern matching

#### Tema 6: Bucles e Iteración

- for, foreach
- while, do-while
- break, continue
- goto (y por qué evitarlo)

### 🗂️ Módulo 2: Colecciones y Estructuras de Datos

#### Tema 7: Arrays

- Arrays unidimensionales
- Arrays multidimensionales
- Jagged arrays
- Métodos de Array class

#### Tema 8: Listas y Colecciones Genéricas

- List<T>
- Dictionary<TKey, TValue>
- HashSet<T>
- Queue<T> y Stack<T>

#### Tema 9: LINQ (Language Integrated Query)

- Sintaxis de consulta vs método
- Operadores básicos (Where, Select, OrderBy)
- Agregaciones (Sum, Count, Average)
- Joins y GroupBy

#### Tema 10: Strings Avanzados

- Interpolación de strings
- String.Format
- StringBuilder para concatenación
- Expresiones regulares (Regex)

### 🔧 Módulo 3: Métodos y Funciones

#### Tema 11: Métodos Básicos

- Declaración y llamada
- Parámetros y argumentos
- Return y valores de retorno
- Sobrecarga de métodos

#### Tema 12: Parámetros Avanzados

- Parámetros opcionales
- Parámetros nombrados
- params
- ref, out, in

#### Tema 13: Delegates y Eventos

- Delegates
- Multicast delegates
- Func, Action, Predicate
- Eventos y EventHandler

#### Tema 14: Expresiones Lambda y Funciones Anónimas

- Sintaxis de lambda
- Expression-bodied members
- Closures
- Expresiones vs statements

#### Tema 15: Manejo de Excepciones

- try-catch-finally
- Tipos de excepciones
- throw y throw ex
- Crear excepciones personalizadas
- using statement y IDisposable

### 🎨 Módulo 4: Programación Orientada a Objetos

#### Tema 16: Clases y Objetos

- Definición de clases
- Constructores y destructores
- Miembros de instancia vs estáticos
- this keyword

#### Tema 17: Propiedades

- Auto-properties
- Get y set accessors
- Propiedades de solo lectura
- Init-only properties (C# 9.0)
- Expression-bodied properties

#### Tema 18: Encapsulamiento

- Modificadores de acceso (public, private, protected, internal)
- protected internal y private protected
- Campos privados y backing fields
- Principio de encapsulación

#### Tema 19: Herencia

- Clase base y derivada
- base keyword
- Sealed classes
- Constructores en herencia
- Object class

#### Tema 20: Polimorfismo

- Métodos virtuales (virtual)
- Override
- Abstract methods y classes
- Sealed override
- new keyword (shadowing)

#### Tema 21: Interfaces

- Definición de interfaces
- Implementación explícita
- Herencia múltiple de interfaces
- Default interface members (C# 8.0)

#### Tema 22: Clases Abstractas vs Interfaces

- Cuándo usar cada una
- Diferencias clave
- Casos de uso
- Buenas prácticas

#### Tema 23: Tipos Especiales

- Structs
- Records (C# 9.0)
- Tuples
- Enums y Flags

### 🏗️ Módulo 5: Principios de Diseño

#### Tema 24: SOLID - Single Responsibility Principle

- Definición y propósito
- Cohesión
- Ejemplos en C#
- Refactorización

#### Tema 25: SOLID - Open/Closed Principle

- Extensión sin modificación
- Estrategia con interfaces
- Dependency Injection
- Factory pattern

#### Tema 26: SOLID - Liskov Substitution Principle

- Contratos y precondiciones
- Covarianza y contravarianza
- Ejemplos de violaciones
- Soluciones

#### Tema 27: SOLID - Interface Segregation Principle

- Interfaces específicas
- Segregación de responsabilidades
- Interfaces cohesivas
- Ejemplos prácticos

#### Tema 28: SOLID - Dependency Inversion Principle

- Abstracciones sobre concreciones
- Inyección de dependencias
- IoC Containers
- Patrones de inyección

#### Tema 29: DRY (Don't Repeat Yourself)

- Evitar duplicación
- Refactorización
- Métodos auxiliares
- Herencia y composición

#### Tema 30: YAGNI (You Aren't Gonna Need It)

- Simplicidad
- Evitar sobreingeniería
- Desarrollo iterativo
- Ejemplos

#### Tema 31: KISS (Keep It Simple, Stupid)

- Código simple y legible
- Complejidad ciclomática
- Refactorización
- Code smells

### 📦 Módulo 6: Características Avanzadas de C#

#### Tema 32: Generics

- Clases genéricas
- Métodos genéricos
- Restricciones (where)
- Covarianza y contravarianza

#### Tema 33: Null Safety

- Nullable reference types (C# 8.0)
- Null-forgiving operator (!)
- Null-conditional operators
- Nullable value types

#### Tema 34: Pattern Matching

- Type patterns
- Property patterns
- Positional patterns
- Relational patterns (C# 9.0+)

#### Tema 35: Async/Await

- Programación asíncrona
- Task y Task<T>
- async y await keywords
- ConfigureAwait
- ValueTask

#### Tema 36: Atributos y Reflection

- Definir atributos personalizados
- Reflection API
- Assembly, Type, MethodInfo
- Casos de uso

#### Tema 37: Extension Methods

- Crear métodos de extensión
- Buenas prácticas
- LINQ como ejemplo
- Limitaciones

### 📁 Módulo 7: Trabajo con Datos

#### Tema 38: File I/O

- File y FileInfo
- StreamReader y StreamWriter
- Path class
- Directory y DirectoryInfo

#### Tema 39: Serialización

- JSON (System.Text.Json)
- Newtonsoft.Json
- XML Serialization
- Configuración de serialización

#### Tema 40: Entity Framework Core

- Code First vs Database First
- DbContext y DbSet
- Migraciones
- Relaciones (1-1, 1-N, N-N)

#### Tema 41: LINQ to Entities

- Consultas con EF Core
- Eager loading (Include)
- Lazy loading
- Explicit loading
- Tracking vs No-tracking

#### Tema 42: Repository Pattern

- Implementación del patrón
- Generic repository
- Unit of Work
- Specification pattern

### 🔌 Módulo 8: ASP.NET Core Backend

#### Tema 43: Introducción a ASP.NET Core

- Arquitectura
- Middleware pipeline
- Dependency Injection
- Configuration

#### Tema 44: Web API REST

- Controllers
- Routing
- Model binding
- Action results

#### Tema 45: Validación y DTOs

- Data Annotations
- FluentValidation
- AutoMapper
- Response models

#### Tema 46: Entity Framework en APIs

- DbContext configuration
- Connection strings
- Seeders
- Repositorio en APIs

#### Tema 47: Autenticación y Autorización

- JWT (JSON Web Tokens)
- Identity Framework
- Authorization policies
- Claims-based auth

#### Tema 48: Middleware Personalizado

- Crear middleware
- Pipeline order
- Exception handling
- Logging middleware

#### Tema 49: Filtros

- Action Filters
- Exception Filters
- Authorization Filters
- Resource Filters

### 🚀 Módulo 9: Conceptos Avanzados

#### Tema 50: Dependency Injection Avanzada

- Service lifetimes (Transient, Scoped, Singleton)
- Factory pattern con DI
- Keyed services (NET 8.0)
- Service locator (anti-pattern)

#### Tema 51: Testing

- xUnit fundamentals
- Moq para mocking
- FluentAssertions
- Integration tests
- Test-Driven Development (TDD)

#### Tema 52: Logging

- ILogger interface
- Serilog
- Log levels
- Structured logging

#### Tema 53: Performance

- Benchmarking (BenchmarkDotNet)
- Memory management
- Span<T> y Memory<T>
- Object pooling

#### Tema 54: Patrones de Diseño

- Singleton
- Factory y Abstract Factory
- Builder
- Strategy
- Observer
- Decorator
- Repository
- Unit of Work

#### Tema 55: Clean Architecture

- Capas (Domain, Application, Infrastructure, Presentation)
- CQRS pattern
- MediatR
- Vertical slice architecture

#### Tema 56: Microservicios

- Introducción a microservicios
- gRPC
- Message queuing (RabbitMQ)
- API Gateway pattern

---

## 🎯 Principios de Diseño

### SOLID

#### **S** - Single Responsibility Principle (Responsabilidad Única)

> Una clase debe tener una única razón para cambiar

```csharp
// ❌ Mal - Múltiples responsabilidades
public class Usuario
{
    public string Nombre { get; set; }
    public string Email { get; set; }

    public void GuardarEnBaseDatos()
    {
        // Lógica de persistencia
    }

    public void EnviarEmail()
    {
        // Lógica de envío de emails
    }

    public void GenerarReporte()
    {
        // Lógica de generación de reportes
    }
}

// ✅ Bien - Responsabilidad única por clase
public class Usuario
{
    public string Nombre { get; set; }
    public string Email { get; set; }
}

public class UsuarioRepository
{
    public void Guardar(Usuario usuario)
    {
        // Lógica de persistencia
    }
}

public class EmailService
{
    public void EnviarEmailBienvenida(Usuario usuario)
    {
        // Lógica de envío de emails
    }
}

public class ReporteService
{
    public void GenerarReporteUsuario(Usuario usuario)
    {
        // Lógica de reportes
    }
}
```

#### **O** - Open/Closed Principle (Abierto/Cerrado)

> Abierto para extensión, cerrado para modificación

```csharp
// ❌ Mal - Modificar la clase para agregar nuevos tipos
public class CalculadoraDescuento
{
    public decimal Calcular(string tipoCliente, decimal monto)
    {
        if (tipoCliente == "Regular")
            return monto * 0.95m;
        else if (tipoCliente == "VIP")
            return monto * 0.90m;
        else if (tipoCliente == "Premium") // Requiere modificar el método
            return monto * 0.85m;

        return monto;
    }
}

// ✅ Bien - Extensible sin modificación
public interface IEstrategiaDescuento
{
    decimal Calcular(decimal monto);
}

public class DescuentoRegular : IEstrategiaDescuento
{
    public decimal Calcular(decimal monto) => monto * 0.95m;
}

public class DescuentoVIP : IEstrategiaDescuento
{
    public decimal Calcular(decimal monto) => monto * 0.90m;
}

public class DescuentoPremium : IEstrategiaDescuento
{
    public decimal Calcular(decimal monto) => monto * 0.85m;
}

public class CalculadoraDescuento
{
    private readonly IEstrategiaDescuento _estrategia;

    public CalculadoraDescuento(IEstrategiaDescuento estrategia)
    {
        _estrategia = estrategia;
    }

    public decimal Calcular(decimal monto) => _estrategia.Calcular(monto);
}
```

#### **L** - Liskov Substitution Principle (Sustitución de Liskov)

> Los objetos de una subclase deben poder reemplazar a los de la superclase

```csharp
// ❌ Mal - La subclase no puede sustituir a la base
public class Ave
{
    public virtual void Volar()
    {
        Console.WriteLine("Volando.. .");
    }
}

public class Pinguino : Ave
{
    public override void Volar()
    {
        throw new NotSupportedException("Los pingüinos no vuelan");
    }
}

// ✅ Bien - Jerarquía correcta
public abstract class Ave
{
    public abstract void Moverse();
}

public class AveVoladora : Ave
{
    public override void Moverse()
    {
        Volar();
    }

    public void Volar()
    {
        Console.WriteLine("Volando...");
    }
}

public class Pinguino : Ave
{
    public override void Moverse()
    {
        Nadar();
    }

    public void Nadar()
    {
        Console.WriteLine("Nadando...");
    }
}
```

#### **I** - Interface Segregation Principle (Segregación de Interfaces)

> No forzar a implementar interfaces que no se usan

```csharp
// ❌ Mal - Interfaz grande que fuerza implementaciones innecesarias
public interface ITrabajador
{
    void Trabajar();
    void Comer();
    void Dormir();
}

public class Robot : ITrabajador
{
    public void Trabajar()
    {
        Console.WriteLine("Trabajando...");
    }

    public void Comer()
    {
        throw new NotImplementedException("Los robots no comen");
    }

    public void Dormir()
    {
        throw new NotImplementedException("Los robots no duermen");
    }
}

// ✅ Bien - Interfaces segregadas
public interface ITrabajable
{
    void Trabajar();
}

public interface IAlimentable
{
    void Comer();
}

public interface IDescansable
{
    void Dormir();
}

public class Humano : ITrabajable, IAlimentable, IDescansable
{
    public void Trabajar() => Console.WriteLine("Trabajando...");
    public void Comer() => Console.WriteLine("Comiendo...");
    public void Dormir() => Console.WriteLine("Durmiendo...");
}

public class Robot : ITrabajable
{
    public void Trabajar() => Console.WriteLine("Trabajando 24/7.. .");
}
```

#### **D** - Dependency Inversion Principle (Inversión de Dependencias)

> Depender de abstracciones, no de implementaciones concretas

```csharp
// ❌ Mal - Dependencia de implementación concreta
public class MySqlDatabase
{
    public void Guardar(string datos)
    {
        Console.WriteLine($"Guardando en MySQL: {datos}");
    }
}

public class UsuarioService
{
    private readonly MySqlDatabase _database;

    public UsuarioService()
    {
        _database = new MySqlDatabase(); // Acoplamiento fuerte
    }

    public void GuardarUsuario(string usuario)
    {
        _database.Guardar(usuario);
    }
}

// ✅ Bien - Dependencia de abstracción
public interface IDatabase
{
    void Guardar(string datos);
}

public class MySqlDatabase : IDatabase
{
    public void Guardar(string datos)
    {
        Console.WriteLine($"Guardando en MySQL:  {datos}");
    }
}

public class PostgreSqlDatabase : IDatabase
{
    public void Guardar(string datos)
    {
        Console.WriteLine($"Guardando en PostgreSQL: {datos}");
    }
}

public class UsuarioService
{
    private readonly IDatabase _database;

    // Inyección de dependencias por constructor
    public UsuarioService(IDatabase database)
    {
        _database = database;
    }

    public void GuardarUsuario(string usuario)
    {
        _database.Guardar(usuario);
    }
}

// Uso
var service = new UsuarioService(new MySqlDatabase());
// Fácil cambiar a:  new UsuarioService(new PostgreSqlDatabase());
```

### DRY (Don't Repeat Yourself)

> No repitas código - usa abstracción y reutilización

```csharp
// ❌ Mal - Código duplicado
public class ReporteVentas
{
    public void GenerarReporteDiario()
    {
        Console.WriteLine("=== Reporte ===");
        // Lógica de reporte
        Console.WriteLine("Fecha: " + DateTime.Now);
        Console.WriteLine("=================");
    }

    public void GenerarReporteMensual()
    {
        Console.WriteLine("=== Reporte ===");
        // Lógica de reporte diferente
        Console.WriteLine("Fecha: " + DateTime.Now);
        Console.WriteLine("=================");
    }
}

// ✅ Bien - Sin duplicación
public class ReporteVentas
{
    private void ImprimirEncabezado()
    {
        Console.WriteLine("=== Reporte ===");
    }

    private void ImprimirPie()
    {
        Console.WriteLine("Fecha: " + DateTime.Now);
        Console.WriteLine("=================");
    }

    public void GenerarReporteDiario()
    {
        ImprimirEncabezado();
        // Lógica específica de reporte diario
        ImprimirPie();
    }

    public void GenerarReporteMensual()
    {
        ImprimirEncabezado();
        // Lógica específica de reporte mensual
        ImprimirPie();
    }
}
```

### YAGNI (You Aren't Gonna Need It)

> No implementes funcionalidad hasta que sea necesaria

```csharp
// ❌ Mal - Sobreingeniería anticipada
public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Email { get; set; }

    // Campos "por si acaso" que no se usan actualmente
    public string FacebookId { get; set; }
    public string TwitterHandle { get; set; }
    public string LinkedInProfile { get; set; }
    public Dictionary<string, object> Preferencias { get; set; }
    public Dictionary<string, object> Configuracion { get; set; }
    public List<string> Permisos { get; set; }
    public DateTime?  UltimaConexion { get; set; }
    public string DireccionIP { get; set; }
}

// ✅ Bien - Solo lo necesario ahora
public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Email { get; set; }

    // Agregar campos cuando sean realmente necesarios
}
```

### KISS (Keep It Simple, Stupid)

> Mantén el código simple y legible

```csharp
// ❌ Mal - Complejidad innecesaria
public class ValidadorEmail
{
    public bool EsValido(string email)
    {
        return email != null && email.Contains("@")
            ?  email.Split('@').Length == 2
                ?  ! string.IsNullOrWhiteSpace(email.Split('@')[0])
                    ?  !string.IsNullOrWhiteSpace(email.Split('@')[1])
                        ?  email.Split('@')[1].Contains(".")
                            ? true
                            : false
                        : false
                    : false
                : false
            : false;
    }
}

// ✅ Bien - Simple y claro
public class ValidadorEmail
{
    public bool EsValido(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
            return false;

        var partes = email.Split('@');
        if (partes.Length != 2)
            return false;

        var usuario = partes[0];
        var dominio = partes[1];

        return ! string.IsNullOrWhiteSpace(usuario)
            && ! string.IsNullOrWhiteSpace(dominio)
            && dominio.Contains(".");
    }
}

// Aún mejor - Usar Regex (herramienta apropiada)
public class ValidadorEmail
{
    private static readonly Regex EmailRegex = new(
        @"^[^@\s]+@[^@\s]+\.[^@\s]+$",
        RegexOptions.Compiled
    );

    public bool EsValido(string email)
    {
        return ! string.IsNullOrWhiteSpace(email) && EmailRegex.IsMatch(email);
    }
}
```

---

## 📂 Estructura de Carpetas del Curso

```
CSharpBackendCourse/
│
├── CSharpBackendCourse. sln
├── . gitignore
├── . editorconfig
├── README.md
├── Directory.Build.props
│
├── Tema01Introduccion/
│   ├── Tema01Introduccion.csproj
│   ├── 01Teoria. cs
│   ├── 02Ejemplos.cs
│   ├── 03CasosUso.cs
│   ├── 04ErroresComunes.cs
│   └── 05Ejercicios.cs
│
├── Tema02TiposDatos/
│   ├── Tema02TiposDatos. csproj
│   ├── 01Teoria.cs
│   ├── 02Ejemplos.cs
│   ├── 03CasosUso.cs
│   ├── 04ErroresComunes.cs
│   └── 05Ejercicios. cs
│
├── [... Temas 3-55 siguiendo la misma estructura...]
│
├── Tema56Microservicios/
│   └── ...
│
├── Tests/
│   ├── Tests.csproj
│   ├── Tema01Tests.cs
│   ├── Tema02Tests.cs
│   └── ...
│
├── Proyectos/
│   ├── Proyecto01CalculadoraCLI/
│   ├── Proyecto02TodoAPI/
│   ├── Proyecto03BlogBackend/
│   └── Proyecto04ECommerce/
│
└── docs/
    ├── arquitectura.md
    ├── patrones-diseño.md
    └── guias/
```

---

## 📝 Plantilla de Estructura por Tema

### Archivo `.csproj` por tema:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>

</Project>
```

Cada carpeta de tema contiene:

### 1. `01Teoria.cs`

```csharp
/*
 * TEMA X:  Nombre del Tema
 *
 * Descripción general del tema.
 * Conceptos clave que se aprenderán.
 *
 * Objetivos:
 * - Objetivo 1
 * - Objetivo 2
 * - Objetivo 3
 */

namespace TemaXNombreTema;

// Explicación teórica con comentarios
// Definiciones
// Sintaxis básica
// Conceptos importantes
```

### 2. `02Ejemplos.cs`

```csharp
/*
 * Ejemplos prácticos del Tema X
 */

namespace TemaXNombreTema;

// Ejemplo 1: Caso básico
// Ejemplo 2: Caso intermedio
// Ejemplo 3: Caso avanzado
// Ejemplo 4: Caso real
```

### 3. `03CasosUso.cs`

```csharp
/*
 * Casos de uso reales del Tema X
 */

namespace TemaXNombreTema;

// Caso de uso 1: Aplicación en backend
// Caso de uso 2: Aplicación en POO
// Caso de uso 3: Aplicación en proyectos reales
```

### 4. `04ErroresComunes.cs`

```csharp
/*
 * Errores comunes y cómo evitarlos - Tema X
 */

namespace TemaXNombreTema;

// Error común 1: Descripción
// ❌ Código incorrecto
// ✅ Código correcto
// Explicación

// Error común 2: Descripción
// ...
```

### 5. `05Ejercicios.cs`

```csharp
/*
 * Ejercicios del Tema X
 *
 * Nivel de dificultad:  ⭐ (fácil) a ⭐⭐⭐⭐⭐ (difícil)
 */

namespace TemaXNombreTema;

// Ejercicio 1: ⭐ - Nivel Básico
/*
 * Descripción del ejercicio
 * Entrada esperada
 * Salida esperada
 */

// Ejercicio 2: ⭐⭐ - Nivel Fácil-Medio
/*
 * Descripción
 */

// Ejercicio 3: ⭐⭐⭐ - Nivel Medio
/*
 * Descripción
 */

// Ejercicio 4: ⭐⭐⭐⭐ - Nivel Medio-Difícil
/*
 * Descripción
 */

// Ejercicio 5: ⭐⭐⭐⭐⭐ - Nivel Avanzado
/*
 * Descripción
 */

// ============================================
// SOLUCIONES (al final del archivo)
// Las soluciones están al final para no ver spoilers
// ============================================
```

---

## 🎓 Ejemplo Completo: Tema 16 - Clases y Objetos

### 📖 `01Teoria.cs`

```csharp
/*
 * TEMA 16: Clases y Objetos en C#
 *
 * La Programación Orientada a Objetos (POO) es un paradigma fundamental en C#.
 * Todo en C# es un objeto o puede ser tratado como tal.
 *
 * Conceptos clave:
 * - Clase:  Plantilla o molde para crear objetos
 * - Objeto:  Instancia de una clase
 * - Campo: Variable que pertenece a una clase
 * - Propiedad: Miembro que proporciona acceso controlado a campos
 * - Método: Función que pertenece a una clase
 * - Constructor: Método especial para inicializar objetos
 *
 * Objetivos:
 * - Entender qué es una clase y un objeto en C#
 * - Crear clases con propiedades y métodos
 * - Usar constructores para inicializar objetos
 * - Comprender miembros estáticos vs de instancia
 * - Aplicar encapsulamiento básico
 */

namespace Tema16ClasesObjetos;

// ============================================================================
// 1. DEFINICIÓN BÁSICA DE UNA CLASE
// ============================================================================

/// <summary>
/// Clase básica que representa un perro.
/// </summary>
public class Perro
{
    // Esta clase está vacía por ahora
}

public class EjemploBasico
{
    public static void Ejecutar()
    {
        // Crear una instancia (objeto) de la clase
        Perro miPerro = new Perro();

        // En C# moderno (C# 9+) se puede usar target-typed new
        Perro otroPerro = new();

        Console.WriteLine($"Tipo:  {miPerro.GetType().Name}"); // Perro
    }
}

// ============================================================================
// 2. CLASE CON CAMPOS Y PROPIEDADES
// ============================================================================

/// <summary>
/// Clase Perro con propiedades para almacenar datos.
/// </summary>
public class PerroConPropiedades
{
    // Campos privados (backing fields)
    private string _nombre;
    private int _edad;

    // Propiedades con get y set completos
    public string Nombre
    {
        get { return _nombre; }
        set { _nombre = value; }
    }

    public int Edad
    {
        get { return _edad; }
        set
        {
            if (value >= 0)
                _edad = value;
            else
                throw new ArgumentException("La edad no puede ser negativa");
        }
    }

    // Auto-property (C# crea el backing field automáticamente)
    public string Raza { get; set; }
}

// ============================================================================
// 3. CONSTRUCTORES
// ============================================================================

/// <summary>
/// Clase con constructor para inicializar el objeto.
/// </summary>
public class PerroConConstructor
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
    public string Raza { get; set; }

    // Constructor sin parámetros (constructor por defecto)
    public PerroConConstructor()
    {
        Nombre = "Sin nombre";
        Edad = 0;
        Raza = "Desconocida";
    }

    // Constructor con parámetros
    public PerroConConstructor(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
        Raza = "Mestizo";
    }

    // Constructor con todos los parámetros
    public PerroConConstructor(string nombre, int edad, string raza)
    {
        Nombre = nombre;
        Edad = edad;
        Raza = raza;
    }

    // Sobrecarga de constructores:  múltiples constructores con diferentes firmas
}

public class EjemploConstructores
{
    public static void Ejecutar()
    {
        var perro1 = new PerroConConstructor();
        Console.WriteLine($"{perro1.Nombre}, {perro1.Edad} años");

        var perro2 = new PerroConConstructor("Max", 3);
        Console.WriteLine($"{perro2.Nombre}, {perro2.Edad} años, {perro2.Raza}");

        var perro3 = new PerroConConstructor("Luna", 5, "Labrador");
        Console.WriteLine($"{perro3.Nombre}, {perro3.Edad} años, {perro3.Raza}");
    }
}

// ============================================================================
// 4. CONSTRUCTOR CON THIS (ENCADENAMIENTO)
// ============================================================================

/// <summary>
/// Usando 'this' para encadenar constructores.
/// </summary>
public class PerroOptimizado
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
    public string Raza { get; set; }

    // Constructor principal con toda la lógica
    public PerroOptimizado(string nombre, int edad, string raza)
    {
        Nombre = nombre;
        Edad = edad;
        Raza = raza;
        Console.WriteLine("Perro creado");
    }

    // Otros constructores llaman al principal con 'this'
    public PerroOptimizado() : this("Sin nombre", 0, "Desconocida")
    {
    }

    public PerroOptimizado(string nombre, int edad) : this(nombre, edad, "Mestizo")
    {
    }
}

// ============================================================================
// 5. MÉTODOS DE INSTANCIA
// ============================================================================

/// <summary>
/// Clase con métodos de instancia.
/// </summary>
public class PerroCompleto
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
    public string Raza { get; set; }

    public PerroCompleto(string nombre, int edad, string raza)
    {
        Nombre = nombre;
        Edad = edad;
        Raza = raza;
    }

    // Método que devuelve string
    public string Ladrar()
    {
        return $"{Nombre} dice: ¡Guau guau!";
    }

    // Método void que modifica el estado
    public void CumplirAños()
    {
        Edad++;
        Console.WriteLine($"¡{Nombre} ahora tiene {Edad} años!");
    }

    // Método con parámetros
    public void Correr(int distanciaKm)
    {
        Console.WriteLine($"{Nombre} corrió {distanciaKm} km");
    }

    // Método que devuelve información
    public string ObtenerInfo()
    {
        return $"Nombre: {Nombre}, Edad:  {Edad} años, Raza: {Raza}";
    }

    // Expression-bodied method (sintaxis corta para métodos simples)
    public string ObtenerInfoCorta() => $"{Nombre} - {Raza} - {Edad} años";
}

public class EjemploMetodos
{
    public static void Ejecutar()
    {
        var perro = new PerroCompleto("Rocky", 2, "Labrador");

        Console.WriteLine(perro. Ladrar());
        perro.CumplirAños();
        perro.Correr(5);
        Console.WriteLine(perro.ObtenerInfo());
        Console.WriteLine(perro.ObtenerInfoCorta());
    }
}

// ============================================================================
// 6. MIEMBROS ESTÁTICOS
// ============================================================================

/// <summary>
/// Clase con miembros estáticos (compartidos por todas las instancias).
/// </summary>
public class PerroConEstaticos
{
    // Campo estático (compartido por todas las instancias)
    public static string Especie = "Canis familiaris";

    // Contador estático
    private static int _contadorPerros = 0;

    // Propiedad estática de solo lectura
    public static int ContadorPerros => _contadorPerros;

    // Propiedades de instancia
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public PerroConEstaticos(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
        _contadorPerros++; // Incrementar contador cada vez que se crea un perro
    }

    // Método estático (no requiere instancia)
    public static void MostrarEspecie()
    {
        Console.WriteLine($"Especie: {Especie}");
    }

    // Método de instancia
    public void MostrarInfo()
    {
        Console.WriteLine($"{Nombre} ({Edad} años) - Especie: {Especie}");
    }
}

public class EjemploEstaticos
{
    public static void Ejecutar()
    {
        Console.WriteLine($"Perros creados: {PerroConEstaticos.ContadorPerros}");

        var perro1 = new PerroConEstaticos("Max", 3);
        var perro2 = new PerroConEstaticos("Luna", 5);

        Console. WriteLine($"Perros creados: {PerroConEstaticos.ContadorPerros}");

        PerroConEstaticos.MostrarEspecie();
        perro1.MostrarInfo();
        perro2.MostrarInfo();

        // Cambiar valor estático afecta a todas las instancias
        PerroConEstaticos.Especie = "Canis lupus familiaris";
        perro1.MostrarInfo();
        perro2.MostrarInfo();
    }
}

// ============================================================================
// 7. PROPIEDADES DE SOLO LECTURA Y INIT
// ============================================================================

/// <summary>
/// Clase con propiedades de solo lectura e init-only.
/// </summary>
public class PerroInmutable
{
    // Propiedad de solo lectura (solo get)
    public string Nombre { get; }

    // Propiedad init-only (se puede asignar solo en inicialización)
    public int Edad { get; init; }

    // Auto-property con valor predeterminado
    public string Raza { get; init; } = "Mestizo";

    public PerroInmutable(string nombre)
    {
        Nombre = nombre; // Se puede asignar en el constructor
    }
}

public class EjemploPropiedadesLectura
{
    public static void Ejecutar()
    {
        var perro = new PerroInmutable("Max")
        {
            Edad = 3,
            Raza = "Labrador"
        };

        Console.WriteLine($"{perro.Nombre}, {perro.Edad} años, {perro.Raza}");

        // perro.Nombre = "Rocky"; // ERROR: no se puede asignar (solo lectura)
        // perro.Edad = 4;         // ERROR: no se puede asignar (init-only)
    }
}

// ============================================================================
// 8. OBJECT INITIALIZERS
// ============================================================================

public class EjemploInicializadores
{
    public static void Ejecutar()
    {
        // Inicialización tradicional
        var perro1 = new PerroCompleto("Max", 3, "Labrador");

        // Object initializer (inicialización de objeto)
        var perro2 = new PerroCompleto("Luna", 5, "Golden")
        {
            // Se pueden modificar propiedades después del constructor
            Edad = 6
        };

        // Target-typed new con object initializer
        PerroCompleto perro3 = new("Rocky", 2, "Beagle");
    }
}

// ============================================================================
// 9. KEYWORD 'this'
// ============================================================================

/// <summary>
/// Uso de 'this' para referirse a la instancia actual.
/// </summary>
public class PerroConThis
{
    private string nombre;

    public PerroConThis(string nombre)
    {
        // 'this' diferencia el parámetro del campo
        this.nombre = nombre;
    }

    public void EstablecerNombre(string nombre)
    {
        this.nombre = nombre;
    }

    public string ObtenerNombre()
    {
        return this. nombre; // 'this' es opcional aquí
    }

    // 'this' como parámetro (extension method style)
    public PerroConThis ClonarConNombre(string nuevoNombre)
    {
        return new PerroConThis(nuevoNombre);
    }
}

// ============================================================================
// 10. EJEMPLO COMPLETO: CLASE CUENTA BANCARIA
// ============================================================================

/// <summary>
/// Ejemplo completo de una clase bien estructurada.
/// </summary>
public class CuentaBancaria
{
    // Campo de solo lectura (readonly)
    private readonly string _numeroCuenta;

    // Campo privado
    private decimal _saldo;

    // Propiedad de solo lectura pública
    public string NumeroCuenta => _numeroCuenta;

    // Propiedad con validación
    public string Titular { get; set; }

    // Propiedad de solo lectura con backing field
    public decimal Saldo => _saldo;

    // Constructor
    public CuentaBancaria(string numeroCuenta, string titular, decimal saldoInicial = 0)
    {
        if (string.IsNullOrWhiteSpace(numeroCuenta))
            throw new ArgumentException("El número de cuenta es requerido");

        if (string.IsNullOrWhiteSpace(titular))
            throw new ArgumentException("El titular es requerido");

        if (saldoInicial < 0)
            throw new ArgumentException("El saldo inicial no puede ser negativo");

        _numeroCuenta = numeroCuenta;
        Titular = titular;
        _saldo = saldoInicial;
    }

    // Métodos públicos
    public void Depositar(decimal cantidad)
    {
        if (cantidad <= 0)
        {
            Console.WriteLine("❌ La cantidad debe ser positiva");
            return;
        }

        _saldo += cantidad;
        Console.WriteLine($"✓ Depositado: ${cantidad:N2}.  Nuevo saldo: ${_saldo: N2}");
    }

    public bool Retirar(decimal cantidad)
    {
        if (cantidad <= 0)
        {
            Console.WriteLine("❌ La cantidad debe ser positiva");
            return false;
        }

        if (cantidad > _saldo)
        {
            Console.WriteLine("❌ Saldo insuficiente");
            return false;
        }

        _saldo -= cantidad;
        Console.WriteLine($"✓ Retirado: ${cantidad:N2}. Nuevo saldo: ${_saldo:N2}");
        return true;
    }

    public void MostrarInformacion()
    {
        Console.WriteLine("\n--- Información de la Cuenta ---");
        Console.WriteLine($"Cuenta: {NumeroCuenta}");
        Console.WriteLine($"Titular: {Titular}");
        Console.WriteLine($"Saldo: ${Saldo:N2}");
        Console.WriteLine("--------------------------------");
    }

    // Sobrescribir ToString() para representación de string
    public override string ToString()
    {
        return $"Cuenta {NumeroCuenta} - {Titular} - ${Saldo:N2}";
    }
}

public class EjemploCuentaBancaria
{
    public static void Ejecutar()
    {
        var cuenta = new CuentaBancaria("12345678", "Juan Pérez", 1000m);
        cuenta.MostrarInformacion();

        cuenta.Depositar(500);
        cuenta. Retirar(200);
        cuenta. Retirar(2000); // Saldo insuficiente

        Console.WriteLine($"\nResumen:  {cuenta}");
    }
}

// ============================================================================
// PROGRAMA PRINCIPAL
// ============================================================================

public class Program
{
    public static void Main()
    {
        Console.WriteLine("=== TEMA 16:  Clases y Objetos en C# ===\n");

        Console.WriteLine("--- Ejemplo Básico ---");
        EjemploBasico.Ejecutar();

        Console.WriteLine("\n--- Ejemplo Constructores ---");
        EjemploConstructores.Ejecutar();

        Console.WriteLine("\n--- Ejemplo Métodos ---");
        EjemploMetodos.Ejecutar();

        Console.WriteLine("\n--- Ejemplo Estáticos ---");
        EjemploEstaticos.Ejecutar();

        Console.WriteLine("\n--- Ejemplo Cuenta Bancaria ---");
        EjemploCuentaBancaria. Ejecutar();
    }
}

/*
 * RESUMEN DE CONCEPTOS CLAVE:
 *
 * 1. Clase:  Plantilla que define estructura y comportamiento
 *    public class NombreClase { }
 *
 * 2. Propiedades: Miembros que encapsulan campos
 *    public string Nombre { get; set; }
 *
 * 3. Constructor: Método especial para inicializar objetos
 *    public NombreClase(parámetros) { }
 *
 * 4. This: Referencia a la instancia actual
 *    this.campo = valor;
 *
 * 5. Miembros estáticos: Compartidos por todas las instancias
 *    public static int Contador { get; set; }
 *
 * 6. Métodos:  Funciones que definen comportamiento
 *    public void MetodoEjemplo() { }
 *
 * 7. Encapsulamiento: Control de acceso mediante modificadores
 *    private, public, protected, internal
 *
 * 8. Object Initializers: Sintaxis para inicializar propiedades
 *    new Clase { Propiedad = valor }
 */
```

### 💡 `02Ejemplos. cs`

```csharp
/*
 * TEMA 16: Ejemplos Prácticos - Clases y Objetos en C#
 */

namespace Tema16ClasesObjetos;

// ============================================================================
// EJEMPLO 1: Sistema de Gestión de Estudiantes
// ============================================================================

/// <summary>
/// Representa un estudiante con sus calificaciones.
/// </summary>
public class Estudiante
{
    // Propiedad estática
    public static string Institucion { get; set; } = "Universidad C#";

    // Propiedades de instancia
    public string Nombre { get; set; }
    public string Matricula { get; set; }
    public List<double> Calificaciones { get; set; }

    // Constructor
    public Estudiante(string nombre, string matricula)
    {
        Nombre = nombre;
        Matricula = matricula;
        Calificaciones = new List<double>();
    }

    // Métodos
    public void AgregarCalificacion(double calificacion)
    {
        if (calificacion < 0 || calificacion > 10)
        {
            Console.WriteLine("❌ Calificación inválida.  Debe estar entre 0 y 10.");
            return;
        }

        Calificaciones.Add(calificacion);
        Console.WriteLine($"✓ Calificación {calificacion} agregada");
    }

    public double CalcularPromedio()
    {
        if (Calificaciones.Count == 0)
            return 0;

        return Calificaciones.Average();
    }

    public string ObtenerEstatus()
    {
        var promedio = CalcularPromedio();
        return promedio >= 6.0 ? "Aprobado" : "Reprobado";
    }

    public void MostrarInformacion()
    {
        Console.WriteLine("\n--- Información del Estudiante ---");
        Console.WriteLine($"Institución: {Institucion}");
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Matrícula: {Matricula}");
        Console.WriteLine($"Calificaciones: {string. Join(", ", Calificaciones)}");
        Console.WriteLine($"Promedio: {CalcularPromedio():F2}");
        Console.WriteLine($"Estatus: {ObtenerEstatus()}");
        Console.WriteLine("----------------------------------");
    }
}

public class EjemploEstudiante
{
    public static void Ejecutar()
    {
        var estudiante1 = new Estudiante("Ana García", "2024001");
        estudiante1.AgregarCalificacion(8.5);
        estudiante1.AgregarCalificacion(9.0);
        estudiante1.AgregarCalificacion(7.5);
        estudiante1.MostrarInformacion();
    }
}

// ============================================================================
// EJEMPLO 2: Sistema de Carrito de Compras
// ============================================================================

/// <summary>
/// Representa un producto en la tienda.
/// </summary>
public class Producto
{
    public string Nombre { get; set; }
    public decimal Precio { get; set; }
    public string Codigo { get; set; }

    public Producto(string nombre, decimal precio, string codigo)
    {
        Nombre = nombre;
        Precio = precio;
        Codigo = codigo;
    }

    public decimal AplicarDescuento(decimal porcentaje)
    {
        var descuento = Precio * (porcentaje / 100m);
        return Precio - descuento;
    }

    public override string ToString()
    {
        return $"{Nombre} (${Precio:N2}) - Código: {Codigo}";
    }
}

/// <summary>
/// Gestiona el carrito de compras de un cliente.
/// </summary>
public class CarritoCompras
{
    public string Cliente { get; set; }
    public List<Producto> Productos { get; set; }

    public CarritoCompras(string cliente)
    {
        Cliente = cliente;
        Productos = new List<Producto>();
    }

    public void AgregarProducto(Producto producto)
    {
        Productos.Add(producto);
        Console.WriteLine($"✓ {producto.Nombre} agregado al carrito");
    }

    public bool EliminarProducto(string codigo)
    {
        var producto = Productos.FirstOrDefault(p => p. Codigo == codigo);
        if (producto != null)
        {
            Productos.Remove(producto);
            Console.WriteLine($"✓ {producto.Nombre} eliminado del carrito");
            return true;
        }

        Console.WriteLine("✗ Producto no encontrado");
        return false;
    }

    public decimal CalcularTotal()
    {
        return Productos.Sum(p => p. Precio);
    }

    public
```
