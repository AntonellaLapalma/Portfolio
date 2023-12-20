// NAV ACTIVE
const navLinks = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('.secciones');

        function setActiveNavLink() {
        const scrollPosition = document.querySelector('.scroller').scrollTop;

        sections.forEach(section => {
            const top = section.offsetTop - document.querySelector('.scroller').offsetTop;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
            const sectionId = section.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
                } else {
                link.classList.remove('active');
                }
            });
            }
        });
        }

        window.onload = setActiveNavLink;
        document.querySelector('.scroller').addEventListener('scroll', setActiveNavLink);

// MENU
document.getElementById('menu').addEventListener('click', function() {
    var menu = document.getElementById('lista-menu');
    menu.classList.toggle('visible');
});