import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Link, Routes, Route, useLocation } from "react-router";

import Menu from "./components/Menu";
import text from "./constants/text";

import Slides from "./components/Slides";

import Front1 from './components/front1/Front1.tsx'
import Html from './components/front1/Html.tsx'
import Css from "./components/front1/Css.tsx";
import Imagem from "./components/front1/Imagem.tsx";
import Bootstrap from "./components/front1/Bootstrap.tsx";
import Tailwind from "./components/front1/Tailwind.tsx";

import Front2 from "./components/front2/Front2.tsx";
import Javascript from "./components/front2/Javascript.tsx";
import Gsap from "./components/front2/Gsap.tsx";
import ReactPage from "./components/front2/React.tsx";

import Design from "./components/design/Design.tsx";
import Figma from "./components/design/Figma.tsx";
import Pencil from "./components/design/Pencil.tsx";
import Ihc from "./components/ihc/Ihc.tsx";
import Teoria from "./components/ihc/Teoria.tsx";
import Teste from "./components/ihc/Teste.tsx";
import Heuristica from "./components/ihc/Heuristica.tsx";

import { useState, useEffect } from 'react';



function App() {
  const [tema, setTema] = useState<'claro' | 'escuro' | 'maverick'>('claro');
  const [visible, setVisible] = useState(false);

  // ---- NOVO: busca/filtro no menu lateral ----
  const [busca, setBusca] = useState('');
  const filtroAtivo = busca.trim().toLowerCase();
  const bate = (texto: string) => texto.toLowerCase().includes(filtroAtivo);

  // ---- NOVO: detectar página ativa no menu ----
  const location = useLocation();
  const isActive = (path: string) => location.pathname === `/${path}` || location.pathname === path;

  useGSAP(() => {
    const h1 = new SplitText("h1", {
      type: "chars, words",
    });

    const h2 = new SplitText("h2", {
      type: "chars, words",
    });

    gsap.from(h1.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "elastic",
      stagger: 0.06,
    });

    gsap.from(h2.chars, {
      yPercent: 100,
      duration: 1.2,
      ease: "elastic",
      stagger: 0.06,
    });

    const tl = gsap.timeline();

    tl.from("nav", {
      x: -350,
      ease: "elastic",
      duration: 2,
    });

    tl.from(".discipline", {
      x: -350,
      ease: "elastic",
      duration: 2,
      stagger: 0.5
    });

  });
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    gsap.to("#back-to-top", {
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [visible]);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={`container ${tema}`}>

        <section className="sideMenu" >
          <div>
            <img src="/img/logoUTFPR.png" alt="Logo UTFPR" style={{ width: '300px', maxWidth: '100%', paddingBottom: '16px' }} />

            <h1> <Link to="/">{text.title}</Link> </h1>
            <h2>{text.subtitle}</h2>

            <div style={{ marginTop: '16px', marginBottom: '16px' }}>
              <label htmlFor="theme-select" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px', fontWeight: 'bold' }}>
                Mudar Visual:
              </label>
              <select
                id="theme-select"
                value={tema}
                onChange={(e) => setTema(e.target.value as any)}
                style={{ padding: '6px', width: '100%', borderRadius: '4px', cursor: 'pointer' }}
              >
                <option value="claro">Modo Claro</option>
                <option value="escuro">Modo Escuro</option>

              </select>
            </div>
          </div>

          <Menu />

          {/* NOVO: campo de busca/filtro do menu */}
          <div style={{ marginTop: '16px', marginBottom: '8px' }}>
            <input
              type="text"
              placeholder="Buscar disciplina..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{ padding: '6px', width: '100%', borderRadius: '4px' }}
            />
          </div>

          <div className="disciplines" style={{ display: bate('slides') ? 'block' : 'none' }}>
            <div className="discipline slides">
              <h3 className={`HoverCor ${isActive('slides') ? 'active' : ''}`}> <Link to="slides">Slides</Link> </h3>
            </div>
          </div>

          <div
            className="disciplines"
            style={{
              display: ['front1', 'html', 'css', 'bootstrap', 'tailwind', 'imagem'].some(bate) ? 'block' : 'none'
            }}
          >
            <div className="discipline front1">
              <h3 className={`HoverCor ${isActive('front1') ? 'active' : ''}`}> <Link to="front1">Front 1</Link> </h3>
              <ul>
                <li className={`HoverCor ${isActive('front1/html') ? 'active' : ''}`}><Link to="front1/html">HTML</Link></li>
                <li className={`HoverCor ${isActive('front1/css') ? 'active' : ''}`}><Link to="front1/css">CSS</Link></li>
                <li className={`HoverCor ${isActive('front1/bootstrap') ? 'active' : ''}`}><Link to="front1/bootstrap">Bootstrap</Link></li>
                <li className={`HoverCor ${isActive('front1/tailwind') ? 'active' : ''}`}><Link to="front1/tailwind">Tailwind CSS</Link></li>
                <li className={`HoverCor ${isActive('front1/img') ? 'active' : ''}`}><Link to="front1/img">Edição de imagem</Link></li>
              </ul>
            </div>

            <div className="discipline front2" style={{ display: ['front2', 'javascript', 'js', 'gsap', 'react'].some(bate) ? 'block' : 'none' }}>
              <h3 className={`HoverCor ${isActive('front2') ? 'active' : ''}`}><Link to="front2">Front 2</Link></h3>
              <ul>
                <li className={`HoverCor ${isActive('front2/js') ? 'active' : ''}`}><Link to="front2/js">JavaScript</Link></li>
                <li className={`HoverCor ${isActive('front2/gsap') ? 'active' : ''}`}><Link to="front2/gsap">GSAP</Link></li>
                <li className={`HoverCor ${isActive('front2/react') ? 'active' : ''}`}><Link to="front2/react">React</Link></li>
              </ul>
            </div>

            <div className="discipline design" style={{ display: ['design', 'figma', 'pencil'].some(bate) ? 'block' : 'none' }}>
              <h3 className={`HoverCor ${isActive('design') ? 'active' : ''}`}><Link to="design">Design Gráfico</Link></h3>
              <ul>
                <li className={`HoverCor ${isActive('design/figma') ? 'active' : ''}`}><Link to="design/figma">Figma</Link></li>
                <li className={`HoverCor ${isActive('design/pencil') ? 'active' : ''}`}><Link to="design/pencil">Pencil</Link></li>
              </ul>
            </div>


            <div className="discipline ihc" style={{ display: ['ihc', 'teoria', 'teste', 'heuristica', 'usabilidade'].some(bate) ? 'block' : 'none' }}>
              <h3 className={`HoverCor ${isActive('ihc') ? 'active' : ''}`}><Link to="ihc">IHC</Link></h3>
              <ul>
                <li className={`HoverCor ${isActive('ihc/teoria') ? 'active' : ''}`}><Link to="ihc/teoria">Teoria de interação humano computador</Link></li>
                <li className={`HoverCor ${isActive('ihc/teste') ? 'active' : ''}`}><Link to="ihc/teste">Teste de usabilidade</Link></li>
                <li className={`HoverCor ${isActive('ihc/heuristica') ? 'active' : ''}`}><Link to="ihc/heuristica">Avaliação heurística</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ConteudoPrincipal">
          <Routes>
            <Route path="/slides" element={<Slides />} />

            <Route path="/front1" element={<Front1 />} />
            <Route path="/front1/html" element={<Html />} />
            <Route path="/front1/css" element={<Css />} />
            <Route path="/front1/img" element={<Imagem />} />
            <Route path="/front1/bootstrap" element={<Bootstrap />} />
            <Route path="/front1/tailwind" element={<Tailwind />} />

            <Route path="/front2" element={<Front2 />} />
            <Route path="/front2/js" element={<Javascript />} />
            <Route path="/front2/gsap" element={<Gsap />} />
            <Route path="/front2/react" element={<ReactPage />} />

            <Route path="/design" element={<Design />} />
            <Route path="/design/figma" element={<Figma />} />
            <Route path="/design/pencil" element={<Pencil />} />

            <Route path="/ihc" element={<Ihc />} />
            <Route path="/ihc/teoria" element={<Teoria />} />
            <Route path="/ihc/teste" element={<Teste />} />
            <Route path="/ihc/heuristica" element={<Heuristica />} />

          </Routes>
        </section>
      </section>
      <button
        id="back-to-top"
        onClick={handleClick}
        style={{ opacity: 0, pointerEvents: "auto" }}
      >
        Inicio
      </button>
    </>
  );
}

export default App;