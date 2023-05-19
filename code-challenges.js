// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// const charCount = (fruit) => {
//     return
// }

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: compare iputs to  212 
// functions need a return
// if statement
// input number 
//output string
// let beause boiling point wont change later

// const temperature1 = 42


// const temperature2 = 350


// const temperature3 = 212

// const steamBubbles = () => {
//     if(temp < steamBubbles) 
//         return temp = "is below boiling point"
//      else if(temp > steamBubbles)
//         return temp = "is above boiling point"
//      else (temp === steamBubbles)
//         return  temp = "is at boiling point";    
//      }
// console.log(steamBubbles(temp))

//output SyntaxError: Unexpected identifier 'is'
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1187:20)
//     at Module._compile (node:internal/modules/cjs/loader:1231:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1321:10)
//     at Module.load (node:internal/modules/cjs/loader:1125:32)
//     at Module._load (node:internal/modules/cjs/loader:965:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v20.0.0
// learnacademy@MacBook-Air-4 week-1-assessment-kungfuteamountain % node code-challenges.js
// /Users/learnacademy/Desktop/week-1-assessment-kungfuteamountain/code-challenges.js:37
//             return temperature "is below boiling point"
//                                ^^^^^^^^^^^^^^^^^^^^^^^^

// I couldnt make heads or tails of anything at this point. i may have forgotten everything after class.
        
// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// // Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// // creat variable for both arrays then .concat() to combine
// use .length() shoud return new and improved array's final index number after combining the arrays
// console.log


// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// var worldSeriesStats= padres1984WorldSeriesRuns.push(padres1998WorldSeriesRuns)

// console.log(worldSeriesStats.length)
// Expected output: 9
//not gettting an output.

// works? outputs 10. should output 10 instead of 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// 
// use .revers()
// 

// const currentCohort => () { "Delta 2023"
//     let cohortRoster = (currentCohort).reverse 
// }
//  console.log(cohortRoster)
 
// Expected output: "3202 atleD"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// 
// .lastIndexOf(value) -  Returns the last index of a given value

// const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// const givenValue1 = 42
// // Expected output: 7
// console.log(numberOfConnections.lastIndexOf(givenValue1))

// const givenValue2 = 10
// // Expected output: 8
// console.log(numberOfConnections.lastIndexOf(givenValue2))

//works. output 7 and 8 respectively

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//.use .sort()
//one array at a time; no concat
//add .reverse()
// largest to smallest; therefore
// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]


// console.log(sanDiegoSummerTemperatures.sort())

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]
// sanDiegoWinterTemperatures.sort((a, b) => a- b)
// console.log(sanDiegoWinterTemperatures.sort())


// doesnt work
//both of these outpur in regular order. will not .reverse- comes back as undefined


[ 72, 73, 76, 77,
    79, 80, 82 ]
  [ 59, 59, 62, 66,
    66, 67, 68 ]