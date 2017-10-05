const UserDal = require("../dataAccess/userDAL");

var getUserById = function(id) {
	return UserDal.getUserById(id);
};

module.exports = { getUserById };
