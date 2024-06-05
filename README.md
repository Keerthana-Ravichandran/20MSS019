# Product API

This project provides a simple API to manage products in a MongoDB database using Express.js. It allows you to add products and retrieve them, including querying the top 'n' products based on different criteria such as rating or price.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Node.js
- npm
- MongoDB

### Installing

A step by step series of examples that tell you how to get a development env running:

1. **Clone the repository**
   ```bash
   git clone https://yourrepository.git
   cd your-repository-folder
   ```

2. **Install NPM packages**
   ```bash
   npm install
   ```

3. **Start the MongoDB server**
   Ensure that MongoDB is running on your system. You can start MongoDB with:
   ```bash
   mongod
   ```

4. **Start the server**
   ```bash
   node index.js
   ```
   This will launch the server on `localhost:3000`.

## API Endpoints

Below are the API endpoints included in this project:

### POST /products

- **Description**: Adds a new product to the database.
- **URL**: `http://localhost:3000/products`
- **Method**: `POST`
- **Body**:
  ```json
  {
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "availability": "yes"
  }
  ```
- **Content-Type**: `application/json`

### GET /products

- **Description**: Retrieves all products from the database.
- **URL**: `http://localhost:3000/products`
- **Method**: `GET`

### GET /products/top

- **Description**: Retrieves the top 'n' products based on a specified sort parameter.
- **URL**: `http://localhost:3000/products/top?limit=5&sortBy=rating`
- **Method**: `GET`
- **Query Parameters**:
  - **limit**: Number of top products to retrieve.
  - **sortBy**: Field to sort by (e.g., `rating`, `price`).

## Testing the API

You can test the API endpoints using [Postman](https://www.postman.com/):
1. Install Postman from the above link.
2. Open Postman and create a new collection.
3. Add requests as per the API endpoints described above.
4. Send requests to see the responses from your server.
