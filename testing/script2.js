const fetch = require('node-fetch');

const getPeople = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();
        return {
            count: data.count,
            result: data.result
        }
    } catch (error) {
        return console.error('Error fetching data:', error);
    }
}

// (async () => {
//     console.log(await getPeople());
// })();

module.exports = {getPeople}