//reduces all elements of an array to a single value - sum of all numbers

const arr1 = [2, 5, 3, 6, 9];

console.log("myEach\n")

function sum(arr){
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

function myReduce(arr, callback){
    return callback(arr);
}

console.log(myReduce(arr1, sum));