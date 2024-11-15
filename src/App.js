
import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm'; // Importing the form component
import WeatherDisplay from './components/WeatherDisplay'; // Importing the display component
import './styles.css'; // Importing styles for the app

/**
 * App component is the main component that manages the state for weather data, city input, 
 * and error messages. It also handles the interaction between the form and weather data display.
 */
const App = () => {
  // State hooks to manage weather data, city name, and error message
  const [weatherData, setWeatherData] = useState(null); // Holds the weather data fetched from the API
  const [city, setCity] = useState(''); // Holds the name of the city entered by the user
  const [errorMessage, setErrorMessage] = useState(''); // Holds any error messages to display

  /**
   * fetchWeather function fetches weather data for a given city.
   * It first checks if the device is online and then makes requests to fetch city coordinates
   * and weather data based on those coordinates.
   */
  const fetchWeather = async (cityName) => {
    // Reset the error message and weather data before making a new request
    setErrorMessage('');
    setWeatherData(null);
    setCity(cityName);

    // Check if the device is offline
    if (!navigator.onLine) {
      setErrorMessage("You are offline. Please check your internet connection.");
      return; // Exit the function if offline
    }

    try {
      // Fetch the city coordinates (latitude and longitude) using Open Meteo's geocoding API
      const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);
      if (!geoResponse.ok) throw new Error("Failed to fetch city coordinates.");

      const geoData = await geoResponse.json();
      if (!geoData.results || geoData.results.length === 0) {
        setErrorMessage("City not found. Please try a different city.");
        return; // Exit if no city results found
      }

      const { latitude, longitude } = geoData.results[0]; // Extract latitude and longitude from the response

      // Fetch weather data for the city using its coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!weatherResponse.ok) throw new Error("Failed to fetch weather data.");

      const weather = await weatherResponse.json(); // Parse the weather data response
      setWeatherData({
        temp: weather.current_weather.temperature, // Current temperature in °C
        wind: weather.current_weather.windspeed, // Current wind speed in m/s
        humidity: weather.current_weather.humidity || "N/A", // Current humidity percentage or "N/A" if not available
      });
    } catch (error) {
      // Set the error message in case of any issues
      setErrorMessage(error.message || "An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="weather-app">
      {/* Main container for the app, with background, padding, and centered content */}
      <div className="dialogue-box bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-md mx-auto">
        {/* App title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">WeatherNow</h1>
        
        {/* WeatherForm component, passing fetchWeather as a prop */}
        <WeatherForm fetchWeather={fetchWeather} />

        {/* Display error message if any */}
        {errorMessage && <p className="text-red-600 mt-4 text-center">{errorMessage}</p>}

        {/* Display weather data if available */}
        {weatherData && <WeatherDisplay weatherData={weatherData} city={city} />}
      </div>
    </div>
  );
};

// Exporting the App component to be used in the main index.js or other entry files
export default App;
