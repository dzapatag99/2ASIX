import { Product } from "./Product.js";


const box = document.querySelector("#container");

let camisetaJSON = {
    "id": 1,
    "name": "Camiseta Polo Ralph Lauren",
    "price": 200
}

let camiseta = new Product(camisetaJSON)

box.innerHTML = camiseta.render()