const bcrypt = require("bcryptjs");

var password = "abc123";

bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
});