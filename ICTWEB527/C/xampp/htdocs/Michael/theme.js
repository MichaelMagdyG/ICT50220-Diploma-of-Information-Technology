const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    
    themeToggle.textContent = isDarkMode ? '🌞' : '🌙';
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
