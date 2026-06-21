import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Routes, Route } from "react-router";
import { useState } from 'react';

import Sidebar from "./components/Sidebar";

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
import ReactView from "./components/front2/React.tsx"; // Evitar conflito com React import padrão

import Design from "./components/design/Design.tsx";
import Figma from "./components/design/Figma.tsx";
import Pencil from "./components/design/Pencil.tsx";
import Ihc from "./components/ihc/Ihc.tsx";
import Teoria from "./components/ihc/Teoria.tsx";
import Teste from "./components/ihc/Teste.tsx";
import Heuristica from "./components/ihc/Heuristica.tsx";

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
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.04,
    });

    gsap.from(h2.chars, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.02,
    });

    const tl = gsap.timeline();

    tl.from("nav", {
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.from(".discipline", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
  });

  return (
    <>
      <section className={`container ${tema}`}>

        {/* Sidebar com Menu e Escolha de Tema */}
        <Sidebar tema={tema} setTema={setTema} />

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
            <Route path="/front2/react" element={<ReactView />} />

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