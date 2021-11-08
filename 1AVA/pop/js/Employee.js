export class Employee{

    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    render(){
        return `id: ${this.id}, name: ${this.name}, salary:${this.salary} €`;
    }
}