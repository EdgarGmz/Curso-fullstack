# 📘 Curso Completo de Python

<div align="center">

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-FF6B6B?style=for-the-badge&logo=sqlalchemy&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Python desde conceptos básicos hasta avanzados, con enfoque en programación orientada a objetos, APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

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
# 1. Verificar Python instalado (versión 3.11 o superior)
python --version
# o
python3 --version

# 2. Crear entorno virtual
python -m venv venv

# 3. Activar entorno virtual
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

# 4. Instalar dependencias
pip install requests

# 5. Crear archivo principal
# main.py
print("¡Hola, Python!")
```

### Estructura de un Proyecto Python

```
mi_proyecto/
├── main.py              # Punto de entrada
├── requirements.txt     # Dependencias
├── venv/               # Entorno virtual
└── src/                # Código fuente
    ├── models/
    ├── services/
    └── utils/
```

---

## 📋 Requisitos Mínimos

- **Python 3.11** o superior
- **Editor de código**: VS Code, PyCharm, o cualquier editor
- **Conocimientos básicos**: Lógica de programación (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Python
- [ ] Configurar entorno virtual
- [ ] Instalar editor de código
- [ ] Crear primer script

**📚 Conceptos Clave:**

##### **Entorno Virtual**
**Definición:** Entorno aislado que permite instalar paquetes específicos para un proyecto sin afectar otros proyectos.

**Ejemplo:**
```python
# Crear entorno virtual
python -m venv venv

# Activar (Windows)
venv\Scripts\activate

# Activar (Linux/Mac)
source venv/bin/activate

# Instalar paquete
pip install requests

# Guardar dependencias
pip freeze > requirements.txt
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Python"`

#### Paso 2: Tipos de Datos Básicos
- [ ] Tipos primitivos (int, float, str, bool)
- [ ] Variables y constantes
- [ ] Conversión de tipos
- [ ] None

**📚 Conceptos Clave:**

##### **Tipos Primitivos**
**Definición:** Tipos de datos básicos proporcionados por el lenguaje.

**Ejemplo:**
```python
# Tipos numéricos
edad = 25                    # int
precio = 99.99               # float
salario = 50000.50           # float

# Texto
nombre = "Juan"              # str
inicial = 'J'                # str

# Booleano
es_activo = True             # bool
es_mayor = False             # bool

# None (equivalente a null)
numero = None                # NoneType

# Conversión de tipos
edad_str = str(edad)         # "25"
precio_int = int(precio)     # 99
```

**📝 Ejercicios:**
1. Crear variables para almacenar información personal
2. Realizar operaciones matemáticas básicas
3. Concatenar strings con f-strings

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de datos básicos y variables"`

#### Paso 3: Operadores y Expresiones
- [ ] Operadores aritméticos
- [ ] Operadores de comparación
- [ ] Operadores lógicos
- [ ] Operadores de asignación

**Ejemplo:**
```python
a = 10
b = 5

# Aritméticos
suma = a + b          # 15
resta = a - b         # 5
multiplicacion = a * b  # 50
division = a / b      # 2.0
division_entera = a // b  # 2
modulo = a % b        # 0
potencia = a ** b     # 100000

# Comparación
es_mayor = a > b      # True
es_igual = a == b     # False
es_diferente = a != b  # True

# Lógicos
resultado = (a > 5) and (b < 10)  # True
resultado2 = (a > 15) or (b < 3)   # False
resultado3 = not (a > 5)          # False
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operadores y expresiones"`

#### Paso 4: Estructuras de Control
- [ ] if/elif/else
- [ ] match/case (Python 3.10+)
- [ ] for, while
- [ ] break y continue

**Ejemplo:**
```python
# if/elif/else
edad = 18
if edad >= 18:
    print("Es mayor de edad")
elif edad >= 13:
    print("Es adolescente")
else:
    print("Es menor de edad")

# match/case (Python 3.10+)
dia = "Lunes"
match dia:
    case "Lunes":
        print("Inicio de semana")
    case "Viernes":
        print("Fin de semana")
    case _:
        print("Día normal")

# for
frutas = ["Manzana", "Banana", "Naranja"]
for fruta in frutas:
    print(fruta)

# for con range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# while
contador = 0
while contador < 5:
    print(contador)
    contador += 1
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de control"`

#### Paso 5: Listas, Tuplas y Diccionarios
- [ ] Listas (list)
- [ ] Tuplas (tuple)
- [ ] Diccionarios (dict)
- [ ] Sets (set)

**Ejemplo:**
```python
# Listas (mutables)
numeros = [1, 2, 3, 4, 5]
numeros.append(6)           # [1, 2, 3, 4, 5, 6]
numeros.remove(3)          # [1, 2, 4, 5, 6]

# Tuplas (inmutables)
coordenadas = (40.4168, -3.7038)
# coordenadas[0] = 50  # Error: las tuplas son inmutables

# Diccionarios
edades = {
    "Juan": 25,
    "María": 30,
    "Pedro": 20
}
edades["Ana"] = 28
edad_juan = edades["Juan"]

# Sets (conjuntos)
frutas = {"Manzana", "Banana", "Naranja"}
frutas.add("Pera")
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estructuras de datos"`

#### Paso 6: Funciones
- [ ] Definir funciones
- [ ] Parámetros y argumentos
- [ ] Valores por defecto
- [ ] *args y **kwargs

**Ejemplo:**
```python
# Función básica
def saludar(nombre):
    return f"¡Hola, {nombre}!"

# Función con valores por defecto
def presentar(nombre, edad=0):
    return f"Soy {nombre}, tengo {edad} años"

# Función con *args
def sumar(*numeros):
    return sum(numeros)

# Función con **kwargs
def crear_usuario(**datos):
    return datos

# Uso
resultado = sumar(1, 2, 3, 4, 5)  # 15
usuario = crear_usuario(nombre="Juan", edad=25)
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: funciones"`

---

### 📍 Fase 2: Programación Orientada a Objetos (Intermedio)

#### Paso 7: Clases y Objetos
- [ ] Definir clases
- [ ] Crear objetos (instancias)
- [ ] Atributos y métodos
- [ ] self

**📚 Conceptos Clave:**

##### **Clase**
**Definición:** Plantilla para crear objetos. Define atributos y métodos.

**Ejemplo:**
```python
class Persona:
    # Constructor
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    # Método
    def presentarse(self):
        return f"Soy {self.nombre}, tengo {self.edad} años"
    
    # Método estático
    @staticmethod
    def es_mayor_de_edad(edad):
        return edad >= 18

# Uso
persona = Persona("Juan", 25)
print(persona.presentarse())  # "Soy Juan, tengo 25 años"
```

**📝 Ejercicios:**
1. Crear clase `Producto` con atributos y métodos
2. Crear clase `CuentaBancaria` con métodos de depósito y retiro
3. Implementar validaciones en métodos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: clases y objetos básicos"`

#### Paso 8: Encapsulamiento
- [ ] Atributos privados (_ y __)
- [ ] Propiedades (@property)
- [ ] Getters y setters
- [ ] Name mangling

**Ejemplo:**
```python
class CuentaBancaria:
    def __init__(self, saldo_inicial=0):
        self._saldo = saldo_inicial  # Protegido (convención)
        self.__numero_cuenta = "12345"  # Privado (name mangling)
    
    @property
    def saldo(self):
        return self._saldo
    
    def depositar(self, cantidad):
        if cantidad > 0:
            self._saldo += cantidad
    
    def retirar(self, cantidad):
        if cantidad > 0 and cantidad <= self._saldo:
            self._saldo -= cantidad
        else:
            raise ValueError("Cantidad inválida")

# Uso
cuenta = CuentaBancaria(1000)
cuenta.depositar(500)
print(cuenta.saldo)  # 1500
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: encapsulamiento"`

#### Paso 9: Herencia
- [ ] Herencia simple
- [ ] super()
- [ ] Métodos especiales (__str__, __repr__)
- [ ] MRO (Method Resolution Order)

**📚 Conceptos Clave:**

##### **Herencia**
**Definición:** Mecanismo por el cual una clase puede heredar atributos y métodos de otra.

**Ejemplo:**
```python
# Clase base
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def hacer_sonido(self):
        return "Sonido genérico"
    
    def __str__(self):
        return f"Animal: {self.nombre}"

# Clase derivada
class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre)  # Llamar al constructor padre
        self.raza = raza
    
    def hacer_sonido(self):  # Sobrescribir método
        return "Guau guau"
    
    def correr(self):
        return f"{self.nombre} está corriendo"

# Uso
perro = Perro("Max", "Labrador")
print(perro.hacer_sonido())  # "Guau guau"
print(perro.correr())        # "Max está corriendo"
```

**📝 Ejercicios:**
1. Crear jerarquía: Vehiculo -> Auto, Moto
2. Implementar métodos especiales
3. Usar super() para llamar métodos padre

> 💡 **Sugerencia de Commit**: `git commit -m "feat: herencia y polimorfismo"`

#### Paso 10: Polimorfismo
- [ ] Polimorfismo con herencia
- [ ] Duck typing
- [ ] Métodos abstractos
- [ ] ABC (Abstract Base Classes)

**Ejemplo:**
```python
from abc import ABC, abstractmethod

# Clase abstracta
class Forma(ABC):
    @abstractmethod
    def calcular_area(self):
        pass

class Circulo(Forma):
    def __init__(self, radio):
        self.radio = radio
    
    def calcular_area(self):
        return 3.14159 * self.radio ** 2

class Rectangulo(Forma):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto
    
    def calcular_area(self):
        return self.ancho * self.alto

# Polimorfismo
formas = [
    Circulo(5),
    Rectangulo(4, 6)
]

for forma in formas:
    print(f"Área: {forma.calcular_area()}")
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: polimorfismo avanzado"`

#### Paso 11: Métodos Especiales (Magic Methods)
- [ ] __init__, __str__, __repr__
- [ ] __len__, __getitem__, __setitem__
- [ ] __add__, __eq__, __lt__
- [ ] __call__

**Ejemplo:**
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __len__(self):
        return int((self.x ** 2 + self.y ** 2) ** 0.5)

# Uso
v1 = Vector(3, 4)
v2 = Vector(1, 2)
v3 = v1 + v2  # Vector(4, 6)
print(v1)     # Vector(3, 4)
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: métodos especiales"`

#### Paso 12: Decoradores
- [ ] ¿Qué son los decoradores?
- [ ] Crear decoradores
- [ ] Decoradores con parámetros
- [ ] @property, @staticmethod, @classmethod

**Ejemplo:**
```python
# Decorador simple
def mi_decorador(func):
    def wrapper(*args, **kwargs):
        print("Antes de la función")
        resultado = func(*args, **kwargs)
        print("Después de la función")
        return resultado
    return wrapper

@mi_decorador
def saludar(nombre):
    print(f"¡Hola, {nombre}!")

# Decorador con parámetros
def repetir(veces):
    def decorador(func):
        def wrapper(*args, **kwargs):
            for _ in range(veces):
                func(*args, **kwargs)
        return wrapper
    return decorador

@repetir(3)
def decir_hola():
    print("Hola")
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: decoradores"`

---

### 📍 Fase 3: Características Avanzadas (Avanzado)

#### Paso 13: Generadores
- [ ] ¿Qué son los generadores?
- [ ] yield
- [ ] Generator expressions
- [ ] Ventajas de los generadores

**Ejemplo:**
```python
# Generador
def numeros_pares():
    n = 0
    while True:
        yield n
        n += 2

# Uso
gen = numeros_pares()
print(next(gen))  # 0
print(next(gen))  # 2
print(next(gen))  # 4

# Generator expression
cuadrados = (x**2 for x in range(10))
for cuadrado in cuadrados:
    print(cuadrado)
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: generadores"`

#### Paso 14: Programación Asíncrona
- [ ] async/await
- [ ] Coroutines
- [ ] asyncio
- [ ] aiohttp

**Ejemplo:**
```python
import asyncio
import aiohttp

async def obtener_usuario(session, user_id):
    url = f"https://api.example.com/users/{user_id}"
    async with session.get(url) as response:
        return await response.json()

async def main():
    async with aiohttp.ClientSession() as session:
        usuarios = await asyncio.gather(
            obtener_usuario(session, 1),
            obtener_usuario(session, 2),
            obtener_usuario(session, 3)
        )
        return usuarios

# Ejecutar
resultados = asyncio.run(main())
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: programación asíncrona"`

---

### 📍 Fase 4: Consumo de APIs

#### Paso 15: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP (GET, POST, PUT, DELETE)
- [ ] JSON en Python
- [ ] requests library

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```python
import json

# Modelo para deserializar JSON
class Usuario:
    def __init__(self, id, nombre, email):
        self.id = id
        self.nombre = nombre
        self.email = email
    
    @classmethod
    def from_dict(cls, data):
        return cls(data['id'], data['nombre'], data['email'])
    
    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'email': self.email
        }
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 16: Consumir APIs con requests
- [ ] Instalar requests
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores

**Ejemplo:**
```python
import requests
import json

class ApiCliente:
    def __init__(self, base_url):
        self.base_url = base_url
    
    def obtener_usuario(self, user_id):
        try:
            response = requests.get(f"{self.base_url}/usuarios/{user_id}")
            response.raise_for_status()  # Lanza excepción si hay error
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener usuario: {e}")
            return None
    
    def crear_usuario(self, usuario_data):
        try:
            response = requests.post(
                f"{self.base_url}/usuarios",
                json=usuario_data,
                headers={"Content-Type": "application/json"}
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error al crear usuario: {e}")
            return None

# Uso
cliente = ApiCliente("https://api.example.com")
usuario = cliente.obtener_usuario(1)
```

**📝 Ejercicios:**
1. Consumir API pública (JSONPlaceholder, GitHub API)
2. Implementar manejo de errores con try-except
3. Crear servicio para múltiples endpoints

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con requests"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 17: Principio de Responsabilidad Única (SRP)
- [ ] ¿Qué es SRP?
- [ ] Identificar violaciones de SRP
- [ ] Refactorizar código para cumplir SRP

**📚 Conceptos Clave:**

##### **Single Responsibility Principle (SRP)**
**Definición:** Una clase debe tener una sola razón para cambiar. Cada clase debe tener una única responsabilidad.

**Ejemplo - ❌ Mal:**
```python
class Usuario:
    def guardar(self):
        # Guardar en base de datos
        pass
    
    def enviar_email(self):
        # Enviar email
        pass
    
    def generar_reporte(self):
        # Generar reporte
        pass
```

**Ejemplo - ✅ Bien:**
```python
# Separar responsabilidades
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email

class UsuarioRepository:
    def guardar(self, usuario):
        # Guardar en base de datos
        pass

class EmailService:
    def enviar_email(self, email, mensaje):
        # Enviar email
        pass

class ReporteService:
    def generar_reporte(self, usuario):
        # Generar reporte
        pass
```

**📝 Ejercicios:**
1. Refactorizar clase que tiene múltiples responsabilidades
2. Crear servicios separados para cada responsabilidad
3. Aplicar SRP en proyecto existente

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP"`

#### Paso 18: Principio Abierto/Cerrado (OCP)
- [ ] ¿Qué es OCP?
- [ ] Extensión sin modificación
- [ ] Usar herencia y composición

**Ejemplo:**
```python
from abc import ABC, abstractmethod

# Abierto para extensión, cerrado para modificación
class Descuento(ABC):
    @abstractmethod
    def calcular(self, precio):
        pass

class DescuentoEstudiante(Descuento):
    def calcular(self, precio):
        return precio * 0.9  # 10% descuento

class DescuentoVIP(Descuento):
    def calcular(self, precio):
        return precio * 0.8  # 20% descuento

class CalculadoraPrecio:
    def calcular_precio_final(self, precio_base, descuento):
        return descuento.calcular(precio_base)
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP"`

#### Paso 19: Principio de Sustitución de Liskov (LSP)
- [ ] ¿Qué es LSP?
- [ ] Contratos de clase base
- [ ] Precondiciones y postcondiciones

**Ejemplo:**
```python
# Las subclases deben poder reemplazar a la clase base
class Animal:
    def hacer_sonido(self):
        return "Sonido genérico"

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"

# Cualquier subclase puede reemplazar a Animal
def hacer_sonar_animal(animal: Animal):
    print(animal.hacer_sonido())

# Funciona con cualquier subclase
hacer_sonar_animal(Perro())  # "Guau"
hacer_sonar_animal(Gato())  # "Miau"
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio LSP"`

#### Paso 20: Principio de Segregación de Interfaces (ISP)
- [ ] ¿Qué es ISP?
- [ ] Interfaces específicas vs generales
- [ ] Evitar interfaces "gordas"

**Ejemplo:**
```python
from abc import ABC, abstractmethod

# ❌ Mal: interfaz muy grande
class ITrabajador(ABC):
    @abstractmethod
    def trabajar(self):
        pass
    
    @abstractmethod
    def comer(self):
        pass
    
    @abstractmethod
    def dormir(self):
        pass

# ✅ Bien: interfaces segregadas
class ITrabajador(ABC):
    @abstractmethod
    def trabajar(self):
        pass

class ISerVivo(ABC):
    @abstractmethod
    def comer(self):
        pass
    
    @abstractmethod
    def dormir(self):
        pass

class Empleado(ITrabajador, ISerVivo):
    def trabajar(self):
        print("Trabajando...")
    
    def comer(self):
        print("Comiendo...")
    
    def dormir(self):
        print("Durmiendo...")
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio ISP"`

#### Paso 21: Principio de Inversión de Dependencias (DIP)
- [ ] ¿Qué es DIP?
- [ ] Depender de abstracciones
- [ ] Inyección de dependencias

**Ejemplo:**
```python
from abc import ABC, abstractmethod

# Depender de interfaz, no de implementación concreta
class IRepositorioUsuario(ABC):
    @abstractmethod
    def obtener_por_id(self, id):
        pass
    
    @abstractmethod
    def guardar(self, usuario):
        pass

class UsuarioService:
    def __init__(self, repositorio: IRepositorioUsuario):
        self.repositorio = repositorio  # Inyección de dependencia
    
    def obtener_usuario(self, id):
        return self.repositorio.obtener_por_id(id)

# Implementaciones
class RepositorioUsuarioMemoria(IRepositorioUsuario):
    def __init__(self):
        self.usuarios = {}
    
    def obtener_por_id(self, id):
        return self.usuarios.get(id)
    
    def guardar(self, usuario):
        self.usuarios[usuario.id] = usuario

class RepositorioUsuarioBD(IRepositorioUsuario):
    def obtener_por_id(self, id):
        # Lógica para obtener de BD
        pass
    
    def guardar(self, usuario):
        # Lógica para guardar en BD
        pass
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DIP"`

#### Paso 22: Principio YAGNI (You Aren't Gonna Need It)
- [ ] ¿Qué es YAGNI?
- [ ] Evitar sobre-ingeniería
- [ ] Implementar solo lo necesario

**📚 Conceptos Clave:**

##### **YAGNI (You Aren't Gonna Need It)**
**Definición:** No implementes funcionalidad hasta que realmente la necesites. Evita la sobre-ingeniería.

**Ejemplo:**
```python
# ❌ Mal: Implementar funcionalidad que no se necesita
class Usuario:
    def enviar_email(self):
        # No se usa
        pass
    
    def generar_pdf(self):
        # No se usa
        pass
    
    def exportar_excel(self):
        # No se usa
        pass

# ✅ Bien: Solo implementar lo necesario
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email
    # Solo agregar métodos cuando realmente se necesiten
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI"`

#### Paso 23: Principio KISS (Keep It Simple, Stupid)
- [ ] ¿Qué es KISS?
- [ ] Simplicidad sobre complejidad
- [ ] Código legible y mantenible

**Ejemplo:**
```python
# ❌ Mal: Solución compleja innecesaria
def calcular_suma(numeros):
    return sum(numeros) if numeros else 0

# ✅ Bien: Solución simple y clara
def calcular_suma(numeros):
    suma = 0
    for numero in numeros:
        suma += numero
    return suma
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS"`

#### Paso 24: Principio DRY (Don't Repeat Yourself)
- [ ] ¿Qué es DRY?
- [ ] Identificar código duplicado
- [ ] Extraer funciones comunes

**Ejemplo:**
```python
# ❌ Mal: Código duplicado
def validar_numero(num):
    if num < 0:
        raise ValueError("Número negativo")

def sumar(a, b):
    if a < 0:
        raise ValueError("Número negativo")
    if b < 0:
        raise ValueError("Número negativo")
    return a + b

# ✅ Bien: Eliminar duplicación
def validar_numero(num):
    if num < 0:
        raise ValueError("Número negativo")

def sumar(a, b):
    validar_numero(a)
    validar_numero(b)
    return a + b
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```python
from abc import ABC, abstractmethod
from datetime import datetime

# Modelo
class Tarea:
    def __init__(self, id, titulo, descripcion):
        self.id = id
        self.titulo = titulo
        self.descripcion = descripcion
        self.completada = False
        self.fecha_creacion = datetime.now()
    
    def completar(self):
        self.completada = True

# Repositorio (SRP)
class IRepositorioTarea(ABC):
    @abstractmethod
    def agregar(self, tarea):
        pass
    
    @abstractmethod
    def obtener_por_id(self, id):
        pass
    
    @abstractmethod
    def obtener_todas(self):
        pass

class RepositorioTareaMemoria(IRepositorioTarea):
    def __init__(self):
        self.tareas = {}
    
    def agregar(self, tarea):
        self.tareas[tarea.id] = tarea
    
    def obtener_por_id(self, id):
        return self.tareas.get(id)
    
    def obtener_todas(self):
        return list(self.tareas.values())

# Servicio
class TareaService:
    def __init__(self, repositorio: IRepositorioTarea):
        self.repositorio = repositorio
    
    def completar_tarea(self, id):
        tarea = self.repositorio.obtener_por_id(id)
        if tarea:
            tarea.completar()
            return True
        return False
```

### Ejemplo 2: Cliente API para GitHub

```python
import requests

class GitHubApiCliente:
    def __init__(self):
        self.base_url = "https://api.github.com"
        self.headers = {
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "MiApp"
        }
    
    def obtener_usuario(self, username):
        try:
            url = f"{self.base_url}/users/{username}"
            response = requests.get(url, headers=self.headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener usuario: {e}")
            return None

# Uso
cliente = GitHubApiCliente()
usuario = cliente.obtener_usuario("octocat")
if usuario:
    print(f"Usuario: {usuario['login']}")
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

- [Documentación oficial de Python](https://docs.python.org/es/3/)
- [PEP 8 - Style Guide](https://pep8.org/)
- [Real Python](https://realpython.com/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Python desde principiante hasta experto.

