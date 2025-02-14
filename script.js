document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".library-image");
    
    function adjustImageSize() {
        images.forEach(img => {
            if (window.innerWidth < 600) {
                img.style.width = "90%";
            } else {
                img.style.width = "100%";
            }
        });
    }

    adjustImageSize();
    window.addEventListener("resize", adjustImageSize);
});
