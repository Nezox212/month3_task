//Сверстай просто сайт и сделай переключатель темы:
// кнопка меняет фон страницы на тёмный/светлый, а выбранная тема сохраняется
// в localStorage. При следующем открытии страницы тема должна восстанавливаться из localStorage.

const buttonElement = document.querySelector('.theme');

let theme = localStorage.getItem('theme') || 'light';

if (theme === 'dark') {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    buttonElement.textContent = 'turn light mode';
}
else if (theme === 'light') {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    buttonElement.textContent = 'turn dark mode';
}

buttonElement.addEventListener('click', () => {
    if (theme === 'light') {
        theme = 'dark';

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        buttonElement.textContent = 'turn light mode';

        localStorage.setItem('theme', theme);
    }
    else if (theme === 'dark') {
        theme = 'light';

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        buttonElement.textContent = 'turn dark mode';

        localStorage.setItem('theme', theme);
    }
});