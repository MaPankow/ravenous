const apiKey = process.env.REACT_APP_YELP_API_KEY;
const baseURL = 'https://api.yelp.com/v3';


const searchBusinesses = async (term, location, sortBy) => {
    const businessesSearchEndpoint = '/businesses/search';
    const requestParams = `?term=${term}&location=${location}&sort_by=${sortBy}`;
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = `${corsAnywhere}${baseURL}${businessesSearchEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`            
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            const businesses = jsonResponse.businesses;
            return businesses;
        } 
    } 
    catch (error){
        console.log(error);
    };
};

export default searchBusinesses;