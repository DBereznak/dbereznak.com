<script>
import "./Footer.css";
import Clock from "../Clock/Clock.svelte";
import logo from "$lib/images/svelte-logo.svg";

const year = $state( new Date);
</script>

<footer>
  <a href="dbereznak@gmail.com">dbereznak@gmail.com</a>
  <h1>Donny Bereznak<span>*</span></h1>
  <hr/>
    <div class="column">
        <div>
                <p><span class="text-adjust">Powered by </span> <a href="https://svelte.dev/docs/kit"><img style="width: 150px;" src={logo} alt="svelte logo" /></a></p>
        </div>
        <div class="copyright">
          &copy; { year.getFullYear()} Donny Bereznak. All rights reserved 
        </div>
        <Clock/>
    </div>
</footer>