import { CompassOutlined, CloudOutlined, CarOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

function WeatherData() {
  var cidade = "Santa Cruz";
  var temp = 59;
  var desc = "Nublado";
  var umid = 48;
  var wind = 3;
  return (
    <>
      <div id="weather-data">
        <h2>
          <CompassOutlined />
          <span>{cidade}</span>
          <img src="https://www.countryflagicons.com/FLAT/64/BR.png"/>
        </h2>
        <p id="temepatura">{temp} °C</p>
        <div id="description-container">
          <p id="description">{desc}</p>
          <img src="https://openweathermap.org/img/wn/01d.png" alt="Condição do tempo" id="weather-icon" />
        </div>
        <div id="details-container">
          <p id="umidity">
            <CloudOutlined />
            <span>{umid}%</span>
          </p>
          <p id="wind">
            <CarOutlined />
            <span>{wind}Km/h</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default WeatherData;
