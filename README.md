# Weather-now

A real-time weather application built with React that fetches data from the Open Meteo API. This app allows users to view weather details such as temperature, humidity, wind speed, and more based on their location or manually entered city.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Features
- **Real-time weather data**: Fetches live weather data from the Open Meteo API.
- **Responsive Design**: Works on all screen sizes.
- **User-Friendly UI**: Displays relevant weather details with an intuitive layout.
- **Error Handling**: Graceful handling for scenarios like no internet connection, invalid city input, and API errors.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **API**: Open Meteo API
- **State Management**: React useState, useEffect
- **Routing**: React Router (if applicable)

## Prerequisites
Before running the app locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Usage
Open the app in your browser.
- Search by City: Enter the name of the city in the search bar to get the weather details for that location.
- Automatic Location: The app automatically detects the user’s location and shows the weather details for the current location.
- Weather Details: The app displays various weather information such as temperature, humidity, wind speed, and more.
- Hourly Forecast: View hourly predictions for the next 24 hours.

## Error Handling
- No Internet Connection: If there is no internet, an error message will be displayed: "You are offline. Please check your internet connection."
- Invalid City: If a user enters an invalid city or one that doesn't exist, an error message "City not found" will be displayed.
- API Issues: If the API fails to fetch data (e.g., due to an API limit), an error message will be shown to the user.