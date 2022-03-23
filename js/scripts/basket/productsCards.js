'use strict';

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}`;
const productsitemsEl = document.querySelector('.item-products');

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `
        <div class="item-products__card">
            <img class="item-products__photo" src="${pathToProductsImages}/${product.image}" alt="${product.name}" height="420">
                <div class="item-products__overlay">
                    <button class="button item-products__button" data-productId="${product.id}">
                    <img class="item-products__cart" src="${pathToImages}/cart.svg" alt="1">
                    Add to Cart
                    </button>
                </div>
                
            <div class="item-products__data">
                <div class="item-products__title">
                    ${product.name}
                </div>
                <div class="item-products__text">
                    ${product.description}
                </div>
                <div class="item-products__price">
                    $${product.price}
                </div>
            </div>
        </div>
    `;
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} productsitemsEl элемент с классом .products__items
 */
function insertProductsIntoPage(products, productsitemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    productsitemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, productsitemsEl);
addEventListenersForAddToCartButtons();
