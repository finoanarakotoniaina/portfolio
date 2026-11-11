// Effet de scroll sur la navigation
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Correction pour le retour en haut via le menu
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (link.getAttribute('href') === '#accueil') {
            nav.classList.remove('scrolled');
        }
    });
});

// --- GESTION DE LA FENÊTRE MODALE (Pop-up) ---

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
        
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.classList.remove('expanded');
        }
    }
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        const content = event.target.querySelector('.modal-content');
        if (content) {
            content.classList.remove('expanded');
        }
    }
}