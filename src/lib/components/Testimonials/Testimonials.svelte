<script>
 import "./Testimonials.css"  
 import testimonials from "./testimonials";
 import Card from "$lib/components/Card/Card.svelte";
 let randomTestimonial = []
 const iArray = Array.from({ length: testimonials.length }, (_, i) => i);
 console.log(iArray);
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * iArray.length);
        randomTestimonial.push(testimonials[iArray[randomNumber]]);
        iArray.splice(randomNumber, 1); // Remove the selected index to avoid duplicates
    }

</script>
<section class="testimonials">
    <h1>What People say about me.</h1>
    <div class="testimonial-cards">
        {#each Object.entries(randomTestimonial) as [key, value]}
        <Card text={value.testimonial} role={value.role} name={value.name} />
        {/each}
    </div>
</section>