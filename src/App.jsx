import React, { useState, useMemo } from 'react';

// Lógica
import { calculateMiluyLevels } from './utils/calculations';
import { HEBREW_DATA, DEFAULT_COLOR_SYSTEM } from './data/constants'; // FIX: Importamos el Default

// Componentes
import HebrewKeyboard from './components/HebrewKeyboard';
import TacticalReadout from './components/TacticalReadout';
import FractalMonitor from './components/FractalMonitor';
import AnalysisTable from './components/AnalysisTable';

// Estilos
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  
  // FIX CRÍTICO: Usamos la constante importada ('ari')
  const [colorSystem, setColorSystem] = useState(DEFAULT_COLOR_SYSTEM);
  
  const [showResults, setShowResults] = useState(false);

  const handleKeyPress = (char) => {
    if (char === 'BACKSPACE') {
      setInputText((prev) => prev.slice(0, -1));
    } else {
      setInputText((prev) => prev + char);
    }
  };

  const levels = useMemo(() => {
    return calculateMiluyLevels(inputText);
  }, [inputText]);

  const getActiveColor = (char) => {
    if (!char) return 'transparent';
    const data = HEBREW_DATA[char];
    if (!data || !data.palettes) return '#555';
    // Fallback seguro
    return data.palettes[colorSystem] || data.palettes['gd'];
  };
  
  const getTextShadow = (color) => {
     const isDark = color === 'rgb(0, 0, 0)' || color === 'rgb(10, 10, 10)' || color === 'rgb(50, 50, 50)';
     return isDark ? `0 0 10px rgba(255,255,255,0.5)` : `0 0 15px ${color}`;
  };
  
  const handleAnalyze = () => {
      if (inputText.length > 0) {
          setShowResults(true);
          setTimeout(() => {
              const el = document.getElementById('results-anchor');
              if(el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      }
  };

  return (
    <div className="supramente-terminal">
      
      <header className="terminal-header">
        <h1 className="glitch-title">SUPRAMENTE_IO</h1>
        
        <div className="system-selector">
          <select 
            value={colorSystem} 
            onChange={(e) => setColorSystem(e.target.value)}
            className="bio-select"
          >
            {/* Lurian (ARI) es el primero por diseño */}
            <option value="ari">LURIAN (ARI)</option>
            <option value="ort">ORTHODOX (INK)</option>
            <option value="akashic">AKASHIC (RGB)</option>
            <option value="gd">HERMETIC (GD)</option>
          </select>
        </div>
      </header>

      <section className="input-display-container">
        {inputText ? (
          <div className="live-text">
            {inputText.split('').map((char, index) => {
               const color = getActiveColor(char);
               return (
                   <span 
                     key={index} 
                     style={{ 
                         color: color, 
                         textShadow: getTextShadow(color),
                         transition: 'color 0.3s'
                     }}
                   >
                     {char}
                   </span>
               );
            })}
          </div>
        ) : (
          <span className="placeholder-text">_ESPERANDO_SECUENCIA_</span>
        )}
      </section>

      <section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HebrewKeyboard 
          onKeyPress={handleKeyPress} 
          getActiveColor={getActiveColor} 
        />
      </section>

      <div className="action-area">
          <button className="analyze-btn" onClick={handleAnalyze}>
              INICIAR ANÁLISIS
          </button>
      </div>

      <div id="results-anchor" className={`results-popout ${showResults ? 'visible' : ''}`}>
        
        <TacticalReadout 
            levels={levels} 
            getActiveColor={getActiveColor}
            colorSystem={colorSystem}
        />
        
        <AnalysisTable levels={levels} />
          
        <FractalMonitor 
            levels={levels} 
            colorSystem={colorSystem} 
        />
      </div>

      <footer className="terminal-footer">
        <p>EJE 13 / MODULAR SYSTEM v3.3</p>
      </footer>
    </div>
  );
};

export default App;