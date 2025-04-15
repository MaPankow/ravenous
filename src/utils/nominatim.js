const getAutocompletion = async(q) => {
   
    const autocompletionEndpoint = 'https://nominatim.openstreetmap.org/search';
    const requestParams = `?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=5`;
    const urlToFetch = `${autocompletionEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        } 
    } 
    catch (error){
        console.log(error);
    };
}

export default getAutocompletion;