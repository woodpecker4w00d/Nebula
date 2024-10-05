function runMyFunction() {
  openPopup()
}

const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const correctPassword = 'test';

form.addEventListener('submit', (event) => {
  if (passwordInput.value !== correctPassword) {
    event.preventDefault();
    alert('BAD PASSWORD RETARD');
  }
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}