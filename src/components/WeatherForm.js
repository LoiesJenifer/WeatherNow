
import React, { useState } from 'react';

/**
 * WeatherForm component allows users to input the name of a city and submit the form
 * to fetch weather data for that city. It communicates with the parent component via the 
 * fetchWeather function passed as a prop.
 * 
 * Props:
 * - fetchWeather: A function passed from the parent component that fetches weather data for a given city.
 */
const WeatherForm = ({ fetchWeather }) => {
  // Local state to store the city input by the user
  const [city, setCity] = useState('');

  /**
   * handleSubmit function is triggered when the form is submitted.
   * It prevents the default form submission behavior, checks if the city input is valid, 
   * calls fetchWeather with the city name, and clears the input field after submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (city.trim()) fetchWeather(city); // If the input is not empty, fetch the weather for the city
    setCity(''); // Clear the input field after submission
  };

  return (
    // The form container, centered and with spacing
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full max-w-md">
      {/* Input field for the city name */}
      <input
        type="text"
        value={city} // Binding the input value to the 'city' state
        onChange={(e) => setCity(e.target.value)} // Updating the state when the user types
        placeholder="Enter city name" // Placeholder text displayed in the input
        className="px-4 py-2 rounded-md border border-gray-300 shadow-sm w-full text-center focus:outline-none focus:ring-2 focus:ring-blue-500" // Tailwind CSS classes for styling
      />
      {/* Submit button to trigger the form submission */}
      <button
        type="submit" // Trigger form submission on click
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all" // Tailwind CSS styling for the button
      >
        Get Weather
      </button>
    </form>
  );
};

// Exporting the WeatherForm component for use in other parts of the application
export default WeatherForm;
