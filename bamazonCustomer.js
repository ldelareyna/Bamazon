
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

// Initialize the mysql connection
connection.connect(function(err){
    if (err) throw err;
    console.log("connection successful");
    displayProduct();
});



// Functions
//Display Products for user

function displayProduct(){

    connection.query('SELECT * FROM Products', function(err, res){
        if(err) throw err;
      
        console.log("Welcome to Bamazon BookStore");
        console.log("____________________________________________________");
        
        for(var i = 0; i<res.length;i++){   
          var items = 
          "____________________________________________________" + "\r\n" +
          "ItemID: " + res[i].item_id + "\r\n" +
          "Product: " + res[i].product_name + "\r\n" +
          "Department: " + res[i].department_name + "\r\n" +
          "Price: $" + res[i].price + "\r\n" +
          "Quantity: " + res[i].stock_quantity + "\r\n" +
          "____________________________________________________"
          console.log(items);
            }
         selectProduct();
        })      
}


//Select Product

function selectProduct() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "What is the item number of the product you wish to purchase?"
        }, {
            name: 'quant',
            type: 'input',
            message: "How many would you like to purchase?"
        },

    ]).then(function(answer) {
        var quantityDesired = answer.quant;
        var IDDesired = answer.ID;
        purchaseProduct(IDDesired, quantityDesired);
    });

};





//Purchase product function


function purchaseProduct(ID, quantityNeeded) {
  
    connection.query('SELECT * FROM Products WHERE item_id = ' + ID, function(err, res) {
        if (err) {return console.log(err)};

        
        if (quantityNeeded <= res[0].stock_quantity) {
            var totalCost = res[0].price * quantityNeeded;

            console.log("Product is available!");
            console.log("Total cost for " + quantityNeeded + " " + res[0].product_name + " is " + totalCost);
            connection.query('UPDATE Products SET stock_quantity = stock_quantity - ' + quantityNeeded + ' WHERE item_id = ' + ID);
        } else {
            console.log("Sorry " + res[0].product_name + " is not available");
        };
        console.log("You've purchased "+ res[0].product_name);
        displayProduct();
    });

}; 





