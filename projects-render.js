
// Json of Projects

const projects = [

    {
        "title": "ESN Slovenia Ticketing App",
        "tags": ["React", "Java Spring Boot"],
        "image": "images/ticketing.png",
        "description": "In the dynamic realm of student events and activities, efficiently coordinating and managing them can pose a considerable challenge. This is where the ESN Ticketing App comes into play. With its user-friendly interface and robust features, the app empowers ESN sections to create, manage, and oversee events, all while providing an effortless experience for event attendees.",
        "link": "https://drive.google.com/file/d/1J9FiGFC2nz4HBGtanHO1I0-wZgKWalo1/view?usp=sharing"
    },
    {
        "title": "FAMNIT stats",
        "tags": ["Data Science","R"],
        "image": "images/famnit-stats.png",
        "description": "System that’s representing faculty data in nice and easy way to understand. " +
            "The visualization system offers multiple views for users to explore various " +
            "aspects of the faculty’s composition. Users can analyze the geographic distribution of students, " +
            "examine enrollment numbers across different academic programs, and assess program popularity. " +
            "Additionally, the system includes a comparative view that highlights the proportion of local and " +
            "international students, providing insights into the institution’s diversity and internationalization " +
            "efforts. These views represent a diverse range of functionalities within the system, empowering users " +
            "with comprehensive information about the faculty.",
        "link": "https://www.studenti.famnit.upr.si/~89222056/docs/Famnit_stats.pdf"
    },
    {
        "title": "Haircut salon website",
        "tags": ["React"],
        "image": "images/arsa.png",
        "description": "Check out this slick website designed for a trendy haircut salon! Built with ReactJs, " +
            "it's not just easy on the eyes but also optimized for search engines, so your salon gets the spotlight " +
            "it deserves. From the welcoming home page to the jaw-dropping gallery, transparent pricing, and " +
            "hassle-free contact section, this site's got it all. And guess what? It looks awesome on any device you " +
            "throw at it!",
        "link": "https://www.frizer-arsa.rs/"
    },
    {
        "title": "Zakladi Loške doline",
        "tags": ["React"],
        "image": "images/dolinaLogo.png",
        "description": "The Treasures of the Loška Valley experience is part of the Digitization of Periphery project. " +
            "It aims to help tourists of Loška Valley to explore it easier and learn more about it. " +
            "\nWhole development of this WebApp was done in ReactJs environment. " +
            "It was created by Marko Kandare, Nikola Kovačević and Milan Milivojčević. ",
        "link": "https://zakladi-loske-doline.vercel.app/"
    },
    {
        "title": "2Eat",
        "tags": ["PHP", "MySql"],
        "image": "images/2eat.jpg",
        "description": "System for ordering food in a university canteen. Helping to prevent food waste. " +
            "This project is implemented with PHP CodeIgniter and MySQL",
        "link": "https://drive.google.com/file/d/1CWsAHoWU320BfbNxofEEDtbZ0oyzzGZZ/view?usp=sharing"
    },
    {
        "title": "AR Tunes",
        "tags": ["Unity"],
        "image": "images/ar.png",
        "description": "Listening to music on an augmented vinyl player or radio, accompanied with objects reacting to the beat. In collaboration with Karolina Trajkovska.",
        "link": "https://gitlab.com/karlyy/vuforiamuseum"
    },
    {
        "title": "FixIt",
        "tags": ["PHP"],
        "image": "images/fixit.png",
        "description": "Information system built on the occasion of the Systems III course. The aim is to bring together car lovers from all over the world in one place! It is designed as a kind of blog where users have the opportunity to post their opinions, experiences and offers to help other car lovers.",
        "link": "https://github.com/milivojcevic6/FixIt"
    }
];



// Function to generate project HTML
function generateProjectHTML(project) {

    return `
    <div class="project shadow-large ${project.tags.join(' ')}" data-tags="${project.tags.join(' ')}">
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}"/>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <h5 style="font-weight: normal;">${project.tags.join(' & ')}</h5>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        </div>
    </div>
    `;
}

// Render projects
const projectsContainer = document.querySelector('.project-row');
projects.forEach(project => {
    const projectHTML = generateProjectHTML(project);
    projectsContainer.innerHTML += projectHTML;
});

console.log(projectsContainer.innerHTML)