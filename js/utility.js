// export const renderItemsDetails = (product) => {
    
//     const {excerpt, _embedded, content} = product;
    
//     return `

//         <div class="topDetails">
//             <h1>${title.rendered}</h1>
//             <img src="${_embedded['wp:featuredmedia'][0].source_url}" alt="${_embedded['wp:featuredmedia'][0].alt_text}">
//         </div>

//         <div class="contentDetails">

//             ${content.rendered}
//         </div>
//     `;
// };


export const fetchingData = async(endpoint) => {
    const fetchData = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });


    return fetchData;

};



