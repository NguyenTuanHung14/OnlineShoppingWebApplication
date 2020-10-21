USE MASTER 
GO

DROP DATABASE IF EXISTS OnlineShopping
CREATE DATABASE OnlineShopping
GO

USE OnlineShopping
GO

DROP TABLE IF EXISTS order_details
DROP TABLE IF EXISTS orders
DROP TABLE IF EXISTS user_account
DROP TABLE IF EXISTS discount_code

DROP TABLE IF EXISTS product
DROP TABLE IF EXISTS category

GO

DROP TABLE IF EXISTS OrderDetails
DROP TABLE IF EXISTS Orders
DROP TABLE IF EXISTS UserAccount
DROP TABLE IF EXISTS DiscountCode
DROP TABLE IF EXISTS Images
DROP TABLE IF EXISTS Product
DROP TABLE IF EXISTS Category

GO


CREATE TABLE UserAccount (
	id INT NOT NULL IDENTITY(1,1),
	name NVARCHAR(20),
	email NVARCHAR(20),	
	phone VARCHAR(20),
	password VARCHAR(20),
	PRIMARY KEY (id),
)
GO
CREATE TABLE Category (
	id INT NOT NULL IDENTITY(1,1),
    name NVARCHAR(20),
	PRIMARY KEY (id),
)
GO
CREATE TABLE Product (
	id INT NOT NULL IDENTITY(1,1),
	categoryId INT NOT NULL, 
	name VARCHAR(20),
	price MONEY,
	size VARCHAR(10),
	description NVARCHAR(1000),
	images VARCHAR(20)
	PRIMARY KEY (id),
	FOREIGN KEY (categoryId) REFERENCES Category(id)
)
GO

CREATE TABLE Image (
	id INT NOT NULL IDENTITY(1,1),
	path VARCHAR(20),
	productId INT,
	PRIMARY KEY (id),
	FOREIGN KEY (productId) REFERENCES Product(id)
)
GO

CREATE TABLE DiscountCode (
	id INT NOT NULL IDENTITY(1,1),
	code NVARCHAR(20),
	startDate DATE,
	endDate DATE,
	value INT,
	PRIMARY KEY (id),
)	
GO
CREATE TABLE Orders (
	id INT NOT NULL IDENTITY(1,1),
	dicountCodeId INT,
	userId INT,
	address NVARCHAR(20),
	dateCreated DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (dicountCodeId) REFERENCES DiscountCode(id),
	FOREIGN KEY (userId) REFERENCES UserAccount(id)
)
GO
CREATE TABLE OrderDetails (
	id INT NOT NULL IDENTITY(1,1),
	productId INT NOT NULL,
	orderId INT NOT NULL,
	amount INT,
	size VARCHAR(10), 
	PRIMARY KEY (id),
	FOREIGN KEY (productId) REFERENCES Product(id),
	FOREIGN KEY (orderId) REFERENCES Orders(id)
)
GO