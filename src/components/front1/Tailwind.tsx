import { usePageAnimation } from '../../hooks/usePageAnimation';

function Tailwind() {
  const ref = usePageAnimation({ type: 'scaleIn', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-wind me-2 text-primary" />Tailwind CSS</h3>
        <span className="badge bg-primary fs-6 mb-3 px-3 py-2 rounded-pill">Utility-First Framework</span>
        <p className="lead fs-5 text-secondary">
          O Tailwind CSS é um framework de estilização de baixo nível que permite construir designs personalizados diretamente no HTML através de classes utilitárias.
        </p>
      </div>

      <div className="row g-4 mt-2">
        {[
          {
            title: 'Utility-First',
            desc: 'Construa componentes inteiros sem escrever uma única linha de CSS customizado, usando classes de tamanho, espaçamento e cor diretamente no HTML.',
            icon: 'bi-box',
            color: '#0ea5e9'
          },
          {
            title: 'Design Responsivo',
            desc: 'Adicione prefixos como sm:, md:, lg:, xl: para controlar de forma simples e intuitiva a aparência dos elementos em diferentes tamanhos de tela.',
            icon: 'bi-laptop',
            color: '#10b981'
          },
          {
            title: 'Altamente Customizável',
            desc: 'Configure fontes, paleta de cores, espaçamentos e breakpoints customizados de forma simples através do arquivo tailwind.config.js.',
            icon: 'bi-sliders',
            color: '#f59e0b'
          },
          {
            title: 'Developer Experience',
            desc: 'Integração perfeita com editores, com autocompletar e remoção automática de classes não utilizadas (PurgeCSS) na build de produção.',
            icon: 'bi-cpu',
            color: '#6366f1'
          }
        ].map((feat) => (
          <div key={feat.title} className="col-md-6 anim">
            <div className="card mv-card border-0 shadow-sm h-100 p-3">
              <div className="card-body">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="d-flex align-items-center justify-content-center rounded-3 fs-4"
                    style={{
                      width: '45px',
                      height: '45px',
                      backgroundColor: `${feat.color}15`,
                      color: feat.color,
                    }}
                  >
                    <i className={`bi ${feat.icon}`} />
                  </span>
                  <h6 className="card-title fw-bold m-0">{feat.title}</h6>
                </div>
                <p className="card-text text-secondary small">{feat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="alert alert-secondary border-0 shadow-sm mt-4 anim" role="note">
        <strong>Dica:</strong> Para saber mais sobre como usar classes utilitárias, consulte a{' '}
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="fw-bold">
          Documentação Oficial do Tailwind CSS
        </a>.
      </div>
    </div>
  );
}

export default Tailwind;
