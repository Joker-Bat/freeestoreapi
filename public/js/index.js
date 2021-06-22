const themeToggler = document.getElementById('toggle');
const navbarToggler = document.getElementById('navbarToggler');
const navbarLinks = document.getElementById('navbarLinks');

// Check if user has theme preference in localStorage
const getUserTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    themeToggler.checked = true;
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else if (currentTheme === 'light') {
    themeToggler.checked = false;
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
};
getUserTheme();

// Theme Toggler Button Action
if (themeToggler)
  themeToggler.addEventListener('change', (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

// Navbar Toggler
if (navbarToggler)
  navbarToggler.addEventListener('click', () => {
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
      navbarLinks.classList.remove('show');
    } else {
      navbarToggler.classList.add('show');
      navbarLinks.classList.add('show');
    }
  });
