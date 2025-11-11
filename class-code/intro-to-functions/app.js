// console.log("Functions Lesson")


// console.log("=================")
// console.log("Good Morning Ali")
// console.log("=================")





// console.log("=================")
// console.log("Good Morning Ali")
// console.log("=================")



// Functions

// 2 parts of working with functions


// 1. declaring a function

// function nameOfFunction(){}

function greetAli(){
    console.log("Good Morning Ali")
}


// 2. calling the function

// greetAli()



let studentVar = 'Sajeda'
function greetStudent(student){
    console.log('Good Morning ' + student)
}

greetStudent(studentVar)
greetStudent('Munther')


function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}


addTwoNumbers(5,100)
addTwoNumbers(7,2)


function planetHasWater(planet){
    let something = 0
    console.log(planet)
    if(planet === 'Earth'|| planet === 'Mars'){

        return true

    }
    else{
        return false
    }
}


planetResult = planetHasWater('Venus')





console.log("planet result " + planetResult)


function doesPlanetContainBahrain(planet){
    if(planet === 'Earth'){
        return true
    }
    else{
        return false
    }
}

if(planetHasWater('Earth') && doesPlanetContainBahrain('Earth')){
    console.log("YES IT DOES")
}

function minusTwoNumbers(num1, num2){
    console.log("coding work")
    console.log("coding work")
    console.log("coding work")
    console.log("coding work")
    
}



// 2 ways of defining functions


// 1. function decleration
function areaOfSquare(height, width){
    return height * width
}


console.log(areaOfSquare(5,4))




// 2. function expression
const areaOfSquareAgain = function(height, width){return height * width}


console.log(areaOfSquareAgain(5,4))





// Arrow function

// 3 advantages
// 1. if I only 1 have parameter I dont need the ()
// 2. If we are only doing 1 line in my execusion block we dont need the {}
// 3. If we have 1 line of code it will implicitly return that line

const areaOfSquareAgainAgain = (height, width) =>  height * width



const exponentNumber = number => number* number


console.log(exponentNumber(4))

