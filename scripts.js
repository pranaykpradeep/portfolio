// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox for project images
document.querySelectorAll('.project a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="your_project_image.jpg" alt="Project Image">
            </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.style.display = 'block';

        const closeBtn = lightbox.querySelector('.close');
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.removeChild(lightbox);
            }
        });
    });
});