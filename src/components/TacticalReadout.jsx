import React, { useMemo } from 'react';
import { analyzeFrequencyAndColor, parseRGB } from '../utils/spectralEngine'; 
import { getSemanticsFromRGB } from '../utils/colorNamer'; 
import '../Styles/TacticalReadout.css';

// DICCIONARIO DE NIVELES
const LEVEL_META = {
  0: { label: 'NV 1 (MATERIA)', world: "ASSIYÁ HA'TACHTONA", focus: 'Cuerpo / Nefesh', desc: 'La Letra como Forma. Verificación de si la Luz se sostiene. Dominio del Ego.' },
  1: { label: 'NV 2 (ACCIÓN)', world: 'ASSIYÁ (ESPÍRITU)', focus: 'Ruach / Sendero 11-32', desc: 'La Letra como Fuerza. Primera Expansión. Rectificación a través de los actos.' },
  2: { label: 'NV 3 (FORMACIÓN)', world: 'YETZIRÁ (ALMA)', focus: 'Neshamá / Emoción', desc: 'La Letra como Emoción. Flujo puro. Se establecen las Formas Arquetípicas.' },
  3: { label: 'NV 4 (CREACIÓN)', world: 'BERIÁ (VIDA)', focus: 'Chayá / Mente', desc: 'Estructura Causal. La mente deja de proyectar trauma y se alinea con la Ley.' },
  4: { label: 'NV 5 (EMANACIÓN)', world: 'ATZILUT (UNIDAD)', focus: 'Yechidá / Intención', desc: 'Máxima Coherencia. El mundo de la Voluntad pura y el Deseo de Otorgar.' },
  5: { label: 'RAÍZ', world: 'VOLUNTAD PURA (KETER)', focus: 'Eje 13', desc: 'El punto final de la Ascensión. La Fusión con la Voluntad.' }
};

const TacticalReadout = ({ levels, activeLevel, onLevelSelect, getActiveColor, colorSystem }) => {
  
  const analysis = useMemo(() => {
    if (!levels || !levels[activeLevel]) return null;
    if (!levels[activeLevel].chars || levels[activeLevel].chars.length === 0) return null;
    return analyzeFrequencyAndColor(levels[activeLevel].chars, colorSystem);
  }, [levels, activeLevel, colorSystem]);

  if (!levels || levels.length === 0 || !analysis) return null;

  const { dominantData, frequencyMap, mixedColor } = analysis;
  
  const [r, g, b] = parseRGB(mixedColor);
  const colorName = getSemanticsFromRGB(r, g, b);
  const rgbString = `${r}, ${g}, ${b}`;
  const baseColor = mixedColor; 

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

  const currentMeta = LEVEL_META[activeLevel] || { label: `NIVEL ${activeLevel}`, world: 'DESCONOCIDO', desc: '' };

  return (
    <div className="tactical-container" style={{ '--base-color': baseColor }}>
      
      {/* 1. NAVEGACIÓN */}
      <div className="tactical-nav">
        {levels.map((lvl) => {
            const meta = LEVEL_META[lvl.level] || { label: `NIVEL ${lvl.level}` };
            return (
              <button 
                key={lvl.level} 
                className={`tactical-tab ${activeLevel === lvl.level ? 'active' : ''}`}
                onClick={() => onLevelSelect(lvl.level)}
              >
                {meta.label}
              </button>
            );
        })}
      </div>

      <div className="tactical-content">
        
        {/* CONTEXTO */}
        <div className="level-context-box">
            <div className="context-header">
                <span className="context-world">{currentMeta.world}</span>
                <span className="context-focus">// {currentMeta.focus}</span>
            </div>
            <div className="context-desc">{currentMeta.desc}</div>
        </div>

        {/* HEADER CROMÁTICO */}
        <div className="chroma-header">
            <span style={{color: '#fff', opacity:0.9, letterSpacing:'2px', fontSize:'0.7rem'}}>
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
                <span style={getGlowStyle(color, size)}>{char}</span>
                <span className="golden-count">x{frequencyMap[char]}</span>
              </div>
            );
          })}
        </div>

        {/* SÍNTESIS */}
        <div className="section-title">SINTESIS DE EJE: {analysis.dominant} ({dominantData?.name})</div>
        
        {/* GRID DE ATRIBUTOS (MEJORADO) */}
        <div className="attr-grid">
          <div className="attr-item">
              <span className="attr-label">ELEM</span>
              <span className="attr-val">{dominantData?.element || '-'}</span>
          </div>
          <div className="attr-item">
              <span className="attr-label">PLAN</span>
              <span className="attr-val">{dominantData?.planet || '-'}</span>
          </div>
          <div className="attr-item">
              <span className="attr-label">ARCANO</span>
              <span className="attr-val">{dominantData?.tarot || '-'}</span>
          </div>
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