function calculateNumbers(var1, var2) {
    return var1 + var2;
}
module.exports = calculateNumbers; 
 Now, let’s create a new file called  index.js  in the root of the project and add the following code: 
 const calculateNumbers = require('./.devcontainer/skills.js');