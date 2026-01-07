# 🌲 YelpCamp – Full-Stack Campground Management System

A full-stack web application that allows users to **discover, create, review, and manage campgrounds**, featuring secure authentication, authorization, interactive maps, and clean backend architecture.

This project focuses heavily on **backend design, data modeling, and real-world application logic**.

---

## 🚀 Features

- 🔐 User authentication & authorization (register / login / logout)
- 🏕 Create, edit, and delete campgrounds
- ⭐ Add reviews and ratings
- ❤️ Save favorite campgrounds per user
- 🗺 Interactive map with campground locations
- 🧾 Ownership-based permissions
- ⚠️ Centralized error handling & validation
- 📦 Clean MVC-based backend structure

---
## 🧱 Project Architecture & Folder Structure

The project follows a **clear MVC-style backend architecture** with separation of concerns:

```text
YELPCAMP/
│
├── cloudinary/            # Cloudinary image upload configuration
│
├── controllers/           # Request handling & business logic
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
│
├── models/                # Mongoose data models
│   ├── campground.js
│   ├── review.js
│   └── user.js
│
├── routes/                # Express route definitions
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
│
├── views/                 # EJS templates (UI rendering)
│
├── public/                # Static assets (CSS, JS)
│
├── utils/                 # Utility helpers (error handling, wrappers)
│   ├── ExpressError.js
│   └── catchAsync.js
│
├── seeds/                 # Database seeding scripts
│
├── middleware.js          # Authentication & authorization middleware
├── schemas.js             # Joi validation schemas
├── app.js                 # Application entry point
│
├── .env                   # Environment variables
├── .gitignore
├── package.json
└── package-lock.json
```
---
## 🧠 Backend Logic & Design Decisions

### 🔹 Controllers
- Handle incoming requests
- Contain application logic
- Keep routes clean and readable

### 🔹 Routes
- RESTful routing
- Delegates logic to controllers
- Applies middleware where needed

### 🔹 Models
- MongoDB schemas using Mongoose
- Defines relationships between:
  - Users
  - Campgrounds
  - Reviews

### 🔹 Middleware
- Authentication checks
- Authorization (resource ownership)
- Route protection
- Request validation

### 🔹 Utils
- Centralized async error handling
- Custom error classes for consistent responses

---

## 🔐 Authentication & Authorization

- Passwords are securely hashed before storage
- Session-based authentication using Passport.js
- Middleware protects sensitive routes
- Authorization ensures:
  - Only authenticated users can create content
  - Only owners can edit or delete their resources

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- Passport.js
- bcrypt
- express-session

### Validation
- Joi

### Frontend / Views
- EJS
- Bootstrap

### External Services
- Cloudinary (image uploads)
- Mapbox (maps & geolocation)

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js
- MongoDB (local or cloud)

### Steps

```bash
git clone https://github.com/Anas-Bdev/YelpCamp.git
cd YelpCamp
npm install
npm start
