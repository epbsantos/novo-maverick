import { usePageAnimation } from '../../hooks/usePageAnimation';

function Heuristica() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.07 });

  const heuristicas = [
    { n: 1, title: 'Visibilidade do status do sistema', desc: 'Mantenha o usuário informado sobre o que está acontecendo com feedback apropriado.' },
    { n: 2, title: 'Compatibilidade com o mundo real', desc: 'Use linguagem familiar ao usuário, evitando jargões técnicos.' },
    { n: 3, title: 'Controle e liberdade do usuário', desc: 'Ofereça "saída de emergência" clara para desfazer ações indesejadas.' },
    { n: 4, title: 'Consistência e padrões', desc: 'Siga convenções da plataforma. Usuários não devem adivinhar significados.' },
    { n: 5, title: 'Prevenção de erros', desc: 'Evite que erros ocorram. Exiba confirmação antes de ações críticas.' },
    { n: 6, title: 'Reconhecimento em vez de memorização', desc: 'Torne ações e opções visíveis para reduzir carga cognitiva.' },
    { n: 7, title: 'Flexibilidade e eficiência de uso', desc: 'Suporte tanto iniciantes quanto usuários avançados com atalhos e aceleradores.' },
    { n: 8, title: 'Design estético e minimalista', desc: 'Não inclua informações irrelevantes — cada elemento compete pela atenção do usuário.' },
    { n: 9, title: 'Suporte para diagnóstico e recuperação de erros', desc: 'Mensagens de erro claras, que apontam o problema e sugerem solução.' },
    { n: 10, title: 'Ajuda e documentação', desc: 'Ajuda deve ser fácil de buscar, focada nas tarefas do usuário.' },
  ];

  const colors = ['#7c3aed','#2563eb','#059669','#d97706','#dc2626','#0891b2','#7c3aed','#2563eb','#059669','#d97706'];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-list-check me-2 text-warning" />Avaliação Heurística</h3>
        <p>
          Método de inspeção de usabilidade realizado por especialistas que analisam a interface
          contra as <strong>10 Heurísticas de Nielsen</strong> — diretrizes universais de design de interfaces.
        </p>
      </div>

      <div className="anim mb-3">
        <div className="alert alert-info border-0 shadow-sm">
          <i className="bi bi-info-circle me-1" />
          <strong>Por que usar?</strong> Identifica problemas de usabilidade cedo, com baixo custo,
          sem precisar de usuários reais.
        </div>
      </div>

      <div className="row g-2">
        {heuristicas.map(({ n, title, desc }) => (
          <div key={n} className="col-12 anim">
            <div className="card mv-card border-0 shadow-sm">
              <div className="card-body d-flex gap-3 py-2 px-3">
                <div
                  className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle fw-bold text-white"
                  style={{ width: 36, height: 36, minWidth: 36, background: colors[n - 1], fontSize: '0.85rem' }}
                >
                  {n}
                </div>
                <div>
                  <strong style={{ fontSize: '0.9rem' }}>{title}</strong>
                  <p className="small mb-0 mt-1" style={{ color: 'var(--mv-text-muted)' }}>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heuristica;
