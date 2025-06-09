<script lang="ts">
import { Github } from '@lucide/svelte';
import './Projects.css';
import Projects from "./projects";

let selectedProject = $state(0)
let activeProject = $derived(Projects.find(({id}) => id === selectedProject));
</script>

<section class="projects">
    <div class="panel">
    <h1>Projects</h1>
    <ul>
        {#each Projects as project}
            <li>
                <button onclick={() => selectedProject = project.id} class:selected={selectedProject === project.id}>
                    <h2>{project.name}</h2>
                </button>
            </li>
        {/each}
    </ul>
        <div class="project-details">
            <h1><a href={activeProject?.link} target="_blank">{activeProject?.name}</a></h1>
            <p>{activeProject?.description}</p>
            <img alt={activeProject?.name} src={`../../../src/lib/images/${activeProject?.thumbnail}`} />
            {#if activeProject?.github}
            <a href={activeProject?.github} target="_blank">
                <Github />
            </a>
            {/if}
        </div>
    </div>

</section>