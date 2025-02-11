// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic project loading
const projects = [
    {
        title: "Project 1",
        description: "A responsive web application built with modern technologies.",
        link: "#"
    },
    {
        title: "Project 2",
        description: "E-commerce platform with secure payment integration.",
        link: "#"
    },
    {
        title: "Project 3",
        description: "Social media dashboard with real-time analytics.",
        link: "#"
    }
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" class="btn" target="_blank">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
