# Very Simple Node.js HTTP Echo Server
This program starts a simple Node.js HTTP Server. It echoes back the header and body of the
HTTP request made to the server. It returns an HTTP response in plain text. 


## Usage
The socket address (IP address and port number) the server will listen on can be specifed as command line arguments when the server is started.
If no arguments are specifed or invalid values are given, it will default to use 127.0.0.1 (localhost) and port 3000.

To use the default 127.0.0.1:3000

`$ node echo_server.js`      

To use a specific port number and address 

`$ node echo_server.js [<port> [{IP address | hostname}]]`

for example to start the server to listen on 192.168.7.7 and port 8080 use

`$ node echo_server.js 8080 192.168.7.7`


## Purpose
This tiny piece of software is meant to provide a quick way to check the contents of the request headers and body mostly during front-end development. It can be used to verify cookies and such. It can also be used as a simple example for the core Node.js http module. It can be used by anyone for any reason anywhere.


## Bugs and Improvements
If there are any bugs and improvements to be made like better error cheking and a way to input the arguments using flags instead of the current implementation, your help will be much appreciated. But keep in mind that this is meant to be a very simple, single file application. Use of third party modules are better left out to keep it lightweight and portable.
