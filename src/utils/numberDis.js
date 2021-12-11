
function numRan(numStart = 0, numEnd = 19) {  // num1 - num2 的随机数
    return Math.floor(Math.random()*(numStart - numEnd) + numEnd);
}





export {
    numRan
}
