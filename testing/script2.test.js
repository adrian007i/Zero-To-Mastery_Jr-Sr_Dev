const fetch = require('node-fetch');
const swapapi = require('./script2');

it("should call swapi to check length of results" , () => {
    expect.assertions(2)
    return swapapi.getPeople(fetch).then(data =>{
        expect(data.count).toBeGreaterThan(1);
        expect(data.count).toBeLessThan(100);
    })
});