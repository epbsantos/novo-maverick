import { Link } from "react-router";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import text from "../constants/text";

interface SidebarProps {
  tema: 'claro' | 'escuro';
  toggleTema: () => void;
}

export default function Sidebar({ tema, toggleTema }: SidebarProps) {
  return (
    <aside className="mv-sidebar">
      <img
        src="/img/logoUTFPR.png"
        alt="Logo UTFPR"
        className="mv-logo"
      />

      <Link to="/" className="mv-site-title">{text.title}</Link>
      <p className="mv-site-subtitle">{text.subtitle}</p>

      <ThemeToggle theme={tema} onToggle={toggleTema} />

      <Menu />

      <nav className="mv-disciplines">
        <div className="mv-discipline slides">
          <h3>
            <Link to="slides">
              <i className="bi bi-presentation-play me-2 text-primary" />
              Slides
            </Link>
          </h3>
        </div>

        <div className="mv-discipline front1">
          <h3><Link to="front1">Front-End 1</Link></h3>
          <ul>
            <li><Link to="front1/html"><i className="bi bi-filetype-html me-1" />HTML</Link></li>
            <li><Link to="front1/css"><i className="bi bi-filetype-css me-1" />CSS</Link></li>
            <li><Link to="front1/bootstrap"><i className="bi bi-bootstrap me-1" />Bootstrap</Link></li>
            <li><Link to="front1/tailwind"><i className="bi bi-wind me-1" />Tailwind CSS</Link></li>
            <li><Link to="front1/img"><i className="bi bi-image me-1" />Edição de Imagem</Link></li>
          </ul>
        </div>

        <div className="mv-discipline front2">
          <h3><Link to="front2">Front-End 2</Link></h3>
          <ul>
            <li><Link to="front2/js"><i className="bi bi-filetype-js me-1" />JavaScript</Link></li>
            <li><Link to="front2/gsap"><i className="bi bi-lightning-charge me-1" />GSAP</Link></li>
            <li><Link to="front2/react"><i className="bi bi-diagram-3 me-1" />React</Link></li>
          </ul>
        </div>

        <div className="mv-discipline design">
          <h3><Link to="design">Design Gráfico</Link></h3>
          <ul>
            <li><Link to="design/figma"><i className="bi bi-vector-pen me-1" />Figma</Link></li>
            <li><Link to="design/pencil"><i className="bi bi-pencil me-1" />Pencil</Link></li>
          </ul>
        </div>

        <div className="mv-discipline ihc">
          <h3><Link to="ihc">IHC</Link></h3>
          <ul>
            <li><Link to="ihc/teoria"><i className="bi bi-book me-1" />Teoria</Link></li>
            <li><Link to="ihc/teste"><i className="bi bi-person-check me-1" />Teste de Usabilidade</Link></li>
            <li><Link to="ihc/heuristica"><i className="bi bi-list-check me-1" />Avaliação Heurística</Link></li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
