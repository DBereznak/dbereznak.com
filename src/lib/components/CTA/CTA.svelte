<script lang="ts">
    import './CTA.css';
    import me from '$lib/images/my_portrait.png';

    function scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<section class="cta">
    <div class="container">
    <div class="left">
        <img src={me} alt="me" />
    </div>
    <div class="right">
        <h1>- Hi, I'm Donny,  a Web Developer . I create Websites and Apps. Let's make something amazing together.</h1>
        <button onclick={scrollToContact}>Let's connect</button>
    </div>
    </div>
</section>