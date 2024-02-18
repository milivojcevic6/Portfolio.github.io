document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedTag = this.dataset.filter;
            filterProjects(selectedTag);
            setActiveButton(button);
        });
    });
});

function filterProjects(tag) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const projectTags = project.dataset.tags.split(" ");
        if (tag === 'all' || projectTags.includes(tag)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(button => {
        if (button === activeButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}