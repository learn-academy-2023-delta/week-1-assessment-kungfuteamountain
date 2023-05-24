// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Yourlsls answer: 
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain:.length is modifying the reurn to output the length of the string defined by the functiong: const cohort

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: [4] tells the console log which index to display value

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: index being set to 1 indicates the second index in zero indexing.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays).toUpperCase

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain: toUpperCase outputs the string in capital letters.
 
// output error
// removed () because looked weird
// output undefined
// console.log(weekendDays.toUpperCase) to console.log(weekendDays).toUpperCase
// output 'saturday' sunday'
// dont know where to go from here, how to to get capitol letter for output.
// [ 'saturday', 'sunday' ]
/Users/learnacademy/Desktop/week-1-assessment-kungfuteamountain/coding-concepts.js:43
console.log(weekendDays).toUpperCase
                        

TypeError: Cannot read properties of undefined (reading 'toUpperCase')
    at Object.<anonymous> (/Users/learnacademy/Desktop/week-1-assessment-kungfuteamountain/coding-concepts.js:43:25)
    at Module._compile (node:internal/modules/cjs/loader:1267:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1321:10)
    at Module.load (node:internal/modules/cjs/loader:1125:32)
    at Module._load (node:internal/modules/cjs/loader:965:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
// 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer:27 total lenth of const including spaces.
// b) Verify and explain: .length couts the indexes of the array

// output number
// much confusion
// length in an [] array arranges array by string length and then outputs the first index [0] therefore "number"