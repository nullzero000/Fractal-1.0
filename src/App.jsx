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
      // Word necesita estilos inline para respetar colores.
      const htmlContent = inputText.split('').map(char => {
        const color = getActiveColor(char);
        // Forzamos fuente grande y fondo blanco (opcional) para Word
        return `<span style="color: ${color}; font-size: 36pt; font-family: 'Times New Roman', serif;">${char}</span>`;
      }).join('');

      // Envolvemos en un div contenedor para asegurar dirección RTL
      const fullHtml = `<div dir="rtl" style="font-size: 36pt;">${htmlContent}</div>`;

      // 2. Crear objetos Blob para el portapapeles
      const blobHtml = new Blob([fullHtml], { type: 'text/html' });
      const blobText = new Blob([inputText], { type: 'text/plain' });

      // 3. Escribir en el portapapeles (Item con dos formatos)
      const data = [new ClipboardItem({
        'text/html': blobHtml,
        'text/plain': blobText
      })];

      await navigator.clipboard.write(data);
      
      // Feedback visual simple (alert temporal o cambio de icono)
      alert("SECUENCIA COPIADA AL PORTAPAPELES (CON FORMATO DE COLOR)");

    } catch (err) {
      console.error('Error al copiar:', err);
      // Fallback a texto plano si falla el Rich Text
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

      {/* INPUT DISPLAY + COPY BUTTON */}
      <section className="input-display-container">
        
        {/* Botón de Copiar */}
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
        <p>EJE 13 / MODULAR SYSTEM v4.1</p>
      </footer>
    </div>
  );
};

export default App;