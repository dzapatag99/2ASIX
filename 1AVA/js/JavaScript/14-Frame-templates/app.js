const contendorProductos = document.querySelector('#container-products');

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

// Get data from a json file
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        console.log(data);
        populateProducts(data);
        handleButtons(data);
    } catch (error) {
        console.log(error);
    }
};

// Example: How to populate a template box width products cards
const populateProducts = (data) => {
    const template = document.querySelector('#template-products').content;
    const fragment = document.createDocumentFragment();
    // console.log(template)
    data.forEach(producto => {
        // console.log(producto)
        // The setAttribute() function creates the attribute if doesn't exist.
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl);
        template.querySelector('h5').textContent = producto.title;
        template.querySelector('p span').textContent = producto.price;
        // Dataset is only for information
        template.querySelector('button').dataset.id = producto.id;
        // node template must be cloned to ensure a good performace
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    contendorProductos.appendChild(fragment);
};


// Example: How to link events to HTML tag
const handleButtons = (data) => {
    const buttons = document.querySelectorAll('.card button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Info button:" + btn.dataset.id);
            const producto = data.find(item => item.id === parseInt(btn.dataset.id));
            producto.cantidad = 1;
            alert(`id:` + btn.dataset.id);
        });
    });
};



