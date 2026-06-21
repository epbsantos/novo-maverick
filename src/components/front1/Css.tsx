import { usePageAnimation } from '../../hooks/usePageAnimation';

function Css() {
  const ref = usePageAnimation({ type: 'rotateIn', selector: '.anim', stagger: 0.12 });

  const properties = [
    { prop: 'display: flex', use: 'Layout flexível em linha ou coluna' },
    { prop: 'display: grid', use: 'Grid bidimensional poderoso' },
    { prop: 'position: sticky', use: 'Elemento fixo no scroll' },
    { prop: 'transition', use: 'Animações suaves de propriedades' },
    { prop: '@media query', use: 'Responsividade por breakpoints' },
    { prop: 'CSS Variables', use: 'Tokens de design reutilizáveis' },
  ];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-filetype-css me-2" style={{ color: '#264de4' }} />CSS3</h3>
        <p>
          O CSS (Cascading Style Sheets) é a linguagem de estilo que controla a apresentação visual
          de páginas HTML. O <strong>CSS3</strong> permite layouts complexos, animações interativas
          e designs totalmente responsivos.{' '}
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            Documentação MDN <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      <h4 className="anim">Propriedades Essenciais</h4>
      <div className="row g-2">
        {properties.map(({ prop, use }) => (
          <div key={prop} className="col-sm-6 anim">
            <div className="card mv-card border-start border-primary border-3 shadow-sm">
              <div className="card-body py-2 px-3">
                <code className="text-primary">{prop}</code>
                <p className="small mb-0 mt-1" style={{ color: 'var(--mv-text-muted)' }}>{use}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Exemplo: CSS Variables + Flex</h4>
        <pre className="mv-code">
{`:root {
  --primary: #3b82f6;
  --gap: 1rem;
}

.container {
  display: flex;
  gap: var(--gap);
  flex-wrap: wrap;
}

.card {
  color: var(--primary);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}`}
        </pre>
      </div>
    </div>
  );
}

export default Css;