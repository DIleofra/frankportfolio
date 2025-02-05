// Script pour dynamiser les pages

// Effet de changement de couleur du fond de page
function changeBackgroundColor() {
    const colors = ['#f4f4f9', '#f7e1e1', '#e3f2fd', '#e8f5e9', '#fffde7'];
    let index = 0;
    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000); // Change toutes les 5 secondes
}

// Animation d'apparition progressive des sections
function fadeInSections() {
    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1.5s ease-in-out';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.style.opacity = 1;
                    observer.disconnect();
                }
            });
        });
        observer.observe(section);
    });
}

// Effet de survol sur les liens du menu
function enhanceNavLinks() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff5722'; // Couleur au survol
            link.style.textShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Retirer l'effet
            link.style.textShadow = '';
        });
    });
}

// Retour en haut de la page avec animation
function setupBackToTopButton() {
    const button = document.querySelector('.back-to-top');
    button.style.display = 'none';
    button.style.transition = 'opacity 0.3s ease-in-out';
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
            button.style.opacity = 1;
        } else {
            button.style.opacity = 0;
            setTimeout(() => {
                if (button.style.opacity === '0') {
                    button.style.display = 'none';
                }
            }, 300);
        }
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Lancer les animations après le chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
    fadeInSections();
    enhanceNavLinks();
    setupBackToTopButton();
});

const textArray = [
    { text: "Bienvenue sur mon Portfolio", color: "blue" },
    { text: "Développeur logiciel passionné", color: "green" },
    { text: "Expertise en cybersécurité", color: "red" },
    { text: "Créons ensemble", color: "purple" }
];

const dynamicTextElement = document.getElementById("dynamicText");
let index = 0;

function updateText() {
    dynamicTextElement.textContent = textArray[index].text;
    dynamicTextElement.style.color = textArray[index].color;
    index = (index + 1) % textArray.length;
}

setInterval(updateText, 2000); // Change toutes les 2 secondes
updateText(); // Initialiser le texte

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Tous les champs sont obligatoires.');
        event.preventDefault();
    } else {
        alert('Votre message a été envoyé.');
    }
});
