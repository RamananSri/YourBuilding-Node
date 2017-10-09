var Users = [
	{
		id: 1,
		name: "Anders",
		address: "Kongensgade"  	
	},
	{
		id: 2,
		name: "Bjarne"
	}
];

var getUserById = function(id) {
	for (var i = 0; i < Users.length; i++) {
		if (id == Users[i].id) {
			return Users[i];
		}
	}
};

module.exports = { getUserById };
