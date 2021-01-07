//checks if all elements in an array start with 's'

const arr2 = ["sun", "smile", "sandals", "smilte"];

console.log("\nmyEvery\n")

function startsWithS(value){
  if(value[0] === 's'){
    return true;
  }
  else{
    return false;
  }
}

function myEvery(arr, callback){
  let result = true;
  for(let i = 0; i < arr.length; i++){
    result = callback(arr[i])
    if(!result){
        break;
    }
  }
  return result;
}

console.log(myEvery(arr2,startsWithS))