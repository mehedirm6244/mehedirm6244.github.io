document.querySelectorAll('.github-card').forEach(card => {
  card.classList.add('bg-bg-300', 'border', 'border-white/20', 'p-6', 'md:p-8', 'rounded-lg', 'w-screen', 'sm:w-96');
  
  const repo = card.getAttribute('repository');

  fetch(`https://api.github.com/repos/${repo}`, { headers: { 'User-Agent': 'request' }})
  .then(response => response.json())
  .then(data => {
    const repoLink = document.createElement('a');
    repoLink.href = `https://github.com/${repo}`;
    repoLink.classList.add('text-xl', 'font-semibold', 'mb-1', 'hover:underline');
    repoLink.innerHTML = `<i class="fa-brands fa-github text-magenta mr-2"></i> ${data.full_name}`;

    const description = document.createElement('p');
    description.classList.add('text-md', 'mt-2', 'h-12', 'md:h-14', 'overflow-auto');
    description.textContent = data.description;

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('mt-2', 'space-x-4');

    const languageButton = document.createElement('button');
    languageButton.classList.add('text-sm', 'text-white', 'hover:cursor-default');
    const languageIcon = document.createElement('i');
    languageIcon.classList.add('fa-solid', 'fa-code', 'mr-1', 'text-blue');
    const languageText = document.createTextNode(`${data.language}`);
    languageButton.appendChild(languageIcon);
    languageButton.appendChild(languageText);

    const starsButton = document.createElement('button');
    starsButton.classList.add('text-sm', 'text-white', 'hover:cursor-default');
    const starsIcon = document.createElement('i');
    starsIcon.classList.add('fa-solid', 'fa-star', 'mr-1', 'text-yellow');
    const starsText = document.createTextNode(`${data.stargazers_count}`);
    starsButton.appendChild(starsIcon);
    starsButton.appendChild(starsText);

    const forksButton = document.createElement('button');
    forksButton.classList.add('text-sm', 'text-white', 'hover:cursor-default');
    const forksIcon = document.createElement('i');
    forksIcon.classList.add('fa-solid', 'fa-code-fork', 'mr-1', 'text-magenta');
    const forksText = document.createTextNode(`${data.forks_count}`);
    forksButton.appendChild(forksIcon);
    forksButton.appendChild(forksText);

    // Append elements to the details container and card
    detailsContainer.appendChild(languageButton);
    detailsContainer.appendChild(starsButton);
    detailsContainer.appendChild(forksButton);

    card.innerHTML = '';
    card.appendChild(repoLink);
    card.appendChild(description);
    card.appendChild(detailsContainer);
  })
  .catch(error => {
    console.error('Error fetching data for', repositoryName, ':', error);
  });
});
