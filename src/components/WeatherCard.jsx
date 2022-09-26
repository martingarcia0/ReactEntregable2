import React, { useState } from 'react'

const WeatherCard = ({weather,temperature}) => {
    const [isCelsius, setisCelsius] = useState(true)
    const changeTemperature=()=> setisCelsius(!isCelsius)
  return (
    <article className='main'>
        <h1 className='main__tittle'>Weather App</h1>
        <h1 className='main__sub-tittle'>{`${weather?.name},${weather?.sys.country}`}</h1>
        <section className='main__first-section'>
            <img className='main__icon'src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />  
        </section>
        <section className='main__second-section'>
            <h3 className='second__tittle'>{weather?.weather[0].description}</h3>
            <ul className='second__list'>
                <li className="second__span"><span>Wind Speed: </span>{weather?.wind.speed} m/s</li>
                <li className="second__span"><span>Clouds: </span>{weather?.clouds.all} %</li>
                <li className="second__span"><span>Pressure: </span>{weather?.main.pressure} hPa</li>
            </ul>
        </section>
        <h3 className='main__temperature'>{isCelsius?temperature?.celsius + " °C": temperature?.farenheit+" °F"}</h3>
        <button className='main__btn' onClick={changeTemperature}>{isCelsius?"Change to ° F": "Change to ° C"}</button>
    </article>
  )
}

export default WeatherCard