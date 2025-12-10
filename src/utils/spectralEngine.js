import { HEBREW_DATA, NORMALIZE_MAP } from '../data/constants';

// FIX: Agregamos 'export' para que FractalMonitor pueda usarla
export const parseRGB = (rgbStr) => {
  if (!rgbStr) return [0, 0, 0];
  const matches = rgbStr.match(/\d+/g);
  return matches ? matches.map(Number) : [0, 0, 0];
};

export const analyzeFrequencyAndColor = (charsArray, system = 'gd') => {
  if (!charsArray || !Array.isArray(charsArray) || charsArray.length === 0) return null;

  const freq = {};
  let totalLetters = 0;

  // 1. Frecuencia
  charsArray.forEach(c => {
    if (c === ' ' || !c) return;
    const n = NORMALIZE_MAP[c] || c;
    if (HEBREW_DATA[n]) {
      freq[n] = (freq[n] || 0) + 1;
      totalLetters++;
    }
  });

  if (totalLetters === 0) return null;

  // 2. Dominante
  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  const domChar = sorted[0];
  const domData = HEBREW_DATA[domChar];

  // 3. Mezcla Cromática
  let sR = 0, sG = 0, sB = 0;

  Object.keys(freq).forEach(charKey => {
    const data = HEBREW_DATA[charKey];
    if (data && data.palettes) {
      // Fallback a 'gd' si el sistema pedido no existe
      const colorStr = data.palettes[system] || data.palettes['gd'];
      const [r, g, b] = parseRGB(colorStr);
      
      const weight = freq[charKey] / totalLetters;
      sR += r * weight;
      sG += g * weight;
      sB += b * weight;
    }
  });

  const finalR = Math.round(sR);
  const finalG = Math.round(sG);
  const finalB = Math.round(sB);

  return {
    dominant: domChar,
    dominantData: domData || { name: 'Desconocido', energy: '---' },
    frequencyMap: freq,
    mixedColor: `rgb(${finalR},${finalG},${finalB})`,
    semanticColor: 'Calculando...' 
  };
};