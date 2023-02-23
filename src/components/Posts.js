import { getMyPosts, sendUserMessage } from "../api";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { DeletePost } from "./Delete";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);
  const [messageState, setMessageState] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, [props.posts, deletedPost]);

  const handleSubmit = async (e) => {
    await DeletePost(e);
    setDeletedPost(e);
  };
  const handleMessageChange = (postId, message) => {
    setMessageState({ ...messageState, [postId]: message });
  };

  const sendMessage = async (postID, message) => {
    console.log("Post ID:", postID, "Message:", message);
    await sendUserMessage(postID, message);
  };

  return (
    <>
      <h1> Posts</h1>
      {posts.map((post) => (
        <div className="Posts" key={post._id}>
          <h2>{post.title}</h2>
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
          {post.isAuthor == true && (
            <button onClick={() => handleSubmit(post._id)}>Delete Post</button>
          )}
          {post.isAuthor == false && (
            <>
              <label>
                Send Message:
                <br></br>{" "}
                <textarea
                  name="message"
                  value={messageState[post._id]}
                  rows={4}
                  cols={40}
                  onChange={(e) =>
                    handleMessageChange(post._id, e.target.value)
                  }
                />
              </label>
              <br></br>
              <button
                onClick={() => sendMessage(post._id, messageState[post._id])}
              >
                Send Message
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
};

// console.log(posts)

export default Posts;
