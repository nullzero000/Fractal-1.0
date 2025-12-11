import React, { useMemo } from 'react';
import { PATHS_OF_WISDOM } from '../data/pathsOfWisdom';
import { HEBREW_DATA } from '../data/constants'; 
import '../Styles/PathMonitor.css';

const PathMonitor = ({ inputString, getActiveColor }) => {
  
  const activePaths = useMemo(() => {
    if (!inputString) return [];
    
    const uniqueChars = [...new Set(inputString.split(''))];
    
    const edges = PATHS_OF_WISDOM.paths_of_wisdom.filter(item => 
      item.type === 'edge' && uniqueChars.includes(item.hebrew_char)
    );

    return edges.map(edge => {
      const source = PATHS_OF_WISDOM.paths_of_wisdom.find(n => n.id === edge.source_node_id);
      const target = PATHS_OF_WISDOM.paths_of_wisdom.find(n => n.id === edge.target_node_id);
      const hebrewData = HEBREW_DATA[edge.hebrew_char];
      
      return { 
          ...edge, 
          source, 
          target, 
          syInfo: hebrewData?.sy_data,
          tikkun: hebrewData?.tikkun 
      };
    });

  }, [inputString]);

  if (!inputString) return null;

  return (
    <div className="path-container">
      <div className="path-main-header">
        ARQUITECTURA DE EJE (SENDEROS ACTIVOS)
      </div>

      {activePaths.length === 0 ? (
        <div className="empty-state">
          // SISTEMA EN ESPERA: SIN SENDEROS ACTIVOS
        </div>
      ) : (
        <div className="path-grid">
          {activePaths.map((path) => {
            const pathColor = getActiveColor(path.hebrew_char);
            const isDark = pathColor.includes('0, 0, 0') || pathColor.includes('10, 10, 10');
            const displayColor = isDark ? '#ffffff' : pathColor;

            return (
              <div 
                key={path.id} 
                className="path-card"
                // INYECCIÓN MAESTRA DEL COLOR: Todo el CSS hijo usa esto
                style={{ '--path-color': displayColor }}
              >
                
                {/* 1. CABECERA */}
                <div className="path-header-strip">
                  <div className="path-id-block">
                      {/* CSS se encarga del color con var(--path-color) */}
                      <span className="path-label">SENDERO {path.id}</span>
                      <span className="path-letter-name">{path.letter.toUpperCase()}</span>
                  </div>
                  <div className="hebrew-glyph" style={{ textShadow: `0 0 15px ${displayColor}` }}>
                    {path.hebrew_char}
                  </div>
                </div>

                <div className="path-body">
                  
                  {/* 2. DIAGRAMA DE FLUJO SEFIRÓTICO */}
                  <div className="sefirot-diagram">
                      <div className="node-wrapper">
                          <div 
                            className="orb" 
                            style={{ background: path.source?.color, boxShadow: `0 0 15px ${path.source?.color}44` }}
                          ></div>
                          <span className="node-title">{path.source?.name_he}</span>
                          <span className="node-sub">{path.source?.name_app}</span>
                      </div>
                      
                      <div className="flow-line"></div>
                      
                      <div className="node-wrapper">
                          <div 
                            className="orb" 
                            style={{ background: path.target?.color, boxShadow: `0 0 15px ${path.target?.color}44` }}
                          ></div>
                          <span className="node-title">{path.target?.name_he}</span>
                          <span className="node-sub">{path.target?.name_app}</span>
                      </div>
                  </div>

                  {/* 3. TABLA DE DIAGNÓSTICO (Centrada en CSS) */}
                  {path.tikkun && (
                      <div className="diagnostic-grid">
                          <div className="diag-cell">
                              <div className="diag-header shadow">SOMBRA (EGO)</div>
                              <div className="diag-content">
                                  {path.tikkun.shadow}
                              </div>
                          </div>
                          <div className="diag-cell">
                              <div className="diag-header light">LUZ (RECTIFICACIÓN)</div>
                              <div className="diag-content">
                                  {path.tikkun.light}
                              </div>
                          </div>
                      </div>
                  )}

                  {/* 4. TOOL / FUNCIÓN */}
                  <div className="tool-box">
                      <span className="tool-label">TOOL:</span>
                      <span>{path.app_function}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PathMonitor;