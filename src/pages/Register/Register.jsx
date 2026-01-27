import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
// import { AuthContext } from "../../Provider/AuthProvider.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(
      "Register Button Clicked",
      e.target.email.value,
      e.target.password.value,
    );
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;
    const role = e.target.role.value;

    // console.log("Role selected:", role);
    // return;

    setSuccess(false);
    setError("");

    if (!name || !email || !photoURL || !password) {
      toast.error("You must fill all the input fields to register!");
      return;
    }
    if (!checked) {
      toast.error("You must accept terms and conditions");
      return;
    }
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.",
      );
      return;
    }

    const formData = {
      name,
      photoURL,
      email,
      password,
      role
    };
    // createUser(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("New user created", result.user);
        toast.success("Registration successful!");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            axios
              .post("http://localhost:3000/users", formData)
              .then((res) => {
                console.log("User data saved:", res.data);
              })
              .catch((err) => {
                console.log("Error saving user data:", err);
              });
          })
          .catch((error) => console.log("Profile update error:", error));

        // sendEmailVerification(result.user)
        //   .then(() => {
        //     alert("Verification email sent");
        //   })
        //   .catch((error) => {
        //     alert(error.message);
        //   });
      })
      .catch((error) => {
        (error) => console.log(error);
        toast.error(error.message);
      });
  };
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <title>Register - AssetVerse</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Register and enjoy browsing our car rental service!
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Your Name"
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name="photoURL"
                    className="input"
                    placeholder="Photo URL"
                  />
                  <select name="role" defaultValue="Pick a role" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option value='manager'>Manager</option>
                    <option value='buyer'>Buyer</option>
                  </select>
                  <label className="label">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="input"
                      name="password"
                      placeholder="Password"
                    />
                    <button
                      onClick={handleShowPassword}
                      className="btn btn-xs top-2 absolute right-6"
                    >
                      {showPassword ? (
                        <FaEyeSlash className=" top-4 right-8" />
                      ) : (
                        <FaEye className=" top-4 right-8" />
                      )}
                    </button>
                  </div>
                  <div>
                    <fieldset className="fieldset bg-base-100 w-full rounded-box">
                      <label className="label">
                        <input
                          type="checkbox"
                          name="terms"
                          className="checkbox"
                        />
                        Accept Terms and Conditions
                      </label>
                    </fieldset>
                  </div>
                  <div>
                    <p>
                      Already have an account?{" "}
                      <Link className="text-blue-500" to="/login">
                        Login
                      </Link>
                    </p>
                  </div>
                  <button className="btn btn-secondary mt-4">Register</button>
                </fieldset>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Yup, successful</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
