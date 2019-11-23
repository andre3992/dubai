const openModalElement = document.getElementById('open-modal');
const openModalElementFooter = document.getElementById('open-modalfooter');
const modalElement = document.getElementById('modal');
const closeModalElement = document.getElementById('close-modal');
const closeModalElementX = document.getElementById('close-modalx');



function bindEvents(element, displayProperty) {
    element.addEventListener('click', () => {
        modalElement.style.display = displayProperty;
    });
}

bindEvents(openModalElement, 'block');
bindEvents(openModalElementFooter, 'block');
bindEvents(closeModalElement, 'none');
bindEvents(closeModalElementX, 'none');