import { GoogleAuthProvider } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../Provider/AuthContext";
import { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const [email, setEmail] = useState("");
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("login location", location?.state);
  
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in with Google!");
        // setUser(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("Login Button Clicked");

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful!");
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
        // setError(error.message);
      });

  };

  return (
    <div>
      <title>Login - RentWheels</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Login and experience the best car marketplace ever!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <p className="link">
                      <Link state={{ email }} to="/forgotpassword">
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p>
                      New Here?{" "}
                      <Link to="/register" className="text-blue-500">
                        Register!
                      </Link>
                    </p>
                  </div>
                  <button className="btn btn-secondary mt-4">Login</button>
                </fieldset>
                <button
                type="button"
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full mt-2"
                >
                  Login With Google
                </button>

                <div>
                  {/* {success && <p className="text-green-500">{success}</p>}
                  {error && <p className="text-red-500">{error}</p>} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div>{user && <h2>{user.displayName}</h2>}</div> */}
    </div>
  );
};

export default Login;