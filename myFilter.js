//creates a new array with even elements

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyFilter\n")

function even(newArr, value){
  if(value % 2 === 0){
    newArr.push(value);
  }
}

function myFilter(arr, callback){
  let newArray=[];
  for(let i = 0; i < arr.length; i++){
    callback(newArray, arr[i])
  }
  return newArray;
}

console.log(myFilter(arr1,even))