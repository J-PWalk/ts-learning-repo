// TypeScript Fundamentals
//Variables
var page = 25;
var nomenclature = 'string';
var isBoolean = false;
console.log(isBoolean);
//setting type
var age = 20;
if (age < 50)
    age += 10;
console.log(age);
//any type
function render(document) {
    console.log(document);
}
//arrays typescript
var numbers = [];
numbers.forEach(function (n) { return n.toExponential; });
//Intellisense completion is useful to see wht methods you can use
//Tuples are fixed length arrays, try keep them limited to two values
var user = [1, 'JP'];
user.push(1);
//enums
//Use PascalCase for declaring, auto assigns 1,2,3 etc, they can also be explicitly stated
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
    Size[Size["XLarge"] = 4] = "XLarge";
    Size[Size["XXLarge"] = 5] = "XXLarge";
})(Size || (Size = {}));
var mySize = Size.XXLarge;
console.log(mySize);
var myMeasure = 5 /* Measure.XXLarge */;
console.log(myMeasure);
//functions in TypeScript
//annotate function declaring return type, number, string etc OR void if not returning a value
//To make TypeScript useful with functions you need to toggle on noUnusedLocals in tsconfig, noUsedParameters, noImplicitReturns. adding ? to declared function variable tells typescript we don't necessarily need it  or you can implicitly state it. 
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
//Objects, you can define the shape of an Object. Can also use optional command(?) to state a value/key pair may not be available
//readonly modifier sets object variables to remain constant
var employee = { id: 1,
    name: '',
    retire: function (date) {
        console.log(date);
    } };
employee.name = 'Jp';
