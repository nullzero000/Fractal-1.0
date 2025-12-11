/* src/data/constants.js */

export const HEBREW_DATA = {
  'א': { 
    val: 1, name: 'Aleph', palettes: { gd: 'rgb(240, 248, 255)', ari: 'rgb(255, 255, 255)', ort: 'rgb(200, 200, 200)', akashic: 'rgb(173, 255, 47)' }, 
    energy: 'Paradoja.', torah: { word: 'אֱלֹהִים', phonetic: 'Elohim', cite: 'Gen 1:1', bio: 'Pecho / Pulmones' },
    sy_data: { type: 'MADRE (AIRE)', logic: 'Bloqueo Primario', diag: 'Bloqueo Respiratorio.', fix: 'Restaurar Flujo Vital.' },
    tikkun: { light: 'Unidad con el Creador (Paz).', shadow: 'Arrogancia (Yo Primero).' }
  },
  'ב': { 
    val: 2, name: 'Bet', palettes: { gd: 'rgb(255, 255, 240)', ari: 'rgb(255, 255, 255)', ort: 'rgb(200, 200, 200)', akashic: 'rgb(0, 0, 205)' }, 
    energy: 'La Casa.', torah: { word: 'בְּרֵאשִׁית', phonetic: 'Bereshit', cite: 'Gen 1:1', bio: 'Ojo Derecho' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Sabiduría vs. Locura.', fix: 'Traer Sabiduría.' },
    tikkun: { light: 'Bendición, Canalización de Luz.', shadow: 'Separación, Casa Sellada (Aislamiento).' }
  },
  'ג': { 
    val: 3, name: 'Gimel', palettes: { gd: 'rgb(255, 140, 0)', ari: 'rgb(220, 20, 60)', ort: 'rgb(255, 0, 0)', akashic: 'rgb(228, 0, 124)' },
    energy: 'Canal.', torah: { word: 'גַּן', phonetic: 'Gan', cite: 'Gen 2:8', bio: 'Oído Derecho' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Riqueza vs. Pobreza.', fix: 'Dar (Caridad).' },
    tikkun: { light: 'Generosidad, Nutrición.', shadow: 'Orgullo, Exceso de Juicio.' }
  },
  'ד': { 
    val: 4, name: 'Dalet', palettes: { gd: 'rgb(255, 215, 0)', ari: 'rgb(0, 128, 0)', ort: 'rgb(255, 165, 0)', akashic: 'rgb(149, 53, 83)' },
    energy: 'Contención.', torah: { word: 'דֶּשֶׁא', phonetic: 'Deshé', cite: 'Gen 1:11', bio: 'Fosa Nasal Derecha' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Semilla vs. Desolación.', fix: 'Cultivar.' },
    tikkun: { light: 'Humildad, Autoconciencia.', shadow: 'Mendicidad, Carencia Crónica.' }
  },
  'ה': { 
    val: 5, name: 'He', palettes: { gd: 'rgb(255, 69, 0)', ari: 'rgb(0, 0, 139)', ort: 'rgb(139, 0, 0)', akashic: 'rgb(135, 206, 235)' },
    energy: 'Aliento.', torah: { word: 'הַשָּׁמַיִם', phonetic: "Ha'Shamayim", cite: 'Gen 1:1', bio: 'Pie Derecho' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de Visión.', fix: 'Arquetipo: El Constituyente.' },
    tikkun: { light: 'Revelación de la Presencia.', shadow: 'Ceguera, Escape, Superficialidad.' }
  },
  'ו': { 
    val: 6, name: 'Vav', palettes: { gd: 'rgb(139, 69, 19)', ari: 'rgb(255, 255, 255)', ort: 'rgb(100, 50, 0)', akashic: 'rgb(220, 20, 60)' }, 
    energy: 'Conector.', torah: { word: 'וְאֵת', phonetic: "Ve'et", cite: 'Gen 1:1', bio: 'Riñón Derecho' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de Conexión.', fix: 'Arquetipo: El Conector.' },
    tikkun: { light: 'Conexión, Flujo, Puentes.', shadow: 'Distorsión, Vicio.' }
  },
  'ז': { 
    val: 7, name: 'Zayin', palettes: { gd: 'rgb(255, 255, 0)', ari: 'rgb(255, 140, 0)', ort: 'rgb(192, 192, 192)', akashic: 'rgb(65, 105, 225)' }, 
    energy: 'Espada.', torah: { word: 'זֶרַע', phonetic: 'Zera', cite: 'Gen 1:11', bio: 'Pie Izquierdo' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de Discriminación.', fix: 'Arquetipo: La Espada.' },
    tikkun: { light: 'Sustento (Paranassah), Orden.', shadow: 'Lucha Crónica, Conflicto.' }
  },
  'ח': { 
    val: 8, name: 'Chet', palettes: { gd: 'rgb(0, 191, 255)', ari: 'rgb(128, 0, 0)', ort: 'rgb(0, 0, 128)', akashic: 'rgb(255, 215, 0)' }, 
    energy: 'Vida.', torah: { word: 'חֹשֶׁךְ', phonetic: 'Choshech', cite: 'Gen 1:2', bio: 'Mano Derecha' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Límites débiles.', fix: 'Arquetipo: La Valla.' },
    tikkun: { light: 'Vida Plena, Elección de Luz.', shadow: 'Bloqueo, Muerte Espiritual.' }
  },
  'ט': { 
    val: 9, name: 'Tet', palettes: { gd: 'rgb(255, 165, 0)', ari: 'rgb(255, 255, 255)', ort: 'rgb(255, 215, 0)', akashic: 'rgb(200, 162, 200)' }, 
    energy: 'Bondad.', torah: { word: 'טוֹב', phonetic: 'Tov', cite: 'Gen 1:4', bio: 'Riñón Izquierdo' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Digestión emocional pobre.', fix: 'Arquetipo: La Serpiente.' },
    tikkun: { light: 'Bondad Oculta, Protección.', shadow: 'Trampa, Miedo a Revelar.' }
  },
  'י': { 
    val: 10, name: 'Yod', palettes: { gd: 'rgb(85, 107, 47)', ari: 'rgb(0, 0, 0)', ort: 'rgb(10, 10, 10)', akashic: 'rgb(255, 248, 220)' }, 
    energy: 'Punto.', torah: { word: 'יְהִי', phonetic: 'Yehí', cite: 'Gen 1:3', bio: 'Mano Izquierda' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de detalle.', fix: 'Arquetipo: La Mano.' },
    tikkun: { light: 'Plan Divino, Punto Inicial.', shadow: 'Autoengaño, Confusión.' }
  },
  'כ': { 
    val: 20, name: 'Kaf', palettes: { gd: 'rgb(0, 128, 0)', ari: 'rgb(0, 255, 0)', ort: 'rgb(139, 69, 19)', akashic: 'rgb(138, 43, 226)' }, 
    energy: 'Palma.', torah: { word: 'כִּי', phonetic: 'Ki', cite: 'Gen 1:4', bio: 'Ojo Izquierdo' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Vida vs. Muerte.', fix: 'Moldear la realidad.' },
    tikkun: { light: 'Corona de Luz, Disciplina.', shadow: 'Juicio Excesivo, Desorden.' }
  },
  'ל': { 
    val: 30, name: 'Lamed', palettes: { gd: 'rgb(173, 216, 230)', ari: 'rgb(255, 255, 0)', ort: 'rgb(200, 200, 255)', akashic: 'rgb(204, 119, 34)' }, 
    energy: 'Enseñanza.', torah: { word: 'לָיְלָה', phonetic: 'Layla', cite: 'Gen 1:5', bio: 'Vesícula Biliar' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Glitch Lógica->Sistema.', fix: 'Arquetipo: El Aguijón.' },
    tikkun: { light: 'Aprendizaje, Ascenso.', shadow: 'Confusión, Pérdida de Dirección.' }
  },
  'מ': { 
    val: 40, name: 'Mem', palettes: { gd: 'rgb(0, 0, 205)', ari: 'rgb(0, 0, 255)', ort: 'rgb(0, 100, 255)', akashic: 'rgb(0, 206, 209)' }, 
    energy: 'Matriz.', torah: { word: 'מְרַחֶפֶת', phonetic: 'Merajefet', cite: 'Gen 1:2', bio: 'Vientre (Agua)' },
    sy_data: { type: 'MADRE (AGUA)', logic: 'Bloqueo Primario', diag: 'Bloqueo Emocional.', fix: 'Fluidez Emocional.' },
    tikkun: { light: 'Purificación, Origen de Forma.', shadow: 'Estancamiento, Caos Emocional.' }
  },
  'נ': { 
    val: 50, name: 'Nun', palettes: { gd: 'rgb(0, 128, 128)', ari: 'rgb(0, 100, 0)', ort: 'rgb(47, 79, 79)', akashic: 'rgb(255, 182, 193)' }, 
    energy: 'Caída.', torah: { word: 'נֶפֶשׁ', phonetic: 'Nefesh', cite: 'Gen 1:20', bio: 'Intestinos' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Miedo a cambiar.', fix: 'Arquetipo: El Pez.' },
    tikkun: { light: 'Caída Necesaria, Reorganización.', shadow: 'Inercia, Desesperación.' }
  },
  'ס': { 
    val: 60, name: 'Samekh', palettes: { gd: 'rgb(250, 128, 114)', ari: 'rgb(255, 0, 255)', ort: 'rgb(255, 69, 0)', akashic: 'rgb(218, 112, 214)' }, 
    energy: 'Apoyo.', torah: { word: 'סֹבֵב', phonetic: 'Saviv', cite: 'Gen 2:11', bio: 'Estómago' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de soporte.', fix: 'Arquetipo: El Puntal.' },
    tikkun: { light: 'Soporte, Confianza Absoluta.', shadow: 'Esclavitud, Ciclo Cerrado.' }
  },
  'ע': { 
    val: 70, name: 'Ayin', palettes: { gd: 'rgb(47, 79, 79)', ari: 'rgb(75, 0, 130)', ort: 'rgb(0, 0, 0)', akashic: 'rgb(80, 200, 120)' }, 
    energy: 'Ojo.', torah: { word: 'עַל', phonetic: 'Al', cite: 'Gen 1:2', bio: 'Hígado' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Visión materialista.', fix: 'Arquetipo: El Ojo.' },
    tikkun: { light: 'Visión Espiritual, Perspectiva.', shadow: 'Ceguera, Envidia (Mal de Ojo).' }
  },
  'פ': { 
    val: 80, name: 'Pei', palettes: { gd: 'rgb(148, 0, 211)', ari: 'rgb(255, 255, 255)', ort: 'rgb(255, 0, 0)', akashic: 'rgb(255, 105, 180)' }, 
    energy: 'Boca.', torah: { word: 'פְּנֵי', phonetic: 'Pnei', cite: 'Gen 1:2', bio: 'Oído Izquierdo' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Dominio vs. Esclavitud.', fix: 'Hablar con Poder.' },
    tikkun: { light: 'Boca, Poder de la Palabra.', shadow: 'Silencio, Murmuración (Chisme).' }
  },
  'צ': { 
    val: 90, name: 'Tzadik', palettes: { gd: 'rgb(224, 255, 255)', ari: 'rgb(128, 0, 128)', ort: 'rgb(0, 255, 255)', akashic: 'rgb(144, 238, 144)' }, 
    energy: 'Justo.', torah: { word: 'צֶלֶם', phonetic: 'Tzelem', cite: 'Gen 1:27', bio: 'Esófago / Garganta' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Falta de rectitud.', fix: 'Arquetipo: El Anzuelo.' },
    tikkun: { light: 'Imagen Divina, Rectitud.', shadow: 'Doble Estándar, Hipocresía.' }
  },
  'ק': { 
    val: 100, name: 'Kof', palettes: { gd: 'rgb(70, 130, 180)', ari: 'rgb(220, 20, 60)', ort: 'rgb(100, 100, 100)', akashic: 'rgb(175, 238, 238)' }, 
    energy: 'Santidad.', torah: { word: 'קָרָא', phonetic: 'Kara', cite: 'Gen 1:5', bio: 'Bazo' },
    sy_data: { type: 'SIMPLE', logic: 'Diag. Fino', diag: 'Imitación/Falsedad.', fix: 'Arquetipo: El Mono.' },
    tikkun: { light: 'Santidad (Kadosh), Verdad.', shadow: 'Profano, Mente Inestable.' }
  },
  'ר': { 
    val: 200, name: 'Resh', palettes: { gd: 'rgb(105, 105, 105)', ari: 'rgb(255, 165, 0)', ort: 'rgb(139, 69, 19)', akashic: 'rgb(230, 230, 250)' }, 
    energy: 'Cabeza.', torah: { word: 'רוּחַ', phonetic: 'Ruach', cite: 'Gen 1:2', bio: 'Fosa Nasal Izquierda' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Paz vs. Guerra.', fix: 'Integración del Ego.' },
    tikkun: { light: 'Liderazgo, Prioridad Voluntad.', shadow: 'Ego, Pobreza Espiritual.' }
  },
  'ש': { 
    val: 300, name: 'Shin', palettes: { gd: 'rgb(220, 20, 60)', ari: 'rgb(255, 0, 0)', ort: 'rgb(255, 69, 0)', akashic: 'rgb(224, 255, 255)' }, 
    energy: 'Fuego.', torah: { word: 'שָׁמָיִם', phonetic: 'Shamayim', cite: 'Gen 1:8', bio: 'Cabeza (Fuego)' },
    sy_data: { type: 'MADRE (FUEGO)', logic: 'Bloqueo Primario', diag: 'Bloqueo Mental.', fix: 'Enfriamiento Lógico.' },
    tikkun: { light: 'Retorno (Teshuvá), Fuego.', shadow: 'Confusión, Dolor Innecesario.' }
  },
  'ת': { 
    val: 400, name: 'Tav', palettes: { gd: 'rgb(75, 0, 130)', ari: 'rgb(0, 0, 139)', ort: 'rgb(0, 0, 0)', akashic: 'rgb(255, 255, 224)' }, 
    energy: 'Sello.', torah: { word: 'תֹהוּ', phonetic: 'Tohu', cite: 'Gen 1:2', bio: 'Boca' },
    sy_data: { type: 'DOBLE', logic: 'Polaridad', diag: 'Gracia vs. Fealdad.', fix: 'Sello Final (Acción).' },
    tikkun: { light: 'El Sello, Verdad Absoluta.', shadow: 'Desesperanza, Final sin Apertura.' }
  }
};

export const MILUY_MAP = {
  'א': ['א', 'ל', 'ף'], 'ב': ['ב', 'י', 'ת'], 'ג': ['ג', 'מ', 'ל'], 'ד': ['ד', 'ל', 'ת'], 'ה': ['ה', 'ה'], 'ו': ['ו', 'א', 'ו'],
  'ז': ['ז', 'י', 'ן'], 'ח': ['ח', 'י', 'ת'], 'ט': ['ט', 'י', 'ת'], 'י': ['י', 'ו', 'ד'], 'כ': ['כ', 'ף'], 'ך': ['כ', 'ף'],
  'ל': ['ל', 'מ', 'ד'], 'מ': ['מ', 'ם'], 'ם': ['מ', 'ם'], 'נ': ['נ', 'ו', 'ן'], 'ן': ['נ', 'ו', 'ן'], 'ס': ['ס', 'מ', 'כ'],
  'ע': ['ע', 'י', 'ן'], 'פ': ['פ', 'א', 'י'], 'ף': ['פ', 'א', 'י'], 'צ': ['צ', 'ד', 'י'], 'ץ': ['צ', 'ד', 'י'], 'ק': ['ק', 'ו', 'ף'],
  'ר': ['ר', 'י', 'ש'], 'ש': ['ש', 'י', 'ן'], 'ת': ['ת', 'ו', 'י']
};
export const NORMALIZE_MAP = { 'ך': 'כ', 'ם': 'מ', 'ן': 'נ', 'ף': 'פ', 'ץ': 'צ' };
export const KEYBOARD_LAYOUT = [ "אבגדהוזחטי", "כלמנסעפצקר", "שת" ];

export const DEFAULT_COLOR_SYSTEM = 'ari';
export const DEFAULT_MILUY_SYSTEM = 'ari';

export const MILUY_SYSTEMS = {
    ort: MILUY_MAP,
    ari: MILUY_MAP,
    esot: MILUY_MAP
};