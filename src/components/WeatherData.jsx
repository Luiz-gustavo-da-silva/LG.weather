import { CompassOutlined, CloudOutlined, CarOutlined } from "@ant-design/icons";
import { useEffect } from "react";

function WeatherData({ data }) {
  const { name, temp, desc, urlIconCountry, urlIconElement, umid, wind } =
    data;

  useEffect(() => {
  }, [data]);

  return (
    <>
      <div id="weather-data">
        <h2>
          <CompassOutlined />
          <span>{name}</span>
          <img src={urlIconCountry} alt="Bandeira do país" />
        </h2>
        <p id="temepatura">{temp} °C</p>
        <div id="description-container">
          <p id="description">{desc}</p>
          <img
            src={urlIconElement}
            alt="Condição do tempo"
            id="weather-icon"
          />
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
