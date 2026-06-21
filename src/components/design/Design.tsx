import { usePageAnimation } from '../../hooks/usePageAnimation';

function Design() {
  const ref = usePageAnimation({ type: 'clipReveal', selector: '.anim', stagger: 0.18 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-palette2 me-2 text-danger" />Design Gráfico</h3>
        <span className="badge mv-badge fs-6 mb-3">30 horas</span>
        <p>
          Princípios da comunicação visual aplicados ao meio digital. Tipografia, teoria
          das cores, imagem digital — dimensão, resolução e formatos. Construção de
          imagens, composições e uso de software para design gráfico.
        </p>
      </div>

      <div className="row g-3 mt-1">
        {[
          { icon: 'bi-type', color: '#6366f1', title: 'Tipografia', desc: 'Hierarquia visual, escolha de fontes, legibilidade e contraste.' },
          { icon: 'bi-palette', color: '#ef4444', title: 'Teoria das Cores', desc: 'Círculo cromático, harmonia, temperatura e psicologia das cores.' },
          { icon: 'bi-aspect-ratio', color: '#f59e0b', title: 'Imagem Digital', desc: 'Resolução (DPI/PPI), formatos (PNG, SVG, WEBP) e compressão.' },
          { icon: 'bi-grid-1x2', color: '#10b981', title: 'Composição', desc: 'Regra dos terços, espaço negativo, alinhamento e proximidade.' },
        ].map(f => (
          <div key={f.title} className="col-sm-6 anim">
            <div className="card mv-card border-0 shadow-sm h-100">
              <div className="card-body d-flex gap-3">
                <i className={`bi ${f.icon} fs-2 flex-shrink-0`} style={{ color: f.color }} />
                <div>
                  <h6 className="card-title">{f.title}</h6>
                  <p className="card-text small" style={{ color: 'var(--mv-text-muted)' }}>{f.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="alert alert-secondary border-0 shadow-sm mt-4 anim" role="note">
        <strong><i className="bi bi-tools me-1" />Ferramentas utilizadas:</strong>{' '}
        GIMP, Figma, Pencil Project, Inkscape.
      </div>
    </div>
  );
}

export default Design;