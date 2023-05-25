

export const fetchingData = async(endpoint) => {
    const fetchData = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });


    return fetchData;

};



