const fetch = require('node-fetch');
const swapapi = require('./script2');

it("should call swapi to check length of results" , () => {
    expect.assertions(2)
    return swapapi.getPeople(fetch).then(data =>{
        expect(data.count).toBeGreaterThan(1);
        expect(data.count).toBeLessThan(100);
    });
});


it("should mock swapi api call and check a few details" , () => {
   
    // mocks api call
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json : () => Promise.resolve({
          count:82,
          results:[1,2,3,4,5,6]  
        })
    }));

    return swapapi.getPeople(mockFetch).then(data =>{
        expect(data.count).toEqual(82);
        
        expect(data.results.length).toEqual(6)
    })


});