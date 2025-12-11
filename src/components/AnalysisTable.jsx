import React, { useState } from 'react';
import '../Styles/AnalysisTable.css';

// Recibimos activeLevel
const AnalysisTable = ({ levels, activeLevel }) => {
  const [hoveredLevel, setHoveredLevel] = useState(null);

  if (!levels || levels.length === 0) return null;

  // Lógica de Prioridad:
  // 1. Si el usuario hace Hover en la tabla -> Muestra Hover.
  // 2. Si no, muestra el Nivel seleccionado en el Tactical (activeLevel).
  // 3. Si falla, muestra el Final.
  
  const selectedLevelData = levels.find(l => l.level === activeLevel);
  const finalLevel = levels[levels.length - 1];
  
  const displayData = hoveredLevel || selectedLevelData || finalLevel;

  return (
    <div className="analysis-container">
      <h3 className="analysis-title">AXIS 13 (DIAGNÓSTICO CUANTITATIVO)</h3>
      
      <div className="table-wrapper">
        <table className="miluy-table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Letras</th>
              <th>Masa (Gem)</th>
              <th>Esencia (1-9)</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((lvl) => {
              // Determinamos si esta fila está activa (ya sea por hover o por selección en tactical)
              const isActive = (hoveredLevel && hoveredLevel.level === lvl.level) || 
                               (!hoveredLevel && activeLevel === lvl.level);

              return (
                <tr 
                  key={lvl.level}
                  onMouseEnter={() => setHoveredLevel(lvl)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className={isActive ? 'active-row' : ''}
                >
                  <td className="level-cell">NIVEL {lvl.level}</td>
                  <td style={{color: '#aaa'}}>{lvl.chars.length}</td>
                  <td className="value-cell">{lvl.totalValue}</td>
                  <td className="reduced-cell">{lvl.reducedValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-box">
        <span>
            VIBRACIÓN ACTIVA (NIVEL {displayData.level}):
        </span>
        
        <span className="final-number">
            {displayData.reducedValue}
        </span>
      </div>
    </div>
  );
};

export default AnalysisTable;