# 📘 Curso Completo de SQL

<div align="center">

![SQL](https://img.shields.io/badge/SQL-Standard-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

> Repositorio dedicado al aprendizaje completo de SQL desde conceptos básicos hasta avanzados, con enfoque en diseño de bases de datos, optimización, buenas prácticas y principios de diseño de datos.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🏗️ Diseño de Bases de Datos](#️-diseño-de-bases-de-datos)
- [🔍 Consultas Avanzadas](#-consultas-avanzadas)
- [⚡ Optimización y Rendimiento](#-optimización-y-rendimiento)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Opción 1: PostgreSQL
# Windows: Descargar desde postgresql.org
# Linux: sudo apt-get install postgresql
# Mac: brew install postgresql

# Opción 2: MySQL
# Windows: Descargar desde mysql.com
# Linux: sudo apt-get install mysql-server
# Mac: brew install mysql

# Opción 3: SQLite (no requiere instalación de servidor)
# Viene incluido en Python, Node.js, etc.

# Conectar a PostgreSQL
psql -U postgres

# Conectar a MySQL
mysql -u root -p

# SQLite (crea archivo automáticamente)
sqlite3 mi_base_datos.db
```

### Estructura de un Proyecto SQL

```
mi-proyecto-sql/
├── scripts/
│   ├── 01-create-database.sql
│   ├── 02-create-tables.sql
│   ├── 03-insert-data.sql
│   ├── 04-queries.sql
│   └── 05-stored-procedures.sql
├── migrations/
│   └── 001_initial_schema.sql
└── README.md
```

---

## 📋 Requisitos Mínimos

- **Base de datos**: PostgreSQL, MySQL, SQLite, o SQL Server
- **Cliente SQL**: pgAdmin, MySQL Workbench, DBeaver, o línea de comandos
- **Editor de código**: Cualquier editor con soporte SQL
- **Conocimientos básicos**: Lógica básica (opcional pero recomendado)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar base de datos (PostgreSQL/MySQL/SQLite)
- [ ] Configurar cliente SQL
- [ ] Crear primera base de datos
- [ ] Entender estructura de bases de datos

**📚 Conceptos Clave:**

##### **Base de Datos**
**Definición:** Colección organizada de datos estructurados almacenados electrónicamente en un sistema informático.

**Ejemplo:**
```sql
-- Crear base de datos
CREATE DATABASE mi_base_datos;

-- Usar base de datos
USE mi_base_datos;  -- MySQL
-- O en PostgreSQL:
\c mi_base_datos

-- Ver bases de datos disponibles
SHOW DATABASES;  -- MySQL
\l  -- PostgreSQL
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de base de datos"`

#### Paso 2: Tipos de Datos
- [ ] Tipos numéricos (INT, DECIMAL, FLOAT)
- [ ] Tipos de texto (VARCHAR, TEXT, CHAR)
- [ ] Tipos de fecha (DATE, DATETIME, TIMESTAMP)
- [ ] Tipos booleanos (BOOLEAN, BIT)
- [ ] Tipos especiales (JSON, ARRAY)

**📚 Conceptos Clave:**

##### **Tipos de Datos SQL**
**Definición:** Especifican qué tipo de datos puede almacenar una columna.

**Ejemplo:**
```sql
-- Tipos numéricos
INT              -- Entero (4 bytes)
BIGINT           -- Entero grande (8 bytes)
DECIMAL(10, 2)   -- Decimal con precisión (10 dígitos, 2 decimales)
FLOAT            -- Número de punto flotante
DOUBLE           -- Número de doble precisión

-- Tipos de texto
VARCHAR(255)     -- String variable (hasta 255 caracteres)
TEXT             -- Texto largo
CHAR(10)         -- String fijo (exactamente 10 caracteres)

-- Tipos de fecha
DATE             -- Solo fecha (YYYY-MM-DD)
DATETIME         -- Fecha y hora
TIMESTAMP        -- Marca de tiempo
TIME             -- Solo hora

-- Booleanos
BOOLEAN          -- TRUE o FALSE (PostgreSQL)
BIT              -- 0 o 1 (MySQL, SQL Server)

-- Especiales
JSON             -- Datos JSON (PostgreSQL, MySQL 5.7+)
ARRAY            -- Arrays (PostgreSQL)
```

**📝 Ejercicios:**
1. Crear tabla con diferentes tipos de datos
2. Insertar datos de diferentes tipos
3. Consultar y verificar tipos de datos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: tipos de datos SQL"`

#### Paso 3: Crear Tablas (CREATE TABLE)
- [ ] Sintaxis CREATE TABLE
- [ ] Definir columnas
- [ ] Constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL)
- [ ] DEFAULT values
- [ ] AUTO_INCREMENT / SERIAL

**Ejemplo:**
```sql
-- Crear tabla básica
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- MySQL
    -- id SERIAL PRIMARY KEY,            -- PostgreSQL
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    edad INT,
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla con foreign key
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    fecha_pedido DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: creación de tablas y constraints"`

#### Paso 4: INSERT - Insertar Datos
- [ ] INSERT básico
- [ ] INSERT múltiple
- [ ] INSERT con SELECT
- [ ] INSERT IGNORE / ON DUPLICATE KEY UPDATE

**Ejemplo:**
```sql
-- INSERT básico
INSERT INTO usuarios (nombre, email, edad)
VALUES ('Juan Pérez', 'juan@example.com', 25);

-- INSERT múltiple
INSERT INTO usuarios (nombre, email, edad)
VALUES 
    ('María García', 'maria@example.com', 30),
    ('Pedro López', 'pedro@example.com', 28),
    ('Ana Martínez', 'ana@example.com', 32);

-- INSERT con SELECT
INSERT INTO usuarios_backup (nombre, email, edad)
SELECT nombre, email, edad
FROM usuarios
WHERE edad > 25;

-- INSERT IGNORE (MySQL) - ignora errores de duplicados
INSERT IGNORE INTO usuarios (email, nombre)
VALUES ('juan@example.com', 'Juan');

-- ON DUPLICATE KEY UPDATE (MySQL)
INSERT INTO usuarios (email, nombre)
VALUES ('juan@example.com', 'Juan Actualizado')
ON DUPLICATE KEY UPDATE nombre = 'Juan Actualizado';
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: inserción de datos"`

#### Paso 5: SELECT - Consultar Datos
- [ ] SELECT básico
- [ ] WHERE - Filtrar datos
- [ ] ORDER BY - Ordenar resultados
- [ ] LIMIT - Limitar resultados
- [ ] DISTINCT - Valores únicos

**Ejemplo:**
```sql
-- SELECT básico
SELECT * FROM usuarios;

-- SELECT columnas específicas
SELECT nombre, email FROM usuarios;

-- WHERE - Filtrar
SELECT * FROM usuarios WHERE edad > 25;

-- Múltiples condiciones
SELECT * FROM usuarios 
WHERE edad > 25 AND activo = TRUE;

-- ORDER BY - Ordenar
SELECT * FROM usuarios 
ORDER BY edad DESC;

-- Ordenar por múltiples columnas
SELECT * FROM usuarios 
ORDER BY edad DESC, nombre ASC;

-- LIMIT - Limitar resultados
SELECT * FROM usuarios 
LIMIT 10;

-- OFFSET - Saltar registros
SELECT * FROM usuarios 
LIMIT 10 OFFSET 20;  -- Registros 21-30

-- DISTINCT - Valores únicos
SELECT DISTINCT edad FROM usuarios;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consultas SELECT básicas"`

#### Paso 6: UPDATE - Actualizar Datos
- [ ] UPDATE básico
- [ ] UPDATE con WHERE
- [ ] UPDATE múltiples columnas
- [ ] UPDATE con JOIN

**Ejemplo:**
```sql
-- UPDATE básico (¡CUIDADO! Actualiza todas las filas)
UPDATE usuarios SET activo = TRUE;

-- UPDATE con WHERE (recomendado)
UPDATE usuarios 
SET activo = FALSE 
WHERE edad < 18;

-- UPDATE múltiples columnas
UPDATE usuarios 
SET nombre = 'Juan Actualizado', 
    email = 'juan.nuevo@example.com'
WHERE id = 1;

-- UPDATE con JOIN (MySQL)
UPDATE usuarios u
JOIN pedidos p ON u.id = p.usuario_id
SET u.total_pedidos = (
    SELECT COUNT(*) 
    FROM pedidos 
    WHERE usuario_id = u.id
)
WHERE p.fecha_pedido > '2024-01-01';
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: actualización de datos"`

#### Paso 7: DELETE - Eliminar Datos
- [ ] DELETE básico
- [ ] DELETE con WHERE
- [ ] DELETE con JOIN
- [ ] TRUNCATE vs DELETE

**Ejemplo:**
```sql
-- DELETE básico (¡CUIDADO! Elimina todas las filas)
DELETE FROM usuarios;

-- DELETE con WHERE (recomendado)
DELETE FROM usuarios WHERE id = 1;

-- DELETE con condiciones múltiples
DELETE FROM usuarios 
WHERE edad < 18 AND activo = FALSE;

-- DELETE con JOIN (MySQL)
DELETE u FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
WHERE p.id IS NULL;  -- Eliminar usuarios sin pedidos

-- TRUNCATE - Eliminar todas las filas (más rápido)
TRUNCATE TABLE usuarios;  -- No se puede usar con WHERE
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: eliminación de datos"`

---

### 📍 Fase 2: Consultas Intermedias (Intermedio)

#### Paso 8: Funciones Agregadas
- [ ] COUNT, SUM, AVG, MIN, MAX
- [ ] GROUP BY
- [ ] HAVING
- [ ] Funciones de fecha y texto

**📚 Conceptos Clave:**

##### **Funciones Agregadas**
**Definición:** Funciones que realizan cálculos sobre un conjunto de filas y devuelven un solo valor.

**Ejemplo:**
```sql
-- COUNT - Contar filas
SELECT COUNT(*) FROM usuarios;
SELECT COUNT(*) FROM usuarios WHERE activo = TRUE;

-- SUM - Sumar valores
SELECT SUM(total) FROM pedidos;

-- AVG - Promedio
SELECT AVG(edad) FROM usuarios;

-- MIN y MAX
SELECT MIN(edad) AS edad_minima, MAX(edad) AS edad_maxima 
FROM usuarios;

-- GROUP BY - Agrupar resultados
SELECT edad, COUNT(*) AS cantidad
FROM usuarios
GROUP BY edad;

-- HAVING - Filtrar grupos (similar a WHERE pero para grupos)
SELECT edad, COUNT(*) AS cantidad
FROM usuarios
GROUP BY edad
HAVING COUNT(*) > 5;

-- Funciones de fecha
SELECT 
    DATE(fecha_creacion) AS fecha,
    YEAR(fecha_creacion) AS año,
    MONTH(fecha_creacion) AS mes,
    DAY(fecha_creacion) AS dia
FROM usuarios;

-- Funciones de texto
SELECT 
    UPPER(nombre) AS nombre_mayusculas,
    LOWER(nombre) AS nombre_minusculas,
    LENGTH(nombre) AS longitud,
    SUBSTRING(nombre, 1, 5) AS primeros_5
FROM usuarios;
```

**📝 Ejercicios:**
1. Contar usuarios por edad
2. Calcular promedio de pedidos por usuario
3. Encontrar el usuario con más pedidos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: funciones agregadas y GROUP BY"`

#### Paso 9: JOINs - Combinar Tablas
- [ ] INNER JOIN
- [ ] LEFT JOIN / LEFT OUTER JOIN
- [ ] RIGHT JOIN / RIGHT OUTER JOIN
- [ ] FULL OUTER JOIN
- [ ] CROSS JOIN
- [ ] Self JOIN

**📚 Conceptos Clave:**

##### **JOIN**
**Definición:** Operación que combina filas de dos o más tablas basándose en una condición relacionada.

**Ejemplo:**
```sql
-- INNER JOIN - Solo filas que coinciden en ambas tablas
SELECT u.nombre, p.total, p.fecha_pedido
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id;

-- LEFT JOIN - Todas las filas de la tabla izquierda
SELECT u.nombre, p.total
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id;
-- Incluye usuarios sin pedidos (p.total será NULL)

-- RIGHT JOIN - Todas las filas de la tabla derecha
SELECT u.nombre, p.total
FROM usuarios u
RIGHT JOIN pedidos p ON u.id = p.usuario_id;
-- Incluye pedidos sin usuario (u.nombre será NULL)

-- FULL OUTER JOIN - Todas las filas de ambas tablas (PostgreSQL)
SELECT u.nombre, p.total
FROM usuarios u
FULL OUTER JOIN pedidos p ON u.id = p.usuario_id;

-- Múltiples JOINs
SELECT 
    u.nombre,
    p.total,
    pr.nombre AS producto
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
INNER JOIN pedido_items pi ON p.id = pi.pedido_id
INNER JOIN productos pr ON pi.producto_id = pr.id;

-- Self JOIN - Unir tabla consigo misma
SELECT 
    e.nombre AS empleado,
    j.nombre AS jefe
FROM empleados e
LEFT JOIN empleados j ON e.jefe_id = j.id;
```

**📝 Ejercicios:**
1. Listar usuarios con sus pedidos
2. Encontrar usuarios sin pedidos
3. Listar productos con sus categorías

> 💡 **Sugerencia de Commit**: `git commit -m "feat: JOINs y combinación de tablas"`

#### Paso 10: Subconsultas (Subqueries)
- [ ] Subconsultas escalares
- [ ] Subconsultas en WHERE
- [ ] Subconsultas en FROM
- [ ] EXISTS y NOT EXISTS
- [ ] IN y NOT IN

**Ejemplo:**
```sql
-- Subconsulta escalar (devuelve un solo valor)
SELECT nombre, 
       (SELECT COUNT(*) FROM pedidos WHERE usuario_id = usuarios.id) AS total_pedidos
FROM usuarios;

-- Subconsulta en WHERE
SELECT * FROM usuarios
WHERE edad > (SELECT AVG(edad) FROM usuarios);

-- Subconsulta en FROM (tabla derivada)
SELECT u.nombre, p.total_pedidos
FROM usuarios u
INNER JOIN (
    SELECT usuario_id, COUNT(*) AS total_pedidos
    FROM pedidos
    GROUP BY usuario_id
) p ON u.id = p.usuario_id;

-- EXISTS - Verificar existencia
SELECT * FROM usuarios u
WHERE EXISTS (
    SELECT 1 FROM pedidos p 
    WHERE p.usuario_id = u.id
);

-- NOT EXISTS
SELECT * FROM usuarios u
WHERE NOT EXISTS (
    SELECT 1 FROM pedidos p 
    WHERE p.usuario_id = u.id
);

-- IN - Verificar pertenencia
SELECT * FROM usuarios
WHERE id IN (SELECT DISTINCT usuario_id FROM pedidos);

-- NOT IN
SELECT * FROM usuarios
WHERE id NOT IN (SELECT DISTINCT usuario_id FROM pedidos WHERE usuario_id IS NOT NULL);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: subconsultas"`

#### Paso 11: Vistas (Views)
- [ ] Crear vistas
- [ ] Vistas simples y complejas
- [ ] Actualizar vistas
- [ ] Eliminar vistas

**Ejemplo:**
```sql
-- Crear vista simple
CREATE VIEW usuarios_activos AS
SELECT id, nombre, email, edad
FROM usuarios
WHERE activo = TRUE;

-- Usar vista
SELECT * FROM usuarios_activos;

-- Crear vista compleja
CREATE VIEW resumen_pedidos AS
SELECT 
    u.nombre AS usuario,
    COUNT(p.id) AS total_pedidos,
    SUM(p.total) AS total_gastado,
    AVG(p.total) AS promedio_pedido
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;

-- Actualizar vista (solo si es simple)
CREATE OR REPLACE VIEW usuarios_activos AS
SELECT id, nombre, email, edad, fecha_creacion
FROM usuarios
WHERE activo = TRUE;

-- Eliminar vista
DROP VIEW IF EXISTS usuarios_activos;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: vistas"`

---

### 📍 Fase 3: Diseño de Bases de Datos (Intermedio-Avanzado)

#### Paso 12: Normalización
- [ ] Primera Forma Normal (1NF)
- [ ] Segunda Forma Normal (2NF)
- [ ] Tercera Forma Normal (3NF)
- [ ] Forma Normal de Boyce-Codd (BCNF)
- [ ] Cuándo desnormalizar

**📚 Conceptos Clave:**

##### **Normalización**
**Definición:** Proceso de organizar datos en una base de datos para eliminar redundancia y dependencias.

**Ejemplo:**
```sql
-- ❌ Antes de normalizar (1NF violado)
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    usuario_id INT,
    productos VARCHAR(500),  -- Múltiples valores en una columna
    total DECIMAL(10, 2)
);

-- ✅ 1NF - Primera Forma Normal
CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    usuario_id INT,
    total DECIMAL(10, 2)
);

CREATE TABLE pedido_items (
    id INT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio DECIMAL(10, 2),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- ✅ 2NF - Segunda Forma Normal (eliminar dependencias parciales)
-- Separar datos que dependen solo de parte de la clave primaria

-- ✅ 3NF - Tercera Forma Normal (eliminar dependencias transitivas)
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    ciudad_id INT,  -- En lugar de ciudad VARCHAR
    FOREIGN KEY (ciudad_id) REFERENCES ciudades(id)
);

CREATE TABLE ciudades (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    pais_id INT,
    FOREIGN KEY (pais_id) REFERENCES paises(id)
);
```

**📝 Ejercicios:**
1. Normalizar tabla desnormalizada
2. Identificar violaciones de normalización
3. Aplicar 1NF, 2NF, 3NF

> 💡 **Sugerencia de Commit**: `git commit -m "feat: normalización de base de datos"`

#### Paso 13: Relaciones entre Tablas
- [ ] Relación uno a uno (1:1)
- [ ] Relación uno a muchos (1:N)
- [ ] Relación muchos a muchos (N:M)
- [ ] Tablas de unión (junction tables)

**Ejemplo:**
```sql
-- Relación 1:1 - Un usuario tiene un perfil
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE perfiles (
    id INT PRIMARY KEY,
    usuario_id INT UNIQUE,  -- UNIQUE asegura 1:1
    bio TEXT,
    foto_url VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Relación 1:N - Un usuario tiene muchos pedidos
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    usuario_id INT,  -- Muchos pedidos pueden pertenecer a un usuario
    total DECIMAL(10, 2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Relación N:M - Muchos usuarios pueden tener muchos productos favoritos
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE productos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

-- Tabla de unión (junction table)
CREATE TABLE usuario_productos_favoritos (
    usuario_id INT,
    producto_id INT,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (usuario_id, producto_id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: relaciones entre tablas"`

#### Paso 14: Índices
- [ ] ¿Qué son los índices?
- [ ] Crear índices
- [ ] Índices únicos
- [ ] Índices compuestos
- [ ] Cuándo usar índices

**📚 Conceptos Clave:**

##### **Índice**
**Definición:** Estructura de datos que mejora la velocidad de las operaciones de búsqueda en una tabla.

**Ejemplo:**
```sql
-- Crear índice simple
CREATE INDEX idx_email ON usuarios(email);

-- Crear índice único
CREATE UNIQUE INDEX idx_email_unique ON usuarios(email);

-- Crear índice compuesto
CREATE INDEX idx_nombre_edad ON usuarios(nombre, edad);

-- Índice en múltiples columnas (útil para consultas con WHERE en ambas)
CREATE INDEX idx_usuario_fecha ON pedidos(usuario_id, fecha_pedido);

-- Ver índices de una tabla
SHOW INDEX FROM usuarios;  -- MySQL
\d usuarios  -- PostgreSQL (muestra índices)

-- Eliminar índice
DROP INDEX idx_email ON usuarios;

-- Cuándo usar índices:
-- ✅ Columnas usadas frecuentemente en WHERE
-- ✅ Columnas usadas en JOINs
-- ✅ Columnas usadas en ORDER BY
-- ❌ Tablas pequeñas
-- ❌ Columnas que cambian frecuentemente
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: índices y optimización"`

---

### 📍 Fase 4: Características Avanzadas (Avanzado)

#### Paso 15: Procedimientos Almacenados (Stored Procedures)
- [ ] Crear procedimientos almacenados
- [ ] Parámetros IN, OUT, INOUT
- [ ] Variables y control de flujo
- [ ] Manejo de errores

**Ejemplo:**
```sql
-- Procedimiento almacenado básico (MySQL)
DELIMITER //
CREATE PROCEDURE obtener_usuario_por_id(IN user_id INT)
BEGIN
    SELECT * FROM usuarios WHERE id = user_id;
END //
DELIMITER ;

-- Llamar procedimiento
CALL obtener_usuario_por_id(1);

-- Procedimiento con parámetros OUT
DELIMITER //
CREATE PROCEDURE contar_usuarios_activos(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM usuarios WHERE activo = TRUE;
END //
DELIMITER ;

-- Llamar y obtener resultado
CALL contar_usuarios_activos(@total);
SELECT @total;

-- Procedimiento con control de flujo
DELIMITER //
CREATE PROCEDURE crear_usuario(
    IN p_nombre VARCHAR(100),
    IN p_email VARCHAR(255),
    OUT p_id INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    INSERT INTO usuarios (nombre, email)
    VALUES (p_nombre, p_email);
    
    SET p_id = LAST_INSERT_ID();
    
    COMMIT;
END //
DELIMITER ;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: procedimientos almacenados"`

#### Paso 16: Funciones
- [ ] Crear funciones
- [ ] Funciones escalares
- [ ] Funciones de tabla
- [ ] Funciones vs Procedimientos

**Ejemplo:**
```sql
-- Función escalar (MySQL)
DELIMITER //
CREATE FUNCTION calcular_edad(fecha_nacimiento DATE)
RETURNS INT
READS SQL DATA
DETERMINISTIC
BEGIN
    RETURN YEAR(CURDATE()) - YEAR(fecha_nacimiento) - 
           (DATE_FORMAT(CURDATE(), '%m%d') < DATE_FORMAT(fecha_nacimiento, '%m%d'));
END //
DELIMITER ;

-- Usar función
SELECT nombre, calcular_edad(fecha_nacimiento) AS edad
FROM usuarios;

-- Función en PostgreSQL
CREATE OR REPLACE FUNCTION obtener_total_pedidos(p_usuario_id INT)
RETURNS DECIMAL AS $$
BEGIN
    RETURN (
        SELECT COALESCE(SUM(total), 0)
        FROM pedidos
        WHERE usuario_id = p_usuario_id
    );
END;
$$ LANGUAGE plpgsql;

-- Usar función
SELECT nombre, obtener_total_pedidos(id) AS total
FROM usuarios;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: funciones"`

#### Paso 17: Triggers
- [ ] ¿Qué son los triggers?
- [ ] BEFORE y AFTER triggers
- [ ] INSERT, UPDATE, DELETE triggers
- [ ] Casos de uso comunes

**Ejemplo:**
```sql
-- Trigger BEFORE INSERT
DELIMITER //
CREATE TRIGGER before_usuario_insert
BEFORE INSERT ON usuarios
FOR EACH ROW
BEGIN
    IF NEW.edad < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'La edad no puede ser negativa';
    END IF;
    
    SET NEW.fecha_creacion = NOW();
END //
DELIMITER ;

-- Trigger AFTER INSERT
DELIMITER //
CREATE TRIGGER after_pedido_insert
AFTER INSERT ON pedidos
FOR EACH ROW
BEGIN
    UPDATE usuarios
    SET total_pedidos = total_pedidos + 1,
        ultimo_pedido = NOW()
    WHERE id = NEW.usuario_id;
END //
DELIMITER ;

-- Trigger BEFORE UPDATE
DELIMITER //
CREATE TRIGGER before_usuario_update
BEFORE UPDATE ON usuarios
FOR EACH ROW
BEGIN
    SET NEW.fecha_actualizacion = NOW();
END //
DELIMITER ;

-- Trigger en PostgreSQL
CREATE OR REPLACE FUNCTION actualizar_fecha_modificacion()
RETURNS TRIGGER AS $$
BEGIN
    NEW.fecha_actualizacion = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_fecha
BEFORE UPDATE ON usuarios
FOR EACH ROW
EXECUTE FUNCTION actualizar_fecha_modificacion();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: triggers"`

#### Paso 18: Transacciones
- [ ] ¿Qué son las transacciones?
- [ ] BEGIN, COMMIT, ROLLBACK
- [ ] ACID properties
- [ ] Niveles de aislamiento

**📚 Conceptos Clave:**

##### **Transacción**
**Definición:** Secuencia de operaciones de base de datos que se ejecutan como una sola unidad de trabajo.

**Ejemplo:**
```sql
-- Transacción básica
START TRANSACTION;

INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com');
INSERT INTO pedidos (usuario_id, total) VALUES (LAST_INSERT_ID(), 100.00);

COMMIT;  -- Confirmar cambios
-- O ROLLBACK;  -- Deshacer cambios

-- Transacción con manejo de errores
START TRANSACTION;

BEGIN
    INSERT INTO usuarios (nombre, email) VALUES ('María', 'maria@example.com');
    INSERT INTO pedidos (usuario_id, total) VALUES (LAST_INSERT_ID(), 200.00);
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;

-- Niveles de aislamiento
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: transacciones"`

---

### 📍 Fase 5: Optimización y Rendimiento (Avanzado)

#### Paso 19: EXPLAIN y Análisis de Consultas
- [ ] EXPLAIN básico
- [ ] EXPLAIN ANALYZE
- [ ] Interpretar planes de ejecución
- [ ] Identificar cuellos de botella

**Ejemplo:**
```sql
-- EXPLAIN - Ver plan de ejecución
EXPLAIN SELECT * FROM usuarios WHERE email = 'juan@example.com';

-- EXPLAIN con formato detallado
EXPLAIN FORMAT=JSON 
SELECT u.nombre, p.total
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
WHERE u.edad > 25;

-- EXPLAIN ANALYZE - Ejecutar y mostrar estadísticas
EXPLAIN ANALYZE
SELECT * FROM usuarios
WHERE nombre LIKE '%Juan%';

-- Interpretar resultados:
-- - type: ALL = tabla completa (malo), index = usa índice (bueno)
-- - rows: número estimado de filas examinadas
-- - Extra: información adicional (Using index, Using where, etc.)
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: análisis de consultas con EXPLAIN"`

#### Paso 20: Optimización de Consultas
- [ ] Evitar SELECT *
- [ ] Usar índices efectivamente
- [ ] Optimizar JOINs
- [ ] Evitar funciones en WHERE
- [ ] Usar LIMIT cuando sea posible

**Ejemplo:**
```sql
-- ❌ Mal: SELECT * cuando no necesitas todas las columnas
SELECT * FROM usuarios WHERE edad > 25;

-- ✅ Bien: Seleccionar solo columnas necesarias
SELECT nombre, email FROM usuarios WHERE edad > 25;

-- ❌ Mal: Función en WHERE (no puede usar índice)
SELECT * FROM usuarios WHERE YEAR(fecha_creacion) = 2024;

-- ✅ Bien: Comparar directamente
SELECT * FROM usuarios 
WHERE fecha_creacion >= '2024-01-01' 
  AND fecha_creacion < '2025-01-01';

-- ❌ Mal: LIKE con comodín al inicio
SELECT * FROM usuarios WHERE nombre LIKE '%Juan%';

-- ✅ Bien: LIKE con comodín al final (puede usar índice)
SELECT * FROM usuarios WHERE nombre LIKE 'Juan%';

-- ✅ Optimizar JOINs: unir tablas más pequeñas primero
SELECT u.nombre, p.total
FROM (SELECT * FROM usuarios WHERE activo = TRUE) u
INNER JOIN pedidos p ON u.id = p.usuario_id;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: optimización de consultas"`

---

### 📍 Fase 6: Principios y Buenas Prácticas

#### Paso 21: Principio de Responsabilidad Única (SRP) en SQL
- [ ] Una tabla, un propósito
- [ ] Separar datos de diferentes entidades
- [ ] Evitar tablas "gordas"

**📚 Conceptos Clave:**

##### **SRP en Bases de Datos**
**Definición:** Cada tabla debe representar una sola entidad o concepto del dominio.

**Ejemplo:**
```sql
-- ❌ Mal: Tabla con múltiples responsabilidades
CREATE TABLE usuarios_pedidos (
    usuario_id INT,
    usuario_nombre VARCHAR(100),
    pedido_id INT,
    pedido_total DECIMAL(10, 2),
    producto_id INT,
    producto_nombre VARCHAR(100)
);

-- ✅ Bien: Separar responsabilidades
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE pedidos (
    id INT PRIMARY KEY,
    usuario_id INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE productos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE pedido_items (
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en diseño de BD"`

#### Paso 22: Principio KISS (Keep It Simple, Stupid) en SQL
- [ ] Consultas simples y legibles
- [ ] Evitar complejidad innecesaria
- [ ] Usar vistas para simplificar

**Ejemplo:**
```sql
-- ❌ Mal: Consulta compleja innecesaria
SELECT 
    u.id,
    u.nombre,
    (SELECT COUNT(*) FROM pedidos p WHERE p.usuario_id = u.id) AS total_pedidos,
    (SELECT SUM(total) FROM pedidos p WHERE p.usuario_id = u.id) AS total_gastado
FROM usuarios u;

-- ✅ Bien: Consulta simple con JOIN
SELECT 
    u.id,
    u.nombre,
    COUNT(p.id) AS total_pedidos,
    COALESCE(SUM(p.total), 0) AS total_gastado
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en consultas"`

#### Paso 23: Principio DRY (Don't Repeat Yourself) en SQL
- [ ] Usar vistas para consultas repetidas
- [ ] Usar funciones para lógica repetida
- [ ] Evitar duplicación de datos

**Ejemplo:**
```sql
-- ❌ Mal: Consulta duplicada en múltiples lugares
-- En aplicación: SELECT nombre, email FROM usuarios WHERE activo = TRUE
-- En reporte: SELECT nombre, email FROM usuarios WHERE activo = TRUE
-- En dashboard: SELECT nombre, email FROM usuarios WHERE activo = TRUE

-- ✅ Bien: Crear vista reutilizable
CREATE VIEW usuarios_activos AS
SELECT nombre, email 
FROM usuarios 
WHERE activo = TRUE;

-- Ahora usar la vista en todos los lugares
SELECT * FROM usuarios_activos;

-- ❌ Mal: Lógica de cálculo duplicada
SELECT 
    precio * cantidad AS subtotal,
    precio * cantidad * 0.16 AS iva,
    precio * cantidad * 1.16 AS total
FROM pedido_items;

-- ✅ Bien: Usar función
CREATE FUNCTION calcular_total(precio DECIMAL, cantidad INT)
RETURNS DECIMAL AS $$
BEGIN
    RETURN precio * cantidad * 1.16;
END;
$$ LANGUAGE plpgsql;

SELECT 
    precio,
    cantidad,
    calcular_total(precio, cantidad) AS total
FROM pedido_items;
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en SQL"`

#### Paso 24: Principio YAGNI (You Aren't Gonna Need It) en SQL
- [ ] No crear índices prematuramente
- [ ] No normalizar en exceso
- [ ] Implementar solo lo necesario

**Ejemplo:**
```sql
-- ❌ Mal: Crear índices para todo "por si acaso"
CREATE INDEX idx_nombre ON usuarios(nombre);
CREATE INDEX idx_email ON usuarios(email);
CREATE INDEX idx_edad ON usuarios(edad);
CREATE INDEX idx_fecha_creacion ON usuarios(fecha_creacion);
CREATE INDEX idx_activo ON usuarios(activo);
-- Los índices tienen costo en escritura, solo crear los necesarios

-- ✅ Bien: Crear índices solo cuando se necesiten
-- Después de identificar consultas lentas con EXPLAIN
CREATE INDEX idx_email ON usuarios(email);  -- Solo si se consulta frecuentemente por email

-- ❌ Mal: Sobre-normalización innecesaria
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre_id INT,  -- Separar nombre en otra tabla
    FOREIGN KEY (nombre_id) REFERENCES nombres(id)
);
CREATE TABLE nombres (
    id INT PRIMARY KEY,
    valor VARCHAR(100)
);
-- Para un nombre simple, esto es sobre-ingeniería

-- ✅ Bien: Normalización apropiada
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100)  -- Suficiente para este caso
);
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en SQL"`

#### Paso 25: Buenas Prácticas de Nomenclatura
- [ ] Convenciones de nombres
- [ ] Nombres descriptivos
- [ ] Consistencia

**Ejemplo:**
```sql
-- ✅ Buenas prácticas de nomenclatura

-- Tablas: plural, snake_case
CREATE TABLE usuarios (...);
CREATE TABLE pedidos (...);
CREATE TABLE productos (...);

-- Columnas: singular, snake_case
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre_completo VARCHAR(100),
    fecha_creacion TIMESTAMP,
    es_activo BOOLEAN
);

-- Índices: prefijo idx_, nombre descriptivo
CREATE INDEX idx_email ON usuarios(email);
CREATE INDEX idx_usuario_fecha ON pedidos(usuario_id, fecha_pedido);

-- Vistas: descriptivo, puede usar prefijo vw_
CREATE VIEW vw_usuarios_activos AS ...;
CREATE VIEW resumen_pedidos AS ...;

-- Procedimientos: verbo + sustantivo
CREATE PROCEDURE obtener_usuario_por_id(...);
CREATE PROCEDURE crear_pedido(...);
CREATE PROCEDURE actualizar_estado_pedido(...);

-- Funciones: verbo descriptivo
CREATE FUNCTION calcular_edad(...);
CREATE FUNCTION obtener_total_pedidos(...);
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: mejorar nomenclatura"`

#### Paso 26: Seguridad y Validación
- [ ] Validar datos en la base de datos
- [ ] Usar parámetros en consultas (prevenir SQL injection)
- [ ] Permisos y roles
- [ ] Backups

**Ejemplo:**
```sql
-- Validación con constraints
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    edad INT CHECK (edad >= 0 AND edad <= 150),
    CONSTRAINT chk_email_format CHECK (email LIKE '%@%.%')
);

-- Usar parámetros (en aplicación, no en SQL directo)
-- ❌ Mal: SQL injection vulnerable
-- "SELECT * FROM usuarios WHERE email = '" + userInput + "'"

-- ✅ Bien: Usar parámetros
-- PreparedStatement: "SELECT * FROM usuarios WHERE email = ?"

-- Permisos (PostgreSQL)
CREATE ROLE usuario_lectura;
GRANT SELECT ON usuarios TO usuario_lectura;

CREATE ROLE usuario_escritura;
GRANT SELECT, INSERT, UPDATE ON usuarios TO usuario_escritura;

-- Backups
-- PostgreSQL
pg_dump -U postgres mi_base_datos > backup.sql

-- MySQL
mysqldump -u root -p mi_base_datos > backup.sql
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: seguridad y validación"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de E-commerce Completo

```sql
-- Estructura de base de datos para e-commerce

-- Tabla de usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE,
    INDEX idx_email (email),
    INDEX idx_activo (activo)
);

-- Tabla de productos
CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    categoria_id INT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    INDEX idx_categoria (categoria_id),
    INDEX idx_precio (precio)
);

-- Tabla de pedidos
CREATE TABLE pedidos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    estado ENUM('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado') DEFAULT 'pendiente',
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    INDEX idx_usuario (usuario_id),
    INDEX idx_estado (estado),
    INDEX idx_fecha (fecha_pedido)
);

-- Vista: Resumen de pedidos por usuario
CREATE VIEW resumen_pedidos_usuario AS
SELECT 
    u.id AS usuario_id,
    u.nombre AS usuario_nombre,
    COUNT(p.id) AS total_pedidos,
    COALESCE(SUM(p.total), 0) AS total_gastado,
    AVG(p.total) AS promedio_pedido,
    MAX(p.fecha_pedido) AS ultimo_pedido
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
GROUP BY u.id, u.nombre;

-- Función: Calcular total de pedidos de un usuario
DELIMITER //
CREATE FUNCTION total_pedidos_usuario(p_usuario_id INT)
RETURNS DECIMAL(10, 2)
READS SQL DATA
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10, 2);
    SELECT COALESCE(SUM(total), 0) INTO total
    FROM pedidos
    WHERE usuario_id = p_usuario_id;
    RETURN total;
END //
DELIMITER ;
```

### Ejemplo 2: Consultas Optimizadas

```sql
-- Consulta optimizada: Usuarios con más pedidos
SELECT 
    u.id,
    u.nombre,
    COUNT(p.id) AS total_pedidos,
    SUM(p.total) AS total_gastado
FROM usuarios u
INNER JOIN pedidos p ON u.id = p.usuario_id
WHERE p.fecha_pedido >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY u.id, u.nombre
HAVING COUNT(p.id) > 5
ORDER BY total_gastado DESC
LIMIT 10;

-- Consulta con subconsulta optimizada
SELECT 
    u.*,
    (SELECT COUNT(*) FROM pedidos WHERE usuario_id = u.id) AS total_pedidos
FROM usuarios u
WHERE u.activo = TRUE;

-- Mejor: Usar JOIN (más eficiente)
SELECT 
    u.*,
    COUNT(p.id) AS total_pedidos
FROM usuarios u
LEFT JOIN pedidos p ON u.id = p.usuario_id
WHERE u.activo = TRUE
GROUP BY u.id;
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Consultas Intermedias
- [ ] Fase 3: Diseño de Bases de Datos
- [ ] Fase 4: Características Avanzadas
- [ ] Fase 5: Optimización y Rendimiento
- [ ] Fase 6: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [SQL Tutorial (W3Schools)](https://www.w3schools.com/sql/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [SQL Style Guide](https://www.sqlstyle.guide/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de SQL desde principiante hasta experto.

