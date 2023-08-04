import { galleryItems } from './gallery-items.js'

const galler = document.querySelector(".gallery")

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
     </a>
     </li>`).join("")
}

function getOriginal(event) {
    if (event.target.tagName !== 'IMG') {
        return
    }
    event.preventDefault()
    const imgOrig = event.target.dataset.source
    const instance = basicLightbox.create(`<img src="${imgOrig}">`)
    instance.show()
}

galler.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
galler.addEventListener('click', getOriginal);