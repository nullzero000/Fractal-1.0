import React, { useState, useMemo } from 'react';
import { analyzeFrequencyAndColor } from '../utils/spectralEngine';
import { HEBREW_DATA } from '../data/constants';

const SpectralAnalysis = ({ levels }) => {
  // Estado local: Qué nivel estamos analizando (Default: último nivel disponible)
  const [selectedLevel, setSelectedLevel] = useState(levels ? levels.length - 1 : 0);

  // Memorizamos el cálculo para no recalcular si no cambia el nivel
  const analysis = useMemo(() => {
    if (!levels || !levels[selectedLevel]) return null;
    return analyzeFrequencyAndColor(levels[selectedLevel].chars);
  }, [levels, selectedLevel]);

  if (!levels || levels.length === 0) return null;

  return (
    <div className="spectral-container">
      <h3 className="spectral-title">ANÁLISIS ESPECTRAL & TÉCNICO</h3>

      {/* CONTROL DE NIVEL (SLIDER) */}
      <div className="level-control">
        <label>Profundidad de Escaneo: <strong>Nivel {selectedLevel}</strong></label>
        <input 
          type="range" 
          min="0" 
          max={levels.length - 1} 
          value={selectedLevel} 
          onChange={(e) => setSelectedLevel(Number(e.target.value))}
          className="level-slider"
        />
      </div>

      {analysis && (
        <div className="results-grid">
          
          {/* COLUMNA 1: EL COLOR DEL ALMA (MEZCLA) */}
          <div className="color-box">
            <div 
              className="color-preview" 
              style={{ backgroundColor: analysis.mixedColor }}
            >
              <span className="color-label">{analysis.mixedColor}</span>
            </div>
            <p className="caption">Resonancia Cromática Promedio</p>
          </div>

          {/* COLUMNA 2: DATOS DUROS */}
          <div className="data-box">
            <h4>Frecuencias Dominantes</h4>
            {analysis.topList.map(char => {
               const data = HEBREW_DATA[char];
               const count = analysis.frequencyMap[char];
               const pct = ((count / analysis.total) * 100).toFixed(1);
               return (
                 <div key={char} className="stat-row">
                   <span className="stat-char">{char} ({data.name})</span>
                   <div className="stat-bar-bg">
                     <div 
                       className="stat-bar-fill" 
                       style={{ width: `${pct}%`, backgroundColor: data.color }}
                     ></div>
                   </div>
                   <span className="stat-val">{pct}%</span>
                 </div>
               )
            })}
          </div>

          {/* COLUMNA 3: DICTAMEN TÉCNICO */}
          <div className="diagnosis-box">
            <h4>// DICTAMEN DEL EXPERTO</h4>
            <pre className="expert-text">{analysis.diagnosis}</pre>
          </div>

        </div>
      )}
    </div>
  );
};

export default SpectralAnalysis;