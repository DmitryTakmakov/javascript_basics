'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
};

const product = new Product('Bike', 10000);
product.make25PercentDiscount();
console.log(product);