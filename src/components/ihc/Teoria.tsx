import { usePageAnimation } from '../../hooks/usePageAnimation';

function Teoria() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-book me-2 text-primary" />Teoria de IHC</h3>
        <span className="badge bg-primary fs-6 mb-3 px-3 py-2 rounded-pill">Fundamentos Teóricos</span>
        <p className="lead fs-5 text-secondary">
          A Interação Humano-Computador (IHC) investiga como as pessoas interagem com sistemas e tecnologias, buscando torná-los fáceis, eficientes e agradáveis.
        </p>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-md-6 anim">
          <div className="card mv-card border-0 shadow-sm h-100 p-3">
            <div className="card-body">
              <h5 className="fw-bold mb-3"><i className="bi bi-bullseye me-2 text-danger" />Objetivos da IHC</h5>
              <ul className="list-unstyled d-flex flex-column gap-2 text-secondary">
                <li><i className="bi bi-check-circle-fill text-success me-2" />Melhorar e enriquecer a experiência do usuário.</li>
                <li><i className="bi bi-check-circle-fill text-success me-2" />Facilitar a execução rápida e correta de tarefas.</li>
                <li><i className="bi bi-check-circle-fill text-success me-2" />Minimizar erros e frustrações do usuário final.</li>
                <li><i className="bi bi-check-circle-fill text-success me-2" />Aumentar a produtividade e a taxa de conversão.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 anim">
          <div className="card mv-card border-0 shadow-sm h-100 p-3">
            <div className="card-body">
              <h5 className="fw-bold mb-3"><i className="bi bi-star me-2 text-warning" />Princípios Fundamentais</h5>
              <div className="row g-2">
                {[
                  { name: 'Usabilidade', desc: 'Facilidade de aprendizado e eficiência de uso.' },
                  { name: 'Acessibilidade', desc: 'Inclusão para todas as capacidades e limitações.' },
                  { name: 'Feedback', desc: 'Sinalização clara das ações tomadas pelo usuário.' },
                  { name: 'Consistência', desc: 'Padrões visuais e lógicos reconhecíveis.' }
                ].map(p => (
                  <div key={p.name} className="col-6 mb-2">
                    <strong className="d-block text-dark mb-1">{p.name}</strong>
                    <span className="small text-secondary">{p.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-secondary border-0 shadow-sm mt-4 anim" role="note">
        <strong>Importância da IHC:</strong> Considerar as limitações físicas, cognitivas e contextuais das pessoas durante o processo de design garante a construção de produtos digitais inclusivos, que evitam erros operacionais e oferecem maior satisfação.
      </div>
    </div>
  );
}

export default Teoria;