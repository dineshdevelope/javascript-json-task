import data from "./../../data/data.json";
console.log(data);

const divEl = document.getElementById("jsonData");

data.forEach((items) => {
  divEl.innerHTML += `
  <section class="bg-blue-300 rounded-lg my-4 p-4 shadow-lg">
    <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
      <!-- Image Section -->
      <div class="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
        <img
          src="${items.photo}"
          alt="${items.name}"
          class="rounded-full w-full h-full object-cover"
        />
      </div>

      <!-- Information Section -->
      <div class="flex-grow space-y-3 text-center sm:text-left">
        <h1 class="text-white text-2xl sm:text-3xl font-bold">${items.name}</h1>
        <h2 class="text-red-700 text-lg font-semibold">${items.contact}</h2>
        <p class="text-white text-base">
          ${items.disc}
        </p>

        <!-- Stats Section -->
        <div class="flex justify-center sm:justify-start space-x-6 mt-4">
          <div class="text-center">
            <h1 class="text-lg font-bold">${items.subscriber}</h1>
            <h2 class="text-orange-800 text-xl">Subscribers</h2>
          </div>
          <div class="text-center">
            <h1 class="text-lg font-bold">${items.rank}</h1>
            <h2 class="text-orange-800 text-xl">Rank</h2>
          </div>
          <div class="text-center">
            <h1 class="text-lg font-bold">${items.technoliges_Coverd.join(
              ", "
            )}</h1>
            <h2 class="text-orange-800 text-xl">Technologies Covered</h2>
          </div>
        </div>

        <!-- YouTube Link Section -->
        <div class="mt-4">
          <a href="${
            items.url
          }" target="_blank" class="flex justify-center sm:justify-start items-center space-x-3">
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
  `;
});

// Hidden section functionality
const hiddenEl = document.getElementById("hiddenSection");
hiddenEl.addEventListener("click", () => {
  hiddenEl.children[0].classList.toggle("hidden");
});
