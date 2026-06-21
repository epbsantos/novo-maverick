import { usePageAnimation } from '../../hooks/usePageAnimation';

function React_() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-diagram-3 me-2" style={{ color: '#61dafb' }} />React</h3>
        <p>
          React é uma biblioteca JavaScript criada pelo Facebook para construção de interfaces
          de usuário componentizadas, declarativas e de alta performance. Com o modelo de
          Virtual DOM, apenas as partes alteradas da tela são re-renderizadas.{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            react.dev <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      <div className="row g-3 mt-1">
        {[
          { icon: 'bi-puzzle', title: 'Componentes', desc: 'Blocos reutilizáveis de UI. Tudo é um componente — botões, formulários, páginas inteiras.' },
          { icon: 'bi-arrow-repeat', title: 'Estado (State)', desc: 'useState controla dados que, ao mudar, re-renderizam o componente automaticamente.' },
          { icon: 'bi-gear', title: 'Hooks', desc: 'Funções especiais como useEffect, useRef, useCallback, useContext e useMemo.' },
          { icon: 'bi-signpost-2', title: 'React Router', desc: 'Roteamento client-side. Esta própria aplicação usa React Router v7!' },
          { icon: 'bi-droplet-half', title: 'JSX', desc: 'Sintaxe que mistura HTML com JavaScript, tornando o código de UI intuitivo.' },
          { icon: 'bi-arrow-down-up', title: 'Props', desc: 'Dados passados de pai para filho, tornando componentes configuráveis e reutilizáveis.' },
        ].map(f => (
          <div key={f.title} className="col-md-6 anim">
            <div className="card mv-card border-0 shadow-sm h-100">
              <div className="card-body">
                <i className={`bi ${f.icon} fs-4 mb-2`} style={{ color: '#61dafb' }} />
                <h6 className="card-title">{f.title}</h6>
                <p className="card-text small" style={{ color: 'var(--mv-text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Exemplo de componente</h4>
        <pre className="mv-code">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default Counter;`}
        </pre>
      </div>
    </div>
  );
}

export default React_;