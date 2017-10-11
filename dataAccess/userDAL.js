var Users = [
	{
		id: 1,
		name: "Anders",
		address: "Kongensgade",
		phone: "12345678",
		email: "hejehj@gmail.com"
	},
	{
		id: 2,
		name: "Bjarne",
		address: "Vej",
		phone: "23456789",
		email: "hejehj@gmail.com"
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
			Users.splice(i, 1); // Fjerner hele lortet af en eller anden grund (burde fjerne og re-indexere)
			// delete Users[i];		// Fjerner element men ingen re-indexering
			return;
		}
	}
};

var updateUser = function(user) {
	// for (var i = 0; i < Users.length; i++) {
	// 	if (user.id == Users[i].id) {
	// 		Users[i] = user;
	// 		return;
	// 	}
	// }

	for (var i = 0; i < Users.length; i++) {
		if (user.name == Users[i].name) {
			Users[i] = user;
			return;
		}
	}
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
