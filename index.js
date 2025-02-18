import{a as f,S as m,i as g}from"./assets/vendor-BWiIACaD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/";function h(o){return f.get(p,{params:{key:"48819918-ba79d398f7b55c76d8c436738",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const a=document.querySelector(".gallery"),l=document.querySelector(".loader-box");function y(o){const{webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:n,downloads:u}=o;return`
    <div class="photo-card">
      <a href="${s}" target="_blank">
        <img src="${r}" alt="${i}" loading="lazy" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${e}</p>
        <p><strong>Views:</strong> ${t}</p>
        <p><strong>Comments:</strong> ${n}</p>
        <p><strong>Downloads:</strong> ${u}</p>
      </div>
    </div>
  `}const L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){a.innerHTML=o.map(y).join(""),L.refresh(),d()}function v(){a.classList.add("hidden"),l.classList.remove("hidden")}function d(){l.classList.add("hidden"),a.classList.remove("hidden")}function S(){g.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}const w=document.querySelector("form"),c=document.querySelector("#query");w.addEventListener("submit",x);function x(o){o.preventDefault();const r=c.value.trim();r&&(c.value="",v(),h(r).then(s=>{q(s.data.hits)}).catch(s=>console.log(s)))}function q(o){d(),(!o||o.length===0)&&S(),b(o)}
//# sourceMappingURL=index.js.map
