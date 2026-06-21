import { usePageAnimation } from '../hooks/usePageAnimation';

function Slides() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  const slidesData = [
    {
      title: 'Front-End 1',
      desc: 'Slides cobrindo HTML semântico, CSS layout, estilização, e introdução a frameworks responsivos.',
      url: 'http://maverick.td.utfpr.edu.br/slides/sw1',
      icon: 'bi-filetype-html',
      color: '#7c3aed',
    },
    {
      title: 'Front-End 2',
      desc: 'Apresentações sobre JavaScript moderno, manipulação do DOM, SPAs com React e animações.',
      url: 'http://maverick.td.utfpr.edu.br/slides/sw2',
      icon: 'bi-filetype-js',
      color: '#059669',
    },
    {
      title: 'Interação Humano-Computador',
      desc: 'Slides sobre heurísticas de usabilidade de Nielsen, design centrado no usuário e testes empíricos.',
      url: 'http://maverick.td.utfpr.edu.br/slides/piw',
      icon: 'bi-people',
      color: '#d97706',
    },
  ];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim mb-4">
        <h3><i className="bi bi-presentation-play me-2 text-primary" />Slides das Disciplinas</h3>
        <span className="badge bg-primary fs-6 mb-3 px-3 py-2 rounded-pill">Material de Apoio</span>
        <p className="lead fs-5 text-secondary">
          Acesse as apresentações oficiais de aula utilizadas pelo professor para guiar os estudos das disciplinas do curso.
        </p>
      </div>

      <div className="row g-4 mt-2">
        {slidesData.map((s) => (
          <div key={s.title} className="col-md-4 anim">
            <div className="card mv-card border-0 shadow-sm h-100 p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-3 fs-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: `${s.color}15`,
                        color: s.color,
                      }}
                    >
                      <i className={`bi ${s.icon}`} />
                    </span>
                    <h5 className="card-title fw-bold m-0">{s.title}</h5>
                  </div>
                  <p className="card-text text-secondary small mb-4">{s.desc}</p>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Abrir Apresentação
                  <i className="bi bi-box-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;