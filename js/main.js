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
            setTimeout(type, 80);
        }
    }
    type();
}

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
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
scrollBtn.style.zIndex = '1000';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});