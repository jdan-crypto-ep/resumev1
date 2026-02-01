let currentSlide = 0;
// MODIFICACIÓN: Ya no fijamos el número en 3. Lo dejamos en 0 y lo calculamos abajo.
let totalSlides = 0;

// Crear fondo espacial dinámico
function createSpaceBackground() {
    const spaceBg = document.getElementById('spaceBg');

    // Crear estrellas
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        spaceBg.appendChild(star);
    }

    // Crear planetas con efecto 3D mate
    const planets = [
        { size: 80, baseColor: '255, 107, 107', x: '10%', y: '20%' },
        { size: 60, baseColor: '78, 205, 196', x: '85%', y: '70%' },
        { size: 100, baseColor: '162, 155, 254', x: '75%', y: '15%' }
    ];

    planets.forEach(planetData => {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.width = planetData.size + 'px';
        planet.style.height = planetData.size + 'px';

        // Gradiente radial para efecto 3D mate
        planet.style.background = `radial-gradient(circle at 35% 35%, 
            rgba(${planetData.baseColor}, 0.5), 
            rgba(${planetData.baseColor}, 0.35) 40%, 
            rgba(${planetData.baseColor}, 0.2) 70%, 
            rgba(${planetData.baseColor}, 0.1))`;

        planet.style.left = planetData.x;
        planet.style.top = planetData.y;
        planet.style.boxShadow = `
            0 0 ${planetData.size * 0.8}px rgba(${planetData.baseColor}, 0.2),
            inset -${planetData.size * 0.2}px -${planetData.size * 0.2}px ${planetData.size * 0.3}px rgba(0, 0, 0, 0.3)`;
        spaceBg.appendChild(planet);
    });

    // Crear nebulosas
    const nebulas = [
        { size: 300, color: 'rgba(99, 102, 241, 0.15)', x: '20%', y: '40%' },
        { size: 400, color: 'rgba(139, 92, 246, 0.1)', x: '60%', y: '60%' },
        { size: 250, color: 'rgba(236, 72, 153, 0.1)', x: '40%', y: '80%' }
    ];

    nebulas.forEach(nebulaData => {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        nebula.style.width = nebulaData.size + 'px';
        nebula.style.height = nebulaData.size + 'px';
        nebula.style.background = nebulaData.color;
        nebula.style.left = nebulaData.x;
        nebula.style.top = nebulaData.y;
        spaceBg.appendChild(nebula);
    });

    // Crear redes neuronales para tema claro
    createNeuralNetworks(spaceBg);
}

// Crear redes neuronales dinámicas
function createNeuralNetworks(container) {
    // Crear múltiples redes más distribuidas
    const networkConfigs = [
        { x: '75%', y: '15%', scale: 1, rotation: 15 },
        { x: '85%', y: '45%', scale: 0.8, rotation: -10 },
        { x: '70%', y: '75%', scale: 0.9, rotation: 20 },
        { x: '20%', y: '25%', scale: 0.7, rotation: -15 },
        { x: '10%', y: '60%', scale: 0.85, rotation: 10 }
    ];

    networkConfigs.forEach((config, netIndex) => {
        const network = document.createElement('div');
        network.className = 'neural-network';

        // Crear nodos en capas (estructura más orgánica)
        const layers = [3, 5, 4, 3];
        const nodes = [];

        layers.forEach((layerSize, layerIndex) => {
            const layerX = layerIndex * 120;
            const spacing = 45;
            const offset = (layerSize - 1) * spacing / 2;

            for (let i = 0; i < layerSize; i++) {
                const node = document.createElement('div');
                node.className = 'neural-node';

                // Algunos nodos más grandes para variedad
                if (Math.random() > 0.7) {
                    node.classList.add('large');
                }

                const nodeY = i * spacing - offset + (Math.random() - 0.5) * 15;
                node.style.left = layerX + (Math.random() - 0.5) * 10 + 'px';
                node.style.top = nodeY + 'px';
                node.style.animationDelay = (layerIndex * 0.4 + i * 0.15 + netIndex * 0.3) + 's';
                network.appendChild(node);

                nodes.push({ x: layerX, y: nodeY, layer: layerIndex, element: node });
            }
        });

        // Crear conexiones entre nodos (todas las combinaciones posibles)
        for (let i = 0; i < nodes.length; i++) {
            const currentNode = nodes[i];

            for (let j = 0; j < nodes.length; j++) {
                const nextNode = nodes[j];

                // Conectar con nodos de la siguiente capa
                if (nextNode.layer === currentNode.layer + 1) {
                    const connection = document.createElement('div');
                    connection.className = 'neural-connection';

                    const dx = nextNode.x - currentNode.x;
                    const dy = nextNode.y - currentNode.y;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                    connection.style.width = length + 'px';
                    connection.style.left = currentNode.x + 'px';
                    connection.style.top = currentNode.y + 'px';
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.animationDelay = (i * 0.1 + netIndex * 0.2) + 's';

                    network.appendChild(connection);
                }
            }
        }

        // Crear formas geométricas triangulares alrededor
        for (let t = 0; t < 3; t++) {
            const triangle = document.createElement('div');
            triangle.className = 'geometric-shape triangle-mesh';
            const size = 30 + Math.random() * 40;
            triangle.style.borderWidth = `0 ${size / 2}px ${size * 1.5}px ${size / 2}px`;
            triangle.style.borderColor = `transparent transparent rgba(147, 197, 253, 0.15) transparent`;
            triangle.style.left = (Math.random() * 400 - 50) + 'px';
            triangle.style.top = (Math.random() * 300 - 50) + 'px';
            triangle.style.animationDelay = (t * 0.5 + netIndex * 0.3) + 's';
            triangle.style.animationDuration = (12 + Math.random() * 8) + 's';
            network.appendChild(triangle);
        }

        network.style.position = 'absolute';
        network.style.left = config.x;
        network.style.top = config.y;
        network.style.transform = `scale(${config.scale}) rotate(${config.rotation}deg)`;

        container.appendChild(network);
    });
}

// Carrusel
function moveCarousel(direction) {
    // Si no hay slides, no hacemos nada
    if (totalSlides === 0) return;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;

    updateCarousel();
}

function updateCarousel() {
    const wrapper = document.getElementById('carouselWrapper');
    if (!wrapper) return;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Actualizar botones (con protección por si no existen en el HTML)
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;

    // Actualizar indicadores
    updateIndicators();
}

function createIndicators() {
    const container = document.getElementById('indicators');
    if (!container) return;

    container.innerHTML = ''; // Limpiamos indicadores viejos por si acaso

    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.onclick = () => {
            currentSlide = i;
            updateCarousel();
        };
        container.appendChild(indicator);
    }
}

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((ind, idx) => {
        if (idx === currentSlide) {
            ind.classList.add('active');
        } else {
            ind.classList.remove('active');
        }
    });
}

// Toggle tema
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.getElementById('themeIcon');

    if (document.body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Animación de scroll con efecto de desvanecido
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Pequeño delay para el efecto de desvanecido
            setTimeout(() => {
                entry.target.classList.add('active');
            }, 100);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '-50px'
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Inicialización
function init() {
    createSpaceBackground();

    // MODIFICACIÓN IMPORTANTE: Contamos las slides DESPUÉS de que se hayan generado
    const slides = document.querySelectorAll('.carousel-slide');
    totalSlides = slides.length;

    if (totalSlides > 0) {
        createIndicators();
        updateCarousel();
    }

    // Activar la primera sección visible
    const firstSection = document.querySelector('section');
    if (firstSection) firstSection.classList.add('active');
}

// Ejecutar cuando todo esté cargado
document.addEventListener('DOMContentLoaded', init);
// Por si acaso el script corre después del DOMContentLoaded (común al usar 'defer' o ponerlo al final)
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
}