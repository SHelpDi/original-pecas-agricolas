"use client";
import Header from "../components/header";
import Search from "../components/search";
import Carroussel from "../components/carroussel";
import { useWeather } from "@/components/weather-provider";

export default function Home() {
  const nowWeather = useWeather();
  console.log(nowWeather);

  return (
    <>
      <Header />
      <Search />
      <Carroussel />
      <main>Home</main>
    </>
  );
}
