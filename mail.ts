export class Mail {
    tipo: string;
    direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    imprimirMail () {
        console.log('Mail: \n Tipo -> ' + this.tipo + '\n Direccion -> ' + this.direccion);
    }
}