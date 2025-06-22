import{a as v,S as b,i as f}from"./assets/vendor-DqB7j7Ix.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function p(o,t){const a="50859517-961673cab883b3cd43a6fc51d";try{return(await v.get("https://pixabay.com/api/",{params:{key:a,q:o,page:`${t}`,per_page:"15",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(e){console.log(e.message)}}function $(o){const t=document.querySelector(".gallery"),a=o.map(({largeImageURL:r,webformatURL:e,tags:s,likes:l,views:c,comments:n,downloads:d})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${r}">
                    <img class="card-img" src="${e}" alt="${s}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${l}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${c}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${n}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${d}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("");t.innerHTML=a,m()}let u=null;function m(){if(u)return u.refresh();u=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function w(o){const t=document.querySelector(".gallery"),a=o.map(({largeImageURL:r,webformatURL:e,tags:s,likes:l,views:c,comments:n,downloads:d})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${r}">
                    <img class="card-img" src="${e}" alt="${s}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${l}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Views</h2>
                                <p class="card-info-text">${c}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Comments</h2>
                                <p class="card-info-text">${n}</p>
                            </li>
                            <li class="card-list-info">
                                <h2 class="card-info-title">Downloads</h2>
                                <p class="card-info-text">${d}</p>
                            </li>
                        </ul>
                    </div>
            </div>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a),m()}function M(){const o=document.querySelector(".gallery");o.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function g(){document.querySelector(".loader").classList.add("hidden")}function S(){document.querySelector(".load-button").classList.remove("hidden")}function L(){document.querySelector(".load-button").classList.add("hidden")}const q=document.querySelector(".form"),x=document.querySelector("input"),B=document.querySelector(".load-button");let h="",i=1;q.addEventListener("submit",P);async function P(o){o.preventDefault(),h=x.value.trim(),y(),M(),L();try{i=1;const t=await p(h,i);if(t.hits.length===0)return f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});$(t.hits),S()}catch(t){console.log(t.message),f.show({message:`Error:${t.message}`,color:"red",position:"topRight"})}finally{g()}}B.addEventListener("click",C);async function C(){y(),i+=1;const o=await p(h,i);try{i*15>=o.totalHits&&(L(),f.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight"})),w(o.hits);const r=document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}catch(t){console.log(t.message)}finally{g()}}
//# sourceMappingURL=index.js.map
