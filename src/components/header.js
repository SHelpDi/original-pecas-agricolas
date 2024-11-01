import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/svg/logo.svg";
import { FaWhatsapp, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
export default function Header() {
  return (
    <>
      <header>
        <div className="topo">
          <span>dólar hoje - R$ 5,45</span>
          <span>sexta-feira, 11 de outubro de 2024</span>
          <span>chuvoso 19ºC</span>
          <div className="links">
            <Link href="https://www.instagram.com/originalpecasagricolas/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link href="https://web.facebook.com/people/Original-Pe%C3%A7as-Agr%C3%ADcolas/100054260030222/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
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
