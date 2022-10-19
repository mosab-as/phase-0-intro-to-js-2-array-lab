// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const destructivelyAppendCat = (catName)=> cats.push(catName);
const destructivelyPrependCat = (catName)=> cats.unshift(catName);
const destructivelyRemoveLastCat = ()=> cats.pop();
const destructivelyRemoveFirstCat = ()=> cats.shift();
const appendCat = (catName)=> [...cats,catName];
const prependCat = (catName)=> [catName,...cats];
const removeLastCat = ()=> cats.slice(0,cats.length-1);
const removeFirstCat = ()=> cats.slice(1);
