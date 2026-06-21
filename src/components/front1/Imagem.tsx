import { usePageAnimation } from '../../hooks/usePageAnimation';

function Img() {
  const ref = usePageAnimation({ type: 'fadeUp', selector: '.anim', stagger: 0.1 });

  return (
    <div ref={ref} className="mv-page-section">
      <div className="anim">
        <h3><i className="bi bi-image me-2 text-info" />Edição de Imagens</h3>
        <span className="badge bg-info text-dark fs-6 mb-3 px-3 py-2 rounded-pill">Tratamento Gráfico</span>
      </div>

      <div className="row g-4 align-items-center mt-2">
        <div className="col-lg-5 anim">
          <div className="card mv-card border-0 shadow-sm overflow-hidden">
            <img src="/img/Gimp2.png" alt="Interface do GIMP" className="img-fluid" />
          </div>
        </div>

        <div className="col-lg-7 anim">
          <h5 className="fw-bold mb-3">Otimização de Ativos Visuais com o GIMP</h5>
          <p className="text-secondary">
            A edição de imagem é uma etapa crucial no desenvolvimento web. Ela permite adequar resoluções, recortar layouts, comprimir formatos para melhor performance de carregamento e tratar elementos visuais.
          </p>
          <p className="text-secondary">
            Nessa disciplina, utilizamos o <strong>GIMP (GNU Image Manipulation Program)</strong>, um poderoso editor de imagens rasterizadas open-source e gratuito. Ele oferece recursos profissionais para retoques fotográficos, composições e exportação de ativos otimizados para web (PNG, WEBP, etc.), sendo a principal alternativa livre ao Adobe Photoshop.
          </p>
          <a
            href="https://www.gimp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info text-dark d-inline-flex align-items-center gap-2 mt-2"
          >
            Visitar site oficial do GIMP
            <i className="bi bi-box-arrow-up-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Img;