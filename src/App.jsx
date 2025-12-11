import React, { useState, useMemo } from 'react';

// Lógica
import { calculateMiluyLevels } from './utils/calculations';
import { HEBREW_DATA, DEFAULT_COLOR_SYSTEM } from './data/constants';

// Componentes
import HebrewKeyboard from './components/HebrewKeyboard';
import TacticalReadout from './components/TacticalReadout';
import FractalMonitor from './components/FractalMonitor';
import AnalysisTable from './components/AnalysisTable';
import PathMonitor from './components/PathMonitor';

// Estilos
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [colorSystem, setColorSystem] = useState(DEFAULT_COLOR_SYSTEM);
  
  // Estados de la Interfaz
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // Abre el Pop-up
  const [isLoading, setIsLoading] = useState(false);         // Controla el Spinner Glitch
  const [showResultsContent, setShowResultsContent] = useState(false); // Muestra los datos
  
  const [activeLevel, setActiveLevel] = useState(0);

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
    return data.palettes[colorSystem] || data.palettes['gd'];
  };
  
  const getTextShadow = (color) => {
     const isDark = color === 'rgb(0, 0, 0)' || color === 'rgb(10, 10, 10)' || color === 'rgb(50, 50, 50)';
     return isDark ? `0 0 10px rgba(255,255,255,0.5)` : `0 0 15px ${color}`;
  };
  
  // --- LÓGICA DE ANÁLISIS (SECUENCIA) ---
  const handleAnalyze = () => {
      if (inputText.length > 0) {
          // 1. Abrir Overlay y resetear estados
          setIsOverlayOpen(true);
          setIsLoading(true);
          setShowResultsContent(false);
          setActiveLevel(0);

          // 2. Simular Procesamiento (El Glitch "AXIS 13")
          setTimeout(() => {
              setIsLoading(false); // Ocultar loader
              setShowResultsContent(true); // Mostrar resultados
          }, 2500); // 2.5 segundos de "Cálculo"
      }
  };

  const handleCloseModal = () => {
      setIsOverlayOpen(false);
      setShowResultsContent(false);
      setIsLoading(false);
  };

  return (
    <div className="supramente-terminal">
      
      {/* HEADER */}
      <header className="terminal-header">
        <div className="header-branding">
            <h1 className="axis-title" data-text="AXIS 13">AXIS 13</h1>
            <div className="axis-subtitle">COHERENCE</div>
        </div>
        <div className="system-selector">
          <select 
            value={colorSystem} 
            onChange={(e) => setColorSystem(e.target.value)}
            className="bio-select"
          >
            <option value="ari">LURIAN (ARI)</option>
            <option value="ort">ORTHODOX (INK)</option>
            <option value="akashic">AKASHIC (RGB)</option>
            <option value="gd">HERMETIC (GD)</option>
          </select>
        </div>
      </header>

      {/* INPUT DISPLAY */}
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

      {/* TECLADO */}
      <section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HebrewKeyboard 
          onKeyPress={handleKeyPress} 
          getActiveColor={getActiveColor} 
        />
      </section>

      {/* BOTÓN DE ACCIÓN */}
      <div className="action-area">
          <button className="analyze-btn" onClick={handleAnalyze}>
              INICIAR ANÁLISIS
          </button>
      </div>

      {/* --- OVERLAY POP-UP (MODAL) --- */}
      <div className={`analysis-overlay ${isOverlayOpen ? 'active' : ''}`}>
          
          {/* ESTADO 1: LOADER (GLITCH AXIS 13) */}
          {isLoading && (
              <div className="loader-container">
                  <div className="loader-title" data-text="AXIS 13">AXIS 13</div>
                  <div className="loader-status">CALCULANDO VECTORES DE EJE...</div>
              </div>
          )}

          {/* ESTADO 2: RESULTADOS */}
          {!isLoading && (
              <div className={`results-modal-content ${showResultsContent ? 'visible' : ''}`}>
                  
                  {/* Botón Cerrar */}
                  <button className="close-modal-btn" onClick={handleCloseModal}>✕</button>
                  
                  {/* Contenedor Interno de Reportes */}
                  <div className="modal-inner-wrapper">
                      
                      <TacticalReadout 
                          levels={levels} 
                          activeLevel={activeLevel}
                          onLevelSelect={setActiveLevel}
                          getActiveColor={getActiveColor}
                          colorSystem={colorSystem}
                      />
                      
                      <PathMonitor 
                          inputString={inputText} 
                          getActiveColor={getActiveColor} 
                      />
                      
                      <AnalysisTable 
                          levels={levels} 
                          activeLevel={activeLevel} 
                      />
                        
                      <FractalMonitor 
                          levels={levels} 
                          colorSystem={colorSystem} 
                      />
                  </div>
              </div>
          )}
      </div>

      <footer className="terminal-footer">
        <p>EJE 13 / MODULAR SYSTEM v4.0</p>
      </footer>
    </div>
  );
};

export default App;