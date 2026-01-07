# 🌲 YelpCamp – Campground Management Platform

A full-stack web application that allows users to **discover, create, review, and manage campgrounds**, with secure authentication, authorization, and interactive map integration.  
The project focuses on **backend architecture, security, and real-world application logic**.

---

## 🚀 Features

- 🔐 User authentication & authorization (register / login / logout)
- 🏕 Create, update, and delete campgrounds
- ⭐ Add reviews and ratings for campgrounds
- ❤️ Save favorite campgrounds per user
- 🗺 Interactive map displaying campground locations
- 🧾 Ownership-based permissions (only owners can edit or delete)
- ⚠️ Server-side validation and centralized error handling
- 📦 Clean RESTful routing and MVC structure

---

## 🧠 Core Backend Logic & Concepts

This project was designed to simulate a **real-world backend system**, focusing on:

- RESTful API design using proper HTTP verbs
- Secure authentication using session-based login
- Authorization logic based on resource ownership
- Middleware-driven request validation
- Relational data modeling between users, campgrounds, and reviews
- Centralized error handling for clean and consistent responses
- Defensive programming to handle edge cases and invalid input

The main emphasis is on **data integrity, security, and scalability**.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose (ODM)

### Authentication & Security
- Passport.js
- bcrypt
- express-session

### Frontend / Views
- EJS
- Bootstrap

### Maps & External Services
- Mapbox (geolocation & interactive maps)

### Validation & Utilities
- Joi
- Express middleware

---

## 🔐 Authentication & Authorization Details

- Passwords are **hashed before storage**
- Protected routes implemented using middleware
- Authorization ensures:
  - Only logged-in users can create content
  - Only resource owners can edit or delete their campgrounds or reviews
- Session-based authentication for persistent login

---

## 🗂 Data Model Overview

- **User**
  - Authentication credentials
  - List of favorite campgrounds
- **Campground**
  - Title, description, location, images
  - Reference to owner (User)
  - Associated reviews
- **Review**
  - Rating and comment
  - Reference to author (User)
  - Reference to campground

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

