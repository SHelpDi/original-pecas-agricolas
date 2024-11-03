import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/svg/logo.svg";
import { FaWhatsapp, FaSquareFacebook, FaInstagram } from "react-icons/fa6";


export default async function Header({}) {
  /* const dollarNow = await fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL');
  const dollar = await dollarNow.json(); */

  const date = new Date();
  const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const diaDaSemana = semana[date.getDay()];
  const diaDoMes = date.getDate();
  const mes = date.toLocaleString('pt-BR', { month: 'long' });
  const ano = date.getFullYear();

  /* const weatherNow = await fetch('https://api.weatherapi.com/v1/current.json?key=c84b496246834a438ae191258242905&q=cascavel-269450&lang=pt');
  const weather = await weatherNow.json(); */
    
  
  return (
    <>
      <header>
        <div className="topo">
          <span>dólar hoje - R$ {/* {dollar.USDBRL.high} */}</span>
          <span>{`${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`}</span>
          <span>{/* {weather.current.condition.text} */}</span>
          <div className="links">
            <Link
              href="https://www.instagram.com/originalpecasagricolas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://web.facebook.com/people/Original-Pe%C3%A7as-Agr%C3%ADcolas/100054260030222/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook />
            </Link>
          </div>
        </div>
        <div className="logo">
          <Image src={Logo} alt="Logo da empresa" />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" rel="noopener noreferrer">
                Home
              </Link>
            </li>
            <li>
              <Link href="/produtos" rel="noopener noreferrer">
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/usados" rel="noopener noreferrer">
                Usados
              </Link>
            </li>
            <li>
              <Link href="/localizacao" rel="noopener noreferrer">
                Localização
              </Link>
            </li>
            <li>
              <Link href="/contato" rel="noopener noreferrer">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="linha"></div>
      </header>
    </>
  );
}
