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

// Function for all-posts
function generateBlogHTML(blogs) {
    const blogContainer = document.querySelector('.notes-container');

    blogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.className = 'notes';
        
        const blogTitle = document.createElement('h2');
        blogTitle.textContent = blog.title;
        blogDiv.appendChild(blogTitle);

        const blogMeta = document.createElement('p');
        blogMeta.innerHTML = `<em>By ${blog.author} on ${blog.date}</em>`;
        blogDiv.appendChild(blogMeta);

        const blogContent = document.createElement('p');
        blogContent.textContent = blog.content;
        blogDiv.appendChild(blogContent);

        blogContainer.appendChild(blogDiv);
    });
}

// Fetch JSON data and generate the all-posts HTML on page load
document.addEventListener('DOMContentLoaded', () => {
    fetch('/pages/data/all-posts.json')
        .then(response => response.json())
        .then(blogs => {
            generateBlogHTML(blogs);
        })
        .catch(error => console.error('Error loading JSON data:', error));
});

