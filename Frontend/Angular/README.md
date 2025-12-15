# 📘 Curso Completo de Angular

<div align="center">

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=rxjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Angular Material](https://img.shields.io/badge/Angular_Material-FF4081?style=for-the-badge&logo=angular&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-9B59B6?style=for-the-badge&logo=redux&logoColor=white)

</div>

> Repositorio dedicado al aprendizaje completo de Angular desde conceptos básicos hasta avanzados, con enfoque en componentes, servicios, módulos, consumo de APIs, RxJS, principios SOLID, YAGNI, KISS, DRY y buenas prácticas.

---

## 📑 Tabla de Contenidos

- [🚀 Inicio Rápido](#-inicio-rápido)
- [📋 Requisitos Mínimos](#-requisitos-mínimos)
- [🗺️ Roadmap del Curso](#️-roadmap-del-curso)
- [📚 Fundamentos Básicos](#-fundamentos-básicos)
- [🎯 Componentes y Servicios](#-componentes-y-servicios)
- [🌐 Consumo de APIs](#-consumo-de-apis)
- [🏗️ Principios y Buenas Prácticas](#️-principios-y-buenas-prácticas)
- [💡 Ejemplos Prácticos](#-ejemplos-prácticos)

---

## 🚀 Inicio Rápido

### Instalación y Configuración

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Crear nuevo proyecto
ng new mi-proyecto
cd mi-proyecto

# Servidor de desarrollo
ng serve

# Compilar para producción
ng build
```

### Estructura de un Proyecto Angular

```
mi-proyecto/
├── src/
│   ├── app/
│   │   ├── components/        # Componentes
│   │   ├── services/          # Servicios
│   │   ├── models/            # Modelos/Interfaces
│   │   ├── guards/            # Route guards
│   │   ├── interceptors/      # HTTP interceptors
│   │   ├── app.component.ts   # Componente raíz
│   │   └── app.module.ts      # Módulo raíz
│   ├── assets/                # Archivos estáticos
│   ├── environments/          # Configuraciones
│   └── main.ts                # Punto de entrada
├── angular.json                # Configuración del proyecto
└── package.json
```

---

## 📋 Requisitos Mínimos

- **Node.js** 18.x o superior
- **npm** 9.x o superior
- **Angular CLI** 17.x
- **Editor de código**: VS Code con extensión Angular Language Service
- **Conocimientos básicos**: HTML, CSS, TypeScript

---

## 🗺️ Roadmap del Curso

### 📍 Fase 1: Fundamentos (Principiante)

#### Paso 1: Configuración del Entorno
- [ ] Instalar Node.js y npm
- [ ] Instalar Angular CLI
- [ ] Crear proyecto
- [ ] Entender estructura del proyecto

**📚 Conceptos Clave:**

##### **Angular**
**Definición:** Framework de TypeScript para construir aplicaciones web. Utiliza arquitectura basada en componentes y módulos.

**Ejemplo:**
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ titulo }}</h1>
    <button (click)="incrementar()">Contador: {{ contador }}</button>
  `,
  styles: ['h1 { color: blue; }']
})
export class AppComponent {
  titulo = '¡Hola, Angular!';
  contador = 0;
  
  incrementar() {
    this.contador++;
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: configuración inicial del proyecto Angular"`

#### Paso 2: Componentes y Templates
- [ ] Crear componentes
- [ ] Template syntax
- [ ] Data binding
- [ ] Directivas estructurales

**📚 Conceptos Clave:**

##### **Componentes**
**Definición:** Bloques de construcción fundamentales de Angular. Cada componente tiene su propia vista y lógica.

**Ejemplo:**
```typescript
// usuario.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  template: `
    <div class="usuario-card">
      <h3>{{ usuario.nombre }}</h3>
      <p>{{ usuario.email }}</p>
      <button (click)="onEditar.emit(usuario.id)">Editar</button>
    </div>
  `,
  styles: [`
    .usuario-card {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 1rem;
    }
  `]
})
export class UsuarioComponent {
  @Input() usuario!: { id: number; nombre: string; email: string };
  @Output() onEditar = new EventEmitter<number>();
}

// Uso
// <app-usuario [usuario]="usuario" (onEditar)="manejarEditar($event)"></app-usuario>
```

**Ejemplo de Template Syntax:**
```html
<!-- Interpolación -->
<p>{{ mensaje }}</p>

<!-- Property binding -->
<img [src]="imagenUrl" [alt]="descripcion" />

<!-- Event binding -->
<button (click)="manejarClick()">Click</button>

<!-- Two-way binding -->
<input [(ngModel)]="nombre" />

<!-- Directivas estructurales -->
<div *ngIf="mostrar">Visible</div>
<div *ngFor="let item of items; let i = index">
  {{ i }}: {{ item }}
</div>

<!-- Directivas de atributo -->
<div [ngClass]="{'activo': esActivo, 'inactivo': !esActivo}">
  Contenido
</div>
```

**📝 Ejercicios:**
1. Crear componente TarjetaProducto
2. Crear lista de usuarios con *ngFor
3. Implementar formulario con ngModel

> 💡 **Sugerencia de Commit**: `git commit -m "feat: componentes y templates"`

#### Paso 3: Servicios e Inyección de Dependencias
- [ ] ¿Qué son los servicios?
- [ ] Crear servicios
- [ ] Inyección de dependencias
- [ ] Singleton pattern

**📚 Conceptos Clave:**

##### **Servicios**
**Definición:** Clases que contienen lógica de negocio reutilizable. Se inyectan en componentes mediante DI.

**Ejemplo:**
```typescript
// usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Singleton a nivel de aplicación
})
export class UsuarioService {
  private apiUrl = '/api/usuarios';
  
  constructor(private http: HttpClient) {}
  
  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  
  obtenerPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }
  
  crear(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
  
  actualizar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }
  
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

// Uso en componente
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-lista',
  template: `
    <ul>
      <li *ngFor="let usuario of usuarios">
        {{ usuario.nombre }}
      </li>
    </ul>
  `
})
export class UsuarioListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  
  constructor(private usuarioService: UsuarioService) {}
  
  ngOnInit() {
    this.usuarioService.obtenerTodos().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: servicios e inyección de dependencias"`

#### Paso 4: Módulos
- [ ] ¿Qué son los módulos?
- [ ] NgModule
- [ ] Feature modules
- [ ] Shared modules

**Ejemplo:**
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UsuarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// usuario.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    UsuarioListaComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UsuarioService],
  exports: [UsuarioListaComponent] // Exportar para usar en otros módulos
})
export class UsuarioModule { }
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: módulos en Angular"`

#### Paso 5: Routing
- [ ] Configurar rutas
- [ ] RouterModule
- [ ] Navegación
- [ ] Route parameters
- [ ] Route guards

**Ejemplo:**
```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioListaComponent } from './usuario/usuario-lista.component';
import { UsuarioDetalleComponent } from './usuario/usuario-detalle.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'usuarios', component: UsuarioListaComponent },
  { 
    path: 'usuarios/:id', 
    component: UsuarioDetalleComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Navegación en componente
import { Router } from '@angular/router';

export class UsuarioComponent {
  constructor(private router: Router) {}
  
  verDetalle(id: number) {
    this.router.navigate(['/usuarios', id]);
  }
  
  volver() {
    this.router.navigate(['/usuarios']);
  }
}

// Obtener parámetros
import { ActivatedRoute } from '@angular/router';

export class UsuarioDetalleComponent implements OnInit {
  usuarioId!: number;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.usuarioId = +this.route.snapshot.paramMap.get('id')!;
    
    // O suscribirse a cambios
    this.route.paramMap.subscribe(params => {
      this.usuarioId = +params.get('id')!;
    });
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: routing en Angular"`

---

### 📍 Fase 2: RxJS y Observables (Intermedio)

#### Paso 6: Introducción a RxJS
- [ ] ¿Qué es RxJS?
- [ ] Observables
- [ ] Operators
- [ ] Subscriptions

**📚 Conceptos Clave:**

##### **RxJS**
**Definición:** Biblioteca para programación reactiva usando Observables. Angular utiliza RxJS para manejar operaciones asíncronas.

**Ejemplo:**
```typescript
import { Observable, of, from } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

// Observable básico
const numeros$ = of(1, 2, 3, 4, 5);

numeros$.subscribe(valor => console.log(valor));

// Operadores
numeros$
  .pipe(
    map(x => x * 2),
    filter(x => x > 5)
  )
  .subscribe(valor => console.log(valor));

// Manejo de errores
import { throwError } from 'rxjs';

this.usuarioService.obtenerTodos()
  .pipe(
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => error);
    })
  )
  .subscribe(
    usuarios => this.usuarios = usuarios,
    error => this.error = error
  );
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: introducción a RxJS"`

---

### 📍 Fase 3: Consumo de APIs (Intermedio)

#### Paso 7: HttpClient
- [ ] Configurar HttpClient
- [ ] Realizar peticiones HTTP
- [ ] Manejo de errores
- [ ] Interceptores

**Ejemplo:**
```typescript
// usuario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'https://api.example.com/usuarios';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) {}
  
  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl)
      .pipe(
        retry(3), // Reintentar 3 veces
        catchError(this.manejarError)
      );
  }
  
  crear(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario, this.httpOptions)
      .pipe(catchError(this.manejarError));
  }
  
  private manejarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del cliente:', error.error.message);
    } else {
      console.error(`Error del servidor: ${error.status}, ${error.message}`);
    }
    return throwError(() => new Error('Algo salió mal'));
  }
}

// Interceptor
// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }
    
    return next.handle(req);
  }
}

// app.module.ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
]
```

**📝 Ejercicios:**
1. Crear servicio para consumir API pública
2. Implementar CRUD completo
3. Crear interceptor para autenticación

> 💡 **Sugerencia de Commit**: `git commit -m "feat: consumo de APIs con HttpClient"`

---

### 📍 Fase 4: Formularios (Intermedio)

#### Paso 8: Template-driven Forms
- [ ] FormsModule
- [ ] ngModel
- [ ] Validación
- [ ] ngForm

**Ejemplo:**
```typescript
// usuario-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  template: `
    <form #usuarioForm="ngForm" (ngSubmit)="onSubmit(usuarioForm)">
      <div>
        <label>Nombre:</label>
        <input 
          name="nombre" 
          [(ngModel)]="usuario.nombre" 
          required 
          minlength="3"
          #nombre="ngModel"
        />
        <div *ngIf="nombre.invalid && nombre.touched">
          <div *ngIf="nombre.errors?.['required']">Nombre es requerido</div>
          <div *ngIf="nombre.errors?.['minlength']">Mínimo 3 caracteres</div>
        </div>
      </div>
      
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          [(ngModel)]="usuario.email" 
          required
          email
          #email="ngModel"
        />
        <div *ngIf="email.invalid && email.touched">
          Email inválido
        </div>
      </div>
      
      <button type="submit" [disabled]="usuarioForm.invalid">
        Guardar
      </button>
    </form>
  `
})
export class UsuarioFormComponent {
  usuario = { nombre: '', email: '' };
  
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Usuario:', this.usuario);
    }
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: formularios template-driven"`

#### Paso 9: Reactive Forms
- [ ] ReactiveFormsModule
- [ ] FormBuilder
- [ ] FormGroup y FormControl
- [ ] Validadores personalizados

**Ejemplo:**
```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  template: `
    <form [formGroup]="usuarioForm" (ngSubmit)="onSubmit()">
      <div>
        <label>Nombre:</label>
        <input formControlName="nombre" />
        <div *ngIf="nombre.invalid && nombre.touched">
          <div *ngIf="nombre.errors?.['required']">Nombre es requerido</div>
          <div *ngIf="nombre.errors?.['minlength']">Mínimo 3 caracteres</div>
        </div>
      </div>
      
      <div>
        <label>Email:</label>
        <input formControlName="email" />
        <div *ngIf="email.invalid && email.touched">
          Email inválido
        </div>
      </div>
      
      <div formGroupName="direccion">
        <label>Calle:</label>
        <input formControlName="calle" />
      </div>
      
      <button type="submit" [disabled]="usuarioForm.invalid">
        Guardar
      </button>
    </form>
  `
})
export class UsuarioFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      direccion: this.fb.group({
        calle: [''],
        ciudad: ['']
      })
    });
  }
  
  get nombre() {
    return this.usuarioForm.get('nombre')!;
  }
  
  get email() {
    return this.usuarioForm.get('email')!;
  }
  
  onSubmit() {
    if (this.usuarioForm.valid) {
      console.log('Usuario:', this.usuarioForm.value);
    }
  }
}

// Validador personalizado
function emailValidador(control: AbstractControl): {[key: string]: any} | null {
  const email = control.value;
  if (email && !email.endsWith('@example.com')) {
    return { 'emailInvalido': true };
  }
  return null;
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "feat: formularios reactivos"`

---

### 📍 Fase 5: Principios y Buenas Prácticas

#### Paso 10: Principio de Responsabilidad Única (SRP)
- [ ] Separar componentes por responsabilidad
- [ ] Servicios para lógica de negocio
- [ ] Separar presentación de lógica

**📚 Conceptos Clave:**

##### **SRP en Angular**
**Definición:** Cada componente debe tener una sola responsabilidad.

**Ejemplo:**
```typescript
// ❌ Mal: Componente con múltiples responsabilidades
@Component({
  selector: 'app-usuario',
  template: `...`
})
export class UsuarioComponent {
  usuario: Usuario | null = null;
  
  ngOnInit() {
    // Obtener datos
    this.http.get('/api/usuarios/1').subscribe(u => this.usuario = u);
  }
  
  enviarEmail() {
    // Lógica de envío de email
  }
  
  generarReporte() {
    // Lógica de generación de reporte
  }
}

// ✅ Bien: Separar responsabilidades
// usuario.service.ts
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}
  
  obtenerPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`/api/usuarios/${id}`);
  }
}

// email.service.ts
@Injectable({ providedIn: 'root' })
export class EmailService {
  enviar(usuario: Usuario) {
    // Lógica de envío
  }
}

// Componente
@Component({
  selector: 'app-usuario',
  template: `...`
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario | null = null;
  
  constructor(
    private usuarioService: UsuarioService,
    private emailService: EmailService
  ) {}
  
  ngOnInit() {
    this.usuarioService.obtenerPorId(1)
      .subscribe(u => this.usuario = u);
  }
  
  manejarEnviarEmail() {
    if (this.usuario) {
      this.emailService.enviar(this.usuario);
    }
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio SRP en Angular"`

#### Paso 11: Principio KISS (Keep It Simple, Stupid)
- [ ] Componentes simples
- [ ] Evitar complejidad innecesaria
- [ ] Código legible

**Ejemplo:**
```typescript
// ❌ Mal: Componente complejo innecesario
@Component({
  template: `
    <div *ngFor="let u of usuarios | filter: 'activo' | sort: 'nombre'">
      {{ u | json }}
    </div>
  `
})

// ✅ Bien: Componente simple y claro
@Component({
  template: `
    <ul>
      <li *ngFor="let usuario of usuariosOrdenados">
        <app-usuario-item [usuario]="usuario"></app-usuario-item>
      </li>
    </ul>
  `
})
export class UsuarioListaComponent {
  usuarios: Usuario[] = [];
  
  get usuariosOrdenados(): Usuario[] {
    return this.usuarios
      .filter(u => u.activo)
      .sort((a, b) => a.nombre.localeCompare(b.nombre));
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio KISS en Angular"`

#### Paso 12: Principio DRY (Don't Repeat Yourself)
- [ ] Reutilizar componentes
- [ ] Servicios para lógica común
- [ ] Directivas personalizadas
- [ ] Pipes personalizados

**Ejemplo:**
```typescript
// Pipe personalizado
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}

// Directiva personalizada
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {
  @Input() appResaltar = '';
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appResaltar);
  }
}

// Uso
<p appResaltar="yellow">{{ 'hola mundo' | capitalize }}</p>
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio DRY en Angular"`

#### Paso 13: Principio YAGNI (You Aren't Gonna Need It)
- [ ] No crear abstracciones prematuramente
- [ ] No sobre-ingeniería
- [ ] Implementar solo lo necesario

**Ejemplo:**
```typescript
// ❌ Mal: Crear abstracciones que no se necesitan
// BaseFormComponent, GenericService, etc. que solo se usan una vez

// ✅ Bien: Implementar solo lo necesario
@Component({
  selector: 'app-usuario-form',
  template: `...`
})
export class UsuarioFormComponent {
  usuario = { nombre: '', email: '' };
  
  onSubmit() {
    // Lógica simple y directa
  }
}
```

> 💡 **Sugerencia de Commit**: `git commit -m "refactor: aplicar principio YAGNI en Angular"`

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Sistema de Gestión de Usuarios

```typescript
// usuario.service.ts
@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private apiUrl = '/api/usuarios';
  
  constructor(private http: HttpClient) {}
  
  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
  
  crear(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}

// usuario-lista.component.ts
@Component({
  selector: 'app-usuario-lista',
  template: `
    <ul>
      <li *ngFor="let usuario of usuarios">
        <app-usuario-item [usuario]="usuario"></app-usuario-item>
      </li>
    </ul>
  `
})
export class UsuarioListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  
  constructor(private usuarioService: UsuarioService) {}
  
  ngOnInit() {
    this.usuarioService.obtenerTodos()
      .subscribe(usuarios => this.usuarios = usuarios);
  }
}
```

### Ejemplo 2: Interceptor para Autenticación

```typescript
// auth.interceptor.ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(cloned);
    }
    
    return next.handle(req);
  }
}
```

---

## 📝 Progreso del Curso

- [ ] Fase 1: Fundamentos
- [ ] Fase 2: RxJS y Observables
- [ ] Fase 3: Consumo de APIs
- [ ] Fase 4: Formularios
- [ ] Fase 5: Principios y Buenas Prácticas

---

## 🎯 Recursos Adicionales

- [Documentación oficial de Angular](https://angular.io/)
- [Angular CLI](https://angular.io/cli)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Style Guide](https://angular.io/guide/styleguide)

---

## 📄 Licencia

MIT License

---

## 👨‍💻 Autor

Curso completo de Angular desde principiante hasta experto.

