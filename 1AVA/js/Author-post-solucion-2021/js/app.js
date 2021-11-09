
import { Author } from './Author.js';
import { Validation } from './Validation.js';
//import { validateNif, validateOblFields, validateDateMinorThanToday } from './validations.js';

let containerAuthors = document.getElementById('container-authors');
let btnSend = document.getElementById('btn-send');
let btnOk = document.getElementById('btn-ok');
let btnClose = document.getElementById('btn-close');
let authorsList = [];

document.addEventListener('DOMContentLoaded', () => {

    btnSend.addEventListener("click", () => {
        validateForm();
    });

    btnOk.addEventListener("click", closeModal);
    btnClose.addEventListener("click", closeModal);

});

function validateForm() {
    let nif = document.getElementById('nif').value;
    let name = document.getElementById('nombre').value;
    let surname = document.getElementById('apellidos').value;
    let date = document.getElementById('fecha').value;
    let rol = document.getElementById('rol').options[document.getElementById('rol').selectedIndex].value;

    if (!Validation.validateNif(nif)) {
        message('El NIF que has introducido no es válido');
        return false;
    }
    if (!Validation.validateDateMinorThanToday(date)) {
        message('La fecha no puede ser superior o igual que la fecha actual');
        return false;
    }

    if (Validation.validateOblFields(nif, name, surname, date)) {
        let newAuthor = new Author(nif, name, surname, date, rol);
        authorsList.push(newAuthor);
        console.table(authorsList);
        populateTable(authorsList);
        message("Autor insertado correctamente");
        document.form.reset();
    } else {
        message("todos los campos son obligatorios");
    }
}

function message(msg) {
    $('#modalMsg').html(msg);
    $('#modalAlert').show();
}

function closeModal() {
    $('#modalAlert').hide();
}

function populateTable(list) {
    containerAuthors.innerHTML="";
    list.forEach( (author, index) => {
        containerAuthors.innerHTML += `    
        <tr>
            <th scope="row">${index+1}</th>
            <td>${author.name}</td>
            <td>${author.surname}</td>
            <td>${author.rol}</td>
      </tr>`;
    });
    
}