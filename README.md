# User_Info_Curd_App# User Management Application

This is a user management application built with Vite, React, Redux Toolkit, and React Bootstrap. The application fetches user data from an API, displays it in a table, and allows you to add, edit, and delete users. It also includes a loader with a backdrop to indicate loading states.

## Features
- Fetch users from an API and display them in a table.
- Add a new user.
- Edit an existing user.
- Delete a user.
- Loader with backdrop for loading states.

## Prerequisites
- Node.js
- npm

## Getting Started

### 1. Clone the Repository


git clone https://github.com/AnirudhDadhich-200210/User_Info_Curd_App.git
cd user-management-app/React_Demo_Project

### 2. Install Dependencies
npm install

### 3. Start the Development Server
npm run dev

The application will be available at http://localhost:5173.

src/
│
├── App.jsx
├── index.js
├── Features/
│   ├── userSlice.js
│   └── UserData.jsx
├── Components/
│   ├── FormInput.jsx
││  ├── UserModal.jsx
│  
└── store.js

### 4.Key Files and Directories
- src/App.jsx: Main application component.
- src/index.js: Entry point for the React application.
- src/Features/userSlice.js: Redux slice for managing user state.
- src/Features/UserData.jsx: Main component for displaying and managing user data.
- src/Components/FormInput.jsx: Reusable form input component.
- src/Components/Loader.jsx: Loader component with a backdrop.
- src/Components/UserModal.jsx: Modal component for adding and editing users.
- src/store.js: Redux store configuration.

### 5.Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run serve`: Serve the built application locally.


### 6.Dependencies
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **Redux Toolkit**: The official, recommended way to write Redux logic.
- **React Bootstrap**: A popular front-end framework for React.


### 7.DevDependencies
- **prop-types**: Runtime type checking for React props.

