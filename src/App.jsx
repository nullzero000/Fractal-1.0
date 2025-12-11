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
  
  // Estados de Interfaz
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);         
  const [showResultsContent, setShowResultsContent] = useState(false);
  
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

  // --- NUEVA LÓGICA: COPIAR CON COLORES (RICH TEXT) ---
  const handleCopy = async () => {
    if (!inputText) return;

    try {
      // 1. Construir el HTML con estilos en línea (Inline CSS)
      const htmlContent = inputText.split('').map(char => {
        const color = getActiveColor(char);
        return `<span style="color: ${color}; font-size: 36pt; font-family: 'Times New Roman', serif;">${char}</span>`;
      }).join('');

      const fullHtml = `<div dir="rtl" style="font-size: 36pt;">${htmlContent}</div>`;

      // 2. Crear objetos Blob
      const blobHtml = new Blob([fullHtml], { type: 'text/html' });
      const blobText = new Blob([inputText], { type: 'text/plain' });

      // 3. Escribir en el portapapeles
      const data = [new ClipboardItem({
        'text/html': blobHtml,
        'text/plain': blobText
      })];

      await navigator.clipboard.write(data);
      alert("SECUENCIA COPIADA AL PORTAPAPELES (CON FORMATO DE COLOR)");

    } catch (err) {
      console.error('Error al copiar:', err);
      navigator.clipboard.writeText(inputText);
      alert("Copiado solo texto (El navegador no soportó formato rico)");
    }
  };
  
  // --- LÓGICA DE ANÁLISIS ---
  const handleAnalyze = () => {
      if (inputText.length > 0) {
          setIsOverlayOpen(true);
          setIsLoading(true);
          setShowResultsContent(false);
          setActiveLevel(0);

          setTimeout(() => {
              setIsLoading(false); 
              setShowResultsContent(true); 
          }, 2500); 
      }
  };

  const handleCloseModal = () => {
      setIsOverlayOpen(false);
      setShowResultsContent(false);
      setIsLoading(false);
  };

  return (
    <div className="supramente-terminal">
      
      <header className="terminal-header">
        <div className="header-branding">
            <h1 className="axis-title" data-text="AXIS 13">AXIS 13</h1>
            <div className="axis-subtitle">COHERENCE</div>
        </div>
      </header>

      {/* INPUT DISPLAY + COPY BUTTON */}
      <section className="input-display-container">
        <button className="copy-btn" onClick={handleCopy} title="Copiar con Colores">
            <svg className="copy-icon" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        </button>

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

      {/* SYSTEM NAVBAR */}
      <nav className="system-navbar">
          <button className={`sys-btn ${colorSystem === 'ari' ? 'active' : ''}`} onClick={() => setColorSystem('ari')}>
            <svg className="sys-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            <span>LURIAN</span>
          </button>
          <button className={`sys-btn ${colorSystem === 'ort' ? 'active' : ''}`} onClick={() => setColorSystem('ort')}>
            <svg className="sys-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            <span>ORTHO</span>
          </button>
          <button className={`sys-btn ${colorSystem === 'akashic' ? 'active' : ''}`} onClick={() => setColorSystem('akashic')}>
            <svg className="sys-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>AKASHIC</span>
          </button>
          <button className={`sys-btn ${colorSystem === 'gd' ? 'active' : ''}`} onClick={() => setColorSystem('gd')}>
            <svg className="sys-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            <span>HERMETIC</span>
          </button>
      </nav>

      <section style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <HebrewKeyboard onKeyPress={handleKeyPress} getActiveColor={getActiveColor} />
      </section>

      <div className="action-area">
          <button className="analyze-btn" onClick={handleAnalyze}>INICIAR ANÁLISIS</button>
      </div>

      {/* MODAL */}
      <div className={`analysis-overlay ${isOverlayOpen ? 'active' : ''}`}>
          {isLoading && (
              <div className="loader-container">
                  <div className="loader-title" data-text="AXIS 13">AXIS 13</div>
                  <div className="loader-status">CALCULANDO VECTORES DE EJE...</div>
              </div>
          )}

          {!isLoading && (
              <div className={`results-modal-content ${showResultsContent ? 'visible' : ''}`}>
                  <button className="close-modal-btn" onClick={handleCloseModal}>✕</button>
                  
                  {/* AQUÍ ESTÁ EL CAMBIO DE ORDEN: AnalysisTable PRIMERO */}
                  <div className="modal-inner-wrapper">
                      
                      {/* 1. ANÁLISIS CUANTITATIVO (AHORA ARRIBA) */}
                      <AnalysisTable 
                          levels={levels} 
                          activeLevel={activeLevel} 
                      />

                      {/* 2. TACTICAL READOUT */}
                      <TacticalReadout 
                          levels={levels} 
                          activeLevel={activeLevel}
                          onLevelSelect={setActiveLevel}
                          getActiveColor={getActiveColor}
                          colorSystem={colorSystem}
                      />
                      
                      {/* 3. MONITOR DE SENDEROS */}
                      <PathMonitor 
                          inputString={inputText} 
                          getActiveColor={getActiveColor} 
                      />
                        
                      {/* 4. FRACTAL MONITOR */}
                      <FractalMonitor 
                          levels={levels} 
                          colorSystem={colorSystem} 
                      />
                  </div>
              </div>
          )}
      </div>

      <footer className="terminal-footer">
        <p>EJE 13 / MODULAR SYSTEM v4.3</p>
      </footer>
    </div>
  );
};

export default App;