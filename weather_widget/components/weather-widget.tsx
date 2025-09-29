"use client"; // Marks this component as a Client Component in Next.js

import { useState, ChangeEvent, FormEvent } from "react"; // Import React hooks and types
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for animations
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Import Card components for UI
import { Input } from "@/components/ui/input"; // Import Input component for user input
import { Button } from "@/components/ui/button"; // Import Button component for actions
import { CloudIcon, MapPinIcon, ThermometerIcon } from "lucide-react"; // Import icons for weather details

// Define the structure of weather data
interface WeatherData {
  temperature: number; // Temperature in Celsius
  description: string; // Weather description (e.g., "Sunny")
  location: string; // Location name (e.g., "New York")
  unit: string; // Temperature unit (e.g., "C")
}

export default function WeatherWidget() {
  // State for the location input
  const [location, setLocation] = useState<string>("");
  // State for storing weather data
  const [weather, setWeather] = useState<WeatherData | null>(null);
  // State for handling errors
  const [error, setError] = useState<string | null>(null);
  // State for loading status
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function to handle form submission
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    const trimmedLocation = location.trim(); // Trim whitespace from the location input
    if (trimmedLocation === "") {
      setError("Please enter a valid location."); // Set error if location is empty
      setWeather(null); // Clear weather data
      return;
    }
    setIsLoading(true); // Set loading state to true
    setError(null); // Clear any previous errors

    try {
      // Fetch weather data from the API
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${trimmedLocation}`
      );
      if (!response.ok) {
        throw new Error("City not found"); // Throw error if city is not found
      }
      const data = await response.json(); // Parse response data
      const weatherData: WeatherData = {
        temperature: data.current.temp_c, // Extract temperature
        description: data.current.condition.text, // Extract weather description
        location: data.location.name, // Extract location name
        unit: "C", // Set unit to Celsius
      };
      setWeather(weatherData); // Update weather state with fetched data
    } catch (error) {
      console.log("Error fetching weather data:", error); // Log error to console
      setError("City not found. Please try again."); // Set error message
      setWeather(null); // Clear weather data
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  // Function to generate a temperature message based on the temperature value
  const getTemperatureMessage = (temperature: number, unit: string): string => {
    if (unit === "C") {
      if (temperature < 0) {
        return `It's freezing at ${temperature}°C! Bundle up!`; // Freezing temperature
      } else if (temperature < 10) {
        return `It's quite cold at ${temperature}°C! Wear a jacket!`; // Cold temperature
      } else if (temperature < 20) {
        return `It's a bit chilly at ${temperature}°C! Comfortable for a light jacket.`; // Chilly temperature
      } else if (temperature < 30) {
        return `It's a pleasant ${temperature}°C. Enjoy the nice weather!`; // Pleasant temperature
      } else {
        return `It's hot at ${temperature}°C! Stay hydrated!`; // Hot temperature
      }
    } else {
      return `${temperature}°${unit}`; // Default message for other units
    }
  };

  // Function to generate a weather message based on the weather description
  const getWeatherMessage = (description: string): string => {
    switch (description.toLowerCase()) {
      case "sunny":
        return "It's sunny outside. Don't forget your sunglasses!"; // Sunny weather
      case "partly cloudy":
        return "It's partly cloudy. Enjoy the sun!"; // Partly cloudy weather
      case "cloudy":
        return "It's cloudy outside. No need for sunglasses!"; // Cloudy weather
      case "overcast":
        return "It's overcast. No sun today!"; // Overcast weather
      case "rain":
        return "It's raining. Don't forget your umbrella!"; // Rainy weather
      case "thunderstorm":
        return "It's thunderstorming. Stay inside!"; // Thunderstorm weather
      case "snow":
        return "It's snowing. Bundle up!"; // Snowy weather
      case "mist":
        return "It's misty outside."; // Misty weather
      case "fog":
        return "It's foggy outside. Drive safely!"; // Foggy weather
      default:
        return `It's ${description.toLowerCase()} outside.`; // Default message for other descriptions
    }
  };

  // Function to generate a location message based on the time of day
  const getLocationMessage = (location: string): string => {
    const currentHour = new Date().getHours(); // Get current hour
    const isNight = currentHour >= 18 || currentHour < 6; // Check if it's night time
    return `${location} ${isNight ? "at Night" : "During the Day"}`; // Return location with time of day
  };

  return (
    // Main container with a gradient background
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 to-purple-500">
      {/* Animated card container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        transition={{ duration: 0.5 }} // Animation duration
        className="w-full max-w-md mx-auto" // Styling for the card container
      >
        {/* Card component for the weather widget */}
        <Card className="shadow-lg rounded-lg overflow-hidden">
          {/* Card header with gradient background */}
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardTitle className="text-2xl font-bold">Weather Widget</CardTitle> {/* Card title */}
            <CardDescription className="text-white/90">
              Search for the current weather conditions in your city. {/* Card description */}
            </CardDescription>
          </CardHeader>
          {/* Card content area */}
          <CardContent className="p-6">
            {/* Form for location input and search button */}
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Enter a city name"
                value={location}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLocation(e.target.value) // Update location state on input change
                }
                className="flex-1" // Input styling
              />
              <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
                {isLoading ? "Loading..." : "Search"} {/* Button text changes based on loading state */}
              </Button>
            </form>
            {/* AnimatePresence for error message animations */}
            <AnimatePresence>
              {error && ( // Display error message if error exists
                <motion.div
                  initial={{ opacity: 0, y: -10 }} // Initial animation state
                  animate={{ opacity: 1, y: 0 }} // Animation when error appears
                  exit={{ opacity: 0, y: -10 }} // Animation when error disappears
                  className="mt-4 text-red-500" // Styling for error message
                >
                  {error} {/* Display error message */}
                </motion.div>
              )}
            </AnimatePresence>
            {/* AnimatePresence for weather data animations */}
            <AnimatePresence>
              {weather && ( // Display weather data if available
                <motion.div
                  initial={{ opacity: 0, y: 20 }} // Initial animation state
                  animate={{ opacity: 1, y: 0 }} // Animation when weather data appears
                  exit={{ opacity: 0, y: 20 }} // Animation when weather data disappears
                  className="mt-4 grid gap-4" // Styling for weather data container
                >
                  {/* Temperature information */}
                  <div className="flex items-center gap-2">
                    <ThermometerIcon className="w-6 h-6 text-blue-500" /> {/* Temperature icon */}
                    <span className="text-lg">
                      {getTemperatureMessage(weather.temperature, weather.unit)} {/* Temperature message */}
                    </span>
                  </div>
                  {/* Weather description */}
                  <div className="flex items-center gap-2">
                    <CloudIcon className="w-6 h-6 text-blue-500" /> {/* Weather icon */}
                    <span className="text-lg">
                      {getWeatherMessage(weather.description)} {/* Weather message */}
                    </span>
                  </div>
                  {/* Location information */}
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-6 h-6 text-blue-500" /> {/* Location icon */}
                    <span className="text-lg">
                      {getLocationMessage(weather.location)} {/* Location message */}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}