 <!-- Task -->
 
 
Project Overview (80 Marks)
IDE to be used
Any IDE, preferably VS Code

Deploymemt
Code deployment on GitHub and project deployment on Railway

Problem Statement
Build a Library Management for admin using NodeJS.


The project should have 3 pages i.e., the Registration page, Login page and Dashboard

You can use EJS templates or HTML forms for the client part.
For reference of the Register Page:https://github.com/KaranSingh1301/lecture-6/blob/main/views/register.ejs
For reference of the Login page: https://github.com/KaranSingh1301/lecture-6/blob/main/views/login.ejs
Add an authentication system using a session based.


Add email verification using token-based (JWT).


You need to perform all the CRUD operations using REST API and MongoDB


Build the profile page.


Registration Page. (20 marks)

Should render registration form on ‘{url} / registration’. (5 marks)
Registration form should include the following:- (5 marks)
Name
Username (Unique)
Email (Unique)
Phone number
Password (hashed it using bcrypt)
Do email authentication using JWT. (10 marks)
After all, success redirects the user to the login page.
Login Page (30 marks)
Should render login form on ‘{url} / login’. (5 marks)
The login form should include the following: (5 marks)
Username or email
Password
Forget password option
Resend the verification link
Add session-based authentication once the user is logged in. (10 marks)
Add the forget password functionality by sending a link to a verified mail id (5 marks)
Provide the functionality to resend the verification mail. (5 marks)
After successfully logging in, redirect the user to the dashboard page.
Dashboard Page (30 marks)
Should render login form on ‘{url} / dashboard ’ (5 marks)
Admin should have the functionality to add books to the inventory: (5 marks)
The books Details should contain:-
Book Title
Book Author
Book Price
Book category.
Admin should be able to see (Read operation) all the books in the inventory (5 marks)
Admin should be able to delete and update the book's details. (10 marks)
Optimized the DB call using rate-limiting for 2 hits / 1 second (500ms) for the fields present on the dashboard page. (5 marks)
Design Links
Figma Link for dashboard:
https://www.figma.com/file/kWAs0sPrlH9SHwmyG0pXkM/Accio-Project?node-id=0-1&t=W4LTIdODJrcwVLJy-0

Resgistration Form
https://storage.googleapis.com/acciojob-open-file-collections/99918623-8cd8-44f3-8ab3-ec30d0bb9a42unnamed.png

Login Form
https://storage.googleapis.com/acciojob-open-file-collections/1df9f3cd-0fe2-49ae-88e2-28ecefb551d3unnamed(1).png
