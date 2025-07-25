import{a as p,S as f,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/";async function h(i){const r={key:"51328108-e5351328d4cc0773f2b3617f5",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function g(i){n.innerHTML=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:o,comments:m,downloads:d})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${l}">
        <img class="gallery-img" src="${s}" alt="${e}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${t}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${o}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${m}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${d}</p>
                </li>
            </ul>
        </li>
        `).join(""),new f(".gallery a",{}).refresh()}function L(){n.innerHTML=""}function w(){c.style.display="block"}function b(){c.style.display="none"}const u=document.querySelector(".form"),S=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const r=S.value.trim();if(!r){a.warning({message:"Please enter a search term!",position:"topRight",color:"red",timeout:5e3});return}L(),w();try{const s=await h(r);s.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",timeout:5e3}):g(s.hits)}catch{a.error({message:"An error occurred while fetching images.",position:"topRight",color:"red",timeout:5e3})}finally{b()}});
//# sourceMappingURL=index.js.map
