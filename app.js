//require node modules
const http = require("http");

//file imports
const respond = require("./lib/respond.js");

//connection settings
// it will check for a port in env variable...http.if no port is present then it takes 3000
const port = 5000;

//Create server
const server = http.createServer(respond);

//listen to client requests on the specific port, the port should be available
server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
