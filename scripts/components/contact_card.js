const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach(card => {
  const link = card.getAttribute("link");
  const fa_icon = card.getAttribute("fa-icon");
  const title = card.getAttribute("title");
  var subtitle = card.getAttribute("subtitle");
  if(subtitle === null) {
    subtitle = "...";
  }
  card.innerHTML = `
    <a href="${link}">
      <div class="flex align-middle justify-self-start items-center rounded-full bg-bg-400 \
                      border border-white/20 w-64 hover:bg-bg-300 duration-100">
        <button class="-ml-[1px] bg-bg-200 h-16 w-16 rounded-full border border-white/20 text-center leading-5">
          <i class="${fa_icon} text-2xl"></i>
        </button>
        <div class="px-4 w-48">
          <p class="text-md font-semibold">${title}</p>
          <p class="-mt-1 text-sm truncate">${subtitle}</p>
        </div>
      </div>
    </div>
  `;
});