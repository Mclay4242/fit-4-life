import React from 'react'
import '../assets/CSS/membership.css'
//import '../JS/index'


export default function Login() {
  return (
    <React.Fragment>
        <div class="hero">
      <div class="hero__container">
        <div class="container">
          <form action="PHP/login.php" method="post" class="form" id="login">
            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
              <input
                type="text"
                class="form__input"
                autofocus
                placeholder="Username or email"
                name="email"
              />
              <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
              <input
                type="password"
                class="form__input"
                autofocus
                placeholder="Password"
                name="password"
              />
              <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continue</button>
            <p class="form__text">
              <a href="/" class="form__link">Forgot your password?</a>
            </p>
            <p class="form__text">
              <a class="form__link" href="./" id="linkCreateAccount"
                >Don't have an account? Create account</a
              >
            </p>
          </form>
          <form
            action="PHP/register.php"
            method="post"
            class="form form--hidden"
            id="createAccount"
          >
            <h1 class="form__title">Create Account</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
              <input
                type="text"
                class="form__input"
                autofocus
                placeholder="Username"
                name="username"
              />
              <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
              <input
                type="email"
                class="form__input"
                autofocus
                placeholder="Email address"
                name="email"
              />
              <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
              <input
                type="password"
                class="form__input"
                autofocus
                placeholder="Password"
                name="password"
              />
              <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
              <input
                type="password"
                class="form__input"
                autofocus
                placeholder="Confirm password"
                name="confirm-password"
              />
              <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continue</button>
            <p class="form__text">
              <a class="form__link" href="./" id="linkLogin"
                >Already have an account? Sign in</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
    <div class="about"></div>

    </React.Fragment>
  )
}
