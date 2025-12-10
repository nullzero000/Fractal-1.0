import React, { useState, useMemo } from 'react';
import { analyzeFrequencyAndColor } from '../utils/spectralEngine';
import '../Styles/TacticalReadout.css';

const TacticalReadout = ({ levels, getActiveColor, colorSystem }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);

  // Recálculo seguro
  const analysis = useMemo(() => {
    // Protección contra datos nulos
    if (!levels || !levels[selectedLevel]) return null;
    if (!levels[selectedLevel].chars || levels[selectedLevel].chars.length === 0) return null;
    
    return analyzeFrequencyAndColor(levels[selectedLevel].chars, colorSystem);
  }, [levels, selectedLevel, colorSystem]);

  // Si no hay análisis, no mostramos NADA (ni siquiera el contenedor vacío)
  if (!levels || levels.length === 0 || !analysis) return null;

  const { dominantData, frequencyMap } = analysis;
  const systemColor = getActiveColor(analysis.dominant); 

  // Ordenar frecuencias
  const sortedLetters = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
  const top5 = sortedLetters.slice(0, 5);
  
  const GOLDEN_RATIO = 1.618;
  const BASE_SIZE = 4.0;

  // Lógica de brillo para letras oscuras (Negro sobre fondo oscuro)
  const getGlowStyle = (color, size) => {
    // Detectamos negros puros o muy oscuros
    const isDark = color.includes('0, 0, 0') || color.includes('10, 10, 10') || color.includes('50, 50, 50');
    
    // Si es oscuro, el texto es Blanco, si no, el color original
    const textColor = isDark ? '#ffffff' : color;
    
    // Si es oscuro, el brillo es Blanco difuso, si no, el color original
    const shadowColor = isDark ? 'rgba(255,255,255,0.6)' : color;
    
    return {
        fontSize: `${size}rem`, 
        color: textColor, 
        textShadow: `0 0 ${size * 5}px ${shadowColor}`, 
        lineHeight: 1, 
        fontFamily: 'serif', 
        transition: 'all 0.5s ease' 
    };
  };

  return (
    <div className="tactical-container" style={{ '--base-color': systemColor }}>
      
      {/* 1. NAVEGACIÓN */}
      <div className="tactical-nav">
        {levels.map((lvl) => (
          <button 
            key={lvl.level} 
            className={`tactical-tab ${selectedLevel === lvl.level ? 'active' : ''}`}
            onClick={() => setSelectedLevel(lvl.level)}
          >
            {lvl.level === 0 ? 'RAÍZ' : `NIVEL ${lvl.level}`}
          </button>
        ))}
      </div>

      {/* 2. CONTENIDO (Aquí estaba el fallo de visibilidad) */}
      <div className="tactical-content">
        
        <div className="section-title">FRECUENCIA ÁUREA (TOP 5)</div>
        
        <div className="golden-section">
          {top5.map((char, i) => {
            // Reducimos tamaño progresivamente según proporción áurea
            const size = Math.max(1.5, BASE_SIZE / Math.pow(GOLDEN_RATIO, i));
            const color = getActiveColor(char);
            
            return (
              <div key={char} className="golden-item">
                <span style={getGlowStyle(color, size)}>
                  {char}
                </span>
                <span className="golden-count">x{frequencyMap[char]}</span>
              </div>
            );
          })}
        </div>

        <div className="section-title">SINTESIS DE EJE: {analysis.dominant} ({dominantData?.name})</div>
        
        <div className="attr-grid">
          <span className="attr-item">ELEM: {dominantData?.element || '-'}</span>
          <span className="attr-item">PLAN: {dominantData?.planet || '-'}</span>
          <span className="attr-item">ARCANO: {dominantData?.tarot || '-'}</span>
        </div>

        <div className="text-body">
          {dominantData?.energy}
        </div>
      </div>
    </div>
  );
};

export default TacticalReadout;