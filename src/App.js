import React, {useState} from 'react'
import Form from "./components/Form"
import Weather from "./components/Weather"
import Titles from "./components/Titles"
import './App.css'

const API_KEY = "ded44ff7a0471b1b73ff02419427afdc"

const App = () => {
  const [weather, setWeather] = useState({
    id: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  })
  const getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()

    if(city && country){
    setWeather({
      id: data.sys.id,
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ''
    })
  }else{
    setWeather({
      id: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "Please Enter the values"
    })
  }
  }
  return (
    <>
    <div className="main">
      <Titles/>
      <div className="container content-right">
        <Form getWeather={getWeather}/>
        <Weather weather={weather}
        />
      </div>
    </div>
    <h2>Designed by: <a href="mailto:abayomi.olatunjio@gmail.com">Abayomi Olatunji</a></h2>
    </>
  )
}

export default App
