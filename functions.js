function plusCalculator(a, b) {
    return a + b;
}
console.log("Result:", plusCalculator(5, 3));
function supDog(name, age) {
    if (age) {
        console.log("sup, ".concat(name, "! you are ").concat(age, " years old!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
supDog("Alice", 25);
supDog("Bob");
