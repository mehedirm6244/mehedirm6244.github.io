<script>
  import { Heart } from "lucide-svelte";

  const socialLinks = [
    { link: 'https://www.reddit.com/user/mebesus/', caption: 'Reddit' },
    { link: 'https://discordapp.com/users/1054038285380497428', caption: 'Discord' },
    { link: 'https://t.me/mehedirm6244', caption: 'Telegram' }
  ];

  const miscLinks = [
    { link: 'https://codeforces.com/profile/mehedirm6244', caption: 'Codeforces' },
    { link: 'https://www.youtube.com/channel/UC7L4k12jFmxllbtfQaPR7nQ', caption: 'YouTube' }
  ]
</script>

<footer class="bg-bg-500 p-8 sm:mt-8">

  <div class="flex flex-col gap-6 p-8 sm:gap-0 sm:flex-row sm:justify-around md:p-16">

    <div>
      <p class="font-medium">Socials</p>
      <ul class="m-1">
        {#each socialLinks as socialLink}
          <li><a href={socialLink.link} class="text-sm text-blue hover:underline">{socialLink.caption}</a></li>
        {/each}
      </ul>
    </div>

    <div>
      <p class="font-medium">Misc</p>
      <ul class="m-1">
        {#each miscLinks as miscLink}
          <li><a href={miscLink.link} class="text-sm text-blue hover:underline">{miscLink.caption}</a></li>
        {/each}
      </ul>
    </div>
    
  </div>

  <div class="p-4 text-center text-sm">
    Made with <Heart size={16} class="inline-block text-red fill-red -mt-0.5" />
    by <a href="https://mehedirm6244.github.io/" class="font-medium hover:underline">mehedirm6244</a>.
    <a href="https://github.com/mehedirm6244/mehedirm6244.github.io" class="text-blue hover:underline">Source code</a>
  </div>
  
</footer>