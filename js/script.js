const results = document.querySelectorAll('.result')
// 1- Create a function that accepts a variable and returns its type
const varValue = document.querySelector("#varValue")
const btnCheckType = document.querySelector("#checkType")
function handleTypeOfVar() {
    if (isNaN(varValue.value) || varValue.value.trim() === "" ) {
        if (varValue.value === 'true' || varValue.value === "false") {
            results[0].innerHTML = 'boolean'
        } else if (varValue.value === "undefined") {
            results[0].innerHTML = 'undefined'
        } else if (varValue.value === "null" || varValue.value.trim() === "") {
            results[0].innerHTML = 'null'
        } else {
            results[0].innerHTML = 'string'
        }
    } else {
        results[0].innerHTML = 'number'
    }
}
btnCheckType.addEventListener("click",handleTypeOfVar)
// 2- Create functions for addition, subtraction, multiplication, and division 
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const btnForSum = document.querySelector("#sum")
const btnForSub = document.querySelector("#sub")
const btnForMul = document.querySelector("#mul")
const btnForDiv = document.querySelector("#div")
// function for sum
function handleSum() {
    const sum = Number(num1.value) + Number(num2.value)
    results[1].innerHTML = sum
}
btnForSum.addEventListener("click",handleSum)

// function for sub
function handleSub() {
    const sub = Number(num1.value) - Number(num2.value)
    results[1].innerHTML = sub
}
btnForSub.addEventListener("click",handleSub)

// function for mul
function handleMul() {
    const mul = Number(num1.value) * Number(num2.value)
    results[1].innerHTML = mul
}
btnForMul.addEventListener("click",handleMul)

// function for div
function handleDiv() {
    const div = Number(num1.value) / Number(num2.value)
    results[1].innerHTML = div
}
btnForDiv.addEventListener("click",handleDiv)

// // 3- Create a function that checks if a value is NaN
const value = document.querySelector("#value")
const btnForCheckIsNan = document.querySelector("#CheckIsNan")
function isNotaNumber() {
    results[2].innerHTML = isNaN(value.value).toString()
}
btnForCheckIsNan.addEventListener("click",isNotaNumber)

// 4- Create a function that returns true if a number is even and false if odd
const number = document.querySelector("#number")
const btnForCheckIsEven = document.querySelector("#CheckIsEven")
function isEven() {
    let res = ''
    if (isNaN(number.value)) {
        res = 'this is not a number'
    } else {
        number.value % 2 == 0 ? res = 'even(true)' : res = "odd(false)"
    }
    results[3].innerHTML = res
}
btnForCheckIsEven.addEventListener("click",isEven)

// // 5- Create a function to concatenate two strings with a space in between
const str1 = document.querySelector("#str1")
const str2 = document.querySelector("#str2")
const btnAddSpace = document.querySelector("#addSpace")
function handleAddSpace() {
    results[4].innerHTML = `${str1.value} ${str2.value}`
}
btnAddSpace.addEventListener('click',handleAddSpace)

// // 6- Create a function that takes a string and returns its uppercase version
const lowerCaseString = document.querySelector("#lowerCaseString")
const btnConvertToUpperCase = document.querySelector("#convertToUpperCase")
function handleChangeStringToUppercase() {
    if (isNaN(lowerCaseString.value)) {
        results[5].innerHTML = lowerCaseString.value.toUpperCase()
    } else {
       results[5].innerHTML = 'this is a number' 
    }
}
btnConvertToUpperCase.addEventListener("click",handleChangeStringToUppercase)

// // 7- Create a function that takes a string and an index then returns the character at a given index in the string
const theString = document.querySelector("#theString")
const theIndex = document.querySelector("#theIndex")
const btnSearch = document.querySelector("#Search")
function getIndex() {
    results[6].innerHTML = theString.value[theIndex.value-1]
}
btnSearch.addEventListener('click',getIndex)

// // 8- Create a functions greet() that takes a name of a person and then returns “Hello , name”
const theName = document.querySelector("#theName")
const btnAddHallo = document.querySelector("#addHallo")
function great() {
    results[7].innerHTML = `Hello , ${theName.value}`
}
btnAddHallo.addEventListener('click',great)
// // 9- Create a function that checks if a value is null or undefined
const theValue = document.querySelector("#theValue")
const btnCheckIfNull = document.querySelector("#checkIfNull")
function checkValue() {
    if (theValue.value.trim() === "" || theValue.value === "null" || theValue.value === "undefined") {
        results[8].innerHTML = "true this value is null or undefined"
    } else {
        results[8].innerHTML = "false this value is'nt null or undefined"
    }
}
btnCheckIfNull.addEventListener("click",checkValue)
// //10- Create a function that generates a random number between two values.
const fristNumber = document.querySelector("#fristNumber")
const secondNumber = document.querySelector("#secondNumber")
const btngenerate = document.querySelector("#generate")
function getRandomNumber() {
    if (isNaN(fristNumber.value) === false && isNaN(secondNumber.value) === false) {
        results[9].innerHTML = Math.floor( Math.random() * (secondNumber.value - fristNumber.value) + fristNumber.value )
    } else {
        results[9].innerHTML = "enter numbers pls"
    }
}
btngenerate.addEventListener('click',getRandomNumber)
// // 11- Create a function that takes a number , checks its value and return “Positive” or “Negative” or “Zero”
const num = document.querySelector("#num")
const btncheckStatus = document.querySelector("#checkStatus")
function getStatus() {
    if (isNaN(num.value) === false) {
        results[10].innerHTML = num.value > 0 ? 'Positive' : num.value < 0 ? 'Negative' : 'Zero' 
    } else {
        results[10].innerHTML = `this is'nt a number`
    }
}
btncheckStatus.addEventListener("click",getStatus)
// // 12- Create a function that safely evaluates a mathematical expression and handles errors gracefully.
const expression = document.querySelector("#expression")
const btnEvaluates = document.querySelector("#evaluates")
function evaluate() {
    try {
        results[11].innerHTML =eval(expression.value)
    } catch (error) {
        results[11].innerHTML =  ' error catched '
    }
}
btnEvaluates.addEventListener('click',evaluate)