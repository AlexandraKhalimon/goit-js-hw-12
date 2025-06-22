import{a as u,S as f,i as h}from"./assets/vendor-67BWzQEt.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(o){return u.get("https://pixabay.com/api/",{params:{key:"50859517-961673cab883b3cd43a6fc51d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log(r)})}function p(o){const i=document.querySelector(".gallery"),r=o.map(({largeImageURL:a,webformatURL:e,tags:t,likes:s,views:c,comments:n,downloads:d})=>`<li class="list-item">
            <div class="card">
                <a class="card-link" href="${a}">
                    <img class="card-img" src="${e}" alt="${t}" />
                </a>
                    <div class="card-info">
                        <ul class="card-list">
                            <li class="card-list-info">
                                <h2 class="card-info-title">Likes</h2>
                                <p class="card-info-text">${s}</p>
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
        </li>`).join("");i.innerHTML=r,y()}let l=null;function y(){if(l)return l.refresh();l=new f(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function S(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form"),q=document.querySelector("input");b.addEventListener("submit",v);function v(o){o.preventDefault();const i=q.value.trim();L(),g(),m(i).then(r=>{if(r.hits.length===0)return h.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});p(r.hits)}).catch(r=>{console.log(r.message)}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
