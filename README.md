Setup:

Clone the repo and install dependencies.
Start MongoDB.


This endpoint is used to add a new product to the database.

URL: `http://localhost:3000/products`

**Method**: `POST`

**Body** (raw JSON):

{
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.7,
    "discount": 63,
    "availability": "yes"
}

2. GET `/products`

This endpoint retrieves all products from the database.

**URL**: `http://localhost:3000/products`


This endpoint retrieves the top 'n' products based on a sorting parameter such as rating or price.

**URL**: `http://localhost:3000/products/top?limit=5&sortBy=rating`
