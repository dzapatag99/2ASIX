import {Trabajador} from './Trabajador.js';

export class Empresa {
    constructor(nombre, categoria) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.trabajadores=[];
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre} - Categoria: ${this.categoria}`;
    }

    addTrabajador(nombre, cargo){
        const employee = new Trabajador(nombre, cargo);
        this.trabajadores.push(employee);
    }

    mostrarTrabajadores(){
        this.trabajadores.forEach(e => {
            //console.log("Trabajador:", e.nombre);
            console.log(e.mostrarInformacion());
        });
    }
}