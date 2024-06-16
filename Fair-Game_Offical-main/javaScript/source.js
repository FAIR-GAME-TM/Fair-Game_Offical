document.querySelectorAll('.item h3').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "flex";
            header.classList.remove('active');
        } else {
            content.style.display = "none";
            header.classList.add('active');
        }
    });
});