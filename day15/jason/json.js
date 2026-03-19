const jsonString =`{
    "name" : "John",
    "age": 30
}`;
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

const jsonStringified = JSON.stringify(jsonObject);
console.log(jsonStringified);

// const age = jsonObject.age;
// const name = jsonObject.name;
const { age, name } = jsonObject;
console.log(age, name);

// const myName = jsonObject.name;
// const myAge = jsonObject.age;
const { name : myName, age : myAge } = jsonObject
console.log(name.age);

const jsonStringArr = `[
    {
        "name" : "John",
        "age" : 30
    },
    {
        "name" : "Jane",
        "age" : 25
    }
]`
const jsonArray = JSON.parse(jsonStringArr);
console.log(jsonArray);

const wrongJsonString = ` {
    "name" : "Johne",
    "age" : 30,
}`;
const jsonObj = JSON.parse(wonrJsonString);
const {name: objName, age: objAge} = jsonObj;
console.log(objName, objAge);


