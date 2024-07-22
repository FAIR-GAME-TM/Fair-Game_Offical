document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'admin' && password === 'password') {
        window.location.href = './portfolio.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

