
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const gallery = document.querySelector('.gallery');
let query;
let basicLightbox;

const simpleLightBox = new SimpleLightbox('gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gallery.innerHTML = ''
    query = event.target.elements.search.value;

    getImages(query).then(data => {
        const markup = createMarkup(data);
        gallery.insertAdjacentHTML('beforeend', markup); 
        
    }) 
});

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        const imageUrl = '${el.webformatURL}';
        basicLightbox = new SimpleLightbox(imageUrl, {
            closeText: 'Закрити',
        });
        basicLightbox.show();
    }
});




