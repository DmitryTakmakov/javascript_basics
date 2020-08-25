'use strict';

const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
        /*в дз на диске ниже ничего не было. я не знаю, так и было задумано, или это одна из ошибок, 
        о которых вы говорили, но я решил добавить photos и сюда. если так и должно было быть, 
        чтобы усложнить задание, то раскаиваюсь((*/
        photos: []
    }
];

console.log(products.filter(function (product) {
    return product.photos.length != 0;
}));

console.log(products.sort(function(a, b){
    return a.price - b.price; //да, я подсмотрел это на сайте мозиллы...
}))