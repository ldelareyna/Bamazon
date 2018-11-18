
//Install and require the mysql npm package to make connection to mysql database.
var mysql = require ("mysql");
//Install and require the inquirer npm package to prompt user.
var inquirer = require ("inquirer");


//Create a mysql connection to the database bamazon_db.
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
