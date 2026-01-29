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
// CONTACT FORM
// ===========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values (NO EMAIL)
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const plotsize = document.getElementById('plotsize').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const plotSizeText = plotsize === 'small' ? 'Small Plot (1000-1200 Sq.Ft.)' :
                        plotsize === 'medium' ? 'Medium Plot (1500-1800 Sq.Ft.)' :
                        plotsize === 'large' ? 'Large Plot (2000+ Sq.Ft.)' :
                        'Any Available';
    
    const whatsappMessage = `Hi! I'm interested in JD Green City.

Name: ${name}
Phone: ${phone}
Interested in: ${plotSizeText}
${message ? `Message: ${message}` : ''}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918887791232?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert(`Thank you, ${name}! We're redirecting you to WhatsApp to confirm your enquiry.`);
    
    // Reset form
    contactForm.reset();

    
});
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
document.querySelectorAll('.plot-card, .feature-box, .gallery-item').forEach(el => {
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
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// FORM INPUT ENHANCEMENTS
// ===========================

// Add placeholder attribute for label animation to work
const formInputs = document.querySelectorAll('.form-group input:not([type="tel"]), .form-group textarea');
formInputs.forEach(input => {
    input.setAttribute('placeholder', ' ');
});

// Phone number validation
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    // Remove non-numeric characters
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    
    // Limit to 10 digits
    if (e.target.value.length > 10) {
        e.target.value = e.target.value.slice(0, 10);
    }
});

// ===========================
// QUICK CALL TO ACTION TRACKING
// ===========================

// Track call button clicks (can be used for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Call button clicked:', link.href);
        // You can add Google Analytics or other tracking here
    });
});

// Track WhatsApp button clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp button clicked:', link.href);
        // You can add Google Analytics or other tracking here
    });
});

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('JD Green City website loaded successfully! 🏡');
});

// ===========================
// PRINT VISITOR LOCATION INFO
// ===========================

// Get visitor's approximate location (requires HTTPS in production)
if ("geolocation" in navigator) {
    // This is just for demo - in production, you might use this
    // to show distance from the plot or nearest landmark
    console.log('Geolocation available');
}