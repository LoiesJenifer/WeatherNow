
import React from 'react';

/**
 * WeatherDisplay component is responsible for displaying the weather data for a given city.
 * It receives the weather data and city name as props from the parent component.
 * 
 * Props:
 * - weatherData: An object containing the weather data (e.g., temperature, wind speed, humidity).
 * - city: The name of the city for which the weather is being displayed.
 */
const WeatherDisplay = ({ weatherData, city }) => {
  return (
    // Main container for the weather display, styled with padding, background, and rounded corners
    <div className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg max-w-sm w-full">
      {/* City title, dynamically rendering the city name */}
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
        {`Weather in ${city}`}
      </h2>
      <div className="text-center space-y-2">
        {/* Displaying temperature, checking if the data exists and rendering it */}
        <p className="text-lg text-gray-700">
          🌡️ Temperature: 
          <span className="font-semibold">{weatherData.temp} °C</span>
        </p>
        {/* Displaying wind speed, checking if the data exists and rendering it */}
        <p className="text-lg text-gray-700">
          💨 Wind Speed: 
          <span className="font-semibold">{weatherData.wind} m/s</span>
        </p>
        {/* Displaying humidity, if data is missing, display "N/A" */}
        <p className="text-lg text-gray-700">
          💧 Humidity: 
          <span className="font-semibold">{weatherData.humidity || "N/A"} %</span>
        </p>
      </div>
    </div>
  );
};

// Exporting the WeatherDisplay component for use in other parts of the application
export default WeatherDisplay;
