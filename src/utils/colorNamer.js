const PALETTE = [
  { name: 'Negro', rgb: [0, 0, 0] },
  { name: 'Blanco', rgb: [255, 255, 255] },
  { name: 'Rojo', rgb: [255, 0, 0] },
  { name: 'Lima', rgb: [0, 255, 0] },
  { name: 'Azul', rgb: [0, 0, 255] },
  { name: 'Amarillo', rgb: [255, 255, 0] },
  { name: 'Cian', rgb: [0, 255, 255] },
  { name: 'Magenta', rgb: [255, 0, 255] },
  { name: 'Plata', rgb: [192, 192, 192] },
  { name: 'Gris', rgb: [128, 128, 128] },
  { name: 'Granate', rgb: [128, 0, 0] },
  { name: 'Oliva', rgb: [128, 128, 0] },
  { name: 'Verde', rgb: [0, 128, 0] },
  { name: 'Púrpura', rgb: [128, 0, 128] },
  { name: 'Verde Azulado', rgb: [0, 128, 128] },
  { name: 'Azul Marino', rgb: [0, 0, 128] },
  { name: 'Naranja', rgb: [255, 165, 0] },
  { name: 'Oro', rgb: [255, 215, 0] },
  { name: 'Indigo', rgb: [75, 0, 130] },
  { name: 'Violeta', rgb: [238, 130, 238] }
];

export const getSemanticsFromRGB = (r, g, b) => {
  let minDistance = Infinity;
  let colorName = 'Desconocido';

  PALETTE.forEach(color => {
    const d = Math.sqrt(
      Math.pow(r - color.rgb[0], 2) +
      Math.pow(g - color.rgb[1], 2) +
      Math.pow(b - color.rgb[2], 2)
    );

    if (d < minDistance) {
      minDistance = d;
      colorName = color.name;
    }
  });

  return colorName;
};