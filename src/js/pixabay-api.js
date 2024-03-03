import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const KEY = '42503060-b2c3bebb5268fd59c195d07ac';
const BASE_URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export function getImages(query) {
    const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    });
    return fetch(`${BASE_URL}?${searchParams}`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    fontSize: 'large',
                    close: false,
                    position: 'topRight',
                    messageColor: 'white',
                    timeout: 2000,
                    backgroundColor: 'red',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
            return data;
        })
    .catch((error)=>console.log(error))
   
}



