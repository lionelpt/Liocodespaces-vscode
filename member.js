function skillsMember() {
  return 'I can code in JavaScript';
}
module.exports = skillsMember; 
// This will allow us to import the function into the index.js file. 
// Now, let’s add the following code to the index.js file:
const skillsMember = require('./member.js');
const skills = require('./skills.js');
console.log(skillsMember());
console.log(skills());
// This will allow us to import both functions into the index.js file. 
// Now, let’s run the index.js file by typing the following command in the terminal:
// node index.js
// You should see the following output in the terminal:
// I can code in JavaScript
// I can code in JavaScript
// This means that the functions were successfully imported into the index.js file. 