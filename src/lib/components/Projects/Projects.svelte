<script lang="ts">
import { Github } from '@lucide/svelte';
import Pill from '../Pill/Pill.svelte';
import './Projects.css';
import Projects from "./projects";

let selectedProject = $state(0)
let activeProject = $derived(Projects.find(({id}) => id === selectedProject));
</script>

<section class="projects">
    <div class="panel">
    <h1>Portfolio</h1>
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
            <div class="left">
                <img alt={activeProject?.name} src={activeProject?.thumbnail} />
            </div>
            <div class="right">
            <h3>About {activeProject?.name}</h3>
            <p>{activeProject?.description}</p>
            {#if activeProject?.link}
             <a href={activeProject?.link} target="_blank">{activeProject?.name}</a>
            {/if}
            {#if activeProject?.github}
            <a href={activeProject?.github} target="_blank">
                <Github />
            </a>
            {/if}
            <Pill tech={activeProject?.tech} />
            </div>
        </div>
    </div>

</section>