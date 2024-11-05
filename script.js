// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Link Highlighting on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');
    
    if (!name.value || !email.value || !message.value) {
        alert("Please fill out all fields.");
    } else {
        alert("Message sent! Thank you.");
        contactForm.reset();
    }
});

// Scroll-to-Top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = '↑';
scrollTopButton.id = 'scrollTopButton';
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
