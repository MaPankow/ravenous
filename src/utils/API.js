const apiKey = process.env.YELP_API_KEY;
const baseURL = 'https://www.yelp.com/developers/v3';

const searchBusinesses = async (category, location, sortBy) => {
    const businessesSearchEndpoint = '/businesses/search';
    const requestParams = `?api_key=${apiKey}`;
    const urlToFetch = `${baseURL}${businessesSearchEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        } 
    } 
    catch (error){
        console.log(error);
    };
}