//creates a new array with doubled values

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyMap\n")

function double(newArr, value){
  newArr.push(value*2);
}

function myMap(arr, callback){
  let newArray=[];
  for(let i = 0;i<arr.length;i++){
    callback(newArray, arr[i]);
  }
  return newArray;
}

console.log(myMap(arr1,double));