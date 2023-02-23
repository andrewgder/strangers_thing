import React, { useState, useEffect } from "react";
import { getMyPosts } from "../api";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getMyPosts();
      setPosts(allPosts.data.posts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.trim().length === 0) {
      setSearchResults([]);
    } else if (searchTerm.trim().length > 0) {
      const newPosts = posts.filter((post) => {
        console.log("post: ", post.title);
        console.log("filter val: ", searchTerm);
        console.log("contains: ", post.title.includes(searchTerm));
        return post.title
          .trim()
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase());
      });
      console.log("filter post: ", newPosts);
      setSearchResults(newPosts);
    }
  }, [searchTerm, posts]);

  return (
    <div>
      <label>Search: </label>
      <input
        type="text"
        placeholder="Search Posts"
        onChange={handleChange}
        value={searchTerm}
      />
      {searchResults.map((post) => (
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
          {post.willDeliver === false || null ? (
            <p>{"Will NOT Deliver"}</p>
          ) : (
            <p>{"Will Deliver"}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Search;
