const employees = [
    {name: "Aeryn Santana", age: 42, salary: 93500},
    {name: "Giulia Justice", age: 29, salary: 27800},
    {name: "Kaisha Meyer", age: 64, salary: 83100},
    {name: "Traci Waters", age: 36, salary: 62900},
    {name: "Arman Robson", age: 23, salary: 23100},
    {name: "Rosalie Hardy", age: 38, salary: 42500},
    {name: "Cai Spencer", age: 56, salary: 55800},
    {name: "Bodhi Monroe", age: 19, salary: 21900},
    {name: "Kaitlan Howe", age: 41, salary: 48600},
    {name: "Joel Baker", age: 27, salary: 32500},
    {name: "Samuel Baker", age: 80, salary: 80000}
    ];

    let sumSalaryLower40 = employees
        .filter(e => e.age < 40)
        .map(e => e.salary)
        .reduce((x,y) => x + y, 0)

    let capitalizedNames = employees
        .filter(e => e.salary < 30000)
        .map(e => e.name.toUpperCase()).sort().reverse()


  
    let subirPrecioAlViejo = employees
        .filter(e => e.age = )
        .map(e => e.age).sort()[]

        
    
        


        console.log(subirPrecioAlViejo);


