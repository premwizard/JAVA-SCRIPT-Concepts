// Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service Worker Registered');
    }).catch((error) => {
        console.error('Service Worker Registration Failed:', error);
    });
}

// Form Handling
document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('User Registered:', { username, email, password });
    alert('Registration Successful!');
});
