    import { Resend} from "resend";
    const resend = new Resend("re_hiLM9AqV_8JQaFN5XPcW7Jgc1rMbv7gJ8");

function sendEmail({name, email, message}) {
     resend.emails.send({
            from: "dbereznak.dev",
            to: email,
            subject: `New message from ${name}`,
            text: message,
        });
    // This function is intended to send an email.
    // Currently, it does not implement any functionality.
    console.log(`sendEmail function called ${name}, ${email}, ${message}`);
}

export default sendEmail;