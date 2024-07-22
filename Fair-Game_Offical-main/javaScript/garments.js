let hoodieIndex = 0;
let tshirtIndex = 0;

function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById(`${section}-section`).style.display = 'block';
}

function changeSlide(n, type) {
    const slides = document.querySelectorAll(`.slides.${type} img`);
    if (type === 'hoodie') {
        hoodieIndex = (hoodieIndex + n + slides.length) % slides.length;
        slides.forEach(slide => slide.style.display = 'none');
        slides[hoodieIndex].style.display = 'block';
    } else if (type === 'tshirt') {
        tshirtIndex = (tshirtIndex + n + slides.length) % slides.length;
        slides.forEach(slide => slide.style.display = 'none');
        slides[tshirtIndex].style.display = 'block';
    }
}

function toggleInfo(infoId, headerElement) {
    const infoElement = document.getElementById(infoId);
    const isActive = infoElement.style.display === 'block';
    document.querySelectorAll('.header-info').forEach(info => info.style.display = 'none');
    document.querySelectorAll('.header').forEach(header => header.classList.remove('active'));
    if (!isActive) {
        infoElement.style.display = 'block';
        headerElement.classList.add('active');
    }
}
