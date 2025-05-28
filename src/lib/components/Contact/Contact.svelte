<script>
    import "./Contact.css";
    import { Resend} from "resend";
    import { Linkedin, Mail, Github } from '@lucide/svelte';
    let name = $state("");
    let email = $state("");
    let message = $state("");
    let formActive = $state(false);

    const resend = new Resend("re_hiLM9AqV_8JQaFN5XPcW7Jgc1rMbv7gJ8");

      async function onSubmit() {
    try {
        resend.emails.send({
            from: "dbereznak.dev",
            to: email,
            subject: `New message from ${name}`,
            text: message,
        });
      name = "";
      email = "";
      message = "";
      alert("Form submitted");
    } catch (error) {
        console.error("Error sending email:", error);
        alert("There was an error submitting the form. Please try again later.");
    }
  }

    $effect(() => {
    if(email.length < 6 || name.length < 2 || message.length < 10) {
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