import { useEffect, useState } from "react";
import { BASE_URL, getMyPosts } from "../api";
import { DeletePost } from "./Delete";

const MyPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
      console.log(allPosts.data.posts);
      //   console.log("username:", allPosts.data.username);
      //   localStorage.setItem("username", allPosts.data.username);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
      //   setMessages(allPosts.data.posts.messages);
    };
    fetchData();
  }, [props.posts, deletedPost]);

  useEffect(() => {
    const messageArray = posts.filter(
      (post) => post.isAuthor == true && post.messages.length >= 1
    );
    console.log("these are user's messages", messageArray);
    setMessages(messageArray);
  }, [posts]);

  const handleSubmit = async (e) => {
    await DeletePost(e);
    setDeletedPost(e);
  };

  return (
    <>
      <h1>{props.loggedIn}'s Posts</h1>
      {posts
        .filter((post) => post.isAuthor == true)
        .map((post) => (
          <div className="Posts" key={post._id}>
            <h2>{post.title} </h2>
            <p>Posted By: {post.author.username}</p>
            <p>
              Item Description:
              <br />
              {post.description}
            </p>
            <p>Asking Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>
              Delivery:
              {post.willDeliver === false || null
                ? " Will NOT Deliver"
                : " Will Deliver"}
            </p>
            <p>
              Messages:{" "}
              {post.messages.length === 0 ? (
                "No Messages"
              ) : (
                <ul>
                  {post.messages.map((message, index) => (
                    // console.log("message 1")
                    <li key={index} style={{ marginBottom: "10px" }}>
                      {"Message: "} {message.content} <br></br>
                      {"From: "} {message.fromUser.username}
                    </li>
                  ))}
                </ul>
              )}
            </p>
            <button onClick={() => handleSubmit(post._id)}>Delete Post</button>
          </div>
        ))}
    </>
  );
};

// console.log(posts)

export default MyPosts;
