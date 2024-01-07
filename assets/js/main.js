import data from "./../../data/data.json";
console.log(data);

const divEl = document.getElementById("jsonData");

data.forEach((items) => {
  divEl.innerHTML += `<section class="bg-blue-300 rounded">
  <div class="flex justify-between py-4">
    <div>
      <img
        src="${items.photo}"
        alt="cyberdudenetworks"
        class="rounded-full"
      />
    </div>
    <div class="space-y-3">
      <div>
        <h1 class="text-white text-4xl">${items.name}</h1>
      </div>
      <div class="text-red-700 font-semibold">
        <h1>${items.contact}</h1>
      </div>
      <div class="text-white font-normal">
        <p>
          ${items.disc}
        </p>
      </div>
      <div class="flex justify-around">
        <div class="text-center">
          <h1>${items.subscriber}</h1>
          <h2 class="text-orange-800 text-2xl font-semibold">Subscriber</h2>
        </div>
        <div class="text-center">
          <h1>${items.rank}</h1>
          <h2 class="text-orange-800 text-2xl font-semibold">Rank</h2>
        </div>
        <div>
        <div >
            <p>${items.technoliges_Coverd.join(" , ")}.</p>
          </div>
          <div class="text-orange-800 text-xl font-semibold text-center">
            <h1>Technoliges Coverd</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
`;
});

const hiddenEl = document.getElementById("hiddenSection");
hiddenEl.addEventListener("click", () => {
  hiddenEl.children[0].classList.remove("hidden");
});
