(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=[{photo:"https://yt3.googleusercontent.com/ytc/AIf8zZSINzggIhAM0lksA1MSKIq621ZNF0y_HfCzD-itnw=s176-c-k-c0x00ffffff-no-rj",name:"Anbuselvan",contact:"@CyberDudeNetworks",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"66.8K",rank:1,technoliges_Coverd:["HTML","CSS","Bootstrap","TailwindCSS","Javascript"],url:"https://www.youtube.com/@CyberDudeNetworks"},{photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeaH3mTc73q8tpiYI3Qfbjyde-6uoFiUchw&s",name:"CodebinX",contact:"@CodebinX",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"54K",rank:2,technoliges_Coverd:["HTML","CSS","Javascript","SQL","JQuery"],url:"https://www.youtube.com/@codebinx"},{photo:"https://yt3.googleusercontent.com/ytc/AIf8zZT3E_ujuXZc6wSAB7IdbT0cPt3mjKbxDCdjOnD6=s176-c-k-c0x00ffffff-no-rj",name:"Each One Teach One",contact:"@Each One Teach One",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"49.9K",rank:3,technoliges_Coverd:["TypeScript","Angular","Node JS","Block Chain","Deployment"],url:"https://www.youtube.com/@EachOneTeachOne"},{photo:"https://yt3.googleusercontent.com/lMqV4Au-V6YjSRCLR14LeXMoMR1n5e6BCIaiy6QLKEugBZ2bvVcar9EOiZm1z2PJ3zHclmy2=s900-c-k-c0x00ffffff-no-rj",name:"Balachandra",contact:"@Balachandra_in",disc:"Learn technology in Tamil in 4K Ultra HD resolution with clear explanations and with proper practical examples. We are providing all our content to the viewers for absolutely free.",subscriber:"44.7K",rank:4,technoliges_Coverd:["HTML","CSS","Javascript","React-JS"],url:"https://www.youtube.com/@Balachandra_in"}];console.log(a);const i=document.getElementById("jsonData");a.forEach(o=>{i.innerHTML+=`
  <section class="bg-blue-300 rounded-lg my-4 p-4 shadow-lg">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <!-- Image Section -->
      <div class="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
        <img
          src="${o.photo}"
          alt="${o.name}"
          class="rounded-full w-full h-full object-cover"
        />
      </div>

      <!-- Information Section -->
      <div class="flex-grow space-y-3 text-center sm:text-left">
        <h1 class="text-white text-2xl sm:text-3xl font-bold">${o.name}</h1>
        <h2 class="text-red-700 text-lg font-semibold">${o.contact}</h2>
        <p class="text-white text-base">
          ${o.disc}
        </p>

        <!-- Stats Section -->
        <div class="flex justify-center sm:justify-start space-x-6 mt-4">
          <div class="text-center">
            <h1 class="text-lg font-bold">${o.subscriber}</h1>
            <h2 class="text-orange-800 text-xl">Subscribers</h2>
          </div>
          <div class="text-center">
            <h1 class="text-lg font-bold">${o.rank}</h1>
            <h2 class="text-orange-800 text-xl">Rank</h2>
          </div>
          <div class="text-center">
            <h1 class="text-lg font-bold">${o.technoliges_Coverd.join(", ")}</h1>
            <h2 class="text-orange-800 text-xl">Technologies Covered</h2>
          </div>
        </div>

        <!-- YouTube Link Section -->
        <div class="mt-4">
          <a href="${o.url}" target="_blank" class="flex justify-center sm:justify-start items-center space-x-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
              alt="YouTube Logo"
              class="rounded-full h-16 w-16"
            />
            <span class="text-white text-lg font-semibold">Visit Channel</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  `});const c=document.getElementById("hiddenSection");c.addEventListener("click",()=>{c.children[0].classList.toggle("hidden")});
