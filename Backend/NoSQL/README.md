# 📘 Curso Completo de NoSQL

<div align="center">

![NoSQL](https://img.shields.io/badge/NoSQL-Databases-4EA94B?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Cassandra](https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache-cassandra&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

> Repositorio dedicado al aprendizaje completo de NoSQL desde conceptos básicos hasta avanzados, con enfoque en MongoDB, Redis, Cassandra, diseño de esquemas, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🍃 MongoDB - Base de Datos de Documentos](#-mongodb---base-de-datos-de-documentos)
- [🔴 Redis - Base de Datos Clave-Valor](#-redis---base-de-datos-clave-valor)
- [📊 Cassandra - Base de Datos de Columnas](#-cassandra---base-de-datos-de-columnas)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# MongoDB
# Windows: Descargar desde mongodb.com
# Linux: sudo apt-get install mongodb
# Mac: brew install mongodb-community

# Iniciar MongoDB
mongod

# Conectar con MongoDB Shell
mongosh

# Redis
# Windows: Descargar desde redis.io o usar WSL
# Linux: sudo apt-get install redis-server
# Mac: brew install redis

# Iniciar Redis
redis-server

# Conectar con Redis CLI
redis-cli

# Cassandra
# Descargar desde cassandra.apache.org
# Iniciar Cassandra
cassandra -f
```

### Estructura de un Proyecto NoSQL

```
mi-proyecto-nosql/
├── mongodb/
│   ├── scripts/
│   │   ├── 01-create-collections.js
│   │   ├── 02-insert-data.js
│   │   └── 03-queries.js
│   └── models/
├── redis/
│   └── scripts/
├── cassandra/
│   └── scripts/
└── README.md
```

---

## 📋 Requisitos Mínimos

- **MongoDB** 6.0+ o superior
- **Redis** 7.0+ o superior
- **Cassandra** 4.0+ (opcional)
- **Cliente**: MongoDB Compass, RedisInsight, o línea de comandos
- **Conocimientos básicos**: Conceptos básicos de bases de datos (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos de NoSQL (Principiante)

#### Paso 1: Introducción a NoSQL
- [ ] ¿Qué es NoSQL?
- [ ] Diferencias entre SQL y NoSQL
- [ ] Tipos de bases de datos NoSQL
- [ ] Cuándo usar NoSQL vs SQL

**📚 Conceptos Clave:**

##### **NoSQL (Not Only SQL)**
**Definición:** Bases de datos que no siguen el modelo relacional tradicional. Diseñadas para escalabilidad horizontal y flexibilidad de esquema.

**Tipos de Bases de Datos NoSQL:**

1. **Documentos** (MongoDB, CouchDB)
   - Almacenan datos en formato JSON/BSON
   - Esquema flexible
   - Ideal para: Contenido, catálogos, perfiles de usuario

2. **Clave-Valor** (Redis, DynamoDB)
   - Almacenan pares clave-valor simples
   - Muy rápidas
   - Ideal para: Caché, sesiones, configuraciones

3. **Columnas** (Cassandra, HBase)
   - Almacenan datos en columnas en lugar de filas
   - Escalabilidad horizontal
   - Ideal para: Big data, análisis, time-series

4. **Grafos** (Neo4j, ArangoDB)
   - Almacenan relaciones entre entidades
   - Consultas complejas de relaciones
   - Ideal para: Redes sociales, recomendaciones, fraud detection

**Comparación SQL vs NoSQL:**

| Característica | SQL | NoSQL |
|---------------|-----|-------|
| **Esquema** | Fijo | Flexible |
| **Escalabilidad** | Vertical | Horizontal |
| **ACID** | Completo | Variable |
| **Consultas** | SQL | Específicas del motor |
| **Uso ideal** | Datos estructurados | Datos semi-estructurados/no estructurados |

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a NoSQL"`

#### Paso 2: Instalación y Configuración
- [ ] Instalar MongoDB
- [ ] Instalar Redis
- [ ] Configurar clientes
- [ ] Crear primera conexión

**Ejemplo:**
```bash
# MongoDB - Verificar instalación
mongosh --version

# Conectar a MongoDB
mongosh

# Crear base de datos
use mi_base_datos

# Redis - Verificar instalación
redis-cli --version

# Conectar a Redis
redis-cli

# Probar conexión
PING  # Debe responder: PONG
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de MongoDB y Redis"`

---

### 📍 Fase 2: MongoDB - Base de Datos de Documentos (Intermedio)

#### Paso 3: Fundamentos de MongoDB
- [ ] Conceptos: Base de datos, colecciones, documentos
- [ ] Estructura de documentos BSON
- [ ] Tipos de datos en MongoDB
- [ ] _id y ObjectId

**📚 Conceptos Clave:**

##### **MongoDB - Estructura**
**Definición:** Base de datos de documentos que almacena datos en formato BSON (Binary JSON).

**Estructura:**
```
Base de Datos
  └── Colecciones (equivalente a tablas)
      └── Documentos (equivalente a filas)
          └── Campos (equivalente a columnas)
```

**Ejemplo:**
```javascript
// Base de datos: ecommerce
// Colección: usuarios
// Documento:
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 25,
  "direcciones": [
    {
      "calle": "Calle Principal 123",
      "ciudad": "Madrid",
      "codigo_postal": "28001"
    }
  ],
  "fecha_creacion": ISODate("2024-01-15T10:30:00Z"),
  "activo": true
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: fundamentos de MongoDB"`

#### Paso 4: Operaciones CRUD en MongoDB
- [ ] CREATE - insertOne, insertMany
- [ ] READ - find, findOne
- [ ] UPDATE - updateOne, updateMany, replaceOne
- [ ] DELETE - deleteOne, deleteMany

**Ejemplo:**
```javascript
// CREATE - Insertar documentos
// insertOne
db.usuarios.insertOne({
  nombre: "Juan Pérez",
  email: "juan@example.com",
  edad: 25,
  activo: true
});

// insertMany
db.usuarios.insertMany([
  { nombre: "María García", email: "maria@example.com", edad: 30 },
  { nombre: "Pedro López", email: "pedro@example.com", edad: 28 }
]);

// READ - Consultar documentos
// find - Todos los documentos
db.usuarios.find();

// find con filtro
db.usuarios.find({ edad: { $gt: 25 } });

// findOne - Un solo documento
db.usuarios.findOne({ email: "juan@example.com" });

// Proyección (seleccionar campos)
db.usuarios.find({}, { nombre: 1, email: 1, _id: 0 });

// UPDATE - Actualizar documentos
// updateOne
db.usuarios.updateOne(
  { email: "juan@example.com" },
  { $set: { edad: 26 } }
);

// updateMany
db.usuarios.updateMany(
  { activo: true },
  { $set: { ultima_visita: new Date() } }
);

// Operadores de actualización
db.usuarios.updateOne(
  { email: "juan@example.com" },
  { 
    $set: { edad: 26 },
    $inc: { visitas: 1 },
    $push: { intereses: "programación" }
  }
);

// DELETE - Eliminar documentos
// deleteOne
db.usuarios.deleteOne({ email: "juan@example.com" });

// deleteMany
db.usuarios.deleteMany({ activo: false });
```

**📝 Ejercicios:**
1. Crear colección de productos e insertar 10 productos
2. Consultar productos por categoría
3. Actualizar precios de productos
4. Eliminar productos inactivos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operaciones CRUD en MongoDB"`

#### Paso 5: Consultas Avanzadas en MongoDB
- [ ] Operadores de consulta ($gt, $lt, $in, $regex)
- [ ] Operadores lógicos ($and, $or, $not)
- [ ] Consultas en arrays ($elemMatch, $size)
- [ ] Consultas en documentos anidados
- [ ] Ordenamiento y límites (sort, limit, skip)

**Ejemplo:**
```javascript
// Operadores de comparación
db.usuarios.find({ edad: { $gt: 25, $lt: 40 } });  // Mayor que 25 y menor que 40
db.usuarios.find({ edad: { $in: [25, 30, 35] } }); // En la lista
db.usuarios.find({ nombre: { $regex: /^Juan/ } }); // Regex

// Operadores lógicos
db.usuarios.find({
  $and: [
    { edad: { $gt: 25 } },
    { activo: true }
  ]
});

db.usuarios.find({
  $or: [
    { edad: { $lt: 18 } },
    { edad: { $gt: 65 } }
  ]
});

// Consultas en arrays
db.usuarios.find({
  intereses: { $in: ["programación", "música"] }
});

db.usuarios.find({
  direcciones: {
    $elemMatch: {
      ciudad: "Madrid",
      codigo_postal: { $regex: /^28/ }
    }
  }
});

// Consultas en documentos anidados
db.usuarios.find({
  "direccion.ciudad": "Madrid"
});

// Ordenamiento y límites
db.usuarios.find()
  .sort({ edad: -1 })  // Ordenar por edad descendente
  .limit(10)           // Limitar a 10 resultados
  .skip(20);           // Saltar primeros 20
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consultas avanzadas en MongoDB"`

#### Paso 6: Agregación en MongoDB
- [ ] Pipeline de agregación
- [ ] $match, $group, $project
- [ ] $lookup (JOIN)
- [ ] $unwind, $sort, $limit
- [ ] Expresiones y operadores

**📚 Conceptos Clave:**

##### **Pipeline de Agregación**
**Definición:** Secuencia de etapas que procesan documentos y devuelven resultados calculados.

**Ejemplo:**
```javascript
// Pipeline básico
db.pedidos.aggregate([
  // $match - Filtrar documentos (equivalente a WHERE)
  {
    $match: {
      fecha: { $gte: new Date("2024-01-01") }
    }
  },
  
  // $group - Agrupar y calcular (equivalente a GROUP BY)
  {
    $group: {
      _id: "$usuario_id",
      total_pedidos: { $sum: 1 },
      total_gastado: { $sum: "$total" },
      promedio_pedido: { $avg: "$total" }
    }
  },
  
  // $sort - Ordenar resultados
  {
    $sort: { total_gastado: -1 }
  },
  
  // $limit - Limitar resultados
  {
    $limit: 10
  }
]);

// $lookup - Hacer JOIN con otra colección
db.pedidos.aggregate([
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  {
    $unwind: "$usuario"  // Descomponer array
  },
  {
    $project: {
      _id: 1,
      total: 1,
      "usuario.nombre": 1,
      "usuario.email": 1
    }
  }
]);

// Pipeline complejo: Top 5 usuarios por gasto
db.pedidos.aggregate([
  {
    $match: {
      fecha: { $gte: new Date("2024-01-01") }
    }
  },
  {
    $group: {
      _id: "$usuario_id",
      total_gastado: { $sum: "$total" },
      cantidad_pedidos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  {
    $unwind: "$usuario"
  },
  {
    $project: {
      nombre: "$usuario.nombre",
      email: "$usuario.email",
      total_gastado: 1,
      cantidad_pedidos: 1
    }
  },
  {
    $sort: { total_gastado: -1 }
  },
  {
    $limit: 5
  }
]);
```

**📝 Ejercicios:**
1. Calcular total de ventas por mes
2. Encontrar productos más vendidos
3. Calcular promedio de pedidos por usuario

> 💡 **Sugerencia de Commit**: `git commit -m "feat: agregación en MongoDB"`

#### Paso 7: Índices en MongoDB
- [ ] ¿Qué son los índices?
- [ ] Crear índices simples y compuestos
- [ ] Índices únicos
- [ ] Índices de texto
- [ ] Analizar rendimiento con explain()

**Ejemplo:**
```javascript
// Crear índice simple
db.usuarios.createIndex({ email: 1 });

// Crear índice compuesto
db.pedidos.createIndex({ usuario_id: 1, fecha: -1 });

// Crear índice único
db.usuarios.createIndex({ email: 1 }, { unique: true });

// Índice de texto (búsqueda full-text)
db.productos.createIndex({ nombre: "text", descripcion: "text" });

// Buscar con índice de texto
db.productos.find({ $text: { $search: "laptop" } });

// Ver índices de una colección
db.usuarios.getIndexes();

// Eliminar índice
db.usuarios.dropIndex({ email: 1 });

// Analizar consulta con explain()
db.usuarios.find({ email: "juan@example.com" }).explain("executionStats");
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: índices en MongoDB"`

#### Paso 8: Esquemas y Validación en MongoDB
- [ ] Validación de esquema
- [ ] Reglas de validación
- [ ] Niveles de validación
- [ ] Buenas prácticas de esquema

**Ejemplo:**
```javascript
// Crear colección con validación
db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "edad"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre es requerido y debe ser string"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Email debe ser válido"
        },
        edad: {
          bsonType: "int",
          minimum: 0,
          maximum: 150,
          description: "Edad debe ser entre 0 y 150"
        },
        activo: {
          bsonType: "bool",
          description: "activo debe ser boolean"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Insertar con validación
db.usuarios.insertOne({
  nombre: "Juan",
  email: "juan@example.com",
  edad: 25,
  activo: true
}); // ✅ Válido

db.usuarios.insertOne({
  nombre: "María",
  email: "email-invalido",
  edad: 30
}); // ❌ Error: email inválido
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: validación de esquema en MongoDB"`

---

### 📍 Fase 3: Redis - Base de Datos Clave-Valor (Intermedio)

#### Paso 9: Fundamentos de Redis
- [ ] ¿Qué es Redis?
- [ ] Estructura clave-valor
- [ ] Tipos de datos en Redis
- [ ] Comandos básicos

**📚 Conceptos Clave:**

##### **Redis (Remote Dictionary Server)**
**Definición:** Base de datos en memoria de estructura clave-valor, conocida por su alta velocidad.

**Tipos de Datos en Redis:**
- **Strings**: Valores simples
- **Hashes**: Objetos (campos-valor)
- **Lists**: Listas ordenadas
- **Sets**: Conjuntos únicos
- **Sorted Sets**: Conjuntos ordenados
- **Streams**: Logs de eventos

**Ejemplo:**
```bash
# Strings
SET usuario:1:nombre "Juan Pérez"
GET usuario:1:nombre
SET usuario:1:edad 25
INCR usuario:1:visitas  # Incrementar

# Hashes - Objetos
HSET usuario:1 nombre "Juan" email "juan@example.com" edad 25
HGET usuario:1 nombre
HGETALL usuario:1
HINCRBY usuario:1 edad 1

# Lists
LPUSH productos:lista "Laptop"
RPUSH productos:lista "Mouse"
LRANGE productos:lista 0 -1
LPOP productos:lista

# Sets - Conjuntos únicos
SADD intereses:usuario:1 "programación" "música" "deportes"
SMEMBERS intereses:usuario:1
SISMEMBER intereses:usuario:1 "programación"

# Sorted Sets - Conjuntos ordenados
ZADD ranking:usuarios 100 "Juan" 200 "María" 150 "Pedro"
ZRANGE ranking:usuarios 0 -1 WITHSCORES
ZREVRANGE ranking:usuarios 0 2  # Top 3
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: fundamentos de Redis"`

#### Paso 10: Operaciones Avanzadas en Redis
- [ ] Expiración de claves (TTL, EXPIRE)
- [ ] Transacciones (MULTI, EXEC)
- [ ] Pub/Sub
- [ ] Pipelines

**Ejemplo:**
```bash
# Expiración de claves
SET sesion:usuario:123 "token123" EX 3600  # Expira en 3600 segundos
TTL sesion:usuario:123  # Ver tiempo restante
EXPIRE sesion:usuario:123 7200  # Extender expiración

# Transacciones
MULTI
SET usuario:1:nombre "Juan"
INCR usuario:1:visitas
SADD usuario:1:tags "nuevo"
EXEC  # Ejecutar todas las operaciones

# Pub/Sub - Publicar/Suscribir
# Terminal 1 (Publisher)
PUBLISH canal:notificaciones "Nuevo mensaje"

# Terminal 2 (Subscriber)
SUBSCRIBE canal:notificaciones

# Pipelines (en código, no en CLI)
# Agrupa múltiples comandos para mejor rendimiento
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operaciones avanzadas en Redis"`

#### Paso 11: Casos de Uso Comunes de Redis
- [ ] Caché
- [ ] Sesiones de usuario
- [ ] Contadores
- [ ] Rate limiting
- [ ] Colas de mensajes

**Ejemplo:**
```bash
# Caché
SET cache:producto:123 '{"nombre":"Laptop","precio":999.99}' EX 3600
GET cache:producto:123

# Sesiones
HSET sesion:abc123 usuario_id 1 ultima_actividad "2024-01-15"
EXPIRE sesion:abc123 1800  # 30 minutos

# Contadores
INCR visitas:pagina:home
INCR visitas:pagina:home
GET visitas:pagina:home

# Rate Limiting
# Limitar a 100 requests por hora por IP
INCR rate_limit:192.168.1.1
EXPIRE rate_limit:192.168.1.1 3600
GET rate_limit:192.168.1.1  # Si > 100, rechazar

# Cola de mensajes (usando Lists)
LPUSH cola:emails '{"to":"user@example.com","subject":"Hello"}'
RPOP cola:emails  # Procesar mensaje
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: casos de uso de Redis"`

---

### 📍 Fase 4: Cassandra - Base de Datos de Columnas (Avanzado)

#### Paso 12: Fundamentos de Cassandra
- [ ] ¿Qué es Cassandra?
- [ ] Modelo de datos columnar
- [ ] Keyspaces y tablas
- [ ] Particionamiento

**📚 Conceptos Clave:**

##### **Apache Cassandra**
**Definición:** Base de datos distribuida de columnas diseñada para manejar grandes cantidades de datos en múltiples servidores.

**Conceptos Clave:**
- **Keyspace**: Equivalente a base de datos
- **Table**: Equivalente a tabla
- **Partition Key**: Clave de partición
- **Clustering Key**: Clave de agrupación

**Ejemplo:**
```cql
-- Crear keyspace
CREATE KEYSPACE ecommerce
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

USE ecommerce;

-- Crear tabla
CREATE TABLE usuarios (
  usuario_id UUID PRIMARY KEY,
  nombre TEXT,
  email TEXT,
  edad INT,
  fecha_creacion TIMESTAMP
);

-- Crear tabla con partition key y clustering key
CREATE TABLE pedidos (
  usuario_id UUID,
  pedido_id UUID,
  total DECIMAL,
  fecha_pedido TIMESTAMP,
  estado TEXT,
  PRIMARY KEY (usuario_id, fecha_pedido, pedido_id)
) WITH CLUSTERING ORDER BY (fecha_pedido DESC);

-- Insertar datos
INSERT INTO usuarios (usuario_id, nombre, email, edad, fecha_creacion)
VALUES (uuid(), 'Juan Pérez', 'juan@example.com', 25, toTimestamp(now()));

-- Consultar
SELECT * FROM usuarios WHERE usuario_id = ?;
SELECT * FROM pedidos WHERE usuario_id = ?;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: fundamentos de Cassandra"`

---

### 📍 Fase 5: Integración con Aplicaciones

#### Paso 13: MongoDB con Node.js
- [ ] Instalar driver de MongoDB
- [ ] Conectar a MongoDB
- [ ] Operaciones CRUD desde código
- [ ] Manejo de errores

**Ejemplo:**
```javascript
// Instalar: npm install mongodb

const { MongoClient } = require('mongodb');

// Conectar
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Conectado a MongoDB');
    
    const db = client.db('ecommerce');
    const usuarios = db.collection('usuarios');
    
    // Insertar
    const resultado = await usuarios.insertOne({
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      edad: 25
    });
    console.log('Insertado:', resultado.insertedId);
    
    // Consultar
    const usuario = await usuarios.findOne({ email: 'juan@example.com' });
    console.log('Usuario encontrado:', usuario);
    
    // Actualizar
    await usuarios.updateOne(
      { email: 'juan@example.com' },
      { $set: { edad: 26 } }
    );
    
    // Eliminar
    await usuarios.deleteOne({ email: 'juan@example.com' });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

main();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: integración MongoDB con Node.js"`

#### Paso 14: Redis con Node.js
- [ ] Instalar cliente Redis
- [ ] Conectar a Redis
- [ ] Operaciones básicas
- [ ] Caché en aplicación

**Ejemplo:**
```javascript
// Instalar: npm install redis

const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function main() {
  await client.connect();
  
  // Strings
  await client.set('usuario:1:nombre', 'Juan Pérez');
  const nombre = await client.get('usuario:1:nombre');
  console.log('Nombre:', nombre);
  
  // Hashes
  await client.hSet('usuario:1', {
    nombre: 'Juan',
    email: 'juan@example.com',
    edad: '25'
  });
  const usuario = await client.hGetAll('usuario:1');
  console.log('Usuario:', usuario);
  
  // Expiración
  await client.setEx('sesion:123', 3600, 'token123');
  
  // Caché
  const cacheKey = 'producto:123';
  let producto = await client.get(cacheKey);
  
  if (!producto) {
    // Obtener de base de datos
    producto = JSON.stringify({ nombre: 'Laptop', precio: 999.99 });
    await client.setEx(cacheKey, 3600, producto);
  }
  
  console.log('Producto:', JSON.parse(producto));
  
  await client.quit();
}

main();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: integración Redis con Node.js"`

---

### 📍 Fase 6: Principios y Buenas Prácticas

#### Paso 15: Principio de Responsabilidad Única (SRP) en NoSQL
- [ ] Una colección, un propósito
- [ ] Separar datos de diferentes entidades
- [ ] Evitar colecciones "gordas"

**📚 Conceptos Clave:**

##### **SRP en NoSQL**
**Definición:** Cada colección debe representar una sola entidad o concepto del dominio.

**Ejemplo:**
```javascript
// ❌ Mal: Colección con múltiples responsabilidades
db.usuarios_pedidos.insertOne({
  usuario_id: 1,
  usuario_nombre: "Juan",
  pedido_id: 100,
  pedido_total: 99.99,
  producto_id: 5,
  producto_nombre: "Laptop"
});

// ✅ Bien: Separar responsabilidades
// Colección: usuarios
db.usuarios.insertOne({
  _id: 1,
  nombre: "Juan",
  email: "juan@example.com"
});

// Colección: pedidos
db.pedidos.insertOne({
  _id: 100,
  usuario_id: 1,
  total: 99.99,
  fecha: new Date()
});

// Colección: productos
db.productos.insertOne({
  _id: 5,
  nombre: "Laptop",
  precio: 999.99
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en NoSQL"`

#### Paso 16: Principio KISS (Keep It Simple, Stupid) en NoSQL
- [ ] Consultas simples y legibles
- [ ] Evitar agregaciones complejas innecesarias
- [ ] Usar índices apropiados

**Ejemplo:**
```javascript
// ❌ Mal: Consulta compleja innecesaria
db.usuarios.aggregate([
  { $match: { activo: true } },
  { $unwind: "$pedidos" },
  { $group: { _id: "$_id", total: { $sum: "$pedidos.total" } } },
  { $lookup: { from: "productos", ... } },
  { $project: { ... } }
]);

// ✅ Bien: Consulta simple
db.usuarios.find({ activo: true });
// Si necesitas pedidos, hacer consulta separada o usar $lookup solo cuando sea necesario
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en NoSQL"`

#### Paso 17: Principio DRY (Don't Repeat Yourself) en NoSQL
- [ ] Usar funciones reutilizables
- [ ] Evitar duplicación de datos
- [ ] Referencias vs Embedding

**Ejemplo:**
```javascript
// ❌ Mal: Duplicar datos de usuario en cada pedido
db.pedidos.insertOne({
  usuario_id: 1,
  usuario_nombre: "Juan",  // Duplicado
  usuario_email: "juan@example.com",  // Duplicado
  total: 99.99
});

// ✅ Bien: Usar referencia
db.pedidos.insertOne({
  usuario_id: 1,  // Referencia
  total: 99.99
});

// Obtener datos del usuario cuando sea necesario con $lookup
db.pedidos.aggregate([
  { $lookup: {
    from: "usuarios",
    localField: "usuario_id",
    foreignField: "_id",
    as: "usuario"
  }}
]);

// Embedding vs Referencing
// Embedding: Cuando los datos se acceden siempre juntos
db.usuarios.insertOne({
  nombre: "Juan",
  direccion: {  // Embedding - siempre se accede con el usuario
    calle: "Calle Principal 123",
    ciudad: "Madrid"
  }
});

// Referencing: Cuando los datos pueden crecer o accederse independientemente
db.pedidos.insertOne({
  usuario_id: ObjectId("..."),  // Referencia
  items: [ObjectId("..."), ObjectId("...")]  // Referencias a productos
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en NoSQL"`

#### Paso 18: Principio YAGNI (You Aren't Gonna Need It) en NoSQL
- [ ] No crear índices prematuramente
- [ ] No sobre-normalizar
- [ ] Implementar solo lo necesario

**Ejemplo:**
```javascript
// ❌ Mal: Crear índices para todo "por si acaso"
db.usuarios.createIndex({ nombre: 1 });
db.usuarios.createIndex({ email: 1 });
db.usuarios.createIndex({ edad: 1 });
db.usuarios.createIndex({ fecha_creacion: 1 });
db.usuarios.createIndex({ activo: 1 });
// Los índices tienen costo en escritura

// ✅ Bien: Crear índices solo cuando se necesiten
// Después de identificar consultas lentas
db.usuarios.createIndex({ email: 1 });  // Solo si se consulta frecuentemente por email

// ❌ Mal: Sobre-normalización innecesaria
// Separar nombre en otra colección cuando no es necesario
db.nombres.insertOne({ _id: 1, valor: "Juan" });
db.usuarios.insertOne({ nombre_id: 1, ... });

// ✅ Bien: Embedding apropiado
db.usuarios.insertOne({
  nombre: "Juan",  // Suficiente para este caso
  email: "juan@example.com"
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en NoSQL"`

#### Paso 19: Diseño de Esquemas en NoSQL
- [ ] Embedding vs Referencing
- [ ] Patrones de diseño comunes
- [ ] Optimización de consultas
- [ ] Sharding y escalabilidad

**Ejemplo:**
```javascript
// Patrón: Embedding para datos que se acceden juntos
db.usuarios.insertOne({
  nombre: "Juan",
  perfil: {  // Embedding - siempre se accede con el usuario
    bio: "Desarrollador",
    foto: "url.jpg",
    intereses: ["programación", "música"]
  }
});

// Patrón: Referencing para datos que crecen o se acceden independientemente
db.pedidos.insertOne({
  usuario_id: ObjectId("..."),  // Referencia
  items: [
    { producto_id: ObjectId("..."), cantidad: 2 },
    { producto_id: ObjectId("..."), cantidad: 1 }
  ]
});

// Patrón: Array de documentos para relaciones 1:N pequeñas
db.usuarios.insertOne({
  nombre: "Juan",
  direcciones: [  // Array pequeño - embedding OK
    { calle: "Calle 1", ciudad: "Madrid" },
    { calle: "Calle 2", ciudad: "Barcelona" }
  ]
});

// Patrón: Referencia para arrays grandes
db.usuarios.insertOne({
  nombre: "Juan",
  pedido_ids: [ObjectId("..."), ObjectId("...")]  // Muchos pedidos - referencia
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: diseño de esquemas en NoSQL"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de E-commerce con MongoDB

```javascript
// Estructura de documentos

// Colección: usuarios
{
  _id: ObjectId("..."),
  nombre: "Juan Pérez",
  email: "juan@example.com",
  direcciones: [
    {
      tipo: "casa",
      calle: "Calle Principal 123",
      ciudad: "Madrid",
      codigo_postal: "28001"
    }
  ],
  fecha_creacion: ISODate("2024-01-15")
}

// Colección: productos
{
  _id: ObjectId("..."),
  nombre: "Laptop",
  precio: 999.99,
  categoria: "Electrónica",
  stock: 50,
  tags: ["laptop", "computadora", "tecnología"]
}

// Colección: pedidos
{
  _id: ObjectId("..."),
  usuario_id: ObjectId("..."),
  items: [
    {
      producto_id: ObjectId("..."),
      cantidad: 2,
      precio: 999.99
    }
  ],
  total: 1999.98,
  estado: "pendiente",
  fecha_pedido: ISODate("2024-01-15")
}

// Consulta: Usuarios con más pedidos
db.pedidos.aggregate([
  {
    $group: {
      _id: "$usuario_id",
      total_pedidos: { $sum: 1 },
      total_gastado: { $sum: "$total" }
    }
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  {
    $unwind: "$usuario"
  },
  {
    $project: {
      nombre: "$usuario.nombre",
      email: "$usuario.email",
      total_pedidos: 1,
      total_gastado: 1
    }
  },
  {
    $sort: { total_gastado: -1 }
  },
  {
    $limit: 10
  }
]);
```

### Ejemplo 2: Sistema de Caché con Redis

```javascript
// Caché de productos
async function obtenerProducto(productoId) {
  const cacheKey = `producto:${productoId}`;
  
  // Intentar obtener de caché
  let producto = await redisClient.get(cacheKey);
  
  if (producto) {
    return JSON.parse(producto);
  }
  
  // Si no está en caché, obtener de base de datos
  producto = await db.productos.findOne({ _id: productoId });
  
  if (producto) {
    // Guardar en caché por 1 hora
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(producto));
  }
  
  return producto;
}

// Rate limiting
async function verificarRateLimit(ip) {
  const key = `rate_limit:${ip}`;
  const requests = await redisClient.incr(key);
  
  if (requests === 1) {
    await redisClient.expire(key, 3600); // 1 hora
  }
  
  return requests <= 100; // Máximo 100 requests por hora
}
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos de NoSQL
- [ ] Fase 2: MongoDB
- [ ] Fase 3: Redis
- [ ] Fase 4: Cassandra
- [ ] Fase 5: Integración con Aplicaciones
- [ ] Fase 6: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [MongoDB University](https://university.mongodb.com/)
- [Redis Documentation](https://redis.io/docs/)
- [Cassandra Documentation](https://cassandra.apache.org/doc/latest/)
- [NoSQL Database Comparison](https://www.mongodb.com/nosql-explained)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de NoSQL desde principiante hasta experto.

