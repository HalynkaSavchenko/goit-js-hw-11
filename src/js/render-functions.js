export function createMarkup(data) {
    return data.hits
        .map(el =>
        `<li class="gallery-item">
         <a class="gallery-link" href="${el.largeImageURL}">
         <img src="${el.webformatURL}" alt="${el.tags}"/>
         </a>
          <ul class="container-info">
          <li><p class="item-info"><span class="item-text">Likes: </span>${el.likes}</p></li>
          <li> <p class="item-info"><span class="item-text">Views: </span>${el.views}</p></li>
          <li><p class="item-info"><span class="item-text">Comments: </span>${el.comments}</p></li>
          <li><p class="item-info"><span class="item-text">Downloads: </span>${el.downloads}</p></li>
      </ul>
        </li>`
    )
        .join('')

}
