var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
return kittens.shift();
}
function appendKitten(name){
  return kittens.concat(name)
}
function prependKitten(){
  [kittens.unshift()];
  return kittens
}
function removeLastKitten(){
  return  kittens.slice(0, kittens.length - 4);
}
function removeFirstKitten(){
  
}
// Add your functions and code here
