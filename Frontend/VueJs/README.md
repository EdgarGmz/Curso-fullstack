# 📘 Curso Completo de Vue.js

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Vue Router](https://img.shields.io/badge/Vue_Router-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Vue.js desde conceptos básicos hasta avanzados, con enfoque en componentes, Composition API, estado, consumo de APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🎯 Componentes y Composition API](#-componentes-y-composition-api)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Opción 1: Vite (recomendado)
npm create vite@latest mi-proyecto -- --template vue
cd mi-proyecto
npm install
npm run dev

# Opción 2: Vite con TypeScript
npm create vite@latest mi-proyecto -- --template vue-ts
cd mi-proyecto
npm install
npm run dev

# Opción 3: Vue CLI (legacy)
npm install -g @vue/cli
vue create mi-proyecto
cd mi-proyecto
npm run serve
```

### Estructura de un Proyecto Vue.js

```
mi-proyecto/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── views/            # Vistas/páginas
│   ├── composables/      # Composables (custom hooks)
│   ├── services/         # Servicios (APIs)
│   ├── stores/           # Pinia stores
│   ├── App.vue           # Componente principal
│   └── main.js           # Punto de entrada
├── public/               # Archivos estáticos
├── package.json
└── vite.config.js        # Configuración de Vite
```

---

## 📋 Requisitos Mínimos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Editor de código**: VS Code con extensión Volar
- **Conocimientos básicos**: HTML, CSS, JavaScript (ES6+)

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Crear proyecto con Vite
- [ ] Configurar editor de código
- [ ] Entender estructura del proyecto

**📚 Conceptos Clave:**

##### **Vue.js**
**Definición:** Framework progresivo de JavaScript para construir interfaces de usuario. Permite adoptar gradualmente sus características.

**Ejemplo:**
```vue
<!-- src/App.vue -->
<template>
  <div>
    <h1>{{ mensaje }}</h1>
    <button @click="incrementar">Contador: {{ contador }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mensaje = '¡Hola, Vue.js!';
const contador = ref(0);

function incrementar() {
  contador.value++;
}
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Vue.js"`

#### Paso 2: Template Syntax
- [ ] Interpolación ({{ }})
- [ ] Directivas (v-if, v-for, v-bind, v-on)
- [ ] Binding de datos
- [ ] Eventos

**📚 Conceptos Clave:**

##### **Template Syntax**
**Definición:** Sintaxis especial de Vue que permite enlazar datos del componente con el DOM.

**Ejemplo:**
```vue
<template>
  <div>
    <!-- Interpolación -->
    <p>{{ mensaje }}</p>
    
    <!-- v-if / v-else -->
    <p v-if="mostrar">Visible</p>
    <p v-else>Oculto</p>
    
    <!-- v-for -->
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ fruta }}
      </li>
    </ul>
    
    <!-- v-bind (shorthand: :) -->
    <img :src="imagenUrl" :alt="descripcion" />
    
    <!-- v-on (shorthand: @) -->
    <button @click="manejarClick">Click</button>
    
    <!-- v-model (two-way binding) -->
    <input v-model="nombre" placeholder="Nombre" />
    
    <!-- Computed properties -->
    <p>Nombre completo: {{ nombreCompleto }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const mensaje = 'Hola Vue';
const mostrar = ref(true);
const frutas = ref(['Manzana', 'Banana', 'Naranja']);
const imagenUrl = ref('/imagen.jpg');
const nombre = ref('');

const nombreCompleto = computed(() => {
  return nombre.value.toUpperCase();
});

function manejarClick() {
  console.log('Click!');
}
</script>
```

**📝 Ejercicios:**
1. Crear componente TarjetaUsuario con datos dinámicos
2. Crear lista de productos con v-for
3. Implementar formulario con v-model

> 💡 **Sugerencia de Commit**: `git commit -m "feat: template syntax y directivas"`

#### Paso 3: Componentes y Props
- [ ] Crear componentes
- [ ] Pasar props
- [ ] Emitir eventos
- [ ] Slots

**Ejemplo:**
```vue
<!-- UsuarioCard.vue -->
<template>
  <div class="card">
    <h3>{{ nombre }}</h3>
    <p>{{ email }}</p>
    <slot name="acciones">
      <button @click="$emit('editar', id)">Editar</button>
    </slot>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

defineEmits(['editar']);
</script>

<!-- Uso -->
<template>
  <UsuarioCard
    :id="1"
    nombre="Juan Pérez"
    email="juan@example.com"
    @editar="manejarEditar"
  >
    <template #acciones>
      <button @click="eliminar">Eliminar</button>
    </template>
  </UsuarioCard>
</template>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: componentes y props"`

#### Paso 4: Reactividad con ref y reactive
- [ ] ref para valores primitivos
- [ ] reactive para objetos
- [ ] Computed properties
- [ ] Watchers

**📚 Conceptos Clave:**

##### **Reactividad**
**Definición:** Sistema que permite a Vue detectar cambios en los datos y actualizar automáticamente el DOM.

**Ejemplo:**
```vue
<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <p>Doble: {{ doble }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// ref para valores primitivos
const contador = ref(0);

// computed - se recalcula automáticamente
const doble = computed(() => contador.value * 2);

// watch - observar cambios
watch(contador, (nuevoValor, valorAnterior) => {
  console.log(`Contador cambió de ${valorAnterior} a ${nuevoValor}`);
});

function incrementar() {
  contador.value++;
}

// reactive para objetos
import { reactive } from 'vue';

const usuario = reactive({
  nombre: 'Juan',
  email: 'juan@example.com'
});

// Los cambios son reactivos automáticamente
usuario.nombre = 'María'; // Vue detecta el cambio
</script>
```

**📝 Ejercicios:**
1. Crear contador reactivo
2. Crear formulario con validación reactiva
3. Implementar búsqueda con computed

> 💡 **Sugerencia de Commit**: `git commit -m "feat: reactividad con ref y reactive"`

#### Paso 5: Lifecycle Hooks
- [ ] onMounted
- [ ] onUpdated
- [ ] onUnmounted
- [ ] onBeforeMount, onBeforeUpdate, etc.

**Ejemplo:**
```vue
<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';

const contador = ref(0);
let intervalo = null;

// onMounted - después de que el componente se monta
onMounted(() => {
  console.log('Componente montado');
  intervalo = setInterval(() => {
    contador.value++;
  }, 1000);
});

// onUpdated - después de cada actualización
onUpdated(() => {
  console.log('Componente actualizado');
});

// onUnmounted - antes de desmontar
onUnmounted(() => {
  console.log('Componente desmontado');
  if (intervalo) {
    clearInterval(intervalo);
  }
});
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: lifecycle hooks"`

---

### 📍 Fase 2: Composition API (Intermedio)

#### Paso 6: Composition API Avanzada
- [ ] setup() function
- [ ] script setup
- [ ] Composables
- [ ] provide/inject

**Ejemplo:**
```vue
<!-- Composables/useUsuario.js -->
import { ref } from 'vue';

export function useUsuario() {
  const usuario = ref(null);
  const cargando = ref(false);
  
  const obtenerUsuario = async (id) => {
    cargando.value = true;
    try {
      const response = await fetch(`/api/usuarios/${id}`);
      usuario.value = await response.json();
    } finally {
      cargando.value = false;
    }
  };
  
  return {
    usuario,
    cargando,
    obtenerUsuario
  };
}

<!-- Uso en componente -->
<script setup>
import { useUsuario } from '@/composables/useUsuario';

const { usuario, cargando, obtenerUsuario } = useUsuario();

onMounted(() => {
  obtenerUsuario(1);
});
</script>

<!-- provide/inject -->
<!-- App.vue -->
<script setup>
import { provide, ref } from 'vue';

const tema = ref('claro');
provide('tema', tema);
</script>

<!-- Componente hijo -->
<script setup>
import { inject } from 'vue';

const tema = inject('tema');
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: Composition API avanzada"`

---

### 📍 Fase 3: Consumo de APIs (Intermedio)

#### Paso 7: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Fetch API
- [ ] Axios

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 8: Consumir APIs con Fetch
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores
- [ ] Loading states

**Ejemplo:**
```vue
<template>
  <div>
    <div v-if="cargando">Cargando...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ul v-else>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const usuarios = ref([]);
const cargando = ref(true);
const error = ref(null);

async function obtenerUsuarios() {
  try {
    cargando.value = true;
    const response = await fetch('/api/usuarios');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    usuarios.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    cargando.value = false;
  }
}

async function crearUsuario(datos) {
  try {
    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    
    if (!response.ok) {
      throw new Error('Error al crear usuario');
    }
    
    const nuevoUsuario = await response.json();
    usuarios.value.push(nuevoUsuario);
  } catch (err) {
    error.value = err.message;
  }
}

onMounted(() => {
  obtenerUsuarios();
});
</script>
```

**📝 Ejercicios:**
1. Crear composable useApi para consumo de APIs
2. Implementar CRUD completo
3. Manejar estados de carga y error

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con Fetch"`

#### Paso 9: Consumir APIs con Axios
- [ ] Instalar Axios
- [ ] Configurar cliente Axios
- [ ] Interceptores
- [ ] Servicios

**Ejemplo:**
```javascript
// services/api.js
import axios from 'axios';

const apiCliente = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor de request
apiCliente.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de response
apiCliente.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Redirigir a login
    }
    return Promise.reject(error);
  }
);

export const usuarioService = {
  obtenerTodos: () => apiCliente.get('/usuarios'),
  obtenerPorId: (id) => apiCliente.get(`/usuarios/${id}`),
  crear: (datos) => apiCliente.post('/usuarios', datos),
  actualizar: (id, datos) => apiCliente.put(`/usuarios/${id}`, datos),
  eliminar: (id) => apiCliente.delete(`/usuarios/${id}`)
};
```

```vue
<!-- Uso en componente -->
<script setup>
import { ref, onMounted } from 'vue';
import { usuarioService } from '@/services/api';

const usuarios = ref([]);
const cargando = ref(true);

onMounted(async () => {
  try {
    usuarios.value = await usuarioService.obtenerTodos();
  } catch (error) {
    console.error('Error:', error);
  } finally {
    cargando.value = false;
  }
});
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con Axios"`

---

### 📍 Fase 4: Gestión de Estado (Intermedio)

#### Paso 10: Pinia (State Management)
- [ ] ¿Qué es Pinia?
- [ ] Instalar y configurar Pinia
- [ ] Stores
- [ ] Getters y Actions

**Ejemplo:**
```javascript
// stores/usuario.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { usuarioService } from '@/services/api';

export const useUsuarioStore = defineStore('usuario', () => {
  // State
  const usuarios = ref([]);
  const usuarioActual = ref(null);
  const cargando = ref(false);
  
  // Getters
  const usuariosActivos = computed(() => {
    return usuarios.value.filter(u => u.activo);
  });
  
  // Actions
  async function obtenerUsuarios() {
    cargando.value = true;
    try {
      usuarios.value = await usuarioService.obtenerTodos();
    } finally {
      cargando.value = false;
    }
  }
  
  async function obtenerUsuario(id) {
    cargando.value = true;
    try {
      usuarioActual.value = await usuarioService.obtenerPorId(id);
    } finally {
      cargando.value = false;
    }
  }
  
  return {
    usuarios,
    usuarioActual,
    cargando,
    usuariosActivos,
    obtenerUsuarios,
    obtenerUsuario
  };
});
```

```vue
<!-- Uso en componente -->
<script setup>
import { useUsuarioStore } from '@/stores/usuario';
import { storeToRefs } from 'pinia';

const usuarioStore = useUsuarioStore();
const { usuarios, cargando } = storeToRefs(usuarioStore);

onMounted(() => {
  usuarioStore.obtenerUsuarios();
});
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: gestión de estado con Pinia"`

---

### 📍 Fase 5: Routing (Intermedio)

#### Paso 11: Vue Router
- [ ] Instalar Vue Router
- [ ] Configurar rutas
- [ ] Navegación
- [ ] Parámetros y queries
- [ ] Rutas protegidas

**Ejemplo:**
```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import UsuarioLista from '@/views/UsuarioLista.vue';
import UsuarioDetalle from '@/views/UsuarioDetalle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'UsuarioLista',
    component: UsuarioLista
  },
  {
    path: '/usuarios/:id',
    name: 'UsuarioDetalle',
    component: UsuarioDetalle,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
```

```vue
<!-- App.vue -->
<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/usuarios">Usuarios</router-link>
  </nav>
  <router-view />
</template>

<!-- UsuarioDetalle.vue -->
<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const usuarioId = route.params.id;

function volver() {
  router.push('/usuarios');
}
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing con Vue Router"`

---

### 📍 Fase 6: Principios y Buenas Prácticas

#### Paso 12: Principio de Responsabilidad Única (SRP)
- [ ] Separar componentes por responsabilidad
- [ ] Composables para lógica reutilizable
- [ ] Servicios para acceso a datos

**📚 Conceptos Clave:**

##### **SRP en Vue.js**
**Definición:** Cada componente debe tener una sola responsabilidad.

**Ejemplo:**
```vue
<!-- ❌ Mal: Componente con múltiples responsabilidades -->
<script setup>
import { ref, onMounted } from 'vue';

const usuario = ref(null);

onMounted(async () => {
  const response = await fetch(`/api/usuarios/1`);
  usuario.value = await response.json();
});

function enviarEmail() {
  // Lógica de envío de email
}

function generarReporte() {
  // Lógica de generación de reporte
}
</script>

<!-- ✅ Bien: Separar responsabilidades -->
<!-- Composables/useUsuario.js -->
export function useUsuario() {
  const usuario = ref(null);
  
  const obtenerUsuario = async (id) => {
    const response = await fetch(`/api/usuarios/${id}`);
    usuario.value = await response.json();
  };
  
  return { usuario, obtenerUsuario };
}

<!-- services/EmailService.js -->
export const emailService = {
  enviar: (usuario) => {
    // Lógica de envío
  }
};

<!-- Componente -->
<script setup>
import { useUsuario } from '@/composables/useUsuario';
import { emailService } from '@/services/EmailService';

const { usuario, obtenerUsuario } = useUsuario();

onMounted(() => {
  obtenerUsuario(1);
});

function manejarEnviarEmail() {
  emailService.enviar(usuario.value);
}
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en Vue.js"`

#### Paso 13: Principio KISS (Keep It Simple, Stupid)
- [ ] Componentes simples
- [ ] Evitar complejidad innecesaria
- [ ] Código legible

**Ejemplo:**
```vue
<!-- ❌ Mal: Componente complejo innecesario -->
<template>
  <div>
    <div v-for="u in usuarios.filter(u => u.activo).sort((a, b) => a.nombre.localeCompare(b.nombre))">
      {{ Object.entries(u).filter(([k]) => k !== 'id').map(([k, v]) => `${k}: ${v}`).join(', ') }}
    </div>
  </div>
</template>

<!-- ✅ Bien: Componente simple y claro -->
<template>
  <ul>
    <UsuarioItem
      v-for="usuario in usuariosOrdenados"
      :key="usuario.id"
      :usuario="usuario"
    />
  </ul>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['usuarios']);

const usuariosOrdenados = computed(() => {
  return props.usuarios
    .filter(u => u.activo)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
});
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en Vue.js"`

#### Paso 14: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar componentes
- [ ] Composables para lógica común
- [ ] Helpers y utilidades

**Ejemplo:**
```vue
<!-- Composables/useForm.js -->
import { ref } from 'vue';

export function useForm(valorInicial = {}) {
  const form = ref(valorInicial);
  
  const actualizar = (campo, valor) => {
    form.value[campo] = valor;
  };
  
  const reset = () => {
    form.value = { ...valorInicial };
  };
  
  return { form, actualizar, reset };
}

<!-- Componente reutilizable -->
<!-- Input.vue -->
<template>
  <div>
    <label>{{ etiqueta }}</label>
    <input
      :type="tipo"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  etiqueta: String,
  tipo: {
    type: String,
    default: 'text'
  },
  modelValue: String
});

defineEmits(['update:modelValue']);
</script>

<!-- Uso -->
<template>
  <Input
    v-model="nombre"
    etiqueta="Nombre"
  />
  <Input
    v-model="email"
    etiqueta="Email"
    tipo="email"
  />
</template>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en Vue.js"`

#### Paso 15: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear componentes prematuramente
- [ ] No sobre-abstraer
- [ ] Implementar solo lo necesario

**Ejemplo:**
```vue
<!-- ❌ Mal: Crear abstracciones que no se necesitan -->
<!-- FormularioGenerico.vue - 200 líneas para un formulario genérico que solo se usa una vez -->

<!-- ✅ Bien: Implementar solo lo necesario -->
<template>
  <form @submit.prevent="manejarSubmit">
    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Guardar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const nombre = ref('');
const email = ref('');

function manejarSubmit() {
  // Lógica de submit
}
</script>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en Vue.js"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```vue
<!-- TareaApp.vue -->
<template>
  <div>
    <input
      v-model="nuevaTarea"
      @keyup.enter="agregarTarea"
      placeholder="Nueva tarea"
    />
    <button @click="agregarTarea">Agregar</button>
    
    <ul>
      <TareaItem
        v-for="tarea in tareas"
        :key="tarea.id"
        :tarea="tarea"
        @completar="completarTarea"
        @eliminar="eliminarTarea"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TareaItem from './TareaItem.vue';
import { tareaService } from '@/services/api';

const tareas = ref([]);
const nuevaTarea = ref('');

onMounted(async () => {
  tareas.value = await tareaService.obtenerTodas();
});

async function agregarTarea() {
  if (!nuevaTarea.value.trim()) return;
  
  const tarea = await tareaService.crear({
    titulo: nuevaTarea.value
  });
  tareas.value.push(tarea);
  nuevaTarea.value = '';
}

async function completarTarea(id) {
  await tareaService.actualizar(id, { completada: true });
  const tarea = tareas.value.find(t => t.id === id);
  if (tarea) tarea.completada = true;
}

async function eliminarTarea(id) {
  await tareaService.eliminar(id);
  tareas.value = tareas.value.filter(t => t.id !== id);
}
</script>
```

### Ejemplo 2: Composables Reutilizables

```javascript
// composables/useApi.js
import { ref } from 'vue';

export function useApi(url) {
  const datos = ref(null);
  const cargando = ref(true);
  const error = ref(null);
  
  async function obtener() {
    try {
      cargando.value = true;
      const response = await fetch(url);
      datos.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      cargando.value = false;
    }
  }
  
  return { datos, cargando, error, obtener };
}

// Uso
<script setup>
import { useApi } from '@/composables/useApi';
import { onMounted } from 'vue';

const { datos: usuario, cargando, error, obtener } = useApi('/api/usuarios/1');

onMounted(() => {
  obtener();
});
</script>
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Composition API
- [ ] Fase 3: Consumo de APIs
- [ ] Fase 4: Gestión de Estado
- [ ] Fase 5: Routing
- [ ] Fase 6: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Vue.js](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue.js Style Guide](https://vuejs.org/style-guide/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Vue.js desde principiante hasta experto.

