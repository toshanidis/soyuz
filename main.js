  
const logoBtn = document.querySelector('.header__logo-img');
const headerNav = document.querySelector('.header__nav');
const headerNavLink = document.querySelector('.header__nav-link');
let inputName = document.querySelector('.name');
let inputTel = document.querySelector('.tel');
let checkbox = document.querySelector('.form__input-checkbox');
const formBtn = document.querySelector('.form__btn');


function dataBase() {
  let newObj = {};
  
  let a = inputName.value;
  let b = inputTel.value;

  newObj[a] = b;
  console.log(newObj);
}

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
      formBtn.addEventListener('click', () => {
        dataBase();
        inputName.value = '';
        inputTel.value = '';

      });
  }
});

logoBtn.addEventListener('click', () => {
  if (headerNav.classList.contains('header__nav--active')) {
    logoBtn.style.transform = 'rotate(-110deg)';
    headerNav.classList.remove('header__nav--active');
  }
  else{
    logoBtn.style.transform = 'rotate(110deg)';
  logoBtn.style.transition = 'all 0.4s';
  headerNav.classList.add('header__nav--active');
  }
  
});

headerNavLink.addEventListener('click', (event)=> {
  event.defaultPrevented();
});


