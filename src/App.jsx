import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import "./Images/sky.png"
function App() {
  
  const URL="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  
  useEffect(() => {
    const success=pos=>{
      const obj={
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  useEffect(() => {
    if(coords){
      const apikey=`bc64ff622b16004578aeb03d01cbb035`
      const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`
      axios.get(URL)
        .then(res=>{
        const celsius=(res.data.main.temp - 273.15).toFixed(1)
        const farenheit=(celsius*9/5+32).toFixed(1)
        setTemperature({celsius,farenheit})
        setWeather(res.data)
      })
        .catch(err=>console.log(err))
    }
    
  }, [coords])
  
  return (
    <div className="App">
      <WeatherCard weather={weather}
      temperature={temperature}/>
    </div>
  )
}

export default App
