//appends an element to the end of an array

const arr1 = [2, 5, 3, 6, 9];

console.log("\nmyPush\n")

function myPush(arr, elementToAdd){
    arr[arr.length] = elementToAdd;
}

myPush(arr1, 10);

console.log(arr1);