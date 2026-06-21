import { usePageAnimation } from '../../hooks/usePageAnimation';

function Teste() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-person-check me-2 text-success" />Teste de Usabilidade</h3>
        <span className="badge bg-success fs-6 mb-3 px-3 py-2 rounded-pill">Método Empírico</span>
        <p className="lead fs-5 text-secondary">
          Método de avaliação de interface que observa usuários reais executando tarefas reais no sistema para identificar falhas no fluxo planejado.
        </p>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-12 anim">
          <h5 className="fw-bold mb-3">Por que realizar Testes de Usabilidade?</h5>
          <div className="row g-3">
            {[
              { title: 'Detectar Dificuldades', desc: 'Identificar onde os usuários se perdem ou hesitam no fluxo do app.' },
              { title: 'Feedback Real', desc: 'Capturar percepções qualitativas de quem de fato usará a solução no cotidiano.' },
              { title: 'Métricas Reais', desc: 'Medir taxa de sucesso, tempo gasto por tarefa, número de cliques e quantidade de erros.' }
            ].map(item => (
              <div key={item.title} className="col-md-4">
                <div className="card mv-card border-0 shadow-sm h-100 p-2">
                  <div className="card-body">
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-secondary small m-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 anim mt-4">
          <h5 className="fw-bold mb-4">Etapas de um Teste de Usabilidade</h5>
          <div className="row g-3">
            {[
              { num: '1', title: 'Planejamento', desc: 'Definir os perfis de usuários, criar cenários e descrever as tarefas de teste de forma objetiva.' },
              { num: '2', title: 'Preparação', desc: 'Montar o ambiente físico ou digital de testes, configurar gravadores de tela e redigir o termo de consentimento.' },
              { num: '3', title: 'Execução', desc: 'Conduzir as sessões individuais, encorajando o protocolo do "pensar em voz alta" sem intervir.' },
              { num: '4', title: 'Análise', desc: 'Compilar os problemas de interface detectados, classificando-os por severidade para orientar os ajustes de design.' }
            ].map(step => (
              <div key={step.num} className="col-md-3">
                <div className="card mv-card border-0 shadow-sm h-100 relative pt-4 px-2">
                  <span
                    className="position-absolute top-0 start-50 translate-middle-y bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm"
                    style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}
                  >
                    {step.num}
                  </span>
                  <div className="card-body text-center pt-2">
                    <h6 className="fw-bold">{step.title}</h6>
                    <p className="text-secondary small m-0">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teste;