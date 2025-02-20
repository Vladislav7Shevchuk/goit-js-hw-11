import{a as m,S as f,i as p}from"./assets/vendor-BWiIACaD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/";function y(o){return m.get(h,{params:{key:"48819918-ba79d398f7b55c76d8c436738",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const i=document.querySelector(".gallery"),d=document.querySelector(".loader-box");function L(o){const{webformatURL:r,largeImageURL:n,tags:s,likes:e,views:t,comments:a,downloads:g}=o;return`
    <div class="photo-card">
      <a href="${n}" target="_blank">
        <img src="${r}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${e}</p>
        <p><strong>Views:</strong> ${t}</p>
        <p><strong>Comments:</strong> ${a}</p>
        <p><strong>Downloads:</strong> ${g}</p>
      </div>
    </div>
  `}const b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function w(o){i.innerHTML=o.map(L).join(""),b.refresh(),u()}function v(){console.log("🚀 Виконано showLoader()"),i.classList.add("hidden"),d.classList.remove("hidden")}function u(){console.log("✅ Виконано hideLoader()"),d.classList.add("hidden"),i.classList.remove("hidden")}function c(){p.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}const S=document.querySelector("form"),l=document.querySelector("#query");S.addEventListener("submit",x);function x(o){o.preventDefault();const r=l.value.trim();if(!r)return c();l.value="",v(),y(r).then(n=>{const s=n.data.hits;if(!s||s.length===0)throw q(),new Error;w(s)}).catch(n=>{console.error(" Помилка:",n),u(),c()})}function q(){const o=document.querySelector(".gallery");o&&(o.innerHTML="")}
//# sourceMappingURL=index.js.map
