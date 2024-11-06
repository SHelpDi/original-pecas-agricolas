export async function getWeatherData() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=c84b496246834a438ae191258242905&q=cascavel-269450&lang=pt",
    { cache: "no-store", mode: "no-cors" }
  );
  const data = await response.json();
  return data;
}

export async function exibirDados() {
  const dados = await getWeatherData();
  return dados;
  //console.log(dados);
}

/* { cache: "no-store", mode: "no-cors" } */

/* const response = await fetch(
  "https://api.weatherapi.com/v1/current.json?key=c84b496246834a438ae191258242905&q=cascavel-269450&lang=pt",
  { cache: "no-store", mode: "no-cors" }
);
const weatherDataJson = await response.json();
const weatherData = await weatherDataJson.current.condition.text;
return weatherData;

export const data = weatherData; */