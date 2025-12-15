# 📘 Curso Completo de Laravel

<div align="center">

![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Blade](https://img.shields.io/badge/Blade-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Livewire](https://img.shields.io/badge/Livewire-4E56A6?style=for-the-badge&logo=livewire&logoColor=white)
![Inertia.js](https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Laravel desde conceptos básicos hasta avanzados, con enfoque en routing, controllers, models, Eloquent ORM, Blade templates, Livewire, consumo de APIs, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🎯 Backend: MVC](#-backend-mvc)
- [🌐 Frontend: Blade y Livewire](#-frontend-blade-y-livewire)
- [💾 Base de Datos](#-base-de-datos)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Instalar Composer (si no lo tienes)
# Windows: https://getcomposer.org/download/

# Crear proyecto Laravel
composer create-project laravel/laravel mi-proyecto
cd mi-proyecto

# Con Laravel Installer
composer global require laravel/installer
laravel new mi-proyecto

# Servidor de desarrollo
php artisan serve

# Acceder a http://localhost:8000
```

### Estructura de un Proyecto Laravel

```
mi-proyecto/
├── app/
│   ├── Http/
│   │   ├── Controllers/     # Controladores
│   │   ├── Middleware/      # Middleware
│   │   └── Requests/        # Form Requests
│   ├── Models/              # Modelos Eloquent
│   ├── Services/            # Servicios
│   └── Providers/           # Service Providers
├── database/
│   ├── migrations/          # Migraciones
│   ├── seeders/             # Seeders
│   └── factories/           # Factories
├── resources/
│   ├── views/               # Blade templates
│   ├── js/                  # JavaScript
│   └── css/                 # CSS
├── routes/
│   ├── web.php              # Rutas web
│   └── api.php              # Rutas API
├── config/                   # Configuraciones
└── public/                   # Punto de entrada público
```

---

## 📋 Requisitos Mínimos

- **PHP** 8.2 o superior
- **Composer** 2.x
- **MySQL/PostgreSQL** o SQLite
- **Editor de código**: VS Code con extensiones PHP/Laravel
- **Conocimientos básicos**: PHP, HTML, CSS, JavaScript

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar PHP y Composer
- [ ] Crear proyecto Laravel
- [ ] Configurar base de datos
- [ ] Entender estructura del proyecto

**📚 Conceptos Clave:**

##### **Laravel**
**Definición:** Framework de PHP para desarrollo web. Sigue el patrón MVC (Model-View-Controller) y proporciona herramientas para desarrollo rápido.

**Ejemplo:**
```php
// routes/web.php
Route::get('/', function () {
    return view('welcome');
});

Route::get('/saludo', function () {
    return '¡Hola, Laravel!';
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Laravel"`

#### Paso 2: Routing
- [ ] Rutas básicas
- [ ] Parámetros de ruta
- [ ] Route groups
- [ ] Route names
- [ ] Middleware

**📚 Conceptos Clave:**

##### **Routing**
**Definición:** Sistema que mapea URLs a controladores o closures. Define cómo la aplicación responde a peticiones HTTP.

**Ejemplo:**
```php
// routes/web.php
use Illuminate\Support\Facades\Route;

// Ruta básica
Route::get('/usuarios', function () {
    return 'Lista de usuarios';
});

// Ruta con parámetro
Route::get('/usuarios/{id}', function ($id) {
    return "Usuario ID: {$id}";
});

// Rutas con nombre
Route::get('/usuarios', function () {
    return view('usuarios.index');
})->name('usuarios.index');

// Route groups
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    });
    
    Route::get('/usuarios', [UsuarioController::class, 'index']);
});

// Métodos HTTP
Route::get('/usuarios', [UsuarioController::class, 'index']);
Route::post('/usuarios', [UsuarioController::class, 'store']);
Route::put('/usuarios/{id}', [UsuarioController::class, 'update']);
Route::delete('/usuarios/{id}', [UsuarioController::class, 'destroy']);

// Resource routes (CRUD completo)
Route::resource('usuarios', UsuarioController::class);
```

**📝 Ejercicios:**
1. Crear rutas para CRUD de productos
2. Implementar rutas con middleware de autenticación
3. Crear route groups para API

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing en Laravel"`

#### Paso 3: Controllers
- [ ] Crear controladores
- [ ] Métodos de controlador
- [ ] Resource controllers
- [ ] Dependency injection

**Ejemplo:**
```php
// Crear controlador: php artisan make:controller UsuarioController

// app/Http/Controllers/UsuarioController.php
namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    // Mostrar lista de usuarios
    public function index()
    {
        $usuarios = Usuario::all();
        return view('usuarios.index', compact('usuarios'));
    }
    
    // Mostrar formulario de creación
    public function create()
    {
        return view('usuarios.create');
    }
    
    // Guardar nuevo usuario
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios',
        ]);
        
        $usuario = Usuario::create($validated);
        
        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario creado exitosamente');
    }
    
    // Mostrar usuario específico
    public function show(Usuario $usuario)
    {
        return view('usuarios.show', compact('usuario'));
    }
    
    // Mostrar formulario de edición
    public function edit(Usuario $usuario)
    {
        return view('usuarios.edit', compact('usuario'));
    }
    
    // Actualizar usuario
    public function update(Request $request, Usuario $usuario)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email,' . $usuario->id,
        ]);
        
        $usuario->update($validated);
        
        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario actualizado exitosamente');
    }
    
    // Eliminar usuario
    public function destroy(Usuario $usuario)
    {
        $usuario->delete();
        
        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario eliminado exitosamente');
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: controladores en Laravel"`

#### Paso 4: Models y Eloquent ORM
- [ ] Crear modelos
- [ ] Eloquent queries
- [ ] Relaciones
- [ ] Mass assignment

**📚 Conceptos Clave:**

##### **Eloquent ORM**
**Definición:** ORM (Object-Relational Mapping) de Laravel que permite interactuar con la base de datos usando objetos PHP en lugar de SQL directo.

**Ejemplo:**
```php
// app/Models/Usuario.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $fillable = ['nombre', 'email', 'password'];
    
    protected $hidden = ['password'];
    
    // Relación uno a muchos
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    
    // Relación muchos a muchos
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}

// Uso en controlador
use App\Models\Usuario;

// Obtener todos
$usuarios = Usuario::all();

// Obtener con condiciones
$usuarios = Usuario::where('activo', true)->get();

// Obtener uno
$usuario = Usuario::find(1);
$usuario = Usuario::where('email', 'juan@example.com')->first();

// Crear
$usuario = Usuario::create([
    'nombre' => 'Juan Pérez',
    'email' => 'juan@example.com',
    'password' => bcrypt('password')
]);

// Actualizar
$usuario->update(['nombre' => 'Juan Carlos']);

// Eliminar
$usuario->delete();

// Con relaciones
$usuario = Usuario::with('posts')->find(1);
$posts = $usuario->posts;
```

**📝 Ejercicios:**
1. Crear modelo Producto con relaciones
2. Implementar queries complejas con Eloquent
3. Crear relaciones entre modelos

> 💡 **Sugerencia de Commit**: `git commit -m "feat: modelos y Eloquent ORM"`

#### Paso 5: Migrations
- [ ] ¿Qué son las migraciones?
- [ ] Crear migraciones
- [ ] Ejecutar migraciones
- [ ] Rollback

**Ejemplo:**
```php
// Crear migración: php artisan make:migration create_usuarios_table

// database/migrations/xxxx_create_usuarios_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};

// Ejecutar migraciones
php artisan migrate

// Rollback
php artisan migrate:rollback

// Rollback todas
php artisan migrate:reset

// Refrescar (rollback + migrate)
php artisan migrate:refresh
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: migraciones de base de datos"`

---

### 📍 Fase 2: Frontend con Blade (Intermedio)

#### Paso 6: Blade Templates
- [ ] ¿Qué es Blade?
- [ ] Sintaxis Blade
- [ ] Directivas
- [ ] Layouts y componentes

**📚 Conceptos Clave:**

##### **Blade**
**Definición:** Motor de plantillas de Laravel que permite escribir código PHP de forma más limpia y expresiva.

**Ejemplo:**
```blade
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Mi App')</title>
</head>
<body>
    @include('partials.header')
    
    <main>
        @yield('content')
    </main>
    
    @include('partials.footer')
</body>
</html>

{{-- resources/views/usuarios/index.blade.php --}}
@extends('layouts.app')

@section('title', 'Usuarios')

@section('content')
    <h1>Lista de Usuarios</h1>
    
    @if(count($usuarios) > 0)
        <ul>
            @foreach($usuarios as $usuario)
                <li>
                    {{ $usuario->nombre }} - {{ $usuario->email }}
                </li>
            @endforeach
        </ul>
    @else
        <p>No hay usuarios</p>
    @endif
    
    @auth
        <a href="{{ route('usuarios.create') }}">Crear Usuario</a>
    @endauth
@endsection

{{-- Componentes Blade --}}
{{-- resources/views/components/alert.blade.php --}}
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>

{{-- Uso --}}
<x-alert type="success">
    Usuario creado exitosamente
</x-alert>
```

**📝 Ejercicios:**
1. Crear layout principal con Blade
2. Crear componentes reutilizables
3. Implementar formularios con Blade

> 💡 **Sugerencia de Commit**: `git commit -m "feat: templates Blade"`

#### Paso 7: Formularios y Validación
- [ ] Formularios HTML
- [ ] Form Requests
- [ ] Validación
- [ ] Mensajes de error

**Ejemplo:**
```php
// Crear Form Request: php artisan make:request StoreUsuarioRequest

// app/Http/Requests/StoreUsuarioRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsuarioRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        return [
            'nombre' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email',
            'password' => 'required|min:8|confirmed',
        ];
    }
    
    public function messages()
    {
        return [
            'nombre.required' => 'El nombre es obligatorio',
            'email.unique' => 'Este email ya está registrado',
            'password.min' => 'La contraseña debe tener al menos 8 caracteres',
        ];
    }
}

// En el controlador
public function store(StoreUsuarioRequest $request)
{
    $validated = $request->validated();
    // Los datos ya están validados
    Usuario::create($validated);
    return redirect()->route('usuarios.index');
}
```

```blade
{{-- resources/views/usuarios/create.blade.php --}}
<form method="POST" action="{{ route('usuarios.store') }}">
    @csrf
    
    <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value="{{ old('nombre') }}">
        @error('nombre')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>
    
    <div>
        <label>Email:</label>
        <input type="email" name="email" value="{{ old('email') }}">
        @error('email')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>
    
    <div>
        <label>Contraseña:</label>
        <input type="password" name="password">
        @error('password')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>
    
    <div>
        <label>Confirmar Contraseña:</label>
        <input type="password" name="password_confirmation">
    </div>
    
    <button type="submit">Crear Usuario</button>
</form>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: formularios y validación"`

---

### 📍 Fase 3: APIs (Intermedio)

#### Paso 8: API Routes y Resources
- [ ] API routes
- [ ] API Resources
- [ ] Transformación de datos
- [ ] Paginación

**📚 Conceptos Clave:**

##### **API Resources**
**Definición:** Clases que transforman modelos Eloquent en arrays JSON para respuestas de API consistentes.

**Ejemplo:**
```php
// routes/api.php
use App\Http\Controllers\Api\UsuarioController;

Route::apiResource('usuarios', UsuarioController::class);

// Crear API Resource: php artisan make:resource UsuarioResource

// app/Http/Resources/UsuarioResource.php
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UsuarioResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nombre' => $this->nombre,
            'email' => $this->email,
            'fecha_creacion' => $this->created_at->format('Y-m-d'),
        ];
    }
}

// En el controlador
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UsuarioResource;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::paginate(10);
        return UsuarioResource::collection($usuarios);
    }
    
    public function show(Usuario $usuario)
    {
        return new UsuarioResource($usuario);
    }
    
    public function store(Request $request)
    {
        $usuario = Usuario::create($request->validated());
        return new UsuarioResource($usuario);
    }
}
```

**📝 Ejercicios:**
1. Crear API REST completa para productos
2. Implementar autenticación con Sanctum
3. Agregar paginación y filtros

> 💡 **Sugerencia de Commit**: `git commit -m "feat: API routes y resources"`

#### Paso 9: Autenticación API con Sanctum
- [ ] Instalar Sanctum
- [ ] Tokens de API
- [ ] Middleware de autenticación
- [ ] Proteger rutas

**Ejemplo:**
```php
// Instalar: composer require laravel/sanctum
// php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
// php artisan migrate

// app/Http/Controllers/Api/AuthController.php
namespace App\Http\Controllers\Api;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        $usuario = Usuario::where('email', $request->email)->first();
        
        if (!$usuario || !Hash::check($request->password, $usuario->password)) {
            throw ValidationException::withMessages([
                'email' => ['Las credenciales son incorrectas.'],
            ]);
        }
        
        $token = $usuario->createToken('auth-token')->plainTextToken;
        
        return response()->json([
            'token' => $token,
            'usuario' => $usuario,
        ]);
    }
    
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        
        return response()->json(['message' => 'Sesión cerrada']);
    }
}

// Proteger rutas
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('usuarios', UsuarioController::class);
});
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: autenticación API con Sanctum"`

---

### 📍 Fase 4: Livewire (Intermedio-Avanzado)

#### Paso 10: Introducción a Livewire
- [ ] ¿Qué es Livewire?
- [ ] Instalar Livewire
- [ ] Crear componentes
- [ ] Binding de datos

**📚 Conceptos Clave:**

##### **Livewire**
**Definición:** Framework full-stack de Laravel que permite crear interfaces dinámicas sin escribir JavaScript. Los componentes se renderizan en el servidor.

**Ejemplo:**
```bash
# Instalar: composer require livewire/livewire
# php artisan livewire:publish --config
```

```php
// Crear componente: php artisan make:livewire Contador

// app/Http/Livewire/Contador.php
namespace App\Http\Livewire;

use Livewire\Component;

class Contador extends Component
{
    public $contador = 0;
    
    public function incrementar()
    {
        $this->contador++;
    }
    
    public function decrementar()
    {
        $this->contador--;
    }
    
    public function render()
    {
        return view('livewire.contador');
    }
}
```

```blade
{{-- resources/views/livewire/contador.blade.php --}}
<div>
    <h2>Contador: {{ $contador }}</h2>
    <button wire:click="incrementar">Incrementar</button>
    <button wire:click="decrementar">Decrementar</button>
</div>

{{-- Uso en Blade --}}
<livewire:contador />
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a Livewire"`

#### Paso 11: Livewire Avanzado
- [ ] Lifecycle hooks
- [ ] Validación en tiempo real
- [ ] Eventos
- [ ] Polling

**Ejemplo:**
```php
// app/Http/Livewire/UsuarioForm.php
namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Usuario;

class UsuarioForm extends Component
{
    public $nombre = '';
    public $email = '';
    
    protected $rules = [
        'nombre' => 'required|min:3',
        'email' => 'required|email|unique:usuarios,email',
    ];
    
    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }
    
    public function guardar()
    {
        $this->validate();
        
        Usuario::create([
            'nombre' => $this->nombre,
            'email' => $this->email,
        ]);
        
        session()->flash('message', 'Usuario creado exitosamente');
        $this->reset();
        
        // Emitir evento
        $this->emit('usuarioCreado');
    }
    
    public function render()
    {
        return view('livewire.usuario-form');
    }
}
```

```blade
{{-- resources/views/livewire/usuario-form.blade.php --}}
<div>
    <form wire:submit.prevent="guardar">
        <div>
            <label>Nombre:</label>
            <input type="text" wire:model="nombre">
            @error('nombre') <span class="error">{{ $message }}</span> @enderror
        </div>
        
        <div>
            <label>Email:</label>
            <input type="email" wire:model="email">
            @error('email') <span class="error">{{ $message }}</span> @enderror
        </div>
        
        <button type="submit">Guardar</button>
    </form>
    
    @if (session()->has('message'))
        <div class="alert">
            {{ session('message') }}
        </div>
    @endif
</div>
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: Livewire avanzado"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 12: Principio de Responsabilidad Única (SRP)
- [ ] Separar lógica de negocio
- [ ] Services
- [ ] Repositories
- [ ] Separar presentación de lógica

**📚 Conceptos Clave:**

##### **SRP en Laravel**
**Definición:** Cada clase debe tener una sola responsabilidad.

**Ejemplo:**
```php
// ❌ Mal: Controlador con múltiples responsabilidades
class UsuarioController extends Controller
{
    public function store(Request $request)
    {
        // Validación
        $validated = $request->validate([...]);
        
        // Crear usuario
        $usuario = Usuario::create($validated);
        
        // Enviar email
        Mail::to($usuario->email)->send(new BienvenidaMail($usuario));
        
        // Generar reporte
        $reporte = PDF::loadView('reportes.usuario', compact('usuario'));
        $reporte->save(storage_path('app/reportes/usuario.pdf'));
        
        return redirect()->route('usuarios.index');
    }
}

// ✅ Bien: Separar responsabilidades
// app/Services/UsuarioService.php
namespace App\Services;

use App\Models\Usuario;
use App\Mail\BienvenidaMail;
use Illuminate\Support\Facades\Mail;

class UsuarioService
{
    public function crearUsuario(array $datos)
    {
        $usuario = Usuario::create($datos);
        $this->enviarEmailBienvenida($usuario);
        return $usuario;
    }
    
    private function enviarEmailBienvenida(Usuario $usuario)
    {
        Mail::to($usuario->email)->send(new BienvenidaMail($usuario));
    }
}

// app/Services/ReporteService.php
namespace App\Services;

use App\Models\Usuario;
use Barryvdh\DomPDF\Facade\Pdf;

class ReporteService
{
    public function generarReporteUsuario(Usuario $usuario)
    {
        $reporte = PDF::loadView('reportes.usuario', compact('usuario'));
        return $reporte->save(storage_path('app/reportes/usuario.pdf'));
    }
}

// Controlador
class UsuarioController extends Controller
{
    public function __construct(
        private UsuarioService $usuarioService,
        private ReporteService $reporteService
    ) {}
    
    public function store(StoreUsuarioRequest $request)
    {
        $usuario = $this->usuarioService->crearUsuario($request->validated());
        
        return redirect()->route('usuarios.index')
            ->with('success', 'Usuario creado exitosamente');
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en Laravel"`

#### Paso 13: Principio KISS (Keep It Simple, Stupid)
- [ ] Código simple y claro
- [ ] Evitar complejidad innecesaria
- [ ] Usar features de Laravel cuando sea apropiado

**Ejemplo:**
```php
// ❌ Mal: Complejidad innecesaria
class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = collect();
        foreach (Usuario::all() as $usuario) {
            if ($usuario->activo) {
                $usuarios->push($usuario);
            }
        }
        return view('usuarios.index', ['usuarios' => $usuarios]);
    }
}

// ✅ Bien: Simple y claro
class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::where('activo', true)->get();
        return view('usuarios.index', compact('usuarios'));
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en Laravel"`

#### Paso 14: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar código
- [ ] Traits
- [ ] Helpers
- [ ] Service Providers

**Ejemplo:**
```php
// app/Traits/HasSlug.php
namespace App\Traits;

trait HasSlug
{
    public static function bootHasSlug()
    {
        static::creating(function ($model) {
            $model->slug = \Str::slug($model->nombre);
        });
    }
}

// Usar en múltiples modelos
class Post extends Model
{
    use HasSlug;
}

class Producto extends Model
{
    use HasSlug;
}

// Helpers
// app/Helpers/helpers.php
if (!function_exists('formatearFecha')) {
    function formatearFecha($fecha)
    {
        return $fecha->format('d/m/Y');
    }
}

// Composer autoload
// composer.json
"autoload": {
    "files": [
        "app/Helpers/helpers.php"
    ]
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en Laravel"`

#### Paso 15: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear abstracciones prematuramente
- [ ] No sobre-ingeniería
- [ ] Implementar solo lo necesario

**Ejemplo:**
```php
// ❌ Mal: Crear abstracciones que no se necesitan
// BaseController, GenericService, etc. que solo se usan una vez

// ✅ Bien: Implementar solo lo necesario
class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return view('usuarios.index', compact('usuarios'));
    }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en Laravel"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Blog Completo

```php
// app/Models/Post.php
class Post extends Model
{
    protected $fillable = ['titulo', 'contenido', 'usuario_id'];
    
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }
    
    public function categorias()
    {
        return $this->belongsToMany(Categoria::class);
    }
}

// app/Http/Controllers/PostController.php
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('usuario', 'categorias')
            ->latest()
            ->paginate(10);
        
        return view('posts.index', compact('posts'));
    }
    
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }
}
```

### Ejemplo 2: API REST con Autenticación

```php
// routes/api.php
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('posts', PostController::class);
    Route::post('/logout', [AuthController::class, 'logout']);
});

// app/Http/Controllers/Api/PostController.php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::paginate(10);
        return PostResource::collection($posts);
    }
    
    public function store(Request $request)
    {
        $post = Post::create($request->validated());
        return new PostResource($post);
    }
}
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: Frontend con Blade
- [ ] Fase 3: APIs
- [ ] Fase 4: Livewire
- [ ] Fase 5: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Laravel](https://laravel.com/docs)
- [Laravel Livewire](https://laravel-livewire.com/)
- [Laravel Sanctum](https://laravel.com/docs/sanctum)
- [Laracasts](https://laracasts.com/)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Laravel desde principiante hasta experto.

