export {}
// EJERCICIOS

 /**
  * EJERCICIO #1:
  * Define una interfaz para un objeto 'Libro' con
  * título, autor y año.
  */

 interface Libro {
    titulo: string,
    autor: string,
    anio: number
 }
 
 const miLibro : Libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Marquez",
    anio: 1986
 }

 function showInfoBook(l: Libro){
    console.log(`Título del libro: ${l.titulo}\nAutor: ${l.autor}\nAño de publicación: ${l.anio}`)
 }

 showInfoBook(miLibro)

/**
 * EJERCICIO #2
 * Crea un type para un objeto Usuario con nombre, e-mail y edad
 */

type Usuario = { nombre: string, email: string, edad:number }

const yo: Usuario = {
    nombre: "Edgar Gmz",
    email: "edgar@correo.com",
    edad: 35
}

console.log(`Hola mi nombre es ${yo.nombre}\n,mi correo es ${yo.email}\n y tengo ${yo.edad} años.`)

/**
 * EJERCICIO #3
 * Extiende la interfaz 'Libro' para agregar un campo 'prestado'.
 */

interface book extends Libro {
    prestado: boolean
}

const tomarLibro : book = {
    titulo: "Pensar rápido, pensar despacio",
    autor: "Daniel Khaneman",
    anio: 1995,
    prestado: true
}

console.log(`El ${tomarLibro.titulo} del autor ${tomarLibro.autor} publicado en el año ${tomarLibro.anio} ${tomarLibro.prestado ? 'se encuentra disponible' : 'no esta disponible'}`)

/**
 * EJERCICIO #4
 * Usa un type para crear una union entre 'activo' e 'inactivo'.
 */

type estado = 'activo' | 'inactivo'
const alerta : estado = 'activo'
console.log(alerta)

/**
 * EJERCICIO #5
 * Implementa una función que reciba un objeto 'Usuario' (type)
 * y devuelva su nombre.
 */

type User = {
    userName: string,
    password: string
}

function getUsername(u:User):string{
    return u.userName
}

const myUser : User = {
    userName: "EdgarGmz",
    password:"12345"
}

console.log(`El nombre del usuario es: ${getUsername(myUser)}`)

/**
 * EJERCICIO #6
 * Declara una interfaz para una función que reciba dos
 * números y devuelva un numero.
 */

interface Operation {
    (a: number, b: number): number
}

const sumar: Operation = (n1:number ,n2: number) => {
    return n1 + n2
}

const multiplicar : Operation = (n1: number ,n2:number ) =>{
    return n1 * n2
}
let n1 : number = 5
let n2 : number = 2
console.log(`El resultado de la suma entre ${n1} y ${n2} es ${sumar(n1,n2)}`)
console.log(`El resultado de la multiplicación entre ${n1} y ${n2} es ${multiplicar(n1,n2)}`)

/**
 * EJERCICIO #7
 * Crea un type para un array de strigs llamado 'Palabras'
 */

type Palabras = string []

/**
 * EJERCICIO #8 
 * Usa una interfaz para definir la forma de un objeto 'Animal'
 * con nombre y especie
 */

interface AnimalS {
    nombre: string,
    especie: string
}

/**
 * EJERCICIO #9
 * Declara un type para una tupla que contenga un string y un numero
 */

type item = [string, number]

/**
 * EJERCICIO #10
 * Implementa una interfaz para un objeto 'Rectángulo' con ancho y 
 * alto, y una función que calcule su area
 */

interface Figura {
    alto: number,
    ancho: number,
    getArea(): number,
    getPerimetro(): number
}

let rectangulo : Figura = {
    alto: 10,
    ancho: 5,

    getArea(){
        return this.alto * this.ancho
    },

    getPerimetro(){
        return (this.alto * 2) + (this.ancho * 2)
    }
}

let triangulo : Figura = {
    alto: 15,
    ancho: 32,

    getArea(){
        return (this.alto * this.ancho) / 2
    },

    getPerimetro() {
        return 0
    },
}

let cuadrado : Figura = {
    alto: 20,
    ancho: 20,

    getArea(){
        return this.alto * this.alto
    },

    getPerimetro() {
        return 4 * this.alto
    }
}

console.log(`El rectángulo tiene una area de ${rectangulo.getArea?.()} cm2. 
y un perimetro de ${rectangulo.getPerimetro?.()}`)

console.log(`El cuadrado tiene un area de ${cuadrado.getArea?.()}cm2. 
y un perimetro de ${cuadrado.getPerimetro?.()}cm`)

console.log(`El triangulo tiene un area de ${triangulo.getArea()}cm2. 
y un perimetro de ${triangulo.getPerimetro?.()}cm`)

/**
 * EJERCICIO #11
 * Extiende una interfaz 'Animal' para crear un 'perro' con
 * raza y un metodo 'ladrar()'.
 */

interface Animal {
    raza: string,
    ladrar(): void
}

interface Perro extends Animal {
    nombre: string,
    peso?: number,
    isAlive?: boolean
    info():string
}

const canela : Perro = {
    raza: "canino",
    ladrar(){
        console.log("wofff...")
    },

    nombre: "canela",
    peso: 5,
    isAlive: true,

    info(){
        return `Su nombre es ${this.nombre}, pesa ${this.peso} kilos
            , ${this.isAlive ? 'está vivita y colenado' : 'ya no está con nosotros'}`

    }
}

console.log(canela.info())
canela.ladrar()

/**
 * EJERCICIO #12
 * Usa un type para crear una intersección entre 'Usuario' y un 
 * objeto {admin: boolean}
 */

interface NewUser {
    userName: string,
    password?: string
}

type MyUser = NewUser & { admin:boolean }

const response : MyUser = {
    userName: "Edgar",
    // password: "wepipruwefjn",
    admin:true
}

console.log(`${response.userName} ${response.password ?? 'No tiene configurada la cuenta'} 
    y ${response.admin ? 'es adminitrador' : 'no es administrador'}`)

/**
 * EJERCICIO #13
 * Declara  una interfaz para un objeto que tenga
 * un índice numérico y valores string
 */

interface log {
    [index: number]: string
}

/**
 * EJERCICIO #14
 * Crea un type que represente un objeto con propiedades opcionales
 */
type Genero = 'Masculino' | 'Femenino' | 'Gay'

type Humano = {
    nombre: string,
    genero: Genero,
    edad: number
    vivo?: boolean,
    ocupacion?: string | number
}

/**
 * EJERCICIO #15
 * Implementa una interfaz para una clase vehículo con método 'arrancar()'.
 */

interface Manejar    {    
    encender():void
    acelerar():void
    frenar():void
    apagar():void
    isOn():boolean
}

type Car = 'Compacto' | 'Subcompacto' | 'Sedan' | 'SUV' | 'Pickup'

class Automovil implements Manejar {   
    private _modelo: string
    private _typecar: Car
    
    constructor (
         modelo: string, 
         typeCar: Car)
        {
            this._modelo = modelo
            this._typecar = typeCar
        }
        
        // Getters & Setters
        get modelo() : string {
            return this._modelo
        }
        
        get typeCar(): Car {
            return this._typecar
        }
        
        set modelo(modelo:string) {
            this._modelo = modelo
        }
        
        set typeCar(typeCar: Car){
            this._typecar = typeCar
        }
        
        showInfo(){
            console.log(`Mi carro es un ${this._modelo} tipo ${this._typecar}`)
        }
        
        encender(): void {
            console.log("Vehiculo encendido")
        }
        acelerar(): void {
            console.log("Acelerando...")
        }
        frenar(): void {
            console.log("Vehiculo detenido")
        }
        apagar(): void {
            console.log("Vehiculo apagado")
        }    
        isOn(): boolean {
            throw new Error("Method not implemented.")
        }
}

const miCarro = new Automovil("Kia Forte 2023", "Sedan")
miCarro.showInfo()
miCarro.acelerar()
miCarro.encender()
miCarro.frenar()

const miCarro2 = new Automovil("VW Vento 2017", "Sedan")
miCarro2.modelo = "Virtus 2023"
miCarro2.typeCar = "Subcompacto"
console.log(`Mi segundo carro es un ${miCarro2.modelo} tipo ${miCarro2.typeCar}`)

/**
 * EJERCICIO #16
 * Usa un type para definir un alias de función que reciba un string y 
 * devuelva un boolean
 */

type myAlias = (a:string) => boolean


let validarTexto: myAlias = (nbr)=> {
    return nbr.length > 0
}

const respuesta = validarTexto("edgar")

console.log(respuesta)

/**
 * EJERCICIO #17
 * Declara una interfaz que permita la declaracion incremental (dividela
 * en dos partes).
 */

interface Z { 
    x: number
}

interface Z {
    y: number
    suma():number
}

const test : Z ={
    x: 12,
    y: 12,

    suma(){
        return this.x + this.y
    }
}

console.log(`El valor de x es ${test.x} y el valor de y es ${test.y}
    y la suma de los valores es ${test.suma()}`)


/**
 * EJERCICIO #18
 * Crea un type que combine dos tipos usando intersección y usalos
 * en una sola función
 */

type A = {
    a:string
}

type B ={
    b:number
}

type C = {
    c:boolean
}

type D = A & B & C

function element() : D {
    const e : D ={
        a: "Edgar",
        b: 35,
        c:false
    }

    return e
}

const p = element()
console.log(`Mi nombre es ${p.a} y mi edad es ${p.b} y ${p.c ? 'esta vivo' : 'esta muerto'}`)


/**
 * EJERCICIO #19
 * Usa una interfaz para describir la forma de un objeto 
 * con métodos y propiedades de solo lectura.
 */

type event = 'normal'| 'exhausted' | 'reading' | 'running' | 'sleeping' | 'hungry'

interface Status {
    readonly level: number,
    readonly last_event: event,
    readonly stamina:number
    checkAnimus(): void
}

interface UserGame extends Status{
    name: string,
    life: number,
    Move():void,
    Jump(): void,
    LayDown(): void,
    Run():void,
    Kill(): void,
}

const mi: UserGame = {
    name: "Edgar",
    life: 100,

    Move() {
        console.log(`${this.name} se esta moviendo`)
    },

    Jump() {
        console.log(`${this.name} esta saltando!...`)
    },

    LayDown() {
        console.log(`${this.name} se tumbó al suelo`)
    },

    Run() {
        console.log(`${this.name} está corriendo...`)
    },

    Kill() {
        console.log(`${this.name} esta violento...`)
    },

    level: 1,
    last_event: 'normal',
    stamina: 100,

    checkAnimus: function (): void {
        console.log(`El nivel de ánimo de ${this.name} es de 100`)
    }
}

const newPlayer = mi

newPlayer.Jump()
newPlayer.Kill()
newPlayer.LayDown()
newPlayer.Move()
newPlayer.Run()
newPlayer.checkAnimus()

console.log(`EL ultimo evento del NPC es ${newPlayer.last_event}`)
console.log(`EL nivel del NPC es ${newPlayer.level}`)
console.log(`La vida del NPC es ${newPlayer.life}`)
console.log(`EL nombre del NPC es ${newPlayer.name}`)
console.log(`La stamina del NPC es ${newPlayer.stamina}`)

/**
 * EJERCICIO #20
 * Crea un type que represente un objeto inmutable (readonly)
 */

type animal = 'mamifero' | 'reptil' | 'oviviparo'

type especie = {
    readonly name:string,
    readonly race: string,
    readonly type_animal : animal
} 

const miPerro : especie = {
    name: "Rufo",
    race: "Puddle",
    type_animal:"mamifero"
}

console.log(`${miPerro.name} es un ${miPerro.race} de tipo ${miPerro.type_animal}`)

/**
 * EJERCICIO #21
 * Implementa una interfaz genérica para una respuesta de API con 
 * datos y error
 */

interface Response <T> {
    data: T | null,
    error?: string | null
}

/**
 * EJERCICIO #22
 * Crea un type que represente un discriminated union
 * para diferentes tipos de notificaciones.
 */

type Notification = | { stats: 'abierto', openedBy: string } 
                    | { stats: 'cerrado', closedAt: string } 
                    | { stats: 'pendiente', reason: string }
                   

type NotificationStatus = 'abierto' | 'cerrado' | 'pendiente'

const createNotification = ( status: NotificationStatus ) : Notification => {
    switch(status){
        case 'abierto':
            return {
                stats: 'abierto',
                openedBy: 'Me'
            }

        case 'cerrado':
            return {
                stats: 'cerrado',
                closedAt: '22-04-1990'
            }
        
        case 'pendiente':
            return {
                stats: 'pendiente',
                reason: 'Me vale vrg'
            }

        default:
            let  _exhaustive : never = status
            throw new Error(`Estado no manejado: ${_exhaustive}`)

    }
}

const abierto = createNotification('abierto')
const cerrado = createNotification('cerrado')
const pendiente = createNotification('pendiente')

/**
 * EJERCICIO #22
 * Crea un type que represente un discriminated union para diferentes
 * tipos de notificaciones
 */

type notiType = | { origen: "main", message: string }
                | { origen: "security", alert: string }
                | { origen: "support", information : string }

type options = notiType["origen"]

function notiOptions (n: options): notiType {
    switch(n){
        case "main":
            return {
                origen: "main",
                message: "Mensaje desde repositorio principal"
            }
            
        case "security":
            return {
                origen: "security",
                alert: "Mensaje desde reposiotorio de seguridad"
            }
            
        case "support":
            return {
                origen: "support",
                information: "Mensaje desde repositorio de soporte"
            }
        default:
            let _exhaustive : never = n
            throw new Error(`Estado no manejado: ${_exhaustive}`)        
    }

}

/**
 * EJERCICIO #23
 * Usa una interfaz para describir una función que acepte 
 * un callback genérico.
 */

interface myFunction <T> {
    (callback: (valor: T) => void): void
}

/**
 * EJERCICIO #24
 * Crea un type que represente un mapeo de claves a tipos (Record).
 */
type position = 'admin' | 'collaborator' | 'guest'

type Permisos = Record<position, boolean>

const permisos : Permisos ={
    admin: true,
    collaborator: false,
    guest: false
}

/**
 * EJERCICIO #25
 * Compara la compatibilidad entre una interfaz y un type con la 
 * misma estructura en una función.
 */

interface Prueba {
    name:string,
    age:number
}

type prueba ={
    name: string,
    age: number
}

const miPrueba: Prueba = {
    name: "Edgar",
    age: 35
}

const miPrueba2: prueba = {
    name: "Edgar",
    age: 35
}
function getPrueba(p: { name: string, age: number }) {
    console.log(`Mi nombre es ${p.name} y tengo ${p.age}`)
}

getPrueba(miPrueba)
getPrueba(miPrueba2)
getPrueba({ name : "Karina", age: 36 })

type dataA = {
    name: string,
    age: number,
}

type dataB = {
    name: string,
    age: number,
    email: string
}

const myDataA: dataA={
    name: "Edgar",
    age: 35
}

const myDataB: dataB={
    name: "Karina",
    age: 36,
    email: "karina@correo.com"
}

function printA(a: dataA){
    console.log(`Nombre: ${a.name}\nEdad: ${a.age}`)
}

function printB(b: dataB){
    console.log(`Nombre: ${b.name}\nEdad: ${b.email}`)
}

printA(myDataA)
printA(myDataB)
printB(myDataB)
printB(myDataA)