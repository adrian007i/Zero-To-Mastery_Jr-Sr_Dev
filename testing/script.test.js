const googleSearch = require("./script");

it("this is a test", () => {
    expect("hello").toBe("hello")
});

const mockDB = [
    "cats.com",
    "dogs.com",
    "soups.com",
    "categoriesofsoups.com",
    "catarina.com"
]


it("is searching google" , ()=>{
    expect(googleSearch("cat",mockDB)).toEqual(["cats.com", "categoriesofsoups.com"])    
})