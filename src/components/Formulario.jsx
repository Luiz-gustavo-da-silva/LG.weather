import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import WeatherData from "./WeatherData";

const URL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Formulario() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    getWeatherData(search);

    setSearch("");
  };

  const getWeatherData = async (cidade) => {
    const apiWeatherURL = `${URL}q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    setData({
      name: data.name,
      temp: parseInt(data.main.temp),
      desc: data.weather[0].description,
      urlIconElement: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      urlIconCountry: `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`,
      umid: data.main.humidity,
      wind: data.wind.speed,
    });
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h3>Confira o clima da sua cidade:</h3>
            <div className="form-input-containers">
              <input
                type="text"
                placeholder="Digite o nome da cidade"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button id="search" type="submit">
                <SearchOutlined />
              </button>
            </div>
          </form>
        </div>
        {data && <WeatherData data={data} />}
      </div>
    </>
  );
}

export default Formulario;
