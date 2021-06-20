const btn = document.getElementById('theme-toggler');

btn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  console.log(currentTheme);
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
