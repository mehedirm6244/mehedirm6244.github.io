<script>
  import "../app.scss";

  import { Toaster } from 'svelte-french-toast';

  import PreLoader from '../components/base/preloader.svelte';
  import NavBar from '../components/base/navbar.svelte';
  import ScrollTop from '../components/base/scroll_top.svelte';
  import ContextMenu from '../components/base/contextmenu.svelte';
  import Footer from '../components/base/footer.svelte'
</script>

<Toaster toastOptions={{
  style: '\
    border-radius: 8px;\
    background-color: #252536;\
    color: #c0caf5;\
    padding-left: 16px;\
    padding-right: 16px;\
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\
  ',
  success: { iconTheme: { primary: '#252536', secondary: '#9ece6a' }},
  error: { iconTheme: { primary: '#252536', secondary: '#f7768e' }},
  duration: 3000,
  position: 'bottom-center'
}} />
<PreLoader />
<ContextMenu />
<NavBar />

<slot />

<ScrollTop />
<Footer />