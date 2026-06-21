import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Routes, Route } from "react-router";
import { useState, useCallback } from 'react';

import Sidebar from "./components/Sidebar";

import Front1 from './components/front1/Front1.tsx';
import Html from './components/front1/Html.tsx';
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
import Sobre from "./components/Sobre.tsx";
import Slides from "./components/Slides.tsx";

type Theme = 'claro' | 'escuro';

function App() {
  const [tema, setTema] = useState<Theme>('claro');
  const toggleTema = useCallback(() => {
    setTema(t => t === 'claro' ? 'escuro' : 'claro');
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const h1el = document.querySelector('.mv-site-title');
    const h2el = document.querySelector('.mv-site-subtitle');

    if (h1el) {
      const h1split = new SplitText(h1el, { type: "chars,words" });
      gsap.from(h1split.chars, {
        yPercent: 120,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.05,
      });
    }

    if (h2el) {
      const h2split = new SplitText(h2el, { type: "chars,words" });
      gsap.from(h2split.chars, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.03,
        delay: 0.6,
      });
    }

    const tl = gsap.timeline({ delay: 0.1 });

    tl.from(".mv-sidebar", {
      x: -var_sidebarWidth,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(".mv-discipline", {
      x: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.12,
    }, "-=0.4");

    tl.from(".mv-content", {
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");
  });

  return (
    <div className={`mv-layout ${tema}`}>
      <Sidebar tema={tema} toggleTema={toggleTema} />

      {/* ── MAIN CONTENT ── */}
      <main className="mv-content">
        <Routes>
          <Route path="/" element={<Sobre />} />
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
      </main>
    </div>
  );
}

const var_sidebarWidth = 280;

export default App;