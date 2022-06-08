# Expense Reimbursement System

## Project Description:

An application that allows employees to log on to the website and file reimbursement requests to their managers. They can view all of their reimbursements, whether they are still pending or completed. Managers who log in will have different options than the employees. Managers are able to look through the database of employees as well as find all reimbursements associated with any given employee. They also have the option to view all employee reimbursement requests, both pending and completed. Manager and employee information is stored in the database and can be altered by the individual.

## Technologies:

Backend:
* IntelliJ
* Postman
* DBeaver
* PostgreSQL
* JUnit4
* Mockito
* JDBC
* Jackson

Frontend:
* Visual Studio Code
* React
* React Redux
* React Router
* Axios
* NodeJS

## Features:
* Login
* Logout
* View user profile
* Edit user profile
* Separate access/features for Employees and Managers
* Employees can access Employee Home Page
* Employees can view their pending reimbursement requests
* Employees can view their resolved reimbursement requests
* Employees can create new reimbursement requests
* Managers can access Manager Home Page
* Managers can view all pending requests
* Managers can view all resolved requests
* Managers can Approve/ Deny Reimbursement requests
* Managers can view a list of all employees

## Getting Started / Usage
To run this project you will need to do the following:

Backend:

1. In *resources/jdbc.properties*, adjust the environment variables 'url', 'username', 'password'
2. Run *ReimbursementDriver.java*

Your Database structure should look like this:

![ERD](https://user-images.githubusercontent.com/37488788/172697207-e4ca0ea6-4fb9-4f82-b54c-f5ed45468344.PNG)

Frontend:

1. *npm install*
2. *npm start* 
3. Once started, the backend server should be listening on http://localhost:8000

## Contributors

Hassan Zareef

Justin Tsuchiyama
