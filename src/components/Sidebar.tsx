import React from "react";
import { Link } from "react-router";
import Menu from "./Menu";
import ThemeSwitcher from "./ThemeSwitcher";
import text from "../constants/text";

interface SidebarProps {
  tema: 'claro' | 'escuro' | 'maverick';
  setTema: (tema: 'claro' | 'escuro' | 'maverick') => void;
}

export default function Sidebar({ tema, setTema }: SidebarProps) {
  return (
    <section className="sideMenu">
      <div>
        <img src="/img/logoUTFPR.png" alt="Logo UTFPR" style={{ width: '300px', maxWidth: '100%', paddingBottom: '16px' }} />

        <h1> <Link to="/">{text.title}</Link> </h1>
        <h2>{text.subtitle}</h2>

        <ThemeSwitcher tema={tema} setTema={setTema} />
      </div>

      <Menu />

      <div className="disciplines">
        <div className="discipline slides">
          <h3> <Link to="slides">Slides</Link> </h3>
        </div>
      </div>

      <div className="disciplines">
        <div className="discipline front1">
          <h3> <Link to="front1">Front 1</Link> </h3>
          <ul>
            <li><Link to="front1/html">HTML</Link></li>
            <li><Link to="front1/css">CSS</Link></li>
            <li><Link to="front1/bootstrap">Bootstrap</Link></li>
            <li><Link to="front1/tailwind">Tailwind CSS</Link></li>
            <li><Link to="front1/img">Edição de imagem</Link></li>
          </ul>
        </div>

        <div className="discipline front2">
          <h3><Link to="front2">Front 2</Link></h3>
          <ul>
            <li><Link to="front2/js">JavaScript</Link></li>
            <li><Link to="front2/gsap">GSAP</Link></li>
            <li><Link to="front2/react">React</Link></li>
          </ul>
        </div>

        <div className="discipline design">
          <h3><Link to="design">Design Gráfico</Link></h3>
          <ul>
            <li><Link to="design/figma">Figma</Link></li>
            <li><Link to="design/pencil">Pencil</Link></li>
          </ul>
        </div>

        <div className="discipline ihc">
          <h3><Link to="ihc">IHC</Link></h3>
          <ul>
            <li><Link to="ihc/teoria">Teoria de interação humano computador</Link></li>
            <li><Link to="ihc/teste">Teste de usabilidade</Link></li>
            <li><Link to="ihc/heuristica">Avaliação heurística</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
