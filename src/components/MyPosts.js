import { useEffect, useState } from "react";
import { BASE_URL, getMyPosts } from "../api";
import { DeletePost } from "./Delete";

const MyPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);
  const [username, setUsername] = useState("");
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
      {posts
        .filter((post) => post.isAuthor == true)
        .map((post) => (
          <div className="Posts" key={post._id}>
            <h1>{post.author.username}'s Posts</h1>
            <h2>{post.title} </h2>
            <p>Posted By: {post.author.username}</p>
            <h3>
              Item Description:
              <br />
              {post.description}
            </h3>
            <h4>Asking Price: {post.price}</h4>
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
