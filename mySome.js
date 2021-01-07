//checks if at least one element in an array ends with 'e'

const arr2 = ["sun", "smile", "sandals", "smilte"];

console.log("\nmySome\n")

function endsWithE(value){
  if(value[value.length-1]=== 'e'){
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

console.log(mySome(arr2,endsWithE))