 async function fetchCountryName(countryName) {
    const BASE_URL = 'https://restcountries.eu/rest/v2/name';
    const response = await fetch(`${BASE_URL}/${countryName}`);
    return response.json();
}

export default {fetchCountryName}
