
function playSound() {
    const audio = new Audio('sound3/sound.mp3');
    audio.play();
}


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', playSound);
    });
});
const themeToggle = document.getElementById('themeToggle');

