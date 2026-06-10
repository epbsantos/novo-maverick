function Gsap() {

  return (
    <>
      <h3>GSAP JS</h3>
      <p>
        GSAP (GreenSock Animation Platform) é uma biblioteca JavaScript
        utilizada para criar animações de alta performance em elementos HTML,
        SVG e Canvas.
      </p>

      <h4>Principais recursos</h4>
      <ul>
        <li>Animações suaves e otimizadas.</li>
        <li>Controle avançado de timelines.</li>
        <li>Compatível com React, Vue e outros frameworks.</li>
        <li>Suporte a scroll animations com ScrollTrigger.</li>
        <li>Grande flexibilidade para efeitos visuais.</li>
      </ul>

      <h4>Exemplo básico</h4>
      <pre>
        <code>
          {`gsap.to(".box", {
  x: 200,
  duration: 2,
  rotation: 360
});`}
        </code>
      </pre>
    </>
  )

}

export default Gsap