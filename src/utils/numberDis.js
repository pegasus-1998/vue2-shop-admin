
function numRan(numStart = 0, numEnd = 19) {  // num1 - num2 ηιζΊζ°
    return Math.floor(Math.random()*(numStart - numEnd) + numEnd);
}





export {
    numRan
}
