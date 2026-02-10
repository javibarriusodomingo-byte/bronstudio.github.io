// ===================================
// Parallax Effect on Mouse Move
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainers = document.querySelectorAll('.parallax-container');
    
    parallaxContainers.forEach(container => {
        const layer = container.querySelector('.parallax-layer');
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 2;
            const yPercent = (y / rect.height - 0.5) * 2;
            
            const moveX = xPercent * 15;
            const moveY = yPercent * 15;
            
            layer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        });
        
        container.addEventListener('mouseleave', () => {
            layer.style.transform = 'translate(0, 0) scale(1.1)';
        });
    });
});

// ===================================
// Scroll-based Parallax Effect
// ===================================
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    parallaxLayers.forEach((layer, index) => {
        const container = layer.closest('.split-screen');
        if (!container) return;
        
        const rect = container.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const speed = 0.3;
            const yPos = -(rect.top * speed);
            
            if (!layer.style.transform.includes('translate')) {
                layer.style.transform = `translateY(${yPos}px) scale(1.1)`;
            }
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// ===================================
// Intersection Observer for Fade-in
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    observer.observe(project);
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Subtle Floating Animation
// ===================================
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) scale(1.1);
        }
        50% {
            transform: translateY(-8px) scale(1.1);
        }
    }
`;
document.head.appendChild(style);

function addFloatingAnimation() {
    const images = document.querySelectorAll('.parallax-layer');
    
    images.forEach((img, index) => {
        const animationDelay = index * 0.5;
        const animationDuration = 12 + (index % 3) * 2;
        
        img.style.animation = `float ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
    });
}

addFloatingAnimation();

// ===================================
// Performance: Debounce Resize
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        updateParallax();
    }, 250);
});

// ===================================
// Lazy Loading
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('.parallax-layer').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Console
// ===================================
console.log('%cBrøn Studio', 'font-size: 18px; font-weight: 300;');
console.log('%cCircular and Cultural Architecture', 'font-size: 12px; font-weight: 300;');
