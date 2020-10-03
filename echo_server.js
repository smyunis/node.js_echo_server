'use strict';
/*
	A very simple echo HTTP server for Node.js
	Uses the core HTTP module of Node.js
	It echoes back the headers and body of the request received at the specified socket address.
	It will default to 127.0.0.1:3000 if invalid or no arguments are specified 
	By: Salman Mohammed
		Email : salmanmohammed176@gmail.com
*/

const PORT = parseInt(process.argv[2]) || 3000;
const HOST = process.argv[3] || '127.0.0.1';

const http = require('http');


try {

	const server = http.createServer((req,res) => {
	
		let body = '';
		req.on('data',(chunk) => {
			body += chunk;
		});
		
		req.on('end',() => {

			res.setHeader("content-type","text/plain");

			res.write('\n************************\n');
			res.write(`HTTP Version :  ${req.httpVersion} \n`);
			res.write(`Method :   ${req.method} \n`);
			res.write(`URL Path :  ${req.url} \n`);
			
	
			res.write("\n******* Headers ********\n");
			for(let header in req.headers)
				res.write(`${header} :  ${req.headers[header]} \n`);
	
			res.write('\n********* Body *********\n');
			res.write(body);

			res.write('\n\n********* Time *********\n');
			res.write(Date.now().toString());
			res.write('\n\n************************\n');


			res.end();
		});
		
	});


	server.listen(PORT,HOST,() => {
		console.log(`Echo Server listening on ${HOST}:${PORT} ...`);
	});	

} catch (error) {
	console.error(`Error Starting Server : ${error.message}`);
}
