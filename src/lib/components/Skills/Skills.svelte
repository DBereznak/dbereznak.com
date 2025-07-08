<script lang="ts">
    import "./Skills.css";
    import skillList from "./skillList";
    import { ChevronRight, ChevronLeft } from '@lucide/svelte';
    
    let skillListState = $state(skillList);
    let move = $state(0);
    let moveStyle = $state(`right: 0px`);
    let temp: any = []

    function moveRight() {
        // let moveSkill = skillListState.shift();
        // temp.push(moveSkill);

        // if (moveSkill !== undefined) {
        //     if (temp.length > 3) {
        //         skillListState = [...skillListState, ...temp];
        //         temp = [];
        //     }
        // }
        move = move + 340;
        moveStyle = `right: ${move}px`;
        console.log(move);
    }

    function moveLeft() {
        // let moveSkill = skillListState.shift();
        // temp.push(moveSkill);

        // if (moveSkill !== undefined) {
        //     if (temp.length > 3) {
        //         skillListState = [...skillListState, ...temp];
        //         temp = [];
        //     }
        // }
        move = move - 340;
        moveStyle = `right: ${move}px`;
        console.log(move);
    }


</script>

<section class="skills">
    <h2>Skills</h2>
    <button class="left {move >= 1500 ? 'disabled' : ''}" onclick={moveRight} disabled={move >= 1500 ? true : false}><ChevronLeft ></ChevronLeft></button>
    <div class="skills-container">

        <ul class="skills-list" style={moveStyle}>
            {#each skillListState as skill}
                <li class="skill-item">
                    <i class={skill.icon} aria-hidden="true"></i>
                    <h3 class="skill-name">{skill.name}</h3>
                    <p class="skill-description">{skill.description}</p>
                </li>
            {/each}
        </ul>
        <div class="gradient"></div>
    </div>
            <button class="right {move === 0 ? 'disabled' : ''}" onclick={moveLeft} disabled={move === 0 ? true : false}><ChevronRight/></button>
</section>