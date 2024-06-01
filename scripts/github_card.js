const githubCards = document.querySelectorAll('.github-card');

githubCards.forEach(card => {
  const repo = card.getAttribute('repository');
  card.classList += " bg-bg-300 border border-white/30 p-6 md:p-8 rounded-lg w-[375px] md:w-[400px] hover:bg-bg-200 duration-100";

  fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      'User-Agent': 'request'
    }
  }).then(response => response.json())
    .then(data => {
      // Cursed shit. I should learn JS frontend badly
      card.innerHTML = `
        <div class="flex align-middle justify-between items-center mb-1 md:mb-2">
            <p class="text-xl md:text-2xl font-semibold">${data.name}</p>
            <button class="text-sm px-4 bg-bg-200 border border-white/20 py-2 rounded-md duration-100 text-white hover:cursor-default">
              <i class="fa-solid fa-star mr-1"></i><span>${data.stargazers_count}</span>
            </button>
          </div>
          <p class="text-md mb-2 h-12 md:h-14 overflow-auto">
            ${data.description}
          </p>
          <div class="mt-4">
            <a href="https://github.com/${repo}">
              <button class="text-sm px-4 py-2 border border-blue/20 rounded-md duration-100 bg-blue/10 text-blue hover:bg-blue/20">
                <i class="fa-solid fa-arrow-up-right-from-square mr-2"></i>View on Github
              </button>
            </a>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error fetching data for', repositoryName, ':', error);
    });
});