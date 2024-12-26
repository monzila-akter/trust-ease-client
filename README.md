## TRUST EASE

## 2.Purpose:

# The project aims to:

- Enable users to share their experiences with services.

- Provide a platform for managing services and reviews.

- Enhance user interaction with features like dynamic filtering, search, and authentication.

## 3.Key Features:

### General Features

- Fully responsive design for mobile, tablet, and desktop devices.

- Dynamic page titles based on the current route.

- User-friendly layout with proper alignment, spacing, and color contrast.

### User Capabilities

- **Add/Update/Delete Services**: Logged-in users can manage their services efficiently.
- **View Service Details**: Explore detailed information and reviews for any service.
- **Add, Edit, Delete Reviews**: Post reviews with ratings and feedback.
- **Manage My Reviews**: View and manage reviews in a dedicated section.
- **Search and Filter**: Find services by keywords and categories.

### Security

- **Firebase**: Secure authentication using Firebase with environment variables.
- **JWT Authentication**: Secures APIs and ensures user authorization.
- **Environment Variables**: MongoDB credentials and Firebase keys are securely stored.

### UI Enhancements

- **Loading Spinner**: Provides feedback during data load states.
- **Toast Notifications**: Alerts for all CRUD operations.
- **Framer Motion Animations**: Smooth transitions for an engaging user experience.
- **Pagination**: Display 6–9 services per page for better performance.

### Additional Features

- **Meet Our Partners**: Highlights collaborators and partners of the platform.
- **Countup**: Displays the number of users, reviews, and services dynamically.
- **404 Page**: Interactive "Not Found" page for invalid routes.

---

## Authentication System

### Login

- Email and password-based authentication.
- Google or GitHub-based login option.
- Error messages for invalid credentials.

### Register

- Secure registration with password validation:
  - At least 6 characters.
  - One uppercase letter.
  - One lowercase letter.
- Toast notifications for successful registration.

---

## Deployment Guidelines

- **Client-Side Deployment**: Ensure the frontend works flawlessly without reloading errors.
- **Server-Side Deployment**: Secure production server and avoid CORS/404/504 errors.
- **Domain Authorization**: Add domain for Firebase authorization if using Netlify/Surge.


## 4.NPM Package I Have Used:

1. react icon

2. react rating

3. react countup

4. react hot toast

5. sweet alert


## 5.Live Site URL:

- https://trust-ease-client.web.app/
 

## 6.Required document link:

- https://docs.google.com/document/d/1pG3Lea3dzAqI2bgxgob1oh1lmnk7pSpG3gaXeBWfUbg/edit?tab=t.0#heading=h.7hjcn4q0n6sx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
