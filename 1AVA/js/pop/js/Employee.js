import { Department } from "./Department.js";
export class Employee {

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = new Department(0, "General");
    }

    getDepartment() {
        return this.department;
    }

    setDepartment(idDep, nameDep) {
        this.department = new Department(idDep, nameDep);
    }
    getMonthSalary(){

        let IRPF = 0;

        if (this.salary <= 20000) IRPF=0.1;
        else if(this.salary >= 20000 && this.salary <= 30000) IRPF=0.15;
        else if (this.salary >= 30000 && this.salary <= 40000) IRPF=0.20;
        else if (this.salary >= 40000) IRPF=0.30;

        let newSalary = this.salary - (this.salary*IRPF);
        return (newSalary/12).toFixed(2);
        

        

    }

    render(){
        return `id: ${this.id}, name: ${this.name}, salary:${this.salary} € $`;
    }
}