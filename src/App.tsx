import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Link, Routes, Route } from "react-router";

import Menu from "./components/Menu";
import text from "./constants/text";

import Front1 from './components/front1/Front1.tsx'
import Html from './components/front1/Html.tsx'
import Css from "./components/front1/Css.tsx";
import Imagem from "./components/front1/Imagem.tsx";
import Bootstrap from "./components/front1/Bootstrap.tsx";

import Front2 from "./components/front2/Front2.tsx";
import Javascript from "./components/front2/Javascript.tsx";
import Gsap from "./components/front2/Gsap.tsx";
import React from "./components/front2/React.tsx";

import Design from "./components/design/Design.tsx";
import Figma from "./components/design/Figma.tsx";
import Pencil from "./components/design/Pencil.tsx";
import Ihc from "./components/ihc/Ihc.tsx";
import Teoria from "./components/ihc/Teoria.tsx";
import Teste from "./components/ihc/Teste.tsx";
import Heuristica from "./components/ihc/Heuristica.tsx";


import { useState } from 'react';

function App() {
  const [tema, setTema] = useState<'claro' | 'escuro' | 'maverick'>('claro');

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

          <div className="disciplines">
            <div className="discipline front1">
              <h3> <Link to="front1">front1</Link> </h3>
              <ul>
                <li><Link to="front1/html">html</Link></li>
                <li><Link to="front1/css">css</Link></li>
                <li><Link to="front1/bootstrap">bootstrap</Link></li>
                <li><Link to="front1/img">edição de imagem</Link></li>
              </ul>
            </div>

            <div className="discipline front2">
              <h3><Link to="front2">front2</Link></h3>
              <ul>
                <li><Link to="front2/js">javascript</Link></li>
                <li><Link to="front2/gsap">gsap</Link></li>
                <li><Link to="front2/react">react</Link></li>
              </ul>
            </div>

            <div className="discipline design">
              <h3><Link to="design">design</Link></h3>
              <ul>
                <li><Link to="design/figma">figma</Link></li>
                <li><Link to="design/pencil">pencil</Link></li>
              </ul>
            </div>

            <div className="discipline ihc">
              <h3><Link to="ihc">ihc</Link></h3>
              <ul>
                <li><Link to="ihc/teoria">Teoria de interação humano computador</Link></li>
                <li><Link to="ihc/teste">Teste de usabilidade</Link></li>
                <li><Link to="ihc/heuristica">Avaliação heurística</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ConteudoPrincipal">
          <Routes>
            <Route path="/front1" element={<Front1 />} />
            <Route path="/front1/html" element={<Html />} />
            <Route path="/front1/css" element={<Css />} />
            <Route path="/front1/img" element={<Imagem />} />
            <Route path="/front1/bootstrap" element={<Bootstrap />} />

            <Route path="/front2" element={<Front2 />} />
            <Route path="/front2/js" element={<Javascript />} />
            <Route path="/front2/gsap" element={<Gsap />} />
            <Route path="/front2/react" element={<React />} />

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
    </>
  );
}

export default App;