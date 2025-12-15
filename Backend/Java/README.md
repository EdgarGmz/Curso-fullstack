# 📘 Curso Completo de Java

<div align="center">

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![Gradle](https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![JUnit](https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit5&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Java desde conceptos básicos hasta avanzados, con enfoque en programación orientada a objetos, APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

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
# 1. Verificar Java instalado (versión 17 o superior)
java -version
javac -version

# 2. Crear estructura de proyecto
mkdir mi-proyecto
cd mi-proyecto
mkdir -p src/main/java/com/ejemplo

# 3. Crear archivo principal
# src/main/java/com/ejemplo/Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("¡Hola, Java!");
    }
}

# 4. Compilar
javac src/main/java/com/ejemplo/Main.java

# 5. Ejecutar
java -cp src/main/java com.ejemplo.Main
```

### Estructura de un Proyecto Java

```
mi-proyecto/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── ejemplo/
│                   ├── Main.java
│                   ├── models/
│                   ├── services/
│                   └── utils/
├── pom.xml          # Si usas Maven
└── build.gradle     # Si usas Gradle
```

---

## 📋 Requisitos Mínimos

- **Java JDK 17** o superior (recomendado Java 21)
- **Editor de código**: IntelliJ IDEA, Eclipse, VS Code
- **Build tool**: Maven o Gradle (opcional pero recomendado)
- **Conocimientos básicos**: Lógica de programación (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar JDK
- [ ] Configurar JAVA_HOME
- [ ] Configurar editor de código
- [ ] Crear primer programa

**📚 Conceptos Clave:**

##### **Main.java - Punto de Entrada**
**Definición:** Método `main` es el punto de entrada de cualquier aplicación Java.

**Ejemplo:**
```java
// Main.java
package com.ejemplo;

public class Main {
    public static void main(String[] args) {
        System.out.println("¡Hola, Java!");
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Java"`

#### Paso 2: Tipos de Datos Básicos
- [ ] Tipos primitivos (int, double, char, boolean)
- [ ] Tipos wrapper (Integer, Double, Character, Boolean)
- [ ] Variables y constantes (final)
- [ ] Conversión de tipos

**📚 Conceptos Clave:**

##### **Tipos Primitivos**
**Definición:** Tipos de datos básicos proporcionados por el lenguaje.

**Ejemplo:**
```java
// Tipos numéricos
int edad = 25;
double precio = 99.99;
float salario = 50000.50f;
long numeroGrande = 1000000000L;

// Carácter
char inicial = 'J';

// Booleano
boolean esActivo = true;
boolean esMayor = false;

// Tipos wrapper (objetos)
Integer edadObj = 25;
Double precioObj = 99.99;
Boolean esActivoObj = true;

// Conversión de tipos
String edadStr = String.valueOf(edad);  // "25"
int precioInt = (int) precio;           // 99
```

**📝 Ejercicios:**
1. Crear variables para almacenar información personal
2. Realizar operaciones matemáticas básicas
3. Concatenar strings con String.format o StringBuilder

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de datos básicos y variables"`

#### Paso 3: Operadores y Expresiones
- [ ] Operadores aritméticos
- [ ] Operadores de comparación
- [ ] Operadores lógicos
- [ ] Operadores de asignación

**Ejemplo:**
```java
int a = 10;
int b = 5;

// Aritméticos
int suma = a + b;           // 15
int resta = a - b;          // 5
int multiplicacion = a * b; // 50
int division = a / b;       // 2
int modulo = a % b;         // 0

// Comparación
boolean esMayor = a > b;    // true
boolean esIgual = a == b;   // false
boolean esDiferente = a != b; // true

// Lógicos
boolean resultado = (a > 5) && (b < 10);  // true
boolean resultado2 = (a > 15) || (b < 3);  // false
boolean resultado3 = !(a > 5);             // false
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operadores y expresiones"`

#### Paso 4: Estructuras de Control
- [ ] if/else
- [ ] switch/case (tradicional y expresiones)
- [ ] for, while, do-while
- [ ] Enhanced for loop

**Ejemplo:**
```java
// if/else
int edad = 18;
if (edad >= 18) {
    System.out.println("Es mayor de edad");
} else if (edad >= 13) {
    System.out.println("Es adolescente");
} else {
    System.out.println("Es menor de edad");
}

// switch tradicional
String dia = "Lunes";
switch (dia) {
    case "Lunes":
        System.out.println("Inicio de semana");
        break;
    case "Viernes":
        System.out.println("Fin de semana");
        break;
    default:
        System.out.println("Día normal");
}

// switch expression (Java 14+)
String mensaje = switch (dia) {
    case "Lunes" -> "Inicio de semana";
    case "Viernes" -> "Fin de semana";
    default -> "Día normal";
};

// for
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop
String[] frutas = {"Manzana", "Banana", "Naranja"};
for (String fruta : frutas) {
    System.out.println(fruta);
}

// while
int contador = 0;
while (contador < 5) {
    System.out.println(contador);
    contador++;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de control"`

#### Paso 5: Arrays y Colecciones
- [ ] Arrays unidimensionales y multidimensionales
- [ ] ArrayList
- [ ] HashMap
- [ ] HashSet

**Ejemplo:**
```java
import java.util.*;

// Array
int[] numeros = {1, 2, 3, 4, 5};
int[] numeros2 = new int[5];

// ArrayList
List<String> nombres = new ArrayList<>();
nombres.add("Juan");
nombres.add("María");

// HashMap
Map<String, Integer> edades = new HashMap<>();
edades.put("Juan", 25);
edades.put("María", 30);
int edadJuan = edades.get("Juan");

// HashSet
Set<String> frutas = new HashSet<>();
frutas.add("Manzana");
frutas.add("Banana");
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: arrays y colecciones"`

#### Paso 6: Strings
- [ ] String vs StringBuilder vs StringBuffer
- [ ] Métodos de String
- [ ] Formateo de strings
- [ ] Comparación de strings

**Ejemplo:**
```java
// String (inmutable)
String nombre = "Juan";
String apellido = "Pérez";
String nombreCompleto = nombre + " " + apellido;

// StringBuilder (mutable, más eficiente)
StringBuilder sb = new StringBuilder();
sb.append("Hola");
sb.append(" ");
sb.append("Mundo");
String resultado = sb.toString();

// Métodos de String
String texto = "  Hola Mundo  ";
String trim = texto.trim();              // "Hola Mundo"
String upper = texto.toUpperCase();      // "  HOLA MUNDO  "
String lower = texto.toLowerCase();      // "  hola mundo  "
boolean contiene = texto.contains("Mundo"); // true

// Comparación
String a = "Hola";
String b = "Hola";
boolean igual = a.equals(b);        // true (compara contenido)
boolean igual2 = a == b;            // puede ser false (compara referencias)
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: strings y manipulación de texto"`

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
```java
package com.ejemplo;

public class Persona {
    // Campos privados
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Getters
    public String getNombre() {
        return nombre;
    }
    
    public int getEdad() {
        return edad;
    }
    
    // Setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    // Método
    public void presentarse() {
        System.out.println("Soy " + nombre + ", tengo " + edad + " años");
    }
}

// Uso
Persona persona = new Persona("Juan", 25);
persona.presentarse(); // "Soy Juan, tengo 25 años"
```

**📝 Ejercicios:**
1. Crear clase `Producto` con propiedades y métodos
2. Crear clase `CuentaBancaria` con métodos de depósito y retiro
3. Implementar validaciones en setters

> 💡 **Sugerencia de Commit**: `git commit -m "feat: clases y objetos básicos"`

#### Paso 8: Constructores
- [ ] Constructores por defecto
- [ ] Constructores con parámetros
- [ ] Constructor chaining (this())
- [ ] Constructor sobrecargado

**Ejemplo:**
```java
public class Persona {
    private String nombre;
    private int edad;
    private String email;
    
    // Constructor por defecto
    public Persona() {
        this("Sin nombre", 0, "sin@email.com");
    }
    
    // Constructor con parámetros
    public Persona(String nombre, int edad) {
        this(nombre, edad, "sin@email.com");
    }
    
    // Constructor completo
    public Persona(String nombre, int edad, String email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: constructores"`

#### Paso 9: Modificadores de Acceso
- [ ] public
- [ ] private
- [ ] protected
- [ ] package-private (default)

**Ejemplo:**
```java
public class Banco {
    private double saldo = 0;  // Solo accesible dentro de la clase
    
    public double obtenerSaldo() {  // Accesible desde cualquier lugar
        return saldo;
    }
    
    protected void metodoProtegido() {  // Accesible en la clase y subclases
        // ...
    }
    
    void metodoPackagePrivate() {  // Accesible en el mismo paquete
        // ...
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: modificadores de acceso"`

#### Paso 10: Herencia
- [ ] Herencia simple (extends)
- [ ] super
- [ ] Clases abstractas
- [ ] Métodos final

**📚 Conceptos Clave:**

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra.

**Ejemplo:**
```java
// Clase base
public class Animal {
    protected String nombre;
    
    public Animal(String nombre) {
        this.nombre = nombre;
    }
    
    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

// Clase derivada
public class Perro extends Animal {
    private String raza;
    
    public Perro(String nombre, String raza) {
        super(nombre);  // Llamar al constructor padre
        this.raza = raza;
    }
    
    @Override
    public void hacerSonido() {  // Sobrescribir método
        System.out.println("Guau guau");
    }
    
    public void correr() {
        System.out.println(nombre + " está corriendo");
    }
}

// Uso
Perro perro = new Perro("Max", "Labrador");
perro.hacerSonido();  // "Guau guau"
perro.correr();       // "Max está corriendo"
```

**📝 Ejercicios:**
1. Crear jerarquía: Vehiculo -> Auto, Moto
2. Implementar clases abstractas
3. Usar super() para llamar métodos padre

> 💡 **Sugerencia de Commit**: `git commit -m "feat: herencia y polimorfismo"`

#### Paso 11: Interfaces
- [ ] Definir interfaces
- [ ] Implementar interfaces
- [ ] Interfaces múltiples
- [ ] Default methods (Java 8+)
- [ ] Functional interfaces

**Ejemplo:**
```java
// Definir interfaz
public interface IVolador {
    void volar();
    
    // Default method (Java 8+)
    default void aterrizar() {
        System.out.println("Aterrizando...");
    }
}

public interface INadador {
    void nadar();
}

// Implementar múltiples interfaces
public class Pato implements IVolador, INadador {
    @Override
    public void volar() {
        System.out.println("El pato vuela");
    }
    
    @Override
    public void nadar() {
        System.out.println("El pato nada");
    }
}

// Functional interface (Java 8+)
@FunctionalInterface
public interface Calculadora {
    int calcular(int a, int b);
}

// Uso con lambda
Calculadora suma = (a, b) -> a + b;
int resultado = suma.calcular(5, 3); // 8
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: interfaces"`

#### Paso 12: Polimorfismo
- [ ] Polimorfismo con herencia
- [ ] Polimorfismo con interfaces
- [ ] Métodos virtuales
- [ ] @Override

**Ejemplo:**
```java
public abstract class Forma {
    public abstract double calcularArea();
}

public class Circulo extends Forma {
    private double radio;
    
    public Circulo(double radio) {
        this.radio = radio;
    }
    
    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}

public class Rectangulo extends Forma {
    private double ancho;
    private double alto;
    
    public Rectangulo(double ancho, double alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    
    @Override
    public double calcularArea() {
        return ancho * alto;
    }
}

// Polimorfismo en acción
List<Forma> formas = new ArrayList<>();
formas.add(new Circulo(5));
formas.add(new Rectangulo(4, 6));

for (Forma forma : formas) {
    System.out.println("Área: " + forma.calcularArea());
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: polimorfismo avanzado"`

#### Paso 13: Encapsulamiento
- [ ] Getters y setters
- [ ] Propiedades privadas
- [ ] Validación en setters
- [ ] Records (Java 14+)

**Ejemplo:**
```java
public class CuentaBancaria {
    private double saldo;
    
    public CuentaBancaria(double saldoInicial) {
        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        } else {
            throw new IllegalArgumentException("El saldo no puede ser negativo");
        }
    }
    
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
        } else {
            throw new IllegalArgumentException("La cantidad debe ser positiva");
        }
    }
    
    public void retirar(double cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
        } else {
            throw new IllegalArgumentException("Cantidad inválida");
        }
    }
}

// Record (Java 14+) - Inmutabilidad automática
public record Usuario(String nombre, int edad) {
    // Constructor, getters, equals, hashCode, toString generados automáticamente
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: encapsulamiento"`

---

### 📍 Fase 3: Características Avanzadas (Avanzado)

#### Paso 14: Genéricos (Generics)
- [ ] Clases genéricas
- [ ] Métodos genéricos
- [ ] Wildcards (?)
- [ ] Bounded type parameters

**Ejemplo:**
```java
// Clase genérica
public class Contenedor<T> {
    private List<T> items = new ArrayList<>();
    
    public void agregar(T item) {
        items.add(item);
    }
    
    public T obtener(int indice) {
        return items.get(indice);
    }
}

// Método genérico con constraint
public <T extends Comparable<T>> T obtenerMaximo(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}

// Wildcards
public void procesarLista(List<? extends Number> numeros) {
    // Acepta List<Integer>, List<Double>, etc.
}

// Uso
Contenedor<String> contenedor = new Contenedor<>();
contenedor.agregar("Hola");
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: genéricos"`

#### Paso 15: Excepciones
- [ ] try/catch/finally
- [ ] Checked vs Unchecked exceptions
- [ ] throw y throws
- [ ] Custom exceptions

**Ejemplo:**
```java
// Custom exception
public class SaldoInsuficienteException extends Exception {
    public SaldoInsuficienteException(String mensaje) {
        super(mensaje);
    }
}

public class CuentaBancaria {
    private double saldo;
    
    public void retirar(double cantidad) throws SaldoInsuficienteException {
        if (cantidad > saldo) {
            throw new SaldoInsuficienteException("Saldo insuficiente");
        }
        saldo -= cantidad;
    }
}

// Uso
try {
    cuenta.retirar(1000);
} catch (SaldoInsuficienteException e) {
    System.err.println("Error: " + e.getMessage());
} finally {
    System.out.println("Operación finalizada");
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: manejo de excepciones"`

#### Paso 16: Streams y Lambda (Java 8+)
- [ ] Stream API
- [ ] Lambda expressions
- [ ] Method references
- [ ] Optional

**Ejemplo:**
```java
import java.util.*;
import java.util.stream.Collectors;

List<Persona> personas = Arrays.asList(
    new Persona("Juan", 25),
    new Persona("María", 30),
    new Persona("Pedro", 20)
);

// Stream API
List<String> nombresMayores = personas.stream()
    .filter(p -> p.getEdad() >= 25)
    .map(Persona::getNombre)
    .sorted()
    .collect(Collectors.toList());

// Lambda expressions
personas.forEach(p -> System.out.println(p.getNombre()));

// Method references
personas.sort(Comparator.comparing(Persona::getEdad));

// Optional
Optional<Persona> persona = personas.stream()
    .filter(p -> p.getNombre().equals("Juan"))
    .findFirst();

persona.ifPresent(p -> System.out.println("Encontrado: " + p.getNombre()));
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: streams y lambda"`

---

### 📍 Fase 4: Consumo de APIs

#### Paso 17: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] JSON en Java
- [ ] Jackson/Gson

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```java
// Modelo para deserializar JSON (con Jackson)
import com.fasterxml.jackson.annotation.JsonProperty;

public class Usuario {
    @JsonProperty("id")
    private int id;
    
    @JsonProperty("nombre")
    private String nombre;
    
    @JsonProperty("email")
    private String email;
    
    // Constructores, getters y setters
    public Usuario() {}
    
    public Usuario(int id, String nombre, String email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    
    // Getters y setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 18: Consumir APIs con HttpClient (Java 11+)
- [ ] HttpClient
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores

**Ejemplo:**
```java
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.time.Duration;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ApiCliente {
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private final String baseUrl;
    
    public ApiCliente(String baseUrl) {
        this.baseUrl = baseUrl;
        this.httpClient = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(10))
            .build();
        this.objectMapper = new ObjectMapper();
    }
    
    public Usuario obtenerUsuario(int userId) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/usuarios/" + userId))
            .GET()
            .build();
        
        HttpResponse<String> response = httpClient.send(
            request, 
            HttpResponse.BodyHandlers.ofString()
        );
        
        if (response.statusCode() == 200) {
            return objectMapper.readValue(response.body(), Usuario.class);
        } else {
            throw new RuntimeException("Error: " + response.statusCode());
        }
    }
    
    public Usuario crearUsuario(Usuario usuario) throws Exception {
        String json = objectMapper.writeValueAsString(usuario);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/usuarios"))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(json))
            .build();
        
        HttpResponse<String> response = httpClient.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        if (response.statusCode() == 201) {
            return objectMapper.readValue(response.body(), Usuario.class);
        } else {
            throw new RuntimeException("Error: " + response.statusCode());
        }
    }
}
```

**📝 Ejercicios:**
1. Consumir API pública (JSONPlaceholder, GitHub API)
2. Implementar manejo de errores con try-catch
3. Crear servicio para múltiples endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con HttpClient"`

#### Paso 19: Async/Await con CompletableFuture
- [ ] CompletableFuture
- [ ] Programación asíncrona
- [ ] thenApply, thenCompose
- [ ] Exception handling

**Ejemplo:**
```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class ApiClienteAsync {
    private final HttpClient httpClient;
    
    public CompletableFuture<Usuario> obtenerUsuarioAsync(int userId) {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/usuarios/" + userId))
            .GET()
            .build();
        
        return httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString())
            .thenApply(response -> {
                if (response.statusCode() == 200) {
                    try {
                        return objectMapper.readValue(response.body(), Usuario.class);
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                } else {
                    throw new RuntimeException("Error: " + response.statusCode());
                }
            })
            .exceptionally(ex -> {
                System.err.println("Error al obtener usuario: " + ex.getMessage());
                return null;
            });
    }
    
    public CompletableFuture<List<Usuario>> obtenerMultiplesUsuarios(List<Integer> ids) {
        List<CompletableFuture<Usuario>> futures = ids.stream()
            .map(this::obtenerUsuarioAsync)
            .toList();
        
        return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
            .thenApply(v -> futures.stream()
                .map(CompletableFuture::join)
                .filter(Objects::nonNull)
                .toList());
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: programación asíncrona"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 20: Principio de Responsabilidad Única (SRP)
- [ ] ¿Qué es SRP?
- [ ] Identificar violaciones de SRP
- [ ] Refactorizar código para cumplir SRP

**📚 Conceptos Clave:**

##### **Single Responsibility Principle (SRP)**
**Definición:** Una clase debe tener una sola razón para cambiar. Cada clase debe tener una única responsabilidad.

**Ejemplo - ❌ Mal:**
```java
public class Usuario {
    public void guardar() {
        // Guardar en base de datos
    }
    
    public void enviarEmail() {
        // Enviar email
    }
    
    public void generarReporte() {
        // Generar reporte
    }
}
```

**Ejemplo - ✅ Bien:**
```java
// Separar responsabilidades
public class Usuario {
    private String nombre;
    private String email;
    // Solo datos
}

public class UsuarioRepository {
    public void guardar(Usuario usuario) {
        // Guardar en base de datos
    }
}

public class EmailService {
    public void enviarEmail(String email, String mensaje) {
        // Enviar email
    }
}

public class ReporteService {
    public void generarReporte(Usuario usuario) {
        // Generar reporte
    }
}
```

**📝 Ejercicios:**
1. Refactorizar clase que tiene múltiples responsabilidades
2. Crear servicios separados para cada responsabilidad
3. Aplicar SRP en proyecto existente

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP"`

#### Paso 21: Principio Abierto/Cerrado (OCP)
- [ ] ¿Qué es OCP?
- [ ] Extensión sin modificación
- [ ] Usar interfaces y herencia

**Ejemplo:**
```java
// Abierto para extensión, cerrado para modificación
public interface IDescuento {
    double calcular(double precio);
}

public class DescuentoEstudiante implements IDescuento {
    @Override
    public double calcular(double precio) {
        return precio * 0.9; // 10% descuento
    }
}

public class DescuentoVIP implements IDescuento {
    @Override
    public double calcular(double precio) {
        return precio * 0.8; // 20% descuento
    }
}

public class CalculadoraPrecio {
    public double calcularPrecioFinal(double precioBase, IDescuento descuento) {
        return descuento.calcular(precioBase);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP"`

#### Paso 22: Principio de Sustitución de Liskov (LSP)
- [ ] ¿Qué es LSP?
- [ ] Contratos de clase base
- [ ] Precondiciones y postcondiciones

**Ejemplo:**
```java
// Las subclases deben poder reemplazar a la clase base
public class Animal {
    public void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

public class Perro extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("Guau");
    }
}

public class Gato extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("Miau");
    }
}

// Cualquier subclase puede reemplazar a Animal
public void hacerSonarAnimal(Animal animal) {
    animal.hacerSonido(); // Funciona con cualquier subclase
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio LSP"`

#### Paso 23: Principio de Segregación de Interfaces (ISP)
- [ ] ¿Qué es ISP?
- [ ] Interfaces específicas vs generales
- [ ] Evitar interfaces "gordas"

**Ejemplo:**
```java
// ❌ Mal: interfaz muy grande
public interface ITrabajador {
    void trabajar();
    void comer();
    void dormir();
}

// ✅ Bien: interfaces segregadas
public interface ITrabajador {
    void trabajar();
}

public interface ISerVivo {
    void comer();
    void dormir();
}

public class Empleado implements ITrabajador, ISerVivo {
    @Override
    public void trabajar() {
        System.out.println("Trabajando...");
    }
    
    @Override
    public void comer() {
        System.out.println("Comiendo...");
    }
    
    @Override
    public void dormir() {
        System.out.println("Durmiendo...");
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio ISP"`

#### Paso 24: Principio de Inversión de Dependencias (DIP)
- [ ] ¿Qué es DIP?
- [ ] Depender de abstracciones
- [ ] Inyección de dependencias

**Ejemplo:**
```java
// Depender de interfaz, no de implementación concreta
public interface IRepositorioUsuario {
    Usuario obtenerPorId(int id);
    void guardar(Usuario usuario);
}

public class UsuarioService {
    private final IRepositorioUsuario repositorio;
    
    public UsuarioService(IRepositorioUsuario repositorio) {
        this.repositorio = repositorio; // Inyección de dependencia
    }
    
    public Usuario obtenerUsuario(int id) {
        return repositorio.obtenerPorId(id);
    }
}

// Implementaciones
public class RepositorioUsuarioMemoria implements IRepositorioUsuario {
    private Map<Integer, Usuario> usuarios = new HashMap<>();
    
    @Override
    public Usuario obtenerPorId(int id) {
        return usuarios.get(id);
    }
    
    @Override
    public void guardar(Usuario usuario) {
        usuarios.put(usuario.getId(), usuario);
    }
}

public class RepositorioUsuarioBD implements IRepositorioUsuario {
    @Override
    public Usuario obtenerPorId(int id) {
        // Lógica para obtener de BD
        return null;
    }
    
    @Override
    public void guardar(Usuario usuario) {
        // Lógica para guardar en BD
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DIP"`

#### Paso 25: Principio YAGNI (You Aren't Gonna Need It)
- [ ] ¿Qué es YAGNI?
- [ ] Evitar sobre-ingeniería
- [ ] Implementar solo lo necesario

**📚 Conceptos Clave:**

##### **YAGNI (You Aren't Gonna Need It)**
**Definición:** No implementes funcionalidad hasta que realmente la necesites. Evita la sobre-ingeniería.

**Ejemplo:**
```java
// ❌ Mal: Implementar funcionalidad que no se necesita
public class Usuario {
    public void enviarEmail() {
        // No se usa
    }
    
    public void generarPDF() {
        // No se usa
    }
    
    public void exportarExcel() {
        // No se usa
    }
}

// ✅ Bien: Solo implementar lo necesario
public class Usuario {
    private String nombre;
    private String email;
    // Solo agregar métodos cuando realmente se necesiten
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI"`

#### Paso 26: Principio KISS (Keep It Simple, Stupid)
- [ ] ¿Qué es KISS?
- [ ] Simplicidad sobre complejidad
- [ ] Código legible y mantenible

**Ejemplo:**
```java
// ❌ Mal: Solución compleja innecesaria
public int calcularSuma(int[] numeros) {
    return Arrays.stream(numeros)
        .reduce(0, Integer::sum);
}

// ✅ Bien: Solución simple y clara
public int calcularSuma(int[] numeros) {
    int suma = 0;
    for (int numero : numeros) {
        suma += numero;
    }
    return suma;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS"`

#### Paso 27: Principio DRY (Don't Repeat Yourself)
- [ ] ¿Qué es DRY?
- [ ] Identificar código duplicado
- [ ] Extraer métodos comunes

**Ejemplo:**
```java
// ❌ Mal: Código duplicado
public void validarNumero(int num) {
    if (num < 0) {
        throw new IllegalArgumentException("Número negativo");
    }
}

public int sumar(int a, int b) {
    if (a < 0) {
        throw new IllegalArgumentException("Número negativo");
    }
    if (b < 0) {
        throw new IllegalArgumentException("Número negativo");
    }
    return a + b;
}

// ✅ Bien: Eliminar duplicación
public void validarNumero(int num) {
    if (num < 0) {
        throw new IllegalArgumentException("Número negativo");
    }
}

public int sumar(int a, int b) {
    validarNumero(a);
    validarNumero(b);
    return a + b;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```java
import java.time.LocalDateTime;
import java.util.*;

// Modelo
public class Tarea {
    private int id;
    private String titulo;
    private String descripcion;
    private boolean completada;
    private LocalDateTime fechaCreacion;
    
    public Tarea(int id, String titulo, String descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = false;
        this.fechaCreacion = LocalDateTime.now();
    }
    
    public void completar() {
        this.completada = true;
    }
    
    // Getters y setters
    public int getId() { return id; }
    public String getTitulo() { return titulo; }
    public boolean isCompletada() { return completada; }
}

// Repositorio (SRP)
public interface IRepositorioTarea {
    void agregar(Tarea tarea);
    Tarea obtenerPorId(int id);
    List<Tarea> obtenerTodas();
    void actualizar(Tarea tarea);
    void eliminar(int id);
}

public class RepositorioTareaMemoria implements IRepositorioTarea {
    private Map<Integer, Tarea> tareas = new HashMap<>();
    
    @Override
    public void agregar(Tarea tarea) {
        tareas.put(tarea.getId(), tarea);
    }
    
    @Override
    public Tarea obtenerPorId(int id) {
        return tareas.get(id);
    }
    
    @Override
    public List<Tarea> obtenerTodas() {
        return new ArrayList<>(tareas.values());
    }
    
    @Override
    public void actualizar(Tarea tarea) {
        tareas.put(tarea.getId(), tarea);
    }
    
    @Override
    public void eliminar(int id) {
        tareas.remove(id);
    }
}

// Servicio
public class TareaService {
    private final IRepositorioTarea repositorio;
    
    public TareaService(IRepositorioTarea repositorio) {
        this.repositorio = repositorio;
    }
    
    public boolean completarTarea(int id) {
        Tarea tarea = repositorio.obtenerPorId(id);
        if (tarea != null) {
            tarea.completar();
            repositorio.actualizar(tarea);
            return true;
        }
        return false;
    }
}
```

### Ejemplo 2: Cliente API para GitHub

```java
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GitHubApiCliente {
    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;
    private static final String BASE_URL = "https://api.github.com";
    
    public GitHubApiCliente() {
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }
    
    public UsuarioGitHub obtenerUsuario(String username) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create(BASE_URL + "/users/" + username))
            .header("Accept", "application/vnd.github.v3+json")
            .GET()
            .build();
        
        HttpResponse<String> response = httpClient.send(
            request,
            HttpResponse.BodyHandlers.ofString()
        );
        
        if (response.statusCode() == 200) {
            return objectMapper.readValue(response.body(), UsuarioGitHub.class);
        } else {
            throw new RuntimeException("Error: " + response.statusCode());
        }
    }
}

// Modelo
public class UsuarioGitHub {
    private String login;
    private String name;
    private String email;
    
    // Getters y setters
    public String getLogin() { return login; }
    public void setLogin(String login) { this.login = login; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
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

- [Documentación oficial de Java](https://docs.oracle.com/en/java/)
- [Java Tutorials (Oracle)](https://docs.oracle.com/javase/tutorial/)
- [Effective Java (Joshua Bloch)](https://www.oracle.com/java/technologies/effective-java.html)
- [Java Best Practices](https://github.com/cxxr/better-java)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Java desde principiante hasta experto.

