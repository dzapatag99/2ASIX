import { Employee } from "./Employee.js";


let eMaria = new Employee(1, "Maria", 20000);
let eIvan = new Employee(2, "Ivan", 40000);
let eCristina = new Employee(3, "Cristina", 45000);


let employeeList = [eMaria, eIvan, eCristina];

employeeList.forEach(e =>{
    e.salary+=20000;
}

)

console.log(eMaria.render() );
console.log(eIvan.render() );
console.log(eCristina.render() );

document.addEventListener("DOMContentLoaded", () => {
    populateEmployees();
})

const btnAddEmployee = document.querySelector("#add-employee")
btnAddEmployee.addEventListener("click", ()=> {
    let idInput = document.querySelector("#id-employee").value;
    let nameInput =  document.querySelector("#name-employee").value;
    if (employeeList.some( e => e.id==idInput || e.name==nameInput) ){
        alert("Este id o nombre ya existe");
        return false;
    }
    let employee = new Employee(
        document.querySelector("#id-employee").value,
        document.querySelector("#name-employee").value,
        document.querySelector("#salary-employee").value
    );

    employeeList.push(employee);
    populateEmployees();
});

function populateEmployees(){

    const listTag = document.querySelector("#list");
    listTag.innerHTML="";

    employeeList.forEach(emp =>{
        listTag.innerHTML+=
        `
        <p> 

        <span>#${emp.id}</span>
        <span>${emp.name}</span>
        <span>${emp.salary}</span>

        </p>
        `
    });
}



