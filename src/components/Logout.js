import React, { useEffect, useState } from "react";

const Logout = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut) {
      console.log("the user token should be cleared: ", props.userToken);
      // perform any other logout related actions here
    }
  }, [isLoggedOut]);

  const handleLogout = () => {
    console.log("you successfully logged out");
    props.setUserToken("");
    console.log("the user token is now: ", props.userToken);
    localStorage.clear();
    setIsLoggedOut(true);
  };
  return (
    <>
      {!isLoggedOut && (
        <button name="logout" onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  );
};

export default Logout;
