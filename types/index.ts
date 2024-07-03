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

let whatever: any = 1;

let sing1 = (): void =>{
    console.log(123); 
}

let sing2 = (): number =>{
    console.log(123);
    return 123;
}

let unreachable = (): never =>{
    throw  Error("Error"); 
}

// interfaces 
interface RobotProfile {
    age: number,
    name: string
}

// type
type RobotProfile2 = {
    age: number,
    name: string
}

let printBot = (robot: RobotProfile) =>{
    console.log(robot)
}

printBot({age: 1, name: "adrian"})

// ensuring object is type [dangerous]
let bot2 = {} as RobotProfile
console.log(bot2.age)


interface RobotProfile {
    age: number,
    name: string
}

// optional paramaters
type optionalParams = {
    age: number,
    name: string,
    location? : string
}

let printUser = (robot: optionalParams) =>{
    console.log(robot)
} 
printUser({age: 1, name: "adrian"})

class User {
    private username : string;

    constructor(username:string){
        this.username = username;
    }

    public printUsername (): string{
        return this.username;
    }
}

let usr = new User("Adrian007i")
usr.printUsername()

let bothType: string | number = "hello"






// tsc index.tx
// tsc --init

// tsc .\index.ts --watch     acts as nodemon
