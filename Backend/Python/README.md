# 🐍 Python Backend & POO - Guía Completa de Aprendizaje

![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)
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

Este curso está diseñado para llevarte desde los fundamentos de Python hasta el desarrollo backend profesional, con énfasis en Programación Orientada a Objetos (POO) y buenas prácticas de desarrollo.

### Metodología de Enseñanza

- **Pedagógica**: Explicaciones claras y progresivas
- **Práctica**: Ejemplos reales y casos de uso
- **Estructurada**: Desde lo básico hasta lo avanzado
- **Profesional**: Principios SOLID, YAGNI, KISS

---

## 🛠️ Configuración del Entorno

### 1. Instalación de Python

#### Windows

```bash
# Descarga Python desde python.org (versión 3.11+)
# Durante la instalación, marca "Add Python to PATH"

# Verificar instalación
python --version
pip --version
```

#### macOS

```bash
# Usando Homebrew
brew install python@3.11

# Verificar instalación
python3 --version
pip3 --version
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install python3. 11 python3-pip python3-venv

# Verificar instalación
python3 --version
pip3 --version
```

### 2. Configuración del Entorno Virtual

```bash
# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

# Desactivar (cuando termines)
deactivate
```

### 3. Instalación de Dependencias Básicas

```bash
# Actualizar pip
pip install --upgrade pip

# Instalar herramientas esenciales
pip install black flake8 pylint mypy pytest ipython

# Para desarrollo backend
pip install fastapi uvicorn sqlalchemy pydantic python-dotenv
```

### 4. Configuración del IDE

#### Visual Studio Code (Recomendado)

```bash
# Instalar extensiones recomendadas
code --install-extension ms-python. python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-python.black-formatter
code --install-extension donjayamanne.python-environment-manager
```

**Configuración en `.vscode/settings.json`:**

```json
{
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.formatting.provider": "black",
  "python.testing.pytestEnabled": true,
  "editor.formatOnSave": true,
  "python.analysis.typeCheckingMode": "basic"
}
```

#### PyCharm (Alternativa)

- Descargar PyCharm Community (gratuito)
- Configurar intérprete Python
- Activar PEP 8 code style

### 5. Estructura de Proyecto Base

```
python-backend-course/
├── venv/                  # Entorno virtual (no versionar)
├── tema_01_fundamentos/
│   ├── teoria.py
│   ├── ejemplos.py
│   ├── casos_uso.py
│   ├── errores_comunes.py
│   └── ejercicios.py
├── tema_02_tipos_datos/
│   └── ...
├── tests/                 # Tests unitarios
│   ├── test_tema_01.py
│   └── ...
├── . gitignore
├── requirements.txt
└── README.md
```

**Archivo `.gitignore`:**

```
venv/
__pycache__/
*.pyc
*.pyo
*.pyd
. Python
*. so
*. egg
*. egg-info/
dist/
build/
. pytest_cache/
.mypy_cache/
. coverage
. env
```

**Archivo `requirements.txt`:**

```
# Desarrollo
black==23.12.1
flake8==7.0.0
pylint==3.0.3
mypy==1.8.0
pytest==7.4.4

# Backend
fastapi==0.109.0
uvicorn[standard]==0.27.0
sqlalchemy==2.0.25
pydantic==2.5.3
python-dotenv==1.0.0
```

---

## 📚 Estructura del Curso

Cada tema incluye:

1. **📖 Teoría** (`teoria.py`): Conceptos fundamentales
2. **💡 Ejemplos** (`ejemplos.py`): Código demostración
3. **🎯 Casos de Uso** (`casos_uso.py`): Aplicaciones prácticas
4. **⚠️ Errores Comunes** (`errores_comunes.py`): Qué evitar
5. **✏️ Ejercicios** (`ejercicios.py`): 5 ejercicios progresivos

---

## 📖 Temario

### 🔰 Módulo 1: Fundamentos

#### Tema 1: Introducción a Python

- Variables y asignación
- Comentarios y documentación
- Entrada/salida básica
- Primer programa

#### Tema 2: Tipos de Datos Básicos

- Números (int, float, complex)
- Strings y operaciones
- Booleanos
- Type hints y anotaciones

#### Tema 3: Operadores

- Aritméticos
- Comparación
- Lógicos
- Asignación compuesta

#### Tema 4: Estructuras de Control

- Condicionales (if, elif, else)
- Operador ternario
- Match-case (Python 3.10+)

#### Tema 5: Bucles

- While
- For y range()
- Break, continue, else
- List comprehensions

### 🗂️ Módulo 2: Estructuras de Datos

#### Tema 6: Listas

- Creación y manipulación
- Métodos principales
- Slicing avanzado
- Listas anidadas

#### Tema 7: Tuplas

- Inmutabilidad
- Desempaquetado
- Named tuples
- Cuándo usar tuplas

#### Tema 8: Diccionarios

- Creación y acceso
- Métodos importantes
- Dict comprehensions
- Valores predeterminados

#### Tema 9: Sets

- Operaciones de conjunto
- Métodos útiles
- Set comprehensions
- Frozen sets

#### Tema 10: Strings Avanzados

- Formateo (f-strings, format)
- Métodos de string
- Expresiones regulares
- Encoding y decodificación

### 🔧 Módulo 3: Funciones

#### Tema 11: Funciones Básicas

- Definición y llamada
- Parámetros y argumentos
- Return y yield
- Docstrings

#### Tema 12: Funciones Avanzadas

- \*args y \*\*kwargs
- Funciones lambda
- Decoradores
- Closures

#### Tema 13: Funciones Built-in

- Map, filter, reduce
- Zip, enumerate
- Any, all
- Sorted, reversed

#### Tema 14: Manejo de Errores

- Try-except-else-finally
- Tipos de excepciones
- Crear excepciones personalizadas
- Context managers

### 🎨 Módulo 4: Programación Orientada a Objetos

#### Tema 15: Clases y Objetos Básicos

- Definición de clases
- Constructor **init**
- Atributos de instancia y clase
- Métodos de instancia

#### Tema 16: Encapsulamiento

- Atributos públicos, protegidos, privados
- Property y setters
- Name mangling
- Getters y setters

#### Tema 17: Herencia

- Herencia simple
- super()
- Sobrescritura de métodos
- Method Resolution Order (MRO)

#### Tema 18: Polimorfismo

- Duck typing
- Sobrecarga de operadores
- Métodos abstractos
- Protocol y structural subtyping

#### Tema 19: Composición y Agregación

- Composición vs herencia
- Dependency injection
- Mixins
- Interfaces

#### Tema 20: Métodos Especiales

- **str** y **repr**
- **len**, **getitem**
- **call**, **enter**, **exit**
- Operadores aritméticos

### 🏗️ Módulo 5: Principios de Diseño

#### Tema 21: SOLID - Single Responsibility

- Definición y propósito
- Ejemplos prácticos
- Refactorización
- Aplicación en Python

#### Tema 22: SOLID - Open/Closed

- Abierto para extensión
- Cerrado para modificación
- Patrones de diseño
- Uso de abstracciones

#### Tema 23: SOLID - Liskov Substitution

- Sustitución de tipos
- Contratos de clase
- Precondiciones y postcondiciones
- Ejemplos prácticos

#### Tema 24: SOLID - Interface Segregation

- Interfaces pequeñas
- Protocol en Python
- Evitar interfaces gordas
- Multiple inheritance

#### Tema 25: SOLID - Dependency Inversion

- Depender de abstracciones
- Inversión de control
- Dependency injection
- Patrones de inyección

#### Tema 26: YAGNI (You Aren't Gonna Need It)

- No sobreingeniería
- Desarrollo iterativo
- Cuándo aplicarlo
- Ejemplos de violaciones

#### Tema 27: KISS (Keep It Simple, Stupid)

- Simplicidad sobre complejidad
- Código legible
- Refactorización
- Code smells

### 📦 Módulo 6: Módulos y Paquetes

#### Tema 28: Módulos

- Importación
- **name** y **main**
- Crear módulos propios
- Namespaces

#### Tema 29: Paquetes

- Estructura de paquetes
- **init**.py
- Importación relativa
- Distribución de paquetes

#### Tema 30: Gestión de Dependencias

- pip y requirements.txt
- Virtual environments
- Poetry
- Pipenv

### 📁 Módulo 7: Archivos y Datos

#### Tema 31: Manejo de Archivos

- Open, read, write
- Context managers
- Modos de apertura
- Rutas con pathlib

#### Tema 32: JSON

- Serialización
- Deserialización
- Trabajar con APIs
- JSON Schema

#### Tema 33: CSV

- Leer y escribir CSV
- DictReader y DictWriter
- Manejo de delimitadores
- Datos tabulares

#### Tema 34: Bases de Datos

- SQLite básico
- CRUD operations
- Parámetros seguros
- Transacciones

### 🔌 Módulo 8: Backend Fundamentals

#### Tema 35: HTTP y APIs REST

- Métodos HTTP
- Status codes
- Headers
- REST principles

#### Tema 36: SQLAlchemy ORM

- Modelos
- Relaciones
- Queries
- Migrations

#### Tema 37: FastAPI Básico

- Rutas y endpoints
- Path y query parameters
- Request body
- Response models

#### Tema 38: FastAPI Avanzado

- Dependency injection
- Middleware
- Authentication
- Background tasks

#### Tema 39: Validación con Pydantic

- BaseModel
- Validators
- Config
- Custom types

#### Tema 40: Testing Backend

- Pytest
- Fixtures
- Mocking
- Test coverage

### 🚀 Módulo 9: Conceptos Avanzados

#### Tema 41: Asincronía

- async/await
- asyncio
- Concurrencia vs paralelismo
- Event loop

#### Tema 42: Type Hints Avanzados

- Generic types
- Union y Optional
- TypeVar
- Protocol

#### Tema 43: Metaprogramación

- Metaclases
- **new** vs **init**
- Descriptores
- Class decorators

#### Tema 44: Patrones de Diseño

- Singleton
- Factory
- Observer
- Repository pattern

#### Tema 45: Arquitectura Backend

- Clean Architecture
- Layered architecture
- Domain-Driven Design
- Microservicios

---

## 🎯 Principios de Diseño

### SOLID

#### **S** - Single Responsibility Principle

> Una clase debe tener una única razón para cambiar

```python
# ❌ Mal
class User:
    def __init__(self, name):
        self.name = name

    def save_to_database(self):
        # Lógica de base de datos
        pass

    def send_email(self):
        # Lógica de email
        pass

# ✅ Bien
class User:
    def __init__(self, name):
        self.name = name

class UserRepository:
    def save(self, user:  User):
        # Lógica de base de datos
        pass

class EmailService:
    def send_welcome_email(self, user: User):
        # Lógica de email
        pass
```

#### **O** - Open/Closed Principle

> Abierto para extensión, cerrado para modificación

```python
# ❌ Mal
class DiscountCalculator:
    def calculate(self, customer_type, amount):
        if customer_type == "regular":
            return amount * 0.95
        elif customer_type == "vip":
            return amount * 0.90
        # Agregar nuevos tipos requiere modificar esta clase

# ✅ Bien
from abc import ABC, abstractmethod

class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, amount: float) -> float:
        pass

class RegularDiscount(DiscountStrategy):
    def calculate(self, amount:  float) -> float:
        return amount * 0.95

class VIPDiscount(DiscountStrategy):
    def calculate(self, amount: float) -> float:
        return amount * 0.90
```

#### **L** - Liskov Substitution Principle

> Los objetos de una subclase deben poder reemplazar a los de la superclase

```python
# ❌ Mal
class Bird:
    def fly(self):
        return "Flying"

class Penguin(Bird):
    def fly(self):
        raise Exception("Penguins can't fly!")

# ✅ Bien
class Bird:
    def move(self):
        pass

class Sparrow(Bird):
    def move(self):
        return "Flying"

class Penguin(Bird):
    def move(self):
        return "Swimming"
```

#### **I** - Interface Segregation Principle

> No forzar a implementar interfaces que no se usan

```python
# ❌ Mal
class Worker:
    def work(self):
        pass

    def eat(self):
        pass

class Robot(Worker):
    def eat(self):
        raise Exception("Robots don't eat!")

# ✅ Bien
from typing import Protocol

class Workable(Protocol):
    def work(self) -> None:
        pass

class Eatable(Protocol):
    def eat(self) -> None:
        pass

class Human:
    def work(self):
        pass

    def eat(self):
        pass

class Robot:
    def work(self):
        pass
```

#### **D** - Dependency Inversion Principle

> Depender de abstracciones, no de implementaciones concretas

```python
# ❌ Mal
class MySQLDatabase:
    def save(self, data):
        print("Saving to MySQL")

class UserService:
    def __init__(self):
        self.db = MySQLDatabase()  # Dependencia concreta

    def save_user(self, user):
        self.db.save(user)

# ✅ Bien
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def save(self, data):
        pass

class MySQLDatabase(Database):
    def save(self, data):
        print("Saving to MySQL")

class PostgreSQLDatabase(Database):
    def save(self, data):
        print("Saving to PostgreSQL")

class UserService:
    def __init__(self, database: Database):
        self.db = database  # Dependencia inyectada

    def save_user(self, user):
        self.db.save(user)
```

### YAGNI (You Aren't Gonna Need It)

> No implementes funcionalidad hasta que sea necesaria

```python
# ❌ Mal - Sobreingeniería
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.facebook_id = None  # Por si acaso en el futuro
        self.twitter_handle = None  # Por si acaso
        self.linkedin_profile = None  # Por si acaso
        self.preferences = {}  # Por si acaso
        self.settings = {}  # Por si acaso

# ✅ Bien - Solo lo necesario ahora
class User:
    def __init__(self, name:  str, email: str):
        self.name = name
        self.email = email

    # Agregar campos cuando sean realmente necesarios
```

### KISS (Keep It Simple, Stupid)

> La simplicidad es la máxima sofisticación

```python
# ❌ Mal - Complejidad innecesaria
def is_even(number):
    return True if number % 2 == 0 else False if number % 2 != 0 else None

# ✅ Bien - Simple y claro
def is_even(number:  int) -> bool:
    return number % 2 == 0

# ❌ Mal - Lógica rebuscada
def get_price(base_price, discount):
    result = base_price
    if discount:
        if discount > 0:
            if discount <= 100:
                result = base_price - (base_price * discount / 100)
    return result

# ✅ Bien - Directo al punto
def get_price(base_price:  float, discount: float) -> float:
    if 0 < discount <= 100:
        return base_price * (1 - discount / 100)
    return base_price
```

---

## 📂 Estructura de Carpetas del Curso

```
python-backend-course/
│
├── tema_01_introduccion/
│   ├── teoria.py
│   ├── ejemplos.py
│   ├── casos_uso.py
│   ├── errores_comunes. py
│   └── ejercicios.py
│
├── tema_02_tipos_datos_basicos/
│   ├── teoria.py
│   ├── ejemplos.py
│   ├── casos_uso.py
│   ├── errores_comunes.py
│   └── ejercicios.py
│
├── tema_03_operadores/
│   └── ...
│
├── tema_04_estructuras_control/
│   └── ...
│
├── tema_05_bucles/
│   └── ...
│
├── [...  temas 6-44 siguiendo la misma estructura ...]
│
├── tema_45_arquitectura_backend/
│   ├── teoria.py
│   ├── ejemplos.py
│   ├── casos_uso.py
│   ├── errores_comunes.py
│   └── ejercicios.py
│
├── proyectos/
│   ├── proyecto_01_calculadora/
│   ├── proyecto_02_todo_cli/
│   ├── proyecto_03_api_rest/
│   └── proyecto_04_blog_backend/
│
├── tests/
│   ├── test_tema_01.py
│   ├── test_tema_02.py
│   └── ...
│
├── recursos/
│   ├── cheatsheets/
│   ├── diagramas/
│   └── referencias. md
│
├── . gitignore
├── requirements. txt
├── requirements-dev.txt
├── setup. py
└── README.md
```

---

## 📝 Plantilla de Estructura por Tema

Cada carpeta de tema contiene:

### 1. `teoria.py`

```python
"""
TEMA X: Nombre del Tema

Descripción general del tema.
Conceptos clave que se aprenderán.

Objetivos:
- Objetivo 1
- Objetivo 2
- Objetivo 3
"""

# Explicación teórica con comentarios
# Definiciones
# Sintaxis básica
# Conceptos importantes
```

### 2. `ejemplos.py`

```python
"""
Ejemplos prácticos del Tema X
"""

# Ejemplo 1: Caso básico
# Ejemplo 2: Caso intermedio
# Ejemplo 3: Caso avanzado
# Ejemplo 4: Caso real
```

### 3. `casos_uso.py`

```python
"""
Casos de uso reales del Tema X
"""

# Caso de uso 1: Aplicación en backend
# Caso de uso 2: Aplicación en POO
# Caso de uso 3: Aplicación en proyectos reales
```

### 4. `errores_comunes.py`

```python
"""
Errores comunes y cómo evitarlos - Tema X
"""

# Error común 1: Descripción
# ❌ Código incorrecto
# ✅ Código correcto
# Explicación

# Error común 2: Descripción
# ...
```

### 5. `ejercicios.py`

```python
"""
Ejercicios del Tema X

Nivel de dificultad:  ⭐ (fácil) a ⭐⭐⭐⭐⭐ (difícil)
"""

# Ejercicio 1: ⭐ - Nivel Básico
"""
Descripción del ejercicio
Entrada esperada
Salida esperada
"""

# Ejercicio 2: ⭐⭐ - Nivel Fácil-Medio
"""
Descripción
"""

# Ejercicio 3: ⭐⭐⭐ - Nivel Medio
"""
Descripción
"""

# Ejercicio 4: ⭐⭐⭐⭐ - Nivel Medio-Difícil
"""
Descripción
"""

# Ejercicio 5: ⭐⭐⭐⭐⭐ - Nivel Avanzado
"""
Descripción
"""

# SOLUCIONES (al final del archivo)
# Las soluciones están al final para no ver spoilers
```

---

## 🎓 Ejemplo Completo: Tema 15 - Clases y Objetos Básicos

### 📖 `teoria.py`

```python
"""
TEMA 15: Clases y Objetos Básicos

La Programación Orientada a Objetos (POO) es un paradigma de programación
que organiza el código en objetos que contienen datos (atributos) y
comportamientos (métodos).

Conceptos clave:
- Clase: Plantilla o molde para crear objetos
- Objeto:  Instancia de una clase
- Atributo: Variable que pertenece a un objeto
- Método: Función que pertenece a un objeto
- Constructor: Método especial para inicializar objetos

Objetivos:
- Entender qué es una clase y un objeto
- Crear clases con atributos y métodos
- Instanciar objetos
- Usar el constructor __init__
- Comprender self
"""

# ============================================================================
# 1. DEFINICIÓN BÁSICA DE UNA CLASE
# ============================================================================

class Perro:
    """
    Clase básica que representa un perro.
    """
    pass  # pass indica que la clase está vacía por ahora


# Crear una instancia (objeto) de la clase
mi_perro = Perro()
print(type(mi_perro))  # <class '__main__.Perro'>


# ============================================================================
# 2. CONSTRUCTOR __init__
# ============================================================================

class PerroMejorado:
    """
    Clase Perro con constructor para inicializar atributos.

    El método __init__ es el constructor, se ejecuta automáticamente
    al crear un nuevo objeto.

    'self' es una referencia al objeto actual.  Siempre es el primer
    parámetro de los métodos de instancia.
    """

    def __init__(self, nombre:  str, edad: int):
        """
        Constructor de la clase.

        Args:
            nombre: Nombre del perro
            edad: Edad del perro en años
        """
        self. nombre = nombre  # Atributo de instancia
        self.edad = edad      # Atributo de instancia


# Crear objetos con el constructor
perro1 = PerroMejorado("Max", 3)
perro2 = PerroMejorado("Luna", 5)

print(perro1.nombre)  # Max
print(perro2.edad)    # 5


# ============================================================================
# 3. MÉTODOS DE INSTANCIA
# ============================================================================

class PerroCompleto:
    """
    Clase Perro con métodos de instancia.
    """

    def __init__(self, nombre: str, edad:  int, raza: str):
        self.nombre = nombre
        self. edad = edad
        self.raza = raza

    def ladrar(self) -> str:
        """Método que hace ladrar al perro."""
        return f"{self.nombre} dice:  ¡Guau guau!"

    def cumplir_años(self) -> None:
        """Incrementa la edad del perro en 1 año."""
        self.edad += 1
        print(f"¡{self.nombre} ahora tiene {self.edad} años!")

    def presentarse(self) -> str:
        """Devuelve una presentación del perro."""
        return f"Hola, soy {self.nombre}, un {self.raza} de {self.edad} años"


# Usar los métodos
perro = PerroCompleto("Rocky", 2, "Labrador")
print(perro.ladrar())           # Rocky dice: ¡Guau guau!
print(perro.presentarse())      # Hola, soy Rocky, un Labrador de 2 años
perro.cumplir_años()            # ¡Rocky ahora tiene 3 años!


# ============================================================================
# 4. ATRIBUTOS DE CLASE
# ============================================================================

class PerroConEspecie:
    """
    Clase con atributos de clase e instancia.

    Atributos de clase:  Compartidos por todas las instancias
    Atributos de instancia: Únicos para cada objeto
    """

    # Atributo de clase (compartido por todas las instancias)
    especie = "Canis familiaris"

    def __init__(self, nombre: str):
        # Atributo de instancia (único para cada objeto)
        self.nombre = nombre


perro1 = PerroConEspecie("Max")
perro2 = PerroConEspecie("Luna")

print(perro1.especie)  # Canis familiaris
print(perro2.especie)  # Canis familiaris

# Cambiar el atributo de clase afecta a todas las instancias
PerroConEspecie.especie = "Canis lupus familiaris"
print(perro1.especie)  # Canis lupus familiaris


# ============================================================================
# 5. MÉTODOS CON MÚLTIPLES PARÁMETROS
# ============================================================================

class CuentaBancaria:
    """Ejemplo de clase con métodos que reciben parámetros."""

    def __init__(self, titular: str, saldo_inicial: float = 0.0):
        self.titular = titular
        self.saldo = saldo_inicial

    def depositar(self, cantidad: float) -> None:
        """Deposita dinero en la cuenta."""
        if cantidad > 0:
            self.saldo += cantidad
            print(f"Depositado:  ${cantidad}. Nuevo saldo: ${self.saldo}")
        else:
            print("La cantidad debe ser positiva")

    def retirar(self, cantidad: float) -> bool:
        """Retira dinero de la cuenta."""
        if cantidad > self.saldo:
            print("Saldo insuficiente")
            return False

        self.saldo -= cantidad
        print(f"Retirado: ${cantidad}.  Nuevo saldo: ${self.saldo}")
        return True

    def consultar_saldo(self) -> float:
        """Devuelve el saldo actual."""
        return self.saldo


# Usar la clase
cuenta = CuentaBancaria("Juan Pérez", 1000.0)
cuenta.depositar(500)     # Depositado: $500. Nuevo saldo: $1500. 0
cuenta.retirar(200)       # Retirado: $200. Nuevo saldo: $1300.0
print(cuenta.consultar_saldo())  # 1300.0


# ============================================================================
# RESUMEN
# ============================================================================

"""
Conceptos clave aprendidos:

1. Clase: Plantilla que define estructura y comportamiento
   class NombreClase:
       pass

2. Constructor: Método __init__ para inicializar objetos
   def __init__(self, parametros):
       self.atributo = valor

3. self: Referencia al objeto actual (obligatorio como primer parámetro)

4. Atributos de instancia:  Únicos para cada objeto (self.atributo)

5. Atributos de clase: Compartidos por todas las instancias

6. Métodos de instancia: Funciones que operan sobre el objeto (self)

7. Instanciar: Crear un objeto a partir de una clase
   objeto = NombreClase(argumentos)
"""
```

### 💡 `ejemplos.py`

```python
"""
TEMA 15: Ejemplos Prácticos - Clases y Objetos Básicos
"""

# ============================================================================
# EJEMPLO 1: Sistema de Gestión de Estudiantes
# ============================================================================

class Estudiante:
    """Representa un estudiante con sus calificaciones."""

    # Atributo de clase
    institucion = "Universidad Python"

    def __init__(self, nombre: str, matricula: str):
        self.nombre = nombre
        self. matricula = matricula
        self.calificaciones = []

    def agregar_calificacion(self, calificacion: float) -> None:
        """Agrega una calificación a la lista."""
        if 0 <= calificacion <= 10:
            self.calificaciones.append(calificacion)
        else:
            print("Calificación inválida.  Debe estar entre 0 y 10.")

    def calcular_promedio(self) -> float:
        """Calcula el promedio de las calificaciones."""
        if not self.calificaciones:
            return 0.0
        return sum(self.calificaciones) / len(self.calificaciones)

    def obtener_estatus(self) -> str:
        """Determina si el estudiante está aprobado o reprobado."""
        promedio = self.calcular_promedio()
        if promedio >= 6.0:
            return "Aprobado"
        return "Reprobado"

    def mostrar_informacion(self) -> None:
        """Muestra la información completa del estudiante."""
        print(f"\n--- Información del Estudiante ---")
        print(f"Institución: {self.institucion}")
        print(f"Nombre: {self.nombre}")
        print(f"Matrícula: {self.matricula}")
        print(f"Calificaciones: {self.calificaciones}")
        print(f"Promedio: {self.calcular_promedio():.2f}")
        print(f"Estatus: {self.obtener_estatus()}")


# Uso del ejemplo
estudiante1 = Estudiante("Ana García", "2024001")
estudiante1.agregar_calificacion(8.5)
estudiante1.agregar_calificacion(9.0)
estudiante1.agregar_calificacion(7.5)
estudiante1.mostrar_informacion()


# ============================================================================
# EJEMPLO 2: Sistema de Carrito de Compras
# ============================================================================

class Producto:
    """Representa un producto en una tienda."""

    def __init__(self, nombre: str, precio: float, codigo: str):
        self.nombre = nombre
        self.precio = precio
        self.codigo = codigo

    def aplicar_descuento(self, porcentaje: float) -> float:
        """Calcula el precio con descuento aplicado."""
        descuento = self.precio * (porcentaje / 100)
        return self.precio - descuento

    def __str__(self) -> str:
        return f"{self.nombre} (${self.precio}) - Código: {self.codigo}"


class CarritoCompras:
    """Gestiona el carrito de compras."""

    def __init__(self, cliente: str):
        self.cliente = cliente
        self.productos = []

    def agregar_producto(self, producto:  Producto) -> None:
        """Agrega un producto al carrito."""
        self.productos.append(producto)
        print(f"✓ {producto.nombre} agregado al carrito")

    def eliminar_producto(self, codigo: str) -> bool:
        """Elimina un producto del carrito por código."""
        for producto in self.productos:
            if producto. codigo == codigo:
                self. productos.remove(producto)
                print(f"✓ {producto.nombre} eliminado del carrito")
                return True
        print("✗ Producto no encontrado")
        return False

    def calcular_total(self) -> float:
        """Calcula el total del carrito."""
        return sum(producto.precio for producto in self.productos)

    def mostrar_carrito(self) -> None:
        """Muestra el contenido del carrito."""
        print(f"\n🛒 Carrito de {self.cliente}")
        print("=" * 50)
        if not self.productos:
            print("El carrito está vacío")
            return

        for i, producto in enumerate(self. productos, 1):
            print(f"{i}. {producto}")
        print("=" * 50)
        print(f"Total: ${self. calcular_total():.2f}")


# Uso del ejemplo
carrito = CarritoCompras("Carlos Ruiz")

producto1 = Producto("Laptop", 15000.00, "LAP001")
producto2 = Producto("Mouse", 250.00, "MOU001")
producto3 = Producto("Teclado", 500.00, "TEC001")

carrito.agregar_producto(producto1)
carrito.agregar_producto(producto2)
carrito.agregar_producto(producto3)
carrito.mostrar_carrito()


# ============================================================================
# EJEMPLO 3: Sistema de Reservas de Hotel
# ============================================================================

from datetime import datetime, timedelta

class Habitacion:
    """Representa una habitación de hotel."""

    contador_habitaciones = 0  # Atributo de clase

    def __init__(self, tipo: str, precio_noche: float):
        Habitacion.contador_habitaciones += 1
        self.numero = Habitacion.contador_habitaciones
        self.tipo = tipo
        self.precio_noche = precio_noche
        self.esta_ocupada = False
        self.huesped_actual = None

    def reservar(self, nombre_huesped: str) -> bool:
        """Reserva la habitación."""
        if self. esta_ocupada:
            print(f"✗ La habitación {self. numero} ya está ocupada")
            return False

        self.esta_ocupada = True
        self.huesped_actual = nombre_huesped
        print(f"✓ Habitación {self.numero} reservada para {nombre_huesped}")
        return True

    def liberar(self) -> None:
        """Libera la habitación."""
        if not self.esta_ocupada:
            print(f"✗ La habitación {self.numero} ya está libre")
            return

        print(f"✓ Habitación {self.numero} liberada (huésped: {self.huesped_actual})")
        self.esta_ocupada = False
        self.huesped_actual = None

    def calcular_costo(self, noches: int) -> float:
        """Calcula el costo total de la estancia."""
        return self.precio_noche * noches

    def obtener_info(self) -> str:
        """Devuelve información de la habitación."""
        estado = "Ocupada" if self.esta_ocupada else "Libre"
        info = f"Habitación #{self.numero} - {self.tipo} - ${self.precio_noche}/noche - {estado}"
        if self.esta_ocupada:
            info += f" (Huésped:  {self.huesped_actual})"
        return info


# Uso del ejemplo
habitacion1 = Habitacion("Individual", 800.00)
habitacion2 = Habitacion("Doble", 1200.00)
habitacion3 = Habitacion("Suite", 2500.00)

print(habitacion1.obtener_info())
habitacion1.reservar("María López")
print(habitacion1.obtener_info())
print(f"Costo por 3 noches: ${habitacion1.calcular_costo(3)}")
habitacion1.liberar()

print(f"\nTotal de habitaciones creadas: {Habitacion.contador_habitaciones}")
```

### 🎯 `casos_uso.py`

```python
"""
TEMA 15: Casos de Uso Reales - Clases y Objetos Básicos
"""

# ============================================================================
# CASO DE USO 1: API REST - Modelo de Usuario (Backend)
# ============================================================================

from datetime import datetime
from typing import Optional

class Usuario:
    """
    Modelo de usuario para una API REST.

    Este es un ejemplo real de cómo se estructuraría un modelo
    en un backend con FastAPI o Flask.
    """

    def __init__(
        self,
        id: int,
        username: str,
        email: str,
        password_hash: str,
        created_at: Optional[datetime] = None
    ):
        self.id = id
        self.username = username
        self.email = email
        self.password_hash = password_hash  # Nunca guardar contraseña en texto plano
        self.created_at = created_at or datetime.now()
        self.is_active = True
        self.last_login = None

    def to_dict(self) -> dict:
        """Serializa el usuario a diccionario (para JSON)."""
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "created_at": self.created_at.isoformat(),
            "is_active":  self.is_active,
            "last_login": self.last_login.isoformat() if self.last_login else None
        }

    def actualizar_ultimo_login(self) -> None:
        """Actualiza la fecha del último login."""
        self.last_login = datetime.now()

    def desactivar(self) -> None:
        """Desactiva la cuenta del usuario."""
        self.is_active = False

    def activar(self) -> None:
        """Activa la cuenta del usuario."""
        self.is_active = True


# Simulación de uso en endpoint
usuario = Usuario(
    id=1,
    username="edgar",
    email="edgar@example.com",
    password_hash="$2b$12$hashed_password"
)

# GET /users/1
print("Respuesta API:", usuario.to_dict())


# ============================================================================
# CASO DE USO 2: ORM - Modelo de Base de Datos
# ============================================================================

class ModeloProducto:
    """
    Modelo que representa una tabla de productos en base de datos.

    Similar a cómo funciona SQLAlchemy.
    """

    # Simulación de conexión a BD
    _base_datos = []
    _id_counter = 1

    def __init__(self, nombre: str, precio: float, stock: int):
        self.id = ModeloProducto._id_counter
        ModeloProducto._id_counter += 1
        self. nombre = nombre
        self.precio = precio
        self.stock = stock
        self.activo = True

    def guardar(self) -> None:
        """Guarda el producto en la 'base de datos'."""
        ModeloProducto._base_datos. append(self)
        print(f"✓ Producto '{self.nombre}' guardado con ID: {self.id}")

    @classmethod
    def obtener_por_id(cls, producto_id: int):
        """Busca un producto por ID."""
        for producto in cls._base_datos:
            if producto.id == producto_id:
                return producto
        return None

    @classmethod
    def obtener_todos(cls):
        """Obtiene todos los productos."""
        return cls._base_datos

    def actualizar_stock(self, cantidad: int) -> bool:
        """Actualiza el stock del producto."""
        nuevo_stock = self.stock + cantidad
        if nuevo_stock < 0:
            print("✗ Stock insuficiente")
            return False

        self.stock = nuevo_stock
        print(f"✓ Stock actualizado:  {self.stock} unidades")
        return True

    def eliminar(self) -> None:
        """Soft delete: marca el producto como inactivo."""
        self.activo = False
        print(f"✓ Producto '{self.nombre}' marcado como inactivo")


# Uso tipo ORM
producto1 = ModeloProducto("Laptop", 15000, 10)
producto1.guardar()

producto2 = ModeloProducto("Mouse", 250, 50)
producto2.guardar()

# Consultar
producto = ModeloProducto.obtener_por_id(1)
print(f"Producto encontrado: {producto. nombre}")

# Actualizar
producto.actualizar_stock(-2)  # Venta de 2 unidades

# Listar todos
print("\nTodos los productos:")
for p in ModeloProducto.obtener_todos():
    print(f"- {p.nombre}:  ${p.precio} ({p.stock} en stock)")


# ============================================================================
# CASO DE USO 3:  Servicio de Autenticación (Backend)
# ============================================================================

import hashlib
import secrets

class ServicioAutenticacion:
    """
    Servicio para manejar autenticación de usuarios.

    Caso de uso real en arquitectura backend.
    """

    def __init__(self):
        self.sesiones_activas = {}

    def hash_password(self, password: str) -> str:
        """Genera un hash de la contraseña."""
        # En producción usar bcrypt o argon2
        return hashlib. sha256(password.encode()).hexdigest()

    def generar_token(self) -> str:
        """Genera un token de sesión seguro."""
        return secrets.token_urlsafe(32)

    def login(self, usuario: Usuario, password: str) -> Optional[str]:
        """
        Autentica un usuario y genera un token.

        Returns:
            Token de sesión si las credenciales son válidas, None si no.
        """
        password_hash = self.hash_password(password)

        if password_hash != usuario.password_hash:
            print("✗ Credenciales inválidas")
            return None

        if not usuario.is_active:
            print("✗ Usuario inactivo")
            return None

        # Generar token y crear sesión
        token = self.generar_token()
        self.sesiones_activas[token] = usuario. id
        usuario.actualizar_ultimo_login()

        print(f"✓ Login exitoso para {usuario.username}")
        return token

    def logout(self, token: str) -> bool:
        """Cierra la sesión del usuario."""
        if token in self.sesiones_activas:
            del self.sesiones_activas[token]
            print("✓ Sesión cerrada")
            return True

        print("✗ Token inválido")
        return False

    def verificar_token(self, token: str) -> Optional[int]:
        """Verifica si un token es válido y devuelve el user_id."""
        return self.sesiones_activas. get(token)


# Uso del servicio
auth_service = ServicioAutenticacion()

# Crear usuario (con hash real de contraseña)
password = "mi_contraseña_segura"
usuario = Usuario(
    id=1,
    username="edgar",
    email="edgar@example.com",
    password_hash=auth_service.hash_password(password)
)

# Login
token = auth_service.login(usuario, password)
print(f"Token de sesión: {token}")

# Verificar token
user_id = auth_service.verificar_token(token)
print(f"Usuario autenticado: {user_id}")

# Logout
auth_service.logout(token)
```

### ⚠️ `errores_comunes.py`

```python
"""
TEMA 15: Errores Comunes - Clases y Objetos Básicos
"""

# ============================================================================
# ERROR 1: Olvidar el parámetro 'self'
# ============================================================================

print("ERROR 1: Olvidar 'self' en métodos\n")

# ❌ INCORRECTO
class PerroMal:
    def __init__(nombre, edad):  # Falta 'self'
        self.nombre = nombre
        self. edad = edad

# try:
#     perro = PerroMal("Max", 3)
# except TypeError as e:
#     print(f"Error: {e}")


# ✅ CORRECTO
class PerroBien:
    def __init__(self, nombre, edad):  # 'self' como primer parámetro
        self. nombre = nombre
        self.edad = edad

perro = PerroBien("Max", 3)
print(f"✓ Perro creado: {perro.nombre}\n")


# ============================================================================
# ERROR 2: Confundir atributos de clase con atributos de instancia
# ============================================================================

print("ERROR 2: Confundir atributos de clase con instancia\n")

# ❌ PROBLEMA POTENCIAL
class Contador:
    cuenta = 0  # Atributo de clase (compartido)

    def __init__(self):
        # Esto modifica el atributo de clase, afecta a todas las instancias
        Contador.cuenta += 1

c1 = Contador()
c2 = Contador()
c3 = Contador()
print(f"Cuenta total: {Contador.cuenta}")  # 3
# Todos los objetos comparten el mismo contador


# ✅ CORRECTO (si queremos contador individual)
class ContadorIndividual:
    def __init__(self):
        self.cuenta = 0  # Atributo de instancia (único)

    def incrementar(self):
        self.cuenta += 1

c1 = ContadorIndividual()
c2 = ContadorIndividual()
c1.incrementar()
c1.incrementar()
c2.incrementar()
print(f"c1: {c1.cuenta}, c2: {c2.cuenta}\n")  # c1: 2, c2: 1


# ============================================================================
# ERROR 3: Modificar atributos directamente en lugar de usar métodos
# ============================================================================

print("ERROR 3: Modificar atributos sin validación\n")

# ❌ PROBLEMA
class CuentaBancariaMala:
    def __init__(self, saldo):
        self.saldo = saldo

cuenta = CuentaBancariaMala(1000)
cuenta.saldo = -500  # Saldo negativo, no hay validación
print(f"Saldo:  {cuenta.saldo}")  # -500 (mal)


# ✅ CORRECTO (con validación en métodos)
class CuentaBancariaBuena:
    def __init__(self, saldo):
        self.saldo = saldo

    def retirar(self, cantidad):
        if cantidad > self.saldo:
            print("✗ Saldo insuficiente")
            return False
        self.saldo -= cantidad
        return True

cuenta = CuentaBancariaBuena(1000)
cuenta.retirar(1500)  # Validación impide saldo negativo
print(f"Saldo: {cuenta.saldo}\n")  # 1000 (sin cambios)


# ============================================================================
# ERROR 4: No inicializar atributos en __init__
# ============================================================================

print("ERROR 4: No inicializar atributos\n")

# ❌ PROBLEMA
class PersonaMala:
    def __init__(self, nombre):
        self.nombre = nombre
        # Olvidamos inicializar 'edad'

    def cumplir_años(self):
        self.edad += 1  # AttributeError si nunca se asignó edad

# persona = PersonaMala("Juan")
# try:
#     persona.cumplir_años()
# except AttributeError as e:
#     print(f"Error: {e}")


# ✅ CORRECTO
class PersonaBuena:
    def __init__(self, nombre, edad=0):
        self.nombre = nombre
        self.edad = edad  # Siempre inicializado

    def cumplir_años(self):
        self.edad += 1

persona = PersonaBuena("Juan")
persona.cumplir_años()
print(f"✓ {persona.nombre} tiene {persona.edad} años\n")


# ============================================================================
# ERROR 5: Olvidar el paréntesis al instanciar
# ============================================================================

print("ERROR 5: Olvidar paréntesis al instanciar\n")

class Coche:
    def __init__(self, marca):
        self.marca = marca

# ❌ INCORRECTO
coche_referencia = Coche  # Esto es la clase, no un objeto
print(f"Tipo:  {type(coche_referencia)}")  # <class 'type'>

# ✅ CORRECTO
coche_objeto = Coche("Toyota")  # Paréntesis para instanciar
print(f"Tipo: {type(coche_objeto)}")  # <class '__main__.Coche'>
print(f"Marca: {coche_objeto.marca}\n")


# ============================================================================
# ERROR 6: Mutar atributos mutables compartidos
# ============================================================================

print("ERROR 6: Atributos mutables por defecto\n")

# ❌ PELIGROSO
class EquipoMalo:
    def __init__(self, nombre, miembros=[]):  # Lista como valor por defecto
        self.nombre = nombre
        self.miembros = miembros

equipo1 = EquipoMalo("Equipo A")
equipo2 = EquipoMalo("Equipo B")
equipo1.miembros.append("Juan")
# ¡La lista es compartida entre todas las instancias!
print(f"Equipo 1: {equipo1.miembros}")  # ['Juan']
print(f"Equipo 2: {equipo2.miembros}")  # ['Juan'] (mal)


# ✅ CORRECTO
class EquipoBueno:
    def __init__(self, nombre, miembros=None):
        self.nombre = nombre
        self.miembros = miembros if miembros is not None else []

equipo1 = EquipoBueno("Equipo A")
equipo2 = EquipoBueno("Equipo B")
equipo1.miembros.append("Juan")
print(f"Equipo 1: {equipo1.miembros}")  # ['Juan']
print(f"Equipo 2: {equipo2.miembros}")  # [] (correcto)


# ============================================================================
# ERROR 7: Comparar objetos sin definir __eq__
# ============================================================================

print("\nERROR 7: Comparar objetos sin __eq__\n")

# ❌ COMPORTAMIENTO INESPERADO
class PersonaSinEq:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self. edad = edad

p1 = PersonaSinEq("Ana", 25)
p2 = PersonaSinEq("Ana", 25)
print(f"¿Son iguales? {p1 == p2}")  # False (compara identidad, no valores)


# ✅ CORRECTO (veremos __eq__ en temas posteriores)
class PersonaConEq:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def __eq__(self, other):
        if not isinstance(other, PersonaConEq):
            return False
        return self.nombre == other. nombre and self.edad == other. edad

p1 = PersonaConEq("Ana", 25)
p2 = PersonaConEq("Ana", 25)
print(f"¿Son iguales? {p1 == p2}")  # True (compara valores)
```

### ✏️ `ejercicios. py`

```python
"""
TEMA 15: Ejercicios - Clases y Objetos Básicos

Instrucciones:
- Intenta resolver cada ejercicio por tu cuenta
- Las soluciones están al final del archivo
- Niveles: ⭐ (básico) hasta ⭐⭐⭐⭐⭐ (avanzado)
"""

# ============================================================================
# EJERCICIO 1: ⭐ Clase Rectángulo
# ============================================================================

"""
Crea una clase `Rectangulo` que:
- Tenga atributos `ancho` y `alto`
- Tenga un método `calcular_area()` que devuelva el área
- Tenga un método `calcular_perimetro()` que devuelva el perímetro

Ejemplo de uso:
rect = Rectangulo(5, 10)
print(rect.calcular_area())       # 50
print(rect. calcular_perimetro())  # 30
"""

# Tu código aquí


# ============================================================================
# EJERCICIO 2: ⭐⭐ Clase Libro
# ============================================================================

"""
Crea una clase `Libro` que:
- Tenga atributos:  titulo, autor, año_publicacion, paginas
- Tenga un método `es_antiguo()` que devuelva True si el libro tiene más de 50 años
- Tenga un método `es_largo()` que devuelva True si tiene más de 500 páginas
- Tenga un método `info()` que imprima toda la información del libro

Ejemplo de uso:
libro = Libro("1984", "George Orwell", 1949, 328)
print(libro.es_antiguo())  # True (si estamos en 2026)
print(libro.es_largo())    # False
libro.info()               # Imprime información formateada
"""

# Tu código aquí


# ============================================================================
# EJERCICIO 3: ⭐⭐⭐ Clase Biblioteca
# ============================================================================

"""
Crea una clase `Biblioteca` que:
- Tenga un atributo `libros` (lista)
- Tenga un método `agregar_libro(libro)` que agregue un objeto Libro
- Tenga un método `buscar_por_autor(autor)` que devuelva lista de libros del autor
- Tenga un método `contar_libros()` que devuelva el total de libros
- Tenga un método `libro_mas_antiguo()` que devuelva el libro más antiguo

Usa la clase Libro del ejercicio anterior.

Ejemplo de uso:
biblioteca = Biblioteca()
biblioteca.agregar_libro(libro1)
biblioteca.agregar_libro(libro2)
libros_orwell = biblioteca.buscar_por_autor("George Orwell")
"""

# Tu código aquí


# ============================================================================
# EJERCICIO 4: ⭐⭐⭐⭐ Sistema de Empleados
# ============================================================================

"""
Crea dos clases:

1. Clase `Empleado`:
   - Atributos: nombre, salario_base, horas_trabajadas
   - Método `calcular_salario()`: salario_base + (horas_extra * tarifa_extra)
     donde horas_extra = max(0, horas_trabajadas - 40)
     y tarifa_extra = salario_base / 40 * 1.5
   - Método `dar_aumento(porcentaje)`: aumenta el salario_base

2. Clase `Departamento`:
   - Atributos: nombre, empleados (lista)
   - Método `agregar_empleado(empleado)`
   - Método `calcular_nomina_total()`: suma de todos los salarios
   - Método `dar_aumento_general(porcentaje)`: aumenta a todos los empleados
   - Método `empleado_mejor_pagado()`: devuelve el empleado con mayor salario

Ejemplo de uso:
emp1 = Empleado("Juan", 5000, 45)
emp2 = Empleado("María", 6000, 50)
depto = Departamento("IT")
depto.agregar_empleado(emp1)
depto.agregar_empleado(emp2)
print(depto.calcular_nomina_total())
"""

# Tu código aquí


# ============================================================================
# EJERCICIO 5: ⭐⭐⭐⭐⭐ Sistema de Reservas de Vuelos
# ============================================================================

"""
Crea un sistema completo de reservas de vuelos con 3 clases:

1. Clase `Pasajero`:
   - Atributos: nombre, pasaporte, edad
   - Método `es_menor()`: True si edad < 18
   - Método `to_dict()`: devuelve diccionario con datos del pasajero

2. Clase `Vuelo`:
   - Atributos: numero_vuelo, origen, destino, capacidad_maxima, pasajeros (lista)
   - Atributo de clase:  contador_vuelos
   - Método `hay_asientos_disponibles()`: True si hay espacio
   - Método `agregar_pasajero(pasajero)`: agrega si hay espacio
   - Método `eliminar_pasajero(pasaporte)`: elimina pasajero por pasaporte
   - Método `buscar_pasajero(pasaporte)`: busca y devuelve pasajero
   - Método `listar_pasajeros()`: imprime lista formateada
   - Método `ocupacion_porcentaje()`: devuelve % de ocupación

3. Clase `SistemaReservas`:
   - Atributos: vuelos (lista)
   - Método `agregar_vuelo(vuelo)`
   - Método `buscar_vuelo(numero_vuelo)`: busca y devuelve vuelo
   - Método `hacer_reserva(numero_vuelo, pasajero)`: reserva pasajero en vuelo
   - Método `cancelar_reserva(numero_vuelo, pasaporte)`: cancela reserva
   - Método `vuelos_disponibles()`: lista vuelos con asientos disponibles
   - Método `reporte_ocupacion()`: imprime reporte de todos los vuelos

Requisitos:
- Validar que no se exceda la capacidad
- Validar que el pasajero no esté duplicado en el mismo vuelo
- Mensajes claros de éxito/error en cada operación

Ejemplo de uso:
sistema = SistemaReservas()
vuelo1 = Vuelo("AV101", "CDMX", "Cancún", 150)
sistema.agregar_vuelo(vuelo1)
pasajero1 = Pasajero("Juan Pérez", "ABC123", 30)
sistema.hacer_reserva("AV101", pasajero
```
