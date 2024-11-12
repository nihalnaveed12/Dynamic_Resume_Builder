document.addEventListener('DOMContentLoaded', function () {
    // Navbar Elements
    var mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    var navLinks = document.querySelector('.nav-links');
    var signInButton = document.querySelector('.sign-in');
    var signUpButton = document.querySelector('.sign-up-btn');
    // Parent Box Elements
    var startButton = document.querySelector('#left-box a button');
    // Footer Elements
    var footerLogo = document.querySelector('.footer-logo-img');
    var footerSocialLinks = document.querySelectorAll('.footer-social a');
    var footerContact = document.querySelector('.footer-contact');
    // Mobile Menu Toggle
    mobileMenuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
    // Start Button Click Event
    startButton.addEventListener('click', function () {
        window.location.href = 'resume.html'; // Redirect to the resume creation page
    });
    // Footer Social Links Event
    footerSocialLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior for testing or logging
            console.log("Redirecting to: ".concat(link.href));
        });
    });
    // Footer Contact Info
    footerContact.innerHTML = "<p>Email: tara378581@gmail.com</p><p>Phone: +123 456 7890</p>";
});
