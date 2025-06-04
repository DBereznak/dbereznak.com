<script>
 import "./Testimonials.css"  
 import testimonials from "./testimonials";
 import Card from "$lib/components/Card/Card.svelte";
</script>
<section class="testimonials">
    {#each Object.entries(testimonials) as [key, value]}
    <Card text={value.testimonial} role={value.role} name={value.name} />
    {/each}
</section>