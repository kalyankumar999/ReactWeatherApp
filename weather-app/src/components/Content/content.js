import React, { useEffect, useState } from "react";
import ThunderImg from "../../assets/images/thunder.jpg";
import SunnyImg from '../../assets/images/sunny.jpg'
import CloudyImg from '../../assets/images/cloudy.jpg'
import axios from 'axios';
import "./content.css";
const Content = (props) => {
 

  const {citiesRef}=props;
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const [weatherData1,setWeatherData1] = useState();
const [weatherData2,setWeatherData2] = useState();
const [weatherData3,setWeatherData3] = useState();

  

  useEffect(()=>{
    getWeatherData("Mumbai")
    getWeatherData("Bangalore")
    getWeatherData("Chennai")
  },[])

 const getWeatherData = (location)=> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c366f5b2130a6046beb5b9522272a0ee&units=metric`;
    axios.get(url).then((response)=>{

      switch(location){
        case "Mumbai" : setWeatherData1(response?.data);
        break;
        case "Bangalore" : setWeatherData2(response?.data);
        break;
        case "Chennai" : setWeatherData3(response?.data);
        break;
      }
      
  })
}

  const dailyUpdates = [
    {
      img:ThunderImg,
      effect:weatherData1?.weather[0]?.description,
      temp:Math.trunc(weatherData1?.main?.temp),
      plcae:weatherData1?.name,
      date:date,


    },
    {
      img:SunnyImg,
      effect:weatherData2?.weather[0]?.description,
      temp:Math.trunc(weatherData2?.main?.temp),
      plcae:weatherData2?.name,
      date:date

    },
    {
      img:CloudyImg,
      effect:weatherData3?.weather[0]?.description,
      temp:Math.trunc(weatherData3?.main?.temp),
      plcae:weatherData3?.name,
      date:date

    }
  ]
  return (
    <div ref={citiesRef} className="containerContent">
      <div className="heading"></div>
      <div className="content_2">
        <div className="heading">Cities</div>
        
          
       
        <div className="cardsContainer">
          {dailyUpdates?.map((item)=>{
            return(
              <div className="pic">
              <div className="effectsContainer">
                <img src={item?.img} className="picimg_1" />
                <div className="effects">{item?.effect}</div>
              </div>
  
              <div className="information">
                <div className="temp"> {item?.temp}°</div>
                <div className="place_time">
                  <div className="place_1">{item?.plcae}</div>
                  <div className="time_1"> {item?.date}</div>
                </div>
              </div>
            </div>
            )
          })

         }

        </div>


      </div>
    </div>
  );
};

export default Content;
