<script lang="ts">
    import "./Card.css";
    let { text, role, name } = $props();
</script>


<div class="card">
    {@html text}
    <h3> { name }</h3>
    <h4> { role }</h4>
</div>