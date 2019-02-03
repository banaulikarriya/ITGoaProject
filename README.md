# Backend documentation

Very simple user authentiaction application implemented using Passport and Sequelize.

# Using
Create user:
[POST] http://localhost:3000/signup

	"name" :"Priya Banaulikar",
	"email" : "priya@gmail.com",
	"username" : "priya",
	"password":"riya@123",
	"description" : "loind",
	"contact":"8390878405"

Login:
[POST] http://localhost:3000/login
fields needed: username, password


	"username" :"priya",
	"password" :"riya@123"


List users:
[GET] http://localhost:3000/users

To be able to list users you will need token
