const UserDal = require("../dataAccess/userDAL");

var getUserById = function(id) {
	return UserDal.getUserById(id);
};

var postUser = function(user){
	UserDal.postUser(user);
};

var getAllUsers = function(){
	return UserDal.getAllUsers();
};

module.exports = { 
	getUserById,
	postUser,
	getAllUsers
};

