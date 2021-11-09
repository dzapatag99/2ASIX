import { Persona } from "./Persona.js";

export class Alumno extends Persona{
    constructor(id, nombre, apellidos, notas){
        super(id, nombre, apellidos)

        this.notas = notas;

    }
}