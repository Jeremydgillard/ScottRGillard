const menubutton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-primary-nav]');
if (menuButton && nav) {
    menubutton.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        menuButton.setAttribute('aria-expamded', String(open));
    });
}