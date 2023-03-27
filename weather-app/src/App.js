import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";




const api = "c366f5b2130a6046beb5b9522272a0ee"

function App() {

  const [location, setLocation] = useState("Bangalore");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c366f5b2130a6046beb5b9522272a0ee&units=metric`;
  
  useEffect(()=>{
      axios.get(url).then((response)=>{
          setWeatherData(response?.data)
      })
  },[])
  
  const [weatherData, setWeatherData] = useState({})
  
  const searchCity = (event)=>{
      axios.get(url).then((response)=>{
          setWeatherData(response?.data)
      })
  }

  const homeRef = useRef();
  const citiesRef = useRef();
  const newsRef = useRef();

  const smoothScroll = (event)=>{
   
    event.current.style.animation = "fad_in 1s";
    
    window.scrollTo({
      top: event?.current?.offsetTop -60,     
      behavior: "smooth",
      
    });
  }

  

  return (
    <div className="app">
    
      
       <Header 
       setLocation={setLocation} 
       searchCity={searchCity} 
       smoothScroll={smoothScroll}
       homeRef={homeRef}
       citiesRef={citiesRef}
       newsRef={newsRef}
       />
      <Home location={location} weatherData={weatherData}  homeRef={homeRef}/>
       <Content citiesRef={citiesRef}/>
       <Footer newsRef={newsRef}/>
    </div>
  );
}

export default App;
