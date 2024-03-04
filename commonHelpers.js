import{i as c,S as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r="42503060-b2c3bebb5268fd59c195d07ac",o="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red"}):e)}function m(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:u})=>`<li class = "gallery-item">
        <a href="${o}">
             <img src="${r}" alt="${s}" width="360"/>
        </a>
        <ul class = "container-info">
           <li class = "info-item">
             <span>Likes:</span>
             <p>${e}</p>
           </li>
           <li class = "info-item">
             <span>Views:</span>
             <p>${t}</p>
           </li>
           <li class = "info-item"i>
             <span>Comments:</span>
             <p>${n}</p>
           </li>
           <li class = "info-item">
             <span>Downloads:</span>
             <p>${u}</p>
           </li>
        </ul>
     </li>`).join("")}const l=document.querySelector(".search-form"),a=document.querySelector(".gallery");document.querySelector(".loader");const h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"top",showCounter:!1});l.addEventListener("submit",d);function d(i){i.preventDefault(),a.innerHTML="";const r=i.target.elements.search.value.trim();if(r.length===0)return c.error({message:"Please, enter search value",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red"});p(r).then(o=>{const s=m(o.hits);a.insertAdjacentHTML("beforeend",s),l.reset(),h.refresh()}).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
