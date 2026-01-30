// ===========================
// NAVIGATION
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===========================
// SMOOTH SCROLL
// ===========================

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

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.plot-card, .feature-box, .benefit-card, .gallery-item, .contact-method-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// CONTACT FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            plotSize: document.getElementById('plotSize').value,
            message: document.getElementById('message').value
        };
        
        // Create mailto link with form data
        const subject = encodeURIComponent('Inquiry about Jaydi Green City Plot');
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Interested Plot Size: ${formData.plotSize || 'Not specified'}\n\n` +
            `Message:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:jaydiinfrarealtors@gmail.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Opening your email client... If it doesn\'t open automatically, please email us at jaydiinfrarealtors@gmail.com');
        
        // Reset form
        contactForm.reset();
    });
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('Jaydi Green City website loaded successfully! 🏡');
    console.log('Contact: jaydiinfrarealtors@gmail.com');
});

// ===========================
// EMAIL FLOAT BUTTON ANIMATION
// ===========================

const emailFloat = document.querySelector('.email-float');

if (emailFloat) {
    // Add click tracking
    emailFloat.addEventListener('click', () => {
        console.log('Email button clicked');
    });
}

// ===========================
// FORM VALIDATION ENHANCEMENTS
// ===========================

// Add real-time validation feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#EF4444';
        } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            this.style.borderColor = '#EF4444';
        } else {
            this.style.borderColor = '#10B981';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0D9488';
    });
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================
// PRINT WEBSITE INFO
// ===========================

console.log('%cJaydi Green City', 'font-size: 24px; font-weight: bold; color: #0D9488;');
console.log('%cBy JAYDI INFRA REALTORS PVT LTD', 'font-size: 14px; color: #10B981;');
console.log('%cBuilding Dreams. Brick By Brick', 'font-size: 12px; font-style: italic; color: #6B7280;');
console.log('\n📧 Email: jaydiinfrarealtors@gmail.com');
console.log('🌐 Website: www.jaydiinfra.com');
console.log('📍 Location: K2, Yash Park City, Safedabad, Lucknow, UP 225003');
