/**
 * @api {post} /addPost?token={{token}}
 * @apiGroup Post
 * @apiParamExample {json} Input
 *    {
        "title":"add post",
        "tags":"pod d jskdj" 
 *    }
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
{
    "data": {
        "status": true,
        "id": 1,
        "title": "add post",
        "tags": "pod d jskdj",
        "updatedAt": "2019-02-06T10:22:04.000Z",
        "createdAt": "2019-02-06T10:22:04.000Z"
    },
    "message": "Post created!",
    "status": "OK",
    "code": 200
 }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */

/**
 * @api {get} /getPost?token={{token}}
 * @apiGroup Post
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
{
    "data": [
        {
            "id": 1,
            "title": "add post",
            "tags": "pod d jskdj",
            "status": true,
            "createdAt": "2019-02-06T10:22:04.000Z",
            "updatedAt": "2019-02-06T10:22:04.000Z"
        }
    ],
    "message": "Get all posts!",
    "status": "OK",
    "code": 200
}
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 400 Internal Server Error
 */
