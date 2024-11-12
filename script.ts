document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon') as HTMLElement;
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    const signInButton = document.querySelector('.sign-in') as HTMLElement;
    const signUpButton = document.querySelector('.sign-up-btn') as HTMLElement;

    
    const startButton = document.querySelector('#left-box a button') as HTMLButtonElement;

    const footerLogo = document.querySelector('.footer-logo-img') as HTMLImageElement;
    const footerSocialLinks = document.querySelectorAll('.footer-social a') as NodeListOf<HTMLAnchorElement>;
    const footerContact = document.querySelector('.footer-contact') as HTMLElement;


    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

  
    startButton.addEventListener('click', () => {
        window.location.href = 'resume.html';
    });

    
    footerSocialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Redirecting to: ${link.href}`);
        });
    });


    footerContact.innerHTML = `<p>Email: tara378581@gmail.com</p><p>Phone: +123 456 7890</p>`;
});
