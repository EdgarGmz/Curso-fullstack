# 📘 Curso Completo de PHP

<div align="center">

![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Composer](https://img.shields.io/badge/Composer-885630?style=for-the-badge&logo=composer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Symfony](https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white)
![PDO](https://img.shields.io/badge/PDO-777BB4?style=for-the-badge&logo=php&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de PHP desde conceptos básicos hasta avanzados, con enfoque en programación orientada a objetos, APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

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
# 1. Verificar PHP instalado (versión 8.2 o superior)
php --version

# 2. Instalar Composer (gestor de dependencias)
# Windows: Descargar desde getcomposer.org
# Linux/Mac: curl -sS https://getcomposer.org/installer | php

# 3. Verificar Composer
composer --version

# 4. Crear nuevo proyecto
mkdir mi-proyecto
cd mi-proyecto
composer init

# 5. Crear archivo principal
# index.php
<?php
echo "¡Hola, PHP!";
?>

# 6. Ejecutar con servidor integrado
php -S localhost:8000
```

### Estructura de un Proyecto PHP

```
mi-proyecto/
├── index.php              # Punto de entrada
├── composer.json           # Dependencias
├── composer.lock          # Lock de dependencias
├── vendor/                # Dependencias instaladas
└── src/                   # Código fuente
    ├── Models/
    ├── Services/
    └── Utils/
```

---

## 📋 Requisitos Mínimos

- **PHP 8.2** o superior
- **Composer** 2.x o superior
- **Editor de código**: VS Code, PhpStorm, o cualquier editor
- **Servidor web**: Apache, Nginx, o servidor integrado de PHP
- **Conocimientos básicos**: Lógica de programación (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar PHP
- [ ] Instalar Composer
- [ ] Configurar editor de código
- [ ] Crear primer script

**📚 Conceptos Clave:**

##### **PHP (Hypertext Preprocessor)**
**Definición:** Lenguaje de programación de código abierto especialmente diseñado para desarrollo web.

**Ejemplo:**
```php
<?php
// index.php
echo "¡Hola, PHP!";
?>
```

**Composer:**
```json
// composer.json
{
    "name": "mi-proyecto/php",
    "description": "Mi primer proyecto PHP",
    "type": "project",
    "require": {
        "php": "^8.2"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto PHP"`

#### Paso 2: Tipos de Datos Básicos
- [ ] Tipos escalares (int, float, string, bool)
- [ ] Tipos compuestos (array, object)
- [ ] Tipos especiales (null, resource)
- [ ] Type hints y type declarations

**📚 Conceptos Clave:**

##### **Tipos de Datos en PHP**
**Definición:** PHP es un lenguaje de tipado dinámico, pero desde PHP 7+ soporta type hints.

**Ejemplo:**
```php
<?php
// Tipos escalares
$edad = 25;                    // int
$precio = 99.99;               // float
$nombre = "Juan";              // string
$esActivo = true;              // bool

// Arrays
$numeros = [1, 2, 3, 4, 5];
$usuario = [
    'nombre' => 'Juan',
    'email' => 'juan@example.com',
    'edad' => 25
];

// Type hints (PHP 7+)
function saludar(string $nombre): string {
    return "¡Hola, $nombre!";
}

function sumar(int $a, int $b): int {
    return $a + $b;
}

// Nullable types (PHP 7.1+)
function obtenerEdad(?int $edad): ?string {
    if ($edad === null) {
        return null;
    }
    return "La edad es $edad";
}

// Union types (PHP 8.0+)
function procesar(string|int $valor): string {
    return (string) $valor;
}
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
- [ ] Operadores de arrays

**Ejemplo:**
```php
<?php
$a = 10;
$b = 5;

// Aritméticos
$suma = $a + $b;           // 15
$resta = $a - $b;          // 5
$multiplicacion = $a * $b; // 50
$division = $a / $b;       // 2.0
$modulo = $a % $b;         // 0
$potencia = $a ** $b;      // 100000

// Comparación
$esMayor = $a > $b;        // true
$esIgual = $a == $b;       // false (comparación de valor)
$esIdentico = $a === $b;   // false (comparación de tipo y valor)
$esDiferente = $a != $b;   // true
$esDiferente2 = $a !== $b; // true

// Lógicos
$resultado = ($a > 5) && ($b < 10);  // true
$resultado2 = ($a > 15) || ($b < 3);  // false
$resultado3 = !($a > 5);              // false

// Operadores de arrays
$array1 = [1, 2, 3];
$array2 = [4, 5, 6];
$combinado = $array1 + $array2;  // [1, 2, 3, 4, 5, 6]
$igual = $array1 == $array2;      // false
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operadores y expresiones"`

#### Paso 4: Estructuras de Control
- [ ] if/elseif/else
- [ ] switch/case
- [ ] match (PHP 8.0+)
- [ ] for, while, do-while
- [ ] foreach

**Ejemplo:**
```php
<?php
// if/elseif/else
$edad = 18;
if ($edad >= 18) {
    echo "Es mayor de edad";
} elseif ($edad >= 13) {
    echo "Es adolescente";
} else {
    echo "Es menor de edad";
}

// switch
$dia = "Lunes";
switch ($dia) {
    case "Lunes":
        echo "Inicio de semana";
        break;
    case "Viernes":
        echo "Fin de semana";
        break;
    default:
        echo "Día normal";
}

// match (PHP 8.0+) - más expresivo que switch
$mensaje = match($dia) {
    "Lunes" => "Inicio de semana",
    "Viernes" => "Fin de semana",
    default => "Día normal"
};

// for
for ($i = 0; $i < 5; $i++) {
    echo $i . "\n";
}

// foreach
$frutas = ["Manzana", "Banana", "Naranja"];
foreach ($frutas as $fruta) {
    echo $fruta . "\n";
}

// foreach con clave
$usuarios = [
    'juan' => 'Juan Pérez',
    'maria' => 'María García'
];
foreach ($usuarios as $clave => $nombre) {
    echo "$clave: $nombre\n";
}

// while
$contador = 0;
while ($contador < 5) {
    echo $contador . "\n";
    $contador++;
}

// do-while
$contador = 0;
do {
    echo $contador . "\n";
    $contador++;
} while ($contador < 5);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de control"`

#### Paso 5: Arrays y Funciones de Array
- [ ] Arrays indexados y asociativos
- [ ] Funciones de array (array_map, array_filter, array_reduce)
- [ ] Spread operator (PHP 7.4+)
- [ ] Array destructuring

**Ejemplo:**
```php
<?php
// Arrays indexados
$numeros = [1, 2, 3, 4, 5];
$numeros[] = 6;  // Agregar elemento

// Arrays asociativos
$usuario = [
    'nombre' => 'Juan',
    'email' => 'juan@example.com',
    'edad' => 25
];

// Funciones de array
$dobles = array_map(fn($n) => $n * 2, $numeros);  // [2, 4, 6, 8, 10]

$mayores = array_filter($numeros, fn($n) => $n > 3);  // [4, 5]

$suma = array_reduce($numeros, fn($acc, $n) => $acc + $n, 0);  // 15

// Spread operator (PHP 7.4+)
$array1 = [1, 2, 3];
$array2 = [4, 5, 6];
$combinado = [...$array1, ...$array2];  // [1, 2, 3, 4, 5, 6]

// Array destructuring (PHP 7.1+)
[$a, $b, $c] = [1, 2, 3];
['nombre' => $nombre, 'email' => $email] = $usuario;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: arrays y funciones de array"`

#### Paso 6: Funciones
- [ ] Funciones básicas
- [ ] Parámetros y valores por defecto
- [ ] Type hints
- [ ] Arrow functions (PHP 7.4+)
- [ ] Variadic functions

**Ejemplo:**
```php
<?php
// Función básica
function saludar(string $nombre): string {
    return "¡Hola, $nombre!";
}

// Función con valores por defecto
function presentar(string $nombre, int $edad = 0): string {
    return "Soy $nombre, tengo $edad años";
}

// Variadic functions
function sumar(int ...$numeros): int {
    return array_sum($numeros);
}

echo sumar(1, 2, 3, 4, 5);  // 15

// Arrow functions (PHP 7.4+)
$multiplicar = fn($a, $b) => $a * $b;
echo $multiplicar(5, 3);  // 15

// Arrow function con scope
$factor = 10;
$multiplicarPorFactor = fn($n) => $n * $factor;
echo $multiplicarPorFactor(5);  // 50

// Callback functions
$numeros = [1, 2, 3, 4, 5];
$dobles = array_map(fn($n) => $n * 2, $numeros);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: funciones"`

---

### 📍 Fase 2: Programación Orientada a Objetos (Intermedio)

#### Paso 7: Clases y Objetos
- [ ] Definir clases
- [ ] Crear objetos (instancias)
- [ ] Propiedades y métodos
- [ ] $this

**📚 Conceptos Clave:**

##### **Clase**
**Definición:** Plantilla para crear objetos. Define propiedades y métodos.

**Ejemplo:**
```php
<?php
class Usuario {
    // Propiedades
    private string $nombre;
    private string $email;
    private ?int $edad;
    private bool $activo;
    
    // Constructor
    public function __construct(string $nombre, string $email, ?int $edad = null) {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->edad = $edad;
        $this->activo = true;
    }
    
    // Getters
    public function getNombre(): string {
        return $this->nombre;
    }
    
    public function getEmail(): string {
        return $this->email;
    }
    
    public function getEdad(): ?int {
        return $this->edad;
    }
    
    // Setters
    public function setNombre(string $nombre): void {
        $this->nombre = $nombre;
    }
    
    public function setEdad(?int $edad): void {
        $this->edad = $edad;
    }
    
    // Método
    public function presentarse(): string {
        return "Soy {$this->nombre}, tengo {$this->edad} años";
    }
}

// Uso
$usuario = new Usuario("Juan Pérez", "juan@example.com", 25);
echo $usuario->presentarse();  // "Soy Juan Pérez, tengo 25 años"
```

**📝 Ejercicios:**
1. Crear clase `Producto` con propiedades y métodos
2. Crear clase `CuentaBancaria` con métodos de depósito y retiro
3. Implementar validaciones en setters

> 💡 **Sugerencia de Commit**: `git commit -m "feat: clases y objetos básicos"`

#### Paso 8: Modificadores de Acceso
- [ ] public
- [ ] private
- [ ] protected
- [ ] readonly (PHP 8.1+)

**Ejemplo:**
```php
<?php
class Banco {
    private float $saldo = 0;  // Solo accesible dentro de la clase
    
    public function obtenerSaldo(): float {  // Accesible desde cualquier lugar
        return $this->saldo;
    }
    
    protected function metodoProtegido(): void {  // Accesible en la clase y subclases
        // ...
    }
    
    public function depositar(float $cantidad): void {
        if ($cantidad > 0) {
            $this->saldo += $cantidad;
        }
    }
}

// Readonly properties (PHP 8.1+)
class Usuario {
    public readonly int $id;
    public readonly string $nombre;
    
    public function __construct(int $id, string $nombre) {
        $this->id = $id;
        $this->nombre = $nombre;
    }
    
    // $this->id = 999;  // Error: propiedad readonly
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: modificadores de acceso"`

#### Paso 9: Herencia
- [ ] Herencia simple (extends)
- [ ] parent::
- [ ] Clases abstractas
- [ ] Métodos final

**📚 Conceptos Clave:**

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar propiedades y métodos de otra.

**Ejemplo:**
```php
<?php
// Clase base
class Animal {
    protected string $nombre;
    
    public function __construct(string $nombre) {
        $this->nombre = $nombre;
    }
    
    public function hacerSonido(): string {
        return "Sonido genérico";
    }
}

// Clase derivada
class Perro extends Animal {
    private string $raza;
    
    public function __construct(string $nombre, string $raza) {
        parent::__construct($nombre);  // Llamar al constructor padre
        $this->raza = $raza;
    }
    
    public function hacerSonido(): string {  // Sobrescribir método
        return "Guau guau";
    }
    
    public function correr(): string {
        return "{$this->nombre} está corriendo";
    }
}

// Uso
$perro = new Perro("Max", "Labrador");
echo $perro->hacerSonido();  // "Guau guau"
echo $perro->correr();       // "Max está corriendo"
```

**📝 Ejercicios:**
1. Crear jerarquía: Vehiculo -> Auto, Moto
2. Implementar clases abstractas
3. Usar parent:: para llamar métodos padre

> 💡 **Sugerencia de Commit**: `git commit -m "feat: herencia y polimorfismo"`

#### Paso 10: Interfaces y Traits
- [ ] Definir interfaces
- [ ] Implementar interfaces
- [ ] Interfaces múltiples
- [ ] Traits (reutilización de código)

**Ejemplo:**
```php
<?php
// Definir interfaz
interface IVolador {
    public function volar(): void;
}

interface INadador {
    public function nadar(): void;
}

// Implementar múltiples interfaces
class Pato implements IVolador, INadador {
    public function volar(): void {
        echo "El pato vuela\n";
    }
    
    public function nadar(): void {
        echo "El pato nada\n";
    }
}

// Traits - Reutilización de código
trait Loggable {
    public function log(string $mensaje): void {
        echo "[LOG] $mensaje\n";
    }
}

trait Timestampable {
    public function getTimestamp(): string {
        return date('Y-m-d H:i:s');
    }
}

class Usuario {
    use Loggable, Timestampable;
    
    private string $nombre;
    
    public function __construct(string $nombre) {
        $this->nombre = $nombre;
        $this->log("Usuario creado: $nombre");
    }
}

$usuario = new Usuario("Juan");
$usuario->log("Usuario activo");
echo $usuario->getTimestamp();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: interfaces y traits"`

#### Paso 11: Polimorfismo
- [ ] Polimorfismo con herencia
- [ ] Polimorfismo con interfaces
- [ ] Métodos abstractos
- [ ] Type hints con interfaces

**Ejemplo:**
```php
<?php
abstract class Forma {
    abstract public function calcularArea(): float;
}

class Circulo extends Forma {
    private float $radio;
    
    public function __construct(float $radio) {
        $this->radio = $radio;
    }
    
    public function calcularArea(): float {
        return pi() * $this->radio ** 2;
    }
}

class Rectangulo extends Forma {
    private float $ancho;
    private float $alto;
    
    public function __construct(float $ancho, float $alto) {
        $this->ancho = $ancho;
        $this->alto = $alto;
    }
    
    public function calcularArea(): float {
        return $this->ancho * $this->alto;
    }
}

// Polimorfismo en acción
$formas = [
    new Circulo(5),
    new Rectangulo(4, 6)
];

foreach ($formas as $forma) {
    echo "Área: " . $forma->calcularArea() . "\n";
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: polimorfismo avanzado"`

#### Paso 12: Encapsulamiento
- [ ] Getters y setters
- [ ] Propiedades privadas
- [ ] Validación en setters
- [ ] Magic methods (__get, __set)

**Ejemplo:**
```php
<?php
class CuentaBancaria {
    private float $saldo;
    
    public function __construct(float $saldoInicial = 0) {
        if ($saldoInicial >= 0) {
            $this->saldo = $saldoInicial;
        } else {
            throw new InvalidArgumentException("El saldo no puede ser negativo");
        }
    }
    
    public function getSaldo(): float {
        return $this->saldo;
    }
    
    public function depositar(float $cantidad): void {
        if ($cantidad > 0) {
            $this->saldo += $cantidad;
        } else {
            throw new InvalidArgumentException("La cantidad debe ser positiva");
        }
    }
    
    public function retirar(float $cantidad): void {
        if ($cantidad > 0 && $cantidad <= $this->saldo) {
            $this->saldo -= $cantidad;
        } else {
            throw new InvalidArgumentException("Cantidad inválida");
        }
    }
}

// Magic methods para acceso dinámico
class Usuario {
    private array $datos = [];
    
    public function __set(string $nombre, mixed $valor): void {
        $this->datos[$nombre] = $valor;
    }
    
    public function __get(string $nombre): mixed {
        return $this->datos[$nombre] ?? null;
    }
    
    public function __isset(string $nombre): bool {
        return isset($this->datos[$nombre]);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: encapsulamiento"`

---

### 📍 Fase 3: Características Avanzadas (Avanzado)

#### Paso 13: Namespaces y Autoloading
- [ ] Namespaces
- [ ] use statements
- [ ] PSR-4 autoloading
- [ ] Composer autoload

**Ejemplo:**
```php
<?php
// Definir namespace
namespace App\Models;

class Usuario {
    private string $nombre;
    
    public function __construct(string $nombre) {
        $this->nombre = $nombre;
    }
}

// Usar namespace
namespace App\Controllers;

use App\Models\Usuario;

class UsuarioController {
    public function crear(): void {
        $usuario = new Usuario("Juan");
    }
}

// Autoloading con Composer (PSR-4)
// composer.json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}

// Luego ejecutar: composer dump-autoload
// Y usar:
require_once 'vendor/autoload.php';

use App\Models\Usuario;
use App\Services\UsuarioService;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: namespaces y autoloading"`

#### Paso 14: Excepciones y Manejo de Errores
- [ ] try/catch/finally
- [ ] Crear excepciones personalizadas
- [ ] throw y re-throw
- [ ] Error handling

**Ejemplo:**
```php
<?php
// Excepción personalizada
class SaldoInsuficienteException extends Exception {
    public function __construct(float $saldo, float $cantidad) {
        $mensaje = "Saldo insuficiente. Saldo actual: $saldo, Cantidad solicitada: $cantidad";
        parent::__construct($mensaje);
    }
}

class CuentaBancaria {
    private float $saldo = 0;
    
    public function retirar(float $cantidad): void {
        if ($cantidad > $this->saldo) {
            throw new SaldoInsuficienteException($this->saldo, $cantidad);
        }
        $this->saldo -= $cantidad;
    }
}

// Manejo de excepciones
try {
    $cuenta = new CuentaBancaria(100);
    $cuenta->retirar(200);
} catch (SaldoInsuficienteException $e) {
    echo "Error: " . $e->getMessage() . "\n";
} catch (Exception $e) {
    echo "Error general: " . $e->getMessage() . "\n";
} finally {
    echo "Operación finalizada\n";
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: manejo de excepciones"`

#### Paso 15: Generadores
- [ ] ¿Qué son los generadores?
- [ ] yield
- [ ] Generator functions
- [ ] Ventajas de los generadores

**Ejemplo:**
```php
<?php
// Generador básico
function numerosPares(): Generator {
    $n = 0;
    while (true) {
        yield $n;
        $n += 2;
    }
}

// Uso
$gen = numerosPares();
echo $gen->current();  // 0
$gen->next();
echo $gen->current();  // 2
$gen->next();
echo $gen->current();  // 4

// Generador con límite
function numerosHasta(int $limite): Generator {
    for ($i = 0; $i < $limite; $i++) {
        yield $i;
    }
}

foreach (numerosHasta(5) as $numero) {
    echo $numero . "\n";  // 0, 1, 2, 3, 4
}

// Ventaja: Eficiencia de memoria
// Un generador no carga todos los valores en memoria a la vez
function leerArchivoGrande(string $archivo): Generator {
    $handle = fopen($archivo, 'r');
    while (($linea = fgets($handle)) !== false) {
        yield trim($linea);
    }
    fclose($handle);
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: generadores"`

---

### 📍 Fase 4: Consumo de APIs

#### Paso 16: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] JSON en PHP
- [ ] cURL y Guzzle

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```php
<?php
// Modelo para deserializar JSON
class Usuario {
    public int $id;
    public string $nombre;
    public string $email;
    
    public static function fromJson(array $data): self {
        $usuario = new self();
        $usuario->id = $data['id'];
        $usuario->nombre = $data['nombre'];
        $usuario->email = $data['email'];
        return $usuario;
    }
    
    public function toJson(): array {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'email' => $this->email
        ];
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 17: Consumir APIs con cURL
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Headers y autenticación
- [ ] Manejo de errores

**Ejemplo:**
```php
<?php
class ApiCliente {
    private string $baseUrl;
    
    public function __construct(string $baseUrl) {
        $this->baseUrl = $baseUrl;
    }
    
    public function obtenerUsuario(int $userId): ?array {
        $ch = curl_init();
        
        curl_setopt_array($ch, [
            CURLOPT_URL => "{$this->baseUrl}/usuarios/{$userId}",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Accept: application/json'
            ]
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            return json_decode($response, true);
        }
        
        return null;
    }
    
    public function crearUsuario(array $datos): ?array {
        $ch = curl_init();
        
        curl_setopt_array($ch, [
            CURLOPT_URL => "{$this->baseUrl}/usuarios",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => json_encode($datos),
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/json',
                'Accept: application/json'
            ]
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 201) {
            return json_decode($response, true);
        }
        
        return null;
    }
}

// Uso
$cliente = new ApiCliente("https://api.example.com");
$usuario = $cliente->obtenerUsuario(1);
```

**📝 Ejercicios:**
1. Consumir API pública (JSONPlaceholder, GitHub API)
2. Implementar manejo de errores con try-catch
3. Crear servicio para múltiples endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con cURL"`

#### Paso 18: Consumir APIs con Guzzle
- [ ] Instalar Guzzle
- [ ] Realizar peticiones con Guzzle
- [ ] Manejo de respuestas
- [ ] Middleware y interceptores

**Ejemplo:**
```php
<?php
// Instalar: composer require guzzlehttp/guzzle

require_once 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ApiCliente {
    private Client $client;
    
    public function __construct(string $baseUrl) {
        $this->client = new Client([
            'base_uri' => $baseUrl,
            'timeout' => 5.0,
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept' => 'application/json'
            ]
        ]);
    }
    
    public function obtenerUsuario(int $userId): ?array {
        try {
            $response = $this->client->get("/usuarios/{$userId}");
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            echo "Error: " . $e->getMessage() . "\n";
            return null;
        }
    }
    
    public function crearUsuario(array $datos): ?array {
        try {
            $response = $this->client->post('/usuarios', [
                'json' => $datos
            ]);
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            echo "Error: " . $e->getMessage() . "\n";
            return null;
        }
    }
    
    public function actualizarUsuario(int $userId, array $datos): ?array {
        try {
            $response = $this->client->put("/usuarios/{$userId}", [
                'json' => $datos
            ]);
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            echo "Error: " . $e->getMessage() . "\n";
            return null;
        }
    }
}

// Uso
$cliente = new ApiCliente("https://api.example.com");
$usuario = $cliente->obtenerUsuario(1);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con Guzzle"`

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
```php
<?php
class Usuario {
    public function guardar(): void {
        // Guardar en base de datos
    }
    
    public function enviarEmail(): void {
        // Enviar email
    }
    
    public function generarReporte(): void {
        // Generar reporte
    }
}
```

**Ejemplo - ✅ Bien:**
```php
<?php
// Separar responsabilidades
class Usuario {
    private string $nombre;
    private string $email;
    // Solo datos
}

class UsuarioRepository {
    public function guardar(Usuario $usuario): void {
        // Guardar en base de datos
    }
}

class EmailService {
    public function enviarEmail(string $email, string $mensaje): void {
        // Enviar email
    }
}

class ReporteService {
    public function generarReporte(Usuario $usuario): void {
        // Generar reporte
    }
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
```php
<?php
// Abierto para extensión, cerrado para modificación
interface IDescuento {
    public function calcular(float $precio): float;
}

class DescuentoEstudiante implements IDescuento {
    public function calcular(float $precio): float {
        return $precio * 0.9; // 10% descuento
    }
}

class DescuentoVIP implements IDescuento {
    public function calcular(float $precio): float {
        return $precio * 0.8; // 20% descuento
    }
}

class CalculadoraPrecio {
    public function calcularPrecioFinal(float $precioBase, IDescuento $descuento): float {
        return $descuento->calcular($precioBase);
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP"`

#### Paso 21: Principio de Sustitución de Liskov (LSP)
- [ ] ¿Qué es LSP?
- [ ] Contratos de clase base
- [ ] Precondiciones y postcondiciones

**Ejemplo:**
```php
<?php
// Las subclases deben poder reemplazar a la clase base
class Animal {
    public function hacerSonido(): string {
        return "Sonido genérico";
    }
}

class Perro extends Animal {
    public function hacerSonido(): string {
        return "Guau";
    }
}

class Gato extends Animal {
    public function hacerSonido(): string {
        return "Miau";
    }
}

// Cualquier subclase puede reemplazar a Animal
function hacerSonarAnimal(Animal $animal): void {
    echo $animal->hacerSonido() . "\n";
}

// Funciona con cualquier subclase
hacerSonarAnimal(new Perro()); // "Guau"
hacerSonarAnimal(new Gato());  // "Miau"
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio LSP"`

#### Paso 22: Principio de Segregación de Interfaces (ISP)
- [ ] ¿Qué es ISP?
- [ ] Interfaces específicas vs generales
- [ ] Evitar interfaces "gordas"

**Ejemplo:**
```php
<?php
// ❌ Mal: interfaz muy grande
interface ITrabajador {
    public function trabajar(): void;
    public function comer(): void;
    public function dormir(): void;
}

// ✅ Bien: interfaces segregadas
interface ITrabajador {
    public function trabajar(): void;
}

interface ISerVivo {
    public function comer(): void;
    public function dormir(): void;
}

class Empleado implements ITrabajador, ISerVivo {
    public function trabajar(): void {
        echo "Trabajando...\n";
    }
    
    public function comer(): void {
        echo "Comiendo...\n";
    }
    
    public function dormir(): void {
        echo "Durmiendo...\n";
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio ISP"`

#### Paso 23: Principio de Inversión de Dependencias (DIP)
- [ ] ¿Qué es DIP?
- [ ] Depender de abstracciones
- [ ] Inyección de dependencias

**Ejemplo:**
```php
<?php
// Depender de interfaz, no de implementación concreta
interface IRepositorioUsuario {
    public function obtenerPorId(int $id): ?Usuario;
    public function guardar(Usuario $usuario): void;
}

class UsuarioService {
    public function __construct(
        private IRepositorioUsuario $repositorio
    ) {}
    
    public function obtenerUsuario(int $id): Usuario {
        $usuario = $this->repositorio->obtenerPorId($id);
        if ($usuario === null) {
            throw new Exception("Usuario no encontrado");
        }
        return $usuario;
    }
}

// Implementaciones
class RepositorioUsuarioMemoria implements IRepositorioUsuario {
    private array $usuarios = [];
    
    public function obtenerPorId(int $id): ?Usuario {
        return $this->usuarios[$id] ?? null;
    }
    
    public function guardar(Usuario $usuario): void {
        $this->usuarios[$usuario->getId()] = $usuario;
    }
}

class RepositorioUsuarioBD implements IRepositorioUsuario {
    public function obtenerPorId(int $id): ?Usuario {
        // Lógica para obtener de BD
        return null;
    }
    
    public function guardar(Usuario $usuario): void {
        // Lógica para guardar en BD
    }
}
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
```php
<?php
// ❌ Mal: Implementar funcionalidad que no se necesita
class Usuario {
    public function enviarEmail(): void {
        // No se usa
    }
    
    public function generarPDF(): void {
        // No se usa
    }
    
    public function exportarExcel(): void {
        // No se usa
    }
}

// ✅ Bien: Solo implementar lo necesario
class Usuario {
    private string $nombre;
    private string $email;
    // Solo agregar métodos cuando realmente se necesiten
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI"`

#### Paso 25: Principio KISS (Keep It Simple, Stupid)
- [ ] ¿Qué es KISS?
- [ ] Simplicidad sobre complejidad
- [ ] Código legible y mantenible

**Ejemplo:**
```php
<?php
// ❌ Mal: Solución compleja innecesaria
function calcularSuma(array $numeros): int {
    return array_reduce($numeros, fn($acc, $n) => $acc + $n, 0);
}

// ✅ Bien: Solución simple y clara
function calcularSuma(array $numeros): int {
    $suma = 0;
    foreach ($numeros as $numero) {
        $suma += $numero;
    }
    return $suma;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS"`

#### Paso 26: Principio DRY (Don't Repeat Yourself)
- [ ] ¿Qué es DRY?
- [ ] Identificar código duplicado
- [ ] Extraer funciones comunes
- [ ] Usar traits para reutilización

**Ejemplo:**
```php
<?php
// ❌ Mal: Código duplicado
function validarNumero(int $num): void {
    if ($num < 0) {
        throw new InvalidArgumentException("Número negativo");
    }
}

function sumar(int $a, int $b): int {
    if ($a < 0) {
        throw new InvalidArgumentException("Número negativo");
    }
    if ($b < 0) {
        throw new InvalidArgumentException("Número negativo");
    }
    return $a + $b;
}

// ✅ Bien: Eliminar duplicación
function validarNumero(int $num): void {
    if ($num < 0) {
        throw new InvalidArgumentException("Número negativo");
    }
}

function sumar(int $a, int $b): int {
    validarNumero($a);
    validarNumero($b);
    return $a + $b;
}

// Usar traits para reutilización
trait Validaciones {
    protected function validarEmail(string $email): bool {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    protected function validarEdad(int $edad): bool {
        return $edad >= 0 && $edad <= 150;
    }
}

class Usuario {
    use Validaciones;
    
    public function setEmail(string $email): void {
        if (!$this->validarEmail($email)) {
            throw new InvalidArgumentException("Email inválido");
        }
        $this->email = $email;
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```php
<?php
namespace App\Models;

class Tarea {
    private int $id;
    private string $titulo;
    private string $descripcion;
    private bool $completada;
    private \DateTime $fechaCreacion;
    
    public function __construct(string $titulo, string $descripcion) {
        $this->titulo = $titulo;
        $this->descripcion = $descripcion;
        $this->completada = false;
        $this->fechaCreacion = new \DateTime();
    }
    
    public function completar(): void {
        $this->completada = true;
    }
    
    // Getters
    public function getId(): int { return $this->id; }
    public function getTitulo(): string { return $this->titulo; }
    public function isCompletada(): bool { return $this->completada; }
}

// Repositorio (SRP)
interface IRepositorioTarea {
    public function agregar(Tarea $tarea): void;
    public function obtenerPorId(int $id): ?Tarea;
    public function obtenerTodas(): array;
}

class RepositorioTareaMemoria implements IRepositorioTarea {
    private array $tareas = [];
    private int $nextId = 1;
    
    public function agregar(Tarea $tarea): void {
        $tarea->id = $this->nextId++;
        $this->tareas[$tarea->getId()] = $tarea;
    }
    
    public function obtenerPorId(int $id): ?Tarea {
        return $this->tareas[$id] ?? null;
    }
    
    public function obtenerTodas(): array {
        return array_values($this->tareas);
    }
}

// Servicio
class TareaService {
    public function __construct(
        private IRepositorioTarea $repositorio
    ) {}
    
    public function completarTarea(int $id): bool {
        $tarea = $this->repositorio->obtenerPorId($id);
        if ($tarea !== null) {
            $tarea->completar();
            return true;
        }
        return false;
    }
}
```

### Ejemplo 2: Cliente API para GitHub

```php
<?php
namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class GitHubApiCliente {
    private Client $client;
    private const BASE_URL = "https://api.github.com";
    
    public function __construct() {
        $this->client = new Client([
            'base_uri' => self::BASE_URL,
            'headers' => [
                'Accept' => 'application/vnd.github.v3+json',
                'User-Agent' => 'MiApp'
            ]
        ]);
    }
    
    public function obtenerUsuario(string $username): ?array {
        try {
            $response = $this->client->get("/users/{$username}");
            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            echo "Error al obtener usuario: " . $e->getMessage() . "\n";
            return null;
        }
    }
}

// Uso
$cliente = new GitHubApiCliente();
$usuario = $cliente->obtenerUsuario("octocat");
if ($usuario) {
    echo "Usuario: " . $usuario['login'] . "\n";
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

- [Documentación oficial de PHP](https://www.php.net/docs.php)
- [PHP The Right Way](https://phptherightway.com/)
- [PSR Standards](https://www.php-fig.org/psr/)
- [Composer Documentation](https://getcomposer.org/doc/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de PHP desde principiante hasta experto.

