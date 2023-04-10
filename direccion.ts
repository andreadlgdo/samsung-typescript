export class Direccion {
    calle: string;
    numero: number;
    piso: string;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string;

    constructor(calle: string, numero: number, piso: string, letra: string, codigoPostal: number, poblacion: string,
                provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this. letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    imprimirDireccion () {
        console.log('Direccion: \n Calle -> ' + this.calle + '\n Numero -> ' + this.numero
            + '\n Piso -> ' + this.piso + '\n Letra -> ' + this.letra + '\n Codigo postal -> ' + this.codigoPostal
            + '\n Poblacion -> ' + this.poblacion + '\n Provincia -> ' + this.provincia);
    }
}