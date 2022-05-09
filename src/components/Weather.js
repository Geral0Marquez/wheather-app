
import {useEffect, useState} from 'react';
import axios from 'axios';



const Weather = () => {
   
    const [ weather, setWeather] = useState({});
    const [ isCelsius, setCelcius]= useState(true)
    
    
    console.log(weather)
    
    useEffect(()=>{ 
        function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=6196b00b02467c7fbaeb222e065b6d90`)
        .then((res) => {
                setWeather(res.data);
        }); 

    
      };
      
      function error(err) {
        console.log("El usuario no permitió dar la ubicación");
      };
      
      navigator.geolocation.getCurrentPosition(success, error);

    }, [])


    


    const randomColor = Math.floor(Math.random()*climate.length);
    document.body.style = `background: url(${climate[randomColor]}) no-repeat center center fixed;
        -webkit-background-size: cover;
        background-size: 100% 100%`

    const changeUnit = () =>{
        setCelcius(!isCelsius)

    }

    
    return (
        <div className='card'>
                <h2 className="text-center">
                    Weather app
                </h2>

                <p className="text-center sub-title">
                   <b>{weather.name}, {weather.sys?.country}</b> 
                </p>

                <div className='main-box'>
                    <div className='column-1'>
                        <div className='text-center'>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt=""/>
                            <p className='text-black'> { isCelsius? `${ (weather.main?.temp - 273.15).toFixed(2)} °C`: `${(((9*(weather.main?.temp - 273.15))/5)+32).toFixed(2)} °F`} </p>
                        </div>
                       
                    </div>
                    <div className='column-2 text-center size'>
                        <ul>
                            <li> "{weather.weather?.[0].description}" </li>
                                
                            <li>
                                <div className='icon'><i className="fa-solid fa-wind"></i>
                                Wind speed <span className='text'>{weather.wind?.speed} m/s</span></div>  
                                

                            </li>
                                
                            <li>
                                <div className='icon'> <i className="fa-solid fa-cloud"></i>
                                Clouds: <span className='text'>{weather.clouds?.all}% </span></div>  
                               
                            </li>

                            <li>
                                <div className='icon'> <i className="fa-solid fa-temperature-high"></i>
                                    Pressure: <span className='text'>{weather.main?.pressure}<br></br>mb </span> </div> 
                                 
                            </li>

                        </ul>

                    </div>
                </div>
 
            

                <div className="text-center">
                    <button type="button"  onClick={changeUnit} className="change-unit">
                        Degrees °F/°C
                    </button>
                </div>
                
        
        </div>
    );
};

export default Weather;

