// Function to apply the stored theme as early as possible
(function() {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
})();

// Function to toggle theme and store preference
function toggleTheme() {
    var element = document.body;
    element.classList.toggle('light-mode');
    if (element.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

// Apply the theme when the page loads (optional, as a safety measure)
window.addEventListener('DOMContentLoaded', function() {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});


function goHome() {
    window.location.href = "/index.html"; // Replace "/" with the URL of your home page
}
