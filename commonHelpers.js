import{i as l,S as f}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function d(i){document.querySelector(".loader").classList.remove("is-hidden");const o="42503060-b2c3bebb5268fd59c195d07ac",s="https://pixabay.com/api/",t=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${t}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red"}):e)}function m(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:t,views:e,comments:n,downloads:u})=>`<li class = "gallery-item">
        <a href="${o}">
             <img src="${r}" alt="${s}" width="360"/>
        </a>
        <ul class = "container-info">
           <li class = "info-item">
             <span>Likes:</span>
             <p>${t}</p>
           </li>
           <li class = "info-item">
             <span>Views:</span>
             <p>${e}</p>
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
     </li>`).join("")}const c=document.querySelector(".search-form"),a=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"top",showCounter:!1});c.addEventListener("submit",g);function g(i){i.preventDefault(),a.innerHTML="";const r=i.target.elements.search.value.trim();if(r.length===0)return l.error({message:"Please, enter search value",fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red"});d(r).then(o=>{const s=m(o.hits);a.insertAdjacentHTML("beforeend",s),p.classList.add("is-hidden"),c.reset(),h.refresh()}).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
