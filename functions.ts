function plusCalculator(a: number, b: number): number{
    return a + b 
}

console.log("Result:", plusCalculator(5, 3));

function supDog(name: string, age?: number){
    if(age) {
        console.log( `sup, ${name}! you are ${age} years old!`)
    } else{
        console.log(`Hello, ${name}!`);
    }
}

supDog("Alice", 25);
supDog("Bob");