import React, { useState, useMemo } from 'react';

// Lógica
import { calculateMiluyLevels } from './utils/calculations';
import { HEBREW_DATA } from './data/constants';

// Componentes
import HebrewKeyboard from './components/HebrewKeyboard';
import TacticalReadout from './components/TacticalReadout';
import FractalMonitor from './components/FractalMonitor';
import AnalysisTable from './components/AnalysisTable';

// Estilos
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [colorSystem, setColorSystem] = useState('akashic');
  
  // Estado para controlar el Popout
  const [showResults, setShowResults] = useState(false);

  const handleKeyPress = (char) => {
    // Si el usuario edita, opcionalmente ocultamos resultados para obligar a "re-analizar"
    // O podemos dejarlo abierto. Por UX de "terminal", a veces es mejor ocultar al cambiar datos significativos.
    // setShowResults(false); 

    if (char === 'BACKSPACE') {
      setInputText((prev) => prev.slice(0, -1));
    } else {
      setInputText((prev) => prev + char);
    }
  };

  // Cálculo en tiempo real (siempre corre, pero se muestra solo al activar)
  const levels = useMemo(() => {
    return calculateMiluyLevels(inputText);
  }, [inputText]);

  const getActiveColor = (char) => {
    if (!char) return 'transparent';
    const data = HEBREW_DATA[char];
    if (!data || !data.palettes) return '#555';
    return data.palettes[colorSystem] || data.palettes['gd'];
  };
  
  // Función para manejar el brillo en letras oscuras dentro del Input
  const getTextShadow = (color) => {
     const isDark = color === 'rgb(0, 0, 0)' || color === 'rgb(10, 10, 10)' || color === 'rgb(50, 50, 50)';
     return isDark ? `0 0 10px rgba(255,255,255,0.5)` : `0 0 15px ${color}`;
  };
  
  // Manejador del botón Buscar
  const handleAnalyze = () => {
      if (inputText.length > 0) {
          setShowResults(true);
          // Scroll suave hacia los resultados
          setTimeout(() => {
              document.getElementById('results-anchor').scrollIntoView({ behavior: 'smooth' });
          }, 100);
      }
  };

  return (
    <div className="supramente-terminal">
      
      {/* 1. HEADER */}
      <header className="terminal-header">
        <h1 className="glitch-title">SUPRAMENTE_IO</h1>
        
        <div className="system-selector">
          <select 
            value={colorSystem} 
            onChange={(e) => setColorSystem(e.target.value)}
            className="bio-select"
          >
            <option value="akashic">AKASHIC (RGB)</option>
            <option value="ari">LURIAN (ARI)</option>
            <option value="ort">ORTHODOX (INK)</option>
            <option value="gd">HERMETIC (GD)</option>
          </select>
        </div>
      </header>

      {/* 2. DISPLAY DE TEXTO (Ahora arriba del teclado) */}
      <section className="input-display-container">
        {inputText ? (
          <div className="live-text">
            {inputText.split('').map((char, index) => {
               const color = getActiveColor(char);
               // Color de texto: si es muy oscuro, lo ponemos blanco
               const isDark = color.includes('0, 0, 0') || color.includes('0, 0, 205'); 
               // Nota: El azul oscuro (Bet akashic) también necesita cuidado, pero dejemos el color original 
               // con un shadow fuerte.
               
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

      {/* 3. TECLADO */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HebrewKeyboard 
          onKeyPress={handleKeyPress} 
          getActiveColor={getActiveColor} 
        />
      </section>

      {/* 4. BOTÓN DE ACCIÓN (TRIGGER) */}
      <div className="action-area">
          <button className="analyze-btn" onClick={handleAnalyze}>
              INICIAR ANÁLISIS
          </button>
      </div>

      {/* 5. RESULTADOS (POPOUT) */}
      {/* Usamos una clase condicional para la animación CSS */}
      <div id="results-anchor" className={`results-popout ${showResults ? 'visible' : ''}`}>
        
        {/* Tactical Readout */}
        <TacticalReadout 
            levels={levels} 
            getActiveColor={getActiveColor}
            colorSystem={colorSystem}
        />
        
        {/* Tablas de Datos */}
        <AnalysisTable levels={levels} />
          
        <FractalMonitor 
            levels={levels} 
            colorSystem={colorSystem} 
        />
      </div>

      <footer className="terminal-footer">
        <p>EJE 13 / MODULAR SYSTEM v3.1</p>
      </footer>
    </div>
  );
};

export default App;