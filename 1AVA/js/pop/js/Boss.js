import { Employee } from "./Employee.js";
export class Boss extends Employee{
    constructor(id, name, salary, plus, post) {
        super(id, name, salary);
        this.plus = plus;
        this.post = post;
        this.employeesList = [];
    }

    static primaAnualFija(categoria){
        if (categoria === "A") return 10000;
        else if (categoria === "B") return 20000
        else if ( categoria === "C") return 
    }

}