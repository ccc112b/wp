const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});