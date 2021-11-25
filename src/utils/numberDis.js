
function numRan(numStart = 0, numEnd = 19) {
    return Math.floor(Math.random()*(numStart - numEnd) + numEnd);
}





export {
    numRan
}
