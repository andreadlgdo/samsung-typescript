import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

let persona1 = new Persona(
    'Andrea',
    'Delgado Alonso',
    22,
    '71748066A',
    new Date(2000,9, 25),
    'verde',
    'mujer',
    [new Direccion('carlos asensio bretones', 1, '1º', 'A', 33003, 'Oviedo', 'Asturias')],
    [new Mail('personal', 'andreadlgdo@hotmail.com')],
    [new Telefono('casa', 985112123), new Telefono('personal', 657834232)],
    [7, 8, 5]
);
let persona2 = new Persona(
    'Paco',
    'Garcia Alvarez',
    42,
    '23412344F',
    new Date(1995,2, 5),
    'gris',
    'hombre',
    [new Direccion('avenida galicia', 21, '5º', 'D', 33013, 'Oviedo', 'Asturias')],
    [new Mail('trabajo', 'paco@hotmail.com'), new Mail('personal', 'pacoAG@hotmail.com')],
    [new Telefono('casa', 123456789), new Telefono('personal', 657834232)],
    [7, 8, 5]
);
let persona3 = new Persona(
    'Maria',
    'Suarez Vazquez',
    22,
    '71748066A',
    new Date(2000,9, 25),
    'verde',
    'mujer',
    [new Direccion('uria', 1, '3º', 'B', 33002, 'Oviedo', 'Asturias')],
    [new Mail('personal', 'maria@hotmail.com')],
    [new Telefono('personal', 608234354)],
    [7, 8, 5]
);
let personas = [persona1, persona2, persona3];


//Busca una persona por su dni
const personaEncontrada = encontrarPersonaPorDNI(persona2.dni);
//Añade nuevos campos a la persona encontrada
personaEncontrada.añadirDireccion(new Direccion('marques lozoya', 12, '3º', 'A', 21003, 'Madrid', 'Madrid'));
personaEncontrada.añadirTelefono(new Telefono('trabajo', 654323444));
personaEncontrada.añadirMails(new Mail('otro', 'paco_juegos@gmail.com'));

//Imprime los datos de todas las personas registradas
personas.forEach(persona => persona.imprimirInformacion());

function encontrarPersonaPorDNI(dni: string): Persona {
    let personaEncontrada;
    personas.forEach(persona => {
       if (persona.dni === dni)
           personaEncontrada=persona;
    });
    return personaEncontrada;
}