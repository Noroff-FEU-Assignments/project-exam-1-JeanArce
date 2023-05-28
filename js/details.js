import { fetchingData } from "./utility.js";

const queryString = document.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const detailsPostEndpoint = `https://www.jeanarcenal.no/wp-json/wp/v2/posts/${id}?_embed`;



async function getPostDetails() {

    try {
      
        const fetchData = await fetchingData(detailsPostEndpoint);
        const jsonData = await fetchData.json();

        console.log(jsonData);

       const { title, _embedded, content } = jsonData;
       console.log(title);
       console.log(_embedded);
       console.log(content);

       const postDetailsContainer = document.getElementById("postDetails");
       console.log(postDetailsContainer);

       const itemDetails = `

            <div class="topDetails">
                <h1>${title.rendered}</h1>
                <img src="${_embedded['wp:featuredmedia'][0].source_url}" alt="${_embedded['wp:featuredmedia'][0].alt_text}">
            </div>

            <div class="contentDetails">

                ${content.rendered}
            </div>
       `;

        postDetailsContainer.innerHTML = itemDetails;


        

        const modal = document.getElementById("myModal");
        const closeBtn = modal.querySelector("#close");
        const modalContent = modal.querySelector('.modal-content');
        const modalImage =  modal.querySelector('#modalImage');

       

        document.addEventListener('click', (evt) => {
            if (evt.target == modal) {
                modalContent.style.opacity = 0;
                modal.style.display = 'none';

              
            }
        });

        closeBtn.addEventListener('click', () => {
            modalContent.style.opacity = 0;
            modal.style.display = 'none';
         
        });


        const images = postDetailsContainer.getElementsByTagName('img');

       

        for (let i = 0; i < images.length; i++) {
            images[i].addEventListener('click', function() {
                const selectedImg = images[i];
               
                modalImage.setAttribute('src', selectedImg.src);
                modalImage.setAttribute('alt', selectedImg.alt);


                modal.style.display = 'block';
                setTimeout(() => {
                    modalContent.style.opacity = 1;
                }, 1000)
                
              
            });
        }




    } catch(error) {
        console.log(error);
    }

}


getPostDetails();