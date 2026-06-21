import { Link } from 'react-router';
import { usePageAnimation } from '../hooks/usePageAnimation';

function Sobre() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.12 });

  const disciplinas = [
    {
      title: 'Front-End 1',
      desc: 'Fundamentos do desenvolvimento web: estruturação semântica, estilização moderna, layouts responsivos e frameworks de utilidade.',
      route: '/front1',
      icon: 'bi-code-slash',
      color: '#0d6efd',
    },
    {
      title: 'Front-End 2',
      desc: 'Interatividade avançada e lógica no cliente: programação assíncrona, manipulação de estado, animações complexas com GSAP e frameworks SPAs (React).',
      route: '/front2',
      icon: 'bi-braces-asterisk',
      color: '#198754',
    },
    {
      title: 'Design Gráfico',
      desc: 'Comunicação visual e identidade digital: teoria de cores, tipografia, composição e ferramentas de prototipação e vetorização.',
      route: '/design',
      icon: 'bi-palette2',
      color: '#dc3545',
    },
    {
      title: 'IHC',
      desc: 'Interação Humano-Computador centrada no usuário: avaliação heurística, testes de usabilidade, e design de acessibilidade.',
      route: '/ihc',
      icon: 'bi-people',
      color: '#ffc107',
    },
  ];

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim mb-4 text-center text-sm-start">
        <h3 className="display-6 fw-bold mb-2">
          <i className="bi bi-mortarboard me-2 text-primary" />
          Sobre o Maverick
        </h3>
        <span className="badge bg-primary fs-6 mb-3 px-3 py-2 rounded-pill">UTFPR Toledo</span>
        <p className="lead fs-5 text-secondary">
          O Maverick é o portal acadêmico e repositório de recursos didáticos para as disciplinas de desenvolvimento web, design e interação humano-computador da Universidade Tecnológica Federal do Paraná (UTFPR) - Campus Toledo.
        </p>
        <p>
          Aqui você encontrará os principais conceitos, códigos práticos, atividades de fixação e avaliações desenvolvidos ao longo do curso acadêmico para auxiliar no aprendizado prático e colaborativo dos alunos.
        </p>
      </div>

      <div className="row g-4 mt-2">
        {disciplinas.map((d) => (
          <div key={d.title} className="col-md-6 anim">
            <div className="card mv-card border-0 shadow-sm h-100 p-3">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <span
                      className="d-flex align-items-center justify-content-center rounded-3 fs-3"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: `${d.color}15`,
                        color: d.color,
                      }}
                    >
                      <i className={`bi ${d.icon}`} />
                    </span>
                    <h5 className="card-title fw-bold m-0">{d.title}</h5>
                  </div>
                  <p className="card-text text-secondary mb-4">{d.desc}</p>
                </div>
                <Link to={d.route} className="btn btn-outline-primary d-inline-flex align-items-center gap-2 w-fit-content">
                  Ver Conteúdo
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;
