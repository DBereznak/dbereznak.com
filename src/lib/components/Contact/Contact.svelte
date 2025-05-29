<script lang="ts">
    import "./Contact.css";
    import { Linkedin, Mail, Github } from '@lucide/svelte';
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
        console.log("Testing form submission");
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
    });
</script>

<div class="contact-container">
    <h2>Contact me if you need a website or web application</h2>
            <p>
            If you have any questions or would like to discuss a project, feel free to reach out to me via the form below.
            I look forward to hearing from you!
        </p>
    <form class="contact-form" onsubmit="{onSubmit}">
        <label>
            Name <br/>
            <input type="text" name="name" bind:value={name} />
        </label>
        <br />
        <label>
            Email <br/>
            <input type="email" name="email" bind:value={email} />
        </label>
        <br />
        <label>
            Message <br/>
            <textarea name="message" bind:value={message}></textarea>
        </label>
        <br />
        <button type="submit" class="{formActive ? "" : "disabled"}" disabled="{!formActive}">Send</button>

        {#if submitted}
            <p class="success-message">Thank you for your message!</p>
        {/if}
            <div class="contact-info">
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
    </form>

</div>