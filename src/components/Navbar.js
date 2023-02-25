import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [displayVal, setDisplayVal] = useState(localStorage.getItem("token"));
  useEffect(() => {
    // console.log("token navbar: ", localStorage.getItem("token"));
    setDisplayVal(localStorage.getItem("token"));
  }, []);

  const links = [
    {
      key: "posts",
      route: "/posts",
      text: "Posts",
      shouldDisplay: true,
    },
    {
      key: "profile",
      route: "/profile",
      text: "Profile",
      shouldDisplay: displayVal,
    },
    {
      key: "login",
      route: "/login",
      text: "Login",
      shouldDisplay: !displayVal,
    },
    {
      key: "logout",
      route: "/login",
      text: "Log Out",
      shouldDisplay: displayVal,
      onClick: () => localStorage.clear(),
    },
    {
      key: "register",
      route: "/register",
      text: "Register",
      shouldDisplay: !displayVal,
    },
  ];
  return (
    <div className="NavBarBody">
      <Link to={"/"} className="NavBarTitle">
        Welcome
      </Link>
      <div className="NavBarMenuItems">
        {links.map((link) => {
          const { key, route, text, shouldDisplay, onClick = () => {} } = link;
          if (shouldDisplay) {
            return (
              <div key={key}>
                <Link className="NavLink" to={route} onClick={onClick}>
                  {text}
                </Link>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Navbar;
