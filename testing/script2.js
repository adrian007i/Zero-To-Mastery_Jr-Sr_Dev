const fetch = require('node-fetch');

const getPeople = async (fetch) => {
    try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();
        return {
            count: data.count,
            results: data.results
        }
    } catch (error) {
        return console.error('Error fetching data:', error);
    }
}

// (async () => {
//     console.log(await getPeople(fetch));
// })();

module.exports = {getPeople}