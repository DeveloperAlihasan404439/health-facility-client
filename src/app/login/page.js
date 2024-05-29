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
import Link from "next/link";
import Social from "../../components/Shared/social/Social";

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

  const hendelLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
          <form onSubmit={(e) => hendelLoginForm(e)} className="sing-in-form">
            <spam className="home-back">
              <Link href="/" className="link-back">
                {" "}
                <i className="ri-corner-up-left-line"></i>Go Back
              </Link>
            </spam>
            <h1 className="title">Sign in</h1>
            <div className="input-field">
              <i className="ri-user-fill"></i>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i className="ri-lock-password-fill"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn-authentication login"
            />
            <p className="social-text">Or Sign In with Social Platforms</p>
             {/* social icons section designe code start  */}
             <Social />
            {/* social icons section designe code end  */}
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
            <div className="file">
              <input type="file" {...register("file", { required: true })} />
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="btn-authentication login"
            />
            <p className="social-text">Or Sign Up with Social Platforms</p>
            {/* social icons section designe code start  */}
            <Social />
            {/* social icons section designe code end  */}
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
            <h3>Sign Up Now !</h3>
            <p>
              Use strong, unique passwords, enable two-factor authentication,
              and beware of phishing. Regularly monitor account activity for
              added security.
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
            <h3>Welcome Back ! Health facility medical</h3>
            <p>
              Create a strong password, use a unique email, and consider
              enabling two-factor authentication for secure and hassle-free
              sign-ups.
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
