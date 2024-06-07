// Sidebar toggle functionality
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Topbar menu toggle functionality
const topbarMenu = document.querySelector('.topbar-menu');

document.querySelector('.menu-btn').addEventListener('click', () => {
    topbarMenu.style.display = topbarMenu.style.display === 'block' ? 'none' : 'block';
});
