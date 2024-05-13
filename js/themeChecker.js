const key = 'theme'

if (localStorage.getItem(key) === 'light') {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
} else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
}