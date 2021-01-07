//returns an index of an element in an array 

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyIndexOf\n")

function myIndexOf(arr, value){
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]===value){
      index = i;
      break;
    }
  }
  return index;
}

console.log(myIndexOf(arr1, 6))