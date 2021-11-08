const contenedorComics = document.querySelector('#container-comics');

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch('data/comic.json');
        const data = await res.json();
        console.log(data);
        populateComics(data);
    } catch (error) {
        console.log(error);
    }
};

const populateComics = (data) => {
    const template = document.querySelector('#template-comics').content;
    const fragment = document.createDocumentFragment();
    // console.log(template)
    data.forEach(comic => {
        // console.log(producto)
        // The setAttribute() function creates the attribute if doesn't exist.
        template.querySelector('img').setAttribute('src', "img/" + comic.img);
        template.querySelector('h5').textContent = comic.title;
        template.querySelector('p').textContent = comic.creator;
        // Dataset is only for information
        //template.querySelector('button').dataset.id = producto.id;
        // node template must be cloned to ensure a good performace
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    contenedorComics.appendChild(fragment);
};