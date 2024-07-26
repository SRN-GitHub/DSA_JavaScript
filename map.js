`Maps in JavaScript are unordered collections of key-value pairs 
//* Difference :- 
 Objects are unordered, maps are ordered
Objects have prototype and default keys, maps do not. 

Maps have the ability to attach functionality to an object, while objects are restricted to storing data
To create a new map, use the map constructor,
 which can optionally accept an array as its argumentUsing the for..of loop to iterate over a Map  `

const map = new Map([['a', 1],['b', 2]])  //it accpets one array

map.set('c', 3)  //To add value to the map, and set is a method here. 
console.log(map.size);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}
