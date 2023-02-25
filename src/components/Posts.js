import { getMyPosts, sendUserMessage } from "../api";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { DeletePost } from "./Delete";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);
  const [messageState, setMessageState] = useState({});
  const [messageDelivered, setMessageDelivered] = useState("");
  const navigate = useNavigate();

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
  }, [props.posts, deletedPost, messageDelivered]);

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
    setMessageState((prevMessageStates) => ({
      ...prevMessageStates,
      [postID]: "",
    }));
    alert("Message Delivered");
  };

  return (
    <>
      <h1> Stranger's Posts</h1>
      {props.loggedIn && <Link to={"/createPost"}>Create Post</Link>}
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
          {props.loggedIn && post.isAuthor == false && (
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
