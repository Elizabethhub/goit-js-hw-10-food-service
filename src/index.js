import './styles.css';
import menu from './menu.json';
import createCard from './templates/card.hbs';

const toggleRef = document.querySelector('#theme-switch-toggle');
const menuList = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');

console.log(createCard(menu));

menuList.insertAdjacentHTML('afterbegin', createCard(menu));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const theme = localStorage.getItem('theme') || LIGHT;

updatePageTheme(theme);

toggleRef.checked = theme === DARK;

toggleRef.addEventListener(`change`, toggleTheme);

function toggleTheme(event) {
  let theme = LIGHT;
  if (event.target.checked) {
    theme = DARK;
  }
  localStorage.setItem('theme', theme);
  updatePageTheme(theme);
}

function updatePageTheme(theme) {
  bodyRef.classList = theme;
}
