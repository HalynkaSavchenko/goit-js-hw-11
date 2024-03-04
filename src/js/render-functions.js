// Функція розмітки
export function createMarkup(hits) {
    return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
    `<li class = "gallery-item">
        <a href="${largeImageURL}">
             <img src="${webformatURL}" alt="${tags}" width="360"/>
        </a>
        <ul class = "container-info">
           <li class = "info-item">
             <span>Likes:</span>
             <p>${likes}</p>
           </li>
           <li class = "info-item">
             <span>Views:</span>
             <p>${views}</p>
           </li>
           <li class = "info-item"i>
             <span>Comments:</span>
             <p>${comments}</p>
           </li>
           <li class = "info-item">
             <span>Downloads:</span>
             <p>${downloads}</p>
           </li>
        </ul>
     </li>`).join('')
}
