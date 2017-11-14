const _ = require('lodash');
const { exec } = require('child_process');

exports.assimp = function(args, cb, options) {
		let child = exec(`${__dirname}/debian/bin/assimp ${args}`, _.merge({env: {'LD_LIBRARY_PATH': `${__dirname}/debian/lib`}}, options));
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

exports.FBX2glTF = function(args, cb, options) {
		let child = exec(`${__dirname}/debian/bin/FBX2glTF ${args}`, options);
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
