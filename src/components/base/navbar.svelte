<script>
  import { onMount } from 'svelte';
  import { reveal } from 'svelte-reveal';

  import { Github, Text, X } from "lucide-svelte";

  const navbarLinks = [
    { link: '/', caption: 'Home' },
    { link: '/#project', caption: 'Projects' },
  ];

  let scrolledState = false;
  let navMenuToggled = false;

  onMount(() => {
    document.addEventListener("scroll", ()=> {
      let scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      scrolledState = (scrolled > 50);
    })
  });
</script>

<nav class="sticky h-20 px-6 top-0 left-0 right-0 z-40 flex align-middle items-center justify-between bg-bg-400 duration-300" class:shadow-lg={scrolledState}>

  <!-- Left section -->
  <div class="flex items-center align-middle" use:reveal={{ transition: "fly", y:-20 }}>
    <a href="/" class="duration-100 rounded-md hover:bg-white/5">
      <div class="flex align-middle items-center space-x-0 sm:space-x-2 px-3 py-2">
        <img class="h-[32px] rounded-full" src="pfp.png" alt="Profile Picture">
        <div class="text-sm font-semibold hidden sm:block">mehedirm6244</div>
      </div>
    </a>
  </div>

  <!-- Right section -->
  <div class="pr-2" use:reveal={{ transition: "fly", y:-20, delay: 200 }}>
    <!-- Show this button on small screens only -->
    <button class="block md:hidden rounded-md hover:bg-bg-300" class:bg-bg-200={navMenuToggled} on:click={() => { navMenuToggled = !navMenuToggled }}>
      {#if navMenuToggled}
        <X size={36} class="p-2 md:shadow-sm rounded-md hover:bg-white/15"/>
      {:else}
        <Text size={36} class="p-2 md:shadow-sm rounded-md hover:bg-white/15"/>
      {/if}
    </button>

    <div class="fixed top-16 right-6 px-6 py-4 w-52 bg-bg-100 rounded-lg flex gap-2 flex-col md:flex-row md:static md:items-center md:top-0 md:right-0 md:p-0 md:w-auto md:gap-4 md:bg-transparent {!navMenuToggled ? 'hidden md:flex' : ''}">

      {#each navbarLinks as navbarLink}
        <a href={navbarLink.link} class="text-sm font-medium hover:underline">
          {navbarLink.caption}
        </a>
      {/each}

      <div class="mt-2 md:m-0">
        <a href="https://github.com/mehedirm6244" target="_blank">
          <Github size={36} class="bg-gray/10 p-2 md:shadow-sm rounded-md hover:bg-white/15"/>
        </a>
      </div>

    </div>
  </div>
</nav>