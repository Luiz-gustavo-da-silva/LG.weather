import { SearchOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import WeatherData from "./WeatherData";

const URL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Formulario() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeatherData("", position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error(error);
          setError("Erro ao obter a localização atual.");
        }
      );
    } else {
      setError("A geolocalização não é suportada neste navegador.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    getWeatherData(search);

    setSearch("");
  };

  
  const getWeatherData = async (cidade, latitude, longitude) => {

    let apiWeatherURL;

    if (cidade) {
      apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
    } else{
      apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=pt_br`;
    }

    try {
      const res = await fetch(apiWeatherURL);
      const data = await res.json();

      if (res.ok) {
        setData({
          name: data.name,
          temp: parseInt(data.main.temp),
          desc: data.weather[0].description,
          urlIconElement: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          urlIconCountry: `https://www.countryflagicons.com/FLAT/64/${data.sys.country}.png`,
          umid: data.main.humidity,
          wind: data.wind.speed,
        });
        setError(false);
      } else {
        setError("Erro ao obter dados do clima. Por favor, tente novamente mais tarde.");
      }
    } catch (error) {
      console.error(error);
      setError("Erro ao fazer a solicitação. Por favor, verifique sua conexão de internet e tente novamente.");
    }
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
        {error && <p className="error-message">{error}</p>}
        {data && <WeatherData data={data} />}
      </div>
    </>
  );
}

export default Formulario;
