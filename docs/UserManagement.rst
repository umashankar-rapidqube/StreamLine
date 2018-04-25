User Management
===============

This module defines the types of users that this application will handle

User management and access control is a crucial part of creating any portal,
For a portal like StreamLine, it is absolutly necessary that clear defnition of user management is necesary.

Types of users:
---------------
    There is only three types of Users that forms the base of user management.

    - Emplyoyee - Every single person in the company is an employee, and hence this user
        has access to common fuctionalities of the portal
    - Manager - Every Employee reports to a Manager. A manager is also an Employee himself.
    - Admin - Admin is a special user who has access to the configuration of the application

Departments:
------------
    The access control will be defined not only based on the User Type but also based on the 
    department.
    Those who belong to specific departmnet will have special access to particular modules of the portal

    - Development 
    - Strategy
    - Finance
    - Admin
    - HR    
    