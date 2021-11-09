import { Persona } from "./Persona.js";

export class Profesor extends Persona{
    constructor(id, nombre, apellidos, salario){
        super(id, nombre, apellidos)

        this.salario = salario;

    }
}