import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import WeatherData from "./WeatherData";

function Formulario() {
  return (
    <>
      <div className="container">
        <div className="form">
          <form action="">
            <h3>Confira o clima da sua cidade:</h3>
            <div className="form-input-containers">
              <input type="text" placeholder="Digite o nome da cidade" />
              <button id="search"><SearchOutlined /></button>
            </div>
          </form>
        </div>
        <WeatherData/>
      </div>
    </>
  );
}

export default Formulario;
