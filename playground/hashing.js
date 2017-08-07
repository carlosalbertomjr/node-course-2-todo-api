const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword = '$2a$10$XqTRqW/pVBBI1DxINWjhJ.Bxt4rWkHdVjoBWphkGYMNgtMA4eeZAS';

bcrypt.compare('123!', hashedPassword, (err, res) => {
  console.log(res);
});
