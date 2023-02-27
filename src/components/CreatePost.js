import React, { useState } from "react";
import { BASE_URL } from "../api";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);
  const { posts, setPosts } = props;
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // write code here
    console.log("WILL DELIVER VALUE:", willDeliver);
    fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Create Post", result);
        setPosts(result);
        setTitle("");
        setDescription("");
        setPrice("");
        setLocation("");
        setWillDeliver(false);
      })
      .catch(console.error);
  };
  // try {
  //   const result = await createPost(
  //     title,
  //     description,
  //     price,
  //     location,
  //     willDeliver
  //   );
  //   console.log("Create post:", result);
  // } catch (err) {
  //   console.error(err);
  // } finally {
  //   setTitle("");
  //   setDescription("");
  //   setPrice("");
  //   setLocation("");
  //   setWillDeliver(false);
  //   setPosts([...posts, posts]);
  // }

  return (
    <>
      <h2> Create New Post form</h2>
      <form id="createPost" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>

        <label>
          Will Deliver?:
          <select
            onChange={(e) => {
              setWillDeliver(e.target.value);
            }}
          >
            <option value="true"> Yes</option>
            <option value="false"> No</option>
          </select>
        </label>

        <button className="createButton" name="createPost">
          Submit Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
