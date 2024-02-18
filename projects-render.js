
// Json of Projects

const projects = [
    {
        "title": "FixIt",
        "tags": ["PHP"],
        "image": "images/logo.png",
        "description": "Information system built on the occasion of the Systems III course. The aim is to bring together car lovers from all over the world in one place! It is designed as a kind of blog where users have the opportunity to post their opinions, experiences and offers to help other car lovers.",
        "link": "https://github.com/milivojcevic6/FixIt"
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
        "image": "images/logo.png",
        "description": "Information system built on the occasion of the Systems III course. The aim is to bring together car lovers from all over the world in one place! It is designed as a kind of blog where users have the opportunity to post their opinions, experiences and offers to help other car lovers.",
        "link": "https://github.com/milivojcevic6/FixIt"
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
        "image": "images/logo.png",
        "description": "Information system built on the occasion of the Systems III course. The aim is to bring together car lovers from all over the world in one place! It is designed as a kind of blog where users have the opportunity to post their opinions, experiences and offers to help other car lovers.",
        "link": "https://github.com/milivojcevic6/FixIt"
    },
    {
        "title": "AR Tunes",
        "tags": ["Unity"],
        "image": "images/ar.png",
        "description": "Listening to music on an augmented vinyl player or radio, accompanied with objects reacting to the beat. In collaboration with Karolina Trajkovska.",
        "link": "https://gitlab.com/karlyy/vuforiamuseum"
    }
];



// Function to generate project HTML
function generateProjectHTML(project) {

    return `
    <div class="project shadow-large ${project.tags.join(' ')}" data-tags="${project.tags.join(' ')}">
        <div class="project-image">
            <img src="${project.image}" width="300" height="300" alt="${project.title}"/>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <h5 style="font-weight: normal;">${project.tags.join(' & ')} Application</h5>
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