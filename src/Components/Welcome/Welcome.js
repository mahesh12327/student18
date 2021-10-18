import { React, useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./Welcome.css";

const Welcome = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);

  const signupHandler = () => {
    setIsSignup(true);
    setIsLogin(false);
  };
  const loginHandler = () => {
    setIsSignup(false);
    setIsLogin(true);
  };
  return (
    <div className="Welcome rounded">
      <div className="introduction">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple Student app, where we can perform CURD operations on
          Student Registrations.
        </p>
        <hr className="my-4"></hr>
        <p>
          Signup for new Registrations, If Registered Login to perform
          operations in the Student app.
        </p>
      </div>
      <div>
        {isLogin && (
          <Login
            signup={signupHandler}
            error={props.error}
            loginDetails={props.loginDetails}
            changeNotification={props.changeNotification}
          ></Login>
        )}
        {isSignup && (
          <Signup
            login={loginHandler}
            signupDetails={props.signupDetails}
          ></Signup>
        )}
      </div>
    </div>
  );
};

export default Welcome;

// login={props.login}
// isLogin={props.isLogin}
// logout={props.logout}
