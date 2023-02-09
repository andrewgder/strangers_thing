import { getPosts } from "../api";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, []);

  return posts.map((post) => (
    <div className="Posts" key={post._id}>
      <h1>All Posts</h1>
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
    </div>
  ));
};

// console.log(posts)

export default Posts;