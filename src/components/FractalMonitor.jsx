import React from 'react';
import { analyzeFrequencyAndColor, parseRGB } from '../utils/spectralEngine';
import { getSemanticsFromRGB } from '../utils/colorNamer'; // Asegúrate de importar esto
import '../Styles/FractalMonitor.css';

const FractalMonitor = ({ levels, colorSystem }) => {
  if (!levels) return null;

  return (
    <details className="monitor-details">
      <summary className="monitor-summary">[+] EXPEDIENTE TÉCNICO & DATA VECTORIAL</summary>
      <div className="monitor-content">
        
        {/* Cabecera */}
        <div className="monitor-row header">
            <div className="col-level">LVL</div>
            <div>SECUENCIA</div>
            <div className="col-rgb">VECTOR RGB</div>
            <div className="col-math">GEM</div>
        </div>

        {levels.map((lvl) => {
          const analysis = analyzeFrequencyAndColor(lvl.chars, colorSystem);
          const rgbString = analysis ? analysis.mixedColor : 'rgb(0,0,0)';
          
          // Extraemos los números para obtener el nombre semántico
          const [r, g, b] = parseRGB(rgbString);
          const colorName = getSemanticsFromRGB(r, g, b);

          return (
            <div key={lvl.level} className="monitor-row">
               <span className="col-level">{lvl.level}</span>
               
               <span className="col-chars">
                 {lvl.chars.join(' ')}
               </span>
               
               <div className="col-rgb" style={{ color: '#ccc' }}> {/* FIX: Color forzado para legibilidad */}
                 <div className="rgb-flex-wrapper">
                    <span className="rgb-preview" style={{ backgroundColor: rgbString }}></span>
                    {/* FIX: Mostrar nombre + RGB */}
                    <span>{colorName} <span style={{opacity: 0.5, fontSize: '0.6rem'}}>({r},{g},{b})</span></span>
                 </div>
               </div>
               
               {/* FIX: Color forzado para números */}
               <span className="col-math" style={{ color: '#fff' }}>
                  {lvl.reducedValue} <span style={{opacity: 0.5, fontSize: '0.6rem'}}>({lvl.totalValue})</span>
               </span>
            </div>
          );
        })}
      </div>
    </details>
  );
};

export default FractalMonitor;