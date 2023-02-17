import { getPosts } from "../api";
import { useEffect, useState } from "react";
import { BASE_URL, getMyPosts } from "../api";
import { DeletePost } from "./Delete";

const MyPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
      //   console.log("username:", allPosts.data.username);
      //   localStorage.setItem("username", allPosts.data.username);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, [props.posts]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, [deletedPost]);

  const handleSubmit = async (e) => {
    await DeletePost(e);
    setDeletedPost(e);
  };

  return (
    <>
      <h1>The active user's Posts</h1>
      {posts
        .filter((post) => post.isAuthor == true)
        .map((post) => (
          <div className="Posts" key={post._id}>
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
              active:
              {post.active}
            </p>
            <button onClick={() => handleSubmit(post._id)}>
              Delete (can only delete active user's)
            </button>
          </div>
        ))}
    </>
  );
};

// console.log(posts)

export default MyPosts;
