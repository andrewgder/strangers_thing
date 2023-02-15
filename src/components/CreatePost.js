import React, { useState, useEffect } from "react";
import { createPost } from "../api";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);

  return (
    <>
      <h2> Create New Post form</h2>
      <form
        id="createPost"
        onSubmit={async (event) => {
          // write code here
          console.log("WILL DELIVER VALUE:", willDeliver);
          event.preventDefault();
          try {
            const result = await createPost(
              title,
              description,
              price,
              location,
              willDeliver
            );
            console.log(result);
          } catch (err) {
            console.error(err);
          } finally {
            setTitle("");
            setDescription("");
            setPrice("");
            setLocation("");
            setWillDeliver(false);
          }
        }}
      >
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Will Deliver?:
          <select
            onChange={(e) => {
              setWillDeliver(e.target.value);
              console.log(willDeliver);
            }}
          >
            <option value="true"> Yes</option>
            <option value="false"> No</option>
          </select>
        </label>
        <button name="createPost">Submit Post</button>
      </form>
    </>
  );
};

export default CreatePost;
