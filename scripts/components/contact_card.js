document.querySelectorAll(".contact-card").forEach(card => {
  const link = card.getAttribute("link");
  const faIcon = card.getAttribute("fa-icon");
  const title = card.getAttribute("title");
  const subtitle = card.getAttribute("subtitle") || "...";

  const cardContainer = document.createElement('a');
  cardContainer.href = link;
  cardContainer.classList.add('flex', 'align-middle', 'justify-self-start', 'items-center',
    'rounded-full', 'bg-bg-400', 'border', 'border-white/20', 'hover:bg-bg-300', 'duration-100');

  const iconButton = document.createElement('button');
  iconButton.classList.add('-ml-[1px]', 'bg-bg-200', 'h-14', 'w-14', 'rounded-full', 'border', 'border-white/20', 'text-center');
  const icon = document.createElement('i');
  icon.classList += `${faIcon} text-xl`;
  iconButton.appendChild(icon);

  const textContainer = document.createElement('div');
  textContainer.classList.add('px-3', 'w-36');
  const titleElement = document.createElement('p');
  titleElement.classList.add('text-md', 'font-semibold');
  titleElement.textContent = title;
  const subtitleElement = document.createElement('p');
  subtitleElement.classList.add('text-sm', '-mt-1', 'truncate');
  subtitleElement.textContent = subtitle;

  textContainer.appendChild(titleElement);
  textContainer.appendChild(subtitleElement);
  cardContainer.appendChild(iconButton);
  cardContainer.appendChild(textContainer);

  card.innerHTML = '';
  card.appendChild(cardContainer);
});
