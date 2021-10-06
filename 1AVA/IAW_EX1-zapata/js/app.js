const containerTravels = document.querySelector("#container-travels");
let travelsJSON = [];



document.addEventListener("DOMContentLoaded", () => {
    getTravels();
    
});

function getTravels() {
    fetch('data/travels.json')
        .then(result => result.json())
        .then(data => {
            travelsJSON = data;
            populateTravelsHTML(travelsJSON);
            console.log(travelsJSON)
        });
}

function populateTravelsHTML(travelsJSON) {
    travelsJSON.forEach(travel => {
        // Generate card question
        containerTravels.innerHTML +=
            `<article class="entrada">
            <h2><img id="post-1" class="favorite" src="img/favorite-off-icon.png" alt="marcar como favorita" />${travel.title}</h2>
            <img src="${travel.img}" alt="Imagen Viaje a Londres">
            <p>${travel.description}</p>
            <a href="#" class="boton">Leer Más</a>
          </article>`;
    });
}