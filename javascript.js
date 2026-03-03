document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const themeToggle = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if (theme === 'dark') {
            themeStylesheet.href = 'styles2.css';
            themeToggle.textContent = '☀️ Light';
        } else {
            themeStylesheet.href = 'styles.css';
            themeToggle.textContent = '🌙 Dark';
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const next = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });

    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Check if passwords match
        if (passwordInput.value !== confirmPasswordInput.value) {
            // Show the error message
            errorMessage.style.display = 'block';
            // Highlight the password fields with red border
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
        } else {
            // Hide the error message if passwords match
            errorMessage.style.display = 'none';
            // Reset the password fields border color
            passwordInput.style.borderColor = '';
            confirmPasswordInput.style.borderColor = '';

            // Optionally, submit the form
            form.submit();
        }
    });

    // Reset error message and border colors when user starts typing
    confirmPasswordInput.addEventListener('input', () => {
        errorMessage.style.display = 'none';
        passwordInput.style.borderColor = '';
        confirmPasswordInput.style.borderColor = '';
    });
});
