import React, { useState } from 'react';
import { KEYBOARD_LAYOUT, HEBREW_DATA } from '../data/constants';
import '../Styles/HebrewKeyboard.css';

const HebrewKeyboard = ({ onKeyPress, getActiveColor }) => {
  const [hoverKey, setHoverKey] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  const handlePress = (char) => {
    setActiveKey(char);
    onKeyPress(char);
    setTimeout(() => setActiveKey(null), 150);
  };

  const isColorDark = (c) => {
      if (!c) return false;
      return c.includes('0, 0, 0') || c.includes('10, 10, 10') || c.includes('50, 50, 50');
  };

  return (
    <div className="keyboard-wrapper">
      {KEYBOARD_LAYOUT.map((rowStr, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {rowStr.split('').map((char) => {
            const data = HEBREW_DATA[char] || {};
            const color = getActiveColor(char);
            const isActive = activeKey === char || hoverKey === char;
            const isDark = isColorDark(color);
            
            return (
              <button
                key={char}
                className={`hebrew-key ${isActive ? 'active' : ''} ${isDark ? 'dark-mode' : ''}`}
                style={{ '--key-color': color }}
                onMouseDown={() => handlePress(char)}
                onMouseEnter={() => setHoverKey(char)}
                onMouseLeave={() => setHoverKey(null)}
              >
                <span className="tiny-num">{data.val}</span>
                {char}
              </button>
            );
          })}
        </div>
      ))}
      
      <div className="keyboard-row">
        <button className="control-btn" onClick={() => onKeyPress(' ')}>ESPACIO</button>
        <button className="control-btn backspace" onClick={() => onKeyPress('BACKSPACE')}>BORRAR</button>
      </div>
    </div>
  );
};

export default HebrewKeyboard;