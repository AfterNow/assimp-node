const { exec } = require('child_process');

exports.assimp = function(args, cb) {
		let child = exec(`${__dirname}/debian/bin/assimp ${args}`);
		let result = "";
		let error = "";
		child.stdout.on('data', (data) => {
		    result += data;
		});

		child.stderr.on('data', (data) => {
		    error += data;
		});
		
		child.on('close', () => {
			console.log(result);
			console.error(error);
			cb()
		});
};
