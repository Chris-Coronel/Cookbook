<script>
    // Select all anchor links
    const links = document.querySelectorAll('nav ul li a');

    // Loop through each link and add event listener
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            
            // Get the target section to scroll to
            const targetSection = document.querySelector(this.getAttribute('href'));

            // Scroll to the target section smoothly
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
</script>
