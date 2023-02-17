import { getPosts } from "../api";
import { useEffect, useState } from "react";
import { BASE_URL } from "../api";
import { DeletePost } from "./Delete";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [deletedPost, setDeletedPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, []);
  useEffect(
    () => {
      const fetchData = async () => {
        const allPosts = await getPosts();
        setPosts(allPosts.data.posts);
      };
      fetchData();
    },
    [props.posts],
    [deletedPost]
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const allPosts = await getPosts();
  //     setPosts(allPosts.data.posts);
  //   };
  //   fetchData();
  // }, [deletedPost]);

  const handleSubmit = async (e) => {
    await DeletePost(e);
    console.log("set posts to:");
    setDeletedPost(e);
  };

  return (
    <>
      <h1>All Posts</h1>
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
          {post.author._id === localStorage.getItem("token") && (
            <button onClick={() => handleSubmit(post._id)}>
              Delete (can only delete active user's)
            </button>
          )}
        </div>
      ))}
    </>
  );
};

// console.log(posts)

export default Posts;
