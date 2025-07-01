<script lang="ts">
    import './Pill.css';

    let {tech} = $props();

</script>

<div class="pill-box">
    <ul class="pill-list">
        {#each tech as pill}
            <li>
                <span class="pill">{pill}</span>
            </li>
        {/each}
    </ul>
</div>