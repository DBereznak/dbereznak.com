<script lang="ts">
import './style.css';

let getTime = () => {
 const today = new Date;
 return today.toLocaleTimeString();
}
let time = $state(getTime());

$effect(() => {
 const currentTime = setInterval(() => {
    time = getTime();
 }, 1000)
});
</script>

<div class="clock">
<h2> { time }</h2>
</div>
