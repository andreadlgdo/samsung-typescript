import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

 export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;
    cumpleaños: Date;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[];
    mails: Mail[];
    telefonos: Telefono[];
    notas: number[];

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string,
                sexo: string, direcciones: Direccion[], mails: Mail[], telefonos: Telefono[], notas: number[]) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    imprimirInformacion () {
        console.log('--- Datos personales: --- \n Nombre -> ' + this.nombre + '\n Apellidos -> ' + this.apellidos
            + '\n Edad -> ' + this.edad + '\n DNI -> ' + this.dni + '\n Cumpleaños -> ' + this.cumpleaños
            + '\n Color Favorito -> ' + this.colorFavorito + '\n Sexo -> ' + this.sexo);
        console.log('Direcciones:');
        this.direcciones.forEach(direccion => direccion.imprimirDireccion());
        console.log('Mails:');
        this.mails.forEach(mail => mail.imprimirMail());
        console.log('Telefonos:');
        this.telefonos.forEach(telefono => telefono.imprimirTelefono());
        console.log('Notas:');
        this.notas.forEach(nota => console.log('Nota -> '+ nota))
    }

    añadirDireccion (direccion: Direccion){
        this.direcciones.push(direccion);
    }
     añadirTelefono (telefono: Telefono){
         this.telefonos.push(telefono);
     }
     añadirMails (mail: Mail){
        this.mails.push(mail);
     }

}

