const googleSearch = require("./script");

const mockDB = [
    "cats.com",
    "dogs.com",
    "soups.com",
    "categoriesofsoups.com",
    "catarina.com"
]

describe("Search Engine", () => {

    it("this is a test", () => {
        expect("hello").toBe("hello")
    });

    it("is searching google", () => {
        expect(googleSearch("cat", mockDB)).toEqual(["cats.com", "categoriesofsoups.com"])
    })

    it("works with null and undefined", () => {
        expect(googleSearch(undefined, mockDB)).toEqual([])
    });

    it("returns 2 or less results", () => {
        expect(googleSearch("cat", mockDB).length).toBeLessThan(3);
    });
});

