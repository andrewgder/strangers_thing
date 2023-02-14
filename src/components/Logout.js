import React, { useEffect, useState } from "react";

const Logout = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (isLoggedOut) {
      localStorage.clear();
      // perform any other logout related actions here
    }
  }, [isLoggedOut]);

  const handleLogout = () => {
    console.log("you successfully logged out");
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
