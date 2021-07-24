const btn = document.querySelector('.burger-icon');
const navBar = document.querySelector('.navbar');
const navBarList = document.querySelector('.navbar ul');

btn.addEventListener('click', function () {
    if (navBar.classList.contains('navbar')) {
        navBar.classList.toggle('show');
        navBarList.classList.toggle('navbar__list-show');
    }
});