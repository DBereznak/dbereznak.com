<script>
    import "./Contact.css";
    import { Linkedin, Mail, Github } from '@lucide/svelte';
    // Add your component logic here
</script>

<div class="contact-container">
    <h2>Contact me if you need a website or web application</h2>
            <p>
            If you have any questions or would like to discuss a project, feel free to reach out to me via the form below.
            I look forward to hearing from you!
        </p>
    <form class="contact-form" action="https://submit-form.com/bQs6htcOt" data-botpoison-public-key="pk_899617a3-616f-4968-95cd-00899458f65d">
        <label>
            Name <br/>
            <input type="text" name="userName" />
        </label>
        <br />
        <label>
            Email <br/>
            <input type="email" name="userEmail" />
        </label>
        <br />
        <label>
            Message <br/>
            <textarea name="message"></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
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