const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation__list');
let listItems = document.querySelectorAll('a.navigation__item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  navigation.classList.toggle('navigation--active');
});

document.querySelectorAll('.navigation__item').forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
  });
});
