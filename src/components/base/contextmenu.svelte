<script>
  import { onMount } from 'svelte';
  import { Cut, Copy, Paste } from './clipboard_actions.svelte';

  let contextMenu;
  const clickStatus = {
    target: null,
    href: null,
    isTextInput: false
  };

  const menuItems = [
    {
      text: 'Open in new tab',
      action: () => window.open(clickStatus.href, '_blank'),
      requireLink: true
    },
    {
      text: 'Copy link',
      action: async () => { Copy(clickStatus.href) },
      requireLink: true
    },
    {
      text: 'Cut',
      action: async () => { Cut() },
      requireTextInput: true
    },
    {
      text: 'Copy selection',
      action: () => { Copy(window.getSelection().toString()) },
      showByDefault: true
    },
    {
      text: 'Paste',
      action: async () => { Paste() },
      requireTextInput: true
    },
    {
      text: 'Source repository',
      action: () => { window.open('https://github.com/mehedirm6244/mehedirm6244.github.io', '_blank') },
      showByDefault: true
    }
  ];

  function updateMenuVisibility(flag) {
    contextMenu.style.display = flag ? 'block' : 'none';
  }

  function updateMenuPosition(x, y) {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    const { offsetWidth: menuWidth, offsetHeight: menuHeight } = contextMenu;

    let left = x + menuWidth > windowWidth ? windowWidth - menuWidth - 20 : x;
    let top = y + menuHeight > windowHeight ? windowHeight - menuHeight - 8 : y;

    contextMenu.style.top = `${top}px`;
    contextMenu.style.left = `${left}px`;
  }

  function handleContextMenu(event) {
    event.preventDefault();

    clickStatus.target = event.target;
    clickStatus.href = event.target.closest('a') || null;

    let targetTag = clickStatus.target.tagName.toLowerCase();
    clickStatus.isTextInput = (targetTag === 'textarea' || (targetTag === 'input' && event.target.type === 'text'));

    updateMenuVisibility(1);
    updateMenuPosition(event.clientX, event.clientY);
  }

  onMount(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", (e) => updateMenuVisibility(0));
    document.addEventListener("scroll", (e) => updateMenuVisibility(0));

    updateMenuVisibility(0);
  });
</script>

<div bind:this={contextMenu} class="z-50 bg-bg-100 w-56 shadow-md p-2 rounded-lg select-none fixed">
  {#each menuItems as menuItem}
    {#if (menuItem.requireLink && clickStatus.href) || (menuItem.requireTextInput && clickStatus.isTextInput) || menuItem.showByDefault}
    <button class="px-4 py-1 block w-full text-left rounded hover:bg-white/10" on:click={menuItem.action}>
      {menuItem.text}
    </button>
    {/if}
  {/each}
</div>