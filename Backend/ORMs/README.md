# 📘 Curso Completo de ORMs

<div align="center">

![ORMs](https://img.shields.io/badge/ORMs-Object%20Relational%20Mapping-FF6B6B?style=for-the-badge)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Entity Framework](https://img.shields.io/badge/Entity%20Framework-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de ORMs (Object-Relational Mapping) desde conceptos básicos hasta avanzados, con enfoque en TypeORM, Prisma, Sequelize, Entity Framework, Hibernate, SQLAlchemy, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🔧 ORMs para TypeScript/JavaScript](#-orms-para-typescriptjavascript)
- [🔷 ORMs para C#](#-orms-para-c)
- [☕ ORMs para Java](#-orms-para-java)
- [🐍 ORMs para Python](#-orms-para-python)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### ¿Qué es un ORM?

**ORM (Object-Relational Mapping)** es una técnica de programación que permite convertir datos entre sistemas incompatibles usando programación orientada a objetos. En términos simples, un ORM mapea objetos de tu código a tablas de una base de datos relacional.

**Ventajas:**
- ✅ No necesitas escribir SQL manualmente
- ✅ Código más limpio y mantenible
- ✅ Type-safe (en lenguajes tipados)
- ✅ Migraciones automáticas
- ✅ Protección contra SQL injection

**Desventajas:**
- ⚠️ Curva de aprendizaje
- ⚠️ Puede generar consultas ineficientes
- ⚠️ Overhead de abstracción

---

## 📋 Requisitos Mínimos

- **Base de datos**: PostgreSQL, MySQL, SQLite, o SQL Server
- **Lenguaje**: TypeScript/JavaScript, C#, Java, o Python
- **Node.js** 18+ (para ORMs de JavaScript/TypeScript)
- **.NET SDK** 8.0+ (para Entity Framework)
- **Java JDK** 17+ (para Hibernate)
- **Python** 3.11+ (para SQLAlchemy)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos de ORMs (Principiante)

#### Paso 1: Introducción a ORMs
- [ ] ¿Qué es un ORM?
- [ ] Ventajas y desventajas
- [ ] Comparación: ORM vs SQL directo
- [ ] Cuándo usar un ORM

**📚 Conceptos Clave:**

##### **ORM (Object-Relational Mapping)**
**Definición:** Técnica que mapea objetos de programación orientada a objetos a tablas de bases de datos relacionales.

**Ejemplo Conceptual:**
```typescript
// Sin ORM (SQL directo)
const query = "SELECT * FROM usuarios WHERE id = ?";
const result = await db.query(query, [userId]);

// Con ORM
const usuario = await Usuario.findOne({ where: { id: userId } });
```

**Comparación ORM vs SQL Directo:**

| Característica | ORM | SQL Directo |
|---------------|-----|-------------|
| **Productividad** | Alta | Media |
| **Rendimiento** | Variable | Óptimo |
| **Type Safety** | Sí | No |
| **Curva de aprendizaje** | Media-Alta | Baja |
| **Mantenibilidad** | Alta | Media |
| **Flexibilidad** | Media | Alta |

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a ORMs"`

#### Paso 2: Conceptos Fundamentales
- [ ] Entidades (Entities)
- [ ] Modelos (Models)
- [ ] Repositorios (Repositories)
- [ ] Migraciones (Migrations)
- [ ] Relaciones (Relations)

**📚 Conceptos Clave:**

##### **Entidad (Entity)**
**Definición:** Clase que representa una tabla en la base de datos. Cada instancia representa una fila.

**Ejemplo:**
```typescript
// TypeORM
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
  
  @Column()
  email: string;
}
```

##### **Repositorio (Repository)**
**Definición:** Patrón que encapsula la lógica de acceso a datos. Proporciona métodos para operaciones CRUD.

**Ejemplo:**
```typescript
// El ORM proporciona repositorios automáticamente
const usuarioRepository = dataSource.getRepository(Usuario);
await usuarioRepository.save(usuario);
await usuarioRepository.findOne({ where: { id: 1 } });
```

##### **Migración (Migration)**
**Definición:** Script que modifica el esquema de la base de datos de forma versionada y reversible.

**Ejemplo:**
```typescript
// Migración TypeORM
export class CreateUsuarios1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true
          },
          {
            name: 'nombre',
            type: 'varchar',
            length: '100'
          }
        ]
      })
    );
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: conceptos fundamentales de ORMs"`

---

### 📍 Fase 2: ORMs para TypeScript/JavaScript (Intermedio)

#### Paso 3: TypeORM - Fundamentos
- [ ] Instalación y configuración
- [ ] Crear entidades
- [ ] Decoradores (@Entity, @Column, @PrimaryGeneratedColumn)
- [ ] DataSource y conexión

**📚 Conceptos Clave:**

##### **TypeORM**
**Definición:** ORM para TypeScript y JavaScript que soporta múltiples bases de datos y patrones activo y de repositorio.

**Ejemplo:**
```typescript
// Instalación
// npm install typeorm reflect-metadata
// npm install mysql2  // o pg, sqlite3, etc.

// Entidad básica
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'varchar', length: 100 })
  nombre: string;
  
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;
  
  @Column({ type: 'int', nullable: true })
  edad: number;
  
  @Column({ type: 'boolean', default: true })
  activo: boolean;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;
}

// Configuración de DataSource
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'mi_base_datos',
  entities: [Usuario],
  synchronize: false, // Usar migraciones en producción
  logging: true
});

// Inicializar
await AppDataSource.initialize();
```

**📝 Ejercicios:**
1. Crear entidad Producto con TypeORM
2. Configurar conexión a base de datos
3. Crear y ejecutar migración inicial

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de TypeORM"`

#### Paso 4: TypeORM - Operaciones CRUD
- [ ] Crear registros (save, insert)
- [ ] Leer registros (find, findOne, findOneBy)
- [ ] Actualizar registros (update, save)
- [ ] Eliminar registros (remove, delete)

**Ejemplo:**
```typescript
import { AppDataSource } from './data-source';
import { Usuario } from './entity/Usuario';

// CREATE - Crear registro
const usuario = new Usuario();
usuario.nombre = 'Juan Pérez';
usuario.email = 'juan@example.com';
usuario.edad = 25;

// Opción 1: save (recomendado)
await AppDataSource.manager.save(usuario);

// Opción 2: Usando repositorio
const usuarioRepository = AppDataSource.getRepository(Usuario);
await usuarioRepository.save(usuario);

// Opción 3: insert (más rápido, no retorna entidad)
await usuarioRepository.insert({
  nombre: 'María García',
  email: 'maria@example.com',
  edad: 30
});

// READ - Leer registros
// Encontrar todos
const usuarios = await usuarioRepository.find();

// Encontrar con condiciones
const usuariosActivos = await usuarioRepository.find({
  where: { activo: true }
});

// Encontrar uno
const usuario = await usuarioRepository.findOne({
  where: { email: 'juan@example.com' }
});

// Encontrar con relaciones
const usuarioConPedidos = await usuarioRepository.findOne({
  where: { id: 1 },
  relations: ['pedidos']
});

// UPDATE - Actualizar registro
// Opción 1: save (recomendado)
usuario.edad = 26;
await usuarioRepository.save(usuario);

// Opción 2: update (más rápido)
await usuarioRepository.update(
  { email: 'juan@example.com' },
  { edad: 26 }
);

// DELETE - Eliminar registro
// Opción 1: remove
await usuarioRepository.remove(usuario);

// Opción 2: delete
await usuarioRepository.delete({ id: 1 });
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operaciones CRUD con TypeORM"`

#### Paso 5: TypeORM - Relaciones
- [ ] One-to-One (@OneToOne)
- [ ] One-to-Many (@OneToMany)
- [ ] Many-to-One (@ManyToOne)
- [ ] Many-to-Many (@ManyToMany)
- [ ] Eager vs Lazy loading

**Ejemplo:**
```typescript
// One-to-Many: Un usuario tiene muchos pedidos
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
  
  @OneToMany(() => Pedido, pedido => pedido.usuario)
  pedidos: Pedido[];
}

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;
  
  @ManyToOne(() => Usuario, usuario => usuario.pedidos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}

// Many-to-Many: Usuarios y Productos
@Entity('usuarios')
export class Usuario {
  @ManyToMany(() => Producto, producto => producto.usuarios)
  @JoinTable({
    name: 'usuario_productos',
    joinColumn: { name: 'usuario_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'producto_id', referencedColumnName: 'id' }
  })
  productosFavoritos: Producto[];
}

// Consultar con relaciones
const usuario = await usuarioRepository.findOne({
  where: { id: 1 },
  relations: ['pedidos', 'productosFavoritos']
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: relaciones en TypeORM"`

#### Paso 6: TypeORM - Query Builder
- [ ] ¿Qué es Query Builder?
- [ ] Crear consultas complejas
- [ ] Joins, Where, Order By, Group By
- [ ] Subconsultas

**Ejemplo:**
```typescript
// Query Builder básico
const usuarios = await usuarioRepository
  .createQueryBuilder('usuario')
  .where('usuario.edad > :edad', { edad: 25 })
  .andWhere('usuario.activo = :activo', { activo: true })
  .orderBy('usuario.nombre', 'ASC')
  .getMany();

// Query Builder con JOIN
const usuariosConPedidos = await usuarioRepository
  .createQueryBuilder('usuario')
  .leftJoinAndSelect('usuario.pedidos', 'pedido')
  .where('pedido.total > :total', { total: 100 })
  .getMany();

// Query Builder con agregaciones
const resultado = await usuarioRepository
  .createQueryBuilder('usuario')
  .select('usuario.edad', 'edad')
  .addSelect('COUNT(usuario.id)', 'cantidad')
  .groupBy('usuario.edad')
  .having('COUNT(usuario.id) > :min', { min: 5 })
  .getRawMany();

// Query Builder con subconsultas
const usuarios = await usuarioRepository
  .createQueryBuilder('usuario')
  .where(qb => {
    const subQuery = qb
      .subQuery()
      .select('pedido.usuario_id')
      .from(Pedido, 'pedido')
      .where('pedido.total > :total', { total: 1000 })
      .getQuery();
    return 'usuario.id IN ' + subQuery;
  })
  .getMany();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: query builder en TypeORM"`

#### Paso 7: Prisma - Fundamentos
- [ ] Instalación y configuración
- [ ] Schema.prisma
- [ ] Generar cliente Prisma
- [ ] Migraciones

**📚 Conceptos Clave:**

##### **Prisma**
**Definición:** ORM moderno para TypeScript y JavaScript con type-safety, migraciones automáticas y excelente DX.

**Ejemplo:**
```prisma
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id        Int      @id @default(autoincrement())
  nombre    String   @db.VarChar(100)
  email     String   @unique @db.VarChar(255)
  edad      Int?
  activo    Boolean  @default(true)
  fechaCreacion DateTime @default(now())
  
  pedidos   Pedido[]
}

model Pedido {
  id        Int      @id @default(autoincrement())
  total     Decimal  @db.Decimal(10, 2)
  fechaPedido DateTime @default(now())
  usuarioId Int
  
  usuario   Usuario @relation(fields: [usuarioId], references: [id])
}

// Generar cliente
// npx prisma generate

// Crear migración
// npx prisma migrate dev --name init

// Usar Prisma Client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Operaciones CRUD
const usuario = await prisma.usuario.create({
  data: {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    edad: 25
  }
});

const usuarios = await prisma.usuario.findMany({
  where: {
    edad: { gt: 25 },
    activo: true
  },
  include: {
    pedidos: true
  }
});
```

**📝 Ejercicios:**
1. Crear schema.prisma para sistema de e-commerce
2. Generar cliente y ejecutar migraciones
3. Realizar operaciones CRUD con Prisma Client

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de Prisma"`

#### Paso 8: Prisma - Operaciones Avanzadas
- [ ] Consultas complejas
- [ ] Transacciones
- [ ] Raw queries
- [ ] Prisma Studio

**Ejemplo:**
```typescript
// Consultas complejas
const usuarios = await prisma.usuario.findMany({
  where: {
    OR: [
      { edad: { gt: 25 } },
      { activo: true }
    ],
    pedidos: {
      some: {
        total: { gt: 100 }
      }
    }
  },
  include: {
    pedidos: {
      where: {
        total: { gt: 50 }
      },
      orderBy: {
        fechaPedido: 'desc'
      }
    }
  },
  orderBy: {
    nombre: 'asc'
  },
  take: 10,
  skip: 20
});

// Transacciones
await prisma.$transaction(async (tx) => {
  const usuario = await tx.usuario.create({
    data: {
      nombre: 'Juan',
      email: 'juan@example.com'
    }
  });
  
  await tx.pedido.create({
    data: {
      total: 99.99,
      usuarioId: usuario.id
    }
  });
});

// Raw queries
const resultados = await prisma.$queryRaw`
  SELECT u.nombre, COUNT(p.id) as total_pedidos
  FROM Usuario u
  LEFT JOIN Pedido p ON u.id = p.usuarioId
  GROUP BY u.id, u.nombre
  HAVING COUNT(p.id) > 5
`;

// Prisma Studio (GUI)
// npx prisma studio
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: operaciones avanzadas con Prisma"`

#### Paso 9: Sequelize - Fundamentos
- [ ] Instalación y configuración
- [ ] Definir modelos
- [ ] Sincronización
- [ ] Asociaciones

**Ejemplo:**
```javascript
// Instalación
// npm install sequelize
// npm install mysql2  // o pg, sqlite3

const { Sequelize, DataTypes } = require('sequelize');

// Configuración
const sequelize = new Sequelize('mi_base_datos', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definir modelo
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'usuarios',
  timestamps: true
});

// Sincronizar (solo desarrollo)
await sequelize.sync({ force: false });

// Operaciones CRUD
const usuario = await Usuario.create({
  nombre: 'Juan Pérez',
  email: 'juan@example.com',
  edad: 25
});

const usuarios = await Usuario.findAll({
  where: {
    edad: { [Op.gt]: 25 },
    activo: true
  }
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de Sequelize"`

---

### 📍 Fase 3: ORMs para C# (Intermedio)

#### Paso 10: Entity Framework Core - Fundamentos
- [ ] Instalación y configuración
- [ ] DbContext
- [ ] Entidades y DbSet
- [ ] Migraciones

**📚 Conceptos Clave:**

##### **Entity Framework Core**
**Definición:** ORM oficial de Microsoft para .NET. Permite trabajar con bases de datos usando objetos .NET.

**Ejemplo:**
```csharp
// Instalación
// dotnet add package Microsoft.EntityFrameworkCore
// dotnet add package Microsoft.EntityFrameworkCore.SqlServer

// Entidad
public class Usuario
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Email { get; set; }
    public int? Edad { get; set; }
    public bool Activo { get; set; }
    public DateTime FechaCreacion { get; set; }
    
    // Navegación
    public ICollection<Pedido> Pedidos { get; set; }
}

// DbContext
public class ApplicationDbContext : DbContext
{
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Pedido> Pedidos { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            "Server=localhost;Database=MiBaseDatos;Trusted_Connection=True;"
        );
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Email).IsRequired().HasMaxLength(255);
            entity.HasIndex(e => e.Email).IsUnique();
        });
    }
}

// Migraciones
// dotnet ef migrations add InitialCreate
// dotnet ef database update

// Uso
using var context = new ApplicationDbContext();

var usuario = new Usuario
{
    Nombre = "Juan Pérez",
    Email = "juan@example.com",
    Edad = 25,
    Activo = true
};

context.Usuarios.Add(usuario);
await context.SaveChangesAsync();
```

**📝 Ejercicios:**
1. Crear DbContext con Entity Framework Core
2. Definir entidades y relaciones
3. Crear y ejecutar migraciones

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de Entity Framework Core"`

#### Paso 11: Entity Framework Core - LINQ y Consultas
- [ ] LINQ to Entities
- [ ] Consultas con Where, Select, OrderBy
- [ ] Include para eager loading
- [ ] Consultas asíncronas

**Ejemplo:**
```csharp
// LINQ básico
var usuarios = await context.Usuarios
    .Where(u => u.Edad > 25 && u.Activo)
    .OrderBy(u => u.Nombre)
    .ToListAsync();

// Include para relaciones
var usuarioConPedidos = await context.Usuarios
    .Include(u => u.Pedidos)
    .Where(u => u.Id == 1)
    .FirstOrDefaultAsync();

// Proyección
var nombres = await context.Usuarios
    .Select(u => u.Nombre)
    .ToListAsync();

// Agregaciones
var promedioEdad = await context.Usuarios
    .Where(u => u.Activo)
    .AverageAsync(u => u.Edad ?? 0);

// Consultas complejas
var usuarios = await context.Usuarios
    .Where(u => u.Pedidos.Any(p => p.Total > 100))
    .Select(u => new
    {
        u.Nombre,
        u.Email,
        TotalPedidos = u.Pedidos.Count(),
        TotalGastado = u.Pedidos.Sum(p => p.Total)
    })
    .ToListAsync();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consultas LINQ con Entity Framework"`

---

### 📍 Fase 4: ORMs para Java (Intermedio)

#### Paso 12: Hibernate/JPA - Fundamentos
- [ ] Instalación y configuración
- [ ] Entidades con JPA annotations
- [ ] EntityManager
- [ ] persistence.xml

**📚 Conceptos Clave:**

##### **Hibernate/JPA**
**Definición:** Framework de mapeo objeto-relacional para Java. JPA (Java Persistence API) es la especificación, Hibernate es la implementación.

**Ejemplo:**
```java
// Dependencias (Maven)
// <dependency>
//     <groupId>org.hibernate.orm</groupId>
//     <artifactId>hibernate-core</artifactId>
// </dependency>

// Entidad
import javax.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;
    
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    
    @Column(name = "edad")
    private Integer edad;
    
    @Column(name = "activo")
    private Boolean activo = true;
    
    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Pedido> pedidos = new ArrayList<>();
    
    // Getters y setters
}

// Configuración (persistence.xml)
<persistence xmlns="http://java.sun.com/xml/ns/persistence">
    <persistence-unit name="mi-persistence-unit">
        <properties>
            <property name="javax.persistence.jdbc.url" 
                      value="jdbc:mysql://localhost:3306/mi_base_datos"/>
            <property name="javax.persistence.jdbc.user" value="root"/>
            <property name="javax.persistence.jdbc.password" value="password"/>
            <property name="hibernate.dialect" 
                      value="org.hibernate.dialect.MySQLDialect"/>
        </properties>
    </persistence-unit>
</persistence>

// Uso
EntityManagerFactory emf = Persistence.createEntityManagerFactory("mi-persistence-unit");
EntityManager em = emf.createEntityManager();

EntityTransaction transaction = em.getTransaction();
transaction.begin();

Usuario usuario = new Usuario();
usuario.setNombre("Juan Pérez");
usuario.setEmail("juan@example.com");
em.persist(usuario);

transaction.commit();
em.close();
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de Hibernate/JPA"`

---

### 📍 Fase 5: ORMs para Python (Intermedio)

#### Paso 13: SQLAlchemy - Fundamentos
- [ ] Instalación y configuración
- [ ] Declarative Base
- [ ] Session
- [ ] Modelos y relaciones

**📚 Conceptos Clave:**

##### **SQLAlchemy**
**Definición:** ORM más popular para Python. Proporciona un conjunto completo de herramientas para trabajar con bases de datos.

**Ejemplo:**
```python
# Instalación
# pip install sqlalchemy
# pip install pymysql  # o psycopg2, sqlite3

from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime

# Configuración
engine = create_engine('mysql+pymysql://root:password@localhost/mi_base_datos')
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# Modelo
class Usuario(Base):
    __tablename__ = 'usuarios'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    edad = Column(Integer, nullable=True)
    activo = Column(Boolean, default=True)
    fecha_creacion = Column(DateTime, default=datetime.now)
    
    # Relación
    pedidos = relationship('Pedido', back_populates='usuario')

class Pedido(Base):
    __tablename__ = 'pedidos'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    total = Column(Integer, nullable=False)
    usuario_id = Column(Integer, ForeignKey('usuarios.id'))
    
    # Relación
    usuario = relationship('Usuario', back_populates='pedidos')

# Crear tablas
Base.metadata.create_all(engine)

# Uso
session = SessionLocal()

# CREATE
usuario = Usuario(nombre='Juan Pérez', email='juan@example.com', edad=25)
session.add(usuario)
session.commit()

# READ
usuarios = session.query(Usuario).filter(Usuario.edad > 25).all()
usuario = session.query(Usuario).filter_by(email='juan@example.com').first()

# UPDATE
usuario.edad = 26
session.commit()

# DELETE
session.delete(usuario)
session.commit()
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial de SQLAlchemy"`

---

### 📍 Fase 6: Conceptos Avanzados (Avanzado)

#### Paso 14: Migraciones
- [ ] ¿Qué son las migraciones?
- [ ] Crear migraciones
- [ ] Aplicar y revertir migraciones
- [ ] Migraciones en producción

**Ejemplo:**
```typescript
// TypeORM - Crear migración
// npm run typeorm migration:create -- -n CreateUsuarios

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsuarios1234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuarios',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'nombre',
            type: 'varchar',
            length: '100'
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true
          }
        ]
      }),
      true
    );
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuarios');
  }
}

// Aplicar migraciones
// npm run typeorm migration:run

// Revertir migración
// npm run typeorm migration:revert
```

```prisma
// Prisma - Migración automática
// npx prisma migrate dev --name add_edad_field

// Schema actualizado
model Usuario {
  id        Int      @id @default(autoincrement())
  nombre    String
  email     String   @unique
  edad      Int?     // Campo nuevo
}

// Prisma genera la migración automáticamente
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: migraciones con ORM"`

#### Paso 15: Transacciones
- [ ] ¿Qué son las transacciones?
- [ ] Transacciones en TypeORM
- [ ] Transacciones en Prisma
- [ ] Transacciones en Entity Framework
- [ ] Rollback y manejo de errores

**Ejemplo:**
```typescript
// TypeORM - Transacciones
const queryRunner = AppDataSource.createQueryRunner();
await queryRunner.connect();
await queryRunner.startTransaction();

try {
  const usuario = new Usuario();
  usuario.nombre = 'Juan';
  await queryRunner.manager.save(usuario);
  
  const pedido = new Pedido();
  pedido.usuario = usuario;
  pedido.total = 99.99;
  await queryRunner.manager.save(pedido);
  
  await queryRunner.commitTransaction();
} catch (error) {
  await queryRunner.rollbackTransaction();
  throw error;
} finally {
  await queryRunner.release();
}

// Prisma - Transacciones
await prisma.$transaction(async (tx) => {
  const usuario = await tx.usuario.create({
    data: { nombre: 'Juan', email: 'juan@example.com' }
  });
  
  await tx.pedido.create({
    data: { total: 99.99, usuarioId: usuario.id }
  });
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: transacciones con ORM"`

#### Paso 16: Optimización y Rendimiento
- [ ] Eager vs Lazy loading
- [ ] N+1 Problem
- [ ] Select específico (no SELECT *)
- [ ] Índices en ORMs
- [ ] Caché de consultas

**📚 Conceptos Clave:**

##### **N+1 Problem**
**Definición:** Problema de rendimiento donde se ejecutan N+1 consultas en lugar de una sola consulta optimizada.

**Ejemplo:**
```typescript
// ❌ Mal: N+1 Problem
const usuarios = await usuarioRepository.find(); // 1 consulta
for (const usuario of usuarios) {
  const pedidos = await pedidoRepository.find({ 
    where: { usuarioId: usuario.id } 
  }); // N consultas (una por cada usuario)
}

// ✅ Bien: Eager loading
const usuarios = await usuarioRepository.find({
  relations: ['pedidos']  // 1 consulta con JOIN
});

// ✅ Bien: Query Builder con JOIN
const usuarios = await usuarioRepository
  .createQueryBuilder('usuario')
  .leftJoinAndSelect('usuario.pedidos', 'pedido')
  .getMany();  // 1 consulta optimizada
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: optimización de consultas ORM"`

---

### 📍 Fase 7: Principios y Buenas Prácticas

#### Paso 17: Principio de Responsabilidad Única (SRP) con ORMs
- [ ] Separar lógica de negocio de acceso a datos
- [ ] Repositorios como capa de abstracción
- [ ] Servicios de negocio

**📚 Conceptos Clave:**

##### **SRP con ORMs**
**Definición:** Separar la lógica de acceso a datos (repositorios) de la lógica de negocio (servicios).

**Ejemplo:**
```typescript
// ❌ Mal: Lógica de negocio mezclada con acceso a datos
class UsuarioController {
  async crearUsuario(data) {
    const usuario = new Usuario();
    usuario.nombre = data.nombre;
    usuario.email = data.email;
    
    // Validación de negocio mezclada
    if (data.edad < 18) {
      throw new Error('Debe ser mayor de edad');
    }
    
    await usuarioRepository.save(usuario);
    
    // Lógica de negocio mezclada
    await emailService.enviarBienvenida(usuario.email);
  }
}

// ✅ Bien: Separar responsabilidades
// Repositorio - Solo acceso a datos
class UsuarioRepository {
  async crear(usuario: Usuario): Promise<Usuario> {
    return await usuarioRepository.save(usuario);
  }
  
  async encontrarPorEmail(email: string): Promise<Usuario | null> {
    return await usuarioRepository.findOne({ where: { email } });
  }
}

// Servicio - Lógica de negocio
class UsuarioService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private emailService: EmailService
  ) {}
  
  async crearUsuario(data: CrearUsuarioDto): Promise<Usuario> {
    // Validación de negocio
    if (data.edad < 18) {
      throw new Error('Debe ser mayor de edad');
    }
    
    // Verificar email único
    const existe = await this.usuarioRepository.encontrarPorEmail(data.email);
    if (existe) {
      throw new Error('Email ya existe');
    }
    
    // Crear usuario
    const usuario = new Usuario();
    usuario.nombre = data.nombre;
    usuario.email = data.email;
    usuario.edad = data.edad;
    
    const usuarioCreado = await this.usuarioRepository.crear(usuario);
    
    // Lógica de negocio
    await this.emailService.enviarBienvenida(usuarioCreado.email);
    
    return usuarioCreado;
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP con ORMs"`

#### Paso 18: Principio de Inversión de Dependencias (DIP) con ORMs
- [ ] Abstraer repositorios
- [ ] Inyección de dependencias
- [ ] Testing con mocks

**Ejemplo:**
```typescript
// Interfaz de repositorio (abstracción)
interface IUsuarioRepository {
  crear(usuario: Usuario): Promise<Usuario>;
  encontrarPorId(id: number): Promise<Usuario | null>;
  encontrarPorEmail(email: string): Promise<Usuario | null>;
  actualizar(usuario: Usuario): Promise<Usuario>;
  eliminar(id: number): Promise<void>;
}

// Implementación con TypeORM
class TypeORMUsuarioRepository implements IUsuarioRepository {
  constructor(private repository: Repository<Usuario>) {}
  
  async crear(usuario: Usuario): Promise<Usuario> {
    return await this.repository.save(usuario);
  }
  
  async encontrarPorId(id: number): Promise<Usuario | null> {
    return await this.repository.findOne({ where: { id } });
  }
  
  // ... otros métodos
}

// Implementación con Prisma
class PrismaUsuarioRepository implements IUsuarioRepository {
  constructor(private prisma: PrismaClient) {}
  
  async crear(usuario: Usuario): Promise<Usuario> {
    return await this.prisma.usuario.create({ data: usuario });
  }
  
  async encontrarPorId(id: number): Promise<Usuario | null> {
    return await this.prisma.usuario.findUnique({ where: { id } });
  }
  
  // ... otros métodos
}

// Servicio depende de abstracción, no de implementación
class UsuarioService {
  constructor(private usuarioRepository: IUsuarioRepository) {}
  
  async obtenerUsuario(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.encontrarPorId(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    return usuario;
  }
}

// Inyección de dependencias
const typeORMRepo = new TypeORMUsuarioRepository(usuarioRepository);
const service = new UsuarioService(typeORMRepo);

// O con Prisma
const prismaRepo = new PrismaUsuarioRepository(prisma);
const service2 = new UsuarioService(prismaRepo);
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DIP con ORMs"`

#### Paso 19: Principio KISS (Keep It Simple, Stupid) con ORMs
- [ ] Consultas simples y legibles
- [ ] Evitar complejidad innecesaria
- [ ] Usar características del ORM apropiadamente

**Ejemplo:**
```typescript
// ❌ Mal: Consulta compleja innecesaria
const usuarios = await usuarioRepository
  .createQueryBuilder('u')
  .leftJoin('u.pedidos', 'p')
  .leftJoin('p.items', 'i')
  .leftJoin('i.producto', 'pr')
  .select([
    'u.id',
    'u.nombre',
    'COUNT(DISTINCT p.id) as total_pedidos',
    'SUM(i.cantidad * pr.precio) as total_gastado'
  ])
  .groupBy('u.id')
  .having('COUNT(DISTINCT p.id) > 5')
  .orderBy('total_gastado', 'DESC')
  .getRawMany();

// ✅ Bien: Consulta simple con agregación
const usuarios = await usuarioRepository.find({
  relations: ['pedidos']
});

const resultado = usuarios.map(u => ({
  id: u.id,
  nombre: u.nombre,
  totalPedidos: u.pedidos.length,
  totalGastado: u.pedidos.reduce((sum, p) => sum + p.total, 0)
}));
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS con ORMs"`

#### Paso 20: Principio DRY (Don't Repeat Yourself) con ORMs
- [ ] Repositorios base genéricos
- [ ] Servicios reutilizables
- [ ] Helpers y utilidades

**Ejemplo:**
```typescript
// ❌ Mal: Código duplicado
class UsuarioRepository {
  async encontrarPorEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }
  
  async encontrarPorNombre(nombre: string) {
    return await this.repository.findOne({ where: { nombre } });
  }
  
  async encontrarPorEdad(edad: number) {
    return await this.repository.findOne({ where: { edad } });
  }
}

// ✅ Bien: Repositorio base genérico
class BaseRepository<T> {
  constructor(protected repository: Repository<T>) {}
  
  async encontrarUno(criterios: Partial<T>): Promise<T | null> {
    return await this.repository.findOne({ where: criterios as any });
  }
  
  async encontrarTodos(criterios?: Partial<T>): Promise<T[]> {
    return await this.repository.find({ where: criterios as any });
  }
  
  async crear(entidad: T): Promise<T> {
    return await this.repository.save(entidad);
  }
  
  async actualizar(id: number, datos: Partial<T>): Promise<T> {
    await this.repository.update(id, datos);
    return await this.encontrarPorId(id);
  }
  
  async eliminar(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

// Repositorio específico hereda funcionalidad base
class UsuarioRepository extends BaseRepository<Usuario> {
  constructor(repository: Repository<Usuario>) {
    super(repository);
  }
  
  // Métodos específicos de Usuario
  async encontrarConPedidos(id: number): Promise<Usuario | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['pedidos']
    });
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY con ORMs"`

#### Paso 21: Principio YAGNI (You Aren't Gonna Need It) con ORMs
- [ ] No crear repositorios prematuramente
- [ ] No sobre-abstraer
- [ ] Implementar solo lo necesario

**Ejemplo:**
```typescript
// ❌ Mal: Crear abstracciones que no se necesitan
interface IBaseRepository<T> {
  crear(entidad: T): Promise<T>;
  encontrarPorId(id: number): Promise<T | null>;
  encontrarTodos(): Promise<T[]>;
  actualizar(id: number, datos: Partial<T>): Promise<T>;
  eliminar(id: number): Promise<void>;
  encontrarPorCriterios(criterios: any): Promise<T[]>;
  contar(criterios: any): Promise<number>;
  existe(id: number): Promise<boolean>;
  // ... 20 métodos más que no se usan
}

// ✅ Bien: Implementar solo lo que se necesita
class UsuarioRepository {
  async crear(usuario: Usuario): Promise<Usuario> {
    return await usuarioRepository.save(usuario);
  }
  
  async encontrarPorEmail(email: string): Promise<Usuario | null> {
    return await usuarioRepository.findOne({ where: { email } });
  }
  
  // Solo agregar métodos cuando realmente se necesiten
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI con ORMs"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de E-commerce con TypeORM

```typescript
// Entidades
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;
  
  @Column({ unique: true })
  email: string;
  
  @OneToMany(() => Pedido, pedido => pedido.usuario)
  pedidos: Pedido[];
}

@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;
  
  @ManyToOne(() => Usuario, usuario => usuario.pedidos)
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
  
  @OneToMany(() => PedidoItem, item => item.pedido)
  items: PedidoItem[];
}

// Servicio
class PedidoService {
  constructor(
    private pedidoRepository: Repository<Pedido>,
    private usuarioRepository: Repository<Usuario>
  ) {}
  
  async crearPedido(usuarioId: number, items: CrearItemDto[]): Promise<Pedido> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: usuarioId }
    });
    
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    
    const pedido = new Pedido();
    pedido.usuario = usuario;
    pedido.items = items.map(item => {
      const pedidoItem = new PedidoItem();
      pedidoItem.productoId = item.productoId;
      pedidoItem.cantidad = item.cantidad;
      return pedidoItem;
    });
    
    pedido.total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    
    return await this.pedidoRepository.save(pedido);
  }
}
```

### Ejemplo 2: Sistema con Prisma

```prisma
// schema.prisma
model Usuario {
  id        Int      @id @default(autoincrement())
  nombre    String
  email     String   @unique
  pedidos   Pedido[]
}

model Pedido {
  id        Int      @id @default(autoincrement())
  total     Decimal  @db.Decimal(10, 2)
  usuarioId Int
  usuario   Usuario  @relation(fields: [usuarioId], references: [id])
  items     PedidoItem[]
}

model PedidoItem {
  id        Int      @id @default(autoincrement())
  cantidad  Int
  precio    Decimal  @db.Decimal(10, 2)
  pedidoId  Int
  productoId Int
  pedido    Pedido   @relation(fields: [pedidoId], references: [id])
}
```

```typescript
// Servicio con Prisma
class PedidoService {
  constructor(private prisma: PrismaClient) {}
  
  async crearPedido(usuarioId: number, items: CrearItemDto[]) {
    return await this.prisma.$transaction(async (tx) => {
      const usuario = await tx.usuario.findUnique({
        where: { id: usuarioId }
      });
      
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      
      const total = items.reduce(
        (sum, item) => sum + item.precio * item.cantidad,
        0
      );
      
      return await tx.pedido.create({
        data: {
          usuarioId,
          total,
          items: {
            create: items.map(item => ({
              cantidad: item.cantidad,
              precio: item.precio,
              productoId: item.productoId
            }))
          }
        },
        include: {
          items: true,
          usuario: true
        }
      });
    });
  }
}
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos de ORMs
- [ ] Fase 2: ORMs para TypeScript/JavaScript
- [ ] Fase 3: ORMs para C#
- [ ] Fase 4: ORMs para Java
- [ ] Fase 5: ORMs para Python
- [ ] Fase 6: Conceptos Avanzados
- [ ] Fase 7: Principios y Buenas Prácticas

---

## 🎯 Comparativa de ORMs

| ORM | Lenguaje | Ventajas | Desventajas |
|-----|----------|----------|-------------|
| **TypeORM** | TypeScript/JS | Decoradores, Query Builder potente | Curva de aprendizaje |
| **Prisma** | TypeScript/JS | Type-safe, DX excelente, Migraciones automáticas | Menos flexible |
| **Sequelize** | JavaScript | Maduro, bien documentado | Sin type-safety nativo |
| **Entity Framework** | C# | Oficial de Microsoft, LINQ | Puede ser pesado |
| **Hibernate/JPA** | Java | Estándar de la industria | Complejo, XML config |
| **SQLAlchemy** | Python | Flexible, potente | Curva de aprendizaje |

---

## 🎯 Recursos Adicionales

- [TypeORM Documentation](https://typeorm.io/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- [Hibernate Documentation](https://hibernate.org/orm/documentation/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de ORMs desde principiante hasta experto.

