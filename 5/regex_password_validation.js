/*
You need to write regex that will validate a password to make sure it meets the follwing criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

function validate_1(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

------------------------------------------------
function validate_2(password) {
  
  return /.{6,}/g.test(password) && /[a-z]+/g.test(password) && /[A-Z]+/.test(password) && /[0-9]+/g.test(password) && !/\W+/g.test(password);
}
