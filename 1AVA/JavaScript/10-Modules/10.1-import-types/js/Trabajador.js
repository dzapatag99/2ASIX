export class Trabajador {
    constructor(nombre, cargo) {
        this.nombre = nombre;
        this.cargo = cargo;
    }

    mostrarInformacion() {
        return `Trabajador: ${this.nombre} - Cargo: ${this.cargo}`;
    }
}