import React, { useState } from 'react';
import '../Styles/AnalysisTable.css';

// Recibimos getActiveColor
const AnalysisTable = ({ levels, activeLevel, getActiveColor }) => {
  const [hoveredLevel, setHoveredLevel] = useState(null);
  const [expandedLevel, setExpandedLevel] = useState(null);

  if (!levels || levels.length === 0) return null;

  const selectedLevelData = levels.find(l => l.level === activeLevel);
  const finalLevel = levels[levels.length - 1]; 
  const displayData = hoveredLevel || selectedLevelData || finalLevel;

  const getLevelLabel = (index) => {
    if (index === 5) return "RAÍZ";
    return `NIVEL ${index + 1}`;
  };

  const getFrequencyMap = (chars) => {
    const map = {};
    chars.forEach(char => {
      map[char] = (map[char] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };

  const toggleRow = (lvlIndex) => {
    if (expandedLevel === lvlIndex) {
      setExpandedLevel(null); 
    } else {
      setExpandedLevel(lvlIndex); 
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
                  <tr 
                    onMouseEnter={() => setHoveredLevel(lvl)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    onClick={() => toggleRow(lvl.level)} 
                    className={`${isActive ? 'active-row' : ''} ${isExpanded ? 'expanded-row' : ''} clickable-row`}
                  >
                    <td className="level-cell">
                        <span className="expand-icon">{isExpanded ? '▼' : '►'}</span> 
                        {getLevelLabel(lvl.level)}
                    </td>
                    <td style={{color: '#aaa'}}>{lvl.chars.length}</td>
                    <td className="diversity-cell">{uniqueCount}</td>
                    <td className="value-cell">{lvl.totalValue}</td>
                    <td className="reduced-cell">{lvl.reducedValue}</td>
                  </tr>

                  {isExpanded && (
                    <tr className="detail-row">
                      <td colSpan="5">
                        <div className="frequency-panel">
                          <div className="freq-header">DESGLOSE DE FRECUENCIA (DOMINANCIA):</div>
                          <div className="freq-grid">
                            {frequencies.map(([char, count]) => {
                              // COLORIZACIÓN DINÁMICA DE LA LETRA
                              const charColor = getActiveColor ? getActiveColor(char) : '#fff';
                              
                              return (
                                <div key={char} className="freq-chip">
                                  <span 
                                    className="freq-char" 
                                    style={{ 
                                        color: charColor,
                                        textShadow: `0 0 5px ${charColor}`
                                    }}
                                  >
                                    {char}
                                  </span>
                                  <span className="freq-count">x{count}</span>
                                </div>
                              );
                            })}
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
        <span>VIBRACIÓN ACTIVA ({getLevelLabel(displayData.level)}):</span>
        <span className="final-number">{displayData.reducedValue}</span>
      </div>
    </div>
  );
};

export default AnalysisTable;