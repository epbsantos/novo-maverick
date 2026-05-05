import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import Menu from "./components/Menu";
import text from "./constants/text";

function App() {
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
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(h2.chars, {
      yPercent: 100,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.06,
    });

    const tl = gsap.timeline();

    tl.from("nav", {
      x: -350,
      ease: "elastic",
      duration: 3,
    });

    tl.from(".discipline", {
      x: -350,
      ease: "elastic",
      duration: 2,
    });
  });

  return (
    <>
      <section>
        <div>
          <h1>{text.title}</h1>
          <h2>{text.subtitle}</h2>
        </div>

        <Menu />

        <div className="disciplines">
          <div className="discipline">
            <h3>front1</h3>
            <ul>
              <li>html</li>
              <li>css</li>
              <li>bootstrap</li>
              <li>edição de imagem</li>
            </ul>
          </div>

          <div className="discipline">
            <h3>front2</h3>
            <ul>
              <li>javascript</li>
              <li>gsap</li>
              <li>react</li>
            </ul>
          </div>

          <div className="discipline">
            <h3>design</h3>
            <ul>
              <li>figma</li>
              <li>cursor</li>
            </ul>
          </div>

          <div className="discipline">
            <h3>ihc</h3>
            <ul>
              <li>teoria de interação humano computador</li>
              <li>teste de usabilidade</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
