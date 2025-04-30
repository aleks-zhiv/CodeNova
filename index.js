import{A as L,a as g,i as v,S as w,N as b}from"./assets/vendor-D2MmEr-g.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=c(i);fetch(i.href,t)}})();new L(".accordion-container",{openOnInit:[0],collapse:!1,beforeOpen:e=>{e.classList.add("open")},beforeClose:e=>{e.classList.remove("open")}});const j="/CodeNova/assets/icons-iWerKVYc.svg";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".projects-list"),s=document.querySelector(".load-more-btn"),c=[{img1x:"/img/projects/power-1x-desk.jpg",img2x:"/img/projects/power-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"power pulse webservice",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/mimino-1x-desk.jpg",img2x:"/img/projects/mimino-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"mimino website",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/vyshyvanka-1x-desk.jpg",img2x:"/img/projects/vyshyvanka-2x-dessk.jpg",tech:"React, JavaScript, Node.js, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/chego-1x-desk.jpg",img2x:"/img/projects/chego-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"chego jewelry website",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/energy-1x-desk.jpg",img2x:"/img/projects/energy-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"energy flow webservice",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/fruitbox-1x-desk.jpg",img2x:"/img/projects/fruitbox-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"fruitbox online store",link:"https://github.com/aleks-zhiv/CodeNova.git"},{img1x:"/img/projects/starlight-1x-desk.jpg",img2x:"/img/projects/starlight-2x-desk.jpg",tech:"React, JavaScript, Node.js, Git",title:"starlight studio landing page",link:"https://github.com/aleks-zhiv/CodeNova.git"}];let o=0;s.addEventListener("click",()=>{c.slice(o,o+3).forEach(t=>{const n=document.createElement("li");n.classList.add("project-item"),n.innerHTML=`
       <picture class="project-picture">
    <source srcset="${t.img2x} 2x, ${t.img1x} 1x">
    <img src="${t.img1x}" alt="${t.title}" class="project-image">
  </picture>

        <div class="project-info">
          <p class="project-tech">${t.tech}</p>
          <div class="project-header">
            <h3 class="title">${t.title}</h3>
<div class="visit-button-wrapper">
    <a href="${t.link}" target="_blank" class="visit-button">
     Visit
     <svg class="visit-icon" width="24" height="24">
                  <use href="${j}#icon-visit"></use>
                </svg>
    </a>
</div>
          </div>
        </div>
      `,e.appendChild(n)}),o+=3,o>=c.length&&(s.style.display="none")})});const h=document.querySelector(".mobile-menu"),x=document.querySelector(".open-mob-menu-btn"),S=document.querySelector(".mob-menu-close-btn"),E=document.querySelectorAll(".mob-menu-nav-list-link"),d=document.body,u=document.querySelector("#theme-switcher");x.addEventListener("click",N);S.addEventListener("click",f);localStorage.getItem("theme")==="dark"&&(d.classList.add("dark-theme"),u.checked=!0);u.addEventListener("change",M);E.forEach(e=>{e.addEventListener("click",f)});function N(){h.classList.add("is-open")}function f(){h.classList.remove("is-open")}function M(){u.checked?(d.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(d.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}const y=document.querySelector(".swiper-wrapper");async function q(){try{const{data:e}=await g.get("https://portfolio-js.b.goit.study/api/reviews");!e||e.length===0?$():C(e)}catch(e){v.error({title:"Error",message:e.message,position:"topRight"})}}function C(e){y.innerHTML=e.map(({review:s,author:c,avatar_url:o})=>`
        <div class="swiper-slide">
          <div class="card-review">
            <p class="text-review">${s}</p>
            <div class="author-review">
              <img src="${o}" alt="${c}" class="author-avatar" />
              <p class="author-name">${c}</p>
            </div>
          </div>
        </div>
      `).join(""),R()}function $(){y.innerHTML=`
    <div class="swiper-slide">
      <div class="card-review">
        <p class="text-review">Not found</p>
      </div>
    </div>
  `}function R(){new w(".reviews-swiper",{modules:[b],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".reviews-right-btn",prevEl:".reviews-left-btn"},breakpoints:{768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}})}q();function O(e,s){return g.post("https://portfolio-js.b.goit.study/api/requests",{email:e,comment:s})}const k=document.querySelector(".work-together-form"),P=document.querySelector(".modal-close"),a=document.querySelector(".backdrop"),r=document.getElementById("email"),m=document.querySelector(".success-filled"),l=document.querySelector(".invalid-email");k.addEventListener("submit",T);r.addEventListener("input",z);P.addEventListener("click",p);a.addEventListener("click",B);document.addEventListener("keydown",G);async function T(e){e.preventDefault();const s=e.target.email.value.trim(),c=e.target.message.value.trim();m.classList.add("visually-hidden");try{const o=await O(s,c);o.status===201&&(k.reset(),I(o.data.title,o.data.message))}catch{J()}}function z(){r.validity.valid?(l.classList.add("visually-hidden"),r.classList.remove("no-valid"),m.classList.remove("visually-hidden")):(r.classList.add("no-valid"),l.classList.remove("visually-hidden"),m.classList.add("visually-hidden"),r.value.trim()===""&&l.classList.add("visually-hidden"))}function I(e,s){a.classList.remove("visually-hidden"),document.body.classList.add("no-scroll"),document.querySelector(".modal-title").innerHTML=e,document.querySelector(".modal-text").innerHTML=s}function p(){a.classList.add("visually-hidden"),document.body.classList.remove("no-scroll")}function B(e){e.target.classList.contains("backdrop")&&p()}function G(e){e.key==="Escape"&&!a.classList.contains("visually-hidden")&&p()}function J(){v.show({title:"An error occurred!",message:"Correct the entered data and send again",position:"center",maxWidth:"300px"})}
//# sourceMappingURL=index.js.map
