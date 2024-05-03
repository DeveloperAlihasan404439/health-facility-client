"use client";
import Image from "next/image";
import "./login.css";
import "remixicon/fonts/remixicon.css";
import signup from "../../assets/Authontication/singup.svg";
import login from "../../assets/Authontication/login.svg";
import { useEffect, useState } from "react";
export default function AuthenticationPage() {
  const [signIn, setSignIn] = useState(null);

  function hendelToggle(toggle) {
    if (toggle === "sign-up") {
      return setSignIn("sign-up");
    }
    return setSignIn("sign-in");
  }

  useEffect(() => {
    const signUpBtn = document.querySelector("#sign-up-btn");
    const signInBtn = document.querySelector("#sign-in-btn");
    const container = document.querySelector(".container-login");

    signUpBtn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    signInBtn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);
  return (
    <section className="container-login">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sing-in-form">
            <h1 className="title">Sign in</h1>
            <div className="input-field">
              <i className="ri-user-fill"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="ri-lock-password-fill"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn-authentication login"
            />
            <p className="social-text">Or Sign In with Social Platforms</p>
            <div className="social-media">
              <button className="social-icon">
                <i className="ri-facebook-circle-fill"></i>
              </button>
              <button className="social-icon">
                <i className="ri-github-fill"></i>
              </button>
              <button className="social-icon">
                <i className="ri-google-fill"></i>
              </button>
            </div>
          </form>
          {/* sign up  */}
          <form action="#" className="sing-up-form">
            <h1 className="title">Sign up</h1>
            <div className="input-field">
              <i className="ri-user-fill"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="ri-mail-check-fill"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="ri-lock-password-fill"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="btn-authentication login"
            />
            <p className="social-text">Or Sign Up with Social Platforms</p>
            <div className="social-media">
              <button className="social-icon">
                <i className="ri-facebook-circle-fill"></i>
              </button>
              <button className="social-icon">
                <i className="ri-github-fill"></i>
              </button>
              <button className="social-icon">
                <i className="ri-google-fill"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panls-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem esse minima
            </p>
            <button className="btn-authentication transparent" id="sign-up-btn">
              Sign Up
            </button>
          </div>
          <Image
            width="auto"
            height="auto"
            src={signup}
            alt="sign up"
            className="image"
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem esse minima
            </p>
            <button className="btn-authentication transparent" id="sign-in-btn">
              LogIn
            </button>
          </div>
          <Image
            width="auto"
            height="auto"
            src={login}
            alt="sign up"
            className="image"
          />
        </div>
      </div>
    </section>
  );
}
