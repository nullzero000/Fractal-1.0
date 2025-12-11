import React, { useMemo } from 'react';
import { PATHS_OF_WISDOM } from '../data/pathsOfWisdom';
import '../Styles/PathMonitor.css';

const PathMonitor = ({ inputString }) => {
  
  const activePaths = useMemo(() => {
    if (!inputString) return [];
    
    // Obtenemos letras únicas
    const uniqueChars = [...new Set(inputString.split(''))];
    
    // Filtramos los 'edges'
    const edges = PATHS_OF_WISDOM.paths_of_wisdom.filter(item => 
      item.type === 'edge' && uniqueChars.includes(item.hebrew_char)
    );

    // Enriquecemos con los nodos completos
    return edges.map(edge => {
      const source = PATHS_OF_WISDOM.paths_of_wisdom.find(n => n.id === edge.source_node_id);
      const target = PATHS_OF_WISDOM.paths_of_wisdom.find(n => n.id === edge.target_node_id);
      return { ...edge, source, target };
    });

  }, [inputString]);

  if (!inputString) return null;

  return (
    <div className="path-container">
      <div className="path-title">
        <span>⚡</span> ARQUITECTURA DE EJE (SENDEROS ACTIVOS)
      </div>

      {activePaths.length === 0 ? (
        <div className="empty-state">
          NO SE DETECTAN SENDEROS MAYORES EN LA SECUENCIA ACTUAL.
        </div>
      ) : (
        <div className="path-grid">
          {activePaths.map((path) => (
            <div key={path.id} className="path-card">
              
              {/* CABECERA */}
              <div className="card-header">
                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    {/* CAMBIO: Muestra el ID del sendero explícitamente */}
                    <span className="path-id-tag">SENDERO {path.id}</span>
                    <span style={{color:'#f1c40f', fontSize:'0.9rem', fontWeight:'bold'}}>
                        {path.letter.toUpperCase()}
                    </span>
                </div>
                <span className="hebrew-large">{path.hebrew_char}</span>
              </div>

              {/* VISUALIZACIÓN SEFIRÓTICA (MEJORADA) */}
              <div className="sefirot-visual">
                  
                  {/* Origen */}
                  <div className="sefira-node">
                      <div className="orb source" title={path.source?.name_app}></div>
                      <span className="node-name">{path.source?.name_he}</span>
                      <span className="node-desc">{path.source?.name_app}</span>
                  </div>

                  {/* Flecha de flujo */}
                  <div className="flow-arrow">►</div>

                  {/* Destino */}
                  <div className="sefira-node">
                      <div className="orb target" title={path.target?.name_app}></div>
                      <span className="node-name">{path.target?.name_he}</span>
                      <span className="node-desc">{path.target?.name_app}</span>
                  </div>

              </div>

              {/* FUNCIÓN */}
              <div className="function-box">
                <span className="function-label">FUNCIÓN DE REPARACIÓN (TOOL):</span>
                <span className="function-text">{path.app_function}</span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PathMonitor;