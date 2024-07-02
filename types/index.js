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
// tsc index.tx
// tsc --init
// tsc .\index.ts --watch     acts as nodemon
