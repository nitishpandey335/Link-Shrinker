<<<<<<< HEAD
# URL Shortener with JWT Authentication

A full-stack URL shortener application with JWT-based authentication, comprehensive analytics, and modern UI components.

## Features

- **Authentication**: JWT-based authentication with modern login/register forms
- **User Management**: User-specific URL management with secure sessions
- **Analytics Dashboard**: Comprehensive analytics with visual charts and statistics
- **Modern UI**: Component-based architecture with improved design
- **Responsive Design**: Mobile-first design that works on all devices
- **URL Management**: Create, view, and track shortened URLs
- **Click Analytics**: Detailed click tracking and performance metrics
- **Component Architecture**: Modular, maintainable codebase

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, JWT
- **Frontend**: React, TypeScript, Vite
- **Authentication**: JWT tokens with bcrypt password hashing
- **UI Components**: Custom React components with modern CSS

## Component Architecture

### Frontend Components
- **AuthForm**: Modern login/register interface with password visibility toggle
- **Navbar**: Responsive navigation with user profile and logout functionality  
- **Analytics**: Comprehensive dashboard with statistics and visual charts
- **UrlShortener**: Enhanced URL creation form with success feedback
- **UrlList**: Improved URL display with better card design and interactions

## Setup

### Backend
1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Set environment variables:
   ```
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   ```
4. Start server: `npm run dev`

### Frontend
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Authentication Flow

1. Users must register/login to access the application
2. JWT tokens are stored in localStorage
3. All URL operations require authentication
4. Users can only see and manage their own URLs

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### URLs (Protected)
- `POST /api/shorten` - Create short URL
- `GET /api/urls` - Get user's URLs
- `GET /:shortUrl` - Redirect to original URL (public)

## Environment Variables

Create a `.env` file in the backend directory with:
```
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/url-shortener
``` 
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 5340ab254efa15c49dbc6ca285cac03b083a478d
