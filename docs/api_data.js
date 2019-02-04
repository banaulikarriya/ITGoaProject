define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\" :\"priya\",\n     \"password\" :\"riya@123\"      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"status\": \"OK\",\n    \"code\": 200,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXlhIiwiaWF0IjoxNTQ5Mjk0MDA5LCJleHAiOjE1NDkzMTIwMDl9.Fjh3gqwXJjJWCGcpv7bDj2zbc0eSJuQVzwrTPiJFsTw\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 400 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/login.js",
    "groupTitle": "Login",
    "name": "PostLogin",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/profile/:id?token{{token}}",
    "title": "Profile",
    "group": "Login",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n\"data\": {\n        \"id\": 4,\n        \"username\": \"priya\",\n        \"email\": \"priya@gmail.com\",\n        \"updatedAt\": \"2019-02-03T09:42:01.000Z\",\n        \"createdAt\": \"2019-02-03T09:42:01.000Z\"\n    },\n    \"message\": \"Get Profile\",\n    \"status\": \"OK\",\n    \"code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 400 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/login.js",
    "groupTitle": "Login",
    "name": "PostProfileIdTokenToken",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/profile/:id?token{{token}}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "Signup",
    "group": "Login",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"id\": 7,\n        \"name\": \"Priya Banaulikar\",\n        \"email\": \"priyab@gmail.com\",\n        \"username\": \"priyab\",\n        \"password\": \"$2a$10$AfIGkO.QMG4zROprrRSX.OIfTX2YUQXmz92QRPaNoV/VU4MiCOOky\",\n        \"description\": \"loind\",\n        \"contact\": \"8390878405\",\n        \"updatedAt\": \"2019-02-04T15:42:44.000Z\",\n        \"createdAt\": \"2019-02-04T15:42:44.000Z\"\n    },\n    \"message\": \"Account created!\",\n    \"status\": \"OK\",\n    \"code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 400 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidocs/login.js",
    "groupTitle": "Login",
    "name": "PostSignup",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/signup"
      }
    ]
  }
] });
