// Toggle menu mobile
const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');
const navClose  = document.getElementById('navClose');

if (navToggle && navDrawer && navClose) {
    navToggle.addEventListener('click', () => {
        navDrawer.style.display = 'block';
    });

    navClose.addEventListener('click', () => {
        navDrawer.style.display = 'none';
    });

    navDrawer.addEventListener('click', (e)=>{
        if(e.target === navDrawer){
            navDrawer.style.display = 'none';
        }
    });
}

// Animasi fade / slide saat elemen muncul di viewport
const faders = document.querySelectorAll('.fade-section');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    faders.forEach(el => observer.observe(el));
} else {
    // fallback kalau browser lama
    faders.forEach(el => el.classList.add('visible'));
}
