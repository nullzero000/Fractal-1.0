import { HEBREW_DATA, MILUY_MAP, NORMALIZE_MAP } from '../data/constants';

// Suma digital (Teosófica): 15 -> 1+5 = 6
export const digitalSum = (num) => {
  if (!num || isNaN(num)) return 0;
  return String(num).split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
};

// Reducción recursiva a un solo dígito
export const reduceToSingleDigit = (num) => {
  let c = num;
  while (c >= 10) {
    c = digitalSum(c);
  }
  return c;
};

export const calculateMiluyLevels = (inputString, maxLevel = 5) => {
  if (!inputString) return [];

  const levels = [];
  // Filtramos espacios vacíos para que no rompan el array inicial
  let currentChars = inputString.split('').filter(c => c !== ' ');

  for (let i = 0; i <= maxLevel; i++) {
    let levelSum = 0;
    
    // Suma del nivel actual
    currentChars.forEach(char => {
      // Normalizamos letras finales (Sofit)
      const n = NORMALIZE_MAP[char] || char;
      const data = HEBREW_DATA[n];
      
      // SOLO sumamos si la letra existe en la base de datos
      if (data) {
        levelSum += data.val;
      }
    });

    levels.push({
      level: i,
      chars: currentChars, // Guardamos los caracteres de este nivel
      totalValue: levelSum,
      reducedValue: reduceToSingleDigit(levelSum)
    });

    // Si no es el último nivel, preparamos la expansión (Miluy) para el siguiente
    if (i < maxLevel) {
      const nextChars = [];
      currentChars.forEach(char => {
        // Buscamos la expansión. Si no tiene (ej. es un espacio raro), se queda igual.
        const expansion = MILUY_MAP[char] || [char];
        nextChars.push(...expansion);
      });
      currentChars = nextChars;
    }
  }

  return levels;
};