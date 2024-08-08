document.querySelectorAll('.skill-card').forEach(card => {
  card.classList.add('inline-block', 'bg-bg-300', 'border', 'border-white/20', 'px-4', 'py-2', 'rounded-lg');

  const iconSrc = card.getAttribute("icon-src");
  const text = card.getAttribute("caption");

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('flex', 'items-center', 'align-middle');

  const iconDiv = document.createElement('div');
  iconDiv.classList.add('mr-2');

  const iconImg = document.createElement('img');
  iconImg.classList.add('h-6', 'w-6', 'my-1');
  iconImg.src = iconSrc;

  const textDiv = document.createElement('div');
  textDiv.classList.add('font-semibold', 'text-md');
  textDiv.textContent = text;

  iconDiv.appendChild(iconImg);
  cardContainer.appendChild(iconDiv);
  cardContainer.appendChild(textDiv);

  card.innerHTML = '';
  card.appendChild(cardContainer);
});