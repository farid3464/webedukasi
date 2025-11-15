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
