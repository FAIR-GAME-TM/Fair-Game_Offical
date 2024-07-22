document.querySelectorAll('.read-more-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.style.display = 'none';
            });
            dropdownContent.style.display = 'block';
        }
    });
});

window.addEventListener('click', function(e) {
    if (!e.target.matches('.read-more-link')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    }
});

function toggleChild(element) {
    const childText = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    
    if (childText.style.display === "block") {
        childText.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        childText.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
    }
    
    element.classList.toggle('active');
}


// Newsletter submission
function submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Email submitted: ${email}`);
}
