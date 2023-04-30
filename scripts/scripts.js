
const latestPostEndpoint = "https://www.jeanarcenal.no/wp-json/wp/v2/posts?_embed&per_page=5&orderby=date";

async function getLatestPosts() {
    try {   

        const fetchData = await fetch(latestPostEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const jsonData = await fetchData.json();

        //console.log(jsonData);
    

    } catch(error) {
        console.log(error);
    }
}

getLatestPosts();


const carousel = document.querySelector('.carousel-container');
const slides = carousel.querySelectorAll('img');
const slideWidth = slides[0].clientWidth;

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentIndex = 0;
let translateValue = 0;

function nextCarousel() {

    translateValue -= slideWidth;
    currentIndex += 1;
  
    checkButtonStatus();
    
    slides.forEach(el => {
        el.style.transform = `translateX(${translateValue}px)`;
    })
}


function prevCarousel() {

    translateValue += slideWidth;
    currentIndex -= 1;

    checkButtonStatus();
  
    
    slides.forEach(el => {
        el.style.transform = `translateX(${translateValue}px)`;
    })
}


function checkButtonStatus() {
    if(currentIndex === (slides.length - 1)) {
        nextButton.setAttribute('disabled', 'disabled');
    } else {
        nextButton.removeAttribute('disabled');
    }

    if(currentIndex === 0) {
        prevButton.setAttribute('disabled', 'disabled');
    } else {
        prevButton.removeAttribute('disabled');
    }
}

  



nextButton.addEventListener('click', nextCarousel);
prevButton.addEventListener('click', prevCarousel);
