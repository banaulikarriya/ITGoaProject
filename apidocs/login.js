/**
 * @api {post} /login Login
 * @apiGroup Login
 * @apiParam {String} username  username
 * @apiParam {String} password  password
 * @apiParamExample {json} Input
 *    {
        "username" :"priya",
        "password" :"riya@123"      
 *    }
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 * {
    "status": "OK",
    "code": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXlhIiwiaWF0IjoxNTQ5Mjk0MDA5LCJleHAiOjE1NDkzMTIwMDl9.Fjh3gqwXJjJWCGcpv7bDj2zbc0eSJuQVzwrTPiJFsTw"
   }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */

/**
 * @api {post} /signup  Signup
 * @apiGroup Login
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *{
    "data": {
        "id": 7,
        "name": "Priya Banaulikar",
        "email": "priyab@gmail.com",
        "username": "priyab",
        "password": "$2a$10$AfIGkO.QMG4zROprrRSX.OIfTX2YUQXmz92QRPaNoV/VU4MiCOOky",
        "description": "loind",
        "contact": "8390878405",
        "updatedAt": "2019-02-04T15:42:44.000Z",
        "createdAt": "2019-02-04T15:42:44.000Z"
    },
    "message": "Account created!",
    "status": "OK",
    "code": 200
 *}
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */

 /**
 * @api {post} /profile/:id?token{{token}} Profile
 * @apiGroup Login
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 * {
        "data": {
        "id": 1,
        "name": "Priya Banaulikar",
        "username": "priyab",
        "email": "priyab@gmail.com",
        "password": "$2b$10$OhEY47IATUFrUnglqhSygejbNQEjSE1ykrPMHZg65g.5gRlpOsJwi",
        "contact": 44,
        "category": 2,
        "description": "loind",
        "tags": "d",
        "location": "ds",
        "address": "dd",
        "city": "S",
        "taluka": "D",
        "village": "d",
        "pincode": 45646,
        "image": "sad",
        "coverPic": "d",
        "createdAt": "2019-02-22T17:42:14.000Z",
        "updatedAt": "2019-02-22T17:49:38.000Z"
    },
    "message": "Get Profile",
    "status": "OK",
    "code": 200
 * }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */

  /**
 * @api {post} /profile/1?token={{token}} Edit Profile
 * @apiGroup Login
 * @apiParamExample {json} Input
*    {
	"name" :"Priya Banaulikar",
	"email" : "priyab@gmail.com",
	"username" : "priyab",
	"description" : "loind",
	"contact":"44",
	"category":"2",
	"tags":"d",
	"location":"ds",
	"address":"dd",
	"city":"S",
	"taluka":"D",
	"pincode" :"45646",
	"village":"d",
	"image":"sad",
	"coverPic":"d"   
*    }
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 * {
           "data": [
        1
    ],
    "message": "Get Profile",
    "status": "OK",
    "code": 200
 * }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */
