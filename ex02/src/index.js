
// Only change code below this line
var myStr = "Paragon is the best!";

function useMethods(str) {
  var myReverse;
  var countCharacters;

  // Split string into words
  var words = str.split(" ");
  // Reverse order of words
  words = words.reverse();
  // Count each word number of characters
  countCharacters = words.map(s => s.length);
  // Reverse letters of each word
  words = words.map(w => w.split("").reverse().join(''));
  // Join words back to one string
  myReverse = words.join(' ');  
  
  return {myReverse, countCharacters};
}

console.log(useMethods(myStr));
// Only change code above this line
module.exports = useMethods;
