<script lang="ts">
import './Resume.css';
import  experience  from './experience';
import resume from '$lib/images/Donny_resume.pdf';
</script>

<section class="resume">
    <h3>ABOUT ME</h3>
    <p>
        I am a passionate web developer with a flair for creating dynamic and engaging online experiences. With a strong foundation in both front-end and back-end technologies, I excel at transforming ideas into functional websites. My journey in web development has been marked by a commitment to continuous learning and innovation, ensuring that I stays ahead of industry trends. I believe in the power of collaboration and enjoys working with clients to bring their visions to life, crafting solutions that are not only visually appealing but also user-friendly.
    </p>
    <div class="content">
        <h2>Past Experience</h2>
        <div>
            {#each experience as role}
                <div class="role">
                    <div class="duration">
                    <p>{role.duration}</p>
                    </div>
                    <div class="role-details">
                        <h3>{role.title}</h3>
                        <h4>{role.company}</h4>
                        <p>{role.description}</p>
                    </div>
                </div>
                
            {/each}
        </div>
        <a href={resume} download class="download-button">Download Resume</a>
    </div>
</section>