import React from 'react';
import '../Styles/AnalysisTable.css';

const AnalysisTable = ({ levels }) => {
  if (!levels || levels.length === 0) return null;

  const finalLevel = levels[levels.length - 1];

  return (
    <div className="analysis-container">
      <h3 className="analysis-title">DIAGNÓSTICO FRACTAL (CUANTITATIVO)</h3>
      
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
            {levels.map((lvl) => (
              <tr key={lvl.level}>
                <td className="level-cell">NIVEL {lvl.level}</td>
                <td style={{color: '#666'}}>{lvl.chars.length}</td>
                <td className="value-cell">{lvl.totalValue}</td>
                <td className="reduced-cell">{lvl.reducedValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="summary-box">
        <span>VIBRACIÓN DEL EJE:</span>
        <span className="final-number">{finalLevel.reducedValue}</span>
      </div>
    </div>
  );
};

export default AnalysisTable;