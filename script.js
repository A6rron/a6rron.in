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

        // Function to apply the stored theme on page load
        function applyStoredTheme() {
            var storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'light') {
                document.body.classList.add('light-mode');
            } else {
                document.body.classList.remove('light-mode');
            }
        }

        // Apply the theme when the page loads
        window.addEventListener('DOMContentLoaded', applyStoredTheme);