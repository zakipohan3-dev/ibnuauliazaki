// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi Tombol Kembali ke Atas
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Efek Loading pada Tombol Kirim Pesan
const submitBtn = document.querySelector('.btn-submit');
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;

    // Simulasi pengiriman
    setTimeout(() => {
        submitBtn.textContent = 'Terkirim!';
        contactForm.reset();
        setTimeout(() => {
            submitBtn.textContent = 'Kirim Pesan';
            submitBtn.disabled = false;
        }, 2000);
    }, 1500);
});