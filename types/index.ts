var sum2 = (a: number,b :number) => {
    return a+b;
}

console.log(sum2(5,2)); 

let isCool: boolean = true;
let age:number = 27;
let username: string = "adrian";


let pets: number[] = [1, 2, 3];
let pets2: Array<number> = [1,2,3];

let user: object = {
    name: 'adrian',
    age: 27
}


let meh: undefined = undefined;
let noo: null = null;

// tuple
let basket: [string,number];
basket = ["Adrian", 27];

// Enum
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: number = Size.Large;
let sizeStr: string = Size[1];




// tsc index.tx
// tsc --init

// tsc .\index.ts --watch     acts as nodemon
