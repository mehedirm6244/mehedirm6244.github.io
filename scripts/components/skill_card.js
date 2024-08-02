const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  const icon = card.getAttribute("icon-src");
  const text = card.getAttribute("caption");
  card.classList += " text-center inline-block bg-bg-300 border border-white/20 px-4 py-2 rounded-lg";
  // Cursed shit
  card.innerHTML = `
    <div class="flex items-center align-middle">
      <div class="mr-2"><img class="h-6 w-6 my-1" src="${icon}"></div>
      <div class="font-semibold text-md">${text}</div>
    </div>
  `;
});