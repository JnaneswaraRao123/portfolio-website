// Scroll Reveal Effect
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});



function toggleProjectDetails(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
}

function toggleSkillDetails(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
}



