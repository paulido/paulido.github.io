/* ===== Menu mobile ===== */
const boutonMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (boutonMenu && menu) {
    boutonMenu.addEventListener('click', () => {
        const ouvert = menu.classList.toggle('ouvert');
        boutonMenu.setAttribute('aria-expanded', ouvert);
        boutonMenu.textContent = ouvert ? '✕' : '☰';
    });

    // Fermer le menu après un clic sur un lien
    menu.querySelectorAll('a').forEach((lien) => {
        lien.addEventListener('click', () => {
            menu.classList.remove('ouvert');
            boutonMenu.setAttribute('aria-expanded', 'false');
            boutonMenu.textContent = '☰';
        });
    });
}

/* ===== Liste des projets ===== */
const projets = [
    {
        titre: 'Site vitrine',
        description: 'Un site vitrine moderne pour une petite entreprise (HTML, CSS).',
        image: 'images/projet-site-vitrine.jpg',
        lien: '#'
    },
    {
        titre: 'Application de tâches',
        description: 'Une to-do list interactive avec stockage local (JavaScript).',
        image: 'images/projet-todo.jpg',
        lien: '#'
    },
    {
        titre: 'Mini jeu web',
        description: "Un petit jeu de devinettes jouable dans le navigateur.",
        image: 'images/projet-jeu.jpg',
        lien: '#'
    }
];

function afficherProjets() {
    const liste = document.getElementById('liste-projets');
    if (!liste) return;

    projets.forEach((projet) => {
        const carte = document.createElement('article');
        carte.className = 'carte-projet';
        carte.innerHTML = `
            <img src="${projet.image}" alt="Aperçu du projet : ${projet.titre}">
            <h3>${projet.titre}</h3>
            <p>${projet.description}</p>
            <a href="${projet.lien}" target="_blank" rel="noopener">Voir le projet</a>
        `;
        liste.appendChild(carte);
    });
}

afficherProjets();

/* ===== Formulaire de contact (démo) ===== */
const formulaire = document.getElementById('form-contact');
const confirmation = document.getElementById('message-confirmation');

if (formulaire) {
    formulaire.addEventListener('submit', (event) => {
        event.preventDefault();
        formulaire.reset();
        confirmation.hidden = false;
        setTimeout(() => {
            confirmation.hidden = true;
        }, 4000);
    });
}

/* ===== Année dans le pied de page ===== */
document.getElementById('annee').textContent = new Date().getFullYear();