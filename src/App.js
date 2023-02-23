import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CreatePost from "./components/CreatePost";
import MyPosts from "./components/MyPosts";
import Search from "./components/Search";
import { getPosts } from "./api";
import React, { useState, useEffect } from "react";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState("");

  useEffect(() => {
    if (userToken) {
    } else {
      setUserToken("");
    }
    if (localStorage.getItem("username") === null) {
      setLoggedIn("");
    } else {
      setLoggedIn(localStorage.getItem("username"));
    }
    console.log(loggedIn, "is active");
  }, [userToken, loggedIn]);

  // useEffect(() => {
  //   console.log("New post coming in:", posts);
  //   // const fetchData = async () => {
  //   //   const allPosts = await getPosts();
  //   //   setPosts(allPosts.data.posts);
  //   getPosts();
  // }, [posts]);

  return (
    <>
      {loggedIn ? (
        <h1>Hello {loggedIn} Welcome to Stranger's Things </h1>
      ) : (
        <h1>Welcome to Stranger's Things</h1>
      )}
      {console.log("App.JS Page token:", userToken)}
      <div className="App">
        <Search></Search>
        <Posts setPost={setPosts} posts={posts}></Posts>
      </div>
      <div className="myPosts">
        {loggedIn && (
          <MyPosts
            loggedIn={loggedIn}
            setPost={setPosts}
            posts={posts}
          ></MyPosts>
        )}
      </div>
      <div className="register">{!userToken && <Register></Register>}</div>
      <div className="forms">
        {userToken ? (
          <Logout
            userToken={userToken}
            setUserToken={setUserToken}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          ></Logout>
        ) : (
          <Login
            userToken={userToken}
            setUserToken={setUserToken}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          ></Login>
        )}
      </div>
      <div>
        {userToken && (
          <CreatePost setPosts={setPosts} posts={posts}></CreatePost>
        )}
      </div>
    </>
  );
}

export default App;
