# flag_management_system

# Multi-Tenant Feature Flag Management System

A full-stack multi-tenant SaaS-style feature flag management system built using:

- Node.js
- Express.js
- MongoDB
- React + Vite
- JWT Authentication

This project supports:

- Super Admin
- Organization Admin
- End User Feature Checker

---

# Features

## Super Admin

- Login using static credentials
- Create organizations
- View organizations

---

## Organization Admin

- Signup
- Login
- Create feature flags
- Enable/disable features
- Delete features

---

## End User

- Check whether a feature is enabled
- Public feature checker UI

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- express-validator

---

## Frontend

- React
- Vite
- React Router DOM
- Axios
- Bootstrap

---

# Project Structure

```txt
feature-flag-system/
│
├── backend/
│
├── feature-flag/
│
├── frontend-super-admin/
│
├── frontend-user/
│
└── README.md


```

# Prerequisites

Install the following:

Node.js
MongoDB Community Server
VS Code

# Clone Project

git clone YOUR_GITHUB_REPOSITORY_URL

cd feature-flag-system

```

# Backend Setup
Step 1 — Navigate to Backend

 cd backend

Step 2 — Install Dependencies
npm install

Step 3 — Create .env

Create:

backend/.env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/feature-flag-system

JWT_SECRET=supersecretkey

SUPER_ADMIN_EMAIL=superadmin@system.com
SUPER_ADMIN_PASSWORD=SuperAdmin@123
```

npm run dev

# Run Frontend Admin

Step 1
cd frontend-admin

Step 2
npm install

Step 3
npm run dev

URL : http://localhost:5173

# Run Frontend Super Admin

Step 1
cd frontend-super-admin

Step 2
npm install

Step 3
npm run dev

URL : http://localhost:5174

# Run Frontend User

Step 1
cd frontend-user

Step 2
npm install

Step 3
npm run dev

URL : http://localhost:5175