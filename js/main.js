// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typing effect for About Me heading
const aboutHeading = document.querySelector('#about h1');
if (aboutHeading) {
    const text = aboutHeading.textContent;
    aboutHeading.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            aboutHeading.textContent += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }
    type();
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.title = 'Back to top';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 16px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.border = 'none';
scrollBtn.style.background = '#4ea8de';
scrollBtn.style.color = '#fff';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Section reveal on scroll
const sections = document.querySelectorAll('section');
const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(40px)';
        }
    });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', () => {
    // Initial styles for reveal
    sections.forEach(section => {
        section.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
        section.style.opacity = 0;
        section.style.transform = 'translateY(40px)';
    });
    revealSection();
});

// Navbar active link highlight
const navLinks = document.querySelectorAll('.navbar a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});