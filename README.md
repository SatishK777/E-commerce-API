# E-Commerce Product API

This is a simple **E-Commerce Product API** built with **Node.js**, **Express.js**, and **MongoDB**. The API allows for CRUD operations on products, with each product belonging to a category. Categories can be created and associated with products using MongoDB's `ref` and `populate` methods.

## Features

- **CRUD Operations**: 
  - Create, Read, Update, and Delete products.
  - Create, Read, and Delete categories.
- **Category-Product Relationship**: 
  - Each product is associated with a category.
  - Products can be queried with their associated category details.
- **Express.js**: Handles routing and server logic.
- **MongoDB**: Stores products and categories.
- **Mongoose**: Provides object data modeling (ODM) for MongoDB.
- **Populate**: Populates the `category` field in products to show category details when fetching products.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **HTTP Client for Testing**: Postman

## Folder Structure

```plaintext
.
├── config/
│   └── db.js           # MongoDB connection setup
├── controllers/
│   └── productController.js  # Controller logic for products
├── models/
│   ├── Product.js       # Product Schema
│   └── Category.js      # Category Schema
├── routes/
│   ├── index.js         # Main routes file
│   └── product.js       # Product-related routes
├── index.js             # Main entry point of the application
├── README.md            # Project documentation
