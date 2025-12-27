// 1- Create a function that accepts a variable and returns its type
function handleTypeOfVar(variable) {
    return typeof variable
}
console.log(handleTypeOfVar("s"))
console.log(handleTypeOfVar(5))
console.log(handleTypeOfVar(true))

// 2- Create functions for addition, subtraction, multiplication, and division

// function for sum
function handleSum(n1, n2) {
    return n1 +n2
}
console.log(handleSum(5, 8))

// function for sub
function handleSub(n1, n2) {
    return n1 - n2
}
console.log(handleSub(5, 8))

// function for smul
function handleMul(n1, n2) {
    return n1 * n2
}
console.log(handleMul(5, 8))

// function for div
function handleDiv(n1, n2) {
    return n1 / n2
}
console.log(handleDiv(5, 8))

// 3- Create a function that checks if a value is NaN
function isNotaNumber(x) {
    return isNaN(x)
}
console.log(isNotaNumber("5"))
console.log(isNotaNumber(5))
console.log(isNotaNumber('pp'))

// 4- Create a function that returns true if a number is even and false if odd
function isEven(num) {
    if (num % 2 === 0) {
        return true
    }
    return false
}
console.log(isEven(5))
console.log(isEven(6))

// 5- Create a function to concatenate two strings with a space in between
function handleAddSpace(str1,str2) {
    return `${str1} ${str2}`
}
console.log(handleAddSpace('ahmed', "ali"))

// 6- Create a function that takes a string and returns its uppercase version

function handleChangeStringToUppercase(str) {
    if (typeof str === "string") {
        return str.toUpperCase()
    }
    return "the type of the variable is not a string"
}
console.log(handleChangeStringToUppercase('maged'))
console.log(handleChangeStringToUppercase(5))

// 7- Create a function that takes a string and an index then returns the character at a given index in the string
function getIndex(str, idx) {
    return str[idx]
}
console.log(getIndex('ahmed',3))
console.log(getIndex('mahmoud',5))
console.log(getIndex('mahmoud', 10))

// 8- Create a functions greet() that takes a name of a person and then returns “Hello , name”
function great(name) {
    return `Hello ${name}`
}
console.log(great('mohamed'))
console.log(great('alaa'))

// 9- Create a function that checks if a value is null or undefined
function checkValue(value) {
    if (value === null || undefined) {
        return true
    }
    return false
}
console.log(checkValue(null))
console.log(checkValue("ssss"))
console.log(checkValue(undefined))

// Create a function that generates a random number between two values.
function getRandomNumber(num1,num2) {
    return Math.floor( Math.random() * (num2 - num1) + num1 )
}
console.log(getRandomNumber(5, 8))

// 11- Create a function that takes a number , checks its value and return “Positive” or “Negative” or “Zero”
function getState(num) {
    if (num  > 0) {
        return 'Positive'
    } else if (num < 0) {
        return 'Negative'
    }
    return 'Zero'
}
console.log(getState(5))
console.log(getState(-5))
console.log(getState(0))

// 12- Create a function that safely evaluates a mathematical expression and handles errors gracefully.
function evaluate(exp) {
    try {
        return eval(exp)
    } catch (error) {
        return ' error catched '
    }
}
console.log(evaluate('5 + 8 - 4'))
console.log(evaluate('cfs + 8 - 4'))