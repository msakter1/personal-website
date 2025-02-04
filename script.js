document.addEventListener('DOMContentLoaded', () => {
    // Section Navigation
    const sections = document.querySelectorAll('.section');
    const navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.getElementById(button.dataset.section);
            
            // Toggle active class
            sections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
            
            // Update button styles
            navButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '';
                btn.style.color = '';
            });
            button.classList.add('active');
            button.style.background = 'var(--neon-purple)';
            button.style.color = 'var(--white)';
        });
    });

    // Set initial active state for home button
    document.querySelector('[data-section="home"]').classList.add('active');

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach(icon => {
        icon.style.animation = `float ${3 + Math.random() * 2}s infinite ease-in-out`;
        icon.style.left = `${Math.random() * 90}%`;
        icon.style.top = `${Math.random() * 90}%`;
    });

    // Read More Functionality
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const reviewContent = button.closest('.review-content');
            const shortText = reviewContent.querySelector('.short-text');
            const fullText = reviewContent.querySelector('.full-text');
            
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                shortText.style.display = 'none';
                button.textContent = 'Show Less';
                button.classList.add('expanded');
            } else {
                fullText.style.display = 'none';
                shortText.style.display = '-webkit-box';
                button.textContent = 'Read More';
                button.classList.remove('expanded');
            }
        });
    });

});

