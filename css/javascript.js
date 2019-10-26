const openModalElement = document.getElementById('open-modal');
const modalElement = document.getElementById('modal');
const closeModalElement = document.getElementById('close-modal');


function bindEvents(element, displayProperty) {
    element.addEventListener('click', () => {
        modalElement.style.display = displayProperty;
    });
}

bindEvents(openModalElement, 'block');
bindEvents(closeModalElement, 'none');