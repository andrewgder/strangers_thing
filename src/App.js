import "./App.css";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import CreatePost from "./components/CreatePost";
import MyPosts from "./components/MyPosts";
import { getPosts } from "./api";
import React, { useState, useEffect } from "react";

function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem("token"));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (userToken) {
    } else {
      setUserToken("");
    }
  }, [userToken]);

  // useEffect(() => {
  //   console.log("New post coming in:", posts);
  //   // const fetchData = async () => {
  //   //   const allPosts = await getPosts();
  //   //   setPosts(allPosts.data.posts);
  //   getPosts();
  // }, [posts]);

  return (
    <>
      {console.log("App.JS Page token:", userToken)}
      <div className="App">
        <Posts setPost={setPosts} posts={posts}></Posts>
      </div>
      <div className="myPosts">
        <MyPosts setPost={setPosts} posts={posts}></MyPosts>
      </div>
      <div className="register">{!userToken && <Register></Register>}</div>
      <div className="forms">
        {userToken ? (
          <Logout userToken={userToken} setUserToken={setUserToken}></Logout>
        ) : (
          <Login userToken={userToken} setUserToken={setUserToken}></Login>
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
