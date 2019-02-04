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
 * "data": {
        "id": 4,
        "username": "priya",
        "email": "priya@gmail.com",
        "updatedAt": "2019-02-03T09:42:01.000Z",
        "createdAt": "2019-02-03T09:42:01.000Z"
    },
    "message": "Get Profile",
    "status": "OK",
    "code": 200
 * }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */