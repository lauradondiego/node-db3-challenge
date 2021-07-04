# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.ProductName, c.CategoryName
from products as p
join categories as c on p.CategoryID = c.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select Orders.OrderID, Shippers.ShipperName, Orders.OrderDate
from Orders
join Shippers on Orders.ShipperID = Shippers.ShipperID
where OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select Products.ProductName, OrderDetails.Quantity, OrderDetails.OrderID
from Products
join OrderDetails on Products.ProductID = OrderDetails.ProductID
where OrderID = '10251'

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select Orders.OrderID as [Order ID], Customers.CustomerName as [Company Name], Employees.LastName as [Contact Last Name]
from Orders
join Employees on Orders.EmployeeID = Employees.EmployeeID
join Customers on Orders.CustomerID = Customers.CustomerID
// when in common it is called a foreign key used to join 2 tables tg

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
