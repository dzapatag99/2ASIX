
// Sólo se exportará lo que tenga export delante (mediante llaves)

// Exportación de constantes
export const nombreCliente = 'Joan';
export const ahorro = 200;

// Exportación de funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}
export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('El Cliente no tiene saldo');
    }
}


// Clase cliente en javascript equivalente al código anterior
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// - Export default no requiere estar entre llaves
// - Sólo se puede terner uno
// - Se puede importar con un alias
export default function nuevaFuncion() {
    console.log('Este es el export default');
}