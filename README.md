# Capstone-v2 (ProShop eCommerce Platform)

![MERN](https://miro.medium.com/v2/0*hU4zJiyVwWcM0L-w.png)

## MongoDB / Express / React / Node.js

**Problem Statement:** Many consumers struggle to find a reliable and user-friendly e-commerce platform to purchase electronics online. The lack of comprehensive information, trust issues, and inefficient user interfaces often lead to a suboptimal shopping experience.

**Project Goal:** To develop a responsive and feature-rich e-commerce website for electronics that offers an intuitive user interface, detailed product information, secure payment options, and a seamless browsing and checkout experience.

**Design Solution:** The proposed e-commerce website will leverage the MERN stack (MongoDB, Express.js, React.js, and Node.js) to create a dynamic and robust platform. Here are responses to specific questions concerning the design:

1. **Question: What features should be included in the e-commerce website for electronics?**
   - Product Catalog: Display electronics products with images, specifications, and customer reviews.
   - User Authentication: Allow customers to create accounts and sign in for personalized experiences.
   - Shopping Cart: Implement a user-friendly shopping cart to add, update, and remove products.
   - Payment Gateway: Integrate a secure payment gateway for safe online transactions.
   - Search Functionality: Provide an advanced search feature to help users find products quickly.
   - Product Filters: Enable users to filter products based on brand, price, category, etc.
   - User Reviews & Ratings: Allow customers to rate and review products for better decision-making.
   - Order Tracking: Provide order status updates and tracking information for customers.
   - Admin Dashboard: Create a dashboard for administrators to manage products, orders, and users.

2. **Question: How will you handle user authentication and authorization?**
   - Response: User authentication will be implemented using JWT (JSON Web Tokens) and bcrypt for secure password hashing. Different user roles (e.g., customer and admin) will be created for access control.

3. **Question: How will you manage the electronics product catalog and categories?**
   - Response: The electronics product catalog will be stored in a MongoDB database. Each product will have attributes like name, description, price, specifications, images, and category. Categories will be structured in a hierarchical manner or using tags.

4. **Question: How will you implement the shopping cart functionality?**
   - Response: The shopping cart will be implemented as a client-side feature using React. It will allow users to add, remove, and update products in the cart, and the cart data will be stored in the browser's local storage or as a session on the server.

5. **Question: How will you handle online payments securely?**
   - Response: We will integrate a secure payment gateway (e.g., Stripe) to handle online payments. Customers can use credit/debit cards or digital wallets for transactions.

6. **Question: How will you manage user reviews and ratings for electronic products?**
   - Response: Users will be able to submit reviews and ratings for electronic products. This data will be stored in the database and displayed on the product pages to assist other customers in making informed decisions.

7. **Question: How will you implement the search functionality for electronic products?**
   - Response: We will use MongoDB's text search capabilities for basic search requirements, allowing users to search for electronic products based on keywords. 

8. **Question: How will the admin dashboard work for managing electronics products and orders?**
   - Response: The admin dashboard will require secure login access and will allow authorized administrators to manage electronics products (add, update, delete) and process orders. It will also feature sales analytics and user management capabilities.

---------------

### FRONTEND: Client

1. React
2. React-Bootstrap
3. React-Router-Dom
4. React-Redux
5. React-Scripts
6. React-Icons
7. Axios
8. Redux
9. Redux-Toolkit

### BACKEND: Server

1. node.js
2. express
3. Mongoose Query
4. mongoDB Atlas
5. bcryptjs
6. jsonwebtoken
7. dotenv
8. express-async-handler
9. nodemon
10. concurrently
11. colors


### PROJECT: Setup

- MongoDB
- Mongoose/Cumpass
- PostMan
- Bootstrap
- React
- VS Code
- Redux
- GitHub
- GitHub Copilot Chat
- Google Chrome Dev Tools
- Google Chrome React Dev Tools


