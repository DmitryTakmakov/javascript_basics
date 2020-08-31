'use strict';

let addToCartButtons = document.querySelectorAll('.addToCartBtn');
addToCartButtons.forEach(function (button){
    button.addEventListener('click', function (event) {
        let id = +event.target.dataset.id;
        let name = event.target.dataset.name;
        let price = +event.target.dataset.price;
        cart.addProductToCart({id: id, name: name, price: price});
    });
});

let cart = {
    products: {},

    /**
     * Функция для добавления товара в корзину.
     * @param {{id: string, name: string, price: number}} product 
     */
    addProductToCart(product) {
        this.changeEmptyCartIcon();
        this.addProduct(product);
        this.drawProductInCart(product);
        this.getTotalPrice();
        this.addRemoveFromCartBtnListeners();
    },

    /**
     * Функция для смены иконки, когда корзина перестает быть пустой
     */
    changeEmptyCartIcon() {
        let cartNotEmpty = Object.keys(this.products).length;
        if (!cartNotEmpty) {
            document.querySelector('.cart-btn-empty').classList.add('invisible');
            document.querySelector('.cart-btn-full').classList.remove('invisible');
        }
    },

    /**
     * Функция для добавления отдельного товара в общий объект с товарами в корзине.
     * @param {{id: string, name: string, price: number}} product 
     */
    addProduct(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                name: product.name,
                price: product.price,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

    /**
     * Функция для отрисовки добавленного товара в корзине.
     * @param {{id: string, name: string, price: number}} product 
     */
    drawProductInCart(product) {
        let productAlreadyInCart = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productAlreadyInCart) {
            productAlreadyInCart.textContent++;
            return;
        }
        let productInCart = `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="productCount" data-id="${product.id}">1</td>
            <td><img src="img/trash.svg" class="removeFromCartBtn" data-id="${product.id}">
        </tr>`;
        document.querySelector('tbody').insertAdjacentHTML('beforeend', productInCart);
    },

    /**
     * Функция для подсчета и отрисовки итоговой суммы товаров в корзине
     */
    getTotalPrice() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        document.querySelector('.total').textContent = sum;
    },
    
    /**
     * Функция для назначения listener каждой кнопке удаления товара из корзины
     */
    addRemoveFromCartBtnListeners() {
        let removeButtons = document.querySelectorAll('.removeFromCartBtn');
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].addEventListener('click', this.removeProductFromCartListener);
        }
    },

    /**
     * Функция для обработки клика мыши.
     * @param {MouseEvent} event 
     */
    removeProductFromCartListener(event) {
        cart.removeProduct(event);
        cart.getTotalPrice();
    },

    /**
     * Функция, которая удаляет товар из корзины и из объекта.
     * @param {MouseEvent} event 
     */
    removeProduct(event) {
        let productId = event.target.dataset.id;
        this.removeProductFromObject(productId);
        this.removeProductFromCart(productId);
        this.changeFullCartIcon();
    },

    /**
     * Функция для удаления товара из объекта корзины.
     * @param {number} id 
     */
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    },

    /**
     * Функция для удаления товара из корзины непосредственно на странице
     * @param {number} id 
     */
    removeProductFromCart(id) {
        let productCount = document.querySelector(`.productCount[data-id="${id}"]`);
        if (productCount.textContent == 1) {
            productCount.parentNode.remove();
        } else {
            productCount.textContent--;
        }
    },

    /**
     * Функция для смены иконки, когда корзина перестает быть пустой
     */
    changeFullCartIcon() {
        let cartEmpty = Object.keys(this.products).length;
        if (!cartEmpty) {
            document.querySelector('.cart-btn-empty').classList.remove('invisible');
            document.querySelector('.cart-btn-full').classList.add('invisible');
        }
    }
};
