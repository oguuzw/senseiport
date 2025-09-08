

document.addEventListener('DOMContentLoaded', function() {
    // Slideshow
    const slides = [
        { src: 'images/slide1.jpg', label: 'Plakalık' },
        { src: 'images/slide2.jpg', label: 'Dekor Plaka' },
        { src: 'images/slide3.jpg', label: 'Anahtarlık' },
        { src: 'images/slide4.jpg', label: 'Ayna Süsü' },
        { src: 'images/slide5.jpg', label: 'Dekor Tabela' }
    ];

    let currentSlide = 0;
    const slideImg = document.getElementById('slide-img');
    const slideDots = document.getElementById('slide-dots');
    const prevBtn = document.getElementById('slide-prev');
    const nextBtn = document.getElementById('slide-next');
    let slideInterval;

    // Dot navigation rendering
    function renderDots() {
        if (!slideDots) return;
        slideDots.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'slideshow-dot' + (i === currentSlide ? ' active' : '');
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.borderRadius = '50%';
            dot.style.background = i === currentSlide ? '#ffcc00' : 'rgba(255,255,255,0.25)';
            dot.style.border = '1.5px solid #ffcc00';
            dot.style.display = 'inline-block';
            dot.style.cursor = 'pointer';
            dot.addEventListener('click', function() {
                stopSlideshow();
                showSlide(i);
                startSlideshow();
            });
            slideDots.appendChild(dot);
        }
    }

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentSlide = index;

        // Fade out effect
        slideImg.style.opacity = '0';

        renderDots();

        setTimeout(() => {
            slideImg.src = slides[currentSlide].src;
            slideImg.style.opacity = '1';
        }, 400);
    }

    // Initial render of dots
    renderDots();

    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Otomatik geçiş
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 3000);
    }
    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            stopSlideshow();
            prevSlide();
            startSlideshow();
        });
        nextBtn.addEventListener('click', function() {
            stopSlideshow();
            nextSlide();
            startSlideshow();
        });
    }

    showSlide(currentSlide);
    startSlideshow();

    // Navbar active link
    const navLinks = document.querySelectorAll('#nav-links a');
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentPage = currentPath.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        let linkHref = link.getAttribute('href');
        // Get only the last part (filename) of the href
        let linkPage = linkHref.split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function() {
            navLinks.classList.toggle("show");
        });
    }
    
    // Floating WhatsApp tooltip behavior for touch devices
    const waFloat = document.querySelector('.whatsapp-float');
    if (waFloat) {
        let tappedOnce = false;
        waFloat.addEventListener('click', function(e) {
            // On touch devices, show tooltip first, prevent immediate navigation
            if ('ontouchstart' in window) {
                if (!tappedOnce) {
                    e.preventDefault();
                    waFloat.classList.add('show-tooltip');
                    tappedOnce = true;
                    setTimeout(() => { tappedOnce = false; waFloat.classList.remove('show-tooltip'); }, 3000);
                } else {
                    // allow navigation on second tap
                }
            }
        });
    }
});