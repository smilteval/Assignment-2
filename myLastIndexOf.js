//returns the last index of an element in an array 

const arr1 = [2, 5, 3, 6, 9, 3];

console.log("\nmyLastIndexOf\n")

function myLastIndexOf(arr, value){
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]===value){
      index = i;
    }
  }
  return index;
}

console.log(myLastIndexOf(arr1, 3))