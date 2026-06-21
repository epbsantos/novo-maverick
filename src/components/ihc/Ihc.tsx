import { usePageAnimation } from '../../hooks/usePageAnimation';

function Ihc() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-people me-2 text-warning" />Interação Humano-Computador</h3>
        <span className="badge bg-warning text-dark fs-6 mb-3 px-3 py-2 rounded-pill">30 horas</span>
        <p className="lead fs-5 text-secondary">
          Estudo da concepção, avaliação e implementação de sistemas interativos computacionais para uso humano, com foco na experiência, acessibilidade e facilidade de uso.
        </p>
      </div>

      <h5 className="fw-bold mt-4 mb-3 anim">Ementa do Curso</h5>
      <div className="row g-3">
        {[
          { title: 'Design Centrado no Usuário', desc: 'Metodologias e práticas que colocam as necessidades, desejos e limitações dos usuários finais no centro do processo de design.', icon: 'bi-person-bounding-box', color: '#ffc107' },
          { title: 'Estilos de Interface', desc: 'Padrões de design visual, interfaces gráficas, navegação intuitiva e consistência de componentes digitais.', icon: 'bi-layout-sidebar-inset', color: '#fd7e14' },
          { title: 'Projeto e Prototipação', desc: 'Técnicas de elaboração de fluxos de telas de baixa, média e alta fidelidade para múltiplos dispositivos (mobile, tablet, desktop).', icon: 'bi-layers', color: '#198754' },
          { title: 'Avaliação de Usabilidade', desc: 'Métodos empíricos e analíticos para identificar barreiras de uso, incluindo testes com usuários e avaliação heurística.', icon: 'bi-clipboard2-check', color: '#0d6efd' }
        ].map(topic => (
          <div key={topic.title} className="col-sm-6 anim">
            <div className="card mv-card border-0 shadow-sm h-100">
              <div className="card-body d-flex gap-3">
                <i className={`bi ${topic.icon} fs-2 flex-shrink-0`} style={{ color: topic.color }} />
                <div>
                  <h6 className="card-title fw-bold">{topic.title}</h6>
                  <p className="card-text small text-secondary">{topic.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ihc;