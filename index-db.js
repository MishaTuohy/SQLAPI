var http = require("http"); // creating an API using http
var url = require("url"); // using url to extract the route (e.g. /, /api/user)
var querystring = require("querystring"); // this will contain the body of the POST request
var fs = require("fs"); // file handling to read the index.html served for / route
var port = 8000; // port the server with listen on

var server = http.createServer(); // create the server


// This is the section that manages a relational (mysql) database connection

var mysql = require("mysql");
// use YOUR credentials to create your database connection
var con = mysql.createConnection({
  host: "localhost",
  user: "nodeuser",
  password: "nodeuser",
  database: "users"
});

// And make the connection
con.connect(function (err) {
  if (err) throw err;
  console.log("Database (CS230 Assignment 04): Connected!");
});

// watch for Ctrl-C and then close database connection!
process.on("SIGINT", function () {
  con.end(function (err) {
    if (err) {
      return console.log("error:" + err.message);
    }
    console.log("\nDatabase (CS230 Assignment 04): Disconnected!");
    process.exit();
  });
});

// listen for requests from clients
server.on("request", function (request, response) {
  var currentRoute = url.format(request.url); // get the route (/ or /api/user)
  var currentMethod = request.method; // get the HTTP request type (POST - Create; GET - Retrieve)
  var requestBody = ""; // will contain the extracted POST data later

  // determine the route (/ or /api/user)
  switch (currentRoute) {
    
    case "/":
      fs.readFile(__dirname + "/index.html", function (err, data) {
        var headers = {
          "Content-Type": "text/html",
        };
        response.writeHead(200, headers);
        response.end(data); 
      });
      break;

    case "/api/user":
      if (currentMethod === "POST") {
        request.on("data", function (chunk) {
          requestBody += chunk.toString();
        });

        const { headers } = request;
        let ctype = headers["content-type"];
        console.log("RECEIVED Content-Type: " + ctype + "\n");

        // finished reading the body of the request
        request.on("end", function () {
          var userData = "";
          // saving the user from the body to the database

          if (ctype.match(new RegExp("^application/x-www-form-urlencoded"))) {
            userData = querystring.parse(requestBody);
          } else {
            userData = JSON.parse(requestBody);
          }
          
          // log the user data to console
          console.log(
            "USER DATA RECEIVED: \n\n" +
              JSON.stringify(userData, null, 2) +
              "\n"
          );
          
          var sql = `INSERT INTO personal_information (title, firstname, surname, mobile, email, addressline1, addressline2, town, citycounty, eircode) VALUES 
          ('${userData.title}',
          '${userData.firstname}',
          '${userData.surname}',
          '${userData.mobile}',
          '${userData.email}',
          '${userData.addressline1}',
          '${userData.addressline2}',
          '${userData.town}',
          '${userData.citycounty}',
          '${userData.eircode}')`;

          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(
              `USER RECORD INSERTED: [
              '${userData.title}',
              '${userData.firstname}',
              '${userData.surname}',
              '${userData.mobile}',
              '${userData.email}',
              '${userData.addressline1}',
              '${userData.addressline2}',
              '${userData.town}',
              '${userData.citycounty}',
              '${userData.eircode}']\n`
            );
            // respond to the user with confirmation message
            var headers = {
              "Content-Type": "text/plain",
            };
            // handle the responses here after the database query completes!
            response.writeHead(200, headers);
            response.end(
              "User (" +
                userData.title +
                " " +
                userData.firstname +
                " " +
                userData.surname +
                " " +
                userData.mobile +
                " " +
                userData.email +
                " " +
                userData.addressline1 +
                " " +
                userData.addressline2 +
                " " +
                userData.town +
                " " +
                userData.citycounty +
                " " +
                userData.eircode +
                ") data added to the Database!"
            );
          });
        });
      }

      else if (currentMethod === "GET") {
        var headers = {
          "Content-Type": "application/json",
        };

        con.query(
          "SELECT title, firstname, surname, mobile, email, addressline1, addressline2, town, citycounty, eircode FROM personal_information",
          function (err, result, fields) {
            if (err) throw err;
            
            console.log(
              "USER DATABASE REQUESTED: \n\n" +
                JSON.stringify(result, null, 2) +
                "\n"
            );
            response.writeHead(200, headers);
            response.end(JSON.stringify(result));
          }
        );
      }

      else if(currentMethod == "DELETE") {
        request.on("data", function (chunk) {
          requestBody += chunk.toString();
        });

        const { headers } = request;
        let ctype = headers["content-type"];
        console.log("RECEIVED Content-Type: " + ctype + "\n");


        request.on("end", function () {
          var userData = "";
          // saving the user from the body to the database
          if (ctype.match(new RegExp("^application/x-www-form-urlencoded"))) {
            userData = querystring.parse(requestBody);
          } else {
            userData = JSON.parse(requestBody);
          }
          
          // log the user data to console
          console.log(
            "USER DATA RECEIVED: \n\n" +
              JSON.stringify(userData, null, 2) +
              "\n"
          );
          
          var sql = `DELETE FROM personal_information WHERE firstname = '${userData.firstname}' AND mobile = '${userData.mobile}' AND email = '${userData.email}'`;
          con.query( sql, function (err, result) {
            if (err) throw err;
            console.log("Number of records deleted: " + result.affectedRows);
          })
        });
      }
    break;

    case "/api/update":
      if(currentMethod == "POST") {
        request.on("data", function (chunk) {
          requestBody += chunk.toString();
        });

        const { headers } = request;
        let ctype = headers["content-type"];
        console.log("RECEIVED Content-Type: " + ctype + "\n");

        request.on("end", function () {
          var userData = "";
          // saving the user from the body to the database
          if (ctype.match(new RegExp("^application/x-www-form-urlencoded"))) {
            userData = querystring.parse(requestBody);
          } else {
            userData = JSON.parse(requestBody);
          }
          
          // log the user data to console
          console.log(
            "USER DATA RECEIVED: \n\n" +
              JSON.stringify(userData, null, 2) +
              "\n"
          );
          
          var sql = `Update personal_information SET mobile = '${userData.mobile}', email = '${userData.email}', title = '${userData.title}' WHERE firstname = '${userData.firstname}'`;
          con.query( sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          })
        });
      }
      break;
  }
});

// Set up the HTTP server and listen on port 8000
server.listen(port, function () {
  console.log("\nAJAX - API - Database Demo");
  console.log("CS230 Demo Program - John G. Keating\n(c) 2021\n");
  console.log("AJAX (HTTP) API server running on port: " + port + "\n");
});