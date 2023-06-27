
// TypeScript Fundamentals

//Variables
let page: number = 25
let nomenclature: string = 'string'
let isBoolean: boolean = false

console.log(isBoolean)



//setting type
let age: number = 20
if (age < 50)
age += 10
console.log(age)

//any type
function render(document: any){
    console.log(document)
}
//arrays typescript
let numbers: number[] = []

numbers.forEach(n => n.toExponential)

//Intellisense completion is useful to see wht methods you can use

//Tuples are fixed length arrays, try keep them limited to two values

let user: [number, string] = [1, 'JP']
user.push(1)

//enums
//Use PascalCase for declaring, auto assigns 1,2,3 etc, they can also be explicitly stated

enum Size {Small = 1, Medium, Large, XLarge, XXLarge}
let mySize: Size =Size.XXLarge
console.log(mySize)
//tsc compiler without declaring enum as a constant will compile verbose code. Use const like so and only variable and value will be compiled.

const enum Measure {Small = 1, Medium, Large, XLarge, XXLarge}
let myMeasure: Measure =Measure.XXLarge
console.log(myMeasure)


//functions in TypeScript
//annotate function declaring return type, number, string etc OR void if not returning a value
//To make TypeScript useful with functions you need to toggle on noUnusedLocals in tsconfig, noUsedParameters, noImplicitReturns. adding ? to declared function variable tells typescript we don't necessarily need it  or you can implicitly state it. 

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022)
  return income * 1.2
  return income * 1.3
}

calculateTax(10_000)

//Objects, you can define the shape of an Object. Can also use optional command(?) to state a value/key pair may not be available
//readonly modifier sets object variables to remain constant

let employee: {
   readonly id: number, 
    name: string
    retire: (date: Date) => void
} = { id: 1, 
    name: '', 
    retire: (date:Date) => {
    console.log(date)
}}

employee.name = 'Jp'
