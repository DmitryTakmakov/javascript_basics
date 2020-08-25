'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

const product = new Product('Car', 100000);
product.make25PercentDiscount();
console.log(product);