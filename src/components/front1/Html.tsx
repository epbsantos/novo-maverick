import { usePageAnimation } from '../../hooks/usePageAnimation';

function Html() {
  const ref = usePageAnimation({ type: 'scaleIn', selector: '.anim', stagger: 0.1 });

  const tags = [
    { tag: '<header>', desc: 'Cabeçalho da página' },
    { tag: '<nav>', desc: 'Navegação principal' },
    { tag: '<main>', desc: 'Conteúdo principal' },
    { tag: '<section>', desc: 'Seção temática' },
    { tag: '<article>', desc: 'Conteúdo independente' },
    { tag: '<footer>', desc: 'Rodapé da página' },
  ];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-filetype-html me-2" style={{ color: '#e44d26' }} />HTML5</h3>
        <p>
          O HTML (HyperText Markup Language) é a linguagem de marcação padrão para estruturar
          conteúdo na web. O <strong>HTML5</strong> introduz elementos semânticos que melhoram
          acessibilidade e SEO, além de suporte nativo a multimídia.{' '}
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            Documentação MDN <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      <h4 className="anim">Elementos Semânticos do HTML5</h4>
      <div className="row g-2">
        {tags.map(({ tag, desc }) => (
          <div key={tag} className="col-sm-6 col-md-4 anim">
            <div className="card h-100 mv-card border-0 shadow-sm">
              <div className="card-body py-2">
                <code className="text-danger fs-6">{tag}</code>
                <p className="small mb-0 mt-1" style={{ color: 'var(--mv-text-muted)' }}>{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Estrutura básica</h4>
        <pre className="mv-code">
{`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha Página</title>
  </head>
  <body>
    <header>
      <h1>Título</h1>
    </header>
    <main>
      <p>Conteúdo principal</p>
    </main>
  </body>
</html>`}
        </pre>
      </div>
    </div>
  );
}

export default Html;