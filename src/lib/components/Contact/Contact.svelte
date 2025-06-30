<script lang="ts">
    import "./Contact.css";
    import { goto } from "$app/navigation";
    import { Linkedin, Mail, Github } from '@lucide/svelte';
    import astrick from "./astrick.svg";
    let name = $state("");
    let email = $state("");
    let message = $state("");
    let formActive = $state(false);
    let submitted = $state(false);

    function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

      async function onSubmit() {
        await fetch(`https://small-email-api.vercel.app/api/send?name=${name}&email=${email}&message=${message}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            if (response.ok) {
                submitted = true;
                name = "";
                email = "";
                message = "";
            } else {
                alert("Failed to send message. Please try again later.");
            }
        }).catch(error => {
            console.error("Error sending message:", error);
            alert("An error occurred while sending your message. Please try again later.");
        });
  }

    $effect(() => {
    if(!isValidEmail(email) || name.length < 2 || message.length < 10) {
        formActive = false;
    } else {
        formActive = true;  
    }  

    if(submitted) {
        setTimeout(() => {
            goto("/");
            submitted = false;
        }, 3000);
    }
    });
</script>

<div class="contact-container" id="contact">
    <div class="contact-header">
        <div class="connect">
    <h2>Lets Connect</h2>
            <p>
Let's create something amazing together! Reach out I'd love to hear about your project and ideas
        </p>
                <ul>
            <li>
               <a href="mailto:dbereznak@gmail.com"><Mail /></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/donny-bereznak-8b0a1b1b6/"><Linkedin /></a>
            </li>
            <li>
                <a href="https://github.com/DBereznak/dbereznak.com" ><Github /></a>
            </li>
        </ul>
        </div>
        <img src={astrick} alt="astrick" class="astrick" />
        </div>

    <form class="contact-form">
        <label>
            <input type="text" name="name" placeholder="name" bind:value={name} />
        </label>
        <br />
        <label>
            <input type="email" name="email" placeholder="email" bind:value={email} />
        </label>
        <br />
        <label>
            <textarea name="message" placeholder="message" bind:value={message}></textarea>
        </label>
        <br />
        <button type="submit" class="{formActive ? "" : "disabled"}" disabled="{!formActive}" onclick={onSubmit}>Submit Now</button>

        {#if submitted}
            <p class="success-message">Thank you for your message!</p>
        {/if}
            <div class="contact-info">
        </div>
    </form>

</div>