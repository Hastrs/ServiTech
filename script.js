
        document.addEventListener('DOMContentLoaded', function() {
            // Animation for sections
            const sections = document.querySelectorAll('section:not(.hero)');
            
            // Function to check if sections are visible
            function checkVisibility() {
                sections.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    // Consider a section visible when it's 75% in viewport
                    const isVisible = (rect.top <= window.innerHeight * 0.75);
                    
                    if (isVisible) {
                        section.classList.add('visible');
                    }
                });
            }
            
            // Check visibility on initial load
            checkVisibility();
            
            // Check visibility on scroll
            window.addEventListener('scroll', checkVisibility);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return; // Skip if href is just "#"
                    
                    const target = document.querySelector(targetId);
                    
                    if (target) {
                        // Scroll to target with offset for fixed header
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form submission handling
            const form = document.getElementById('serviceForm');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Basic form validation
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const service = document.getElementById('service').value;
                    
                    if (name === '' || email === '' || service === '') {
                        alert('Please fill in all required fields.');
                        return;
                    }
                    
                    // Email validation
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        alert('Please enter a valid email address.');
                        return;
                    }
                    
                    // Show success message
                    alert('Thank you for your request! Our team will contact you shortly.');
                    
                    // Reset the form
                    form.reset();
                });
            }
            
            // Mobile menu functionality for responsive design
            const signInButton = document.querySelector('.sign-in');
            if (signInButton) {
                signInButton.addEventListener('click', function() {
                    alert('Sign in functionality coming soon!');
                });
            }
            
            // Search icon functionality
            const searchIcon = document.querySelector('.search-icon');
            if (searchIcon) {
                searchIcon.addEventListener('click', function() {
                    alert('Search functionality coming soon!');
                });
            }
            
            // Add active class to nav links when scrolling
            const navLinks = document.querySelectorAll('.nav-links a');
            const navSections = document.querySelectorAll('section[id]');
            
            function highlightActiveLink() {
                const scrollPosition = window.scrollY + 100; // Offset for header
                
                navSections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
                
                // If at the top of the page, highlight home
                if (scrollPosition < 100) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#') {
                            link.classList.add('active');
                        }
                    });
                }
            }
            
            window.addEventListener('scroll', highlightActiveLink);
            
            // Initialize animations for hero section
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.querySelectorAll('.decorative-element').forEach(element => {
                    element.style.opacity = '1';
                });
            }
        });
    