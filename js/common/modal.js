const modal = document.getElementsByClassName('js_modal');
const modalToggle = document.getElementsByClassName('js_modalClose');

const js_modal = () => {
  modal[0].classList.add('is_active');
}
for (let i = 0; i < modalToggle.length; i++) {
  modalToggle[i].addEventListener('click', () => {
    modal[0].classList.remove('is_active');
  })
}
