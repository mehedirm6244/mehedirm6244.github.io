<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import { Star, Code, GitFork } from "lucide-svelte";

  export let repo;
  export let useReveal;

  let ownerAvatar = '';
  let repoName = '';
  let repoDesc = '';
  let repoForks = '';
  let repoLang = '';
  let repoStars = '';

  onMount(async () => {
    try {
      const resp = await fetch(`https://api.github.com/repos/${repo}`);
      if (resp.ok) {
        const info = await resp.json();
        ownerAvatar = `${info.owner.avatar_url}&s=64`;
        repoName = info.name;
        repoStars = info.stargazers_count;
        repoDesc = info.description;
        repoForks = info.forks_count;
        repoLang = info.language;
      } else {
        console.error('Failed to fetch repository information');
      }
    } catch (error) {
      console.error('Error fetching repository information:', error);
    }
  });
</script>

<div class="bg-bg-400 p-6 md:p-7 rounded-lg shadow-sm hover:shadow-lg duration-100 sm:w-[304px]" use:reveal={useReveal}>
  <div class="font-medium flex items-center truncate">
    <img src={ownerAvatar} class="h-6 w-6 rounded-full mr-2">
    <a href="https://github.com/{repo}" target="_blank" class="hover:underline">{repoName}</a>
  </div>
  <p class="text-sm h-[60px] overflow-auto text-gray mt-2">{repoDesc}</p>
  <div class="mt-2 space-x-4 text-xs text-white">
    <button class="hover:cursor-default">
      <Code size={16} strokeWidth={2.5} class="inline-block mr-1 -mt-0.5 text-blue" />{repoLang}
    </button>
    <button class="hover:cursor-default">
      <Star size={16} class="inline-block mr-1 -mt-0.5 text-yellow fill-yellow" />{repoStars}
    </button>
    <button class="hover:cursor-default">
      <GitFork size={16} class="inline-block mr-1 -mt-0.5 text-magenta" />{repoForks}
    </button>
  </div>
</div>