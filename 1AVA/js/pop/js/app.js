import { Employee } from "./Employee.js";
import { Boss } from "./Boss.js"


let eMaria = new Employee(1, "Maria", 20000);
eMaria.setDepartment("1", "Marketing")
let eIvan = new Employee(2, "Ivan", 40000);
eIvan.setDepartment("1", "Marketing")
let eCristina = new Employee(3, "Cristina", 45000);
eCristina.setDepartment("1", "Marketing")


let employeeList = [eMaria, eIvan, eCristina];

let bossMarketing = new Boss(23, "ElCapo", 80000, 20000, "Executive Marketing");


employeeList.forEach(e =>{
    e.salary+=20000;
}

)


document.addEventListener("DOMContentLoaded", () => {
    populateEmployees();
    populateBossData(bossMarketing);
})

const populateBossData = (boss) => {

    const containerBoss = document.querySelector("#boss");
    console.log(containerBoss);
    containerBoss.innerHTML = `
    
        <h2> DATOS DEL JEFE </h2>
        <p>

        <span>#${boss.id}</span>
        <span>${boss.name}</span>
        <span>${boss.salary}</span>
        <span>Plus:  ${boss.salary}</span>
        <span>Post  ${boss.post}</span>

        </p>
    
    `

}

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
        <span>${emp.getMonthSalary()}</span>
        <span>${emp.getDepartment().name}</span>


        </p>
        `
    });
}




