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
    "url": "/profile/1?token={{token}}",
    "title": "Edit Profile",
    "group": "Login",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "   {\n\t\"name\" :\"Priya Banaulikar\",\n\t\"email\" : \"priyab@gmail.com\",\n\t\"username\" : \"priyab\",\n\t\"description\" : \"loind\",\n\t\"contact\":\"44\",\n\t\"category\":\"2\",\n\t\"tags\":\"d\",\n\t\"location\":\"ds\",\n\t\"address\":\"dd\",\n\t\"city\":\"S\",\n\t\"taluka\":\"D\",\n\t\"pincode\" :\"45646\",\n\t\"village\":\"d\",\n\t\"image\":\"sad\",\n\t\"coverPic\":\"d\"   \n   }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n           \"data\": [\n        1\n    ],\n    \"message\": \"Get Profile\",\n    \"status\": \"OK\",\n    \"code\": 200\n}",
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
    "name": "PostProfile1TokenToken",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/profile/1?token={{token}}"
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
          "content": "   HTTP/1.1 200 OK\n{\n        \"data\": {\n        \"id\": 1,\n        \"name\": \"Priya Banaulikar\",\n        \"username\": \"priyab\",\n        \"email\": \"priyab@gmail.com\",\n        \"password\": \"$2b$10$OhEY47IATUFrUnglqhSygejbNQEjSE1ykrPMHZg65g.5gRlpOsJwi\",\n        \"contact\": 44,\n        \"category\": 2,\n        \"description\": \"loind\",\n        \"tags\": \"d\",\n        \"location\": \"ds\",\n        \"address\": \"dd\",\n        \"city\": \"S\",\n        \"taluka\": \"D\",\n        \"village\": \"d\",\n        \"pincode\": 45646,\n        \"image\": \"sad\",\n        \"coverPic\": \"d\",\n        \"createdAt\": \"2019-02-22T17:42:14.000Z\",\n        \"updatedAt\": \"2019-02-22T17:49:38.000Z\"\n    },\n    \"message\": \"Get Profile\",\n    \"status\": \"OK\",\n    \"code\": 200\n}",
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
  },
  {
    "type": "get",
    "url": "/getPost?token={{token}}",
    "title": "Get Post",
    "group": "Post",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"title\": \"add post\",\n            \"tags\": \"pod d jskdj\",\n            \"status\": true,\n            \"createdAt\": \"2019-02-06T10:22:04.000Z\",\n            \"updatedAt\": \"2019-02-06T10:22:04.000Z\"\n        }\n    ],\n    \"message\": \"Get all posts!\",\n    \"status\": \"OK\",\n    \"code\": 200\n}",
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
    "filename": "apidocs/post.js",
    "groupTitle": "Post",
    "name": "GetGetpostTokenToken",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/getPost?token={{token}}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/addPost?token={{token}}",
    "title": "add Post",
    "group": "Post",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"title\":\"add post\",\n     \"tags\":\"pod d jskdj\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"data\": {\n        \"status\": true,\n        \"id\": 1,\n        \"title\": \"add post\",\n        \"tags\": \"pod d jskdj\",\n        \"updatedAt\": \"2019-02-06T10:22:04.000Z\",\n        \"createdAt\": \"2019-02-06T10:22:04.000Z\"\n    },\n    \"message\": \"Post created!\",\n    \"status\": \"OK\",\n    \"code\": 200\n }",
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
    "filename": "apidocs/post.js",
    "groupTitle": "Post",
    "name": "PostAddpostTokenToken",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/addPost?token={{token}}"
      }
    ]
  }
] });
