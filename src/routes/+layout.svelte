<script lang="ts">
    import "../lib/global.css";
    import Footer from "$lib/components/Footer/Footer.svelte";
    import Header from "$lib/components/Header/Header.svelte";

    let { children } = $props();

</script>
<Header />
{@render children()}
<Footer />