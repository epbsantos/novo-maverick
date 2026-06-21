import { usePageAnimation } from '../../hooks/usePageAnimation';

function Figma() {
  const ref = usePageAnimation({ type: 'scaleIn', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-vector-pen me-2 text-danger" />Figma</h3>
        <span className="badge bg-danger fs-6 mb-3 px-3 py-2 rounded-pill">Prototipação UI/UX</span>
      </div>

      <div className="row g-4 align-items-center mt-2">
        <div className="col-lg-5 anim">
          <div className="card mv-card border-0 shadow-sm overflow-hidden">
            <img src="/img/Figma.jpg" alt="Figma Interface" className="img-fluid" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="col-lg-7 anim">
          <h5 className="fw-bold mb-3">A principal ferramenta de design colaborativo do mercado</h5>
          <p className="text-secondary">
            O Figma é uma plataforma de design colaborativa baseada em nuvem, revolucionando a forma como designers e desenvolvedores criam interfaces (UI) e avaliam a experiência do usuário (UX).
          </p>
          <p className="text-secondary">
            Permite o trabalho em tempo real, facilitando o feedback instantâneo e garantindo a consistência do design system por meio de componentes reutilizáveis. O Figma também integra ferramentas como o FigJam para facilitação de dinâmicas de brainstorming e criação de mapas de jornada.
          </p>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-danger d-inline-flex align-items-center gap-2 mt-2"
          >
            Visitar site oficial
            <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Figma;