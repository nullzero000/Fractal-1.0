import React, { useState } from 'react';
import '../Styles/AnalysisTable.css';

const AnalysisTable = ({ levels, activeLevel }) => {
  const [hoveredLevel, setHoveredLevel] = useState(null);
  // Nuevo estado para controlar qué fila está expandida (Drill-down)
  const [expandedLevel, setExpandedLevel] = useState(null);

  if (!levels || levels.length === 0) return null;

  const selectedLevelData = levels.find(l => l.level === activeLevel);
  const finalLevel = levels[levels.length - 1]; 
  const displayData = hoveredLevel || selectedLevelData || finalLevel;

  const getLevelLabel = (index) => {
    if (index === 5) return "RAÍZ";
    return `NIVEL ${index + 1}`;
  };

  // HELPER: Calcular Frecuencia de Letras para el nivel
  const getFrequencyMap = (chars) => {
    const map = {};
    chars.forEach(char => {
      map[char] = (map[char] || 0) + 1;
    });
    // Convertir a array y ordenar por cantidad (descendente)
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };

  // Handler para expandir/colapsar
  const toggleRow = (lvlIndex) => {
    if (expandedLevel === lvlIndex) {
      setExpandedLevel(null); // Colapsar si ya está abierto
    } else {
      setExpandedLevel(lvlIndex); // Expandir nuevo
    }
  };

  return (
    <div className="analysis-container">
      <h3 className="analysis-title">AXIS 13 (DIAGNÓSTICO CUANTITATIVO)</h3>
      
      <div className="table-wrapper">
        <table className="miluy-table">
          <thead>
            <tr>
              <th>NIVEL</th>
              <th>VOLUMEN</th> 
              <th>DIVERSIDAD</th> 
              <th>MASA (GEM)</th>
              <th>ESENCIA (1-9)</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((lvl) => {
              const isActive = (hoveredLevel && hoveredLevel.level === lvl.level) || 
                               (!hoveredLevel && activeLevel === lvl.level);
              
              const uniqueCount = new Set(lvl.chars).size;
              const isExpanded = expandedLevel === lvl.level;
              const frequencies = isExpanded ? getFrequencyMap(lvl.chars) : [];

              return (
                <React.Fragment key={lvl.level}>
                  {/* FILA PRINCIPAL */}
                  <tr 
                    onMouseEnter={() => setHoveredLevel(lvl)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    onClick={() => toggleRow(lvl.level)} // Click para expandir
                    className={`${isActive ? 'active-row' : ''} ${isExpanded ? 'expanded-row' : ''} clickable-row`}
                  >
                    <td className="level-cell">
                        {/* Indicador de expansión */}
                        <span className="expand-icon">{isExpanded ? '▼' : '►'}</span> 
                        {getLevelLabel(lvl.level)}
                    </td>
                    <td style={{color: '#aaa'}}>{lvl.chars.length}</td>
                    <td className="diversity-cell">{uniqueCount}</td>
                    <td className="value-cell">{lvl.totalValue}</td>
                    <td className="reduced-cell">{lvl.reducedValue}</td>
                  </tr>

                  {/* FILA DE DETALLE (EXPANDIBLE) */}
                  {isExpanded && (
                    <tr className="detail-row">
                      <td colSpan="5">
                        <div className="frequency-panel">
                          <div className="freq-header">DESGLOSE DE FRECUENCIA (DOMINANCIA):</div>
                          <div className="freq-grid">
                            {frequencies.map(([char, count]) => (
                              <div key={char} className="freq-chip">
                                <span className="freq-char">{char}</span>
                                <span className="freq-count">x{count}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-box">
        <span>
            VIBRACIÓN ACTIVA ({getLevelLabel(displayData.level)}):
        </span>
        <span className="final-number">
            {displayData.reducedValue}
        </span>
      </div>
    </div>
  );
};

export default AnalysisTable;