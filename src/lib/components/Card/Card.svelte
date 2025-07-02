<script lang="ts">
    import "./Card.css";
    let { text, role, name } = $props();
</script>


<div class="card">
    <p>{ text }</p>
    <div class="bottom">
        <h3> { name }</h3>
        <h4> { role }</h4>
    </div>
</div>