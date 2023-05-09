console.clear();
const navSlide = () => {
    const resp = document.querySelector('.resp');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    resp.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.2}s`;
            }
            console.log(index / 7);
        });
        resp.classList.toggle('toggle');
    });
}
navSlide();