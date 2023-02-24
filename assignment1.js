/*
Assignment 1

Using iteration, write a function fibs which takes a number and returns an array containing that 
many numbers from the fibonacci sequence. Using an example input of 8, this method should return 
the array [0, 1, 1, 2, 3, 5, 8, 13].

Now write another method fibsRec which solves the same problem recursively. This can be done in 
just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a 
requirement… just get it done).
*/

function fibs(n){
    let ans = []
    let minus2 = 0
    let minus1 = 1
    let current = 1
    if (n === 1) return [0]
    ans.push( minus2, minus1)
    for ( let i = 2; i < n; i ++){
        ans.push(minus1 + minus2)
        minus2 = minus1 + minus2
        minus1 = current
        current = minus2
    }
    return ans
}

function fibsRec(num, arr = [0, 1]) {
    if (arr.length >= num){
        return arr.slice(0, num)
    }
    const newAdd = arr.at(-1) + arr.at(-2)
    arr.push(newAdd)
    return fibsRec(num, arr)
  }
