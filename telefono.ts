export class Telefono {
    tipo: string;
    numero: number;

    constructor(tipo: string, numero: number) {
        this.tipo = tipo;
        this.numero = numero;
    }

    imprimirTelefono () {
        console.log('Telefono: \n Tipo -> ' + this.tipo + '\n Numero -> ' + this.numero);
    }

}