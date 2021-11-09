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
    {name: "Joel Baker", age: 27, salary: 32500}
    ];
    
let sumSalaryOver40y = employees
    .filter(e => e.age > 40)
    .map(e => e.salary)
    .reduce((x, y) => x + y);

let uppercaseLowerThan40 = employees
    .filter(e => e.salary < 30000)
    .map(e => e.name.toUpperCase())
    .sort();

let aumento15pr40y = employees
    .filter(e => e.age > 40);
    employees.forEach(e => {
        e.salary * 1.15
    });

let empleadoJoven = employees
    .map(e => e.age).sort()[0];

let sumaDoble = employees
    .map(e => e.salary * 2)
    .reduce((total, value) => total + value, 0)
console.log(sumaDoble);

let mediaEdad = (employees
    .map(e => e.age)
    .reduce((a, b) => a + b, 0)
    )/employees.length;



let aumentoSalarioMayores40 = employees
    .filter(e => e.age >=40)
    .map(e => e.name)
    employees.forEach(e => {
        e.salary * 1.15;
    })
console.log(aumentoSalarioMayores40)
