import React from "react";
import LoginCSS from "../assets/CSS/membership.module.css";
//import "../JS/index.js";

export default function Login() {
  return (
    <>
      <div class={LoginCSS.hero}>
        <div class={LoginCSS.hero__container}>
          <div class={LoginCSS.container}>
            <form action="./" method="post" class={LoginCSS.form} id="login">
              <h1 class={LoginCSS.form__title}>Login</h1>
              <div class={LoginCSS.form__message}></div>
              <div class={LoginCSS.form__input__group}>
                <input
                  type="text"
                  class={LoginCSS.form__input}
                  autofocus
                  placeholder="Username or email"
                  name="email"
                />
                <div class={LoginCSS.form__input_error_message}></div>
              </div>
              <div class={LoginCSS.form__input__group}>
                <input
                  type="password"
                  class={LoginCSS.form__input}
                  autofocus
                  placeholder="Password"
                  name="password"
                />
                <div class={LoginCSS.form__input_error_message}></div>
              </div>
              <button class={LoginCSS.form__button} type="submit">
                Continue
              </button>
              <p class={LoginCSS.form__text}>
                <a href="/" class={LoginCSS.form__link}>
                  Forgot your password?
                </a>
              </p>
              <p class={LoginCSS.form__text}>
                <a
                  class={LoginCSS.form__link}
                  href="./register"
                  id="linkCreateAccount"
                >
                  Don't have an account? Create account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div class={LoginCSS.about}></div>
    </>
  );
}
