var {db} = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //Check if email already exists
  db.saverUser({
    email,
    password
  })
  //Send the welcome email
};
