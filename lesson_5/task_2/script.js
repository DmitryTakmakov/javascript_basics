'use strict';

const buttons = document.querySelectorAll('button');
const desc = `<div class="desc">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt blanditiis quae quo sequi nisi 
voluptate, odit repudiandae facere accusantium quisquam expedita, numquam ducimus laudantium sint maiores 
neque. Odio recusandae ipsum quos aut eum natus alias reiciendis, fuga consequuntur odit.
</div>`;

/**
 * функция обрабатывает клик ЛКМ и скрывает изображение в карточке товара
 * @param {MouseEvent} event 
 */
function hideImage(event) {
    let image = event.target.parentNode.children[1];
    image.style.display = 'none';
}

/**
 * функция обрабатывает клик ЛКМ и выводит описание товара вместо его изображения
 * @param {MouseEvent} event 
 */
function showDescription(event) {
    let prodName = event.target.parentNode.children[0];
    prodName.insertAdjacentHTML('afterend', desc);
}

/**
 * Составная функция, которая убирает фото товара и показывает дополнительную информацию в карточке товара
 * @param {MouseEvent} event 
 */
function showMoreInfo(event) {
    hideImage(event);
    showDescription(event);
    event.target.innerText = 'Cancel';
}

/**
 * Функция обрабатывает повторный клик ЛКМ и возвращает изображение в карточку товара
 * @param {MouseEvent} event 
 */
function restoreImage(event) {
    let image = event.target.parentNode.children[2];
    image.style.display = 'inline-block';
}

/**
 * Функция обрабатывает повторный клик ЛКМ и удаляет подробное описание из карточки товара
 * @param {MouseEvent} event 
 */
function removeDescription(event) {
    let description = event.target.parentNode.children[1];
    description.remove();
}

/**
 * Составная функция, которая возвращает фото товара и убирает дополнительную информацию из карточки товара
 * @param {MouseEvent} event 
 */
function hideMoreInfo(event) {
    restoreImage(event);
    removeDescription(event);
    event.target.innerText = 'More info';
}

buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        if (button.innerText === 'More info') {
            showMoreInfo(event);
        } else if (button.innerText === 'Cancel') {
            hideMoreInfo(event);
        }
    })
});