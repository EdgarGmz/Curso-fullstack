# 📘 Curso Completo de React

<div align="center">

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de React desde conceptos básicos hasta avanzados, con enfoque en componentes, hooks, estado, consumo de APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [⚛️ Componentes y Hooks](#️-componentes-y-hooks)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Opción 1: Create React App (legacy, no recomendado para nuevos proyectos)
npx create-react-app mi-proyecto
cd mi-proyecto
npm start

# Opción 2: Vite (recomendado)
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
npm install
npm run dev

# Opción 3: Vite con TypeScript
npm create vite@latest mi-proyecto -- --template react-ts
cd mi-proyecto
npm install
npm run dev
```

### Estructura de un Proyecto React

```
mi-proyecto/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas/views
│   ├── hooks/            # Custom hooks
│   ├── services/         # Servicios (APIs)
│   ├── utils/            # Utilidades
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── public/               # Archivos estáticos
├── package.json
└── vite.config.js        # Configuración de Vite
```

---

## 📋 Requisitos Mínimos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Editor de código**: VS Code con extensiones React
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

##### **React**
**Definición:** Biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables.

**Ejemplo:**
```jsx
// src/App.jsx
import React from 'react';

function App() {
  return (
    <div>
      <h1>¡Hola, React!</h1>
    </div>
  );
}

export default App;
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto React"`

#### Paso 2: JSX y Componentes Básicos
- [ ] ¿Qué es JSX?
- [ ] Crear componentes funcionales
- [ ] Props
- [ ] Renderizado condicional

**📚 Conceptos Clave:**

##### **JSX (JavaScript XML)**
**Definición:** Sintaxis que permite escribir HTML-like en JavaScript. Se transpila a JavaScript.

**Ejemplo:**
```jsx
// Componente básico
function Saludo({ nombre }) {
  return <h1>¡Hola, {nombre}!</h1>;
}

// Uso
<Saludo nombre="Juan" />

// Renderizado condicional
function Usuario({ usuario }) {
  return (
    <div>
      {usuario ? (
        <p>Bienvenido, {usuario.nombre}</p>
      ) : (
        <p>Por favor inicia sesión</p>
      )}
    </div>
  );
}

// Listas
function ListaFrutas({ frutas }) {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}
```

**📝 Ejercicios:**
1. Crear componente TarjetaUsuario que muestre nombre y email
2. Crear componente ListaProductos que muestre productos
3. Implementar renderizado condicional

> 💡 **Sugerencia de Commit**: `git commit -m "feat: componentes básicos y JSX"`

#### Paso 3: Props y PropTypes
- [ ] Pasar props a componentes
- [ ] Props por defecto
- [ ] PropTypes
- [ ] Children

**Ejemplo:**
```jsx
import PropTypes from 'prop-types';

// Props básicas
function Usuario({ nombre, email, edad }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{email}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}

// PropTypes
Usuario.propTypes = {
  nombre: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  edad: PropTypes.number
};

// Props por defecto
Usuario.defaultProps = {
  edad: 0
};

// Children
function Card({ titulo, children }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      {children}
    </div>
  );
}

// Uso
<Card titulo="Mi Tarjeta">
  <p>Contenido de la tarjeta</p>
</Card>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: props y PropTypes"`

#### Paso 4: Estado con useState
- [ ] ¿Qué es el estado?
- [ ] useState hook
- [ ] Actualizar estado
- [ ] Estado en objetos y arrays

**📚 Conceptos Clave:**

##### **Estado (State)**
**Definición:** Datos que pueden cambiar durante el ciclo de vida del componente. Cuando el estado cambia, React re-renderiza el componente.

**Ejemplo:**
```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>
    </div>
  );
}

// Estado con objeto
function Usuario() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: ''
  });
  
  const actualizarNombre = (nombre) => {
    setUsuario({ ...usuario, nombre });
  };
  
  return (
    <div>
      <input
        value={usuario.nombre}
        onChange={(e) => actualizarNombre(e.target.value)}
        placeholder="Nombre"
      />
    </div>
  );
}

// Estado con array
function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };
  
  return (
    <div>
      {tareas.map((tarea, index) => (
        <div key={index}>{tarea}</div>
      ))}
    </div>
  );
}
```

**📝 Ejercicios:**
1. Crear componente de formulario con estado
2. Crear lista de tareas con agregar/eliminar
3. Implementar contador con múltiples botones

> 💡 **Sugerencia de Commit**: `git commit -m "feat: estado con useState"`

#### Paso 5: Efectos con useEffect
- [ ] ¿Qué son los efectos?
- [ ] useEffect hook
- [ ] Dependencias
- [ ] Cleanup

**Ejemplo:**
```jsx
import { useState, useEffect } from 'react';

// useEffect básico
function Contador() {
  const [contador, setContador] = useState(0);
  
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]); // Se ejecuta cuando contador cambia
  
  return <div>Contador: {contador}</div>;
}

// useEffect con cleanup
function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(seg => seg + 1);
    }, 1000);
    
    // Cleanup: se ejecuta al desmontar o antes del siguiente efecto
    return () => clearInterval(intervalo);
  }, []); // Solo se ejecuta una vez al montar
  
  return <div>Segundos: {segundos}</div>;
}

// useEffect para fetch de datos
function Usuario({ userId }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    async function obtenerUsuario() {
      setCargando(true);
      try {
        const response = await fetch(`/api/usuarios/${userId}`);
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setCargando(false);
      }
    }
    
    obtenerUsuario();
  }, [userId]); // Se ejecuta cuando userId cambia
  
  if (cargando) return <div>Cargando...</div>;
  if (!usuario) return <div>Usuario no encontrado</div>;
  
  return <div>{usuario.nombre}</div>;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: efectos con useEffect"`

---

### 📍 Fase 2: Componentes y Hooks (Intermedio)

#### Paso 6: Hooks Adicionales
- [ ] useContext
- [ ] useReducer
- [ ] useMemo
- [ ] useCallback
- [ ] useRef

**Ejemplo:**
```jsx
import { useContext, createContext } from 'react';

// Context API
const UsuarioContext = createContext();

function App() {
  const usuario = { nombre: 'Juan', email: 'juan@example.com' };
  
  return (
    <UsuarioContext.Provider value={usuario}>
      <Perfil />
    </UsuarioContext.Provider>
  );
}

function Perfil() {
  const usuario = useContext(UsuarioContext);
  return <div>{usuario.nombre}</div>;
}

// useReducer
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });
  
  return (
    <div>
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>
        -
      </button>
    </div>
  );
}

// useMemo - Memoizar cálculos costosos
import { useMemo } from 'react';

function ListaProductos({ productos, filtro }) {
  const productosFiltrados = useMemo(() => {
    return productos.filter(p => p.nombre.includes(filtro));
  }, [productos, filtro]);
  
  return (
    <ul>
      {productosFiltrados.map(p => (
        <li key={p.id}>{p.nombre}</li>
      ))}
    </ul>
  );
}

// useCallback - Memoizar funciones
import { useCallback } from 'react';

function Padre() {
  const [contador, setContador] = useState(0);
  
  const manejarClick = useCallback(() => {
    console.log('Click');
  }, []); // Función memoizada
  
  return <Hijo onClick={manejarClick} />;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: hooks adicionales"`

#### Paso 7: Custom Hooks
- [ ] ¿Qué son los custom hooks?
- [ ] Crear custom hooks
- [ ] Reutilizar lógica
- [ ] Hooks comunes

**Ejemplo:**
```jsx
// Custom hook: useFetch
function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setCargando(true);
        const response = await fetch(url);
        const data = await response.json();
        setDatos(data);
      } catch (err) {
        setError(err);
      } finally {
        setCargando(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { datos, cargando, error };
}

// Uso
function Usuario({ userId }) {
  const { datos: usuario, cargando, error } = useFetch(`/api/usuarios/${userId}`);
  
  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>{usuario.nombre}</div>;
}

// Custom hook: useLocalStorage
function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : valorInicial;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valor));
  }, [key, valor]);
  
  return [valor, setValor];
}

// Uso
function App() {
  const [nombre, setNombre] = useLocalStorage('nombre', '');
  
  return (
    <input
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Tu nombre"
    />
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: custom hooks"`

#### Paso 8: Componentes de Orden Superior (HOC)
- [ ] ¿Qué son los HOC?
- [ ] Crear HOC
- [ ] Composición de componentes
- [ ] Render props

**Ejemplo:**
```jsx
// HOC básico
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Cargando...</div>;
    }
    return <Component {...props} />;
  };
}

// Uso
const UsuarioConLoading = withLoading(Usuario);

// Render props
function Datos({ url, render }) {
  const [datos, setDatos] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setDatos);
  }, [url]);
  
  return datos ? render(datos) : <div>Cargando...</div>;
}

// Uso
<Datos
  url="/api/usuarios/1"
  render={(usuario) => <div>{usuario.nombre}</div>}
/>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: componentes de orden superior"`

---

### 📍 Fase 3: Consumo de APIs (Intermedio)

#### Paso 9: Introducción a APIs REST
- [ ] ¿Qué es una API REST?
- [ ] Métodos HTTP
- [ ] Fetch API
- [ ] Axios

**📚 Conceptos Clave:**

##### **API REST**
**Definición:** Conjunto de reglas y protocolos que permite comunicación entre aplicaciones usando HTTP.

**Ejemplo:**
```jsx
// Modelo/Type
// types/Usuario.ts (TypeScript)
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a APIs REST"`

#### Paso 10: Consumir APIs con Fetch
- [ ] Realizar peticiones GET
- [ ] Realizar peticiones POST
- [ ] Manejo de errores
- [ ] Loading states

**Ejemplo:**
```jsx
import { useState, useEffect } from 'react';

function UsuarioLista() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function obtenerUsuarios() {
      try {
        setCargando(true);
        const response = await fetch('/api/usuarios');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }
    
    obtenerUsuarios();
  }, []);
  
  const crearUsuario = async (datos) => {
    try {
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
      });
      
      if (!response.ok) {
        throw new Error('Error al crear usuario');
      }
      
      const nuevoUsuario = await response.json();
      setUsuarios([...usuarios, nuevoUsuario]);
    } catch (err) {
      setError(err.message);
    }
  };
  
  if (cargando) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}
```

**📝 Ejercicios:**
1. Crear componente que consuma API pública (JSONPlaceholder)
2. Implementar CRUD completo
3. Manejar estados de carga y error

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con Fetch"`

#### Paso 11: Consumir APIs con Axios
- [ ] Instalar Axios
- [ ] Configurar cliente Axios
- [ ] Interceptores
- [ ] Manejo de errores global

**Ejemplo:**
```jsx
// Instalar: npm install axios

import axios from 'axios';

// Configurar cliente
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

// Servicio
class UsuarioService {
  static async obtenerTodos() {
    return await apiCliente.get('/usuarios');
  }
  
  static async obtenerPorId(id) {
    return await apiCliente.get(`/usuarios/${id}`);
  }
  
  static async crear(datos) {
    return await apiCliente.post('/usuarios', datos);
  }
  
  static async actualizar(id, datos) {
    return await apiCliente.put(`/usuarios/${id}`, datos);
  }
  
  static async eliminar(id) {
    return await apiCliente.delete(`/usuarios/${id}`);
  }
}

// Uso en componente
function UsuarioLista() {
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    UsuarioService.obtenerTodos()
      .then(setUsuarios)
      .catch(console.error);
  }, []);
  
  return (
    <ul>
      {usuarios.map(u => (
        <li key={u.id}>{u.nombre}</li>
      ))}
    </ul>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con Axios"`

---

### 📍 Fase 4: Gestión de Estado Avanzada (Intermedio-Avanzado)

#### Paso 12: Context API
- [ ] ¿Qué es Context API?
- [ ] createContext y Provider
- [ ] useContext hook
- [ ] Patrones de uso

**Ejemplo:**
```jsx
import { createContext, useContext, useState } from 'react';

// Crear contexto
const UsuarioContext = createContext();

// Provider
function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  
  const login = async (credenciales) => {
    setCargando(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credenciales)
      });
      const data = await response.json();
      setUsuario(data);
    } finally {
      setCargando(false);
    }
  };
  
  const logout = () => {
    setUsuario(null);
  };
  
  return (
    <UsuarioContext.Provider value={{ usuario, login, logout, cargando }}>
      {children}
    </UsuarioContext.Provider>
  );
}

// Custom hook para usar el contexto
function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario debe usarse dentro de UsuarioProvider');
  }
  return context;
}

// Uso
function App() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}

function Perfil() {
  const { usuario, logout } = useUsuario();
  
  if (!usuario) return <div>No hay usuario</div>;
  
  return (
    <div>
      <p>{usuario.nombre}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: Context API"`

#### Paso 13: Redux (Opcional)
- [ ] ¿Qué es Redux?
- [ ] Store, Actions, Reducers
- [ ] useSelector y useDispatch
- [ ] Redux Toolkit

**Ejemplo:**
```jsx
// Instalar: npm install @reduxjs/toolkit react-redux

// store/slices/usuarioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: {
    usuario: null,
    cargando: false
  },
  reducers: {
    setUsuario: (state, action) => {
      state.usuario = action.payload;
    },
    setCargando: (state, action) => {
      state.cargando = action.payload;
    }
  }
});

export const { setUsuario, setCargando } = usuarioSlice.actions;
export default usuarioSlice.reducer;

// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import usuarioReducer from './slices/usuarioSlice';

export const store = configureStore({
  reducer: {
    usuario: usuarioReducer
  }
});

// main.jsx
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Uso en componente
import { useSelector, useDispatch } from 'react-redux';
import { setUsuario } from './store/slices/usuarioSlice';

function Perfil() {
  const usuario = useSelector(state => state.usuario.usuario);
  const dispatch = useDispatch();
  
  const actualizarUsuario = (nuevoUsuario) => {
    dispatch(setUsuario(nuevoUsuario));
  };
  
  return <div>{usuario?.nombre}</div>;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: Redux para gestión de estado"`

---

### 📍 Fase 5: Routing (Intermedio)

#### Paso 14: React Router
- [ ] Instalar React Router
- [ ] BrowserRouter y Routes
- [ ] Navegación con Link y useNavigate
- [ ] Parámetros de ruta
- [ ] Rutas protegidas

**Ejemplo:**
```jsx
// Instalar: npm install react-router-dom

import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/usuarios">Usuarios</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UsuarioLista />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function UsuarioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <p>Usuario ID: {id}</p>
      <button onClick={() => navigate('/usuarios')}>
        Volver
      </button>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing con React Router"`

---

### 📍 Fase 6: Principios y Buenas Prácticas

#### Paso 15: Principio de Responsabilidad Única (SRP)
- [ ] Separar componentes por responsabilidad
- [ ] Componentes presentacionales vs contenedores
- [ ] Extraer lógica de negocio

**📚 Conceptos Clave:**

##### **SRP en React**
**Definición:** Cada componente debe tener una sola responsabilidad.

**Ejemplo:**
```jsx
// ❌ Mal: Componente con múltiples responsabilidades
function UsuarioCard({ usuarioId }) {
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    fetch(`/api/usuarios/${usuarioId}`)
      .then(res => res.json())
      .then(setUsuario);
  }, [usuarioId]);
  
  const enviarEmail = () => {
    // Lógica de envío de email
  };
  
  const generarReporte = () => {
    // Lógica de generación de reporte
  };
  
  return (
    <div>
      <h2>{usuario?.nombre}</h2>
      <button onClick={enviarEmail}>Enviar Email</button>
      <button onClick={generarReporte}>Generar Reporte</button>
    </div>
  );
}

// ✅ Bien: Separar responsabilidades
// Componente presentacional
function UsuarioCard({ usuario }) {
  return (
    <div>
      <h2>{usuario.nombre}</h2>
      <p>{usuario.email}</p>
    </div>
  );
}

// Hook para obtener datos
function useUsuario(userId) {
  const [usuario, setUsuario] = useState(null);
  
  useEffect(() => {
    fetch(`/api/usuarios/${userId}`)
      .then(res => res.json())
      .then(setUsuario);
  }, [userId]);
  
  return usuario;
}

// Servicios separados
class EmailService {
  static enviar(usuario) {
    // Lógica de envío
  }
}

class ReporteService {
  static generar(usuario) {
    // Lógica de generación
  }
}

// Componente contenedor
function UsuarioCardContainer({ usuarioId }) {
  const usuario = useUsuario(usuarioId);
  
  const manejarEnviarEmail = () => {
    EmailService.enviar(usuario);
  };
  
  const manejarGenerarReporte = () => {
    ReporteService.generar(usuario);
  };
  
  if (!usuario) return <div>Cargando...</div>;
  
  return (
    <div>
      <UsuarioCard usuario={usuario} />
      <button onClick={manejarEnviarEmail}>Enviar Email</button>
      <button onClick={manejarGenerarReporte}>Generar Reporte</button>
    </div>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en React"`

#### Paso 16: Principio Abierto/Cerrado (OCP)
- [ ] Componentes extensibles
- [ ] Composición sobre herencia
- [ ] Render props y children

**Ejemplo:**
```jsx
// Abierto para extensión, cerrado para modificación
function Boton({ children, onClick, variante = 'primary' }) {
  const clases = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger'
  };
  
  return (
    <button className={clases[variante]} onClick={onClick}>
      {children}
    </button>
  );
}

// Extender sin modificar
function BotonIcono({ icono, children, ...props }) {
  return (
    <Boton {...props}>
      <span className="icon">{icono}</span>
      {children}
    </Boton>
  );
}

// Composición
function Card({ titulo, children, acciones }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <div className="card-body">{children}</div>
      {acciones && <div className="card-actions">{acciones}</div>}
    </div>
  );
}

// Uso
<Card
  titulo="Usuario"
  acciones={<Boton>Editar</Boton>}
>
  <p>Contenido</p>
</Card>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio OCP en React"`

#### Paso 17: Principio KISS (Keep It Simple, Stupid)
- [ ] Componentes simples
- [ ] Evitar complejidad innecesaria
- [ ] Código legible

**Ejemplo:**
```jsx
// ❌ Mal: Componente complejo innecesario
function UsuarioLista({ usuarios }) {
  return (
    <div>
      {usuarios
        .filter(u => u.activo)
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .map(u => (
          <div key={u.id}>
            {Object.entries(u)
              .filter(([key]) => key !== 'id')
              .map(([key, value]) => (
                <span key={key}>{key}: {value}</span>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

// ✅ Bien: Componente simple y claro
function UsuarioLista({ usuarios }) {
  const usuariosActivos = usuarios.filter(u => u.activo);
  const usuariosOrdenados = usuariosActivos.sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
  );
  
  return (
    <ul>
      {usuariosOrdenados.map(usuario => (
        <UsuarioItem key={usuario.id} usuario={usuario} />
      ))}
    </ul>
  );
}

function UsuarioItem({ usuario }) {
  return (
    <li>
      <strong>{usuario.nombre}</strong>
      <p>{usuario.email}</p>
    </li>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en React"`

#### Paso 18: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar componentes
- [ ] Custom hooks para lógica común
- [ ] Helpers y utilidades

**Ejemplo:**
```jsx
// ❌ Mal: Código duplicado
function UsuarioForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // ...
}

function ProductoForm() {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // ...
}

// ✅ Bien: Reutilizar lógica
// Hook reutilizable
function useInput(valorInicial = '') {
  const [valor, setValor] = useState(valorInicial);
  
  const cambiar = (e) => {
    setValor(e.target.value);
  };
  
  return { valor, cambiar, setValor };
}

// Utilidad reutilizable
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Componente reutilizable
function Input({ etiqueta, valor, onChange, tipo = 'text' }) {
  return (
    <div>
      <label>{etiqueta}</label>
      <input
        type={tipo}
        value={valor}
        onChange={onChange}
      />
    </div>
  );
}

// Uso
function UsuarioForm() {
  const nombre = useInput('');
  const email = useInput('');
  
  return (
    <form>
      <Input
        etiqueta="Nombre"
        valor={nombre.valor}
        onChange={nombre.cambiar}
      />
      <Input
        etiqueta="Email"
        tipo="email"
        valor={email.valor}
        onChange={email.cambiar}
      />
    </form>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en React"`

#### Paso 19: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear componentes prematuramente
- [ ] No sobre-abstraer
- [ ] Implementar solo lo necesario

**Ejemplo:**
```jsx
// ❌ Mal: Crear abstracciones que no se necesitan
function FormularioGenerico({ campos, validaciones, onSubmit, ... }) {
  // 50 líneas de código para un formulario genérico
  // que solo se usa en un lugar
}

// ✅ Bien: Implementar solo lo necesario
function UsuarioForm({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, email });
  };
  
  return (
    <form onSubmit={manejarSubmit}>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en React"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Tareas

```jsx
import { useState, useEffect } from 'react';

function TareaApp() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  
  useEffect(() => {
    // Cargar tareas al montar
    fetch('/api/tareas')
      .then(res => res.json())
      .then(setTareas);
  }, []);
  
  const agregarTarea = async () => {
    const response = await fetch('/api/tareas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo: nuevaTarea })
    });
    const tarea = await response.json();
    setTareas([...tareas, tarea]);
    setNuevaTarea('');
  };
  
  const completarTarea = async (id) => {
    await fetch(`/api/tareas/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completada: true })
    });
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: true } : t
    ));
  };
  
  return (
    <div>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul>
        {tareas.map(tarea => (
          <TareaItem
            key={tarea.id}
            tarea={tarea}
            onCompletar={() => completarTarea(tarea.id)}
          />
        ))}
      </ul>
    </div>
  );
}

function TareaItem({ tarea, onCompletar }) {
  return (
    <li>
      <span style={{ 
        textDecoration: tarea.completada ? 'line-through' : 'none' 
      }}>
        {tarea.titulo}
      </span>
      {!tarea.completada && (
        <button onClick={onCompletar}>Completar</button>
      )}
    </li>
  );
}
```

### Ejemplo 2: Cliente API Tipado

```jsx
// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const usuarioService = {
  obtenerTodos: () => api.get('/usuarios'),
  obtenerPorId: (id) => api.get(`/usuarios/${id}`),
  crear: (datos) => api.post('/usuarios', datos),
  actualizar: (id, datos) => api.put(`/usuarios/${id}`, datos),
  eliminar: (id) => api.delete(`/usuarios/${id}`)
};

// Hook personalizado
function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    usuarioService.obtenerTodos()
      .then(res => {
        setUsuarios(res.data);
        setCargando(false);
      })
      .catch(err => {
        setError(err.message);
        setCargando(false);
      });
  }, []);
  
  return { usuarios, cargando, error };
}

// Uso
function UsuarioLista() {
  const { usuarios, cargando, error } = useUsuarios();
  
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

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Componentes y Hooks
- [ ] Fase 3: Consumo de APIs
- [ ] Fase 4: Gestión de Estado Avanzada
- [ ] Fase 5: Routing
- [ ] Fase 6: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de React](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Redux Documentation](https://redux.js.org/)
- [React Patterns](https://reactpatterns.com/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de React desde principiante hasta experto.

