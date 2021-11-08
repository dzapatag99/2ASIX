const containerTravels = document.querySelector("#container-travels");
let travelsJSON = [];
let favsUser = [];



document.addEventListener("DOMContentLoaded", () => {
    getTravels();
    createLocalData();
    addLocalData();
    
});


const getTravels = () =>{
    fetch('data/travels.json')
    .then(result => result.json())
    .then(data => {
        travelsJSON = data;
        populateTravelsHTML(travelsJSON);
    });
}

const populateTravelsHTML = (travelsJSON) =>{
    travelsJSON.forEach(travel => {
        // Generate card question
        containerTravels.innerHTML +=
            `<article class="entrada">
            <h2><img id="post-1" class="favorite" src="img/favorite-${putStars(travel.id)}-icon.png" />${travel.title}</h2>
            <img src="${travel.img}" alt="Imagen Viaje a Londres">
            <p>${travel.description}</p>
            <a href="#" class="boton">Leer Más</a>
          </article>`;
    });
}

const createLocalData = () =>{
    localStorage.setItem('user', JSON.stringify((favsUser)));
}

const addLocalData = () =>{
    let prueba = this.value;
    console.log(prueba)

    
    
}

const putStars = (id) =>{

}