//returns the first index of 3 in an array

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyIndexOf\n")

function findThree(value){
  if(value === 3){
    return true;
  }
  else{
    return false;
  }
}

function myIndexOf(arr, callback){
  let index = -1;
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i])){
        index = i;
        break;
    }
  }
  return index;
}

console.log(myIndexOf(arr1,findThree))
