const btn = document.querySelector('.theme-btn');
const key = 'theme'
localStorage.getItem(key) ?? localStorage.setItem(key, 'light')

btn.addEventListener('click', () => {
    if (localStorage.getItem(key) === 'light') {
        localStorage.setItem(key, 'dark');
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
    else {
        localStorage.setItem(key, 'light');
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
})