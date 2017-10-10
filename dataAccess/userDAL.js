var Users = [
	{
		id: 1,
		name: "Anders",
		address: "Kongensgade",
		phone: "12345678"
	},
	{
		id: 2,
		name: "Bjarne",
		address: "Vej",
		phone: "23456789"
	}
];

var getUserById = function(id) {
	for (var i = 0; i < Users.length; i++) {
		if (id == Users[i].id) {
			return Users[i];
		}
	}
};

var postUser = function(user) {
	Users[Users.length] = user;
};

var getAllUsers = function() {
	return Users;
};

var deleteUser = function(id) {
	for (var i = 0; i < Users.length; i++) {
		if (id == Users[i].id) {
			Users.splice(i);		// Fjerner hele lortet af en eller anden grund (burde fjerne og re-indexere)
			// delete Users[i];		// Fjerner element men ingen re-indexering 
			return;
		}
	}
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser
};
