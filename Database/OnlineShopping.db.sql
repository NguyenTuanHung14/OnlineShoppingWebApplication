USE MASTER 
DROP DATABASE IF EXISTS OnlineShopping
CREATE DATABASE OnlineShopping
GO

USE OnlineShopping
GO

DROP TABLE IF EXISTS OrderDetails
DROP TABLE IF EXISTS Orders
DROP TABLE IF EXISTS DiscountCode
DROP TABLE IF EXISTS Product
DROP TABLE IF EXISTS Category
DROP TABLE IF EXISTS UserAccount
GO

CREATE TABLE UserAccount (
	id INT NOT NULL IDENTITY(1,1),
	name NVARCHAR(20),
	email NVARCHAR(20),
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
	price FLOAT,
	size VARCHAR(10),
	description NVARCHAR(1000),
	images VARCHAR(20)
	PRIMARY KEY (id),
	FOREIGN KEY (categoryId) REFERENCES Category(id)
)
GO
CREATE TABLE DiscountCode (
	id INT NOT NULL IDENTITY(1,1),
	code NVARCHAR(20),
	startDate DATE,
	endDate DATE,
	value FLOAT,
	PRIMARY KEY (id),
)	
GO
CREATE TABLE Orders (
	id INT NOT NULL IDENTITY(1,1),
	dicountCodeId INT,
	name NVARCHAR(20),
	email NVARCHAR(20),
	address NVARCHAR(20),
	phone VARCHAR(20),
	dateCreated DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (dicountCodeId) REFERENCES DiscountCode(id)
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