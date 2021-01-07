//checks if an array includes 6

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmySome\n")

function findSix(value){
  if(value === 6){
    return true;
  }
  else{
    return false;
  }
}

function myIncludes(arr, callback){
  let result = false;
  for(let i = 0; i < arr.length; i++){
    result = callback(arr[i]);
    if(result){
        break;
    }
  }
  return result;
}

console.log(myIncludes(arr1,findSix))