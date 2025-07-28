import{a as v,S as B,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();async function w(o,e){return(await v.get("https://pixabay.com/api/",{params:{key:"51328108-e5351328d4cc0773f2b3617f5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const f=document.querySelector(".gallery");document.querySelector(".loader");const u=document.querySelector(".more-btn"),g=document.querySelector(".loader-wrapper");console.log("loaderWrapper:",g);const R=new B(".gallery a",{});function L(o,e=!1){const s=o.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <ul class="descr-list">
          <li class="descr-list-item">
            <h2>Likes</h2>
            <p>${r.likes}</p>
          </li>
          <li class="descr-list-item">
            <h2>Views</h2>
            <p>${r.views}</p>
          </li>
          <li class="descr-list-item">
            <h2>Comments</h2>
            <p>${r.comments}</p>
          </li>
          <li class="descr-list-item">
            <h2>Downloads</h2>
            <p>${r.downloads}</p>
          </li>
        </ul>
      </li>`).join("");e?f.insertAdjacentHTML("beforeend",s):f.innerHTML=s,R.refresh()}function P(){f.innerHTML=""}function b(){g.style.display="flex"}function m(){g.style.display="none"}function q(){u.disabled=!0}function p(){u.disabled=!1}function S(){u.style.display="block"}function a(){u.style.display="none"}const h=document.querySelector(".form"),$=document.querySelector(".more-btn");a();let l=1,c="",y=0;h.addEventListener("submit",A);$.addEventListener("click",H);async function A(o){if(o.preventDefault(),P(),a(),b(),q(),l=1,c=o.target.elements["search-text"].value.trim(),!c){n.warning({message:"Please enter a valid search query",position:"topRight",color:"red",timeout:5e3}),m(),p(),h.reset();return}try{const e=await w(c,l);y=e.totalHits,console.log(e),e.hits.length===0?(n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",timeout:5e3}),a()):(L(e.hits),await M(),l*15<y?(S(),p()):(a(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})))}catch{n.error({message:"An error occurred while fetching images.",position:"topRight",timeout:5e3})}finally{m(),h.reset()}}async function H(){b(),q(),a(),l+=1;try{const o=await w(c,l);L(o.hits,!0),await M();const e=document.querySelector(".gallery-item");if(e){const s=e.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}l*15>=y?(a(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:5e3})):(S(),p())}catch{n.error({message:"An error occurred while fetching more images.",position:"topRight",timeout:5e3})}finally{m()}}async function M(){const o=document.querySelectorAll(".gallery img"),e=[];return o.forEach(s=>{s.complete||e.push(new Promise(r=>{s.onload=()=>r(),s.onerror=()=>r()}))}),Promise.all(e)}
//# sourceMappingURL=index.js.map
