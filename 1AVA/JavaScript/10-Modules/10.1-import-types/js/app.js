// Importamos funciones y variables 
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './datos_cliente.js';

// Si quisieramos importar todo
//import * from './cliente.js'


// Importar objeto de empresa
import { Empresa } from './Empresa.js';


// Probando datos cliente;
nuevaFuncion();
console.log( nombreCliente, ahorro );
console.log( mostrarInformacion(nombreCliente, ahorro) );
tieneSaldo(ahorro);

// Probando clase cliente
const cliente = new Cliente( nombreCliente, ahorro );
console.log(cliente.mostrarInformacion());

// Creando y llenando objeto empresa
let empresa = new Empresa('Young Design', 'Landing page expert');
empresa.addTrabajador("Pedro","Gerente");
console.log(empresa.mostrarInformacion());
empresa.mostrarTrabajadores();