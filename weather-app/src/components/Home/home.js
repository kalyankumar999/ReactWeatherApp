import React, { useEffect, useState } from 'react'
import HomePageImg from '../../assets/images/weatherhome.jpg'
import SunRiseImg from '../../assets/images/brightness.png'
import './home.css';



const Home = (props) => {

const {weatherData, location,  homeRef}=props

    const [dateTime, setDateTime] = useState(new Date());
  
    useEffect(() => {
      
        setDateTime(new Date());
    
      
    }, []);
    
    const date = dateTime.toLocaleDateString();
    const timeOptions = { hour12: true, hour: 'numeric', minute: 'numeric' };
    const time = dateTime.toLocaleTimeString([],timeOptions);
    
    const day = dateTime.toLocaleString('default', { weekday: 'long' });

  return (
    <div ref={homeRef} className='container'>
      
        <div className='details'>
            <div className='detailsHead'>
             Weather Details
            </div>
            <div className='detailsvalues'>
                <div>Cloud</div>
                <div> {weatherData?.clouds?.all}%</div>
            </div>
            <div className='detailsvalues'>
                <div>Humidity</div>
                <div> {weatherData?.main?.humidity}%</div>
            </div>
            <div className='detailsvalues'>
                <div>Wind</div>
                <div> {weatherData?.wind?.speed} km/hr</div>
            </div>

        </div>
        <div className='updates'>
            <div >
                <div className='temparature'  >
                    { weatherData?.main && Math.trunc(weatherData?.main?.temp)}°C</div>
            </div>
            <div className='place_time'>
               <div className='place'>
                   {weatherData?.name ? weatherData?.name : location}
               </div>
               <div className='time'>
                {time} {day}{date} 
               </div>
            </div>
            <div className='logo'>
             <img src={SunRiseImg} className='logoIcon'/>
            </div>

        </div>

        <img src={HomePageImg}  className='homeimage'/>
        
    </div>
  )
}

export default Home;