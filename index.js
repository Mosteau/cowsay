const student = require('./information');

const cowsay = require("cowsay");
console.log(cowsay.say ({
	text : `Hi, my name is ${student.name} and i come from ${student.campus} campus !`,
	e : "oO",
	T : "U"
}));
