<script lang="ts">
    import './CTA.css';
    import me from '$lib/images/AI_generated_me.png';
        function scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<section class="cta">
    <div class="header">
        <button onclick={scrollToContact}>Let's connect</button>
    </div>
        <h1>Hi, I'm Donny,  a Web Developer<span>.</span> <br/> Let's make something amazing together<span>.</span></h1>
        <img src={me} alt="me" />
</section>