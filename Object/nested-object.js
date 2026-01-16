const varsity = {
    name: 'arefin',
    semester:['first', 'second', 'third', 'fourth'],
    events: ['take-off', 'unlock the algorithm', 'prompt battle', 'typing test'],
    unique: {
        id: 5279,
        department: {
            name: 'CSE',
            building: 'Knowledge Tower'
        }
    }
};

console.log( varsity.unique.department.name); // Output: CSE
console.log( varsity.events[1]); // Output: unlock the algorithm
const keys = Object.keys(varsity);
console.log(keys); // Output: [ 'name', 'semester', 'events', 'unique' ]

//values
const values = Object.values(varsity);
console.log(values);
// Output: [ 'arefin', [ 'first', 'second', 'third', 'fourth' ], [ 'take-off', 'unlock the algorithm', 'prompt battle', 'typing test' ], { id: 5279, department: { name: 'CSE', building: 'Knowledge Tower' } } ]

//check property
const hasvarstyName = Object.keys(varsity).includes('name');
console.log(hasvarstyName); // Output: true


// condition in object check
if('section' in varsity) {
    console.log('section is present in varsity object');
} else {
    console.log('section is not present in varsity object');
}

// hasOwnProperty check
if(varsity.hasOwnProperty('semester')) {
    console.log('semester is present in varsity object');
} else {
    console.log('semester is not present in varsity object');
}

// property values check 

if ( varsity.name === 'arefin') {
    console.log('name is present in varsity object keys');
} else {
    console.log('name is not present in varsity object keys');
}


// array of arrays or 2d dimensional array
console.log("using of entries in array");

const person = {
    name: "arefin",
    age: 25,
    profession: "developer"
};
const entries = Object.entries(person);
console.log(entries);

//using for in loop to get key and value
const anotherPerson = {
    name: 'arefin',
    age: 25,
    profession: 'developer'
};
for (const key in anotherPerson) {
    const value = anotherPerson[key];
    console.log(key, value);
}

//using for of loop to get key and value
const yetAnotherPerson = {
    name: 'samsul',
    age: 30,
    profession: 'designer'
};
const obj = Object.keys(yetAnotherPerson);
for (const key of obj) {
    console.log(key, yetAnotherPerson[key]);
}

//object freeze and seal
const frozenObj = {
    name: 'arefin',
    age: 25
};
Object.freeze(frozenObj);
frozenObj.age = 30; // This will not change the age property
console.log(frozenObj.age); // Output: 25

const sealedObj = {
    name: 'samsul',
    age: 30
};
Object.seal(sealedObj);
sealedObj.age = 35;
console.log(sealedObj.age); // Output: 35
// But you cannot add new properties
sealedObj.profession = 'designer';
console.log(sealedObj.profession); // Output: undefined
