export function Product(  {id, name, price}  ) {
    this.id = id;
    this.name = name;
    this.price = price;

}

Product.prototype.priceTotal = function(){

    return this.price * 1.21;
};

Product.prototype.render = function () {

return `
<div>
    <p> id: ${this.id} </p>
    <p> name: ${this.name} </p>
    <p> price: ${this.price} </p>
    <p> Total Price: ${this.priceTotal()} </p>
</div>


`
}