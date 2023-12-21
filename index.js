// Function expression called divide
const divide = function(a, b) {
    return a / b;
  };
// Arrow function called square
const square = (num) => {
    return num * num;
  }; 
  let divide = require('./otherFile'); 
  divide = function(a, b) {
    return a / b; 
  };
  module.exports = divide;
  



