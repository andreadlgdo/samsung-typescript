"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Direccion.prototype.imprimirDireccion = function () {
        console.log('Direccion: \n Calle -> ' + this.calle + '\n Numero -> ' + this.numero
            + '\n Piso -> ' + this.piso + '\n Letra -> ' + this.letra + '\n Codigo postal -> ' + this.codigoPostal
            + '\n Poblacion -> ' + this.poblacion + '\n Provincia -> ' + this.provincia);
    };
    return Direccion;
}());
exports.Direccion = Direccion;
