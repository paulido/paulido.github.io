/* ===== Mobile menu ===== */
const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', isOpen);
        menuButton.textContent = isOpen ? '\u2715' : '\u2630';
    });

    // Close the menu after clicking a link
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.textContent = '\u2630';
        });
    });
}

/* ===== Project list ===== */
const projects = [
    {
        title: 'Showcase website',
        description: 'A modern showcase website for a small business (HTML, CSS).',
        image: 'images/project-showcase.jpg',
        link: '#'
    },
    {
        title: 'Task app',
        description: 'An interactive to-do list with local storage (JavaScript).',
        image: 'images/project-todo.jpg',
        link: '#'
    },
    {
        title: 'Mini web game',
        description: 'A small guessing game playable in the browser.',
        image: 'images/project-game.jpg',
        link: '#'
    }
];

function displayProjects() {
    const list = document.getElementById('project-list');
    if (!list) return;

    projects.forEach((project) => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="Preview of project: ${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener">View project</a>
        `;
        list.appendChild(card);
    });
}

displayProjects();

/* ===== Contact form (demo) ===== */
const form = document.getElementById('contact-form');
const confirmation = document.getElementById('confirmation-message');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.reset();
        confirmation.hidden = false;
        setTimeout(() => {
            confirmation.hidden = true;
        }, 4000);
    });
}

/* ===== Year in the footer ===== */
document.getElementById('year').textContent = new Date().getFullYear();
