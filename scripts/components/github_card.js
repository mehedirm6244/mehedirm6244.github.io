const githubCards = document.querySelectorAll('.github-card');

githubCards.forEach(card => {
  const repo = card.getAttribute('repository');
  card.classList += " bg-bg-300 border border-white/30 p-6 md:p-8 rounded-lg\
                      sm:w-96 hover:bg-bg-200 hover:cursor-pointer duration-100";

  fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      'User-Agent': 'request'
    }
  }).then(response => response.json())
    .then(data => {
      // Cursed shit. I should learn JS frontend badly
      card.innerHTML = `
        <p class="text-xl font-semibold mb-1"><i class="fa-brands fa-github text-magenta mr-2"></i>
          <a href='https://github.com/${repo}' class="hover:underline">${data.full_name}</a>
        </p>
        <p class="text-md mt-2 h-12 md:h-14 overflow-auto">${data.description}</p>
        <div class="mt-2 space-x-3">
          <button class="text-sm text-white hover:cursor-default">
            <i class="fa-solid fa-code mr-1 text-blue"></i>${data.language}
          </button>
          <button class="text-sm text-white hover:cursor-default">
            <i class="fa-solid fa-star mr-1 text-yellow"></i>${data.stargazers_count}
          </button>
          <button class="text-sm text-white hover:cursor-default">
            <i class="fa fa-code-fork mr-1 text-magenta"></i>${data.forks_count}
          </button>
        </div>
      `;
    })
    .catch(error => {
      console.error('Error fetching data for', repositoryName, ':', error);
    });
});