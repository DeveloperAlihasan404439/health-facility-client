"use client";
import Image from "next/image";
import "./login.css";

// use the remix icon package import
import "remixicon/fonts/remixicon.css";

// log in and sig up svg images import
import signup from "../../assets/Authontication/singup.svg";
import login from "../../assets/Authontication/login.svg";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

export default function AuthenticationPage() {
  
  // cntainer css and new class added the code in class name sign-up-mode
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

  // use the react hooks form
  const { register, handleSubmit, reset } = useForm();
  // create the hendel login function code  start
  const hendelLoginForm = (data) => {
    console.log(data);
  };

  // create the hendel sign up function code  start
  const hendelSignUpForm = (data) => {
    console.log(data);
  };
  return (
    <section className="container-login">
      <div className="forms-container">
        {/* authontication login and signup form code start */}
        <div className="signin-signup">
          {/* authontication login form code start */}
          <form
            onSubmit={handleSubmit(hendelLoginForm)}
            className="sing-in-form"
          >
            <h1 className="title">Sign in</h1>
            <div className="input-field">
              <i className="ri-user-fill"></i>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="ri-lock-password-fill"></i>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
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
          {/* authontication login form code end */}

          {/* authontication sign up form code start */}
          <form
            onSubmit={handleSubmit(hendelSignUpForm)}
            className="sing-up-form"
          >
            <h1 className="title">Sign up</h1>
            <div className="input-field">
              <i className="ri-user-fill"></i>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <i className="ri-mail-check-fill"></i>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="ri-lock-password-fill"></i>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
              />
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
          {/* authontication sign up form code end */}
        </div>

        {/* authontication login and signup form code end */}
      </div>

      {/* text container section start the code  */}
      <div className="panls-container">
        {/* left panel section start the code  */}
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
        {/* left panel section end the code  */}
        {/* right panel section start the code  */}

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
        {/* right panel section end the code  */}
      </div>

      {/* text container section end the code  */}
    </section>
  );
}
