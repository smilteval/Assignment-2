//returns an array with all keys of an object

const cat={
    color: 'black',
    age: 5,
    name: 'Kitty',
};

console.log("grabKeys\n")

Object.grabKeys=(object)=>{
    let keys =[];
    for(let property in object){
        keys[keys.length] = property;
    }
    return keys;
}

console.log(Object.grabKeys(cat));