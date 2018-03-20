var Addition = require('./addition.js');
var Calculator1 = require('./calculator1.js');
var { mul, div } = require('./calculator1.js');
var Calculator2 = require('./calculator2.js');
var { subtraction } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');
var http = require('http');
var fs = require('fs');

console.log('Welcome to Demo');
console.log('Addition of 1 and 2 is ' + Addition(1, 2) );
console.log('2 + 3 is ' + Calculator1.add(2, 3) );
console.log('2 - 3 is ' + Calculator1.sub(2, 3) );
console.log('2 * 3 is ' + mul(2, 3) );
console.log('2 / 3 is ' + div(2, 3) );
console.log('5 + 3 is ' + Calculator2.addition(5, 3) );
console.log('10 - 3 is ' + subtraction(10, 3) );

var obj = new Person();
obj.setName('Navya');
console.log('username is '+ obj.getName());

var son1 = new Son();
console.log(son1.getName());
console.log(son1.getGender());
console.log(son1.getCity());

/*
http.createServer((req, res) => {
	res.end('Welcome to Demo');
} ).listen(3000);*/

http.createServer((req, res) => {
	fs.readFile('webpage/demo16.html', (error, response) => {
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		} else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
} ).listen(3000);






