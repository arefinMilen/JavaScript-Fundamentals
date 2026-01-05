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