const { exec } = require('child_process');

exports.assimp = function(args, cb) {
		console.log("assimp node version 2");
		let child = exec(`${__dirname}/debian/bin/assimp ${args}`, {env: {'LD_LIBRARY_PATH': `${__dirname}/debian/lib`}});
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
