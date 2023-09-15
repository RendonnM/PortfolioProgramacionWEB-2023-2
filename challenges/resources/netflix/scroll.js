const header = document.querySelector('header');
let prevY = window.scrollY;

window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
        header.classList.add('headerup');
    } else {
        header.classList.remove('headerup');
    }
    prevY = window.scrollY;
});