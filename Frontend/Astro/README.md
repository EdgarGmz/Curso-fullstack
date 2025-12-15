# 📘 Curso Completo de Astro

<div align="center">

![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vue](https://img.shields.io/badge/Vue.js-3.3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Astro desde conceptos básicos hasta avanzados, con enfoque en componentes, islands architecture, consumo de APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🎯 Componentes y Islands](#-componentes-y-islands)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Crear proyecto con Astro
npm create astro@latest mi-proyecto
cd mi-proyecto

# Con template
npm create astro@latest mi-proyecto -- --template minimal
npm create astro@latest mi-proyecto -- --template blog
npm create astro@latest mi-proyecto -- --template portfolio

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
npm run preview
```

### Estructura de un Proyecto Astro

```
mi-proyecto/
├── src/
│   ├── components/        # Componentes Astro
│   ├── layouts/          # Layouts
│   ├── pages/            # Páginas (file-based routing)
│   ├── env.d.ts          # TypeScript definitions
│   └── config.mjs        # Configuración de Astro
├── public/               # Archivos estáticos
├── astro.config.mjs      # Configuración
└── package.json
```

---

## 📋 Requisitos Mínimos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Editor de código**: VS Code con extensión Astro
- **Conocimientos básicos**: HTML, CSS, JavaScript (ES6+)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Crear proyecto Astro
- [ ] Configurar editor de código
- [ ] Entender estructura del proyecto

**📚 Conceptos Clave:**

##### **Astro**
**Definición:** Framework web moderno para construir sitios rápidos con menos JavaScript. Utiliza "islands architecture" para enviar HTML estático con JavaScript interactivo solo donde se necesita.

**Ejemplo:**
```astro
---
// src/pages/index.astro
const titulo = '¡Hola, Astro!';
---

<html>
  <head>
    <title>{titulo}</title>
  </head>
  <body>
    <h1>{titulo}</h1>
  </body>
</html>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Astro"`

#### Paso 2: Componentes Astro
- [ ] Sintaxis de componentes
- [ ] Frontmatter (script section)
- [ ] Template section
- [ ] Props

**📚 Conceptos Clave:**

##### **Componentes Astro**
**Definición:** Componentes que se renderizan en el servidor y envían HTML estático. Pueden incluir componentes de frameworks (React, Vue, etc.) como "islands".

**Ejemplo:**
```astro
---
// src/components/Tarjeta.astro
interface Props {
  titulo: string;
  descripcion?: string;
}

const { titulo, descripcion = 'Sin descripción' } = Astro.props;
---

<div class="tarjeta">
  <h2>{titulo}</h2>
  <p>{descripcion}</p>
</div>

<style>
  .tarjeta {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
  }
</style>
```

**Uso:**
```astro
---
// src/pages/index.astro
import Tarjeta from '../components/Tarjeta.astro';
---

<Tarjeta titulo="Mi Tarjeta" descripcion="Descripción de la tarjeta" />
```

**📝 Ejercicios:**
1. Crear componente TarjetaProducto
2. Crear componente Header y Footer
3. Crear layout reutilizable

> 💡 **Sugerencia de Commit**: `git commit -m "feat: componentes Astro básicos"`

#### Paso 3: File-based Routing
- [ ] Páginas en src/pages
- [ ] Rutas dinámicas
- [ ] Rutas con parámetros
- [ ] 404 pages

**Ejemplo:**
```astro
---
// src/pages/index.astro
---

<h1>Página Principal</h1>

---
// src/pages/about.astro
---

<h1>Sobre Nosotros</h1>

---
// src/pages/blog/[slug].astro
const { slug } = Astro.params;
const post = await obtenerPost(slug);
---

<article>
  <h1>{post.titulo}</h1>
  <div set:html={post.contenido} />
</article>

---
// src/pages/404.astro
---

<h1>404 - Página no encontrada</h1>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing en Astro"`

#### Paso 4: Layouts
- [ ] Crear layouts
- [ ] Slot para contenido
- [ ] Layouts anidados
- [ ] Metadata

**Ejemplo:**
```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  titulo: string;
}

const { titulo } = Astro.props;
---

<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{titulo}</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2024 Mi Sitio</p>
    </footer>
  </body>
</html>

---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout titulo="Inicio">
  <h1>Bienvenido</h1>
  <p>Contenido de la página principal</p>
</BaseLayout>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: layouts en Astro"`

#### Paso 5: Estilos
- [ ] CSS scoped
- [ ] CSS global
- [ ] Tailwind CSS
- [ ] CSS Modules

**Ejemplo:**
```astro
---
// src/components/Tarjeta.astro
---

<div class="tarjeta">
  <h2>Título</h2>
</div>

<!-- CSS scoped (solo afecta este componente) -->
<style>
  .tarjeta {
    padding: 1rem;
    background: #f0f0f0;
  }
</style>

<!-- CSS global -->
<style is:global>
  body {
    margin: 0;
    font-family: sans-serif;
  }
</style>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estilos en Astro"`

---

### 📍 Fase 2: Islands Architecture (Intermedio)

#### Paso 6: Islands Architecture
- [ ] ¿Qué son islands?
- [ ] Componentes de frameworks
- [ ] Client directives
- [ ] Hydration

**📚 Conceptos Clave:**

##### **Islands Architecture**
**Definición:** Patrón donde el HTML estático se envía primero, y solo los componentes interactivos se "hidratan" con JavaScript. Esto reduce el JavaScript enviado al cliente.

**Ejemplo:**
```astro
---
// src/pages/index.astro
import Contador from '../components/Contador.jsx';
---

<html>
  <body>
    <h1>Página Principal</h1>
    
    <!-- Componente React que se hidrata -->
    <Contador client:load />
    
    <!-- Componente que se hidrata cuando es visible -->
    <Contador client:visible />
    
    <!-- Componente que se hidrata cuando el usuario interactúa -->
    <Contador client:idle />
  </body>
</html>
```

```jsx
// src/components/Contador.jsx
import { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

**📝 Ejercicios:**
1. Crear componente React interactivo
2. Crear componente Vue interactivo
3. Comparar diferentes client directives

> 💡 **Sugerencia de Commit**: `git commit -m "feat: islands architecture"`

#### Paso 7: Integración con Frameworks
- [ ] React
- [ ] Vue
- [ ] Svelte
- [ ] Preact

**Ejemplo:**
```bash
# Instalar integración de React
npx astro add react

# Instalar integración de Vue
npx astro add vue
```

```astro
---
// src/pages/index.astro
import ReactComponent from '../components/ReactComponent.jsx';
import VueComponent from '../components/VueComponent.vue';
---

<ReactComponent client:load />
<VueComponent client:visible />
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: integración con frameworks"`

---

### 📍 Fase 3: Data Fetching (Intermedio)

#### Paso 8: Data Fetching
- [ ] Fetch en frontmatter
- [ ] APIs externas
- [ ] Markdown/MDX
- [ ] Content Collections

**Ejemplo:**
```astro
---
// src/pages/usuarios.astro
const response = await fetch('https://api.example.com/usuarios');
const usuarios = await response.json();
---

<ul>
  {usuarios.map(usuario => (
    <li>{usuario.nombre}</li>
  ))}
</ul>
```

```astro
---
// src/pages/blog/[slug].astro
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const post = posts.find(p => p.slug === Astro.params.slug);
---

<article>
  <h1>{post.data.titulo}</h1>
  <div set:html={await post.render()} />
</article>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: data fetching en Astro"`

#### Paso 9: Content Collections
- [ ] Configurar content collections
- [ ] Schemas con Zod
- [ ] Obtener contenido
- [ ] Renderizar Markdown

**Ejemplo:**
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.date(),
    autor: z.string(),
  }),
});

export const collections = { blog };
```

```astro
---
// src/pages/blog/index.astro
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

<ul>
  {posts.map(post => (
    <li>
      <a href={`/blog/${post.slug}`}>{post.data.titulo}</a>
    </li>
  ))}
</ul>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: content collections"`

---

### 📍 Fase 4: APIs y Endpoints (Intermedio)

#### Paso 10: API Endpoints
- [ ] Crear endpoints
- [ ] Request y Response
- [ ] Métodos HTTP
- [ ] Parámetros

**Ejemplo:**
```typescript
// src/pages/api/usuarios.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  const usuarios = await obtenerUsuarios();
  return new Response(JSON.stringify(usuarios), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const nuevoUsuario = await crearUsuario(body);
  return new Response(JSON.stringify(nuevoUsuario), {
    status: 201,
  });
};
```

```astro
---
// src/pages/usuarios.astro
const response = await fetch('/api/usuarios');
const usuarios = await response.json();
---

<ul>
  {usuarios.map(u => (
    <li>{u.nombre}</li>
  ))}
</ul>
```

**📝 Ejercicios:**
1. Crear API endpoint para CRUD de usuarios
2. Implementar autenticación en endpoints
3. Crear API para búsqueda

> 💡 **Sugerencia de Commit**: `git commit -m "feat: API endpoints en Astro"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 11: Principio de Responsabilidad Única (SRP)
- [ ] Separar componentes por responsabilidad
- [ ] Utilidades y helpers
- [ ] Separar lógica de presentación

**📚 Conceptos Clave:**

##### **SRP en Astro**
**Definición:** Cada componente debe tener una sola responsabilidad.

**Ejemplo:**
```astro
---
// ❌ Mal: Componente con múltiples responsabilidades
const usuarios = await obtenerUsuarios();
// Lógica de envío de email
// Lógica de generación de reporte
---

<div>{/* ... */}</div>

---
// ✅ Bien: Separar responsabilidades
// lib/services/usuarioService.ts
export async function obtenerUsuarios() {
  // Lógica de obtención
}

// lib/services/emailService.ts
export async function enviarEmail(usuario) {
  // Lógica de envío
}

// Componente
import { obtenerUsuarios } from '../lib/services/usuarioService';
const usuarios = await obtenerUsuarios();
---

<div>{/* ... */}</div>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en Astro"`

#### Paso 12: Principio KISS (Keep It Simple, Stupid)
- [ ] Componentes simples
- [ ] Usar HTML estático cuando sea posible
- [ ] Evitar JavaScript innecesario

**Ejemplo:**
```astro
---
// ❌ Mal: JavaScript innecesario para contenido estático
const titulo = 'Título';
const descripcion = 'Descripción';
---

<h1>{titulo}</h1>
<p>{descripcion}</p>

---
// ✅ Bien: HTML estático simple
---

<h1>Título</h1>
<p>Descripción</p>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en Astro"`

#### Paso 13: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar componentes
- [ ] Helpers y utilidades
- [ ] Layouts compartidos

**Ejemplo:**
```astro
---
// lib/utils/formatearFecha.ts
export function formatearFecha(fecha: Date): string {
  return fecha.toLocaleDateString('es-ES');
}

// Reutilizar en múltiples componentes
import { formatearFecha } from '../lib/utils/formatearFecha';
const fechaFormateada = formatearFecha(new Date());
---

<p>Fecha: {fechaFormateada}</p>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en Astro"`

#### Paso 14: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear abstracciones prematuramente
- [ ] Usar features de Astro solo cuando se necesiten
- [ ] Implementar solo lo necesario

**Ejemplo:**
```astro
---
// ❌ Mal: Crear abstracciones que no se necesitan
// Componentes genéricos complejos que solo se usan una vez

// ✅ Bien: Implementar solo lo necesario
---

<div>
  <h1>Título</h1>
  <p>Contenido</p>
</div>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en Astro"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Blog con Content Collections

```astro
---
// src/pages/blog/index.astro
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

const posts = await getCollection('blog');
---

<BaseLayout titulo="Blog">
  <h1>Blog</h1>
  <ul>
    {posts.map(post => (
      <li>
        <a href={`/blog/${post.slug}`}>
          <h2>{post.data.titulo}</h2>
          <p>{post.data.descripcion}</p>
          <time>{post.data.fecha.toLocaleDateString()}</time>
        </a>
      </li>
    ))}
  </ul>
</BaseLayout>
```

### Ejemplo 2: Página con Islands

```astro
---
// src/pages/productos.astro
import ProductoCard from '../components/ProductoCard.astro';
import Carrito from '../components/Carrito.jsx';
import { obtenerProductos } from '../lib/services/productoService';

const productos = await obtenerProductos();
---

<html>
  <body>
    <h1>Productos</h1>
    
    <!-- Contenido estático -->
    <div class="productos">
      {productos.map(producto => (
        <ProductoCard producto={producto} />
      ))}
    </div>
    
    <!-- Island interactivo -->
    <Carrito client:load />
  </body>
</html>
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Islands Architecture
- [ ] Fase 3: Data Fetching
- [ ] Fase 4: APIs y Endpoints
- [ ] Fase 5: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Astro](https://docs.astro.build/)
- [Astro Integrations](https://docs.astro.build/en/guides/integrations-guide/)
- [Astro Examples](https://github.com/withastro/astro/tree/main/examples)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Astro desde principiante hasta experto.

