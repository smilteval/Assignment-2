//checks if at least one element in an array is equal to 6

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmySome\n")

function isSix(value){
  if(value === 6){
    return true;
  }
  else{
    return false;
  }
}

function mySome(arr, callback){
  let result = false;
  for(let i = 0; i < arr.length; i++){
    result = callback(arr[i]);
    if(result){
        break;
    }
  }
  return result;
}

console.log(mySome(arr1,isSix))