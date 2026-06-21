import { usePageAnimation } from '../../hooks/usePageAnimation';

function Javascript() {
  const ref = usePageAnimation({ type: 'fadeLeft', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-filetype-js me-2" style={{ color: '#f7df1e', textShadow: '0 0 8px rgba(247,223,30,0.4)' }} />JavaScript</h3>
        <p>
          O <strong>JavaScript</strong> é a linguagem de programação da web — roda no navegador,
          tornando páginas dinâmicas e interativas sem recarregar a página. Também usado no
          back-end com Node.js.{' '}
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            MDN Docs <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      <div className="row g-3 mt-1">
        {[
          { icon: 'bi-lightning', color: '#f59e0b', title: 'Dinâmico', desc: 'Tipos flexíveis; código executado diretamente no browser.' },
          { icon: 'bi-diagram-2', color: '#6366f1', title: 'DOM', desc: 'Manipula HTML e CSS em tempo real via document.querySelector().' },
          { icon: 'bi-clock-history', color: '#10b981', title: 'Assíncrono', desc: 'Fetch API, Promises e async/await para carregar dados sem recarregar.' },
          { icon: 'bi-arrow-clockwise', color: '#3b82f6', title: 'Eventos', desc: 'addEventListener para reagir a cliques, scroll, teclado e mais.' },
        ].map(f => (
          <div key={f.title} className="col-sm-6 anim">
            <div className="card mv-card border-start border-3 shadow-sm h-100" style={{ borderColor: `${f.color} !important` }}>
              <div className="card-body">
                <i className={`bi ${f.icon} fs-3 mb-2`} style={{ color: f.color }} />
                <h6 className="card-title">{f.title}</h6>
                <p className="card-text small" style={{ color: 'var(--mv-text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Exemplo prático</h4>
        <pre className="mv-code">
{`// Manipulação do DOM
const btn = document.querySelector('#meuBotao');

btn.addEventListener('click', async () => {
  const res = await fetch('https://api.exemplo.com/dados');
  const data = await res.json();

  document.querySelector('#resultado').textContent = data.mensagem;
});`}
        </pre>
      </div>
    </div>
  );
}

export default Javascript;