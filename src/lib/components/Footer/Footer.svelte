<script>
import "./Footer.css";
import Clock from "../Clock/Clock.svelte";

const year = $state( new Date);
</script>

<footer>
    <div class="column">
        <div>
                <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
        </div>
        <div class="copyright">
          &copy; Donny Bereznak { year.getFullYear()}  
        </div>
        <Clock/>
    </div>
</footer>