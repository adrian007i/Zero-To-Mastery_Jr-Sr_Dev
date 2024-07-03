var sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(5, 2));
var isCool = true;
var age = 27;
var username = "adrian";
var pets = [1, 2, 3];
var pets2 = [1, 2, 3];
var user = {
    name: 'adrian',
    age: 27
};
var meh = undefined;
var noo = null;
// tuple
var basket;
basket = ["Adrian", 27];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Large;
var sizeStr = Size[1];
var whatever = 1;
var sing1 = function () {
    console.log(123);
};
var sing2 = function () {
    console.log(123);
    return 123;
};
var unreachable = function () {
    throw Error("Error");
};
var printBot = function (robot) {
    console.log(robot);
};
printBot({ age: 1, name: "adrian" });
// ensuring object is type [dangerous]
var bot2 = {};
console.log(bot2.age);
var printUser = function (robot) {
    console.log(robot);
};
printUser({ age: 1, name: "adrian" });
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    User.prototype.printUsername = function () {
        return this.username;
    };
    return User;
}());
var usr = new User("Adrian007i");
usr.printUsername();
var bothType = "hello";
// tsc index.tx
// tsc --init
// tsc .\index.ts --watch     acts as nodemon
