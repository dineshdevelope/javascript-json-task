(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i=[{photo:"https://yt3.googleusercontent.com/ytc/AIf8zZSINzggIhAM0lksA1MSKIq621ZNF0y_HfCzD-itnw=s176-c-k-c0x00ffffff-no-rj",name:"Anbuselvan",contact:"@CyberDudeNetworks",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"66.8K",rank:1,technoliges_Coverd:["HTML","CSS","Bootstrap","TailwindCSS","Javascript"],url:"https://www.youtube.com/@CyberDudeNetworks"},{photo:"https://yt3.googleusercontent.com/_f3KfeAEdzDQgOVmrRxlRXP6wILAQp9_fkjbuzkTeBAKrhwE99gExsEncOyDSLEnYYRUuTTcsA=s176-c-k-c0x00ffffff-no-rj",name:"CodebinX",contact:"@CodebinX",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"54K",rank:2,technoliges_Coverd:["HTML","CSS","Javascript","SQL","JQuery"],url:"https://www.youtube.com/@codebinx"},{photo:"https://yt3.googleusercontent.com/ytc/AIf8zZT3E_ujuXZc6wSAB7IdbT0cPt3mjKbxDCdjOnD6=s176-c-k-c0x00ffffff-no-rj",name:"Each One Teach One",contact:"@Each One Teach One",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"49.9K",rank:3,technoliges_Coverd:["TypeScript","Angular","Node JS","Block Chain","Deployment"],url:"https://www.youtube.com/@EachOneTeachOne"},{photo:"https://yt3.googleusercontent.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n5e6BCIaiy6QLKEugBZ2bvVcar9EOiZm1z2PJ3zHclmy2=s176-c-k-c0x00ffffff-no-rj",name:"Balachandra",contact:"@Balachandra_in",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"44.7K",rank:4,technoliges_Coverd:["HTML","CSS","Javascript","React-JS","Node-JS"],url:"https://www.youtube.com/@Balachandra_in"}];console.log(i);const l=document.getElementById("jsonData");i.forEach(o=>{l.innerHTML+=`<section class="bg-blue-300 rounded ">
  <div class="flex justify-between py-4">
    <div>
      <img
        src="${o.photo}"
        alt="cyberdudenetworks"
        class="rounded-full"
      />
    </div>
    <div class="space-y-3">
      <div>
        <h1 class="text-white text-4xl">${o.name}</h1>
      </div>
      <div class="text-red-700 font-semibold">
        <h1>${o.contact}</h1>
      </div>
      <div class="text-white font-normal">
        <p>
          ${o.disc}
        </p>
      </div>
      <div class="flex justify-around">
        <div class="text-center">
          <h1>${o.subscriber}</h1>
          <h2 class="text-orange-800 text-2xl font-semibold">Subscriber</h2>
        </div>
        <div class="text-center">
          <h1>${o.rank}</h1>
          <h2 class="text-orange-800 text-2xl font-semibold">Rank</h2>
        </div>
        <div>
        <div >
            <p>${o.technoliges_Coverd.join(" , ")}.</p>
          </div>
          <div class="text-orange-800 text-xl font-semibold text-center">
            <h1>Technoliges Coverd</h1>
          </div>
        </div>
      </div>

      <div>
      <a
              href="${o.url}"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
        alt="youtube-logo"
        class="rounded-full h-20  "
      />
      </a>
      </div>
    </div>
  </div>
</section>;
`});const s=document.getElementById("hiddenSection");s.addEventListener("click",()=>{s.children[0].classList.remove("hidden")});
