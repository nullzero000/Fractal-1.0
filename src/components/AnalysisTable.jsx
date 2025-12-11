import React, { useState } from 'react';
import '../Styles/AnalysisTable.css';

const AnalysisTable = ({ levels, activeLevel }) => {
  const [hoveredLevel, setHoveredLevel] = useState(null);

  if (!levels || levels.length === 0) return null;

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
              <th>NIVEL</th>
              <th>VOLUMEN</th> {/* Antes "Letras" */}
              <th>DIVERSIDAD</th> {/* NUEVO: Únicas */}
              <th>MASA (GEM)</th>
              <th>ESENCIA (1-9)</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((lvl) => {
              const isActive = (hoveredLevel && hoveredLevel.level === lvl.level) || 
                               (!hoveredLevel && activeLevel === lvl.level);
              
              // CÁLCULO DE LETRAS ÚNICAS (Set elimina duplicados)
              const uniqueCount = new Set(lvl.chars).size;

              return (
                <tr 
                  key={lvl.level}
                  onMouseEnter={() => setHoveredLevel(lvl)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className={isActive ? 'active-row' : ''}
                >
                  <td className="level-cell">NIVEL {lvl.level}</td>
                  
                  {/* Volumen Total */}
                  <td style={{color: '#aaa'}}>{lvl.chars.length}</td>
                  
                  {/* Diversidad (Únicas) */}
                  <td style={{color: '#4ecdc4', fontWeight:'bold'}}>{uniqueCount}</td>
                  
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