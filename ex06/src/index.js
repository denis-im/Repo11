myNestedArray = [["Toblerone", 5]];

// Only change code below this line
function myNestedFunction(arr) {
  myNestedArray.push(arr);
  return myNestedArray;
}

console.log(myNestedFunction(["Milka", 3]));
// Only change code above this line
module.exports = myNestedFunction;

