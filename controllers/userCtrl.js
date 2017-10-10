const UserDal = require("../dataAccess/userDAL");

var getUserById = function(id) {
	return UserDal.getUserById(id);
};

var postUser = function(user) {
	var id = getAllUsers().length + 1;
	user["id"] = id;
	UserDal.postUser(user);
};

var getAllUsers = function() {
	return UserDal.getAllUsers();
};

var deleteUser = function(id){
	UserDal.deleteUser(id);
}; 

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser
};
