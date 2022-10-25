

// Display Mobile Menu
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const navbar = document.querySelector(".navbar");
// const hero = document.querySelector(".hero");

const moveNavbar = () => {
  if (window.scrollY > 500) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

window.addEventListener("scroll", moveNavbar);

// error/sucess messages (login)
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success, form__message--error"
  );
  messageElement.classList.add("form__message--`type`");
}

// function setInputError(inputElement, message) {
//   inputElement.classList.add("form__input--error");
//   inputElement.parentElement.querySelector(
//     ".form__input-error-message"
//   ).textContent = message;
// }

// Login/sign up toggle
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    createAccountForm.classList.add("form--hidden");
    loginForm.classList.remove("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //figure out login... AJAX? Fetch?

    setFormMessage(loginForm, "error", "Invalid username/password");
  });
});
