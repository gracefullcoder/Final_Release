## Deployment
[Deployment Link - Koe the Cafe Admin Dashboard](https://admin-koe-the-cafe.onrender.com)

# Koe the Cafe

Welcome to Koe the Cafe's dynamic website repository! This project empowers administrators to effortlessly manage every section of the website, ensuring a seamless and captivating user experience. With a strong emphasis on frontend aesthetics and functionality, Koe the Cafe offers a delightful journey for visitors.

## Introduction

Koe the Cafe is not just a website; it's an experience! Administrators can easily customize every aspect of the site, from its appearance to the content, ensuring that visitors are always engaged and delighted. Whether it's booking a table for a cozy evening or registering for exciting workshops, Koe the Cafe brings convenience and excitement to every visitor.

## Key Features

- **Dynamic Content Management:** Admins can update, add, or remove content in real time, ensuring that the website is always fresh and engaging.
- **Visitor Interaction:** Visitors can book tables for dining experiences and register for workshops directly from the website, enhancing user engagement.
- **Notifications:** Admins can create notifications for users. Users will see these new messages when they log in, keeping them informed and engaged.
- **User Dashboard:** Users can manage their bookings, view their previous bookings and registered workshops, and edit their bookings, workshop registrations, and testimonials in their personalized dashboard.
- **MVC Architecture:** The codebase follows a structured MVC (Models, Views, Controllers) architecture, making it modular, scalable, and easy to maintain.
- **Server-side Schema Validation:** Proper server-side schema validation is implemented using Joi, ensuring data integrity and security.
- **Error Handling:** Robust error handling mechanisms are in place to provide a smooth and error-free experience for users.
- **Database:** MongoDB is used as the database, providing flexibility and scalability for managing dynamic content.
- **Server-side:** The server is powered by Express.js and Node.js, delivering a robust and efficient backend for seamless user experiences.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Frontend:** EJS, Bootstrap
- **File Uploads:** Multer, ImageKit
- **Environment Management:** dotenv
- **Schema Validation:** Joi
- **Error Handling:** Proper error handling mechanisms
- **Code Structure:** MVC Architecture
- **Other Tools:** method-override for RESTful routing, and more.

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed

### Installation

1. Clone repository:
    ```bash
    git clone https://github.com/your-username/koe-the-cafe.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create `.env` file in root directory.
2. Add environment variables for MongoDB URL and ImageKit credentials.

### Running the Server

1. Start MongoDB:
    ```bash
    mongod
    ```
2. Run the project:
    ```bash
    npm start
    ```

### Accessing Admin Dashboard

- Visit `http://localhost:8080/admin` in the browser

With these steps and features, Koe the Cafe ensures both administrators and users have a smooth and enjoyable experience managing and interacting with the website.
