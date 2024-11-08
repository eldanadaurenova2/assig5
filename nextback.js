const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedTheme = localStorage.getItem('theme');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('savedEmailDisplay').textContent = `Saved Email: ${savedEmail}`;
        console.log('Email восстановлен:', savedEmail);
    }

    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
        document.getElementById('savedPassword').textContent = `Saved Password: ${savedPassword}`;
        console.log('Password восстановлен:', savedPassword);
    }

    if (savedTheme === 'day-theme') {
        document.body.classList.add('day-theme');
        document.getElementById('savedThemeDisplay').textContent = 'Current Theme: Day Theme';
    } else {
        document.body.classList.remove('day-theme');
        document.getElementById('savedThemeDisplay').textContent = 'Current Theme: Night Theme';
    }

    showStep(currentStep);
});

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.style.display = index === stepIndex ? 'block' : 'none';
    });
}

document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorMessage = document.getElementById('error-message');

        if (currentStep === 0 && !validateEmail(email)) {
            errorMessage.textContent = 'Пожалуйста, введите корректный email.';
            return;
        }

        if (currentStep === 1 && password.length < 6) {
            errorMessage.textContent = 'Пароль должен содержать минимум 6 символов.';
            return;
        }

        if (currentStep === 2 && password !== confirmPassword) {
            errorMessage.textContent = 'Пароли не совпадают.';
            return;
        }

        if (currentStep === 0) {
            localStorage.setItem('email', email);
            document.getElementById('savedEmailDisplay').textContent = `Saved Email: ${email}`;
            console.log('Email сохранен:', email);
        }

        if (currentStep === 1) {
            localStorage.setItem('password', password);
        }

        errorMessage.textContent = '';
        currentStep++;
        showStep(currentStep);
    });
});

document.querySelectorAll('.back').forEach(button => {
    button.addEventListener('click', () => {
        currentStep--;
        showStep(currentStep);
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Форма успешно отправлена!');

    localStorage.removeItem('email');
    localStorage.removeItem('password');
    document.getElementById('savedEmailDisplay').textContent = 'Saved Email: None';
    document.getElementById('savedPassword').textContent = 'Saved Password: None';
    console.log('Email и Password удалены из Local Storage');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.onclick = () => {
    document.body.classList.toggle('day-theme');
    const theme = document.body.classList.contains('day-theme') ? 'day-theme' : 'night-theme';
    localStorage.setItem('theme', theme);

    if (theme === 'day-theme') {
        document.getElementById('savedThemeDisplay').textContent = 'Current Theme: Day Theme';
    } else {
        document.getElementById('savedThemeDisplay').textContent = 'Current Theme: Night Theme';
    }

    console.log('Тема сохранена:', theme);
};
