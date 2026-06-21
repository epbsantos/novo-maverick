type Theme = 'claro' | 'escuro';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'escuro';
  return (
    <button
      className="mv-theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      title={isDark ? 'Modo Claro' : 'Modo Escuro'}
    >
      <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} />
      {isDark ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
}

export default ThemeToggle;
