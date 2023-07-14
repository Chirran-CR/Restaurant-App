# Online Food Ordering System

This is a simple web application built using React.js and Node.js that allows users to view a restaurant's menu and place an order. Users can select dishes from the menu, specify the quantity of each dish, and view a summary of their order, including the total price and estimated delivery time.

## Installation

To run the application, follow the steps below:

1. Clone the repository to your local machine.

```
git clone <git@github.com:Chirran-CR/Restaurant-App.git>

```

2. Install the required dependencies.

```
cd frontend
npm install

cd backend
npm install
```

3. Create .env file with all the required environmental variables like ( MONGODB_URL, PORT, STRIPE_SECRET_KEY)

```
MONGODB_URL =
PORT = 
STRIPE_SECRET_KEY=
FRONTEND_URL="http://localhost:3000"
```

4. Start the server.

```jsx
//for frontend
npm start
//for backend
npm run dev
```

5. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000/) ↗ to view the application.

## Tech Stack

The following technologies were used to build this application:

- React.js
- Node.js
- Express.js
- MongoDB

## Functionality

### Menu Display

The application displays a menu of dishes available in the restaurant. Each dish's information includes its name, description, price, and an image.

### Order Placement

Users can select dishes from the menu and place an order. They can specify the quantity for each dish in their order.

### Order Summary

After placing an order, users can view a summary of their order, including the dishes ordered, their quantities, the total price, and an estimated delivery time.

## API Endpoints

The following API endpoints are available:

- GET `/api/product`: Returns a list of all dishes in the menu.
- POST `/api/uploadProduct`: Upload the dish with a category.

## Database Schema

The following schema is used to store data related to dishes and orders:

### Product

```
const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  description: String,
});
```

### User

```
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});
```
