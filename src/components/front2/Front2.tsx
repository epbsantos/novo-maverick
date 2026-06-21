import { usePageAnimation } from '../../hooks/usePageAnimation';

function Front2() {
  const ref = usePageAnimation({ type: 'fadeRight', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <span className="badge mv-badge fs-6 mb-3">60 horas</span>
        <h3>Desenvolvimento <em>Web Front-End</em> 2</h3>
        <p>Desenvolvimento de interfaces de usuário para aplicativos web e móveis.
          Utilização de frameworks e bibliotecas para otimizar a experiência do usuário.</p>
      </div>

      <div className="row g-3 mt-1">
        {[
          { icon: 'bi-filetype-js', color: '#f7df1e', bg: '#1c1c1c', title: 'JavaScript', desc: 'DOM, eventos, assincronicidade, arrays e objetos.' },
          { icon: 'bi-diagram-3', color: '#61dafb', bg: '#1c1c1c', title: 'React', desc: 'Componentes, hooks, JSX, estado e roteamento.' },
          { icon: 'bi-lightning-charge-fill', color: '#88ce02', bg: '#1c1c1c', title: 'GSAP', desc: 'Tweens, timelines, ScrollTrigger e easing.' },
        ].map(f => (
          <div key={f.title} className="col-md-4 anim">
            <div className="card h-100 mv-card border-0 shadow text-center">
              <div className="card-body py-4">
                <i className={`bi ${f.icon} fs-1 mb-3`} style={{ color: f.color }} />
                <h5 className="card-title">{f.title}</h5>
                <p className="card-text small" style={{ color: 'var(--mv-text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Objetivos de Aprendizagem</h4>
        <ul>
          <li>Compreender os fundamentos do JavaScript e sua aplicação no front-end.</li>
          <li>Manipular o DOM para criar páginas dinâmicas e interativas.</li>
          <li>Desenvolver interfaces componentizadas utilizando React.</li>
          <li>Criar animações de alta performance com GSAP.</li>
          <li>Aplicar boas práticas de organização e padrões de projeto.</li>
        </ul>
      </div>
    </div>
  );
}

export default Front2;