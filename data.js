// data.js
const proyectosData = [
    {
        titulo: "Análisis de Inundaciones Octubre 2025, México",
        descripcion: "Análisis en Google Earth Engine (GEE) para mapear el impacto y apoyar la respuesta de emergencia en Veracruz.<br><br> Utilicé imágenes satelitales de Sentinel-1(radar SAR) para detectar áreas inundadas incluso bajo nubes densas, y Sentinel-2 para composites en color natural que revelan la extensión del daño. Además, generé una resta de imágenes pre y post-evento que destaca los cambios drásticos en la cobertura vegetal y las zonas urbanas afectadas.",
        imagen: "img/inundacion%202025%20huasteca.png",
        tecnologias: ["QGIS", "GEE", "Radar SAR"],
        linkRepo: null,
        linkDemo: "https://projectprometeoservices.users.earthengine.app/view/inundacionv1",
        linkVideo: "https://drive.google.com/file/d/1qEON24Z6DkXUJhnVWO9D4JPRcGlSSjeX/view?usp=sharing",
        destacado: true // TRUE = Aparece en el inicio, FALSE = Solo en "Ver más"
    },
    {
        titulo: "Afectaciones por Inundación en La Martinica, Zapopan",
        descripcion: "Mapa de peligro con Iber, proyectado en Google Earth, superponiendo los datos de las calles afectadas con la topografía del lugar y agregando imágenes y videos tomados durante y después de la inundación.<br><br> La intensidad de la precipitación superó los 70 mm/h, una cifra considerable, alcanzando un periodo de retorno de 250 años",
        imagen: "img/martinica.png",
        tecnologias: ["Iber", "Google Earth", "ArcGIS PRO"],
        linkRepo: null,
        linkDemo: "https://earth.google.com/earth/d/1ps0zXlVdTQJkjN13uT7UbBbqWbwc_5Wt?usp=sharing", // Si no hay demo, pon null
        linkVideo: "https://drive.google.com/file/d/1zHF2FPBCCAGN1HARK1lN6QdVa2dgdnBa/view?usp=sharing",
        destacado: true
    },
    {
        titulo: "Calidad del Aire por Ozono en el Área Metropolitana del Valle de México",
        descripcion: "El ozono troposférico en el AMVM representa un contaminante secundario de alta relevancia sanitaria, con patrones temporales y espaciales claramente influenciados por la radiación solar, las emisiones de NOx y la tipología de estación de monitoreo.<br><br> Realicé un análisis estadisticos de diferenctes estaciones de la zona metropolitana en Phyton", //"<strong>Zona crítica</strong><br>Alta probabilidad de deslizamientos# "
        imagen: "img/Ozono_cdmx_2024.png",
        tecnologias: ["Python", "Seaborn", "Numpy"],
        linkRepo: "https://github.com/jdan-crypto-ep/curso_modelab2025/tree/master/Proyect-curso",
        linkDemo: "Archivos/Project-ozono-esp.html",
        linkVideo: null,
        destacado: true // Este NO saldrá en el carrusel principal, pero sí en la página nueva
    },
    // ... Agrega aquí todos los proyectos que quieras ...
];