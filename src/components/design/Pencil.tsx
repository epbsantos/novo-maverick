import { usePageAnimation } from '../../hooks/usePageAnimation';

function Pencil() {
  const ref = usePageAnimation({ type: 'scaleIn', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-pencil-square me-2 text-warning" />Pencil Project</h3>
        <span className="badge bg-warning text-dark fs-6 mb-3 px-3 py-2 rounded-pill">Wireframing Open-Source</span>
      </div>

      <div className="row g-4 align-items-center mt-2">
        <div className="col-lg-5 anim">
          <div className="card mv-card border-0 shadow-sm overflow-hidden">
            <img src="/img/Pencil.png" alt="Pencil Layout" className="img-fluid" style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="col-lg-7 anim">
          <h5 className="fw-bold mb-3">Rascunhos e Mockups Rápidos de Interface</h5>
          <p className="text-secondary">
            O Pencil Project é um aplicativo de código aberto (open-source) focado no design de wireframes e protótipos de tela para diferentes plataformas. Ele oferece uma grande coleção de elementos gráficos pré-construídos para desktop, web e dispositivos móveis.
          </p>
          <p className="text-secondary">
            É a escolha ideal para desenvolvedores e analistas criarem esboços rápidos e validados de fluxos de telas de maneira ágil, sem a complexidade de ferramentas de alta fidelidade como o Figma, permitindo o foco na estrutura e usabilidade iniciais da interface.
          </p>
          <a
            href="https://pencil.evolus.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning text-dark d-inline-flex align-items-center gap-2 mt-2"
          >
            Visitar site oficial
            <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pencil;