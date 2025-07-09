// Configuración de animaciones y funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    
    // Animación de aparición de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a elementos
    const animatedElements = document.querySelectorAll('.feature-card, .progress-item, .contact-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Navegación suave
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navegación activa basada en scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Animación de elementos flotantes
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 1;
        element.style.animationDuration = `${6 / speed}s`;
    });

    // Efecto parallax en elementos flotantes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 1;
            const yPos = -(scrolled * speed * 0.5);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Animación de contadores en las estadísticas
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                if (finalValue === '100%') {
                    animateCounter(target, 0, 100, 2000);
                } else if (finalValue === '24/7') {
                    target.style.opacity = '1';
                } else if (finalValue === '∞') {
                    target.style.opacity = '1';
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        stat.style.opacity = '0';
        statsObserver.observe(stat);
    });

    // Función para animar contadores
    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current + '%';
            element.style.opacity = '1';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Efecto de hover en las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animación de las barras de progreso
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.style.width;
                fill.style.width = '0';
                
                setTimeout(() => {
                    fill.style.width = width;
                }, 500);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Efecto de escritura en el título principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Efecto de partículas de fondo (simulado con CSS)
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Crear partículas de fondo
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'background-particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(99, 102, 241, 0.3);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
            `;
            heroSection.appendChild(particle);
        }
    }

    // Smooth scroll para el botón de "En Desarrollo"
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        // Agregar cursor pointer
        heroBadge.style.cursor = 'pointer';
    }

    // Efecto de carga inicial
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Consola de bienvenida
    console.log(`
    🚀 Viamind Blog - Tecnología, IA y Tiempos Modernos
    
    ¡Bienvenido al futuro del blogging tecnológico!
    
    Estamos construyendo algo increíble aquí.
    Mantente atento para más actualizaciones.
    
    - El equipo de Viamind
    `);
});

// Función para manejar el modo oscuro/claro (futuro)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// Función para mostrar notificaciones (futuro)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        color: var(--light-text);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid var(--border-color);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
} 