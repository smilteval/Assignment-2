//returns an array with all key values of an object

const cat={
    color: 'black',
    age: 5,
    name: 'Kitty',
};

console.log("grabValues\n")

Object.grabValues=(object)=>{
    let values =[];
    for(let property in object){
        values[values.length] = object[property];
    }
    return values;
}

console.log(Object.grabValues(cat));