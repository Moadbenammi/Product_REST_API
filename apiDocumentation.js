const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//Swagger documentation:

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products Rest API",
      version: "1.0.0",
    },
  },
  apis: ["apiDocumentation.js"],
};

exports.swaggerAPIDesc = swaggerJsDoc(options);

/**
 * @swagger
 * /products:
 *  get:
 *      description: Get All available products
 *      responses:
 *          200:
 *              description: Success
 *
 *  post:
 *      description: Add a new product
 *      responses:
 *          201:
 *              description: Product was saved !
 *          400:
 *              description: Error
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          description:
 *                              type: string
 *                          imageUrl:
 *                              type: string
 *                          userId:
 *                              type: string
 *                          price:
 *                              type: number
 * '/products/{id}':
 *  get:
 *      description: Get ONE product by its ID
 *      responses:
 *          200:
 *              description: Success
 *          404:
 *              description: Product not found
 *      parameters:
 *          - name: id
 *            required: true
 *            type: string
 *            description: ID of the product
 *  patch:
 *      description: Update a product's info by its ID, let's change the price for example.
 *      responses:
 *          201:
 *              description: Product updated!
 *          404:
 *              description: Product not found
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          price:
 *                              type: number
 *                  example:
 *                      price: 1589.99
 *      parameters:
 *          - name: id
 *            required: true
 *            type: string
 *            description: ID of the product 
 * 
 *  delete:
 *      description: Delete ONE product by its ID
 *      responses:
 *          200:
 *              description: Success, product is deleted
 *          400:
 *              description: Error while deleting.
 *          404:
 *              description: Product not found                         
 *      parameters:
 *          - name: id
 *            required: true
 *            type: string
 *            description: ID of the product
 * /auth/signup:
 *  post:
 *      description: Add a new user
 *      responses:
 *          201:
 *              description: User was saved !
 *          400:
 *              description: Error while saving user
 *          500:
 *              description: Error while crypting
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string                    
 * /auth/signin:
 *  post:
 *      description: User login
 *      responses:
 *          200:
 *              description: Logged in 
 *          401:
 *              description: Incorrect password 
 *          404:
 *              description: User not found 
 *          500:
 *              description: Unexpected Error
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 */
