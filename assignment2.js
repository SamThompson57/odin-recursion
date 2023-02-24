function mergeSort(array){
    if (array.length === 1) return array
    const mid = Math.ceil(array.length/2)
    let half1 = mergeSort(array.splice(0,mid))
    let half2 = mergeSort(array)
    let ans = []
    while(half1.length > 0 || half2.length > 0){
        if(half1.length === 0){
            ans.push(half2.shift())
            continue
        } else if(half2.length === 0){
            ans.push(half1.shift())
            continue
        }
        if (half1[0] < half2[0]){
            ans.push(half1.shift())
        } else {( ans.push(half2.shift()))}
    }
    return ans
}


console.log(mergeSort([1]))
console.log(mergeSort([2,1]))
console.log(mergeSort([3,6,4,7,5,2,1]))
console.log(mergeSort([7,4,6,8,1,3,2,5,9,0]))