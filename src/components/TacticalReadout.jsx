import React, { useState, useMemo } from 'react';
import { analyzeFrequencyAndColor, parseRGB } from '../utils/spectralEngine'; 
import { getSemanticsFromRGB } from '../utils/colorNamer'; 
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
  
  const [r, g, b] = parseRGB(mixedColor);
  const colorName = getSemanticsFromRGB(r, g, b);
  const rgbString = `${r}, ${g}, ${b}`;
  const baseColor = mixedColor; 

  // Datos Toráicos con fallback seguro
  const torahData = dominantData.torah || { word: '?', phonetic: '?', cite: '?', bio: '?' };

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
    <div className="tactical-container" style={{ '--base-color': baseColor }}>
      
      {/* NAVEGACIÓN */}
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
        
        {/* HEADER CROMÁTICO */}
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

        {/* FRECUENCIA ÁUREA */}
        <div className="section-title">FRECUENCIA ÁUREA (TOP 5)</div>
        <div className="golden-section">
          {top5.map((char, i) => {
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

        {/* SÍNTESIS */}
        <div className="section-title">SINTESIS DE EJE: {analysis.dominant} ({dominantData?.name})</div>
        <div className="attr-grid">
          <span className="attr-item">ELEM: {dominantData?.element || '-'}</span>
          <span className="attr-item">PLAN: {dominantData?.planet || '-'}</span>
          <span className="attr-item">ARCANO: {dominantData?.tarot || '-'}</span>
        </div>
        <div className="text-body">
          {dominantData?.energy}
        </div>

        {/* ORIGEN TORÁICO */}
        <div className="torah-block">
            <div className="torah-header">ORIGEN DE EJE (TORÁ & BIO)</div>
            <div className="torah-grid">
                <div className="torah-word-box">
                    <span className="hebrew-origin" dir="rtl" lang="he">{torahData.word}</span>
                    <span className="phonetic-origin">{torahData.phonetic}</span>
                </div>
                <div className="torah-meta-box">
                    <div className="meta-row">
                        <span className="meta-label">CITA:</span>
                        <span className="meta-val">{torahData.cite}</span>
                    </div>
                    <div className="meta-row">
                        <span className="meta-label">BIO:</span>
                        <span className="meta-val highlight">{torahData.bio}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default TacticalReadout;