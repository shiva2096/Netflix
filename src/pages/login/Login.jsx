import React from 'react'
import "./login.scss"

const Login = () => {

  return (
    <div className="login">
        <img className="background" src="/images/register_bg.jpeg" alt="" />
        <div className="top">
            <div className="wrapper">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            </div>
        </div>
        <div className="Navbar" >
            
        </div>
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number"/>
                <input type="password" placeholder="Password" />
                <button className="loginButton" >Sign In</button>
                <span>
                    New to Netflix? <b>Sign up now.</b>
                </span>
                <small>
                    This page is protected by Goolge reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  );
}

export default Login