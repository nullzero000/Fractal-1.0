import React, { useState, useMemo } from 'react';
import { analyzeFrequencyAndColor, parseRGB } from '../utils/spectralEngine'; // Importamos parseRGB
import { getSemanticsFromRGB } from '../utils/colorNamer'; // Importamos el Namer
import '../Styles/TacticalReadout.css';

const TacticalReadout = ({ levels, getActiveColor, colorSystem }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const analysis = useMemo(() => {
    if (!levels || !levels[selectedLevel]) return null;
    if (!levels[selectedLevel].chars || levels[selectedLevel].chars.length === 0) return null;
    return analyzeFrequencyAndColor(levels[selectedLevel].chars, colorSystem);
  }, [levels, selectedLevel, colorSystem]);

  if (!levels || levels.length === 0 || !analysis) return null;

  const { dominantData, frequencyMap, mixedColor } = analysis;
  
  // 1. OBTENER DATOS DEL COLOR PROMEDIO (Para que coincida con el Monitor)
  const [r, g, b] = parseRGB(mixedColor);
  const colorName = getSemanticsFromRGB(r, g, b);
  const rgbString = `${r}, ${g}, ${b}`;

  // 2. USAR EL COLOR PROMEDIO COMO BASE (Sincronicidad visual)
  const baseColor = mixedColor; 

  const sortedLetters = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);
  const top5 = sortedLetters.slice(0, 5);
  const GOLDEN_RATIO = 1.618;
  const BASE_SIZE = 4.0;

  const getGlowStyle = (color, size) => {
    const isDark = color.includes('0, 0, 0') || color.includes('10, 10, 10') || color.includes('50, 50, 50');
    const textColor = isDark ? '#ffffff' : color;
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
    // Pasamos el mixedColor (baseColor) al CSS
    <div className="tactical-container" style={{ '--base-color': baseColor }}>
      
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

      <div className="tactical-content">
        
        {/* NUEVO: INDICADOR DE RESONANCIA CROMÁTICA */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <span style={{ 
                fontSize: '0.7rem', 
                letterSpacing: '2px', 
                color: '#fff', 
                opacity: 0.8,
                borderBottom: `1px solid ${baseColor}`,
                paddingBottom: '5px'
            }}>
                RESONANCIA: <strong>{colorName.toUpperCase()}</strong> <span style={{opacity:0.5}}>({rgbString})</span>
            </span>
        </div>

        <div className="section-title">FRECUENCIA ÁUREA (TOP 5)</div>
        
        <div className="golden-section">
          {top5.map((char, i) => {
            const size = Math.max(1.5, BASE_SIZE / Math.pow(GOLDEN_RATIO, i));
            // Las letras siguen usando SU color individual (getActiveColor)
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