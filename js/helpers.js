const backToTopBtn = document.querySelector('.backToTop');


window.addEventListener('scroll', function() {

   
    if (window.pageYOffset > 100) {
        backToTopBtn.style.display = 'flex';
        
    } else {
        backToTopBtn.style.display = 'none';
       
    }
});


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const burgerBtn = document.getElementById('burgerMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const menuList = document.querySelector('#menuList');

burgerBtn.addEventListener('click', () => {

    closeMobileMenu.classList.add('show');
    menuList.classList.add('show');

});

closeMobileMenu.addEventListener('click', () => {
    closeMobileMenu.classList.remove('show');
    menuList.classList.remove('show');
});