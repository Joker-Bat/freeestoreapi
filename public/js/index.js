const themeToggler = document.getElementById('toggle');
const navbarToggler = document.getElementById('navbarToggler');
const navbarLinks = document.getElementById('navbarLinks');
const sectionLinks = document.getElementById('sectionLinks');
const copyIcons = document.querySelectorAll('.code .copy-icon');

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
if (navbarToggler) {
  navbarToggler.addEventListener('click', () => {
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
      navbarLinks.classList.remove('show');
    } else {
      navbarToggler.classList.add('show');
      navbarLinks.classList.add('show');
    }
  });
  // Close navbar when click outside the navbar
  document.body.addEventListener('click', (e) => {
    if (!e.target.closest('#navbarToggler')) {
      navbarToggler.classList.remove('show');
      navbarLinks.classList.remove('show');
    }
  });
}

if (sectionLinks) {
  const setStyle = () => {
    const aObj = sectionLinks.getElementsByTagName('a');
    for (i = 0; i < aObj.length; i++) {
      aObj[i].className = '';
      if (document.location.href.indexOf(aObj[i].href) >= 0) {
        aObj[i].className = 'active';
      }
    }
  };

  window.onload = setStyle;

  window.addEventListener('hashchange', setStyle);
}

if (copyIcons) {
  let changeIcon;
  copyIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      // change the icon
      e.target.parentElement.childNodes[0].attributes[0].value =
        '/images/docs/check.svg';
      changeIcon = setTimeout(() => {
        e.target.parentElement.childNodes[0].attributes[0].value =
          '/images/docs/copy.svg';
      }, 2000);
      const curEl = e.target.closest('.code');
      navigator.clipboard.writeText(curEl.innerText);
    });
  });
  clearTimeout(changeIcon);
}
