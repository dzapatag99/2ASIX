
export class Department{

    constructor(id, name){
        this.id = id;
        this.name = name;
    }


    render(){
        return `id: ${this.id}, name: ${this.name}`;
    }
}