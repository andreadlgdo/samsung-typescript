"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    Telefono.prototype.imprimirTelefono = function () {
        console.log('Telefono: \n Tipo -> ' + this.tipo + '\n Numero -> ' + this.numero);
    };
    return Telefono;
}());
exports.Telefono = Telefono;
