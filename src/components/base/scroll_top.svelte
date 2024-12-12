<script>
  import { onMount } from 'svelte';
  import { ArrowUp } from 'lucide-svelte';

  let hideButton = true;

  onMount(() => {
    const threshold = window.innerHeight / 2;
    document.addEventListener("scroll", ()=> {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      hideButton = (scrolled <= threshold);
    })
  });
</script>

<button class="fixed bottom-6 right-6 rounded-full bg-bg-100 duration-500 shadow hover:cursor-pointer active:-translate-y-2" class:translate-x-[100px]={hideButton} on:click={() => { window.scrollTo(0, 0); }}>
  <ArrowUp size={36} class="text-cyan p-2"/>
</button>