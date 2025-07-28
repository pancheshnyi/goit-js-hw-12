import{a as v,S as P,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function g(o,e){return(await v.get("https://pixabay.com/api/",{params:{key:"51328108-e5351328d4cc0773f2b3617f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const w=document.querySelector(".gallery");document.querySelector(".loader");const d=document.querySelector(".more-btn"),y=document.querySelector(".loader-wrapper");console.log("loaderWrapper:",y);const $=new P(".gallery a",{});function L(o){w.innerHTML=o.map(({webformatURL:e,largeImageURL:i,tags:s,likes:t,views:r,comments:c,downloads:B})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${i}">
        <img class="gallery-img" src="${e}" alt="${s}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${t}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${r}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${c}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${B}</p>
                </li>
            </ul>
        </li>
        `).join(""),$.refresh()}function R(){w.innerHTML=""}function b(){y.style.display="flex"}function m(){y.style.display="none"}function q(){d.disabled=!0}function p(){d.disabled=!1}function S(){d.style.display="block"}function n(){d.style.display="none"}const f=document.querySelector(".form"),O=document.querySelector(".more-btn");n();let l=1,u="",h=0;f.addEventListener("submit",x);O.addEventListener("click",A);async function x(o){if(o.preventDefault(),R(),n(),b(),q(),l=1,u=o.target.elements["search-text"].value.trim(),!u){a.warning({message:"Please enter a valid search query",position:"topRight",color:"red",timeout:5e3}),m(),p(),f.reset();return}try{const e=await g(u,l);h=e.totalHits,e.hits.length===0?(a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",timeout:5e3}),n()):(L(e.hits),await M(),l*15<h?(S(),p()):(n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})))}catch{a.error({message:"An error occurred while fetching images.",position:"topRight",timeout:5e3})}finally{m(),f.reset()}}async function A(){b(),q(),n(),l+=1;try{const o=await g(u,l);L(o.hits,!0),await M(),l*15>=h?(n(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})):(S(),p());const e=document.querySelector(".gallery-item");if(e){const{height:i}=e.getBoundingClientRect();window.scrollBy({top:i*2,behavior:"smooth"})}}catch{a.error({message:"An error occurred while fetching more images.",position:"topRight",timeout:5e3})}finally{m()}}async function M(){const o=document.querySelectorAll(".gallery img"),e=[];return o.forEach(i=>{i.complete||e.push(new Promise(s=>{i.onload=()=>s(),i.onerror=()=>s()}))}),Promise.all(e)}
//# sourceMappingURL=index.js.map
