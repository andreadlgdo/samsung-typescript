"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var persona1 = new persona_1.Persona('Andrea', 'Delgado Alonso', 22, '71748066A', new Date(2000, 9, 25), 'verde', 'mujer', [new direccion_1.Direccion('carlos asensio bretones', 1, '1º', 'A', 33003, 'Oviedo', 'Asturias')], [new mail_1.Mail('personal', 'andreadlgdo@hotmail.com')], [new telefono_1.Telefono('casa', 985112123), new telefono_1.Telefono('personal', 657834232)], [7, 8, 5]);
var persona2 = new persona_1.Persona('Paco', 'Garcia Alvarez', 42, '23412344F', new Date(1995, 2, 5), 'gris', 'hombre', [new direccion_1.Direccion('avenida galicia', 21, '5º', 'D', 33013, 'Oviedo', 'Asturias')], [new mail_1.Mail('trabajo', 'paco@hotmail.com'), new mail_1.Mail('personal', 'pacoAG@hotmail.com')], [new telefono_1.Telefono('casa', 123456789), new telefono_1.Telefono('personal', 657834232)], [7, 8, 5]);
var persona3 = new persona_1.Persona('Maria', 'Suarez Vazquez', 22, '71748066A', new Date(2000, 9, 25), 'verde', 'mujer', [new direccion_1.Direccion('uria', 1, '3º', 'B', 33002, 'Oviedo', 'Asturias')], [new mail_1.Mail('personal', 'maria@hotmail.com')], [new telefono_1.Telefono('personal', 608234354)], [7, 8, 5]);
var personas = [persona1, persona2, persona3];
personas.forEach(function (persona) { return persona.imprimirInformacion(); });
var personaEncontrada = encontrarPersonaPorDNI(persona2.dni);
personaEncontrada.añadirDireccion(new direccion_1.Direccion('marques lozoya', 12, '3º', 'A', 21003, 'Madrid', 'Madrid'));
personaEncontrada.añadirTelefono(new telefono_1.Telefono('trabajo', 654323444));
personaEncontrada.añadirMails(new mail_1.Mail('otro', 'paco_juegos@gmail.com'));
console.log(personaEncontrada);
function encontrarPersonaPorDNI(dni) {
    var personaEncontrada;
    personas.forEach(function (persona) {
        if (persona.dni === dni)
            personaEncontrada = persona;
    });
    return personaEncontrada;
}
