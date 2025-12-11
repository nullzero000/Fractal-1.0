import React, { useState } from 'react';
import '../Styles/AnalysisTable.css';

const AnalysisTable = ({ levels, activeLevel }) => {
  const [hoveredLevel, setHoveredLevel] = useState(null);

  if (!levels || levels.length === 0) return null;

  // Lógica para determinar qué datos mostrar en el resumen inferior
  const selectedLevelData = levels.find(l => l.level === activeLevel);
  const finalLevel = levels[levels.length - 1]; // Por defecto la Raíz
  const displayData = hoveredLevel || selectedLevelData || finalLevel;

  // FUNCIÓN HELPER: Mapeo de Nombres (Igual que TacticalReadout)
  const getLevelLabel = (index) => {
    if (index === 5) return "RAÍZ";
    return `NIVEL ${index + 1}`; // 0 -> NV 1, 1 -> NV 2, etc.
  };

  return (
    <div className="analysis-container">
      <h3 className="analysis-title">AXIS 13 (DIAGNÓSTICO CUANTITATIVO)</h3>
      
      <div className="table-wrapper">
        <table className="miluy-table">
          <thead>
            <tr>
              <th>NIVEL</th>
              <th>LETRAS (TOTAL)</th>
              <th>DISTINTAS</th> {/* Nueva Columna Solicitada */}
              <th>MASA (GEM)</th>
              <th>ESENCIA (1-9)</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((lvl) => {
              // Sincronización de resaltado
              const isActive = (hoveredLevel && hoveredLevel.level === lvl.level) || 
                               (!hoveredLevel && activeLevel === lvl.level);
              
              // CÁLCULO DE LETRAS DISTINTAS (Unique)
              // Creamos un Set con los caracteres para eliminar duplicados y contamos el tamaño
              const uniqueCount = new Set(lvl.chars).size;

              return (
                <tr 
                  key={lvl.level}
                  onMouseEnter={() => setHoveredLevel(lvl)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  className={isActive ? 'active-row' : ''}
                >
                  {/* 1. NIVEL (Mapeado a NV 1 - RAÍZ) */}
                  <td className="level-cell">{getLevelLabel(lvl.level)}</td>
                  
                  {/* 2. TOTAL DE LETRAS */}
                  <td style={{color: '#aaa'}}>{lvl.chars.length}</td>
                  
                  {/* 3. LETRAS DISTINTAS (Highlight) */}
                  <td className="diversity-cell">{uniqueCount}</td>
                  
                  {/* 4. GEMATRIA TOTAL */}
                  <td className="value-cell">{lvl.totalValue}</td>
                  
                  {/* 5. REDUCCIÓN */}
                  <td className="reduced-cell">{lvl.reducedValue}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* RESUMEN INFERIOR DINÁMICO */}
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