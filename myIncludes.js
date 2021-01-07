//checks if an array includes an element

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyIncludes\n")


function myIncludes(arr, value){
  for(let i = 0; i < arr.length; i++){
    if(arr[i]===value){
      return true;
    }
  }
  return false;;
}

console.log(myIncludes(arr1,9))
