
    function Persona(nombre){
        this.nombre = nombre;

        this.saludar = function(){
            return `${this.nombre} dice hola`
        }
    }

    const david = new Persona("david")
    conso