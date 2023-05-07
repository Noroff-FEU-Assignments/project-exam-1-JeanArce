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