import { fetchingData } from "./utility.js";


let currentPage = 1;
let totalPosts = 0;
let postsLists = [];


const getPostsEndpoint = (currentPageVal) => {
    const blogsListsEndpoint = `https://www.jeanarcenal.no/wp-json/wp/v2/posts?_embed&per_page=10&page=${currentPageVal}&orderby=date`;  
    return blogsListsEndpoint;
};


const gettingPosts = async(endPointValue) => {
    
    // const fetchData = await fetch(endPointValue, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    const fetchData = await fetchingData(endPointValue);

    totalPosts = fetchData.headers.get('X-WP-Total');
    const jsonData = await fetchData.json();


    return jsonData;

};


const insertToPostLists = (data) => {


    const blogListContainer = document.querySelector('.blogListContainer');

    data.forEach(obj => {

        postsLists.push(obj);
        
        const { id, title, _embedded, excerpt } = obj;

          
        const itemHtml = `

            <div class="blogListItem">
                <img src="${_embedded['wp:featuredmedia'][0].source_url}" alt="${_embedded['wp:featuredmedia'][0].alt_text}">
                <h2>${title.rendered}</h2>
                <div class="excerptContainer">
                    ${excerpt.rendered}
                </div>

                <a href="/blog-details-page.html?id=${id}">View Details</a>
            </div>
        `;


        blogListContainer.innerHTML += itemHtml
    })

  


};

const getPosts = async() => {

    try {

      


        const postDatas = await gettingPosts(getPostsEndpoint(currentPage));

        insertToPostLists(postDatas);
        
        const viewMoreBtn = document.querySelector('.viewMore');

        if(postsLists.length && postsLists.length < totalPosts) {
            viewMoreBtn.style.display = 'block';
        }
    
        viewMoreBtn.addEventListener('click', async() => {
            currentPage += 1;
          

            const postDatas = await gettingPosts(getPostsEndpoint(currentPage));

            insertToPostLists(postDatas);

            if(postsLists.length === Number(totalPosts)) {
               
                viewMoreBtn.style.display = 'none';
            }

        });


    } catch(error) {
        console.log(error);
    }
};


getPosts();



