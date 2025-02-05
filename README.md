## 🤝 TrustEase – Your Reliable Service Review Platform
(Add a clean screenshot here)

## 🚀 Project Overview

- TrustEase is a Service Review System that allows users to explore services, add their own services, and share their experiences through reviews. Users can manage their services, update their reviews, and interact with others to make informed decisions. This platform provides a seamless and secure way to review and engage with various services.

## 🛠️ Tech Stack

- Frontend: React.js, Tailwind CSS, Framer Motion, React Router
- Backend: Node.js, Express.js, MongoDB
- Authentication: Firebase Authentication, JWT (JSON Web Token)
- UI Enhancements: React Rating, Swiper.js, React CountUp
- Hosting: Netlify (Client), Vercel (Server), Firebase

## 🌟 Core Features

✅ User Authentication: Email/password login and Google/GitHub sign-in
✅ Service Management: Add, update, and delete services dynamically
✅ Review System: Users can add, update, and delete reviews with ratings
✅ Private Routes: Secured access for adding services and managing reviews
✅ Search & Filtering: Find services based on keywords and categories
✅ JWT Authentication: Secure API routes with token-based authentication
✅ Pagination & Responsive UI: Optimized for all devices with smooth navigation
✅ Real-time Stats: React CountUp to display service and user statistics

## 📦 Dependencies

### Below are the key dependencies used in the project:

1. Client-Side (Frontend)
- React.js
- React Router DOM
- Firebase Authentication
- Tailwind CSS / Material Tailwind
- React Rating (for star ratings)
- Framer Motion (for animations)
- Swiper.js (for sliders)
- React Toastify / SweetAlert (for notifications)
- React CountUp (for statistics)
2. Server-Side (Backend)
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)

## 🏗️ Installation & Setup
### Follow these steps to set up the project locally:

### 1️⃣ Clone the Repositories

- bash
- Copy
- Edit
- git clone <CLIENT_REPO_URL>
- git clone <SERVER_REPO_URL>
### 2️⃣ Install Dependencies

### Navigate into both the client and server directories and install dependencies:

- bash
- Copy
- Edit

# For client-side

- cd client
- npm install

# For server-side

- cd server
- npm install

### 3️⃣ Set Up Environment Variables

### Create a .env file in the server directory and add the following:

- env
- Copy
- Edit
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key

### For the client, set up Firebase credentials in an .env file:

- env
- Copy
- Edit
- REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain

### 4️⃣ Run the Server & Client

- bash
- Copy
- Edit

# Start the backend server

- cd server
- npm run dev  

# Start the frontend client
- cd client
- npm start  

## 🔗 Live Links & Resources

1. Live Site: https://trust-ease-client.web.app/
2. Client GitHub Repo: https://github.com/monzila-akter/trust-ease-client
3. Server GitHub Repo: https://github.com/monzila-akter/trust-ease-server


## 6.Required document link:

- https://docs.google.com/document/d/1pG3Lea3dzAqI2bgxgob1oh1lmnk7pSpG3gaXeBWfUbg/edit?tab=t.0#heading=h.7hjcn4q0n6sx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
