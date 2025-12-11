// --- UTILIDAD: CONVERSIÓN RGB a HSL/HSV (Para análisis perceptivo) ---
const rgbToHsv = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;

    let d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // Convertir h, s a grados y porcentajes
    return {
        h: h * 360, 
        s: s * 100,
        v: v * 100 
    };
};

// --- PALETA (Se mantiene la lista de nombres con sus RGB, pero se usa para búsqueda) ---
const PALETTE = [
    // La paleta definida previamente...
    { name: 'Negro', rgb: [0, 0, 0] },
    { name: 'Blanco', rgb: [255, 255, 255] },
    { name: 'Gris Oscuro', rgb: [105, 105, 105] },
    { name: 'Gris Neutro', rgb: [160, 160, 160] },
    { name: 'Plata', rgb: [192, 192, 192] },
    
    { name: 'Verde Olivo Oscuro', rgb: [85, 107, 47] },
    { name: 'Verde', rgb: [0, 128, 0] },
    { name: 'Oliva Suave', rgb: [150, 130, 90] },
    { name: 'Caqui', rgb: [189, 183, 107] },
    { name: 'Lima', rgb: [0, 255, 0] },
    { name: 'Verde Azulado', rgb: [0, 128, 128] },

    { name: 'Marrón Oscuro', rgb: [139, 69, 19] },
    { name: 'Ocre', rgb: [204, 119, 34] },
    { name: 'Beige', rgb: [245, 245, 220] },
    { name: 'Melocotón Pálido', rgb: [255, 229, 180] },
    { name: 'Siena', rgb: [174, 94, 75] },

    { name: 'Rojo', rgb: [255, 0, 0] },
    { name: 'Granate', rgb: [128, 0, 0] },
    { name: 'Salmón', rgb: [250, 128, 114] },
    { name: 'Rosa Suave', rgb: [255, 105, 180] },
    { name: 'Malva Pálido', rgb: [200, 162, 200] },

    { name: 'Naranja', rgb: [255, 165, 0] },
    { name: 'Oro', rgb: [255, 215, 0] },
    { name: 'Amarillo', rgb: [255, 255, 0] },
    
    { name: 'Cian', rgb: [0, 255, 255] },
    { name: 'Azul', rgb: [0, 0, 255] },
    { name: 'Azul Marino', rgb: [0, 0, 128] },
    { name: 'Acero', rgb: [70, 130, 180] },
    { name: 'Magenta', rgb: [255, 0, 255] },
    { name: 'Violeta', rgb: [128, 0, 128] },
    { name: 'Índigo', rgb: [75, 0, 130] }
];

// --- FUNCIÓN PRINCIPAL DE CLASIFICACIÓN PERCEPTIVA ---
export const getSemanticsFromRGB = (r, g, b) => {
    // 1. Convertir a HSV para evaluar la percepción
    const hsv = rgbToHsv(r, g, b);
    const H = hsv.h;
    const S = hsv.s;
    const V = hsv.v; // Luminosidad

    // 2. FILTROS PERCEPTIVOS (Jerarquía de decisión)
    
    // Si la Luminosidad es muy baja (cerca del negro) o muy alta (cerca del blanco)
    if (V < 10) return 'Negro Puro';
    if (V > 95 && S < 5) return 'Blanco Puro';
    
    // Si la Saturación es muy baja (cerca del eje central HSL), es un tono de Gris.
    // Esto resuelve el problema de Oliva/Marrón que se acercaba al Gris simple.
    if (S < 20) {
        if (V < 40) return 'Gris Muy Oscuro';
        if (V < 70) return 'Gris Neutro';
        return 'Gris Claro';
    }

    // 3. CLASIFICACIÓN POR HUE (Matiz) para tonos saturados
    
    let minDistance = Infinity;
    let colorName = 'Desconocido';

    // Usaremos una fórmula de distancia que pondera más el HUE (matiz) y la V (luminosidad)
    PALETTE.forEach(color => {
        const [r2, g2, b2] = color.rgb;
        const hsv2 = rgbToHsv(r2, g2, b2);
        
        // Ponderar la distancia:
        // dH: Distancia en el círculo de matices (circular)
        // dS: Distancia de Saturación
        // dV: Distancia de Luminosidad
        const dH = Math.min(Math.abs(H - hsv2.h), 360 - Math.abs(H - hsv2.h)) / 180;
        const dS = Math.abs(S - hsv2.s) / 100;
        const dV = Math.abs(V - hsv2.v) / 100;
        
        // Fórmula de distancia ponderada (por ejemplo, 40% H, 30% S, 30% V)
        const distance = (dH * 0.4) + (dS * 0.3) + (dV * 0.3);

        if (distance < minDistance) {
            minDistance = distance;
            colorName = color.name;
        }
    });

    return colorName;
};