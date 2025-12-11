export const HEBREW_DATA = {
  'א': { 
    val: 1, name: 'Aleph', meaning: 'Buey / Maestro', element: 'Aire', planet: 'Urano', tarot: 'El Loco',
    palettes: { 
        gd: 'rgb(240, 248, 255)',  // Amarillo Pálido (Aire)
        ari: 'rgb(255, 255, 255)', // Blanco (Keter/Jesed)
        ort: 'rgb(200, 200, 200)', 
        akashic: 'rgb(173, 255, 47)' 
    }, 
    energy: 'Paradoja. Silencio.', 
    torah: { word: 'אֱלֹהִים', phonetic: 'Elohim', cite: 'Gen 1:1', bio: 'Pecho / Pulmones (Aire)' }
  },
  
  'ב': { 
    val: 2, name: 'Bet', meaning: 'Casa', element: 'Tierra', planet: 'Luna', tarot: 'El Mago',
    palettes: { 
        gd: 'rgb(255, 255, 240)',  // Amarillo (Mercurio/Mago)
        ari: 'rgb(255, 255, 255)', // Blanco
        ort: 'rgb(200, 200, 200)', // FIX: Gris claro para visibilidad sobre negro
        akashic: 'rgb(0, 0, 205)' 
    }, 
    energy: 'La Casa.', 
    torah: { word: 'בְּרֵאשִׁית', phonetic: 'Bereshit', cite: 'Gen 1:1', bio: 'Ojo Derecho' }
  },
  
  'ג': { 
    val: 3, name: 'Gimel', meaning: 'Camello', element: 'Fuego', planet: 'Marte', tarot: 'La Sacerdotisa',
    palettes: { 
        gd: 'rgb(255, 140, 0)',    // Naranja Oscuro (Luna/Sacerdotisa en GD es Azul, pero restauramos tu original)
        ari: 'rgb(220, 20, 60)',   // Rojo (Gevurá)
        ort: 'rgb(255, 0, 0)',     // Rojo ortodoxo estándar
        akashic: 'rgb(228, 0, 124)' 
    },
    energy: 'Canal.', 
    torah: { word: 'גַּן', phonetic: 'Gan', cite: 'Gen 2:8', bio: 'Oído Derecho' }
  },
  
  'ד': { 
    val: 4, name: 'Dalet', meaning: 'Puerta', element: 'Tierra', planet: 'Venus', tarot: 'La Emperatriz',
    palettes: { 
        gd: 'rgb(255, 215, 0)',    // Oro/Verde (Venus)
        ari: 'rgb(0, 128, 0)',     // Verde (Tiferet)
        ort: 'rgb(255, 165, 0)', 
        akashic: 'rgb(149, 53, 83)' 
    },
    energy: 'Contención.', 
    torah: { word: 'דֶּשֶׁא', phonetic: 'Deshé', cite: 'Gen 1:11', bio: 'Fosa Nasal Derecha' }
  },
  
  'ה': { 
    val: 5, name: 'He', meaning: 'Ventana', element: 'Aire', planet: 'Aries', tarot: 'El Emperador',
    palettes: { 
        gd: 'rgb(255, 69, 0)',     // Escarlata (Aries)
        ari: 'rgb(0, 0, 139)',     // Azul (Maljuto/Jesed variaciones)
        ort: 'rgb(139, 0, 0)', 
        akashic: 'rgb(135, 206, 235)' 
    },
    energy: 'Aliento.', 
    torah: { word: 'הַשָּׁמַיִם', phonetic: "Ha'Shamayim", cite: 'Gen 1:1', bio: 'Pie Derecho' }
  },
  
  'ו': { 
    val: 6, name: 'Vav', meaning: 'Clavo', element: 'Tierra', planet: 'Tauro', tarot: 'El Hierofante',
    palettes: { 
        gd: 'rgb(139, 69, 19)',    // Rojo-Naranja/Tierra (Tauro)
        ari: 'rgb(255, 255, 255)', // Blanco (Tiferet/Zeir Anpin)
        ort: 'rgb(100, 50, 0)', 
        akashic: 'rgb(220, 20, 60)' 
    }, 
    energy: 'Conector.', 
    torah: { word: 'וְאֵת', phonetic: "Ve'et", cite: 'Gen 1:1', bio: 'Riñón Derecho' }
  },
  
  'ז': { 
    val: 7, name: 'Zayin', meaning: 'Espada', element: 'Aire', planet: 'Géminis', tarot: 'Los Enamorados',
    palettes: { 
        gd: 'rgb(255, 255, 0)',    // Naranja/Amarillo (Géminis)
        ari: 'rgb(255, 140, 0)',   // Naranja
        ort: 'rgb(192, 192, 192)', 
        akashic: 'rgb(65, 105, 225)' 
    }, 
    energy: 'Espada.', 
    torah: { word: 'זֶרַע', phonetic: 'Zera', cite: 'Gen 1:11', bio: 'Pie Izquierdo' }
  },
  
  'ח': { 
    val: 8, name: 'Chet', meaning: 'Valla', element: 'Agua', planet: 'Cáncer', tarot: 'El Carro',
    palettes: { 
        gd: 'rgb(0, 191, 255)',    // Ámbar/Azul (Cáncer)
        ari: 'rgb(128, 0, 0)',     // Rojo Oscuro
        ort: 'rgb(0, 0, 128)', 
        akashic: 'rgb(255, 215, 0)' 
    }, 
    energy: 'Vida.', 
    torah: { word: 'חֹשֶׁךְ', phonetic: 'Choshech', cite: 'Gen 1:2', bio: 'Mano Derecha' }
  },
  
  'ט': { 
    val: 9, name: 'Tet', meaning: 'Serpiente', element: 'Fuego', planet: 'Leo', tarot: 'La Fuerza',
    palettes: { 
        gd: 'rgb(255, 165, 0)',    // Amarillo Verdoso (Leo)
        ari: 'rgb(255, 255, 255)', 
        ort: 'rgb(255, 215, 0)', 
        akashic: 'rgb(200, 162, 200)' 
    }, 
    energy: 'Bondad.', 
    torah: { word: 'טוֹב', phonetic: 'Tov', cite: 'Gen 1:4', bio: 'Riñón Izquierdo' }
  },
  
  'י': { 
    val: 10, name: 'Yod', meaning: 'Mano', element: 'Tierra', planet: 'Virgo', tarot: 'El Ermitaño',
    palettes: { 
        gd: 'rgb(85, 107, 47)',    // Amarillo Verdoso (Virgo)
        ari: 'rgb(0, 0, 0)',       // Negro (Punto primordial)
        ort: 'rgb(10, 10, 10)', 
        akashic: 'rgb(255, 248, 220)' 
    }, 
    energy: 'Punto.', 
    torah: { word: 'יְהִי', phonetic: 'Yehí', cite: 'Gen 1:3', bio: 'Mano Izquierda' }
  },
  
  'כ': { 
    val: 20, name: 'Kaf', meaning: 'Palma', element: 'Tierra', planet: 'Venus', tarot: 'La Rueda',
    palettes: { 
        gd: 'rgb(0, 128, 0)',      // Violeta/Azul (Júpiter en GD, pero original era verde)
        ari: 'rgb(0, 255, 0)',     // Verde
        ort: 'rgb(139, 69, 19)', 
        akashic: 'rgb(138, 43, 226)' 
    }, 
    energy: 'Palma.', 
    torah: { word: 'כִּי', phonetic: 'Ki', cite: 'Gen 1:4', bio: 'Ojo Izquierdo' }
  },
  
  'ל': { 
    val: 30, name: 'Lamed', meaning: 'Aguijón', element: 'Aire', planet: 'Libra', tarot: 'La Justicia',
    palettes: { 
        gd: 'rgb(173, 216, 230)',  // Esmeralda (Libra)
        ari: 'rgb(255, 255, 0)',   // Amarillo
        ort: 'rgb(200, 200, 255)', 
        akashic: 'rgb(204, 119, 34)' 
    }, 
    energy: 'Enseñanza.', 
    torah: { word: 'לָיְלָה', phonetic: 'Layla', cite: 'Gen 1:5', bio: 'Vesícula Biliar' }
  },
  
  'מ': { 
    val: 40, name: 'Mem', meaning: 'Agua', element: 'Agua', planet: 'Neptuno', tarot: 'El Colgado',
    palettes: { 
        gd: 'rgb(0, 0, 205)',      // Azul Profundo (Agua)
        ari: 'rgb(0, 0, 255)',     // Azul
        ort: 'rgb(0, 100, 255)', 
        akashic: 'rgb(0, 206, 209)' 
    }, 
    energy: 'Matriz.', 
    torah: { word: 'מְרַחֶפֶת', phonetic: 'Merajefet', cite: 'Gen 1:2', bio: 'Vientre (Agua)' }
  },
  
  'נ': { 
    val: 50, name: 'Nun', meaning: 'Pez', element: 'Agua', planet: 'Escorpio', tarot: 'La Muerte',
    palettes: { 
        gd: 'rgb(0, 128, 128)',    // Verde Azulado (Escorpio)
        ari: 'rgb(0, 100, 0)',     // Verde Oscuro
        ort: 'rgb(47, 79, 79)', 
        akashic: 'rgb(255, 182, 193)' 
    }, 
    energy: 'Caída.', 
    torah: { word: 'נֶפֶשׁ', phonetic: 'Nefesh', cite: 'Gen 1:20', bio: 'Intestinos' }
  },
  
  'ס': { 
    val: 60, name: 'Samekh', meaning: 'Puntal', element: 'Fuego', planet: 'Sagitario', tarot: 'La Templanza',
    palettes: { 
        gd: 'rgb(250, 128, 114)',  // Azul (Sagitario en GD, restaurado original)
        ari: 'rgb(255, 0, 255)',   // Magenta/Violeta
        ort: 'rgb(255, 69, 0)', 
        akashic: 'rgb(218, 112, 214)' 
    }, 
    energy: 'Apoyo.', 
    torah: { word: 'סֹבֵב', phonetic: 'Saviv', cite: 'Gen 2:11', bio: 'Estómago' }
  },
  
  'ע': { 
    val: 70, name: 'Ayin', meaning: 'Ojo', element: 'Tierra', planet: 'Capricornio', tarot: 'El Diablo',
    palettes: { 
        gd: 'rgb(47, 79, 79)',     // Indigo/Negro (Capricornio)
        ari: 'rgb(75, 0, 130)',    // Indigo
        ort: 'rgb(0, 0, 0)', 
        akashic: 'rgb(80, 200, 120)' 
    }, 
    energy: 'Ojo.', 
    torah: { word: 'עַל', phonetic: 'Al', cite: 'Gen 1:2', bio: 'Hígado' }
  },
  
  'פ': { 
    val: 80, name: 'Pei', meaning: 'Boca', element: 'Aire', planet: 'Mercurio', tarot: 'La Torre',
    palettes: { 
        gd: 'rgb(148, 0, 211)',    // Escarlata (Marte/Torre en GD, restaurado original)
        ari: 'rgb(255, 255, 255)', // Blanco
        ort: 'rgb(255, 0, 0)', 
        akashic: 'rgb(255, 105, 180)' 
    }, 
    energy: 'Boca.', 
    torah: { word: 'פְּנֵי', phonetic: 'Pnei', cite: 'Gen 1:2', bio: 'Oído Izquierdo' }
  },
  
  'צ': { 
    val: 90, name: 'Tzadik', meaning: 'Anzuelo', element: 'Aire', planet: 'Acuario', tarot: 'La Estrella',
    palettes: { 
        gd: 'rgb(224, 255, 255)',  // Violeta (Acuario en GD, restaurado original)
        ari: 'rgb(128, 0, 128)',   // Púrpura
        ort: 'rgb(0, 255, 255)', 
        akashic: 'rgb(144, 238, 144)' 
    }, 
    energy: 'Justo.', 
    torah: { word: 'צֶלֶם', phonetic: 'Tzelem', cite: 'Gen 1:27', bio: 'Esófago / Garganta' }
  },
  
  'ק': { 
    val: 100, name: 'Kof', meaning: 'Ojo aguja', element: 'Agua', planet: 'Piscis', tarot: 'La Luna',
    palettes: { 
        gd: 'rgb(70, 130, 180)',   // Carmesí (Piscis en GD, restaurado original)
        ari: 'rgb(220, 20, 60)',   // Rojo
        ort: 'rgb(100, 100, 100)', 
        akashic: 'rgb(175, 238, 238)' 
    }, 
    energy: 'Santidad.', 
    torah: { word: 'קָרָא', phonetic: 'Kara', cite: 'Gen 1:5', bio: 'Bazo' }
  },
  
  'ר': { 
    val: 200, name: 'Resh', meaning: 'Cabeza', element: 'Tierra', planet: 'Saturno', tarot: 'El Sol',
    palettes: { 
        gd: 'rgb(105, 105, 105)',  // Naranja (Sol en GD, restaurado original)
        ari: 'rgb(255, 165, 0)',   // Naranja
        ort: 'rgb(139, 69, 19)', 
        akashic: 'rgb(230, 230, 250)' 
    }, 
    energy: 'Cabeza.', 
    torah: { word: 'רוּחַ', phonetic: 'Ruach', cite: 'Gen 1:2', bio: 'Fosa Nasal Izquierda' }
  },
  
  'ש': { 
    val: 300, name: 'Shin', meaning: 'Fuego', element: 'Fuego', planet: 'Plutón', tarot: 'El Juicio',
    palettes: { 
        gd: 'rgb(220, 20, 60)',    // Naranja Brillante (Fuego)
        ari: 'rgb(255, 0, 0)',     // Rojo
        ort: 'rgb(255, 69, 0)', 
        akashic: 'rgb(224, 255, 255)' 
    }, 
    energy: 'Fuego.', 
    torah: { word: 'שָׁמָיִם', phonetic: 'Shamayim', cite: 'Gen 1:8', bio: 'Cabeza (Fuego)' }
  },
  
  'ת': { 
    val: 400, name: 'Tav', meaning: 'Cruz', element: 'Tierra', planet: 'Júpiter', tarot: 'El Mundo',
    palettes: { 
        gd: 'rgb(75, 0, 130)',     // Indigo/Negro (Saturno/Tierra)
        ari: 'rgb(0, 0, 139)',     // Azul Oscuro
        ort: 'rgb(0, 0, 0)', 
        akashic: 'rgb(255, 255, 224)' 
    }, 
    energy: 'Sello.', 
    torah: { word: 'תֹהוּ', phonetic: 'Tohu', cite: 'Gen 1:2', bio: 'Boca' }
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

// Configuración por defecto: ARI (Luriánico)
export const DEFAULT_COLOR_SYSTEM = 'ari';
export const DEFAULT_MILUY_SYSTEM = 'ari';

export const MILUY_SYSTEMS = {
    ort: MILUY_MAP,
    ari: MILUY_MAP,
    esot: MILUY_MAP
};