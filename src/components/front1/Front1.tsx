import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Front1() {
  useGSAP(() => {
  gsap.from(".front1-hero", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".front1-section:not(.front1-hero)", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.18,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".front1-card", {
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.5,
    ease: "back.out(1.4)",
  });
});

  return (
    <div className="front1-page">
      <div className="front1-section front1-hero">
        <h3>
          Desenvolvimento <i>Web Front-End</i> 1
        </h3>

        <p>
          Primeiros passos na criação de páginas web, com foco em estrutura,
          estilização, acessibilidade e responsividade.
        </p>
      </div>

      <div className="front1-section">
        <h4>Ementa</h4>
        <p>
          Linguagens de marcação moderna para estruturação de conteúdo para Web.
          Linguagem de marcação moderna para estilização de conteúdo na Web.
          Boas práticas e padrões de apresentação, acessibilidade e
          responsividade dos conteúdos Web.
        </p>
      </div>

      <div className="front1-section">
        <h4>Duração</h4>
        <p>60h</p>
      </div>

      <div className="front1-section">
        <h4>Conteúdos principais</h4>

        <div className="front1-cards">
          <div className="front1-card">
            <h5>HTML</h5>
            <p>
              Estruturação de páginas, links, imagens, tabelas e formulários.
            </p>
          </div>

          <div className="front1-card">
            <h5>CSS</h5>
            <p>Estilização, cores, fontes, espaçamentos e posicionamento.</p>
          </div>

          <div className="front1-card">
            <h5>Responsividade</h5>
            <p>Layouts adaptáveis para diferentes tamanhos de tela.</p>
          </div>

          <div className="front1-card">
            <h5>Frameworks</h5>
            <p>
              Introdução a ferramentas para acelerar a criação de interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="front1-section">
        <h4>Objetivos de Aprendizagem</h4>

        <ul>
          <li>Compreender a introdução à Web e páginas estáticas.</li>
          <li>
            Manipular HTML para estruturar textos, mídias, tabelas e
            formulários.
          </li>
          <li>Desenvolver estilos com CSS.</li>
          <li>Aplicar boas práticas de acessibilidade e responsividade.</li>
          <li>Validar documentos conforme padrões da Web.</li>
        </ul>
      </div>
    </div>
  );
}

export default Front1;