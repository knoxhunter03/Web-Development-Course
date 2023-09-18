// var generateName = require('sillyname');

import generateName from "sillyName";
import superheroes from "superheroes";

var sillyName = generateName();
var superhero = superheroes.random();

console.log(`My name is ${sillyName} `);
console.log(`And I am the ${superhero} `);