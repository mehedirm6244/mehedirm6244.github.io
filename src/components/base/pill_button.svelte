<script>
  export let href = '';
  export let extendedClass = '';
</script>

<a {href}>
  <button class="text-sm px-4 py-2.5 rounded-full font-medium duration-100 bg-gray text-bg-500 shadow-sm hover:bg-white active:scale-90 {extendedClass}" {...$$restProps}>
    <slot />
  </button>
</a>