
const latestPostEndpoint = "https://www.jeanarcenal.no/wp-json/wp/v2/posts?_embed&per_page=5&orderby=date";

let carousel;
let slides;
let slideWidth;

let currentIndex = 0;
let translateValue = 0;
let nextButton;
let prevButton;


async function getWpPosts() {
    try {   

        const fetchData = await fetch(latestPostEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const jsonData = await fetchData.json();

        

        const mapData = jsonData.map((obj, index) => {
            const { id, title, _embedded, excerpt } = obj;

            const data = {
                id: id,
                title: title,
                embed: _embedded,
                excerpt: excerpt
            };


            return data;
        });

        

        carousel = document.querySelector('.carousel-container');

        if(mapData.length > 0) {
            carousel.style.display = 'flex';
        }

        


        mapData.forEach(obj =>{


            const itemData = `
                <div class="slideItem">
                    <h2>${obj.title.rendered}</h2>
                    <img src="${obj.embed['wp:featuredmedia'][0].source_url}" alt="${obj.embed['wp:featuredmedia'][0].alt_text}">
                    ${obj.excerpt.rendered}

                    <a href='/blog-details-page.html?id=${obj.id}'>View Details</a>
                                                             
                </div>
            `;

            carousel.innerHTML += itemData;
           
        });

        slides = carousel.querySelectorAll('.slideItem');
        slideWidth = slides[0].clientWidth;

      

        nextButton = document.getElementById('next');
        prevButton = document.getElementById('prev');


        nextButton.addEventListener('click', () => executeCarousel('next'));
        prevButton.addEventListener('click', () => executeCarousel('prev'));


        checkButtonStatus();



    } catch(error) {
        console.log(error);
    }
}

getWpPosts();







function executeCarousel(action) {

    console.log(action);
    if(action === 'next' ) {
        translateValue -= slideWidth;
        currentIndex += 1;
    } else if(action === 'prev') {
        translateValue += slideWidth;
        currentIndex -= 1;
    }

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







