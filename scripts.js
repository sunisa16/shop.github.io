// JavaScript for Call to Action Button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest!');
});

// JavaScript for Navigation Menu Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});