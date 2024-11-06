'use client'
import { createContext, useContext } from "react";
import { getWeatherData, exibirDados } from "./server-components/fetch-api-weather";



const weather = exibirDados();
console.log(weather);

const WeatherContext = createContext(weather);
export async function WeatherProvider({ children }) {

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => useContext(WeatherContext);
