// ============================================
// TEMA CLARO/ESCURO (Dark/Light Mode)
// ============================================
const themeToggle = document.getElementById('themeToggle');

// Verificar tema salvo ou usar padrão escuro
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '🌞';
}

// Toggle do tema ao clicar no botão
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '🌞' : '🌙';
    });
}

// ============================================
// MENU RESPONSIVO (Mobile Menu)
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

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
// INTERATIVIDADE DOS CARDS DE PERSONAGEM
// ============================================
const characterDetails = document.querySelectorAll('.character-detail');

characterDetails.forEach((detail, index) => {
    detail.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
        this.style.borderColor = '#623496';
    });
    
    detail.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.borderColor = '#4a3a6b';
    });
});

// ============================================
// EXPANDIR/COLAPSAR SEÇÕES (Opcional)
// ============================================
const powersHeaders = document.querySelectorAll('.powers-section h3');

powersHeaders.forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', function() {
        const section = this.parentElement;
        const items = section.querySelectorAll('.power-item');
        
        items.forEach(item => {
            if (item.style.display === 'none') {
                item.style.display = 'block';
                item.style.animation = 'slideDown 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ============================================
// EFEITO DE CLIQUE NOS PODERES
// ============================================
const powerItems = document.querySelectorAll('.power-item');

powerItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        this.style.backgroundColor = 'rgba(98, 52, 150, 0.2)';
        this.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            this.style.backgroundColor = 'rgba(98, 52, 150, 0.1)';
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

// ============================================
// COPIAR INFORMAÇÕES (Opcional)
// ============================================
const relationItems = document.querySelectorAll('.relation-item');

relationItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
        const text = this.innerText;
        navigator.clipboard.writeText(text);
        
        // Mostrar feedback
        const originalBg = this.style.backgroundColor;
        this.style.backgroundColor = 'rgba(225, 171, 26, 0.3)';
        
        setTimeout(() => {
            this.style.backgroundColor = originalBg;
        }, 500);
    });
});

// ============================================
// ADICIONAR ANIMAÇÃO CSS DINAMICAMENTE
// ============================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CONTADOR DE VISITAS
// ============================================
function updateVisitCount() {
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    console.log(`Você visitou ${visitCount} vezes!`);
}

updateVisitCount();

// ============================================
// LOG DE ATIVIDADE
// ============================================
console.log('✨ Bem-vindo ao Mundo de Leleny!');
console.log('Personagens carregados com sucesso!');
