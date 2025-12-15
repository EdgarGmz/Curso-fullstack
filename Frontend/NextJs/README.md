# 📘 Curso Completo de Next.js

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Next.js desde conceptos básicos hasta avanzados, con enfoque en Server Components, App Router, API Routes, consumo de APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🎯 Routing y Páginas](#-routing-y-páginas)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Crear proyecto con Next.js
npx create-next-app@latest mi-proyecto
cd mi-proyecto

# Con TypeScript
npx create-next-app@latest mi-proyecto --typescript

# Con Tailwind CSS
npx create-next-app@latest mi-proyecto --tailwind

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
npm start
```

### Estructura de un Proyecto Next.js (App Router)

```
mi-proyecto/
├── app/
│   ├── (auth)/           # Route groups
│   ├── api/              # API Routes
│   ├── layout.tsx        # Layout raíz
│   ├── page.tsx          # Página principal
│   └── loading.tsx       # Loading UI
├── components/           # Componentes reutilizables
├── lib/                  # Utilidades y helpers
├── public/               # Archivos estáticos
├── next.config.js        # Configuración de Next.js
└── package.json
```

---

## 📋 Requisitos Mínimos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Editor de código**: VS Code con extensiones React/Next.js
- **Conocimientos básicos**: HTML, CSS, JavaScript (ES6+), React

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Crear proyecto Next.js
- [ ] Configurar editor de código
- [ ] Entender estructura del proyecto

**📚 Conceptos Clave:**

##### **Next.js**
**Definición:** Framework de React para producción. Ofrece renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG), y API routes.

**Ejemplo:**
```tsx
// app/page.tsx
export default function Home() {
  return (
    <div>
      <h1>¡Hola, Next.js!</h1>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Next.js"`

#### Paso 2: App Router vs Pages Router
- [ ] App Router (nuevo)
- [ ] Pages Router (legacy)
- [ ] Diferencias
- [ ] Cuándo usar cada uno

**Ejemplo:**
```tsx
// App Router (app/page.tsx)
export default function Page() {
  return <h1>Home</h1>;
}

// Pages Router (pages/index.tsx)
export default function Home() {
  return <h1>Home</h1>;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: entender App Router y Pages Router"`

#### Paso 3: Server Components vs Client Components
- [ ] ¿Qué son Server Components?
- [ ] ¿Qué son Client Components?
- [ ] Cuándo usar cada uno
- [ ] Directiva 'use client'

**📚 Conceptos Clave:**

##### **Server Components**
**Definición:** Componentes que se renderizan en el servidor. No pueden usar hooks de React ni interactividad del lado del cliente.

**Ejemplo:**
```tsx
// Server Component (por defecto)
// app/usuarios/page.tsx
async function obtenerUsuarios() {
  const res = await fetch('https://api.example.com/usuarios');
  return res.json();
}

export default async function UsuariosPage() {
  const usuarios = await obtenerUsuarios();
  
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}

// Client Component
// app/components/Contador.tsx
'use client';

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
1. Crear página con Server Component
2. Crear componente interactivo con Client Component
3. Combinar Server y Client Components

> 💡 **Sugerencia de Commit**: `git commit -m "feat: Server Components y Client Components"`

#### Paso 4: Routing
- [ ] File-based routing
- [ ] Navegación con Link
- [ ] useRouter hook
- [ ] Route groups
- [ ] Dynamic routes

**Ejemplo:**
```tsx
// app/usuarios/page.tsx
import Link from 'next/link';

export default function UsuariosPage() {
  return (
    <div>
      <h1>Usuarios</h1>
      <Link href="/usuarios/1">Ver Usuario 1</Link>
    </div>
  );
}

// app/usuarios/[id]/page.tsx
import { notFound } from 'next/navigation';

export default async function UsuarioPage({ params }: { params: { id: string } }) {
  const usuario = await obtenerUsuario(params.id);
  
  if (!usuario) {
    notFound();
  }
  
  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <p>{usuario.email}</p>
    </div>
  );
}

// Client Component con navegación
'use client';

import { useRouter } from 'next/navigation';

export default function Navegacion() {
  const router = useRouter();
  
  return (
    <button onClick={() => router.push('/usuarios')}>
      Ir a Usuarios
    </button>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing en Next.js"`

#### Paso 5: Layouts y Templates
- [ ] Layouts
- [ ] Templates
- [ ] Nested layouts
- [ ] Layout groups

**Ejemplo:**
```tsx
// app/layout.tsx (Layout raíz)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav>Navegación</nav>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx (Layout anidado)
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Sidebar del Dashboard</aside>
      <main>{children}</main>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: layouts y templates"`

---

### 📍 Fase 2: Data Fetching (Intermedio)

#### Paso 6: Data Fetching en Server Components
- [ ] async/await en Server Components
- [ ] fetch con caching
- [ ] Revalidación
- [ ] Loading states

**Ejemplo:**
```tsx
// app/usuarios/page.tsx
async function obtenerUsuarios() {
  const res = await fetch('https://api.example.com/usuarios', {
    next: { revalidate: 3600 } // Revalidar cada hora
  });
  
  if (!res.ok) {
    throw new Error('Error al obtener usuarios');
  }
  
  return res.json();
}

export default async function UsuariosPage() {
  const usuarios = await obtenerUsuarios();
  
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}

// app/usuarios/loading.tsx
export default function Loading() {
  return <div>Cargando usuarios...</div>;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: data fetching en Server Components"`

#### Paso 7: Data Fetching en Client Components
- [ ] useEffect
- [ ] SWR
- [ ] React Query
- [ ] Loading y error states

**Ejemplo:**
```tsx
'use client';

import { useState, useEffect } from 'react';

export default function UsuariosClient() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function obtenerUsuarios() {
      try {
        const res = await fetch('/api/usuarios');
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    
    obtenerUsuarios();
  }, []);
  
  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.nombre}</li>
      ))}
    </ul>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: data fetching en Client Components"`

---

### 📍 Fase 3: API Routes (Intermedio)

#### Paso 8: API Routes
- [ ] Crear API routes
- [ ] Métodos HTTP
- [ ] Request y Response
- [ ] Middleware

**Ejemplo:**
```tsx
// app/api/usuarios/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const usuarios = await obtenerUsuarios();
  return NextResponse.json(usuarios);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const nuevoUsuario = await crearUsuario(body);
  return NextResponse.json(nuevoUsuario, { status: 201 });
}

// app/api/usuarios/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const usuario = await obtenerUsuarioPorId(params.id);
  
  if (!usuario) {
    return NextResponse.json(
      { error: 'Usuario no encontrado' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(usuario);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const usuarioActualizado = await actualizarUsuario(params.id, body);
  return NextResponse.json(usuarioActualizado);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await eliminarUsuario(params.id);
  return NextResponse.json({ message: 'Usuario eliminado' });
}
```

**📝 Ejercicios:**
1. Crear API route para CRUD de usuarios
2. Implementar autenticación en API routes
3. Crear middleware para validación

> 💡 **Sugerencia de Commit**: `git commit -m "feat: API routes en Next.js"`

---

### 📍 Fase 4: Optimización (Intermedio-Avanzado)

#### Paso 9: Image Optimization
- [ ] Componente Image
- [ ] Optimización automática
- [ ] Lazy loading
- [ ] Placeholders

**Ejemplo:**
```tsx
import Image from 'next/image';

export default function ProductoCard({ producto }) {
  return (
    <div>
      <Image
        src={producto.imagen}
        alt={producto.nombre}
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL="data:image/..."
      />
      <h3>{producto.nombre}</h3>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: optimización de imágenes"`

#### Paso 10: Metadata y SEO
- [ ] Metadata API
- [ ] Open Graph
- [ ] Twitter Cards
- [ ] Sitemap

**Ejemplo:**
```tsx
// app/usuarios/[id]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const usuario = await obtenerUsuario(params.id);
  
  return {
    title: usuario.nombre,
    description: `Perfil de ${usuario.nombre}`,
    openGraph: {
      title: usuario.nombre,
      description: usuario.email,
      images: [usuario.avatar],
    },
  };
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: metadata y SEO"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 11: Principio de Responsabilidad Única (SRP)
- [ ] Separar Server y Client Components
- [ ] Servicios para lógica de negocio
- [ ] Separar presentación de lógica

**📚 Conceptos Clave:**

##### **SRP en Next.js**
**Definición:** Cada componente debe tener una sola responsabilidad.

**Ejemplo:**
```tsx
// ❌ Mal: Componente con múltiples responsabilidades
export default async function UsuarioPage({ params }) {
  const usuario = await obtenerUsuario(params.id);
  // Lógica de envío de email
  // Lógica de generación de reporte
  
  return <div>{usuario.nombre}</div>;
}

// ✅ Bien: Separar responsabilidades
// lib/services/usuarioService.ts
export async function obtenerUsuario(id: string) {
  // Lógica de obtención
}

// lib/services/emailService.ts
export async function enviarEmail(usuario: Usuario) {
  // Lógica de envío
}

// app/usuarios/[id]/page.tsx
import { obtenerUsuario } from '@/lib/services/usuarioService';

export default async function UsuarioPage({ params }) {
  const usuario = await obtenerUsuario(params.id);
  return <UsuarioCard usuario={usuario} />;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en Next.js"`

#### Paso 12: Principio KISS (Keep It Simple, Stupid)
- [ ] Componentes simples
- [ ] Evitar complejidad innecesaria
- [ ] Usar Server Components cuando sea posible

**Ejemplo:**
```tsx
// ❌ Mal: Complejidad innecesaria
'use client';
import { useState, useEffect } from 'react';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  // ... 50 líneas de código para obtener usuarios
  
  return <ul>{/* ... */}</ul>;
}

// ✅ Bien: Simple con Server Component
export default async function Usuarios() {
  const usuarios = await obtenerUsuarios();
  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.nombre}</li>
      ))}
    </ul>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en Next.js"`

#### Paso 13: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar componentes
- [ ] Helpers y utilidades
- [ ] Server Actions
- [ ] Middleware compartido

**Ejemplo:**
```tsx
// lib/utils/api.ts
export async function fetchAPI(endpoint: string) {
  const res = await fetch(`https://api.example.com${endpoint}`);
  if (!res.ok) throw new Error('Error en la petición');
  return res.json();
}

// Reutilizar en múltiples lugares
const usuarios = await fetchAPI('/usuarios');
const productos = await fetchAPI('/productos');
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en Next.js"`

#### Paso 14: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear abstracciones prematuramente
- [ ] Usar features de Next.js solo cuando se necesiten
- [ ] Implementar solo lo necesario

**Ejemplo:**
```tsx
// ❌ Mal: Crear abstracciones que no se necesitan
// lib/components/GenericPage.tsx - 200 líneas para una página genérica que solo se usa una vez

// ✅ Bien: Implementar solo lo necesario
export default function UsuarioPage({ params }) {
  const usuario = await obtenerUsuario(params.id);
  return <div>{usuario.nombre}</div>;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en Next.js"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Blog

```tsx
// app/blog/page.tsx
async function obtenerPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function BlogPage() {
  const posts = await obtenerPosts();
  
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.titulo}</h2>
          <p>{post.resumen}</p>
        </article>
      ))}
    </div>
  );
}

// app/blog/[slug]/page.tsx
export default async function PostPage({ params }) {
  const post = await obtenerPost(params.slug);
  
  return (
    <article>
      <h1>{post.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contenido }} />
    </article>
  );
}
```

### Ejemplo 2: API Route con Autenticación

```tsx
// app/api/usuarios/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verificarToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization');
  
  if (!token || !verificarToken(token)) {
    return NextResponse.json(
      { error: 'No autorizado' },
      { status: 401 }
    );
  }
  
  const usuarios = await obtenerUsuarios();
  return NextResponse.json(usuarios);
}
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Data Fetching
- [ ] Fase 3: API Routes
- [ ] Fase 4: Optimización
- [ ] Fase 5: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Next.js](https://nextjs.org/)
- [Next.js Learn](https://nextjs.org/learn)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Next.js desde principiante hasta experto.

