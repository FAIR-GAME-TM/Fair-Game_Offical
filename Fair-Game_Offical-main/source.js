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



document.getElementById('hoodiesButton').addEventListener('click', function() {
    document.querySelector('.section').style.display = 'block';
    document.getElementById('shirt-section').style.display = 'none';
});

document.getElementById('tShirtButton').addEventListener('click', function() {
    document.querySelector('.section').style.display = 'none';
    document.getElementById('shirt-section').style.display = 'block';
});