import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Gsap() {
  const ref = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Meta-animation: GSAP page animates itself
    gsap.from('.anim', {
      scale: 0,
      rotation: 360,
      opacity: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.15,
    });

    // Live demo ball
    if (ballRef.current) {
      gsap.to(ballRef.current, {
        x: 160,
        duration: 1.4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  }, { scope: ref });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-lightning-charge-fill me-2 text-warning" />GSAP – GreenSock Animation Platform</h3>
        <p>
          GSAP é a biblioteca de animação JavaScript mais poderosa do mundo, com desempenho
          superior a CSS animations e alta compatibilidade. Utilizada por Netflix, Google e NASA.{' '}
          <a href="https://gsap.com" target="_blank" rel="noopener noreferrer">
            gsap.com <i className="bi bi-box-arrow-up-right ms-1" />
          </a>
        </p>
      </div>

      {/* Live Demo */}
      <div className="card mv-card shadow-sm border-0 p-3 mb-4 anim">
        <h6 className="mb-3"><i className="bi bi-play-circle me-1 text-success" />Demo ao vivo</h6>
        <div style={{ position: 'relative', height: '48px' }}>
          <div
            ref={ballRef}
            style={{
              width: 42, height: 42,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              position: 'absolute',
              top: 0, left: 0,
              boxShadow: '0 4px 12px rgba(245,158,11,0.5)',
            }}
          />
        </div>
        <code className="small mt-2" style={{ color: 'var(--mv-text-muted)' }}>
          gsap.to(ball, {'{ '}x: 160, ease: "power1.inOut", yoyo: true, repeat: -1{' }'})
        </code>
      </div>

      <div className="row g-3">
        {[
          { icon: 'bi-arrow-right-circle', title: 'Tweens', desc: 'gsap.to() / gsap.from() / gsap.fromTo() para animar qualquer propriedade.' },
          { icon: 'bi-collection-play', title: 'Timelines', desc: 'Sequências complexas de animações com controle preciso de timing.' },
          { icon: 'bi-graph-up', title: 'Easing', desc: 'Curvas de aceleração: power, elastic, bounce, back e funções customizadas.' },
          { icon: 'bi-mouse', title: 'ScrollTrigger', desc: 'Animações ativadas pelo scroll, com pin, scrub e snap.' },
          { icon: 'bi-type', title: 'SplitText', desc: 'Divide texto em chars/words/lines para animações letra a letra.' },
          { icon: 'bi-layers', title: 'Stagger', desc: 'Atraso progressivo entre múltiplos elementos para efeito cascata.' },
        ].map(f => (
          <div key={f.title} className="col-md-6 anim">
            <div className="d-flex gap-3 p-3 rounded mv-card border shadow-sm h-100">
              <i className={`bi ${f.icon} fs-4 text-warning flex-shrink-0 mt-1`} />
              <div>
                <strong>{f.title}</strong>
                <p className="small mb-0 mt-1" style={{ color: 'var(--mv-text-muted)' }}>{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 anim">
        <h4>Código de exemplo</h4>
        <pre className="mv-code">
{`// Timeline com stagger
const tl = gsap.timeline({ delay: 0.3 });

tl.from(".hero-title", {
  yPercent: 100,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.05,
});

tl.from(".card", {
  opacity: 0,
  y: 60,
  stagger: 0.1,
  ease: "power3.out",
}, "-=0.4");`}
        </pre>
      </div>
    </div>
  );
}

export default Gsap;