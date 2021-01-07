//for every element in an array, prints out its index and value

const arr1 = [2, 5, 3, 6, 9];

console.log("myEach\n")

function print(index, value){
  console.log(`[${index}]: ${value}`);
}

function myEach(arr, callback){
  for(let i = 0;i<arr.length;i++){
    callback(i, arr[i]);
  }
}

myEach(arr1, print);