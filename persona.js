"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
    Persona.prototype.imprimirInformacion = function () {
        console.log('--- Datos personales: --- \n Nombre -> ' + this.nombre + '\n Apellidos -> ' + this.apellidos
            + '\n Edad -> ' + this.edad + '\n DNI -> ' + this.dni + '\n Cumpleaños -> ' + this.cumpleaños
            + '\n Color Favorito -> ' + this.colorFavorito + '\n Sexo -> ' + this.sexo);
        console.log('Direcciones:');
        this.direcciones.forEach(function (direccion) { return direccion.imprimirDireccion(); });
        console.log('Mails:');
        this.mails.forEach(function (mail) { return mail.imprimirMail(); });
        console.log('Telefonos:');
        this.telefonos.forEach(function (telefono) { return telefono.imprimirTelefono(); });
        console.log('Notas:');
        this.notas.forEach(function (nota) { return console.log('Nota -> ' + nota); });
    };
    Persona.prototype.añadirDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.añadirTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.añadirMails = function (mail) {
        this.mails.push(mail);
    };
    return Persona;
}());
exports.Persona = Persona;
