# GIF Store Project

This project is a web application that allows users to view trending GIFs, search for GIFs, and purchase them using a mock payment system. The application is built with React on the frontend and Node.js with Express on the backend, integrating with the Giphy API to fetch GIF data.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1 or later)

## Setting Up the Backend

1. **Navigate to the Backend directory:**

    ```bash
    cd Backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```


3. **Start the backend server:**

    ```bash
    node server.js
    ```

    The backend server should now be running on `http://localhost:5000`.

## Setting Up the Frontend

1. **Navigate to the Frontend directory:**

    ```bash
    cd Frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    ```

    The frontend server should now be running on `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the search bar to search for GIFs.
3. View trending GIFs and search results.
4. Click on any GIF to select it for purchase.
5. Proceed to the mock payment form and complete the purchase.

## API Endpoints

- **GET /api/trending**: Fetches trending GIFs.
- **GET /api/search**: Searches for GIFs based on a query parameter.

## Notes

- This project uses mock data for the payment system.
- Ensure that your backend server is running on `http://localhost:5000` before starting the frontend server.
- The frontend server runs on `http://localhost:3000`.

## Technologies Used

- **Frontend**: React, TypeScript, styled-components
- **Backend**: Node.js, Express
- **API Integration**: Giphy API
