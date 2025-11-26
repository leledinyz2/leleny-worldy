// ============================================
// TEMA CLARO/ESCURO (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('themeToggle');

// Verificar tema salvo ou usar padrão escuro
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌞';
}

// Toggle do tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '🌞' : '🌙';
});

// ============================================
// MENU RESPONSIVO (Mobile Menu)
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============================================
// ANIMAÇÃO DE SCROLL REVEAL
// ============================================
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Se o elemento está visível na tela
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

// Executar ao fazer scroll
window.addEventListener('scroll', revealOnScroll);
// Executar ao carregar a página
revealOnScroll();

// ============================================
// SCROLL SUAVE (Smooth Scroll)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFEITO NA NAVBAR AO FAZER SCROLL
// ============================================
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Adicionar sombra quando scroll > 100px
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// EFEITO DE HOVER NOS CARDS
// ============================================
const cards = document.querySelectorAll('.character-card, .city-card, .world-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// CONTADOR DE VISITAS (Opcional)
// ============================================
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    console.log(`Você visitou ${visitCount} vezes!`);
}

updateVisitCount();

// ============================================
// ADICIONAR CLASSE AO CARREGAR
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
