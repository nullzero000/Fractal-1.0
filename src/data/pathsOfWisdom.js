export const PATHS_OF_WISDOM = {
  "paths_of_wisdom": [
    // --- NODOS (SEFIROT) CON COLORES ACTUALIZADOS ---
    {
      "id": 1, "type": "node", "name_he": "Keter", "name_app": "Voluntad Raíz",
      "body_part": "Cráneo / Aura", "backend_function": "Input Inicial.",
      "color": "#F0F0F0", "ui_role": "Texto Primario"
    },
    {
      "id": 2, "type": "node", "name_he": "Jojmá", "name_app": "Visión",
      "body_part": "Hemisferio Der.", "backend_function": "Inspiración.",
      "color": "#4C4C4C", "ui_role": "Fondo Tarjeta"
    },
    {
      "id": 3, "type": "node", "name_he": "Biná", "name_app": "Procesador",
      "body_part": "Hemisferio Izq.", "backend_function": "Estructura.",
      "color": "#111111", "ui_role": "Fondo Oscuro"
    },
    {
      "id": 4, "type": "node", "name_he": "Jésed", "name_app": "Expansión",
      "body_part": "Brazo Derecho", "backend_function": "Flujo Positivo.",
      "color": "#2A52BE", "ui_role": "Indicador Positivo"
    },
    {
      "id": 5, "type": "node", "name_he": "Gevurá", "name_app": "Restricción",
      "body_part": "Brazo Izquierdo", "backend_function": "Flujo Negativo.",
      "color": "#A30000", "ui_role": "Indicador Resistencia"
    },
    {
      "id": 6, "type": "node", "name_he": "Tiféret", "name_app": "Coherencia",
      "body_part": "Torso / Corazón", "backend_function": "Balance Core.",
      "color": "#8A2BE2", "ui_role": "Métrica Central"
    },
    {
      "id": 7, "type": "node", "name_he": "Nétzaj", "name_app": "Persistencia",
      "body_part": "Pierna Der.", "backend_function": "Motor Activo.",
      "color": "#008080", "ui_role": "Botón Acción"
    },
    {
      "id": 8, "type": "node", "name_he": "Hod", "name_app": "Empatía",
      "body_part": "Pierna Izq.", "backend_function": "Motor Pasivo.",
      "color": "#CC5500", "ui_role": "Indicador Sistema"
    },
    {
      "id": 9, "type": "node", "name_he": "Yesod", "name_app": "Conexión",
      "body_part": "Reproductivos", "backend_function": "Interfaz.",
      "color": "#B8860B", "ui_role": "Filtro"
    },
    {
      "id": 10, "type": "node", "name_he": "Maljut", "name_app": "Manifestación",
      "body_part": "Cuerpo", "backend_function": "Output Final.",
      "color": "#000080", "ui_role": "Fondo General"
    },

    // --- SENDEROS (EDGES) ---
    // (Mantén los mismos edges del 11 al 32 que ya tenías, no cambian en estructura)
    { "id": 11, "type": "edge", "letter": "Aleph", "hebrew_char": "א", "class": "Madre", "source_node_id": 4, "target_node_id": 5, "app_function": "Equilibrio Respiratorio." },
    { "id": 12, "type": "edge", "letter": "Bet", "hebrew_char": "ב", "class": "Doble", "source_node_id": 2, "target_node_id": 4, "app_function": "Bajar Visión." },
    { "id": 13, "type": "edge", "letter": "Gimel", "hebrew_char": "ג", "class": "Doble", "source_node_id": 3, "target_node_id": 5, "app_function": "Bajar Análisis." },
    { "id": 14, "type": "edge", "letter": "Dalet", "hebrew_char": "ד", "class": "Doble", "source_node_id": 4, "target_node_id": 7, "app_function": "Extender Bondad." },
    { "id": 15, "type": "edge", "letter": "He", "hebrew_char": "ה", "class": "Simple", "source_node_id": 1, "target_node_id": 2, "app_function": "Inyección de Voluntad." },
    { "id": 16, "type": "edge", "letter": "Vav", "hebrew_char": "ו", "class": "Simple", "source_node_id": 1, "target_node_id": 3, "app_function": "Inyección de Lógica." },
    { "id": 17, "type": "edge", "letter": "Zayin", "hebrew_char": "ז", "class": "Simple", "source_node_id": 1, "target_node_id": 6, "app_function": "Canal Directo." },
    { "id": 18, "type": "edge", "letter": "Chet", "hebrew_char": "ח", "class": "Simple", "source_node_id": 2, "target_node_id": 6, "app_function": "Intuición Emocional." },
    { "id": 19, "type": "edge", "letter": "Tet", "hebrew_char": "ט", "class": "Simple", "source_node_id": 3, "target_node_id": 6, "app_function": "Inteligencia Emocional." },
    { "id": 20, "type": "edge", "letter": "Yod", "hebrew_char": "י", "class": "Simple", "source_node_id": 2, "target_node_id": 7, "app_function": "Táctica." },
    { "id": 21, "type": "edge", "letter": "Kaf", "hebrew_char": "כ", "class": "Doble", "source_node_id": 5, "target_node_id": 8, "app_function": "Dar Forma." },
    { "id": 22, "type": "edge", "letter": "Lamed", "hebrew_char": "ל", "class": "Simple", "source_node_id": 3, "target_node_id": 8, "app_function": "Sistematización." },
    { "id": 23, "type": "edge", "letter": "Mem", "hebrew_char": "מ", "class": "Madre", "source_node_id": 7, "target_node_id": 8, "app_function": "Equilibrio Instintivo." },
    { "id": 24, "type": "edge", "letter": "Nun", "hebrew_char": "נ", "class": "Simple", "source_node_id": 4, "target_node_id": 6, "app_function": "Caída." },
    { "id": 25, "type": "edge", "letter": "Samekh", "hebrew_char": "ס", "class": "Simple", "source_node_id": 5, "target_node_id": 6, "app_function": "Soporte." },
    { "id": 26, "type": "edge", "letter": "Ayin", "hebrew_char": "ע", "class": "Simple", "source_node_id": 6, "target_node_id": 7, "app_function": "Impulso." },
    { "id": 27, "type": "edge", "letter": "Pe", "hebrew_char": "פ", "class": "Doble", "source_node_id": 7, "target_node_id": 9, "app_function": "Comunicación Activa." },
    { "id": 28, "type": "edge", "letter": "Tzade", "hebrew_char": "צ", "class": "Simple", "source_node_id": 6, "target_node_id": 8, "app_function": "Reflexión." },
    { "id": 29, "type": "edge", "letter": "Qof", "hebrew_char": "ק", "class": "Simple", "source_node_id": 6, "target_node_id": 9, "app_function": "Identidad." },
    { "id": 30, "type": "edge", "letter": "Resh", "hebrew_char": "ר", "class": "Doble", "source_node_id": 8, "target_node_id": 9, "app_function": "Integración." },
    { "id": 31, "type": "edge", "letter": "Shin", "hebrew_char": "ש", "class": "Madre", "source_node_id": 2, "target_node_id": 3, "app_function": "Procesamiento Mental." },
    { "id": 32, "type": "edge", "letter": "Tav", "hebrew_char": "ת", "class": "Doble", "source_node_id": 9, "target_node_id": 10, "app_function": "Sello Final." }
  ]
};