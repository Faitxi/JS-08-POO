/* 
Paradigma
Estructurado
Instancia
Plantilla


Paradigma de programacion

Paradigma = La forma de hacer algo

Paradigma de programacion: La forma de programar, la forma de dar soluciones a problemas que se nos presentan.

Paradigmas de programacion (forma de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS).

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python).

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL).

    - Programacion orientada a objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento  o acciones (metodos), resolvemos problemas reales.




CLASE
    - Es una plantilla o molde a partir de la cual se crean los objetos. Esto nos va a permitir definir de forma muy generica cómo debe verse y qué debe de hacer un objeto (estado y comportamiento), con atributos y métodos.

    - Plantillas para crear objetos, nos ayudan a definir un tipo de objeto y crear instancias (materializacion) de este tipo de objetos.


OBJETO
    - La clase o plantilla por sí sola no nos va a servir de nada, solo es un concepto. 
    - El objeto ya tiene una existencia real, porque ocupa un lugar en la memoria y se puede utilizar dentro del programa. 
    - El objeto es la materializacion de la informacion o los datos 

El objeto tiene dos características: 
    - Estado (atributos): Nombre, color, edad.
    - Comportamiento (métodos): Lo que hace, para qué funciona.


    /*Mostrar un objeto similar a este
let Fatima = {
    nombre = "Fatima";
    apellido = "Fernandez";
    edad = 26;
    email = "faitxi.1997@gmail.com";
    telefono = "3322089315";
}
*/



//Creando mi primera clase

class persona {

    // Paso 1. Crear las propiedades o atributos de mi clase, de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    //Paso 3. Defino un constructor que tomará los atributos como "material", para la instancia o creacion de mis objetos.
    //El constructor es una funcion especial, cuya función es la de construir o instanciar objetos.
    //Al pasar los atributos como parametros, es importante cuidar el orden en como fueron decalrados.
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;

    }


    //Paso 2. Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palabra funcion
    hablar() {
        console.log("Hola, estoy hablando...");
    } //cierre de metodo hablar

    dormir() {
        console.log("Zzzzzzzzzz")
    } //cierre de metodo dormir

    mostrarInfo() {
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);

    } //Cierre de mostrar info

} //Cierre de mi clase persona


/*Instancia de objetos del tipo persona

Sintaxis básica de una instancia

variable nombreObjeto = palabra reservada "new"  nombre Clase (parametros o atributos)

*/
//Creando un objeto de la clase persona
let persona1 = new persona("Fatima", "Fernandez", 26, "faitxi.1997@gmail.com", "3322089315");

let persona2 = new persona("Cesar", "Salazar", 26, "csSalazar77@gmail.com", "3322167854");

let persona3 = new persona("Nicole", "Salazar Fernandez", 10, "Nicole@gmail.com", "3314521653");


//imprimir el objeto completo
console.log(persona1);
console.log(persona2);
console.log(persona3);


//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);
console.log(persona2.apellido);
console.log(persona3.apellido);

//Invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();


//Imprimir dos dartos en una misma consola
console.log(persona1.nombre, persona1.apellido);


/* 
GENERALIDADES
    - La diferencia entre case y objeto, radica en que la clase sirve de modelo para crear el objeto, y el objeto es algo que se crea de ese modelo.

    - Si dos objetos pertenecen a una misma clase (por ejemplo la case gatitos, cada uno de ellos tendrá una identidad única) porque tienen distintos atributos y comportamientos.


*/


/* 
Existen 4 pilares de la POO, que nos permiten ampliar las carcateristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia. 
    - Polimorfismo.
    - Encapsulamiento.
    - Abstraccion.
*/

//Creando una nueva clase para aplicar la herencia (extends)
class paciente extends persona {

    //1.Definicion de atributos o propiedades
    doctorAtiende = ""; //Nombre del doctor que atiende
    historialMedico = ""; //si o no el historial
    alergias = ""; //alergias existentes


    //3. Generación de constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono )// "super" indica que traemos cosas de la case superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    //2. Metodos
    mostrarInfo(){

        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email ", this.email);
        console.log("Telefono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial Medico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}


//Instancias de un paciente
let paciente1 = new paciente ("Jesus", "Gonzalez", 31, "jesusgonzalez@gmail.com", "55987654321", "Doctor Simi", "No tiene", "Penicilina");

//Imprimir objeto paciente
console.log(paciente1);

//Uso del metodo mostrar info
paciente1.mostrarInfo();



/*Diferencias entre un objeto literal(normal) y un objeto del tipo JSON
    - Las comillas
    - En un objeto JSON todas las claves y valores van dentro de comillas a diferencia de un objeto normal
*/

//Todas las claves y los valores van dentro de comillas
//Envio de informacion a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}


//Tratar la informacion y queremos sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

//Tenemos un objeto JSON serializado






/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
    - Nombre
    - Nota (calificacion)

    metodos
    - Constructor
    - Metodo evaluacion (si aprueba o no)
    - Metodo imprimirInfo (nombre y la nota)

    logica del negocio
    - If para evaluar la nota (si la nota es menor a 6, está reprobado).
    - Recuperamos la informacion por medio de un prompt.
    - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6).
*/


//Creacion de la clase (3 pasos)

class alumno{


    //1. Atributos o propiedades
    nombre;
    nota;


    //3. Constructor donde le di identidad a mi objeto(this)
    //En el constructor especificamos el parametro con this.
    constructor (nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }



    //2. Metodos
    //Metodo general, un metodo que no requiere personalizacion porque aplica para cualquier objeto.
    //Se trabaja con funciones normales
    evaluacion(nota){

        //condicion para saber si esta aprobado o reprobado
        if(nota >= 6){
            console.log("Aprobado");
        } else {
            console.log("Reprobado")
        }

    } //cierre metodo evaluacion


    //Es un metodo hibrido porque se utiliza el this. 
    imprimirInfo(){
      
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ", this.nota);
    } //cierre metodo imprimirInfo

}


//Instancias de alumnos
let alumno1 = new alumno("Fatima", 3);
let alumno2 = new alumno("Cesar", 9);
let alumno3 = new alumno("Itzel", 6);

//Invocando metodos
alumno1.evaluacion(alumno1.nota); //reprobado
alumno2.evaluacion(alumno3.nota); //aprovado
alumno3.evaluacion(alumno3.nota); //aprovado


