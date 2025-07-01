import ASI  from '$lib/images/airservices.png';
import Greenscapes  from '$lib/images/greenscapes.png';
import Hangman  from '$lib/images/hangman.png';
import Fanwear  from '$lib/images/fanwear.png';


const Projects = [
{id: 0, name: 'Air Services Inc', link: 'https://stage.airservicesinc.aero', description: 'This website was created for a local aircraft repair station to showcase their maintenance services, certifications, and contact details. Built on WordPress, the site is responsive, easy to update, and designed for a professional yet approachable look. I built the theme. I also designed the logo to match the brand identity.', tech: ['Wordpress', 'HTML', 'CSS', 'PHP'], thumbnail: ASI},
{id: 1, name: 'Greenscapes six', link: 'https://www.greenscapessix.com/', description: 'Website for a Golf course grounds management and landscaping business. It was designed by someone else, but I built it from the ground up in HTML/CSS and vanilla Javascript', tech: ['HTML', 'CSS', 'JavaScript'], thumbnail: Greenscapes},
{id: 2,  name: 'React Hangman', link: 'https://hangman-six-mu.vercel.app/', description: 'This is a Hangman app I made in React. I updated it to the latest version and added some AI generated images for the hangman', tech: ['React 16', 'HTML', 'CSS', 'JavaScript', 'Random Words API'], thumbnail: Hangman, github: 'https://github.com/DBereznak/react-hangman'},
{id: 3,  name: 'Blue Sombrero\'s Fanwear', link: 'https://shop.bluesombrero.com/store/4705/men/men-long-sleeve/3352?color=Heather%20Grey%2FBlack&artwork=production:4705:anhjh12fuwmldzxxi7hm', description: 'This is a youth sports fanwear application developed using Angular 2+. It served as the original demonstration app presented to prospective clients by Blue Sombrero. I contributed to the project as part of a larger development team, with primary responsibility for building the order page.', tech: ['Angular 2+', 'HTML', 'CSS', 'TypeScript', '.NET'], thumbnail: Fanwear},
];

export default Projects;
