import { usePageAnimation } from '../../hooks/usePageAnimation';

function Bootstrap() {
  const ref = usePageAnimation({ type: 'cascadeCards', selector: '.anim', stagger: 0.15 });

  const components = [
    { name: 'Botões', icon: 'bi-hand-index', demo: (
      <div className="d-flex gap-2 flex-wrap">
        <button className="btn btn-primary btn-sm">Primary</button>
        <button className="btn btn-success btn-sm">Success</button>
        <button className="btn btn-danger btn-sm">Danger</button>
        <button className="btn btn-outline-secondary btn-sm">Outline</button>
      </div>
    )},
    { name: 'Badges', icon: 'bi-tag', demo: (
      <div className="d-flex gap-2 flex-wrap align-items-center">
        <span className="badge bg-primary">Novo</span>
        <span className="badge bg-success">Ativo</span>
        <span className="badge bg-warning text-dark">Pendente</span>
        <span className="badge rounded-pill bg-info">Pill</span>
      </div>
    )},
    { name: 'Alertas', icon: 'bi-exclamation-triangle', demo: (
      <div className="alert alert-info py-2 px-3 mb-0 small">
        <i className="bi bi-info-circle me-1" />
        Bootstrap facilita a criação de UIs responsivas.
      </div>
    )},
    { name: 'Progresso', icon: 'bi-bar-chart', demo: (
      <div className="progress" style={{height: '10px'}}>
        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{width: '72%'}} />
      </div>
    )},
    { name: 'Cards', icon: 'bi-card-text', demo: (
      <div className="card border-0 shadow-sm" style={{maxWidth: '220px'}}>
        <div className="card-body py-2 px-3">
          <h6 className="card-title mb-1 small">Exemplo de Card</h6>
          <p className="card-text" style={{fontSize: '0.75rem'}}>Componente reutilizável do Bootstrap 5.</p>
        </div>
      </div>
    )},
    { name: 'Grid', icon: 'bi-grid-3x3', demo: (
      <div className="row g-1 text-center" style={{fontSize: '0.7rem'}}>
        {['col-4','col-4','col-4','col-6','col-6'].map((c,i) => (
          <div key={i} className={c}>
            <div className="bg-primary text-white rounded py-1">{c}</div>
          </div>
        ))}
      </div>
    )},
  ];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-bootstrap me-2" style={{color:'#7952b3'}} />Bootstrap 5</h3>
        <p>
          O Bootstrap é um dos frameworks front-end mais populares do mundo, utilizado
          para o desenvolvimento rápido de interfaces web responsivas e mobile-first.
          Em sua versão <strong>Bootstrap 5</strong>, ele usa JavaScript puro (sem jQuery),
          com sistema de grid poderoso e componentes pré-estilizados.{' '}
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
            Site oficial <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      <h4 className="anim">Componentes em ação</h4>
      <div className="row g-3">
        {components.map(c => (
          <div key={c.name} className="col-md-6 anim">
            <div className="card h-100 mv-card shadow-sm border-0">
              <div className="card-body">
                <h6 className="card-title d-flex align-items-center gap-2">
                  <i className={`bi ${c.icon}`} style={{color:'#7952b3'}} />
                  {c.name}
                </h6>
                <div className="mt-2">{c.demo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="alert alert-light border mt-4 anim" role="alert">
        <strong><i className="bi bi-lightbulb me-1 text-warning" />Dica:</strong>{' '}
        Bootstrap usa classes utilitárias como <code>d-flex</code>, <code>gap-2</code>,{' '}
        <code>mt-3</code> para estilização rápida e padronizada.
      </div>
    </div>
  );
}

export default Bootstrap;