import { MdWaterDrop } from "react-icons/md";
import { TiWeatherShower } from "react-icons/ti";
import { FaSun } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";

export default function Carroussel() {
  return (
    <>
      <section className="banner">
        <div className="left">
          <div className="carroussel"></div>
        </div>
        <div className="rigth">
          <div className="clima-tempo">
            <span className="title">Previsão do Tempo</span>
            <span className="city">Cascavel - PR</span>
            <span className="temp">23.3˚C</span>
            <div className="icons-one">
              <div className="icon"><MdWaterDrop /></div>
              <span>57%</span>
              <div className="icon"><TiWeatherShower /></div>
              <span>0mm</span>
            </div>
            <div className="icons-two">
              <div className="icon"><FaSun /></div>
              <span>0 UV</span>
              <div className="icon"><FiWind /></div>
              <span>11,2 Km/h</span>
            </div>
          </div>
          <div className="dollar-hoje">dollar</div>
        </div>
      </section>
    </>
  );
}
