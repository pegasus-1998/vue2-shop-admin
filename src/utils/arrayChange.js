function interchangeArray(arr, index1, index2) {
    const item1 = arr[index1]
    const item2 = arr[index2]
    arr[index1] = {}
    arr[index2]= {}
    arr[index1] = item2
    arr[index2] = item1
}


export {
    interchangeArray
}