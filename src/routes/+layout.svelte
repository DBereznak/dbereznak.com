<script lang="ts">
    import "../lib/global.css";
    import Footer from "$lib/components/Footer/Footer.svelte";
    let { children } = $props();

</script>
{@render children()}
<Footer />