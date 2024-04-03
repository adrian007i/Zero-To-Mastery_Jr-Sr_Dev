const database = [
    "cats.com",
    "dogs.com",
    "soups.com",
    "categoriesofsoups.com",
    "catarina.com"
]


const googleSearch = (input, db) =>{
    input = input.trim("");
    
    const results = db.filter(website => {
        return website.includes(input)
    })

    return results.slice(0,2);
}

// console.log(googleSearch("dogs"));
module.exports =googleSearch;

