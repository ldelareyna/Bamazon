
/*Goal: Create an Amazon-like storefront with NodeJS using MySQL and Inquirer packages. 
 App should:  take in orders from customers and deplete stock from a stores inventory*/


-- CHALLENGE 1: CUSTOMER VIEW --

/*
Create an Amazon like store front : Bamazon
To do this: Create Bamazon's Inventory: 
1. A MySQL Database called bamazon that holds for each item in the store: 
  * an item ID
  * the product name
  * the department name
  * the price
  * the stock quantity 
 */

-- STEP ONE -----------------------------------------------------------------------------
-- If a database names BamazonDB already exists, drop it -- 
DROP DATABASE IF EXISTS bamazon_DB;
-- Next create the database --
CREATE DATABASE bamazon_DB;
-- Use the database --
USE bamazon_DB;



-- STEP TWO -----------------------------------------------------------------------------
/* Inside the bamazon database, create a table called products
   The products table should have each of the following columns:

     item_id (unique id for each product)
     product_name (Name of product)
     department_name
     price (cost to customer)
     stock_quantity (how much of the product is available in stores)
*/

--  Create table products in bamazon database... --
CREATE TABLE Products (
	-- Unique id for each product --
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    -- Name of product --
	product_name VARCHAR(45) NOT NULL,
    -- Department name --
	department_name VARCHAR(45) NOT NULL,
    -- The Product Cost to customer --
	price DECIMAL(10,2) NOT NULL,
    -- The Product Availabilty --
	stock_quantity INTEGER(10) NOT NULL,
    -- Make item_id the primary key --
	PRIMARY KEY (item_id)
);



-- STEP THREE -----------------------------------------------------------------------------
/* Populate this database (bamazon) with around 10 different products. Fill the product table with dummy data
 (i.e. Insert "mock" data rows into this database and table).

 ... filling the table with items from https://www.amazon.com/Best-Sellers/
 */

INSERT INTO Products (product_name, department_name, price, stock_quantity)
VALUES ("Where the Crawdads Sing", "Books", 16.99, 15), 
("Becoming", "Books", 19.99, 30),
("The Wonky Donkey", "Books", 20.99, 15),
("The Reckoning: A Novel", "Books", 11.99, 30),
("First 100 Words", "Books", 3.99, 20),
("The Writings of Machiavelli", "Books", 25.99, 30),
("5,000 Awesome Facts", "Books", 11.95, 974),
("Giraffes Can't Dance", "Books", 4.99, 200),
("Clean Code", "Books", 51.95, 11),
("Educated: A Memoir", "Books", 16.80, 70);




