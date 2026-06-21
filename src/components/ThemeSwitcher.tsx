import React from 'react';

interface ThemeSwitcherProps {
  tema: 'claro' | 'escuro' | 'maverick';
  setTema: (tema: 'claro' | 'escuro' | 'maverick') => void;
}

export default function ThemeSwitcher({ tema, setTema }: ThemeSwitcherProps) {
  return (
    <div style={{ marginTop: '16px', marginBottom: '16px' }}>
      <label htmlFor="theme-select" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '4px', fontWeight: 'bold' }}>
        Mudar Visual:
      </label>
      <select
        id="theme-select"
        value={tema}
        onChange={(e) => setTema(e.target.value as any)}
        style={{ padding: '6px', width: '100%', borderRadius: '4px', cursor: 'pointer' }}
      >
        <option value="claro">Modo Claro</option>
        <option value="escuro">Modo Escuro</option>
      </select>
    </div>
  );
}
