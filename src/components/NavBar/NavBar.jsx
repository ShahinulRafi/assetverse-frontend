import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Nav = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then()
      .catch((error) => alert(error.message));
  };

  const links = (
    <>
      <li>
        <a>
          <NavLink to="/">Home</NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink to="/browsecars">2</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/addcar">3</NavLink>
        </a>
      </li>

      <li>
        <a>
          <NavLink to="/mybookings">4</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/mylistings">5</NavLink>
        </a>
      </li>

      {user ? (
        <li>
          <NavLink to="/profile">6</NavLink>
        </li>
      ) : null}
    </>
  );

  return (
    <div className="">
      <div className="bg-base-100 shadow-sm">
        <div className="navbar  w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl -mx-4 md:mx-1">
              <NavLink to="/">AssetVerse</NavLink>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex gap-2 justify-between items-center">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn m-1">
                    <img
                      className="w-10 rounded"
                      title={user.displayName}
                      src={user.photoURL}
                      alt=""
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box -ml-12 z-1 w-40 p-2 shadow-sm"
                  >
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <a>{user.email}</a>
                    </li>
                    <li>
                      <a onClick={handleSignOut} className="btn">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <a className="btn">
                <NavLink to="/login">Login</NavLink>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;