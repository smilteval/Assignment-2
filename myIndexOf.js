//returns the first index of 3 in an array

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmySome\n")

function findThree(value){
  
}

function myIndexOf(arr){
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 3){
      index = i;
      break;
    }
  }
  return index;
}

console.log(myIndexOf(arr1))