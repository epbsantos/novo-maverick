import { usePageAnimation } from '../../hooks/usePageAnimation';

function Front1() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.12 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <span className="badge mv-badge fs-6 mb-3">
          <i className="bi bi-1-circle me-1" />60 horas
        </span>
        <h3>Desenvolvimento <em>Web Front-End</em> 1</h3>
      </div>

      <div className="anim">
        <h4>Ementa</h4>
        <p>
          Linguagens de marcação moderna para estruturação de conteúdo para Web.
          Linguagem de marcação moderna para estilização de conteúdo na Web. Boas
          práticas e padrões de apresentação, acessibilidade e responsividade dos
          conteúdos Web.
        </p>
      </div>

      <div className="row g-3 mt-2 anim">
        {[
          { icon: 'bi-filetype-html', title: 'HTML', color: '#e44d26', desc: 'Estruturação semântica de conteúdo.' },
          { icon: 'bi-filetype-css', title: 'CSS', color: '#264de4', desc: 'Estilização e layout responsivo.' },
          { icon: 'bi-bootstrap', title: 'Bootstrap', color: '#7952b3', desc: 'Framework de componentes UI.' },
          { icon: 'bi-wind', title: 'Tailwind', color: '#06b6d4', desc: 'CSS utilitário mobile-first.' },
          { icon: 'bi-image', title: 'Imagens', color: '#f59e0b', desc: 'Edição e otimização de imagens.' },
        ].map(item => (
          <div key={item.title} className="col-sm-6 col-lg-4">
            <div className="card h-100 mv-card border-0 shadow-sm">
              <div className="card-body d-flex align-items-start gap-3">
                <i className={`bi ${item.icon} fs-2`} style={{ color: item.color }} />
                <div>
                  <h6 className="card-title mb-1">{item.title}</h6>
                  <p className="card-text small text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 anim">
        <a
          href="https://tsi.td.utfpr.edu.br/sites/default/files/2023-08/PPC_TSI-TD_2022_v1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm"
        >
          <i className="bi bi-file-earmark-pdf me-1" />
          Referência do conteúdo – PPC TSI
        </a>
      </div>
    </div>
  );
}

export default Front1;
